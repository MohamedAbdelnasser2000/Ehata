import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "المدونة",
  description:
    "أدلة عملية من EHATA حول اختيار أنظمة ERP وإدارة المخازن والتوصيل والتخطيط لتطبيقات Flutter.",
  alternates: {
    canonical: "/ar/blog/",
    languages: {
      en: "/blog/",
      ar: "/ar/blog/",
      "x-default": "/blog/",
    },
  },
  openGraph: {
    title: "مدونة EHATA | أدلة الأعمال الرقمية",
    description:
      "أدلة عملية للفرق التي تخطط لأنظمة الأعمال وإجراءات اللوجستيات ومنتجات الموبايل.",
    url: "/ar/blog/",
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
};

export default function ArabicBlogPage() {
  return <BlogIndex locale="ar" />;
}
