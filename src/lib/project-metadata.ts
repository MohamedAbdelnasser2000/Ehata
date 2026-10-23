import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/data/types";
import { getProjectPath } from "@/lib/project-routes";
import { SITE_URL } from "@/lib/site-url";

const CATEGORY_LABELS = {
  "web-apps": { en: "Web application", ar: "تطبيق ويب" },
  saas: { en: "SaaS platform", ar: "منصة SaaS" },
  mobile: { en: "Mobile application", ar: "تطبيق موبايل" },
  training: { en: "Learning platform", ar: "منصة تعليمية" },
  desktop: { en: "Desktop application", ar: "تطبيق سطح مكتب" },
  interactive: { en: "Interactive web experience", ar: "تجربة ويب تفاعلية" },
} as const;

export function createProjectMetadata(
  project: Project,
  locale: Locale,
): Metadata {
  const path = getProjectPath(project.id, locale);
  const englishPath = getProjectPath(project.id, "en");
  const arabicPath = getProjectPath(project.id, "ar");
  const title = project.title[locale];
  const description = project.summary[locale];
  const pageTitle =
    locale === "ar"
      ? `${title} | دراسة حالة EHATA`
      : `${title} | EHATA Case Study`;

  return {
    title: { absolute: pageTitle },
    description,
    keywords: [
      title,
      CATEGORY_LABELS[project.category][locale],
      ...project.tech.slice(0, 5),
    ],
    ...(SITE_URL
      ? {
          alternates: {
            canonical: path,
            languages: {
              en: englishPath,
              ar: arabicPath,
              "x-default": englishPath,
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
      ...(SITE_URL
        ? {
            images: [
              {
                url: `${SITE_URL}${project.coverImage}`,
                alt:
                  locale === "ar"
                    ? `رسم توضيحي لمشروع ${title}، وليس لقطة شاشة للتطبيق`
                    : `Illustrative cover for ${title}, not an application screenshot`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      ...(SITE_URL ? { images: [`${SITE_URL}${project.coverImage}`] } : {}),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
