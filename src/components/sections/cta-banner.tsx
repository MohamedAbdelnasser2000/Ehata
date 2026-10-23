"use client";

/** Final CTA banner — Cinematic agency style inspired by Vengeance UI & Skiper UI. */
import { ArrowUpRight, Wrench, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useLocale } from "@/components/providers/locale-provider";
import { LogoMark } from "@/components/layout/logo";

export function CtaBanner() {
  const { t } = useLocale();

  return (
    <section
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28"
      aria-label={t.cta.title}
    >
      {/* Vengeance UI Cinematic Aurora Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue/20 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-10 h-[400px] w-[600px] rounded-full bg-sky/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-8 md:p-14 backdrop-blur-md shadow-2xl">
          {/* Moving border beam */}
          <BorderBeam size={220} duration={12} borderWidth={2} colorFrom="#2e9bff" colorTo="#0057e7" />

          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <Reveal className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-sky" />
                EHATA Company & Academy
              </span>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl text-balance">
                <span className="bg-gradient-to-r from-white via-white/90 to-sky/90 bg-clip-text text-transparent">
                  {t.cta.title}
                </span>
              </h2>

              <p className="max-w-xl text-lg text-white/75 leading-relaxed">
                {t.cta.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <MagneticButton href="/contact" variant="onDark" size="lg">
                  {t.cta.primary}
                  <ArrowUpRight className="h-[18px] w-[18px] rtl:-scale-x-100" />
                </MagneticButton>
                <MagneticButton
                  href="/services"
                  size="lg"
                  className="border border-white/25 text-white hover:border-sky hover:bg-white/10"
                >
                  <Wrench className="h-[18px] w-[18px]" aria-hidden />
                  {t.cta.secondary}
                </MagneticButton>
              </div>
            </Reveal>

            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm sm:h-64 sm:w-64">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue/20 to-transparent" />
                <LogoMark className="relative h-28 w-28 text-white sm:h-32 sm:w-32 drop-shadow-[0_0_24px_rgba(46,155,255,0.4)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
