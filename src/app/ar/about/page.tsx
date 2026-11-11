import type { Metadata } from "next";
import {
  AboutHero,
  ProcessSection,
  StoryMissionVision,
  TeamSection,
  TimelineSection,
  ValuesSection,
} from "@/components/sections/about-sections";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: { absolute: "عن إحاطة — شركة برمجيات وأكاديمية تدريب بالقاهرة" },
  description:
    "تعرف على إحاطة، ورسالتنا وقيمنا وفريقنا ومنهجية العمل التي نتبعها في تطوير البرمجيات والتدريب التقني.",
  alternates: {
    canonical: "/ar/about/",
    languages: {
      en: "/about/",
      ar: "/ar/about/",
      "x-default": "/about/",
    },
  },
  openGraph: {
    title: "عن إحاطة — شركة برمجيات وأكاديمية تدريب بالقاهرة",
    description: "قصتنا وفريقنا ومنهجية العمل في إحاطة للحلول الرقمية.",
    url: "/ar/about/",
    locale: "ar_EG",
  },
};

export default function ArabicAboutPage() {
  return (
    <>
      <AboutHero />
      <StoryMissionVision />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
