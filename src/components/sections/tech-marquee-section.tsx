"use client";

/** Tech-stack marquee — two counter-drifting rows of wordmark tiles. */
import { Marquee } from "@/components/ui/marquee";
import { Kicker } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { useLocale } from "@/components/providers/locale-provider";
import { TECH_STACK } from "@/data/tech";

export function TechMarqueeSection() {
  const { t } = useLocale();
  const rows = [TECH_STACK, [...TECH_STACK].reverse()];

  return (
    <Section className="!py-16 md:!py-20" aria-label={t.tech.title}>
      <div className="mb-10 flex items-center justify-center">
        <Kicker>{t.tech.title}</Kicker>
      </div>

      <div className="flex flex-col gap-5">
        {rows.map((row, ri) => (
          <Marquee key={ri} duration={ri === 0 ? 30 : 38} reverse={ri === 1}>
            {row.map((tech) => (
              <span
                key={tech.name}
                className="mx-3 inline-flex h-14 items-center gap-3 rounded-2xl border border-line bg-surface px-6 text-[15px] font-bold text-foreground transition-colors hover:border-blue/40"
                style={{ boxShadow: "0 8px 26px -14px rgba(10,16,51,.25)" }}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: tech.color }}
                  aria-hidden
                />
                {tech.name}
              </span>
            ))}
          </Marquee>
        ))}
      </div>
    </Section>
  );
}
