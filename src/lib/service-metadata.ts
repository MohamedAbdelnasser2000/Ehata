import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { Service } from "@/data/types";
import { getServicePath } from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site-url";

export function createServiceMetadata(
  service: Service,
  locale: Locale,
): Metadata {
  const path = getServicePath(service.id, locale);
  const pageTitle =
    locale === "ar"
      ? `${service.title.ar} | خدمات EHATA`
      : `${service.title.en} | EHATA Services`;
  const description = service.description[locale];

  return {
    title: { absolute: pageTitle },
    description,
    ...(SITE_URL
      ? {
          alternates: {
            canonical: path,
            languages: {
              en: getServicePath(service.id, "en"),
              ar: getServicePath(service.id, "ar"),
              "x-default": getServicePath(service.id, "en"),
            },
          },
        }
      : {}),
    openGraph: {
      type: "website",
      title: pageTitle,
      description,
      ...(SITE_URL ? { url: path } : {}),
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_EG",
    },
    robots: { index: true, follow: true },
  };
}
