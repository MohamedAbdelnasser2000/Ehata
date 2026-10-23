import { IBM_Plex_Sans_Arabic, Sora } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { PageTransition } from "@/components/providers/page-transition";
import { SkipLink } from "@/components/providers/skip-link";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { SmoothScroll } from "@/components/providers/app-providers";
import type { Locale } from "@/lib/i18n";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const SITE_FONT_CLASS = `${sora.variable} ${plexArabic.variable} h-full antialiased`;

export function SiteShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <LocaleProvider initialLocale={locale}>
      <SmoothScroll>
        <SkipLink />
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </SmoothScroll>
    </LocaleProvider>
  );
}
