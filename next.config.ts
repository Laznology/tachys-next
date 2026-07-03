import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers() {
    return [
      {
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self'",
          },
        ],
        source: "/sw.js",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
