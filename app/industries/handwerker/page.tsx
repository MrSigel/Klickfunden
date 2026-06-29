import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-handwerker"];

export const metadata: Metadata = page.metadata;

export default function HandwerkerPage() {
  return <SeoSubpage page={page} />;
}
