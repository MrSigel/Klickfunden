import type { Metadata } from "next";
import IndustryLandingPage from "@/components/IndustryLandingPage";
import { industryLandingPages } from "@/lib/seo/industry-landing-pages";
import { buildIndustryMetadata } from "@/lib/seo/metadata";

const page = industryLandingPages.handwerker;

export const metadata: Metadata = buildIndustryMetadata(page);

export default function Page() {
  return <IndustryLandingPage page={page} />;
}
