import type { Metadata } from "next";
import { organizationSchema } from "@/data/organization-schema";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSignalsRow } from "@/components/sections/trust-signals-row";
import { IntroStatsSection } from "@/components/sections/intro-stats-section";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { BlogHighlightsSection } from "@/components/sections/blog-highlights-section";
import { CoursesHighlightSection } from "@/components/sections/courses-highlight-section";
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: { absolute: "Custom Business Software Egypt — EHATA" },
  description:
    "EHATA builds custom business software for Egyptian companies: delivery platforms, ERP systems, clinic operations, and SaaS products. Cairo-based engineering team.",
  openGraph: {
    title: "Custom Business Software Egypt — EHATA",
    description:
      "EHATA builds custom business software for Egyptian companies: delivery platforms, ERP systems, clinic operations, and SaaS products. Cairo-based engineering team.",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar/",
      "x-default": "/",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <TrustSignalsRow />
      <IntroStatsSection />
      <ProcessStepsSection />
      <ServicesPreviewSection />
      <FeaturedProjectsSection />
      <BlogHighlightsSection />
      <CoursesHighlightSection />
      <TechMarqueeSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
