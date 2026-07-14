import type { Metadata } from "next";
import type { LandingPage } from "./content-types";
import { site } from "./site";
import { pathFor } from "./pages";

export function pageMetadata(page: LandingPage): Metadata {
  const path = pathFor(page);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${site.domain}${path}`,
      type: "website",
      locale: "de_DE",
      siteName: site.brand,
    },
  };
}
