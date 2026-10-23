"use client";

/** Intro + animated stats in a modern Bento layout with Spotlight cards. */
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLocale } from "@/components/providers/locale-provider";
import { STATS } from "@/data/stats";

export function IntroStatsSection() {
  const { t } = useLocale();

  return (
    <Section id="intro" className="relative">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <Kicker>EHATA</Kicker>
          <SplitHeading
            lines={[t.stats.heading]}
            className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl"
          />
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            {t.stats.intro}
          </p>
        </Reveal>

        {/* Bento Grid Stats with Skiper UI Spotlight Cards */}
        <dl className="grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.labelKey} delay={0.06 * i}>
              <SpotlightCard
                spotlightColor="rgba(0, 87, 231, 0.12)"
                className="h-full rounded-2xl border-line/80 bg-surface/75 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue/40"
              >
                <div className="flex h-full flex-col justify-between">
                  <dd className="text-3xl font-extrabold tabular-nums text-foreground sm:text-4xl lg:text-5xl">
                    <span className="text-gradient">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </span>
                  </dd>
                  <dt className="mt-3 text-sm font-medium leading-snug text-muted">
                    {t.stats[s.labelKey]}
                  </dt>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
