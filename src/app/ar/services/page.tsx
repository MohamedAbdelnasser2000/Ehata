import type { Metadata } from "next";
import {
  FaqSection,
  PricingSection,
  ServicesDetailSection,
} from "@/components/sections/services-sections";

export const metadata: Metadata = {
  title: "الخدمات",
  description:
    "استكشف خدمات EHATA في تطوير البرمجيات المخصصة وتطبيقات الويب وSaaS وأنظمة ERP والتصميم والتدريب والاستشارات التقنية.",
  openGraph: {
    title: "الخدمات | EHATA للحلول الرقمية",
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
