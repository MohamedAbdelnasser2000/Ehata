import type { Metadata } from "next";
import { AcademyIndexSection } from "@/components/academy/academy-index";

export const metadata: Metadata = {
  title: { absolute: "Programming Courses Cairo — EHATA Academy" },
  description:
    "Five professional tracks at EHATA Academy: full-stack .NET, full-stack PHP, mobile apps, artificial intelligence and software engineering — taught by engineers who ship.",
  openGraph: {
    title: "Programming Courses Cairo — EHATA Academy",
    description:
      "Pick a practice-led track and build a portfolio employers can open: .NET, PHP, mobile, AI and software engineering.",
    url: "/academy",
  },
  alternates: {
    canonical: "/academy/",
    languages: {
      en: "/academy/",
      ar: "/ar/academy/",
      "x-default": "/academy/",
    },
  },
};

export default function AcademyPage() {
  return <AcademyIndexSection />;
}
