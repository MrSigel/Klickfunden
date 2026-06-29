import { NextResponse } from "next/server";
import { getPublicReferenzen } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const referenzen = await getPublicReferenzen();
    return NextResponse.json({ referenzen });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Referenzen konnten nicht geladen werden.";

    return NextResponse.json({ referenzen: [], message }, { status: 500 });
  }
}
