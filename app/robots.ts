import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/dashboard/", "/login", "/api/"],
    },
    sitemap: "https://www.klickfunden.de/sitemap.xml",
    host: "https://www.klickfunden.de",
  };
}
