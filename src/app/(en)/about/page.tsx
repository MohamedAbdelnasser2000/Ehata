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
  title: "About",
  description:
    "EHATA is a software engineering company and development academy. Our story, mission, values, team and the five-stage process behind every launch.",
  alternates: {
    canonical: "/about/",
    languages: {
      en: "/about/",
      ar: "/ar/about/",
      "x-default": "/about/",
    },
  },
  openGraph: {
    title: "About EHATA – Digital Solutions",
    description:
      "A company that works like an academy: engineers who ship, teachers who keep shipping.",
    url: "/about",
  },
};

export default function AboutPage() {
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
