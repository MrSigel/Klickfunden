"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import type { Resource } from "@/lib/admin-resources";

type Row = Record<string, unknown>;

export default function ResourceManager({ resource }: { resource: Resource }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [pending, setPending] = useState(false);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [secondary, setSecondary] = useState("");
  const [editing, setEditing] = useState<Row | null>(null);
  const [viewing, setViewing] = useState<Row | null>(null);
  const endpoint = `/api/admin/data/${resource.slug}`;

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(endpoint, { cache: "no-store" });
      if (!response.ok) throw new Error("load");
      setRows((await response.json()).data || []);
      setLoadError(false);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => {
    if (searchParams.get("new") === "1") {
      setEditing({});
      router.replace(`/admin/${resource.slug}`, { scroll: false });
    }
  }, [resource.slug, router, searchParams]);

  const statusField = resource.fields.find((field) => field.key === "status");
  const secondaryField = resource.fields.find((field) => ["industry", "category", "channel", "area", "report_type", "priority"].includes(field.key));
  const secondaryOptions = useMemo(() => secondaryField ? Array.from(new Set(rows.map((row) => String(row[secondaryField.key] || "")).filter(Boolean))).sort() : [], [rows, secondaryField]);
  const columns = useMemo(() => {
    const result = resource.fields.slice(0, 3);
    if (statusField && !result.includes(statusField)) result.push(statusField);
    return result;
  }, [resource.fields, statusField]);
  const filtered = useMemo(() => rows.filter((row) =>
    (!query || resource.search.some((key) => String(row[key] || "").toLowerCase().includes(query.trim().toLowerCase()))) &&
    (!status || row.status === status) && (!secondary || (secondaryField && row[secondaryField.key] === secondary))),
  [query, resource.search, rows, secondary, secondaryField, status]);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaveError(false); setPending(true);
    const payload: Record<string, unknown> = Object.fromEntries(new FormData(event.currentTarget));
    if (editing?.id) payload.id = editing.id;
    try {
      const response = await fetch(endpoint, { method: editing?.id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("save");
      setEditing(null); await load();
    } catch { setSaveError(true); } finally { setPending(false); }
  }

  async function remove(row: Row) {
    if (!window.confirm(`„${String(row[resource.fields[0].key] || resource.singular)}“ wirklich löschen?`)) return;
    try {
      const response = await fetch(endpoint, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: row.id }) });
      if (!response.ok) throw new Error("delete");
      await load();
    } catch { setSaveError(true); }
  }

  return <div>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-marsgreen">Klickfunden Admin</p><h1 className="mt-2 font-display text-4xl font-semibold">{resource.title}</h1><p className="mt-2 text-sm text-mist-100/75">{resource.description}</p></div><button className="btn-primary" onClick={() => setEditing({})}><Plus className="h-4 w-4" />{resource.singular} anlegen</button></div>
    <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-ink-800 p-4 lg:flex-row"><label className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-ink-700 px-3"><Search className="h-4 w-4 text-mist-300" /><span className="sr-only">Suchen</span><input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent py-3 outline-none" placeholder="Suchen …" /></label>{statusField && <select aria-label="Nach Status filtern" value={status} onChange={(event) => setStatus(event.target.value)} className="admin-input lg:w-56"><option value="">Alle Status</option>{statusField.options?.map((value) => <option key={value}>{value}</option>)}</select>}{secondaryField && secondaryOptions.length > 0 && <select aria-label={`Nach ${secondaryField.label} filtern`} value={secondary} onChange={(event) => setSecondary(event.target.value)} className="admin-input lg:w-56"><option value="">Alle {secondaryField.label}</option>{secondaryOptions.map((value) => <option key={value}>{value}</option>)}</select>}</div>
    {saveError && <p role="alert" className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">Der Eintrag konnte nicht gespeichert werden.</p>}
    {loadError ? <div className="admin-empty">Aktuell konnten die Daten nicht geladen werden. Bitte später erneut versuchen.</div> : loading ? <div className="admin-empty">Daten werden geladen …</div> : filtered.length === 0 ? <div className="admin-empty">Noch keine Einträge vorhanden.</div> : <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-ink-900 text-mist-300"><tr>{columns.map((field) => <th className="px-5 py-4" key={field.key}>{field.label}</th>)}<th className="px-5 py-4">Aktionen</th></tr></thead><tbody>{filtered.map((row) => <tr className="border-t border-white/10 bg-ink-800" key={String(row.id)}>{columns.map((field) => <td className="max-w-xs truncate px-5 py-4" key={field.key}>{String(row[field.key] ?? "—")}</td>)}<td className="whitespace-nowrap px-5 py-4"><button aria-label="Details anzeigen" onClick={() => setViewing(row)} className="mr-3 text-mist-100 hover:text-white"><Eye className="h-4 w-4" /></button><button aria-label="Bearbeiten" onClick={() => setEditing(row)} className="mr-3 text-marsgreen"><Pencil className="h-4 w-4" /></button><button aria-label="Löschen" onClick={() => remove(row)} className="text-red-300"><Trash2 className="h-4 w-4" /></button></td></tr>)}</tbody></table></div>}
    {viewing && <div role="dialog" aria-modal="true" aria-label={`${resource.singular} Details`} className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 p-4"><section className="mx-auto my-6 max-w-3xl rounded-3xl bg-ink-800 p-6 shadow-card"><div className="flex justify-between"><h2 className="font-display text-2xl font-semibold">{resource.singular} Details</h2><button aria-label="Schließen" onClick={() => setViewing(null)}><X /></button></div><dl className="mt-6 grid gap-5 sm:grid-cols-2">{resource.fields.map((field) => <div key={field.key} className={field.type === "textarea" ? "sm:col-span-2" : ""}><dt className="text-xs uppercase tracking-wider text-mist-400">{field.label}</dt><dd className="mt-1 whitespace-pre-wrap text-sm">{String(viewing[field.key] ?? "—")}</dd></div>)}<div><dt className="text-xs uppercase tracking-wider text-mist-400">Erstellt am</dt><dd className="mt-1 text-sm">{formatDate(viewing.created_at)}</dd></div><div><dt className="text-xs uppercase tracking-wider text-mist-400">Aktualisiert am</dt><dd className="mt-1 text-sm">{formatDate(viewing.updated_at)}</dd></div></dl><div className="mt-7 flex justify-end gap-3"><button className="btn-secondary" onClick={() => setViewing(null)}>Schließen</button><button className="btn-primary" onClick={() => { setEditing(viewing); setViewing(null); }}>Bearbeiten</button></div></section></div>}
    {editing && <div role="dialog" aria-modal="true" aria-label={`${resource.singular} bearbeiten`} className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 p-4"><form onSubmit={save} className="mx-auto my-6 max-w-3xl rounded-3xl bg-ink-800 p-6 shadow-card"><div className="flex justify-between"><h2 className="font-display text-2xl font-semibold">{editing.id ? "Bearbeiten" : "Neu anlegen"}</h2><button type="button" aria-label="Schließen" onClick={() => setEditing(null)}><X /></button></div><div className="mt-6 grid gap-5 sm:grid-cols-2">{resource.fields.map((field) => <label key={field.key} className={field.type === "textarea" ? "sm:col-span-2" : ""}><span className="mb-2 block text-sm">{field.label}</span>{field.type === "textarea" ? <textarea name={field.key} defaultValue={String(editing[field.key] || "")} required={field.required} className="admin-input min-h-28" /> : field.type === "select" ? <select name={field.key} defaultValue={String(editing[field.key] || field.options?.[0])} className="admin-input">{field.options?.map((value) => <option key={value}>{value}</option>)}</select> : <input name={field.key} type={field.type || "text"} defaultValue={String(editing[field.key] || "")} required={field.required} min={field.type === "number" ? 0 : undefined} max={field.type === "number" ? 100 : undefined} className="admin-input" />}</label>)}</div>{saveError && <p role="alert" className="mt-5 text-sm text-red-200">Der Eintrag konnte nicht gespeichert werden.</p>}<div className="mt-7 flex justify-end gap-3"><button type="button" className="btn-secondary" onClick={() => setEditing(null)}>Abbrechen</button><button disabled={pending} className="btn-primary disabled:opacity-60">{pending ? "Speichern …" : "Speichern"}</button></div></form></div>}
  </div>;
}

function formatDate(value: unknown) {
  if (!value) return "—";
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? "—" : new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short" }).format(date);
}
