import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-geo"];

export const metadata: Metadata = page.metadata;

export default function GeoPage() {
  return <SeoSubpage page={page} />;
}
