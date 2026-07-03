import { NextRequest,NextResponse } from "next/server";import { getPartnerSession } from "@/lib/partner-auth";import { monthKey,nextLastFriday,packageDetails } from "@/lib/partner-config";import { getSupabaseAdmin } from "@/lib/supabase/server";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";
export async function GET(){
  const id=getPartnerSession();if(!id)return NextResponse.json({error:"unauthorized"},{status:401});
  const db=getSupabaseAdmin() as any;
  try {
    const [partnerResult,quotaResult,requestsResult,paymentResult]=await Promise.all([
      db.from("partners").select("id,contact_name,organization_name,email,status,selected_package,payment_status,permanent_payment_reference").eq("id",id).single(),
      db.from("partner_monthly_quotas").select("*").eq("partner_id",id).eq("month_key",monthKey()).maybeSingle(),
      db.from("partner_keyword_requests").select("*").eq("partner_id",id).order("created_at",{ascending:false}),
      db.from("partner_payments").select("*").eq("partner_id",id).order("created_at",{ascending:false}).limit(1).maybeSingle(),
    ]);
    if(partnerResult.error){console.error("Partner dashboard load failed",partnerResult.error);return NextResponse.json({error:"load"},{status:503})}
    const partner=partnerResult.data;
    if(!partner||!["akzeptiert","aktiv"].includes(partner.status))return NextResponse.json({error:"inactive"},{status:403});
    return NextResponse.json({partner:{...partner,package:packageDetails(partner.selected_package)},quota:quotaResult.data,requests:requestsResult.data||[],payment:paymentResult.data,resetAt:nextLastFriday().toISOString(),bank:{accountHolder:process.env.PARTNER_BANK_ACCOUNT_HOLDER||"",iban:process.env.PARTNER_BANK_IBAN||"",bic:process.env.PARTNER_BANK_BIC||"",bankName:process.env.PARTNER_BANK_NAME||""}});
  } catch(error){console.error("Partner dashboard load failed",error);return NextResponse.json({error:"load"},{status:503})}
}
export async function POST(request:NextRequest){
  const id=getPartnerSession();if(!id)return NextResponse.json({error:"unauthorized"},{status:401});
  if(new URL(request.headers.get("origin")||request.url).host!==request.headers.get("host"))return NextResponse.json({error:"forbidden"},{status:403});
  let i:any;try{i=await request.json()}catch{return NextResponse.json({error:"invalid"},{status:400})}
  if(!i.topic||!i.industry||!i.goal||!i.description)return NextResponse.json({error:"invalid"},{status:400});
  const db=getSupabaseAdmin() as any;
  try {
    const {data,error}=await db.rpc("create_partner_keyword_request",{p_partner_id:id,p_topic:String(i.topic).trim(),p_industry:String(i.industry).trim(),p_target_group:String(i.target_group||"").trim(),p_region:String(i.region||"").trim(),p_website:String(i.website||"").trim(),p_goal:String(i.goal),p_description:String(i.description).trim(),p_month_key:monthKey()});
    if(error){console.error("Partner request failed",error);return NextResponse.json({error:"quota_unavailable"},{status:409})}
    const {data:quota}=await db.from("partner_monthly_quotas").select("quota_remaining").eq("partner_id",id).eq("month_key",monthKey()).single();
    if(quota?.quota_remaining===0){const {data:partner}=await db.from("partners").select("contact_name,email").eq("id",id).single();if(partner)await sendPartnerEmail(partner.email,partnerEmailTemplates.quotaUsed(partner.contact_name))}
    return NextResponse.json({id:data},{status:201});
  } catch(error){console.error("Partner keyword request failed",error);return NextResponse.json({error:"unavailable"},{status:503})}
}
