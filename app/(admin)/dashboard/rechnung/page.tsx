import DocumentBuilder from "@/components/admin/DocumentBuilder";
import AdminPageHeader from "@/components/ui/AdminPageHeader";

export default function RechnungPage() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Finanzen"
        title="Rechnung"
        description="Interaktiver Rechnungs-Builder mit Kundenauswahl, Positionen, Preislogik und sauberer Klickfunden.de-Dokumentvorschau."
      />

      <div className="mt-8">
        <DocumentBuilder kind="rechnung" />
      </div>
    </div>
  );
}
