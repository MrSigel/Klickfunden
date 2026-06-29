import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-meta-ads"];

export const metadata: Metadata = page.metadata;

export default function MetaAdsPage() {
  return <SeoSubpage page={page} />;
}
