import type { Metadata } from "next";
import { AcademyIndexSection } from "@/components/academy/academy-index";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Five professional tracks at EHATA Academy: full-stack .NET, full-stack PHP, mobile apps, artificial intelligence and software engineering — taught by engineers who ship.",
  openGraph: {
    title: "EHATA Academy | EHATA – Digital Solutions",
    description:
      "Pick a practice-led track and build a portfolio employers can open: .NET, PHP, mobile, AI and software engineering.",
    url: "/academy",
  },
  alternates: { canonical: "/academy" },
};

export default function AcademyPage() {
  return <AcademyIndexSection />;
}
