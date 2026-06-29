import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-b2b"];

export const metadata: Metadata = page.metadata;

export default function B2bPage() {
  return <SeoSubpage page={page} />;
}
