import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroStatsSection } from "@/components/sections/intro-stats-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { CoursesHighlightSection } from "@/components/sections/courses-highlight-section";
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "إحاطة — حلول رقمية وتطوير برمجيات",
  description:
    "إحاطة شركة متخصصة في تطوير البرمجيات المخصصة ومنصات الويب وSaaS وأنظمة ERP، إلى جانب التدريب والاستشارات التقنية.",
  alternates: {
    canonical: "/ar/",
    languages: {
      en: "/",
      ar: "/ar/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "إحاطة — حلول رقمية وتطوير برمجيات",
    description:
      "نطوّر حلولًا رقمية عملية، ونبني منتجات برمجية، وندرب فرقًا تقنية.",
    url: "/ar/",
    locale: "ar_EG",
  },
};

export default function ArabicHomePage() {
  return (
    <>
      <HeroSection />
      <IntroStatsSection />
      <ServicesPreviewSection />
      <FeaturedProjectsSection />
      <CoursesHighlightSection />
      <TechMarqueeSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
