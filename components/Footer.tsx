import Link from "next/link";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/lib/site";
import { SERVICES, INDUSTRIES, pathFor } from "@/lib/pages";
import { WhatsAppIcon } from "./icons";

const topServices = SERVICES.slice(0, 6);
const topIndustries = INDUSTRIES.slice(0, 6);

export function Footer() {
  return (
    <footer className="mt-[clamp(40px,6vw,90px)] rounded-t-[clamp(32px,5vw,64px)] border-t border-line bg-surface/40">
      <div className="mx-auto max-w-[var(--maxw)] px-[var(--gutter)] py-[clamp(48px,6vw,80px)]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[30ch] text-[15px] text-fog">
              Reputation, Sichtbarkeit &amp; Wachstum für lokale Betriebe — messbar statt Bauchgefühl.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface/70 py-2.5 pl-2.5 pr-5 transition-colors hover:border-signal/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                <WhatsAppIcon size={22} />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] text-fog">Schreib uns direkt</span>
                <span className="block font-semibold text-paper">WhatsApp öffnen</span>
              </span>
            </a>
          </div>

          <FooterCol title="Leistungen" links={topServices.map((s) => ({ href: pathFor(s), label: s.name }))} more={{ href: "/leistungen", label: "Alle Leistungen" }} />
          <FooterCol title="Branchen" links={topIndustries.map((s) => ({ href: pathFor(s), label: s.name }))} more={{ href: "/branchen", label: "Alle Branchen" }} />
          <FooterCol
            title="Unternehmen"
            links={[
              { href: "/preise", label: "Pakete & Preise" },
              { href: "/ueber-uns", label: "Über uns" },
              { href: "/kontakt", label: "Kontakt" },
              { href: "/impressum", label: "Impressum" },
              { href: "/datenschutz", label: "Datenschutz" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-fog-dim">
          <span>© 2026 {site.brand} · {site.legalName}</span>
          <span>{site.address.city}, {site.address.countryName}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  more,
}: {
  title: string;
  links: { href: string; label: string }[];
  more?: { href: string; label: string };
}) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-[11px]  tracking-[0.02em] text-fog-dim">{title}</h3>
      <ul className="grid gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[14px] text-fog transition-colors hover:text-signal">
              {l.label}
            </Link>
          </li>
        ))}
        {more && (
          <li>
            <Link href={more.href} className="text-[14px] text-paper transition-colors hover:text-signal">
              {more.label} →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
