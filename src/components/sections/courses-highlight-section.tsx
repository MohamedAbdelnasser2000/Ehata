"use client";

/** Courses/training highlight — EHATA Academy teaser (#courses anchor). */
import { CoursesGrid } from "@/components/academy/courses-grid";
import { useLocale } from "@/components/providers/locale-provider";
import { Kicker, SplitHeading } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { COURSES } from "@/data/courses";

export function CoursesHighlightSection() {
  const { t } = useLocale();

  return (
    <Section id="courses" tone="surface">
      <SectionHeading
        kicker={<Kicker>{t.courses.kicker}</Kicker>}
        title={
          <SplitHeading
            lines={[t.courses.title]}
            className="text-3xl font-bold sm:text-4xl"
          />
        }
        subtitle={t.courses.subtitle}
      />

      <CoursesGrid courses={COURSES} />
    </Section>
  );
}
