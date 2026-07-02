import type { Metadata } from 'next';
import './sibylle.css';
import { SiteHeader } from '@/components/sibylle/SiteHeader';
import { SiteFooter } from '@/components/sibylle/SiteFooter';
import { MobileStickyCTA } from '@/components/sibylle/MobileStickyCTA';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sibylle Bergold | Systemaufstellung & Musterlösung',
  description: 'Warm, ruhige Begleitung für Beziehungsmuster, Sinnfragen und Familienthemen mit systemischen Aufstellungen.',
};

export default function SibylleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`sibylle-site ${serif.variable} ${sans.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileStickyCTA />
    </div>
  );
}
