import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brand} — ${site.tagline}`,
    short_name: site.brand,
    description:
      "Agentur für Reputationsmanagement, SEO, GEO, AEO, CRO und Performance-Ads.",
    start_url: "/",
    display: "standalone",
    background_color: "#05080a",
    theme_color: "#05080a",
    lang: "de",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
