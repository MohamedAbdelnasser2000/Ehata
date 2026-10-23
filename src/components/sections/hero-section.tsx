"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { LogoLockup } from "@/components/layout/logo";
import { useLocale } from "@/components/providers/locale-provider";
import { SERVICES } from "@/data/services";
import { getServicePath } from "@/lib/service-routes";
import { Icon } from "@/lib/icons";

export function HeroSection() {
  const { t, locale } = useLocale();

  return (
    <section
      className="relative flex min-h-[90svh] items-center overflow-hidden bg-bg pb-16 pt-32 md:py-32"
      aria-label={t.meta.siteName}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-line" aria-hidden />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-3 text-sm font-semibold text-muted">
            <span className="h-px w-8 bg-blue" aria-hidden />
            {t.hero.badge}
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            <span className="block">{t.hero.titleLine1}</span>
            <span className="block text-gradient">{t.hero.titleLine2}</span>
          </h1>

          <p className="max-w-xl text-[17px] leading-relaxed text-muted md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton href="/projects" size="lg">
              {t.common.viewProjects}
              <ArrowUpRight className="h-[18px] w-[18px] rtl:-scale-x-100" />
            </MagneticButton>
            <MagneticButton href="/#courses" variant="outline" size="lg">
              {t.common.ourCourses}
            </MagneticButton>
          </div>

          <a
            href="#intro"
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-blue"
          >
            <ArrowDown className="h-4 w-4" aria-hidden />
            {t.common.scrollDown}
          </a>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto w-full max-w-[560px]">
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_12px_32px_-24px_rgba(10,16,51,.35)] sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
              <LogoLockup />
              <span className="text-xs font-semibold tabular-nums text-muted">
                01—06
              </span>
            </div>

            <div className="py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                {t.servicesPreview.kicker}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                {t.nav.services}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {t.hero.badge}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {SERVICES.map((service, index) => (
                <Link
                  key={service.id}
                  href={getServicePath(service.id, locale)}
                  className="group/service flex min-h-[68px] items-center gap-3 border-t border-line py-3 text-start transition-colors duration-300 hover:text-blue motion-reduce:transition-none"
                >
                  <span className="w-5 shrink-0 text-[11px] font-medium tabular-nums text-muted/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    name={service.icon}
                    className="h-[18px] w-[18px] shrink-0 text-blue"
                  />
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-5 text-foreground transition-colors group-hover/service:text-blue">
                    {service.title[locale]}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-muted/60 transition-transform duration-300 group-hover/service:-translate-y-0.5 group-hover/service:translate-x-0.5 group-hover/service:text-blue rtl:-scale-x-100 rtl:group-hover/service:-translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* anchor helper reused by other sections */
export function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gradient inline-flex items-center gap-1.5 font-semibold hover:underline"
    >
      {children}
    </Link>
  );
}
