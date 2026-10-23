"use client";

/**
 * CoursesGrid — 3 columns on desktop, 2 on tablet, 1 on mobile.
 * Reveal wrappers keep the entrance stagger while cards stay reusable.
 */
import { CourseCard } from "@/components/academy/course-card";
import { Reveal } from "@/components/ui/reveal";
import type { Course } from "@/data/types";
import { cn } from "@/lib/utils";

export function CoursesGrid({
  courses,
  className,
}: {
  courses: Course[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {courses.map((course, i) => (
        <Reveal
          key={course.id}
          delay={i * 0.06}
          className="h-full"
        >
          <CourseCard course={course} />
        </Reveal>
      ))}
    </div>
  );
}
