import { createClient } from "@/lib/supabase/server";
import { createCustomer, createProject } from "../actions";

export const dynamic = "force-dynamic";

const eur = (n: number | null) =>
  n == null ? "—" : n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

const projStatus: Record<string, string> = {
  planning: "Planung",
  active: "Aktiv",
  review: "Review",
  done: "Fertig",
  paused: "Pausiert",
};

const inputCls =
  "h-10 rounded-lg border border-line-hard bg-ink/60 px-3 text-[14px] text-paper placeholder:text-fog-dim focus:border-signal focus:outline-none";

export default async function KundenPage() {
  const supabase = await createClient();
  const [{ data: customers }, { data: projects }] = await Promise.all([
    supabase.from("crm_customers").select("*").order("created_at", { ascending: false }),
    supabase.from("crm_projects").select("*").order("created_at", { ascending: false }),
  ]);

  const projectsOf = (id: string) => (projects || []).filter((p) => p.customer_id === id);

  return (
    <div>
      <h1 className="mb-6 font-display text-[26px] font-medium">Kunden &amp; Projekte</h1>

      <form action={createCustomer} className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-line bg-surface/40 p-3">
        <input name="name" placeholder="Name *" required className={`${inputCls} flex-1 min-w-[150px]`} />
        <input name="company" placeholder="Unternehmen" className={`${inputCls} min-w-[150px]`} />
        <input name="email" type="email" placeholder="E-Mail" className={`${inputCls} min-w-[150px]`} />
        <input name="phone" placeholder="Telefon" className={`${inputCls} min-w-[130px]`} />
        <button className="btn btn-primary !h-10 !px-5">Kunde anlegen</button>
      </form>

      {(customers?.length ?? 0) === 0 && (
        <p className="rounded-2xl border border-line bg-surface/40 p-5 text-[14px] text-fog">Noch keine Kunden.</p>
      )}

      <div className="grid gap-3">
        {customers?.map((c) => (
          <div key={c.id} className="rounded-2xl border border-line bg-surface/40 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-display text-[18px] font-medium text-paper">{c.name}</span>
                {c.company && <span className="ml-2 text-[14px] text-fog">{c.company}</span>}
              </div>
              <div className="text-[13px] text-fog">
                {c.email && <a href={`mailto:${c.email}`} className="hover:text-signal">{c.email}</a>}
                {c.phone && <span className="ml-3">{c.phone}</span>}
              </div>
            </div>

            <div className="mt-4 grid gap-2">
              {projectsOf(c.id).map((p) => (
                <div key={p.id} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-ink/40 px-4 py-2.5">
                  <span className="text-[14px] text-paper">{p.title}</span>
                  <span className="flex items-center gap-3 text-[13px] text-fog">
                    {p.package && <span>{p.package}</span>}
                    <span className="rounded-full bg-line px-2 py-0.5 text-[11px]">{projStatus[p.status] || p.status}</span>
                    <span className="text-signal">{eur(p.monthly_value)}</span>
                  </span>
                </div>
              ))}
            </div>

            <form action={createProject} className="mt-3 flex flex-wrap gap-2">
              <input type="hidden" name="customer_id" value={c.id} />
              <input name="title" placeholder="Neues Projekt" required className={`${inputCls} flex-1 min-w-[150px]`} />
              <input name="package" placeholder="Paket" className={`${inputCls} min-w-[120px]`} />
              <input name="monthly_value" type="number" placeholder="€/Mon." className={`${inputCls} w-[110px]`} />
              <button className="btn btn-ghost !h-10 !px-4">+ Projekt</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
