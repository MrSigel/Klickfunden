import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-anwaelte"];

export const metadata: Metadata = page.metadata;

export default function AnwaeltePage() {
  return <SeoSubpage page={page} />;
}
