import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-ecommerce"];

export const metadata: Metadata = page.metadata;

export default function EcommercePage() {
  return <SeoSubpage page={page} />;
}
