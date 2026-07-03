import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-pages";
import { questionPages } from "@/lib/seo/question-pages";
import { industryLandingPages } from "@/lib/seo/industry-landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.klickfunden.de";
  const now = new Date();
  const seoRoutes = Object.values(seoPages).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.category === "Leistung" ? 0.8 : 0.7,
  }));
  const questionRoutes = Object.values(questionPages).map((page) => ({ url: `${baseUrl}/fragen/${page.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));
  const industryRoutes = Object.values(industryLandingPages).map((page) => ({ url: `${baseUrl}${page.path}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 }));
  const sibylleRoutes = [
    ["/sibylle", 0.8],
    ["/sibylle/ueber-mich", 0.7],
    ["/sibylle/systemaufstellung", 0.7],
    ["/sibylle/beziehungsmuster", 0.7],
    ["/sibylle/partnerschaft", 0.6],
    ["/sibylle/sinnfrage", 0.7],
    ["/sibylle/familienmuster", 0.6],
    ["/sibylle/methode", 0.7],
    ["/sibylle/preise", 0.7],
    ["/sibylle/referenzen", 0.5],
    ["/sibylle/faq", 0.5],
    ["/sibylle/wissen", 0.5],
    ["/sibylle/academy", 0.5],
  ].map(([path, priority]) => ({ url: `${baseUrl}${path}`, lastModified: now, changeFrequency: "monthly" as const, priority: priority as number }));
  const sibylleLegalRoutes = ["impressum", "datenschutz", "agb", "widerruf", "cookies"].map((path) => ({ url: `${baseUrl}/sibylle/${path}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/partner`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/partnerbedingungen`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/kostenlose-erstpruefung`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...questionRoutes,
    ...industryRoutes,
    ...seoRoutes,
    ...sibylleRoutes,
    ...sibylleLegalRoutes,
    { url: `${baseUrl}/standort/castrop-rauxel`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
