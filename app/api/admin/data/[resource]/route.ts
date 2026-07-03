import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { resourceBySlug } from "@/lib/admin-resources";
import { isSameOrigin, jsonError, parseJsonBody } from "@/lib/api-utils";
import { getSupabaseAdmin } from "@/lib/supabase/server";

function contextResource(context: { params: { resource: string } }) { return resourceBySlug(context.params.resource); }
function validId(value: unknown) { return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value); }
function cleanInput(resource: NonNullable<ReturnType<typeof resourceBySlug>>, input: Record<string, unknown>) {
  const output: Record<string, unknown> = {};
  for (const field of resource.fields) {
    const raw = input[field.key];
    if (field.required && (typeof raw !== "string" || !raw.trim())) throw new Error("validation");
    if (field.type === "select" && raw && !field.options?.includes(String(raw))) throw new Error("validation");
    if (field.type === "number" && raw !== "" && raw != null) {
      const value = Number(raw); if (!Number.isFinite(value) || value < 0 || (field.key.endsWith("_score") && value > 100)) throw new Error("validation");
      output[field.key] = value; continue;
    }
    output[field.key] = typeof raw === "string" ? (raw.trim() || null) : null;
  }
  return output;
}

function requireAdmin() {
  if (!hasAdminSession()) return jsonError("Unauthorized", 401);
  return null;
}

function requireAdminAndOrigin(request: NextRequest) {
  if (!hasAdminSession()) return jsonError("Unauthorized", 401);
  if (!isSameOrigin(request)) return jsonError("Forbidden", 403);
  return null;
}

export async function GET(_: NextRequest, context: { params: { resource: string } }) {
  const authError = requireAdmin();
  if (authError) return authError;
  const resource = contextResource(context);
  if (!resource) return jsonError("Not found", 404);
  try {
    const { data, error } = await (getSupabaseAdmin() as any).from(resource.table).select("*").order("created_at", { ascending: false });
    if (error) throw error;
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Admin data load failed", error);
    return jsonError("load", 503);
  }
}

export async function POST(request: NextRequest, context: { params: { resource: string } }) {
  const authError = requireAdminAndOrigin(request);
  if (authError) return authError;
  const resource = contextResource(context);
  if (!resource) return jsonError("Not found", 404);
  const [input, parseError] = await parseJsonBody(request);
  if (parseError) return parseError;
  try {
    const allowed = cleanInput(resource, input);
    if (resource.slug === "einstellungen") {
      const { data: existing } = await (getSupabaseAdmin() as any).from(resource.table).select("id").limit(1).maybeSingle();
      if (existing?.id) {
        const { data, error } = await (getSupabaseAdmin() as any).from(resource.table).update({ ...allowed, updated_at: new Date().toISOString() }).eq("id", existing.id).select().single();
        if (error) throw error;
        return NextResponse.json({ data });
      }
    }
    const { data, error } = await (getSupabaseAdmin() as any).from(resource.table).insert(allowed).select().single();
    if (error) throw error;
    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "validation") return jsonError("validation", 400);
    console.error("Admin data save failed", error);
    return jsonError("save", 503);
  }
}

export async function PUT(request: NextRequest, context: { params: { resource: string } }) {
  const authError = requireAdminAndOrigin(request);
  if (authError) return authError;
  const resource = contextResource(context);
  if (!resource) return jsonError("Not found", 404);
  const [input, parseError] = await parseJsonBody(request);
  if (parseError) return parseError;
  if (!validId(input.id)) return jsonError("validation", 400);
  try {
    const allowed = cleanInput(resource, input);
    const { data, error } = await (getSupabaseAdmin() as any).from(resource.table).update({ ...allowed, updated_at: new Date().toISOString() }).eq("id", input.id).select().single();
    if (error) throw error;
    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof Error && error.message === "validation") return jsonError("validation", 400);
    console.error("Admin data update failed", error);
    return jsonError("save", 503);
  }
}

export async function DELETE(request: NextRequest, context: { params: { resource: string } }) {
  const authError = requireAdminAndOrigin(request);
  if (authError) return authError;
  const resource = contextResource(context);
  if (!resource) return jsonError("Not found", 404);
  const [body, parseError] = await parseJsonBody<{ id?: unknown }>(request);
  if (parseError) return parseError;
  if (!validId(body.id)) return jsonError("validation", 400);
  try {
    const { error } = await (getSupabaseAdmin() as any).from(resource.table).delete().eq("id", body.id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin data delete failed", error);
    return jsonError("delete", 503);
  }
}
