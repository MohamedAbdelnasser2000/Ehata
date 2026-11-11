import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: { absolute: "Software Projects Portfolio — Delivery, ERP, Clinic Systems | EHATA" },
  description:
    "Case studies from EHATA – Digital Solutions: SaaS platforms, web apps, mobile products, ERP systems and training platforms.",
  alternates: {
    canonical: "/projects/",
    languages: {
      en: "/projects/",
      ar: "/ar/projects/",
      "x-default": "/projects/",
    },
  },
  openGraph: {
    title: "Software Projects Portfolio — Delivery, ERP, Clinic Systems | EHATA",
    description:
      "Filterable portfolio with full case studies: challenge, solution, technology and results.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsExplorer />
      <CtaBanner />
    </>
  );
}
