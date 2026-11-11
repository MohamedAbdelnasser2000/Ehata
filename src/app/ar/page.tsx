import type { Metadata } from "next";
import { organizationSchema } from "@/data/organization-schema";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { BlogHighlightsSection } from "@/components/sections/blog-highlights-section";
import { CoursesHighlightSection } from "@/components/sections/courses-highlight-section";
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: { absolute: "برمجيات أعمال وأنظمة تشغيل مخصصة في مصر — EHATA" },
  description:
    "تبني إحاطة برمجيات تشغيلية مخصصة للشركات المصرية: منصات توصيل، أنظمة ERP، إدارة عيادات وصيدليات، وتدريب احترافي للمطورين.",
  alternates: {
    canonical: "/ar/",
    languages: {
      en: "/",
      ar: "/ar/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "برمجيات أعمال وأنظمة تشغيل مخصصة في مصر — EHATA",
    description:
      "تبني إحاطة برمجيات تشغيلية مخصصة للشركات المصرية: منصات توصيل، أنظمة ERP، إدارة عيادات وصيدليات، وتدريب احترافي للمطورين.",
    url: "/ar/",
    locale: "ar_EG",
  },
};

export default function ArabicHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
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
