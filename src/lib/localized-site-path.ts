import type { Locale } from "@/lib/i18n";

export function getLocalizedSitePath(path: string, locale: Locale): string {
  const url = new URL(path, "https://ehata.invalid");
  const englishPath =
    url.pathname === "/ar"
      ? "/"
      : url.pathname.startsWith("/ar/")
        ? url.pathname.slice(3)
        : url.pathname;
  const localizedPath =
    locale === "ar"
      ? englishPath === "/"
        ? "/ar/"
        : `/ar${englishPath}`
      : englishPath;

  return `${localizedPath}${url.search}${url.hash}`;
}
