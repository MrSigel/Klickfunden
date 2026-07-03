import { CheckCircle2 } from "lucide-react";
import { getJsonString, getLeads, LeadRow } from "@/lib/supabase/queries";
import AdminPageHeader from "@/components/ui/AdminPageHeader";
import ErrorAlert from "@/components/ui/ErrorAlert";

const mandatoryColumns = ["E-Mail", "Telefonnummer", "Website"];

export const dynamic = "force-dynamic";

export default async function AnfragenPage() {
  let leads: LeadRow[] = [];
  let loadError = "";

  try {
    leads = await getLeads();
  } catch (error) {
    loadError =
      error instanceof Error
        ? error.message
        : "Anfragen konnten nicht aus Supabase geladen werden.";
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Lead Eingang"
        title="Anfragen"
        description="Übersicht aller eingehenden Formular-Leads. E-Mail, Telefonnummer und Website sind als Pflichtfelder hervorgehoben, damit jede Anfrage direkt qualifizierbar bleibt."
      />

      <div className="mt-6 flex flex-wrap gap-2">
        {mandatoryColumns.map((column) => (
          <span
            key={column}
            className="inline-flex items-center gap-2 rounded-full border border-marsgreen/30 bg-marsgreen/10 px-3 py-1 text-sm font-semibold text-marsgreen"
          >
            <CheckCircle2 className="h-4 w-4" />
            Pflichtfeld: {column}
          </span>
        ))}
      </div>

      {loadError && (
        <ErrorAlert
          message={loadError}
          hint="Bitte führe zuerst die Datei supabase_schema.sql im Supabase SQL Editor aus."
        />
      )}

      <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead className="bg-ink-900/70 text-xs uppercase tracking-[0.16em] text-mist-100/80">
              <tr>
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">
                  E-Mail <span className="text-marsgreen">Pflichtfeld</span>
                </th>
                <th className="px-5 py-4">
                  Telefonnummer{" "}
                  <span className="text-marsgreen">Pflichtfeld</span>
                </th>
                <th className="px-5 py-4">
                  Website <span className="text-marsgreen">Pflichtfeld</span>
                </th>
                <th className="px-5 py-4">Ziel</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {leads.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-mist-100/80"
                  >
                    Noch keine Live-Anfragen in Supabase vorhanden.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => {
                  const goal = getJsonString(lead.form_data, "goalLabel");
                  const isExternalWebsite = /^https?:\/\//i.test(lead.website);

                  return (
                    <tr key={lead.id} className="text-mist-100/85">
                      <td className="px-5 py-5 font-semibold text-white">
                        {lead.name}
                      </td>
                      <td className="px-5 py-5 text-marsgreen-300">
                        {lead.email}
                      </td>
                      <td className="px-5 py-5 text-marsgreen-300">
                        {lead.telefon}
                      </td>
                      <td className="px-5 py-5">
                        {isExternalWebsite ? (
                          <a
                            href={lead.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-marsgreen-300 hover:underline"
                          >
                            {lead.website}
                          </a>
                        ) : (
                          <span>{lead.website}</span>
                        )}
                      </td>
                      <td className="px-5 py-5">{goal || "Nicht angegeben"}</td>
                      <td className="px-5 py-5">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
