import type { Locale } from "@/lib/i18n";

export function getServicePath(slug: string, locale: Locale = "en") {
  return locale === "ar"
    ? `/ar/services/${slug}/`
    : `/services/${slug}/`;
}

export function getContactPath(locale: Locale = "en", serviceId?: string) {
  const path = locale === "ar" ? "/ar/contact/" : "/contact/";
  return serviceId ? `${path}?service=${encodeURIComponent(serviceId)}` : path;
}
