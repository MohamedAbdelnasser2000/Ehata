"use client";

/**
 * CourseHero — banner, breadcrumb and the six-cell quick-info bar.
 * Enhanced with Vengeance UI Aurora & Skiper UI Spotlight facts bar.
 */
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CalendarClock,
  CalendarDays,
  ChevronRight,
  Clock,
  Languages,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { EnrollButton } from "@/components/academy/enroll-button";
import { LEVEL_TONE } from "@/components/academy/course-card";
import { useLocale } from "@/components/providers/locale-provider";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Icon } from "@/lib/icons";
import type { Course } from "@/data/types";
import { cn } from "@/lib/utils";
import { getLocalizedSitePath } from "@/lib/localized-site-path";

export function CourseHero({ course }: { course: Course }) {
  const { t, tr, locale } = useLocale();

  const facts: { label: string; value: string; icon: LucideIcon }[] = [
    {
      label: t.coursePage.quickInfo.duration,
      value: tr(course.duration),
      icon: Clock,
    },
    {
      label: t.coursePage.quickInfo.schedule,
      value: tr(course.schedule),
      icon: CalendarDays,
    },
    {
      label: t.coursePage.quickInfo.level,
      value: t.courses.levels[course.level],
      icon: BarChart3,
    },
    {
      label: t.coursePage.quickInfo.language,
      value: tr(course.language),
      icon: Languages,
    },
    {
      label: t.coursePage.quickInfo.batch,
      value: tr(course.nextBatchDate),
      icon: CalendarClock,
    },
    {
      label: t.coursePage.quickInfo.price,
      value: tr(course.price),
      icon: Wallet,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* Vengeance UI Aurora Background */}
      <AuroraBackground glowOpacity={0.45} />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted"
        >
          <Link
            href={getLocalizedSitePath("/", locale)}
            className="transition-colors hover:text-blue"
          >
            {t.coursePage.breadcrumbHome}
          </Link>
          <ChevronRight
            className="h-3.5 w-3.5 flex-none opacity-60 rtl:-scale-x-100"
            aria-hidden
          />
          <Link
            href={getLocalizedSitePath("/academy/", locale)}
            className="transition-colors hover:text-blue"
          >
            {t.coursePage.breadcrumbAcademy}
          </Link>
          <ChevronRight
            className="h-3.5 w-3.5 flex-none opacity-60 rtl:-scale-x-100"
            aria-hidden
          />
          <span className="min-w-0 truncate text-foreground" aria-current="page">
            {tr(course.title)}
          </span>
        </nav>

        <div className="mt-9 grid items-center gap-10 md:mt-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="flex flex-col items-start gap-5">
            <div className="flex w-full items-center justify-between gap-4">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  LEVEL_TONE[course.level],
                )}
              >
                {t.courses.levels[course.level]}
              </span>

              {/* Compact icon for mobile */}
              <span className="bg-gradient-signature grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[0_12px_30px_-12px_rgba(0,87,231,.8)] lg:hidden">
                <Icon name={course.icon} className="h-6 w-6" />
              </span>
            </div>

            <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-5xl text-foreground">
              {tr(course.title)}
            </h1>

            <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
              {tr(course.fullDescription)}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-3">
              <EnrollButton
                courseTitle={course.title}
                label={t.coursePage.enroll}
              />
              <Link
                href={getLocalizedSitePath("/academy/", locale)}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface/70 px-5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-blue/50 hover:text-blue"
              >
                <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
                {t.coursePage.backToAcademy}
              </Link>
            </div>
          </div>

          {/* Large gradient plate (desktop) */}
          <div className="relative hidden justify-self-end lg:block" aria-hidden>
            <div className="absolute -inset-8 rounded-full bg-blue/15 blur-3xl" />
            <div className="absolute -inset-4 rounded-[2.75rem] border border-dashed border-blue/25 animate-spin-slow" />
            <div className="glass relative grid h-56 w-56 place-items-center rounded-[2rem] card-shadow border border-line/80 backdrop-blur-md">
              <span className="bg-gradient-signature grid h-32 w-32 place-items-center rounded-[1.6rem] text-white shadow-[0_18px_45px_-16px_rgba(0,87,231,.9)] animate-float-slow">
                <Icon name={course.icon} className="h-14 w-14" />
              </span>
            </div>
          </div>
        </div>

        {/* Quick info bar with modern glassmorphism */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line/80 bg-line/70 card-shadow backdrop-blur-md sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 md:mt-16">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-start gap-3 bg-surface/90 p-4 transition-colors hover:bg-surface"
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue/10 text-blue">
                <fact.icon className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-bold leading-snug text-foreground">
                  {fact.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
