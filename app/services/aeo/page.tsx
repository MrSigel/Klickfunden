import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-aeo"];

export const metadata: Metadata = page.metadata;

export default function AeoPage() {
  return <SeoSubpage page={page} />;
}
