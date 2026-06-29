import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-content-seo"];

export const metadata: Metadata = page.metadata;

export default function ContentSeoPage() {
  return <SeoSubpage page={page} />;
}
