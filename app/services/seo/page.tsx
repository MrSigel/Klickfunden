import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["services-seo"];

export const metadata: Metadata = page.metadata;

export default function SeoPage() {
  return <SeoSubpage page={page} />;
}
