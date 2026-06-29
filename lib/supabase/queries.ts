import "server-only";

import { getSupabaseAdmin, getSupabaseAnon } from "@/lib/supabase/server";
import type { Database, Json } from "@/lib/supabase/types";

export type LeadRow = Database["public"]["Tables"]["leads"]["Row"];
export type KundeRow = Database["public"]["Tables"]["kunden"]["Row"];
export type ReferenzRow = Database["public"]["Tables"]["referenzen"]["Row"];

export type KundeWithLead = KundeRow & {
  leads: Pick<LeadRow, "id" | "name" | "status" | "form_data"> | null;
};

export function getJsonString(value: Json, key: string) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return "";
  }

  const found = value[key];
  return typeof found === "string" ? found : "";
}

export async function getLeads() {
  const { data, error } = await getSupabaseAdmin()
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Leads konnten nicht geladen werden: ${error.message}`);
  }

  return data;
}

export async function getKunden() {
  const { data, error } = await getSupabaseAdmin()
    .from("kunden")
    .select(
      "id, created_at, lead_id, company_name, contact_person, email, telefon, website, leads(id, name, status, form_data)",
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Kunden konnten nicht geladen werden: ${error.message}`);
  }

  return data as KundeWithLead[];
}

export async function getAdminReferenzen() {
  const { data, error } = await getSupabaseAdmin()
    .from("referenzen")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Referenzen konnten nicht geladen werden: ${error.message}`);
  }

  return data;
}

export async function getPublicReferenzen() {
  const { data, error } = await getSupabaseAnon()
    .from("referenzen")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Referenzen konnten nicht öffentlich geladen werden: ${error.message}`);
  }

  return data;
}
