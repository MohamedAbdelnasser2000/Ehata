"use client";

/** About: story, mission/vision, values, timeline, team, process.
 * Enhanced with Skiper UI Spotlight cards & Vengeance UI Aurora.
 */
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BorderBeam } from "@/components/ui/border-beam";
import { Icon } from "@/lib/icons";
import { useLocale } from "@/components/providers/locale-provider";
import { ABOUT } from "@/data/about";
import { PROCESS, VALUES } from "@/data/process";
import { TEAM } from "@/data/team";
import { TIMELINE } from "@/data/timeline";

export function AboutHero() {
  const { t } = useLocale();
  return (
    <Section className="relative !pt-36 !pb-16 md:!pt-44 overflow-hidden" tone="light">
      <AuroraBackground glowOpacity={0.45} />
      <div className="flex flex-col items-center gap-6 text-center">
        <Kicker>{t.about.kicker}</Kicker>
        <SplitHeading
          as="h1"
          lines={[t.about.title]}
          className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl"
        />
      </div>
    </Section>
  );
}

export function StoryMissionVision() {
  const { t, tr } = useLocale();
  return (
    <Section className="!pt-4">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">{t.about.storyTitle}</h2>
          <div className="flex flex-col gap-4 text-[17px] leading-relaxed text-muted">
            {ABOUT.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{tr(p)}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal>
            <SpotlightCard
              tilt={true}
              maxTilt={3}
              className="relative rounded-2xl border-line/80 bg-surface/85 p-8 backdrop-blur-sm"
            >
              <span className="bg-gradient-signature mb-4 grid h-12 w-12 place-items-center rounded-xl text-white shadow-[0_8px_20px_-8px_rgba(0,87,231,0.7)]">
                <Icon name="Rocket" className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-xl font-bold text-foreground">{t.about.missionTitle}</h3>
              <p className="leading-relaxed text-muted">{tr(ABOUT.mission)}</p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard
              tilt={true}
              maxTilt={3}
              className="relative rounded-2xl border-line/80 bg-surface/85 p-8 backdrop-blur-sm"
            >
              <span className="bg-gradient-signature mb-4 grid h-12 w-12 place-items-center rounded-xl text-white shadow-[0_8px_20px_-8px_rgba(0,87,231,0.7)]">
                <Icon name="Eye" className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-xl font-bold text-foreground">{t.about.visionTitle}</h3>
              <p className="leading-relaxed text-muted">{tr(ABOUT.vision)}</p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function ValuesSection() {
  const { t, tr } = useLocale();
  return (
    <Section tone="surface" id="values">
      <SectionHeading
        kicker={<Kicker>{t.about.valuesTitle}</Kicker>}
        title={
          <SplitHeading
            lines={[t.about.valuesTitle]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
        subtitle={t.about.valuesSubtitle}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v, i) => (
          <Reveal key={v.title.en} delay={i * 0.06} className="h-full">
            <SpotlightCard
              tilt={true}
              maxTilt={5}
              className="flex h-full flex-col gap-4 rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm transition-all hover:border-blue/40"
            >
              <span className="bg-gradient-signature grid h-12 w-12 place-items-center rounded-2xl text-white shadow-[0_8px_20px_-8px_rgba(0,87,231,0.7)]">
                <Icon name={v.icon} className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-foreground">{tr(v.title)}</h3>
              <p className="text-sm leading-relaxed text-muted">{tr(v.description)}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function TimelineSection() {
  const { t, tr } = useLocale();
  if (TIMELINE.length === 0) return null;

  return (
    <Section id="milestones">
      <SectionHeading
        kicker={<Kicker>{t.about.timelineTitle}</Kicker>}
        title={
          <SplitHeading
            lines={[t.about.timelineTitle]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
        subtitle={t.about.timelineSubtitle}
      />

      <ol className="relative mx-auto max-w-3xl">
        {/* spine */}
        <span
          className="absolute inset-y-0 start-4 w-px bg-gradient-to-b from-blue via-sky to-transparent md:start-1/2"
          aria-hidden
        />
        {TIMELINE.map((m, i) => (
          <li key={m.year} className="relative ps-12 pb-12 last:pb-0 md:ps-0">
            <Reveal delay={i * 0.05}>
              <div
                className={
                  i % 2 === 0
                    ? "md:w-1/2 md:pe-10 md:text-end"
                    : "md:ms-auto md:w-1/2 md:ps-10"
                }
              >
                {/* node */}
                <span
                  className="absolute start-4 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue to-sky ring-4 ring-bg md:start-1/2 shadow-[0_0_12px_rgba(0,87,231,0.6)]"
                  aria-hidden
                />
                <SpotlightCard
                  spotlightColor="rgba(0, 87, 231, 0.12)"
                  className="rounded-2xl border-line/80 bg-surface/85 p-5 backdrop-blur-sm"
                >
                  <span className="text-gradient text-2xl font-extrabold tabular-nums">
                    {m.year}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{tr(m.title)}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">
                    {tr(m.description)}
                  </p>
                </SpotlightCard>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function TeamSection() {
  const { t, tr } = useLocale();
  if (TEAM.length === 0) return null;

  return (
    <Section tone="surface" id="team">
      <SectionHeading
        kicker={<Kicker>{t.about.teamTitle}</Kicker>}
        title={
          <SplitHeading
            lines={[t.about.teamTitle]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
        subtitle={t.about.teamSubtitle}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.05} className="h-full">
            <SpotlightCard
              tilt={true}
              maxTilt={4}
              className="flex h-full flex-col items-start gap-4 rounded-2xl border-line/80 bg-surface/85 p-6 backdrop-blur-sm transition-all hover:border-blue/40"
            >
              <span
                className="grid h-16 w-16 place-items-center rounded-2xl text-xl font-extrabold text-white transition-transform duration-300 group-hover:scale-105 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${m.accent}, color-mix(in srgb, ${m.accent} 55%, #2E9BFF))`,
                }}
                aria-hidden
              >
                {m.initials}
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
                <p className="text-sm font-medium text-blue">{tr(m.role)}</p>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted">{tr(m.bio)}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection() {
  const { t, tr } = useLocale();
  return (
    <Section tone="dark" id="process" className="relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,87,231,.28),transparent)]"
        aria-hidden
      />
      <SectionHeading
        kicker={<Kicker>{t.about.processTitle}</Kicker>}
        title={
          <SplitHeading
            lines={[t.about.processTitle]}
            className="text-3xl font-bold text-white sm:text-4xl"
          />
        }
        subtitle={<span className="text-white/70">{t.about.processSubtitle}</span>}
      />

      <ol className="relative grid gap-6 md:grid-cols-5">
        {PROCESS.map((step, i) => (
          <Reveal key={step.id} delay={i * 0.08} className="h-full">
            <li className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-sky/40 hover:bg-white/[0.08] hover:-translate-y-1">
              <span className="text-5xl font-extrabold tabular-nums text-sky/40 transition-colors duration-300 group-hover:text-sky">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="bg-gradient-signature grid h-11 w-11 place-items-center rounded-xl text-white shadow-[0_8px_22px_-10px_rgba(0,87,231,.7)]">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white">{tr(step.title)}</h3>
              <p className="text-sm leading-relaxed text-white/75">
                {tr(step.description)}
              </p>
              {i < PROCESS.length - 1 && (
                <span
                  className="absolute end-[-12px] top-1/2 hidden h-px w-6 bg-gradient-to-r from-sky/60 to-transparent md:block rtl:bg-gradient-to-l"
                  aria-hidden
                />
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
