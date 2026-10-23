import type { ReactNode } from "react";
import { SITE_FONT_CLASS, SiteShell } from "@/components/layout/site-shell";
import { ThemeScript } from "@/components/providers/theme";
import { siteMetadata } from "@/lib/site-metadata";
import "../globals.css";

export const metadata = siteMetadata;

export default function ArabicRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={SITE_FONT_CLASS}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
