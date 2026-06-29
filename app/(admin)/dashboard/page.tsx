import {
  Activity,
  ArrowUpRight,
  Inbox,
  Star,
  Users,
} from "lucide-react";
import {
  getAdminReferenzen,
  getJsonString,
  getKunden,
  getLeads,
  KundeWithLead,
  LeadRow,
  ReferenzRow,
} from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let leads: LeadRow[] = [];
  let kunden: KundeWithLead[] = [];
  let referenzen: ReferenzRow[] = [];
  let loadError = "";

  try {
    [leads, kunden, referenzen] = await Promise.all([
      getLeads(),
      getKunden(),
      getAdminReferenzen(),
    ]);
  } catch (error) {
    loadError =
      error instanceof Error
        ? error.message
        : "Dashboard-Daten konnten nicht aus Supabase geladen werden.";
  }
  const convertedLeads = leads.filter(
    (lead) => lead.status === "In Kunde umgewandelt",
  );
  const conversionRate =
    leads.length > 0
      ? `${Math.round((convertedLeads.length / leads.length) * 100)}%`
      : "0%";
  const metrics = [
    {
      label: "Live-Anfragen",
      value: leads.length.toString(),
      helper: "direkt aus der Supabase-Tabelle leads",
      icon: Inbox,
    },
    {
      label: "Kunden",
      value: kunden.length.toString(),
      helper: "direkt aus der Supabase-Tabelle kunden",
      icon: Users,
    },
    {
      label: "Conversion",
      value: conversionRate,
      helper: "Lead zu Kunde",
      icon: Activity,
    },
    {
      label: "Referenzen",
      value: referenzen.length.toString(),
      helper: "öffentliche Case Studies aus Supabase",
      icon: Star,
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marsgreen-300">
            Admin Übersicht
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
            Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-100/80">
            Zentrale Übersicht für Anfragen, Kunden, Angebote, Rechnungen und
            Referenzen von Klickfunden.de.
          </p>
        </div>
      </div>

      {loadError && (
        <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm leading-relaxed text-red-100">
          {loadError} Bitte führe zuerst die Datei supabase_schema.sql im
          Supabase SQL Editor aus.
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <section
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-marsgreen/15 text-marsgreen">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-mist-100/75" />
              </div>
              <p className="mt-6 text-sm font-medium text-mist-100/80">
                {metric.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-mist-100/75">{metric.helper}</p>
            </section>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-white">
            Aktuelle Pipeline
          </h2>
          <div className="mt-6 space-y-4">
            {leads.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-ink-700/50 p-5 text-sm text-mist-100/80">
                Noch keine Live-Anfragen in Supabase vorhanden.
              </div>
            ) : (
              leads.slice(0, 5).map((lead) => (
                <div
                  key={lead.id}
                  className="rounded-2xl border border-white/10 bg-ink-700/50 p-5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold text-white">
                        {lead.name}
                      </p>
                      <p className="mt-1 text-sm text-mist-100/80">
                        {getJsonString(lead.form_data, "goalLabel") ||
                          "Ziel nicht angegeben"}
                      </p>
                    </div>
                    <span className="rounded-full border border-marsgreen/25 bg-marsgreen/10 px-3 py-1 text-sm font-semibold text-marsgreen">
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card">
          <h2 className="font-display text-2xl font-semibold text-white">
            Nächste Schritte
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-mist-100/80">
            <li className="rounded-2xl border border-white/10 bg-ink-700/50 p-4">
              Neue Anfragen prüfen und qualifizieren.
            </li>
            <li className="rounded-2xl border border-white/10 bg-ink-700/50 p-4">
              Angebot für qualifizierte Leads vorbereiten.
            </li>
            <li className="rounded-2xl border border-white/10 bg-ink-700/50 p-4">
              Referenzen nur nach echter Freigabe veröffentlichen.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
