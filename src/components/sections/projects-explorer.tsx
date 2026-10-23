"use client";

/**
 * ProjectsExplorer — filter chips + animated layout grid + static case-study links.
 * Enhanced with Skiper UI Spotlight cards and Vengeance UI Aurora lighting.
 */
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { Kicker, SplitHeading } from "@/components/ui/reveal";
import { ProjectCover } from "@/components/ui/project-cover";
import { Section } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { PROJECTS } from "@/data/projects";
import type { ProjectCategory } from "@/data/types";
import { getProjectPath } from "@/lib/project-routes";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const FILTERS: Filter[] = [
  "all",
  ...Array.from(new Set(PROJECTS.map((project) => project.category))),
];

export function ProjectsExplorer() {
  const { t, tr, locale } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () =>
      filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <>
      <Section className="relative !pt-36 !pb-10 md:!pt-44 overflow-hidden">
        {/* Vengeance UI Aurora Ambient Background */}
        <AuroraBackground glowOpacity={0.4} />

        <div className="mb-10 flex flex-col items-center gap-5 text-center">
          <Kicker>{t.projectsPage.kicker}</Kicker>
          <SplitHeading
            as="h1"
            lines={[t.projectsPage.title]}
            className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl"
          />
          <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
            {t.projectsPage.subtitle}
          </p>
        </div>

        {/* Filter chips */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-2.5"
          role="group"
          aria-label={t.projectsPage.kicker}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative rounded-full border border-line bg-surface/70 px-5 py-2.5 text-sm font-semibold text-muted backdrop-blur-sm transition-all hover:border-blue/40 hover:text-foreground",
                filter === f && "border-transparent text-white shadow-[0_0_18px_rgba(0,87,231,0.4)]",
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="bg-gradient-signature absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{t.projectsPage.filters[f]}</span>
            </button>
          ))}
        </div>

        {/* Grid with animated layout transitions & Skiper UI Spotlight Cards */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, index) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <Link
                  href={getProjectPath(p.id, locale)}
                  className="group block h-full focus:outline-none"
                >
                  <SpotlightCard
                    tilt={true}
                    maxTilt={4}
                    className="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-line/80 bg-surface/85 backdrop-blur-sm transition-all duration-300 hover:border-blue/40"
                  >
                    <div>
                      <div className="relative h-48 w-full overflow-hidden border-b border-line/50">
                        <ProjectCover
                          project={p}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="absolute start-3 top-3 rounded-full border border-line bg-surface/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-md">
                          {t.projectsPage.filters[p.category]}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-baseline justify-between gap-2">
                          <h2 className="text-lg font-bold text-foreground transition-colors group-hover:text-blue">
                            {tr(p.title)}
                          </h2>
                          {p.status && (
                            <span className="shrink-0 text-xs font-medium text-muted">
                              {tr(p.status)}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                          {tr(p.summary)}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-line/70 bg-surface-2/60 px-2.5 py-0.5 text-[11px] font-medium text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                        {p.tech.length > 3 && (
                          <span className="rounded-full border border-line/70 bg-surface-2/60 px-2.5 py-0.5 text-[11px] font-medium text-muted">
                            +{p.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="border-t border-line/50 pt-3">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                          {t.common.viewCaseStudy}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-muted">{t.projectsPage.empty}</p>
        )}
      </Section>
    </>
  );
}
