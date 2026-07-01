import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { resourceBySlug } from "@/lib/admin-resources";
import { getSupabaseAdmin } from "@/lib/supabase/server";

function contextResource(context: { params: { resource: string } }) { return resourceBySlug(context.params.resource); }
export async function GET(_: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  try { const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).select("*").order("created_at",{ascending:false}); if(error) throw error; return NextResponse.json({data}); }
  catch(error){ console.error("Admin data load failed", error); return NextResponse.json({error:"load"},{status:503}); }
}
export async function POST(request: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  const input=await request.json(); const allowed=Object.fromEntries(resource.fields.map(f=>[f.key,input[f.key] === "" ? null : input[f.key]]));
  try { const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).insert(allowed).select().single(); if(error) throw error; return NextResponse.json({data},{status:201}); }
  catch(error){ console.error("Admin data save failed", error); return NextResponse.json({error:"save"},{status:503}); }
}
export async function PUT(request: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  const input=await request.json(); const allowed=Object.fromEntries(resource.fields.map(f=>[f.key,input[f.key] === "" ? null : input[f.key]]));
  try { const {data,error}=await (getSupabaseAdmin() as any).from(resource.table).update({...allowed,updated_at:new Date().toISOString()}).eq("id",input.id).select().single(); if(error) throw error; return NextResponse.json({data}); }
  catch(error){ console.error("Admin data update failed", error); return NextResponse.json({error:"save"},{status:503}); }
}
export async function DELETE(request: NextRequest, context: { params: { resource: string } }) {
  if (!hasAdminSession()) return NextResponse.json({ error:"Unauthorized" },{status:401});
  const resource=contextResource(context); if(!resource) return NextResponse.json({error:"Not found"},{status:404});
  const {id}=await request.json(); try { const {error}=await (getSupabaseAdmin() as any).from(resource.table).delete().eq("id",id); if(error) throw error; return NextResponse.json({ok:true}); }
  catch(error){ console.error("Admin data delete failed", error); return NextResponse.json({error:"delete"},{status:503}); }
}
