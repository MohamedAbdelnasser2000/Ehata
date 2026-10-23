import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides from EHATA on ERP selection, warehouse and delivery operations, and planning Flutter mobile applications.",
  alternates: {
    canonical: "/blog/",
    languages: {
      en: "/blog/",
      ar: "/ar/blog/",
      "x-default": "/blog/",
    },
  },
  openGraph: {
    title: "EHATA Blog | Digital Business Guides",
    description:
      "Practical guides for teams planning business systems, logistics workflows, and mobile products.",
    url: "/blog/",
  },
};

export default function BlogPage() {
  return <BlogIndex locale="en" />;
}
