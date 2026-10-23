import type { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { getProjectPath } from "@/lib/project-routes";
import { getServicePath } from "@/lib/service-routes";
import { SITE_URL } from "@/lib/site-url";

/* Required by `output: "export"` — force the metadata route to render at build. */
export const dynamic = "force-static";

/* Static export note: metadata routes are emitted as real files at build. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];

  const routes = [
    "/",
    "/about/",
    "/projects/",
    "/services/",
    "/contact/",
    "/academy/",
    "/ar/services/",
    "/ar/contact/",
    ...COURSES.map((course) => `/academy/${course.slug}/`),
  ];
  const baseRoutes = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path.startsWith("/academy/") ? 0.7 : 0.8,
  }));
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE_URL}${getProjectPath(project.id)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${SITE_URL}${getProjectPath(project.id, "en")}`,
        ar: `${SITE_URL}${getProjectPath(project.id, "ar")}`,
      },
    },
  }));
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_URL}${getServicePath(service.id)}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${SITE_URL}${getServicePath(service.id, "en")}`,
        ar: `${SITE_URL}${getServicePath(service.id, "ar")}`,
      },
    },
  }));

  return [...baseRoutes, ...projectRoutes, ...serviceRoutes];
}
