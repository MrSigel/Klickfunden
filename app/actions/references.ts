"use server";

import { revalidatePath } from "next/cache";
import { assertAdminSession } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type ReferenzRow = Database["public"]["Tables"]["referenzen"]["Row"];

export type CreateReferenceInput = {
  title: string;
  result: string;
  url: string;
  imageUrl?: string | null;
};

export type CreateReferenceResult =
  | { ok: true; reference: ReferenzRow }
  | { ok: false; message: string };

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export async function createReference(
  input: CreateReferenceInput,
): Promise<CreateReferenceResult> {
  assertAdminSession();

  const title = input.title.trim();
  const result = input.result.trim();
  const url = normalizeUrl(input.url);
  const imageUrl = input.imageUrl?.trim() || null;

  if (!title || !result || !url) {
    return {
      ok: false,
      message: "Bitte Titel, Ergebnis und URL vollständig ausfüllen.",
    };
  }

  const { data, error } = await getSupabaseAdmin()
    .from("referenzen")
    .insert({
      title,
      result,
      url,
      image_url: imageUrl,
    })
    .select("*")
    .single();

  if (error) {
    console.error("Reference save failed", { name: error.name || "DatabaseError" });
    return {
      ok: false,
      message: "Referenz konnte nicht gespeichert werden. Bitte versuche es erneut.",
    };
  }

  revalidatePath("/");
  revalidatePath("/dashboard/referenzen");

  return { ok: true, reference: data };
}
