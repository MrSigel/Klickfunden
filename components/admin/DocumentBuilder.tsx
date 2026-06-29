"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FilePlus2, Printer, Trash2 } from "lucide-react";
import { adminClients, formatCurrency } from "@/lib/admin-data";

type DocumentKind = "angebot" | "rechnung";

type LineItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
};

type DocumentBuilderProps = {
  kind: DocumentKind;
};

const documentLabels = {
  angebot: {
    title: "Angebot",
    eyebrow: "Dokument-Builder",
    numberPrefix: "ANG",
    intro:
      "Vielen Dank für dein Interesse an den Leistungen von Klickhafen für Klickfunden.de. Auf Basis der besprochenen Ziele empfehlen wir folgende Leistungen.",
  },
  rechnung: {
    title: "Rechnung",
    eyebrow: "Abrechnung",
    numberPrefix: "RE",
    intro:
      "Vielen Dank für die Zusammenarbeit. Wir berechnen die nachfolgend aufgeführten Leistungen.",
  },
};

const createLineItem = (): LineItem => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  description: "SEO-, GEO- und Ads-Betreuung",
  quantity: 1,
  unitPrice: 1200,
});

export default function DocumentBuilder({ kind }: DocumentBuilderProps) {
  const config = documentLabels[kind];
  const [clientId, setClientId] = useState(adminClients[0]?.id || "");
  const [documentNumber, setDocumentNumber] = useState(
    `${config.numberPrefix}-${new Date().getFullYear()}-001`,
  );
  const [issueDate, setIssueDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [intro, setIntro] = useState(config.intro);
  const [lineItems, setLineItems] = useState<LineItem[]>([createLineItem()]);

  const selectedClient =
    adminClients.find((client) => client.id === clientId) || adminClients[0];

  const total = useMemo(
    () =>
      lineItems.reduce(
        (sum, item) => sum + item.quantity * item.unitPrice,
        0,
      ),
    [lineItems],
  );

  const updateLineItem = (
    id: string,
    field: keyof Omit<LineItem, "id">,
    value: string,
  ) => {
    setLineItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "description"
                  ? value
                  : Math.max(0, Number.parseFloat(value) || 0),
            }
          : item,
      ),
    );
  };

  const removeLineItem = (id: string) => {
    setLineItems((items) =>
      items.length === 1 ? items : items.filter((item) => item.id !== id),
    );
  };

  if (!selectedClient) {
    return (
      <section className="rounded-3xl border border-white/10 bg-ink-800/70 p-8 text-center shadow-card">
        <h2 className="font-display text-2xl font-semibold text-white">
          Noch keine Kundendaten vorhanden
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mist-100/75">
          Lege zuerst einen echten Kunden im Dashboard an. Danach kannst du hier
          ein {config.title.toLowerCase()} erstellen.
        </p>
      </section>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marsgreen-300">
          {config.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-white">
          {config.title} erstellen
        </h2>

        <div className="mt-7 grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-mist-100/85">
              Kunde aus Kundendatenbank
            </label>
            <select
              value={clientId}
              onChange={(event) => setClientId(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors focus:border-marsgreen"
            >
              {adminClients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.company}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-mist-100/85">
                Dokumentnummer
              </label>
              <input
                value={documentNumber}
                onChange={(event) => setDocumentNumber(event.target.value)}
                className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors focus:border-marsgreen"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-mist-100/85">
                Datum
              </label>
              <input
                type="date"
                value={issueDate}
                onChange={(event) => setIssueDate(event.target.value)}
                className="w-full rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors focus:border-marsgreen"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-mist-100/85">
              Leistungsbeschreibung
            </label>
            <textarea
              value={intro}
              onChange={(event) => setIntro(event.target.value)}
              rows={4}
              className="w-full resize-none rounded-xl border border-white/15 bg-ink-700/70 px-4 py-3.5 text-white outline-none transition-colors focus:border-marsgreen"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-white">
                Positionen
              </h3>
              <button
                type="button"
                onClick={() =>
                  setLineItems((items) => [...items, createLineItem()])
                }
                className="inline-flex items-center gap-2 rounded-full border border-marsgreen/30 bg-marsgreen/10 px-4 py-2 text-sm font-semibold text-marsgreen hover:bg-marsgreen hover:text-ink-900"
              >
                <FilePlus2 className="h-4 w-4" />
                Position
              </button>
            </div>

            {lineItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-ink-700/50 p-4"
              >
                <div className="grid gap-3 sm:grid-cols-[1fr_6rem_8rem_auto]">
                  <input
                    value={item.description}
                    onChange={(event) =>
                      updateLineItem(item.id, "description", event.target.value)
                    }
                    className="rounded-xl border border-white/15 bg-ink-800/70 px-3 py-3 text-sm text-white outline-none focus:border-marsgreen"
                    aria-label="Beschreibung"
                  />
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={item.quantity}
                    onChange={(event) =>
                      updateLineItem(item.id, "quantity", event.target.value)
                    }
                    className="rounded-xl border border-white/15 bg-ink-800/70 px-3 py-3 text-sm text-white outline-none focus:border-marsgreen"
                    aria-label="Menge"
                  />
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.unitPrice}
                    onChange={(event) =>
                      updateLineItem(item.id, "unitPrice", event.target.value)
                    }
                    className="rounded-xl border border-white/15 bg-ink-800/70 px-3 py-3 text-sm text-white outline-none focus:border-marsgreen"
                    aria-label="Einzelpreis"
                  />
                  <button
                    type="button"
                    onClick={() => removeLineItem(item.id)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/30 bg-red-500/10 text-red-100 hover:bg-red-500/20"
                    aria-label="Position entfernen"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-ink-800/70 p-4 shadow-card lg:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-white">
            Vorschau
          </h2>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-primary px-4 py-2.5"
          >
            Drucken
            <Printer className="h-4 w-4" />
          </button>
        </div>

        <article className="overflow-hidden rounded-2xl bg-white text-ink-900 shadow-card print:rounded-none print:shadow-none">
          <header className="border-b border-ink-900/10 px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <Image
                src="/brand/klickfunden/logo-header.png"
                alt="Klickfunden"
                width={190}
                height={44}
                className="h-auto w-44"
              />
              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
                  {config.title}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold text-ink-900">
                  {documentNumber}
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  Datum: {new Intl.DateTimeFormat("de-DE").format(new Date(issueDate))}
                </p>
              </div>
            </div>
          </header>

          <div className="px-6 py-7 sm:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-500">
                  Kunde
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-ink-900">
                  {selectedClient.company}
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  {selectedClient.email}
                  <br />
                  {selectedClient.phone}
                  <br />
                  {selectedClient.website}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-500">
                  Anbieter
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-ink-900">
                  Klickhafen
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  Inhaber: Enrico Gross
                  <br />
                  Gerther Straße 76
                  <br />
                  44577 Castrop-Rauxel
                  <br />
                  Website: Klickfunden.de
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-ink-500">{intro}</p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-ink-900/10 text-left text-xs uppercase tracking-[0.14em] text-ink-500">
                    <th className="py-3 pr-4">Leistung</th>
                    <th className="px-4 py-3 text-right">Menge</th>
                    <th className="px-4 py-3 text-right">Einzelpreis</th>
                    <th className="py-3 pl-4 text-right">Summe</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.id} className="border-b border-ink-900/10">
                      <td className="py-4 pr-4 font-medium text-ink-900">
                        {item.description}
                      </td>
                      <td className="px-4 py-4 text-right text-ink-500">
                        {item.quantity}
                      </td>
                      <td className="px-4 py-4 text-right text-ink-500">
                        {formatCurrency(item.unitPrice)}
                      </td>
                      <td className="py-4 pl-4 text-right font-semibold text-ink-900">
                        {formatCurrency(item.quantity * item.unitPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-7 flex justify-end">
              <div className="w-full max-w-xs rounded-2xl bg-ink-900 px-5 py-4 text-white">
                <div className="flex items-center justify-between gap-4 text-sm text-mist-100/80">
                  <span>Netto gesamt</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-4 text-sm text-mist-100/80">
                  <span>Umsatzsteuer</span>
                  <span>nach Rechnungsstellung</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-4 font-display text-xl font-bold text-marsgreen">
                  <span>Gesamt</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </div>

          <footer className="border-t border-ink-900/10 bg-ink-900 px-6 py-5 text-white sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Image
                src="/brand/klickfunden/logo-footer.png"
                alt="Klickfunden"
                width={160}
                height={38}
                className="h-auto w-36"
              />
              <p className="text-sm leading-relaxed text-mist-100/80 sm:text-right">
                Klickhafen · Klickfunden.de
                <br />
                kontakt@klickfunden.de · +49 155 63535989
                <br />
                Revolut Bank UAB · IBAN DE17 1001 0178 8022 2535 33
              </p>
            </div>
          </footer>
        </article>
      </section>
    </div>
  );
}
