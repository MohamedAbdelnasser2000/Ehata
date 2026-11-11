import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "out");
const origin = "https://static-export.invalid";
const references = /\b(?:href|src|poster)=["']([^"'<>]+)["']/gi;
const ignoredProtocols = /^(?:https?:|mailto:|tel:|data:|blob:|javascript:)/i;
const htmlFiles = [];
const errors = [];
let checkedReferences = 0;

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

if (errors.length > 0) {
  console.error(`Static export check failed (${errors.length} broken reference(s)):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  if (errors.length > 100) console.error(`... and ${errors.length - 100} more`);
  process.exit(1);
}

console.log(
  `Static export check passed: ${htmlFiles.length} HTML files and ${checkedReferences} local references.`,
);
