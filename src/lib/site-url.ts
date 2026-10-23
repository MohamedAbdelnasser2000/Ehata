function getSiteOrigin(): string | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  const url = new URL(configuredUrl);
  if (
    (url.protocol !== "https:" && url.protocol !== "http:") ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path.");
  }

  return url.origin;
}

export const SITE_URL =
  getSiteOrigin() ?? "https://ehata-tech.vercel.app";
