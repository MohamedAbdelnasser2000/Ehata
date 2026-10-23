"use client";

/**
 * CourseDetail — composes a course page from the shared academy components:
 * hero + quick facts, outcomes, curriculum accordion, toolbox, projects,
 * requirements/audience, FAQ and the closing WhatsApp CTA.
 */
import {
  Check,
  FolderKanban,
  ListChecks,
  Users,
  Wrench,
} from "lucide-react";
import { CourseCurriculum } from "@/components/academy/course-curriculum";
import { CourseFaq } from "@/components/academy/course-faq";
import { CourseHero } from "@/components/academy/course-hero";
import { CourseSidebar } from "@/components/academy/course-sidebar";
import { EnrollButton } from "@/components/academy/enroll-button";
import { useLocale } from "@/components/providers/locale-provider";
import { Kicker, Reveal } from "@/components/ui/reveal";
import type { Course } from "@/data/types";

export function CourseDetail({ course }: { course: Course }) {
  const { t, tr } = useLocale();

  return (
    <div className="pb-28 lg:pb-0">
      <CourseHero course={course} />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <article className="flex min-w-0 flex-col gap-10 md:gap-12">
            {/* Outcomes */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Kicker>{t.coursePage.outcomesKicker}</Kicker>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {t.coursePage.outcomesTitle}
                </h2>
              </div>
              <Reveal>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {course.outcomes.map((outcome) => (
                    <li
                      key={outcome.en}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 text-sm leading-relaxed text-foreground"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      <span>{tr(outcome)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <CourseCurriculum course={course} />

            {/* Tools */}
            <div className="border-t border-line pt-10 md:pt-12">
              <div className="flex flex-col gap-2">
                <Kicker>{t.coursePage.toolsKicker}</Kicker>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {t.coursePage.toolsTitle}
                </h2>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground"
                  >
                    <Wrench className="h-3.5 w-3.5 text-blue" aria-hidden />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="border-t border-line pt-10 md:pt-12">
              <div className="flex flex-col gap-2">
                <Kicker>{t.coursePage.projectsKicker}</Kicker>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {t.coursePage.projectsTitle}
                </h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
                  {t.coursePage.projectsSubtitle}
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {course.projects.map((project, i) => (
                  <Reveal key={project.title.en} delay={i * 0.06}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-5 card-shadow">
                      <div className="flex items-center justify-between gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue/10 text-blue">
                          <FolderKanban className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-bold leading-snug">
                        {tr(project.title)}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {tr(project.description)}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Requirements + audience */}
            <div className="grid gap-5 border-t border-line pt-10 md:grid-cols-2 md:pt-12">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue/10 text-blue">
                    <ListChecks className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="text-lg font-bold">
                    {t.coursePage.requirementsTitle}
                  </h2>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-muted">
                  {course.requirements.map((item) => (
                    <li key={item.en} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                        aria-hidden
                      />
                      {tr(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/15 text-violet-700 dark:text-violet-300">
                    <Users className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="text-lg font-bold">
                    {t.coursePage.audienceTitle}
                  </h2>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm leading-relaxed text-muted">
                  {course.audience.map((item) => (
                    <li key={item.en} className="flex items-start gap-2.5">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                        aria-hidden
                      />
                      {tr(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CourseFaq course={course} />
          </article>

          <CourseSidebar course={course} />
        </div>

        {/* Closing CTA */}
        <Reveal className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-card bg-navy p-8 text-white md:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(55% 90% at 85% 15%, rgba(0,87,231,.45), transparent 60%), radial-gradient(45% 70% at 10% 90%, rgba(46,155,255,.3), transparent 60%)",
              }}
              aria-hidden
            />
            <div
              className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_70%_at_50%_50%,black,transparent)]"
              aria-hidden
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-extrabold leading-tight text-balance sm:text-3xl">
                  <span className="text-gradient">{t.coursePage.finalTitle}</span>
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                  {t.coursePage.finalSubtitle}
                </p>
              </div>
              <EnrollButton
                courseTitle={course.title}
                variant="onDark"
                label={t.coursePage.finalCta}
                className="shrink-0"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
