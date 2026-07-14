import { SERVICES } from "./services";
import { INDUSTRIES } from "./industries";
import type { LandingPage } from "./content-types";

export { SERVICES, INDUSTRIES };
export type { LandingPage };

export const ALL_PAGES: LandingPage[] = [...SERVICES, ...INDUSTRIES];

export function getPage(slug: string): LandingPage | undefined {
  return ALL_PAGES.find((p) => p.slug === slug);
}

export function pathFor(p: Pick<LandingPage, "category" | "slug">): string {
  return p.category === "leistung"
    ? `/leistungen/${p.slug}`
    : `/branchen/${p.slug}`;
}
