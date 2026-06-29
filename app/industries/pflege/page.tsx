import type { Metadata } from "next";
import SeoSubpage from "@/components/SeoSubpage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["industries-pflege"];

export const metadata: Metadata = page.metadata;

export default function PflegePage() {
  return <SeoSubpage page={page} />;
}
