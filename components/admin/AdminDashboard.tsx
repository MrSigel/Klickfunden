"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ClipboardCheck, FileBarChart, FolderKanban, Inbox, ListTodo, Users } from "lucide-react";

type Row = Record<string, unknown>;
type Data = Record<string, Row[]>;
const sources = ["anfragen", "leads", "audits", "aufgaben", "reports"] as const;
const actions = [["Neue Anfrage erfassen", "anfragen"], ["Neuen Lead anlegen", "leads"], ["SEO-Audit anlegen", "audits"], ["Keyword speichern", "keywords"], ["Report erstellen", "reports"], ["Aufgabe hinzufügen", "aufgaben"]];

export default function AdminDashboard() {
  const [data, setData] = useState<Data>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all(sources.map(async (source) => {
      const response = await fetch(`/api/admin/data/${source}`, { cache: "no-store" });
      if (!response.ok) throw new Error(source);
      return [source, (await response.json()).data || []] as const;
    })).then((result) => setData(Object.fromEntries(result))).catch(() => setError(true)).finally(() => setLoading(false));
  }, []);

  const today = new Date().toISOString().slice(0, 10);
  const important = (data.aufgaben || []).filter((row) => row.due_date === today && row.status !== "Erledigt" && row.status !== "Archiviert");
  const latest = (data.anfragen || []).slice(0, 5);
  const metrics = useMemo(() => [
    { label: "Neue Anfragen", value: (data.anfragen || []).filter((row) => row.status === "Neu").length, slug: "anfragen", icon: Inbox, helper: "Status Neu" },
    { label: "Offene Leads", value: (data.leads || []).filter((row) => !["Kein Interesse", "Kunde geworden", "Archiviert"].includes(String(row.status))).length, slug: "leads", icon: Users, helper: "Noch nicht abgeschlossen" },
    { label: "Aktive Projekte", value: (data.anfragen || []).filter((row) => row.status === "Gewonnen").length, slug: "anfragen", icon: FolderKanban, helper: "Gewonnene Anfragen" },
    { label: "Geplante Audits", value: (data.audits || []).filter((row) => ["Offen", "Geprüft", "Maßnahmen geplant"].includes(String(row.status))).length, slug: "audits", icon: ClipboardCheck, helper: "Noch nicht in Bearbeitung" },
    { label: "Offene Aufgaben", value: (data.aufgaben || []).filter((row) => ["Offen", "In Arbeit"].includes(String(row.status))).length, slug: "aufgaben", icon: ListTodo, helper: "Offen oder in Arbeit" },
    { label: "Erstellte Reports", value: (data.reports || []).length, slug: "reports", icon: FileBarChart, helper: "Gespeicherte Reports" },
  ], [data]);

  return <div>
    <p className="text-xs font-semibold uppercase tracking-[.2em] text-marsgreen">Klickfunden Admin</p>
    <h1 className="mt-2 font-display text-4xl font-semibold">Dashboard</h1>
    <p className="mt-2 text-sm text-mist-100/75">Zentrale Übersicht für Sichtbarkeit, Reichweite, Leads und laufende Maßnahmen.</p>
    {error && <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm">Aktuell konnten die Daten nicht geladen werden. Bitte später erneut versuchen.</div>}
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{metrics.map(({ label, value, slug, icon: Icon, helper }) => <section key={label} className="rounded-2xl border border-white/10 bg-ink-800 p-5 shadow-card"><div className="flex items-center justify-between"><span className="rounded-xl bg-marsgreen/15 p-3 text-marsgreen"><Icon className="h-5 w-5" /></span><Link href={`/admin/${slug}`} aria-label={label}><ArrowRight className="h-4 w-4 text-mist-300" /></Link></div><p className="mt-5 text-sm text-mist-300">{label}</p><p className="mt-1 font-display text-3xl font-semibold">{loading ? "—" : value}</p><p className="mt-2 text-xs text-mist-400">{helper}</p></section>)}</div>
    <div className="mt-7 grid gap-6 xl:grid-cols-3">
      <section className="admin-panel"><h2 className="admin-heading">Heute wichtig</h2>{important.length === 0 ? <div className="admin-empty !mt-5">Keine offenen Aufgaben für heute.</div> : <div className="mt-5 space-y-2">{important.map((row) => <Link href="/admin/aufgaben" key={String(row.id)} className="block rounded-xl border border-white/10 bg-ink-700 p-4"><span className="font-medium">{String(row.title)}</span><span className="mt-1 block text-xs text-mist-300">{String(row.priority || "Normal")} · {String(row.status)}</span></Link>)}</div>}</section>
      <section className="admin-panel"><h2 className="admin-heading">Letzte Anfragen</h2>{latest.length === 0 ? <div className="admin-empty !mt-5">Noch keine Einträge vorhanden.</div> : <div className="mt-5 space-y-2">{latest.map((row) => <Link href="/admin/anfragen" key={String(row.id)} className="block rounded-xl border border-white/10 bg-ink-700 p-4"><span className="font-medium">{String(row.name)}</span><span className="mt-1 block text-xs text-mist-300">{String(row.company || row.email)} · {String(row.status)}</span></Link>)}</div>}</section>
      <section className="admin-panel"><h2 className="admin-heading">Schnellaktionen</h2><div className="mt-5 space-y-2">{actions.map(([label, slug]) => <Link className="flex items-center justify-between rounded-xl border border-white/10 bg-ink-700 px-4 py-3 text-sm hover:border-marsgreen/50" key={slug} href={`/admin/${slug}?new=1`}>{label}<ArrowRight className="h-4 w-4 text-marsgreen" /></Link>)}</div></section>
    </div>
  </div>;
}
