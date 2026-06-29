import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-local-seo"];

export const metadata: Metadata = page.metadata;

export default function LocalSeoPage() {
  return <SeoSubpage page={page} />;
}
