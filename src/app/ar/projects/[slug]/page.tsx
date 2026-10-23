import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/project-detail-page";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import { createProjectMetadata } from "@/lib/project-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return project
    ? createProjectMetadata(project, "ar")
    : { title: "المشروع غير موجود", robots: { index: false, follow: false } };
}

export default async function ArabicProjectPage({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectDetailPage project={project} locale="ar" />;
}
