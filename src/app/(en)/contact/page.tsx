import type { Metadata } from "next";
import { ContactHead, ContactMain } from "@/components/sections/contact-sections";
import { FaqSection } from "@/components/sections/services-sections";

export const metadata: Metadata = {
  title: "Contact",
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
    title: "Contact | EHATA – Digital Solutions",
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
