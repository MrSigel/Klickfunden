import { createClient } from "@/lib/supabase/server";
import { createDeal, moveDeal } from "../actions";
import { InlineSelect } from "@/components/admin/InlineSelect";

export const dynamic = "force-dynamic";

const STAGES = [
  { value: "lead", label: "Lead" },
  { value: "qualified", label: "Qualifiziert" },
  { value: "proposal", label: "Angebot" },
  { value: "won", label: "Gewonnen" },
  { value: "lost", label: "Verloren" },
];

const eur = (n: number | null) =>
  n == null ? "—" : n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export default async function PipelinePage() {
  const supabase = await createClient();
  const { data: deals } = await supabase.from("crm_deals").select("*").order("created_at", { ascending: false });

  const byStage = (stage: string) => (deals || []).filter((d) => d.stage === stage);
  const openValue = (deals || [])
    .filter((d) => d.stage !== "lost" && d.stage !== "won")
    .reduce((s, d) => s + (Number(d.value) || 0), 0);

  const inputCls = "h-10 rounded-lg border border-line-hard bg-ink/60 px-3 text-[14px] text-paper placeholder:text-fog-dim focus:border-signal focus:outline-none";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-[26px] font-medium">Pipeline</h1>
        <span className="text-[14px] text-fog">
          Offener Pipeline-Wert: <span className="text-signal">{eur(openValue)}</span>
        </span>
      </div>

      <form action={createDeal} className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-line bg-surface/40 p-3">
        <input name="title" placeholder="Deal-Titel" required className={`${inputCls} flex-1 min-w-[160px]`} />
        <input name="contact_name" placeholder="Kontakt" className={`${inputCls} min-w-[140px]`} />
        <input name="value" type="number" placeholder="Wert €/Mon." className={`${inputCls} w-[130px]`} />
        <button className="btn btn-primary !h-10 !px-5">Deal anlegen</button>
      </form>

      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
        {STAGES.map((st) => {
          const items = byStage(st.value);
          return (
            <div key={st.value} className="rounded-2xl border border-line bg-surface/30 p-3">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-[13px] font-medium text-paper">{st.label}</span>
                <span className="text-[12px] text-fog-dim">{items.length}</span>
              </div>
              <div className="grid gap-2">
                {items.map((d) => (
                  <div key={d.id} className="rounded-xl border border-line bg-ink/40 p-3">
                    <p className="text-[14px] font-medium text-paper">{d.title}</p>
                    {d.contact_name && <p className="mt-0.5 text-[12.5px] text-fog">{d.contact_name}</p>}
                    <p className="mt-1 text-[13px] text-signal">{eur(d.value)}</p>
                    <div className="mt-2">
                      <InlineSelect action={moveDeal} id={d.id} name="stage" value={d.stage} options={STAGES} />
                    </div>
                  </div>
                ))}
                {items.length === 0 && <p className="px-1 py-2 text-[12px] text-fog-dim">—</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
