import type { Metadata } from "next";
import Link from "next/link";
import { createClient, supabaseConfigured } from "@/lib/supabase/server";
import { Logo } from "@/components/Logo";
import { AdminNav } from "@/components/AdminNav";
import { LogoutButton } from "@/components/LogoutButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CRM | Klickfunden",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!supabaseConfigured) {
    return (
      <div className="grid min-h-screen place-items-center px-6">
        <div className="max-w-[520px] rounded-3xl border border-line bg-surface/50 p-8 text-center">
          <h1 className="font-display text-[24px] font-medium">CRM ist bereit — fast.</h1>
          <p className="mt-3 text-[15px] text-fog">
            Hinterlege deine Supabase-Zugangsdaten in <code className="text-signal">.env.local</code>{" "}
            (<code>NEXT_PUBLIC_SUPABASE_URL</code>, <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>) und führe{" "}
            <code className="text-signal">supabase/schema.sql</code> im Supabase-SQL-Editor aus.
            Danach lädt das CRM automatisch.
          </p>
        </div>
      </div>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Login page renders without the shell.
  if (!user) return <>{children}</>;

  return (
    <div className="mx-auto min-h-screen max-w-[1400px] px-4 py-4 md:grid md:grid-cols-[240px_1fr] md:gap-5 md:px-6 md:py-6">
      <aside className="mb-4 rounded-2xl border border-line bg-surface/40 p-4 md:mb-0 md:flex md:flex-col">
        <Link href="/admin" className="mb-6 hidden md:block">
          <Logo />
        </Link>
        <AdminNav />
        <div className="mt-auto hidden gap-2 pt-6 md:grid">
          <Link href="/" className="rounded-xl px-4 py-2.5 text-[13px] text-fog hover:text-paper">
            ← Website ansehen
          </Link>
          <LogoutButton className="rounded-xl px-4 py-2.5 text-left text-[13px] text-fog hover:text-paper" />
        </div>
      </aside>

      <div className="min-w-0">
        <div className="mb-4 flex items-center justify-between md:hidden">
          <Logo />
          <LogoutButton className="text-[13px] text-fog" />
        </div>
        {children}
      </div>
    </div>
  );
}
