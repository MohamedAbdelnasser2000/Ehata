import type { Locale } from "@/lib/i18n";

export function getProjectPath(slug: string, locale: Locale = "en") {
  return locale === "ar"
    ? `/ar/projects/${slug}/`
    : `/projects/${slug}/`;
}

export function getProjectsPath(locale: Locale = "en") {
  return locale === "ar" ? "/ar/projects/" : "/projects/";
}
