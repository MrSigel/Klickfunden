import DocumentBuilder from "@/components/admin/DocumentBuilder";

export default function AngebotPage() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marsgreen-300">
        Vertrieb
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
        Angebot
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-100/80">
        Interaktiver Builder für individuelle Kundenangebote mit offizieller
        Klickfunden.de-Branding-Vorschau.
      </p>

      <div className="mt-8">
        <DocumentBuilder kind="angebot" />
      </div>
    </div>
  );
}
