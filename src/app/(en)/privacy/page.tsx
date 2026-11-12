import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/sections/privacy-policy";

export const metadata: Metadata = {
  title: { absolute: "Privacy Notice | EHATA" },
  description:
    "Learn how EHATA – Digital Solutions handles contact requests and browser preferences on this website.",
  alternates: {
    canonical: "/privacy/",
    languages: {
      en: "/privacy/",
      ar: "/ar/privacy/",
      "x-default": "/privacy/",
    },
  },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EHATA – Digital Solutions" }],
    title: "Privacy Notice | EHATA",
    description:
      "How EHATA handles contact requests and browser preferences on this website.",
    url: "/privacy/",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy locale="en" />;
}
