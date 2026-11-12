import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/sections/privacy-policy";

export const metadata: Metadata = {
  title: { absolute: "إشعار الخصوصية | EHATA" },
  description:
    "تعرف على كيفية تعامل EHATA مع طلبات التواصل وتفضيلات المتصفح في هذا الموقع.",
  alternates: {
    canonical: "/ar/privacy/",
    languages: {
      en: "/privacy/",
      ar: "/ar/privacy/",
      "x-default": "/privacy/",
    },
  },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EHATA – Digital Solutions" }],
    title: "إشعار الخصوصية | EHATA",
    description: "كيفية التعامل مع طلبات التواصل وتفضيلات المتصفح في الموقع.",
    locale: "ar_EG",
    url: "/ar/privacy/",
  },
};

export default function ArabicPrivacyPage() {
  return <PrivacyPolicy locale="ar" />;
}
