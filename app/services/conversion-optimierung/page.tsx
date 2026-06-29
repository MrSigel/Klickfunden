import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-conversion-optimierung"];

export const metadata: Metadata = page.metadata;

export default function ConversionOptimierungPage() {
  return <SeoSubpage page={page} />;
}
