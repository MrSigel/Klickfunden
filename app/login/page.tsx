import type { Metadata } from "next";
import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";
import { hasAdminSession } from "@/lib/admin-auth";

export const metadata: Metadata = { title: "Admin Login | Klickfunden", robots: { index: false, follow: false } };
export default function LoginPage() {
  if (hasAdminSession()) redirect("/admin");
  return <LoginForm />;
}
