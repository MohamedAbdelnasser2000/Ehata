/**
 * Shared content types. Every editable string in the site lives in /src/data
 * as one of these records, with `{ en, ar }` pairs resolved by `tr()`/`pick()`.
 */
import type { LocalizedText } from "@/lib/i18n";

/** Name of a registered icon (see src/lib/icons.tsx). */
export type IconName = string;

export interface Stat {
  value: number;
  suffix: string;
  /** Key inside t.stats for the label. */
  labelKey: "selectedProjects" | "projectCategories" | "technologies" | "siteLanguages";
}

export interface Service {
  id: string;
  icon: IconName;
  title: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
}

export type ProjectCategory =
  | "web-apps"
  | "saas"
  | "mobile"
  | "training"
  | "desktop"
  | "interactive";

export interface Project {
  id: string;
  title: LocalizedText;
  category: ProjectCategory;
  featured: boolean;
  coverImage: string;
  status?: LocalizedText;
  summary: LocalizedText;
  caseStudy: {
    overview: LocalizedText;
    problem: LocalizedText;
    solution: LocalizedText;
    features: { title: LocalizedText; description: LocalizedText }[];
    audience: LocalizedText[];
    architecture: LocalizedText;
  };
  tech: string[];
}

export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface CourseModule {
  title: LocalizedText;
  duration: LocalizedText;
  lessons: LocalizedText[];
}

export interface CourseProject {
  title: LocalizedText;
  description: LocalizedText;
}

export interface CourseFaqItem {
  q: LocalizedText;
  a: LocalizedText;
}

/** A full academy track: card teaser + everything the detail page renders. */
export interface Course {
  id: string;
  slug: string;
  icon: IconName;
  level: CourseLevel;
  title: LocalizedText;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  /** Three bullets shown on the card. */
  bullets: LocalizedText[];
  duration: LocalizedText;
  schedule: LocalizedText;
  hoursTotal: LocalizedText;
  language: LocalizedText;
  price: LocalizedText;
  nextBatchDate: LocalizedText;
  outcomes: LocalizedText[];
  requirements: LocalizedText[];
  audience: LocalizedText[];
  curriculum: CourseModule[];
  /** Latin product/tool names — identical in both languages. */
  tools: string[];
  projects: CourseProject[];
  faq: CourseFaqItem[];
}

export interface Testimonial {
  id: string;
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
  company: LocalizedText;
}

export interface TeamMember {
  id: string;
  name: string;
  role: LocalizedText;
  initials: string;
  accent: string;
  bio: LocalizedText;
}

export interface Milestone {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProcessStep {
  id: string;
  icon: IconName;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ValueCard {
  icon: IconName;
  title: LocalizedText;
  description: LocalizedText;
}

export interface PricingModel {
  id: string;
  icon: IconName;
  name: LocalizedText;
  blurb: LocalizedText;
  bullets: LocalizedText[];
  popular?: boolean;
}

export interface FaqItem {
  q: LocalizedText;
  a: LocalizedText;
}
