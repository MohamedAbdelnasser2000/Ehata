"use client";

/**
 * CourseCurriculum — Radix accordion, one item per module. The first module
 * starts open so the shape of the course is visible without a click.
 */
import { Check } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { AccordionItem, AccordionRoot } from "@/components/ui/accordion";
import { Kicker } from "@/components/ui/reveal";
import type { Course } from "@/data/types";

export function CourseCurriculum({ course }: { course: Course }) {
  const { t, tr } = useLocale();

  return (
    <div className="border-t border-line pt-10 md:pt-12">
      <div className="mb-6 flex flex-col gap-2">
        <Kicker>{t.coursePage.curriculumKicker}</Kicker>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.coursePage.curriculumTitle}
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
          {t.coursePage.curriculumSubtitle}
        </p>
      </div>

      <AccordionRoot
        type="single"
        collapsible
        defaultValue="0"
        className="flex flex-col gap-3"
      >
        {course.curriculum.map((module, i) => (
          <AccordionItem
            key={module.title.en}
            value={String(i)}
            question={
              <span className="flex flex-1 flex-wrap items-center justify-between gap-3 pe-2">
                <span>{tr(module.title)}</span>
                <span className="rounded-full bg-blue/10 px-2.5 py-1 text-[11px] font-semibold text-blue">
                  {tr(module.duration)}
                </span>
              </span>
            }
          >
            <ul className="flex flex-col gap-2.5">
              {module.lessons.map((lesson) => (
                <li key={lesson.en} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span>{tr(lesson)}</span>
                </li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  );
}
