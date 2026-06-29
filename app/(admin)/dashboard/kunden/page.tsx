import { getKunden, KundeWithLead } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

function formatLeadSource(source: string | null) {
  return source || "Nicht zugeordnet";
}

export default async function KundenPage() {
  let kunden: KundeWithLead[] = [];
  let loadError = "";

  try {
    kunden = await getKunden();
  } catch (error) {
    loadError =
      error instanceof Error
        ? error.message
        : "Kunden konnten nicht aus Supabase geladen werden.";
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marsgreen-300">
        Kundenverwaltung
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
        Kunden
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-100/80">
        Relationale Übersicht aktiver Kunden, die aus eingehenden Anfragen
        ausgewählt und in laufende Betreuung überführt wurden.
      </p>

      {loadError && (
        <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm leading-relaxed text-red-100">
          {loadError} Bitte führe zuerst die Datei supabase_schema.sql im
          Supabase SQL Editor aus.
        </div>
      )}

      <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="bg-ink-900/70 text-xs uppercase tracking-[0.16em] text-mist-100/80">
              <tr>
                <th className="px-5 py-4">Kunde</th>
                <th className="px-5 py-4">Ursprungsanfrage</th>
                <th className="px-5 py-4">Kontakt</th>
                <th className="px-5 py-4">Website</th>
                <th className="px-5 py-4">Erstellt am</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {kunden.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-mist-100/80"
                  >
                    Noch keine Live-Kunden in Supabase vorhanden.
                  </td>
                </tr>
              ) : (
                kunden.map((kunde) => (
                  <tr key={kunde.id} className="text-mist-100/85">
                    <td className="px-5 py-5">
                      <p className="font-semibold text-white">
                        {kunde.company_name}
                      </p>
                      <p className="mt-1 text-mist-100/80">
                        {kunde.contact_person}
                      </p>
                    </td>
                    <td className="px-5 py-5">
                      {formatLeadSource(kunde.leads?.name || null)}
                    </td>
                    <td className="px-5 py-5">
                      <p>{kunde.email}</p>
                      <p className="mt-1">{kunde.telefon}</p>
                    </td>
                    <td className="px-5 py-5">
                      <a
                        href={kunde.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-marsgreen-300 hover:underline"
                      >
                        {kunde.website}
                      </a>
                    </td>
                    <td className="px-5 py-5">
                      {new Intl.DateTimeFormat("de-DE").format(
                        new Date(kunde.created_at),
                      )}
                    </td>
                    <td className="px-5 py-5">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                        {kunde.leads?.status || "Aktiv"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
