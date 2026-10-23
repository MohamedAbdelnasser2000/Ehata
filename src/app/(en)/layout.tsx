import type { ReactNode } from "react";
import { SITE_FONT_CLASS, SiteShell } from "@/components/layout/site-shell";
import { ThemeScript } from "@/components/providers/theme";
import { siteMetadata } from "@/lib/site-metadata";
import "../globals.css";

export const metadata = siteMetadata;

export default function EnglishRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={SITE_FONT_CLASS}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
