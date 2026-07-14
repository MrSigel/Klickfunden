"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

const LINKS = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/branchen", label: "Branchen" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background,border-color,backdrop-filter] duration-500 ${
        stuck ? "border-line bg-ink/70 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-[var(--gutter)] py-[16px]">
        <Link href="/" aria-label={`${site.brand} Startseite`}>
          <Logo />
        </Link>

        <nav className="ml-auto mr-2 hidden items-center gap-[30px] md:flex" aria-label="Hauptnavigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-fog transition-colors hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink("Hallo Klickfunden, ich habe eine Frage.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden !h-11 !px-[18px] md:inline-flex"
        >
          <WhatsAppIcon size={17} />
          WhatsApp schreiben
        </a>

        <button
          className="ml-auto flex flex-col gap-[5px] p-2 md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-paper transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-paper transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-b border-line bg-ink/95 px-[var(--gutter)] pb-7 pt-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile Navigation"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-fog transition-colors hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Hallo Klickfunden, ich habe eine Frage.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-3"
          >
            <WhatsAppIcon size={18} />
            Per WhatsApp schreiben
          </a>
        </nav>
      )}
    </header>
  );
}
