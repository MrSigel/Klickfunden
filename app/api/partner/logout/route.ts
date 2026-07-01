import { NextResponse } from "next/server";import { PARTNER_COOKIE } from "@/lib/partner-auth";
export async function POST(request:Request){const response=NextResponse.redirect(new URL("/partner/login",request.url),303);response.cookies.set(PARTNER_COOKIE,"",{httpOnly:true,path:"/",maxAge:0});return response}
