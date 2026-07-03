import DocumentBuilder from "@/components/admin/DocumentBuilder";
import AdminPageHeader from "@/components/ui/AdminPageHeader";

export default function AngebotPage() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Vertrieb"
        title="Angebot"
        description="Interaktiver Builder für individuelle Kundenangebote mit offizieller Klickfunden.de-Branding-Vorschau."
      />

      <div className="mt-8">
        <DocumentBuilder kind="angebot" />
      </div>
    </div>
  );
}
