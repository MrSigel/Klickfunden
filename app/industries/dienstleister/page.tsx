import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-dienstleister"];

export const metadata: Metadata = page.metadata;

export default function DienstleisterPage() {
  return <SeoSubpage page={page} />;
}
