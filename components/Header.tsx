"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Klickfunden Startseite"
        >
          <Image
            src="/brand/klickfunden/logo-footer.png"
            alt="Klickfunden Logo"
            width={501}
            height={116}
            priority
            className="h-9 w-auto max-w-[190px] sm:h-10 sm:max-w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-mist-100/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.a
            href="#angebot"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            Angebot anfordern
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        <button
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/10 bg-ink-900/95 px-5 pb-6 pt-2 lg:hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-mist-100/90"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#angebot"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Angebot anfordern
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
