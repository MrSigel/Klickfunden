import { createClient } from "@/lib/supabase/server";
import { updateLeadStatus } from "../actions";
import { InlineSelect } from "@/components/admin/InlineSelect";

export const dynamic = "force-dynamic";

const STATUS = [
  { value: "new", label: "Neu" },
  { value: "contacted", label: "Kontaktiert" },
  { value: "won", label: "Gewonnen" },
  { value: "lost", label: "Verloren" },
];

const fmtDate = (s: string) =>
  new Date(s).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "2-digit" });

const badge: Record<string, string> = {
  new: "bg-signal/15 text-signal",
  contacted: "bg-[#4da3f0]/15 text-[#7cc0ff]",
  won: "bg-signal/15 text-signal",
  lost: "bg-line text-fog",
};

export default async function LeadsPage() {
  const supabase = await createClient();
  const { data: leads, error } = await supabase
    .from("crm_leads")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="mb-6 font-display text-[26px] font-medium">Leads &amp; Anfragen</h1>

      {error && (
        <p className="rounded-2xl border border-line bg-surface/40 p-5 text-[14px] text-[#ff8a8a]">
          Datenbank nicht erreichbar — Schema ausgeführt und Zugangsdaten gesetzt?
        </p>
      )}

      {!error && (leads?.length ?? 0) === 0 && (
        <p className="rounded-2xl border border-line bg-surface/40 p-5 text-[14px] text-fog">
          Noch keine Anfragen. Sie erscheinen hier, sobald das Formular auf /kontakt genutzt wird.
        </p>
      )}

      <div className="grid gap-3">
        {leads?.map((l) => (
          <div key={l.id} className="rounded-2xl border border-line bg-surface/40 p-4 md:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-[17px] font-medium text-paper">{l.name}</span>
                  {l.company && <span className="text-[14px] text-fog">· {l.company}</span>}
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] ${badge[l.status] || "bg-line text-fog"}`}>
                    {STATUS.find((s) => s.value === l.status)?.label}
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[13.5px] text-fog">
                  {l.email && <a href={`mailto:${l.email}`} className="hover:text-signal">{l.email}</a>}
                  {l.phone && <a href={`tel:${l.phone}`} className="hover:text-signal">{l.phone}</a>}
                  <span className="text-fog-dim">via {l.source}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-fog-dim">{fmtDate(l.created_at)}</span>
                <InlineSelect action={updateLeadStatus} id={l.id} name="status" value={l.status} options={STATUS} />
              </div>
            </div>
            {l.message && <p className="mt-3 border-t border-line pt-3 text-[14px] text-fog">{l.message}</p>}
            {l.estimate != null && (
              <p className="mt-2 text-[13px] text-fog">
                Rechner-Schätzung: <span className="text-signal">{Number(l.estimate).toLocaleString("de-DE")} €/Mon.</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
