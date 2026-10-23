import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export const siteMetadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    default: "EHATA – Digital Solutions",
    template: "%s | EHATA – Digital Solutions",
  },
  description:
    "EHATA builds smart digital solutions and teaches the next generation of developers. Custom software, web platforms, ERP systems and professional programming courses.",
  keywords: [
    "EHATA",
    "software development",
    "web development",
    "programming courses",
    "SaaS",
    "ERP",
  ],
  openGraph: {
    type: "website",
    siteName: "EHATA – Digital Solutions",
    ...(SITE_URL ? { url: SITE_URL } : {}),
    title: "EHATA – Digital Solutions",
    description:
      "Software engineering company & development academy. We build digital products and teach the skills behind them.",
    ...(SITE_URL
      ? {
          images: [
            {
              url: `${SITE_URL}/logo.png`,
              width: 1200,
              height: 630,
              alt: "EHATA logo",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "EHATA – Digital Solutions",
    description: "Software engineering company & development academy.",
    ...(SITE_URL ? { images: [`${SITE_URL}/logo.png`] } : {}),
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};
