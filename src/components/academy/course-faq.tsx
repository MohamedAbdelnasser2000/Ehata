"use client";

/** CourseFaq — collapsible answers, same brand accordion as the services page. */
import { useLocale } from "@/components/providers/locale-provider";
import { AccordionItem, AccordionRoot } from "@/components/ui/accordion";
import { Kicker } from "@/components/ui/reveal";
import type { Course } from "@/data/types";

export function CourseFaq({ course }: { course: Course }) {
  const { t, tr } = useLocale();

  return (
    <div className="border-t border-line pt-10 md:pt-12">
      <div className="mb-6 flex flex-col gap-2">
        <Kicker>{t.coursePage.faqKicker}</Kicker>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t.coursePage.faqTitle}
        </h2>
      </div>

      <AccordionRoot type="single" collapsible className="flex flex-col gap-3">
        {course.faq.map((item, i) => (
          <AccordionItem
            key={item.q.en}
            value={String(i)}
            question={tr(item.q)}
          >
            {tr(item.a)}
          </AccordionItem>
        ))}
      </AccordionRoot>
    </div>
  );
}
