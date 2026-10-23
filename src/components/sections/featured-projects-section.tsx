"use client";

/** FeaturedProjectsSection — a responsive grid of selected work with Spotlight cards. */
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Kicker, Reveal, SplitHeading } from "@/components/ui/reveal";
import { ProjectCover } from "@/components/ui/project-cover";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLocale } from "@/components/providers/locale-provider";
import { PROJECTS } from "@/data/projects";
import { getProjectPath } from "@/lib/project-routes";
import { getLocalizedSitePath } from "@/lib/localized-site-path";

export function FeaturedProjectsSection() {
  const { t, tr, locale } = useLocale();

  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-20 md:py-28" aria-label={t.featured.title}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <Reveal>
            <Kicker>{t.featured.kicker}</Kicker>
            <SplitHeading
              lines={[t.featured.title]}
              className="mt-4 text-3xl font-bold sm:text-4xl"
            />
            <p className="mt-4 max-w-xl text-[17px] text-muted">
              {t.featured.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <Link
                href={getProjectPath(p.id, locale)}
                className="group block h-full focus:outline-none"
                aria-label={`${t.common.viewCaseStudy}: ${p.title[locale]}`}
              >
                <SpotlightCard
                  tilt={true}
                  maxTilt={3}
                  className="flex h-full flex-col justify-between rounded-2xl border-line/80 bg-surface/85 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue/40"
                >
                  <div>
                    <div className="relative overflow-hidden rounded-xl border border-line/60">
                      <ProjectCover
                        project={p}
                        loading={i === 0 ? "eager" : "lazy"}
                        className="aspect-[1.55] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-blue">
                        {p.title[locale]}
                      </h3>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-surface text-blue shadow-sm transition-all duration-300 group-hover:bg-blue group-hover:text-white group-hover:shadow-[0_0_12px_rgba(0,87,231,0.5)]">
                        <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted line-clamp-2">
                      {tr(p.summary)}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-line/50">
                    {p.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line/70 bg-surface-2/60 px-2.5 py-0.5 text-xs font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href={getLocalizedSitePath("/projects/", locale)}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-signature px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-14px_rgba(0,87,231,.65)] transition-[transform,opacity] duration-300 hover:-translate-y-0.5 hover:opacity-90 motion-reduce:transform-none motion-reduce:transition-none"
          >
            {t.common.viewProjects}
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
