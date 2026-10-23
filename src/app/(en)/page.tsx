import { HeroSection } from "@/components/sections/hero-section";
import { IntroStatsSection } from "@/components/sections/intro-stats-section";
import { ServicesPreviewSection } from "@/components/sections/services-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { CoursesHighlightSection } from "@/components/sections/courses-highlight-section";
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
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
