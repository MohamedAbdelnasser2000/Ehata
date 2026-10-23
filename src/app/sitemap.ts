import type { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { BLOG_POSTS } from "@/data/blog";
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
    "/ar/",
    "/about/",
    "/ar/about/",
    "/projects/",
    "/ar/projects/",
    "/services/",
    "/contact/",
    "/academy/",
    "/ar/academy/",
    "/blog/",
    "/ar/blog/",
    "/ar/services/",
    "/ar/contact/",
    ...COURSES.map((course) => `/academy/${course.slug}/`),
    ...COURSES.map((course) => `/ar/academy/${course.slug}/`),
  ];
  const alternatePaths: Record<string, string> = {
    "/": "/ar/",
    "/ar/": "/",
    "/about/": "/ar/about/",
    "/ar/about/": "/about/",
    "/projects/": "/ar/projects/",
    "/ar/projects/": "/projects/",
    "/services/": "/ar/services/",
    "/ar/services/": "/services/",
    "/contact/": "/ar/contact/",
    "/ar/contact/": "/contact/",
    "/academy/": "/ar/academy/",
    "/ar/academy/": "/academy/",
    "/blog/": "/ar/blog/",
    "/ar/blog/": "/blog/",
  };
  for (const course of COURSES) {
    alternatePaths[`/academy/${course.slug}/`] =
      `/ar/academy/${course.slug}/`;
    alternatePaths[`/ar/academy/${course.slug}/`] =
      `/academy/${course.slug}/`;
  }
  const baseRoutes = routes.map((path) => {
    const alternatePath = alternatePaths[path];

    return {
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority:
        path === "/" || path === "/ar/"
          ? 1
          : path.includes("/academy/")
            ? 0.7
            : 0.8,
      ...(alternatePath
        ? {
            alternates: {
              languages: {
                en: `${SITE_URL}${path.startsWith("/ar/") ? alternatePath : path}`,
                ar: `${SITE_URL}${path.startsWith("/ar/") ? path : alternatePath}`,
                "x-default": `${SITE_URL}${path.startsWith("/ar/") ? alternatePath : path}`,
              },
            },
          }
        : {}),
    };
  });
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

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${SITE_URL}/blog/${post.slug}/`,
        ar: `${SITE_URL}/ar/blog/${post.slug}/`,
        "x-default": `${SITE_URL}/blog/${post.slug}/`,
      },
    },
  }));

  return [...baseRoutes, ...projectRoutes, ...serviceRoutes, ...blogRoutes];
}
