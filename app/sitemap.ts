import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { ALL_PAGES, pathFor } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/leistungen", priority: 0.9, freq: "monthly" },
    { path: "/preise", priority: 0.9, freq: "monthly" },
    { path: "/branchen", priority: 0.8, freq: "monthly" },
    { path: "/ueber-uns", priority: 0.5, freq: "yearly" },
    { path: "/kontakt", priority: 0.7, freq: "yearly" },
    { path: "/impressum", priority: 0.2, freq: "yearly" },
    { path: "/datenschutz", priority: 0.2, freq: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${site.domain}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  const pageEntries: MetadataRoute.Sitemap = ALL_PAGES.map((p) => ({
    url: `${site.domain}${pathFor(p)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.category === "leistung" ? 0.8 : 0.7,
  }));

  return [...staticEntries, ...pageEntries];
}
