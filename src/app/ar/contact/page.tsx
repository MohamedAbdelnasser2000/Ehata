import type { Metadata } from "next";
import { ContactHead, ContactMain } from "@/components/sections/contact-sections";
import { FaqSection } from "@/components/sections/services-sections";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع EHATA لمناقشة تطوير البرمجيات أو تطبيقات الويب وERP أو التدريب والاستشارات التقنية.",
  openGraph: {
    title: "تواصل معنا | EHATA للحلول الرقمية",
    description: "أخبرنا عن احتياجك وسنناقش معك الخطوة المناسبة.",
    locale: "ar_EG",
  },
};

export default function ArabicContactPage() {
  return (
    <>
      <ContactHead />
      <ContactMain />
      <FaqSection />
    </>
  );
}
