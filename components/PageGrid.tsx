import Link from "next/link";
import type { LandingPage } from "@/lib/content-types";
import { pathFor } from "@/lib/pages";
import { Reveal } from "./Reveal";

export function PageGrid({ pages }: { pages: LandingPage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p, i) => (
        <Reveal key={p.slug} delay={Math.min(i, 6) * 0.04}>
          <Link
            href={pathFor(p)}
            className="card group flex h-full flex-col"
          >
            <span className="mb-4 font-mono text-[11px]  tracking-[0.02em] text-signal">
              {p.eyebrow}
            </span>
            <h3 className="font-display text-[22px] font-medium leading-tight tracking-[-0.005em]">
              {p.name}
            </h3>
            <p className="mt-3 flex-1 text-[15px] text-fog">
              {p.lead.split(".")[0]}.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-[12px]  tracking-[0.02em] text-paper transition-colors group-hover:text-signal">
              Ansehen
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
