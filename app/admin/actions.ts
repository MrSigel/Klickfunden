"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateLeadStatus(formData: FormData) {
  const supabase = await createClient();
  await supabase
    .from("crm_leads")
    .update({ status: String(formData.get("status")) })
    .eq("id", String(formData.get("id")));
  revalidatePath("/admin/leads");
  revalidatePath("/admin");
}

export async function moveDeal(formData: FormData) {
  const supabase = await createClient();
  await supabase
    .from("crm_deals")
    .update({ stage: String(formData.get("stage")) })
    .eq("id", String(formData.get("id")));
  revalidatePath("/admin/pipeline");
}

export async function createDeal(formData: FormData) {
  const supabase = await createClient();
  const value = formData.get("value");
  await supabase.from("crm_deals").insert({
    title: String(formData.get("title")),
    contact_name: String(formData.get("contact_name") || "") || null,
    value: value ? Number(value) : null,
    stage: "lead",
  });
  revalidatePath("/admin/pipeline");
}

export async function createCustomer(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("crm_customers").insert({
    name: String(formData.get("name")),
    company: String(formData.get("company") || "") || null,
    email: String(formData.get("email") || "") || null,
    phone: String(formData.get("phone") || "") || null,
  });
  revalidatePath("/admin/kunden");
}

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  const monthly = formData.get("monthly_value");
  await supabase.from("crm_projects").insert({
    customer_id: String(formData.get("customer_id")),
    title: String(formData.get("title")),
    package: String(formData.get("package") || "") || null,
    monthly_value: monthly ? Number(monthly) : null,
    status: "planning",
  });
  revalidatePath("/admin/kunden");
}

export async function createTask(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("crm_tasks").insert({
    title: String(formData.get("title")),
    due_date: String(formData.get("due_date") || "") || null,
  });
  revalidatePath("/admin/aufgaben");
  revalidatePath("/admin");
}

export async function toggleTask(formData: FormData) {
  const supabase = await createClient();
  await supabase
    .from("crm_tasks")
    .update({ done: formData.get("done") === "true" })
    .eq("id", String(formData.get("id")));
  revalidatePath("/admin/aufgaben");
  revalidatePath("/admin");
}

export async function convertLeadToCustomer(formData: FormData) {
  const supabase = await createClient();
  const name = String(formData.get("name"));
  const email = String(formData.get("email") || "") || null;
  const phone = String(formData.get("phone") || "") || null;
  const company = String(formData.get("company") || "") || null;
  await supabase.from("crm_customers").insert({ name, email, phone, company });
  await supabase
    .from("crm_leads")
    .update({ status: "won" })
    .eq("id", String(formData.get("id")));
  revalidatePath("/admin/leads");
  revalidatePath("/admin/kunden");
}
