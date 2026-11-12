import type { Metadata } from "next";
import { ContactHead, ContactMain } from "@/components/sections/contact-sections";
import { FaqSection } from "@/components/sections/services-sections";

export const metadata: Metadata = {
  title: { absolute: "Contact EHATA — Free Project Scoping Session" },
  description:
    "Contact EHATA – Digital Solutions for software projects, SaaS builds, ERP systems or programming courses. We reply within one business day.",
  alternates: {
    canonical: "/contact/",
    languages: {
      en: "/contact/",
      ar: "/ar/contact/",
      "x-default": "/contact/",
    },
  },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EHATA – Digital Solutions" }],
    title: "Contact EHATA — Free Project Scoping Session",
    description: "Start a conversation about your product or training goals.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHead />
      <ContactMain />
      <FaqSection />
    </>
  );
}
