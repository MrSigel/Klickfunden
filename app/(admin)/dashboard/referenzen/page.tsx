import ReferenceManager from "@/components/admin/ReferenceManager";
import { getAdminReferenzen } from "@/lib/supabase/queries";
import type { Database } from "@/lib/supabase/types";
import AdminPageHeader from "@/components/ui/AdminPageHeader";
import ErrorAlert from "@/components/ui/ErrorAlert";

type ReferenzRow = Database["public"]["Tables"]["referenzen"]["Row"];

export const dynamic = "force-dynamic";

export default async function ReferenzenPage() {
  let referenzen: ReferenzRow[] = [];
  let loadError = "";

  try {
    referenzen = await getAdminReferenzen();
  } catch (error) {
    loadError =
      error instanceof Error
        ? error.message
        : "Referenzen konnten nicht aus Supabase geladen werden.";
  }

  return (
    <div>
      <AdminPageHeader
        eyebrow="Case Studies"
        title="Referenzen"
        description="Neue Referenzen werden als echte Datensätze gepflegt und anschließend in der Referenzen-Sektion der Startseite dargestellt."
      />

      {loadError && (
        <ErrorAlert
          message={loadError}
          hint="Bitte führe zuerst die Datei supabase_schema.sql im Supabase SQL Editor aus."
        />
      )}

      <div className="mt-8">
        <ReferenceManager initialReferences={referenzen} />
      </div>
    </div>
  );
}
