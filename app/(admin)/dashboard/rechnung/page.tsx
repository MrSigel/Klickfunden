import DocumentBuilder from "@/components/admin/DocumentBuilder";

export default function RechnungPage() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marsgreen-300">
        Finanzen
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
        Rechnung
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-100/80">
        Interaktiver Rechnungs-Builder mit Kundenauswahl, Positionen,
        Preislogik und sauberer Klickfunden.de-Dokumentvorschau.
      </p>

      <div className="mt-8">
        <DocumentBuilder kind="rechnung" />
      </div>
    </div>
  );
}
