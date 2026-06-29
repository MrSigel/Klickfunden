"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FileText,
  Home,
  Inbox,
  LayoutDashboard,
  ReceiptText,
  Star,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Anfragen", href: "/dashboard/anfragen", icon: Inbox },
  { label: "Kunden", href: "/dashboard/kunden", icon: Users },
  { label: "Angebot", href: "/dashboard/angebot", icon: FileText },
  { label: "Rechnung", href: "/dashboard/rechnung", icon: ReceiptText },
  { label: "Referenzen", href: "/dashboard/referenzen", icon: Star },
];

function formatClock(date: Date) {
  return {
    day: new Intl.DateTimeFormat("de-DE", { weekday: "long" }).format(date),
    date: new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date),
    time: new Intl.DateTimeFormat("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date),
  };
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const [clock, setClock] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setClock(formatClock(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="flex min-h-screen w-full shrink-0 flex-col border-b border-white/10 bg-ink-900/95 px-5 py-6 text-white shadow-card lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <Link href="/dashboard" className="block">
        <Image
          src="/brand/klickfunden/logo-header.png"
          alt="Klickfunden"
          width={184}
          height={42}
          priority
          className="h-auto w-44"
        />
      </Link>

      <div className="mt-6 h-px w-full bg-white/10" />

      <nav className="mt-7 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "border border-marsgreen/35 bg-marsgreen/15 text-marsgreen"
                  : "text-mist-100/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 flex flex-1 flex-col justify-end">
        <div className="rounded-3xl border border-white/10 bg-ink-800/70 px-4 py-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marsgreen-300">
            {clock.day}
          </p>
          <p className="mt-2 text-sm text-mist-100/80">{clock.date}</p>
          <p className="mt-2 font-display text-3xl font-semibold text-white">
            {clock.time}
          </p>
          <div className="mt-5 text-sm leading-relaxed text-mist-100/80">
            <p>44577</p>
            <p>Castrop-Rauxel</p>
          </div>
          <div className="my-5 h-px w-full bg-white/10" />
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-400/80 px-4 py-3 text-sm font-semibold text-red-100 transition-colors hover:bg-red-500/10"
          >
            <Home className="h-4 w-4" />
            Zur Startseite
          </Link>
        </div>
      </div>
    </aside>
  );
}
