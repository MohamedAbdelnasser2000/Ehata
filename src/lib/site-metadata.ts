import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const bingSiteVerification = process.env.BING_SITE_VERIFICATION?.trim();

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
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        alt: "EHATA – Digital Solutions",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EHATA – Digital Solutions",
    description: "Software engineering company & development academy.",
    ...(SITE_URL ? { images: [`${SITE_URL}/og-image.png`] } : {}),
  },
  ...(googleSiteVerification || bingSiteVerification
    ? {
        verification: {
          ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
          ...(bingSiteVerification
            ? { other: { "msvalidate.01": bingSiteVerification } }
            : {}),
        },
      }
    : {}),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};
