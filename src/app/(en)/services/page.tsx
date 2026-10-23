import type { Metadata } from "next";
import {
  FaqSection,
  PricingSection,
  ServicesDetailSection,
} from "@/components/sections/services-sections";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web & SaaS platforms, ERP systems, UI/UX design, programming courses and consulting — with fixed-price, dedicated-team and hourly engagement models.",
  alternates: {
    canonical: "/services/",
    languages: {
      en: "/services/",
      ar: "/ar/services/",
      "x-default": "/services/",
    },
  },
  openGraph: {
    title: "Services | EHATA – Digital Solutions",
    description:
      "Six practice areas, three engagement models, one production-grade standard.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesDetailSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
