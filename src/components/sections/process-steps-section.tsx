"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Reveal, Kicker, SplitHeading } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { HOW_WE_WORK } from "@/data/process";
import { Icon } from "@/lib/icons";

export function ProcessStepsSection() {
  const { t, tr } = useLocale();

  return (
    <Section>
      <SectionHeading
        kicker={<Kicker>{t.processSection.kicker}</Kicker>}
        title={
          <SplitHeading
            lines={[t.processSection.title]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {HOW_WE_WORK.map((step, index) => (
          <Reveal key={step.id} delay={index * 0.06} className="h-full">
            <SpotlightCard className="h-full rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm">
              <article className="h-full">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold tabular-nums text-gradient">
                    {step.step}
                  </span>
                  <Icon
                    name={step.icon}
                    className="h-5 w-5 text-blue"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {tr(step.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tr(step.description)}
                </p>
              </article>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
