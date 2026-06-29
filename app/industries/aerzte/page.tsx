import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-aerzte"];

export const metadata: Metadata = page.metadata;

export default function AerztePage() {
  return <SeoSubpage page={page} />;
}
