import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-gastronomie"];

export const metadata: Metadata = page.metadata;

export default function GastronomiePage() {
  return <SeoSubpage page={page} />;
}
