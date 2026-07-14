"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { StickyMobileCta } from "./StickyMobileCta";
import { CookieBanner } from "./CookieBanner";
import { ExitIntent } from "./ExitIntent";
import { AnalyticsGate } from "./AnalyticsGate";

/** Marketing chrome for the public site; hidden on the /admin CRM. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return <>{children}</>;

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <StickyMobileCta />
      <CookieBanner />
      <ExitIntent />
      <AnalyticsGate />
    </>
  );
}
