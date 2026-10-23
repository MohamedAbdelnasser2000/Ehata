import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "المشاريع",
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
    title: "المشاريع | إحاطة للحلول الرقمية",
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
