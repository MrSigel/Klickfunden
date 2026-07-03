import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { resourceBySlug } from "@/lib/admin-resources";
import { getSupabaseAdmin } from "@/lib/supabase/server";

function contextResource(context: { params: { resource: string } }) { return resourceBySlug(context.params.resource); }
function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = forwardedHost || request.headers.get("host");
  return Boolean(origin && host && new URL(origin).host === host);
}
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
export async function GET(_: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  try { const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).select("*").order("created_at",{ascending:false}); if(error) throw error; return NextResponse.json({data}); }
  catch(error){ console.error("Admin data load failed", {name:error instanceof Error?error.name:"UnknownError"}); return NextResponse.json({error:"load"},{status:503}); }
}
export async function POST(request: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  if (!sameOrigin(request)) return NextResponse.json({ error:"Forbidden" },{status:403});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  let input: Record<string, unknown>; try { input=await request.json(); } catch { return NextResponse.json({error:"validation"},{status:400}); }
  try { const allowed=cleanInput(resource,input); if(resource.slug==="einstellungen"){const {data:existing}=await (getSupabaseAdmin() as any).from(resource.table).select("id").limit(1).maybeSingle(); if(existing?.id){const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).update({...allowed,updated_at:new Date().toISOString()}).eq("id",existing.id).select().single();if(error)throw error;return NextResponse.json({data});}} const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).insert(allowed).select().single(); if(error) throw error; return NextResponse.json({data},{status:201}); }
  catch(error){ if(error instanceof Error&&error.message==="validation")return NextResponse.json({error:"validation"},{status:400}); console.error("Admin data save failed", {name:error instanceof Error?error.name:"UnknownError"}); return NextResponse.json({error:"save"},{status:503}); }
}
export async function PUT(request: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  if (!sameOrigin(request)) return NextResponse.json({ error:"Forbidden" },{status:403});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  let input: Record<string, unknown>; try { input=await request.json(); } catch { return NextResponse.json({error:"validation"},{status:400}); } if(!validId(input.id))return NextResponse.json({error:"validation"},{status:400});
  try { const allowed=cleanInput(resource,input); const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).update({...allowed,updated_at:new Date().toISOString()}).eq("id",input.id).select().single(); if(error) throw error; return NextResponse.json({data}); }
  catch(error){ if(error instanceof Error&&error.message==="validation")return NextResponse.json({error:"validation"},{status:400}); console.error("Admin data update failed", {name:error instanceof Error?error.name:"UnknownError"}); return NextResponse.json({error:"save"},{status:503}); }
}
export async function DELETE(request: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  if (!sameOrigin(request)) return NextResponse.json({ error:"Forbidden" },{status:403});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  let id: unknown; try { id=(await request.json()).id; } catch { return NextResponse.json({error:"validation"},{status:400}); } if(!validId(id))return NextResponse.json({error:"validation"},{status:400}); try { const {error}=await (getSupabaseAdmin() as any).from(resource.table).delete().eq("id",id); if(error) throw error; return NextResponse.json({ok:true}); }
  catch(error){ console.error("Admin data delete failed", {name:error instanceof Error?error.name:"UnknownError"}); return NextResponse.json({error:"delete"},{status:503}); }
}
