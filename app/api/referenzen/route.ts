import { NextResponse } from "next/server";
import { getPublicReferenzen } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const referenzen = await getPublicReferenzen();
    return NextResponse.json({ referenzen });
  } catch (error) {
    console.error("Referenzen load failed", { name: error instanceof Error ? error.name : "UnknownError" });
    return NextResponse.json({ referenzen: [], message: "Referenzen konnten nicht geladen werden." }, { status: 500 });
  }
}
