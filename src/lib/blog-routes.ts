import type { Locale } from "@/lib/i18n";

export function getBlogIndexPath(locale: Locale = "en"): string {
  return locale === "ar" ? "/ar/blog/" : "/blog/";
}

export function getBlogPostPath(
  slug: string,
  locale: Locale = "en",
): string {
  return locale === "ar"
    ? `/ar/blog/${slug}/`
    : `/blog/${slug}/`;
}
