import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const fmtDate = (s: string) =>
  new Date(s).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [newLeads, customers, activeProjects, openTasks, recent] = await Promise.all([
    supabase.from("crm_leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("crm_customers").select("*", { count: "exact", head: true }),
    supabase.from("crm_projects").select("*", { count: "exact", head: true }).eq("status", "active"),
    supabase.from("crm_tasks").select("*", { count: "exact", head: true }).eq("done", false),
    supabase.from("crm_leads").select("*").order("created_at", { ascending: false }).limit(6),
  ]);

  const stats = [
    { label: "Neue Leads", value: newLeads.count ?? 0, href: "/admin/leads" },
    { label: "Kunden", value: customers.count ?? 0, href: "/admin/kunden" },
    { label: "Aktive Projekte", value: activeProjects.count ?? 0, href: "/admin/kunden" },
    { label: "Offene Aufgaben", value: openTasks.count ?? 0, href: "/admin/aufgaben" },
  ];

  return (
    <div>
      <h1 className="mb-6 font-display text-[26px] font-medium">Dashboard</h1>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="rounded-2xl border border-line bg-surface/50 p-5 transition-colors hover:border-signal/40"
          >
            <div className="font-display text-[34px] font-semibold leading-none tabular-nums text-signal">
              {s.value}
            </div>
            <div className="mt-2 text-[13px] text-fog">{s.label}</div>
          </Link>
        ))}
      </div>

      <h2 className="mb-3 mt-9 font-display text-[18px] font-medium">Neueste Anfragen</h2>
      <div className="rounded-2xl border border-line bg-surface/40">
        {recent.error && (
          <p className="p-5 text-[14px] text-[#ff8a8a]">
            Datenbank noch nicht erreichbar. Schema ausgeführt und Zugangsdaten gesetzt?
          </p>
        )}
        {!recent.error && (recent.data?.length ?? 0) === 0 && (
          <p className="p-5 text-[14px] text-fog">Noch keine Anfragen.</p>
        )}
        {recent.data?.map((l) => (
          <div key={l.id} className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 last:border-b-0">
            <div className="min-w-0">
              <p className="truncate text-[15px] text-paper">
                {l.name} {l.company ? <span className="text-fog">· {l.company}</span> : null}
              </p>
              <p className="truncate text-[13px] text-fog">{l.email || l.phone || "—"}</p>
            </div>
            <span className="shrink-0 text-[12px] text-fog-dim">{fmtDate(l.created_at)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
