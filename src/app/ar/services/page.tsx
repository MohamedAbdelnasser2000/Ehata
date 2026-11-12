import type { Metadata } from "next";
import {
  FaqSection,
  PricingSection,
  ServicesDetailSection,
} from "@/components/sections/services-sections";

export const metadata: Metadata = {
  title: { absolute: "خدمات تطوير البرمجيات والأنظمة في مصر — EHATA" },
  description:
    "استكشف خدمات EHATA في تطوير البرمجيات المخصصة وتطبيقات الويب وSaaS وأنظمة ERP والتصميم والتدريب والاستشارات التقنية.",
  alternates: {
    canonical: "/ar/services/",
    languages: {
      en: "/services/",
      ar: "/ar/services/",
      "x-default": "/services/",
    },
  },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EHATA – Digital Solutions" }],
    title: "خدمات تطوير البرمجيات والأنظمة في مصر — EHATA",
    description: "حلول برمجية وتدريب تقني مصممان وفق احتياجاتك.",
    locale: "ar_EG",
  },
};

export default function ArabicServicesPage() {
  return (
    <>
      <ServicesDetailSection />
      <PricingSection />
      <FaqSection />
    </>
  );
}
