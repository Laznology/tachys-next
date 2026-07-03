import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/login", "/dashboard"].map((route) => ({
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.8,
    url: `${SITE_CONFIG.url}${route}`,
  }));

  return routes;
}
