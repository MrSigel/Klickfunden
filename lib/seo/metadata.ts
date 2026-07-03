import type { Metadata } from "next";
import type { IndustryLanding } from "@/lib/seo/industry-landing-pages";

const BASE_URL = "https://www.klickfunden.de";

/** Build a standard Metadata object from an IndustryLanding page definition. */
export function buildIndustryMetadata(page: IndustryLanding): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${BASE_URL}${page.path}`,
      type: "website",
    },
  };
}
