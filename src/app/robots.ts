import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/* Required by `output: "export"` — force the metadata route to render at build. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(SITE_URL ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
