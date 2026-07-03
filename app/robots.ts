import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: "/api/",
      userAgent: "*",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
