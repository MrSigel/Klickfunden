import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin Dashboard | Klickhafen",
  description: "Privates Admin-Dashboard für Klickhafen und Klickfunden.de.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ink text-white lg:flex">
      <AdminSidebar />
      <main className="min-w-0 flex-1 overflow-x-hidden px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        {children}
      </main>
    </div>
  );
}
