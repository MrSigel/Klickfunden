import type { Metadata } from 'next';
import './sibylle.css';
import { SiteHeader } from '@/components/sibylle/SiteHeader';
import { SiteFooter } from '@/components/sibylle/SiteFooter';
import { MobileStickyCTA } from '@/components/sibylle/MobileStickyCTA';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.klickfunden.de'),
  title: {
    default: 'Sibylle Bergold | Systemische Klarheit',
    template: '%s | Sibylle Bergold',
  },
  description: 'Klarheit, Wahrnehmung, innere Verbindung und systemische Tiefe – persönlich begleitet von Sibylle Bergold.',
  applicationName: 'Sibylle Bergold',
  manifest: '/sibylle/site.webmanifest',
  icons: {
    icon: [
      { url: '/sibylle/favicon.ico' },
      { url: '/sibylle/favicon.svg', type: 'image/svg+xml' },
      { url: '/sibylle/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/sibylle/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/sibylle/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/sibylle/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/sibylle/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/sibylle/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/sibylle/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/sibylle/safari-pinned-tab.svg', color: '#3F4A2C' }],
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: '/sibylle',
    siteName: 'Sibylle Bergold',
    title: 'Sibylle Bergold | Systemische Klarheit',
    description: 'Klarheit, Wahrnehmung, innere Verbindung und systemische Tiefe.',
    images: [{ url: '/sibylle/social/og-image-1200x630.png', width: 1200, height: 630, alt: 'Sibylle Bergold' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sibylle Bergold | Systemische Klarheit',
    description: 'Klarheit, Wahrnehmung, innere Verbindung und systemische Tiefe.',
    images: ['/sibylle/social/og-image-1200x630.png'],
  },
  other: {
    'msapplication-config': '/sibylle/browserconfig.xml',
    'theme-color': '#3F4A2C',
  },
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
