import Link from 'next/link';
import { footerLinks } from '@/lib/sibylle/siteData';

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-warmBlack px-4 py-10 text-sm text-cream/60 md:px-0">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Sibylle Bergold · Coaching und Selbsterfahrung</p>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-softGold">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
