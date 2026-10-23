import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/academy/course-detail";
import { COURSES, getCourseBySlug } from "@/data/courses";

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

  if (!course) return { title: "المسار غير موجود" };

  return {
    title: course.title.ar,
    description: course.shortDescription.ar,
    openGraph: {
      title: `${course.title.ar} | أكاديمية إحاطة`,
      description: course.shortDescription.ar,
      url: `/ar/academy/${course.slug}/`,
      type: "website",
      locale: "ar_EG",
    },
    alternates: {
      canonical: `/ar/academy/${course.slug}/`,
      languages: {
        en: `/academy/${course.slug}/`,
        ar: `/ar/academy/${course.slug}/`,
        "x-default": `/academy/${course.slug}/`,
      },
    },
  };
}

export default async function ArabicCoursePage({ params }: CourseRouteProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return <CourseDetail course={course} />;
}
