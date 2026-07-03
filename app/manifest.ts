import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#ffffff",
    description: SITE_CONFIG.description,
    display: "standalone",
    icons: [
      {
        sizes: "192x192",
        src: "/icon-192x192.png",
        type: "image/png",
      },
      {
        sizes: "512x512",
        src: "/icon-512x512.png",
        type: "image/png",
      },
    ],
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.name,
    start_url: "/",
    theme_color: "#000000",
  };
}
