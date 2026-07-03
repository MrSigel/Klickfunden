import type { Metadata } from 'next';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = { title: 'Cookie-Informationen' };

export default function CookiesPage() {
  return (
    <main className="bg-cream px-4 py-16 text-warmBlack md:px-0 md:py-24">
      <article className="container max-w-4xl rounded-[2.5rem] border border-olive/15 bg-white/70 p-8 shadow-soft md:p-12">
        <p className="eyebrow">Datenschutz</p><h1 className="editorial mt-7 text-5xl md:text-6xl">Cookie-Informationen</h1>
        <div className="mt-12 space-y-10 text-base leading-8 text-deepOlive/80">
          <section><h2 className="text-xl font-semibold text-warmBlack">Ihre Entscheidung</h2><p className="mt-4">Sie können diese Website mit ausschließlich technisch notwendigen Speicherzugriffen nutzen. Vercel Web Analytics wird nur aktiviert, wenn Sie ausdrücklich zustimmen. Ihre Auswahl können Sie jederzeit ändern.</p><div className="mt-6"><CookieSettingsButton className="focus-ring inline-flex h-12 items-center justify-center rounded-full bg-deepOlive px-6 text-sm font-semibold text-cream transition hover:bg-warmBlack" /></div></section>

          <section><h2 className="text-xl font-semibold text-warmBlack">Eingesetzte Speichertechnologien</h2><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm"><thead><tr className="border-b border-olive/20"><th className="py-3 pr-4 font-semibold text-warmBlack">Name/Dienst</th><th className="py-3 pr-4 font-semibold text-warmBlack">Zweck</th><th className="py-3 pr-4 font-semibold text-warmBlack">Speicherdauer</th><th className="py-3 font-semibold text-warmBlack">Kategorie</th></tr></thead><tbody><tr className="border-b border-olive/10"><td className="py-4 pr-4">klickfunden_cookie_consent</td><td className="py-4 pr-4">Speichert Ihre Datenschutz-Auswahl im lokalen Browserspeicher.</td><td className="py-4 pr-4">Bis zur Löschung im Browser oder Änderung der Auswahl</td><td className="py-4">Notwendig</td></tr><tr><td className="py-4 pr-4">Vercel Web Analytics</td><td className="py-4 pr-4">Ermittelt Reichweite und Nutzung der Website in zusammengefasster Form.</td><td className="py-4 pr-4">Gemäß den Einstellungen und Vorgaben von Vercel</td><td className="py-4">Analyse, nur mit Einwilligung</td></tr></tbody></table></div></section>

          <section><h2 className="text-xl font-semibold text-warmBlack">Vercel Hosting und Supabase</h2><p className="mt-4">Vercel stellt die Website technisch bereit und verarbeitet dabei erforderliche Server- und Verbindungsdaten. Supabase wird als Datenbankdienst eingesetzt. Diese Dienste sind keine optionalen Analyse-Cookies. Informationen zu den verarbeiteten Daten, Rechtsgrundlagen und Empfängern finden Sie in der Datenschutzerklärung.</p></section>

          <section><h2 className="text-xl font-semibold text-warmBlack">Browser-Einstellungen</h2><p className="mt-4">Sie können lokale Speichereinträge und Cookies außerdem über die Einstellungen Ihres Browsers anzeigen und löschen. Wenn Sie den Eintrag zur Einwilligung löschen, wird die Auswahl beim nächsten Besuch erneut abgefragt.</p></section>
          <p className="text-sm text-deepOlive/60">Stand: Juli 2026</p>
        </div>
      </article>
    </main>
  );
}
