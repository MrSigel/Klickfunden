import ReferenceManager from "@/components/admin/ReferenceManager";
import { getAdminReferenzen } from "@/lib/supabase/queries";
import type { Database } from "@/lib/supabase/types";

type ReferenzRow = Database["public"]["Tables"]["referenzen"]["Row"];

export const dynamic = "force-dynamic";

export default async function ReferenzenPage() {
  let referenzen: ReferenzRow[] = [];
  let loadError = "";

  try {
    referenzen = await getAdminReferenzen();
  } catch (error) {
    console.error("Referenzen load failed", { name: error instanceof Error ? error.name : "UnknownError" });
    loadError = "Referenzen konnten nicht aus Supabase geladen werden.";
  }

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marsgreen-300">
        Case Studies
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
        Referenzen
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-100/80">
        Neue Referenzen werden als echte Datensätze gepflegt und anschließend
        in der Referenzen-Sektion der Startseite dargestellt.
      </p>

      {loadError && (
        <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm leading-relaxed text-red-100">
          {loadError} Bitte führe zuerst die Datei supabase_schema.sql im
          Supabase SQL Editor aus.
        </div>
      )}

      <div className="mt-8">
        <ReferenceManager initialReferences={referenzen} />
      </div>
    </div>
  );
}
