import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/academy/course-detail";
import { COURSES, getCourseBySlug } from "@/data/courses";

/**
 * Static export: only the slugs returned here are built, and unknown slugs
 * are rejected at build time (`dynamicParams = false`).
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

type CourseRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CourseRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) return { title: "Course not found" };

  return {
    title: course.title.en,
    description: course.shortDescription.en,
    openGraph: {
      title: `${course.title.en} | EHATA Academy`,
      description: course.shortDescription.en,
      url: `/academy/${course.slug}`,
      type: "website",
    },
    alternates: { canonical: `/academy/${course.slug}` },
  };
}

export default async function CoursePage({ params }: CourseRouteProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return <CourseDetail course={course} />;
}
