import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: { absolute: "معرض المشاريع والأنظمة المنفذة — EHATA" },
  description:
    "استعرض نماذج ودراسات مشاريع إحاطة في تطبيقات الويب ومنصات SaaS والأنظمة الإدارية والتدريبية.",
  alternates: {
    canonical: "/ar/projects/",
    languages: {
      en: "/projects/",
      ar: "/ar/projects/",
      "x-default": "/projects/",
    },
  },
  openGraph: {
    title: "معرض المشاريع والأنظمة المنفذة — EHATA",
    description:
      "استعرض نماذج ودراسات المشاريع، مع توضيح نطاق كل مشروع وتقنياته.",
    url: "/ar/projects/",
    locale: "ar_EG",
  },
};

export default function ArabicProjectsPage() {
  return (
    <>
      <ProjectsExplorer />
      <CtaBanner />
    </>
  );
}
