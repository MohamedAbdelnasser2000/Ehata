import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "out");
const origin = "https://static-export.invalid";
const siteOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ehata-tech.vercel.app",
).origin;
const references = /\b(?:href|src|poster)=["']([^"'<>]+)["']/gi;
const ignoredProtocols = /^(?:https?:|mailto:|tel:|data:|blob:|javascript:)/i;
const htmlFiles = [];
const errors = [];
let checkedReferences = 0;
let checkedSocialImages = 0;

async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectHtml(filePath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(filePath);
    }
  }
}

function documentUrl(filePath) {
  const relativePath = path.relative(output, filePath).split(path.sep).join("/");
  const routePath = relativePath.endsWith("/index.html")
    ? relativePath.slice(0, -"index.html".length)
    : relativePath === "index.html"
      ? ""
      : relativePath;
  return new URL(`/${routePath}`, origin);
}

function resolveReference(reference, baseUrl) {
  const url = new URL(reference, baseUrl);
  if (url.origin !== origin || ignoredProtocols.test(reference) || reference.startsWith("#")) {
    return undefined;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return { error: `invalid URL encoding: ${reference}` };
  }

  const relativePath = pathname.replace(/^\/+/, "");
  const candidate = path.resolve(output, relativePath);
  if (candidate !== output && !candidate.startsWith(`${output}${path.sep}`)) {
    return { error: `path escapes export directory: ${reference}` };
  }

  return { path: candidate };
}

async function existsInExport(candidate) {
  try {
    const info = await stat(candidate);
    if (info.isFile()) return true;
    if (info.isDirectory()) {
      return (await stat(path.join(candidate, "index.html"))).isFile();
    }
  } catch {
    return false;
  }
  return false;
}

function getMetaContent(html, attributeName, attributeValue) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    if (
      new RegExp(`\\b${attributeName}=["']${attributeValue}["']`, "i").test(tag)
    ) {
      return tag.match(/\bcontent=["']([^"']*)["']/i)?.[1];
    }
  }
  return undefined;
}

async function checkSocialImage(
  html,
  filePath,
  baseUrl,
  attributeName,
  attributeValue,
) {
  const image = getMetaContent(html, attributeName, attributeValue);
  const relativeFile = path.relative(root, filePath);
  if (!image) {
    errors.push(`${relativeFile}: missing ${attributeValue} metadata`);
    return;
  }

  let url;
  try {
    url = new URL(image, siteOrigin);
  } catch {
    errors.push(`${relativeFile}: invalid ${attributeValue} URL: ${image}`);
    return;
  }

  if (url.origin !== siteOrigin) {
    errors.push(`${relativeFile}: ${attributeValue} must use the site origin`);
    return;
  }

  const resolved = resolveReference(url.pathname, baseUrl);
  if (!resolved || "error" in resolved || !(await existsInExport(resolved.path))) {
    errors.push(`${relativeFile}: missing exported social image: ${image}`);
    return;
  }
  checkedSocialImages += 1;
}

try {
  const info = await stat(output);
  if (!info.isDirectory()) throw new Error("Export path is not a directory.");
} catch {
  console.error("Static export directory not found. Run `npm run build` first.");
  process.exit(1);
}

await collectHtml(output);
if (htmlFiles.length === 0) {
  console.error("No exported HTML files found in ./out.");
  process.exit(1);
}

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const baseUrl = documentUrl(htmlFile);
  const exportPath = path.relative(output, htmlFile).split(path.sep).join("/");
  if (
    exportPath === "404.html" ||
    /^(?:404|_not-found)(?:\/|$)/.test(exportPath)
  ) {
    continue;
  }

  await checkSocialImage(html, htmlFile, baseUrl, "property", "og:image");
  await checkSocialImage(html, htmlFile, baseUrl, "name", "twitter:image");
  const relativeFile = path.relative(root, htmlFile);
  if (getMetaContent(html, "name", "twitter:card") !== "summary_large_image") {
    errors.push(`${relativeFile}: twitter:card must be summary_large_image`);
  }

  for (const match of html.matchAll(references)) {
    const reference = match[1].trim();
    const resolved = resolveReference(reference, baseUrl);
    if (!resolved) continue;
    checkedReferences += 1;
    if ("error" in resolved) {
      errors.push(`${path.relative(root, htmlFile)}: ${resolved.error}`);
      continue;
    }

    if (!(await existsInExport(resolved.path))) {
      errors.push(`${path.relative(root, htmlFile)}: missing: ${reference}`);
    }
  }
}

for (const [environmentVariable, attributeName, attributeValue] of [
  ["GOOGLE_SITE_VERIFICATION", "name", "google-site-verification"],
  ["BING_SITE_VERIFICATION", "name", "msvalidate.01"],
]) {
  if (process.env[environmentVariable]?.trim()) {
    const configuredValue = process.env[environmentVariable].trim();
    const matchingPages = await Promise.all(
      htmlFiles.map(async (htmlFile) => {
        const html = await readFile(htmlFile, "utf8");
        return getMetaContent(html, attributeName, attributeValue) === configuredValue;
      }),
    );
    if (!matchingPages.some(Boolean)) {
      errors.push(`${environmentVariable} is configured but its verification tag is missing`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Static export check failed (${errors.length} issue(s)):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  if (errors.length > 100) console.error(`... and ${errors.length - 100} more`);
  process.exit(1);
}

console.log(
  `Static export check passed: ${htmlFiles.length} HTML files, ${checkedReferences} local references, and ${checkedSocialImages} social images.`,
);
