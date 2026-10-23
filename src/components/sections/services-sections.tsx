"use client";

/**
 * ServicesPage content: alternating detail rows with animated illustrations,
 * engagement-model pricing and a Radix FAQ accordion.
 * Enhanced with Skiper UI Spotlight cards, BorderBeam & Vengeance UI Aurora lighting.
 */
import { ArrowUpRight, Check, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Icon } from "@/lib/icons";
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AccordionItem, AccordionRoot } from "@/components/ui/accordion";
import { SERVICES } from "@/data/services";
import { getContactPath, getServicePath } from "@/lib/service-routes";
import { FAQS, PRICING } from "@/data/pricing-faq";
import { cn } from "@/lib/utils";

/** Animated "illustration": an orbiting icon plate unique per service. */
function ServiceIllustration({ icon, index }: { icon: string; index: number }) {
  return (
    <div className="relative mx-auto grid h-64 w-full max-w-sm place-items-center">
      {/* glow */}
      <div
        className="absolute inset-8 rounded-full bg-blue/20 blur-3xl animate-pulse-glow"
        style={{ animationDelay: `${index * 0.4}s` }}
        aria-hidden
      />
      {/* orbit ring */}
      <div
        className="absolute inset-4 rounded-full border border-dashed border-blue/30 animate-spin-slow"
        style={{ animationDirection: index % 2 ? "reverse" : "normal" }}
        aria-hidden
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue to-sky shadow-[0_0_14px_rgba(46,155,255,.8)]" />
      </div>
      {/* core plate */}
      <div className="glass relative grid h-28 w-28 place-items-center rounded-3xl card-shadow border border-line/80 backdrop-blur-md">
        <span className="bg-gradient-signature grid h-16 w-16 place-items-center rounded-2xl text-white shadow-[0_10px_30px_-10px_rgba(0,87,231,.8)]">
          <Icon name={icon} className="h-8 w-8" />
        </span>
      </div>
      {/* floating chips */}
      <span className="glass absolute start-0 top-6 hidden animate-float rounded-full px-3 py-1.5 text-xs font-semibold text-foreground sm:block border border-line/60">
        {"</>"}
      </span>
      <span
        className="glass absolute end-2 top-14 hidden animate-float-slow rounded-full px-3 py-1.5 text-xs font-semibold text-foreground sm:block border border-line/60"
        style={{ animationDelay: "1.2s" }}
      >
        {"{ }"}
      </span>
      <span className="glass absolute bottom-4 end-8 hidden animate-float rounded-full px-3 py-1.5 text-xs font-semibold text-foreground sm:block border border-line/60">
        QA ✓
      </span>
    </div>
  );
}

export function ServicesDetailSection() {
  const { t, tr, locale } = useLocale();

  return (
    <Section className="relative !pt-36 md:!pt-44 !pb-8 overflow-hidden">
      {/* Vengeance UI Aurora Background */}
      <AuroraBackground glowOpacity={0.4} />

      <div className="mb-16 flex flex-col items-center gap-5 text-center">
        <Kicker>{t.servicesPage.kicker}</Kicker>
        <SplitHeading
          as="h1"
          lines={[t.servicesPage.title]}
          className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl"
        />
        <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
          {t.servicesPage.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {SERVICES.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "grid items-center gap-10 lg:grid-cols-2",
              i % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
          >
            <Reveal>
              <ServiceIllustration icon={s.icon} index={i} />
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl text-foreground">{tr(s.title)}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">
                  {tr(s.description)}
                </p>
                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue">
                  {t.servicesPage.features}
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f.en} className="flex items-start gap-2.5 text-[15px] text-foreground/85">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue/12 text-blue">
                        <Check className="h-3 w-3" />
                      </span>
                      {tr(f)}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <MagneticButton href={getServicePath(s.id, locale)}>
                    {t.servicesPage.details}
                    <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                  </MagneticButton>
                  <MagneticButton
                    href={getContactPath(locale, s.id)}
                    variant="outline"
                  >
                    {t.cta.primary}
                    <Plus className="h-4 w-4" aria-hidden />
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function PricingSection() {
  const { t, tr } = useLocale();
  return (
    <Section id="pricing" tone="surface">
      <SectionHeading
        kicker={<Kicker>{t.servicesPage.pricingKicker}</Kicker>}
        title={
          <SplitHeading
            lines={[t.servicesPage.pricingTitle]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
        subtitle={t.servicesPage.pricingSubtitle}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {PRICING.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08} className="h-full">
            <SpotlightCard
              tilt={true}
              maxTilt={4}
              className={cn(
                "relative flex h-full flex-col justify-between rounded-2xl border bg-surface/90 p-7 backdrop-blur-sm transition-all duration-300",
                p.popular ? "border-blue/50 shadow-xl" : "border-line/80 hover:border-blue/35",
              )}
            >
              {p.popular && (
                <>
                  <BorderBeam size={160} duration={8} borderWidth={1.5} colorFrom="#2e9bff" colorTo="#0057e7" />
                  <span className="bg-gradient-signature absolute -top-3 start-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md">
                    <Sparkles className="h-3 w-3" />
                    {t.servicesPage.mostPopular}
                  </span>
                </>
              )}
              <div>
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-2xl",
                    p.popular
                      ? "bg-gradient-signature text-white shadow-[0_8px_20px_-8px_rgba(0,87,231,0.7)]"
                      : "bg-surface-2 text-blue border border-line",
                  )}
                >
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{tr(p.name)}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{tr(p.blurb)}</p>
                <ul className="mt-5 flex flex-col gap-2.5 text-[15px]">
                  {p.bullets.map((b) => (
                    <li key={b.en} className="flex items-start gap-2.5 text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-blue" />
                      {tr(b)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-line/50">
                <MagneticButton
                  href="/contact"
                  variant={p.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {t.servicesPage.talkAboutProject}
                </MagneticButton>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FaqSection() {
  const { t, tr } = useLocale();
  const [open, setOpen] = useState<string>("0");

  return (
    <Section id="faq">
      <SectionHeading
        kicker={<Kicker>{t.servicesPage.faqKicker}</Kicker>}
        title={
          <SplitHeading
            lines={[t.servicesPage.faqTitle]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        <AccordionRoot
          type="single"
          collapsible
          value={open}
          onValueChange={(v) => v && setOpen(v)}
        >
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={String(i)} question={tr(f.q)}>
              {tr(f.a)}
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </Section>
  );
}
