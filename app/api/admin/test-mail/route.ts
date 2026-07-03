import { NextRequest, NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-auth";
import { partnerEmailTemplates, sendPartnerEmail } from "@/lib/partner-emails";

export async function POST(request: NextRequest) {
  const origin=request.headers.get("origin"); const host=request.headers.get("x-forwarded-host")||request.headers.get("host");
  if(!hasAdminSession()||!origin||new URL(origin).host!==host)return NextResponse.json({error:"unauthorized"},{status:401});
  const target=process.env.ADMIN_NOTIFICATION_EMAIL;
  if(!target)return NextResponse.json({error:"not_configured"},{status:503});
  try {
    const result=await sendPartnerEmail(target,partnerEmailTemplates.test());
    return result.sent?NextResponse.json({ok:true}):NextResponse.json({error:"send_failed"},{status:503});
  } catch(error){console.error("Test mail sending failed",error);return NextResponse.json({error:"send_failed"},{status:503});}
}
