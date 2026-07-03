import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { monthKey, nextLastFriday, partnerStatuses, paymentStatuses, requestStatuses } from "@/lib/partner-config";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";
import { getSupabaseAdmin } from "@/lib/supabase/server";

function authorized(request: NextRequest) { return hasAdminSession() && new URL(request.headers.get("origin") || request.url).host === (request.headers.get("x-forwarded-host") || request.headers.get("host")); }
export async function GET() {
  if (!hasAdminSession()) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const db = getSupabaseAdmin() as any;
  try {
    const [partnersResult, paymentsResult, requestsResult, quotasResult, notesResult] = await Promise.all([
      db.from("partners").select("id,contact_name,organization_name,email,website,phone,industry,region,partner_area,status,selected_package,payment_status,permanent_payment_reference,message,created_at,updated_at").neq("status", "geloescht").order("created_at", { ascending: false }),
      db.from("partner_payments").select("*").order("created_at", { ascending: false }),
      db.from("partner_keyword_requests").select("*").order("created_at", { ascending: false }),
      db.from("partner_monthly_quotas").select("*").order("created_at", { ascending: false }),
      db.from("partner_admin_notes").select("*").order("created_at", { ascending: false }),
    ]);
    const firstError = [partnersResult, paymentsResult, requestsResult, quotasResult, notesResult].find((r) => r.error);
    if (firstError?.error) {
      console.error("Partner admin data load failed", firstError.error);
      return NextResponse.json({ error: "load" }, { status: 503 });
    }
    return NextResponse.json({ partners: partnersResult.data || [], payments: paymentsResult.data || [], requests: requestsResult.data || [], quotas: quotasResult.data || [], notes: notesResult.data || [] });
  } catch (error) {
    console.error("Partner admin data load failed", error);
    return NextResponse.json({ error: "load" }, { status: 503 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  let input:any; try { input=await request.json(); } catch { return NextResponse.json({error:"invalid"},{status:400}); }
  const db=getSupabaseAdmin() as any;
  try {
    let mailSent: boolean | null = null;
    if(input.action==="partner_status"&&partnerStatuses.includes(input.status)){
      const {data:partner,error:partnerErr}=await db.from("partners").update({status:input.status}).eq("id",input.partner_id).select("contact_name,email").single();
      if(partnerErr) throw partnerErr;
      if(input.status==="akzeptiert"&&partner) mailSent=(await sendPartnerEmail(partner.email,partnerEmailTemplates.accepted(partner.contact_name))).sent;
      if(input.status==="abgelehnt"&&input.send_email&&partner) mailSent=(await sendPartnerEmail(partner.email,partnerEmailTemplates.rejected(partner.contact_name))).sent;
    } else if(input.action==="payment_status"&&paymentStatuses.includes(input.status)){
      const {data:payment,error:paymentErr}=await db.from("partner_payments").update({status:input.status,paid_at:input.status==="bezahlt"?new Date().toISOString():null,period_start:input.status==="bezahlt"?new Date().toISOString().slice(0,10):null,period_end:input.status==="bezahlt"?nextLastFriday().toISOString().slice(0,10):null}).eq("id",input.payment_id).select("partner_id,package_name").single();
      if(paymentErr) throw paymentErr;
      if(input.status==="bezahlt"&&payment){
        const {error:statusErr}=await db.from("partners").update({payment_status:"bezahlt",status:"aktiv"}).eq("id",payment.partner_id);
        if(statusErr) throw statusErr;
        if(payment.package_name==="Keyword Support Paket"){
          const {error:quotaErr}=await db.from("partner_monthly_quotas").upsert({partner_id:payment.partner_id,month_key:monthKey(),package_name:payment.package_name,quota_total:4,quota_used:0,quota_remaining:4,payment_required:true,is_active:true},{onConflict:"partner_id,month_key"});
          if(quotaErr) throw quotaErr;
        }
        const {data:partner}=await db.from("partners").select("contact_name,email").eq("id",payment.partner_id).single();
        if(partner)mailSent=(await sendPartnerEmail(partner.email,partnerEmailTemplates.payment(partner.contact_name,payment.package_name==="Keyword Support Paket"))).sent;
      }
    } else if(input.action==="quota"){
      const {error:quotaErr}=await db.from("partner_monthly_quotas").update({quota_total:Number(input.total),quota_remaining:Number(input.remaining),is_active:Boolean(input.is_active)}).eq("id",input.quota_id);
      if(quotaErr) throw quotaErr;
    } else if(input.action==="answer"&&requestStatuses.includes(input.status)){
      const keywords=String(input.keywords||"").split(",").map((x:string)=>x.trim()).filter(Boolean).slice(0,15);
      const {data:answered,error:answerErr}=await db.from("partner_keyword_requests").update({status:input.status,admin_answer:input.admin_answer||null,recommended_keywords:keywords,search_intent_notes:input.search_intent_notes||null,optimization_notes:input.optimization_notes||null,answered_at:input.status==="beantwortet"?new Date().toISOString():null}).eq("id",input.request_id).select("partner_id").single();
      if(answerErr) throw answerErr;
      if(input.status==="beantwortet"&&answered){const {data:partner}=await db.from("partners").select("contact_name,email").eq("id",answered.partner_id).single();if(partner)mailSent=(await sendPartnerEmail(partner.email,partnerEmailTemplates.answered(partner.contact_name))).sent;}
    } else if(input.action==="note"&&input.note){
      const {error:noteErr}=await db.from("partner_admin_notes").insert({partner_id:input.partner_id,note:String(input.note).trim()});
      if(noteErr) throw noteErr;
    } else return NextResponse.json({error:"invalid"},{status:400});
    return NextResponse.json({ok:true,mailSent});
  } catch(error){console.error("Partner admin update failed",error);return NextResponse.json({error:"save"},{status:503});}
}
