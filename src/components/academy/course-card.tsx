"use client";

/**
 * CourseCard — the EHATA Academy card with Skiper UI Spotlight glow.
 */
import Link from "next/link";
import { ArrowUpRight, BarChart3, CalendarDays, Clock } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Icon } from "@/lib/icons";
import type { Course, CourseLevel } from "@/data/types";
import { cn } from "@/lib/utils";

export const LEVEL_TONE: Record<CourseLevel, string> = {
  beginner: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  intermediate: "bg-blue/10 text-blue dark:text-sky",
  advanced: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
};

export function CourseCard({ course }: { course: Course }) {
  const { t, tr } = useLocale();

  return (
    <SpotlightCard
      tilt={true}
      maxTilt={4}
      className="h-full rounded-2xl border-line/80 bg-surface/85 backdrop-blur-sm transition-all duration-300 hover:border-blue/40"
    >
      <article className="group flex h-full flex-col justify-between p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <span className="bg-gradient-signature grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-[0_8px_22px_-10px_rgba(0,87,231,.7)]">
              <Icon name={course.icon} className="h-5 w-5" />
            </span>
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold",
                LEVEL_TONE[course.level],
              )}
            >
              {t.courses.levels[course.level]}
            </span>
          </div>

          <h3 className="text-lg font-bold leading-snug text-balance text-foreground group-hover:text-blue transition-colors">
            {tr(course.title)}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {tr(course.shortDescription)}
          </p>

          <ul className="flex flex-col gap-1.5 text-sm text-muted">
            {course.bullets.map((bullet) => (
              <li key={bullet.en} className="flex items-start gap-2">
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                  aria-hidden
                />
                {tr(bullet)}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-line/50 pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-blue" aria-hidden />
              {tr(course.duration)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-blue" aria-hidden />
              {tr(course.schedule)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BarChart3 className="h-3.5 w-3.5 text-blue" aria-hidden />
              {t.courses.levels[course.level]}
            </span>
          </div>

          <Link
            href={`/academy/${course.slug}`}
            className="group/link inline-flex items-center gap-1 text-sm font-semibold text-blue transition-colors hover:text-sky"
          >
            {t.courses.enroll}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 rtl:-scale-x-100 rtl:group-hover/link:-translate-x-1" />
          </Link>
        </div>
      </article>
    </SpotlightCard>
  );
}
