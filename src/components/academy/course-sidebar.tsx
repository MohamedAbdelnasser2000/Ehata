"use client";

/**
 * CourseSidebar — sticky summary + enrollment on desktop with BorderBeam,
 * fixed bottom bar on mobile.
 */
import { CalendarClock, CalendarDays, Clock, Languages, Wallet } from "lucide-react";
import { EnrollButton } from "@/components/academy/enroll-button";
import { LEVEL_TONE } from "@/components/academy/course-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { useLocale } from "@/components/providers/locale-provider";
import type { Course } from "@/data/types";
import { cn } from "@/lib/utils";

export function CourseSidebar({ course }: { course: Course }) {
  const { t, tr } = useLocale();

  const rows = [
    { icon: Clock, label: t.coursePage.quickInfo.duration, value: tr(course.duration) },
    { icon: CalendarDays, label: t.coursePage.quickInfo.schedule, value: tr(course.schedule) },
    { icon: CalendarClock, label: t.coursePage.quickInfo.batch, value: tr(course.nextBatchDate) },
    { icon: Languages, label: t.coursePage.quickInfo.language, value: tr(course.language) },
  ];

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-28 relative overflow-hidden rounded-2xl border border-line/80 bg-surface/90 p-6 card-shadow backdrop-blur-md">
          <BorderBeam size={140} duration={9} borderWidth={1.5} />
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {t.coursePage.sidebarTitle}
            </p>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground">
                <Wallet className="h-4 w-4 text-blue" aria-hidden />
                {tr(course.price)}
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                  LEVEL_TONE[course.level],
                )}
              >
                {t.courses.levels[course.level]}
              </span>
            </div>
          </div>

          <dl className="mt-5 flex flex-col gap-3 border-t border-line/60 pt-5 text-sm">
            {rows.map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-3">
                <dt className="inline-flex items-center gap-2 text-muted">
                  <row.icon className="h-4 w-4 shrink-0 text-blue" aria-hidden />
                  {row.label}
                </dt>
                <dd className="text-end font-semibold text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>

          <EnrollButton
            courseTitle={course.title}
            className="mt-6 w-full shadow-[0_10px_28px_-10px_rgba(0,87,231,0.6)]"
          />
          <p className="mt-3 text-center text-xs leading-relaxed text-muted">
            {t.coursePage.sidebarNote}
          </p>
        </div>
      </aside>

      {/* Mobile enrollment bar */}
      <div className="course-mobile-bar glass fixed inset-x-0 bottom-0 z-[60] border-t border-line px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              {t.coursePage.quickInfo.price}
            </p>
            <p className="truncate text-sm font-bold text-foreground">
              {tr(course.price)}
            </p>
          </div>
          <EnrollButton
            courseTitle={course.title}
            label={t.coursePage.enroll}
            className="h-10 px-5 text-sm"
          />
        </div>
      </div>
    </>
  );
}
