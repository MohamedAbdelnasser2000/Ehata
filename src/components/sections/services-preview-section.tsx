"use client";

/** Services preview — an editorial index of the six service areas with Spotlight cards. */
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/lib/icons";
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLocale } from "@/components/providers/locale-provider";
import { SERVICES } from "@/data/services";
import { getServicePath } from "@/lib/service-routes";

export function ServicesPreviewSection() {
  const { t, tr, locale } = useLocale();

  return (
    <Section id="services-preview">
      <SectionHeading
        kicker={<Kicker>{t.servicesPreview.kicker}</Kicker>}
        title={
          <SplitHeading
            lines={[t.servicesPreview.title]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
        subtitle={t.servicesPreview.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.04}>
            <Link
              href={getServicePath(s.id, locale)}
              className="group block h-full focus:outline-none"
            >
              <SpotlightCard
                tilt={true}
                maxTilt={4}
                className="flex h-full flex-col justify-between rounded-2xl border-line/80 bg-surface/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue/40"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue/10 text-xs font-bold tabular-nums text-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-blue shadow-sm transition-all duration-300 group-hover:border-blue/50 group-hover:bg-blue group-hover:text-white group-hover:shadow-[0_0_18px_rgba(0,87,231,0.35)]">
                      <Icon
                        name={s.icon}
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-blue">
                    {tr(s.title)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {tr(s.description)}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-line/50">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    {t.common.learnMore}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
