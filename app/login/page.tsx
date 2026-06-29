import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Klickhafen",
  description: "Privater Admin-Zugang für Klickhafen und Klickfunden.de.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  const isAuthenticated =
    cookies().get("klickfunden_admin_session")?.value === "authenticated";

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
