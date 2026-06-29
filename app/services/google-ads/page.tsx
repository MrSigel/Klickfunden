import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-google-ads"];

export const metadata: Metadata = page.metadata;

export default function GoogleAdsPage() {
  return <SeoSubpage page={page} />;
}
