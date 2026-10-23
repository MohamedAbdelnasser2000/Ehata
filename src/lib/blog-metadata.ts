import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { BlogPost } from "@/data/blog";
import { getBlogPostPath } from "@/lib/blog-routes";

export function createBlogMetadata(
  post: BlogPost,
  locale: Locale,
): Metadata {
  const path = getBlogPostPath(post.slug, locale);
  const englishPath = getBlogPostPath(post.slug, "en");
  const arabicPath = getBlogPostPath(post.slug, "ar");
  const title = post.title[locale];
  const description = post.excerpt[locale];

  return {
    title: { absolute: `${title} | EHATA Blog` },
    description,
    keywords: [title, post.category[locale], "EHATA"],
    alternates: {
      canonical: path,
      languages: {
        en: englishPath,
        ar: arabicPath,
        "x-default": englishPath,
      },
    },
    openGraph: {
      type: "article",
      title: `${title} | EHATA`,
      description,
      url: path,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_EG",
      publishedTime: post.publishedAt,
      authors: ["EHATA"],
      tags: [post.category[locale]],
    },
    twitter: {
      card: "summary",
      title: `${title} | EHATA`,
      description,
    },
  };
}
