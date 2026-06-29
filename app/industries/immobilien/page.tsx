import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-immobilien"];

export const metadata: Metadata = page.metadata;

export default function ImmobilienPage() {
  return <SeoSubpage page={page} />;
}
