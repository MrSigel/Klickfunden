import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-youtube-ads"];

export const metadata: Metadata = page.metadata;

export default function YouTubeAdsPage() {
  return <SeoSubpage page={page} />;
}
