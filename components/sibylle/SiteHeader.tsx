'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, ctaLinks } from '@/lib/sibylle/siteData';
import { CTAButton } from './CTAButton';

export function SiteHeader() {
  const [open,setOpen]=useState(false);
  const links=navLinks.filter((_,i)=>[1,3,5,6].includes(i));
  return <header className="sticky top-0 z-50 border-b border-olive/10 bg-cream/80 backdrop-blur-2xl"><div className="container flex h-[76px] items-center justify-between md:h-[88px]"><Link href="/sibylle" className="focus-ring editorial text-2xl text-warmBlack md:text-3xl">Sibylle Bergold<span className="text-softGold">.</span></Link><div className="hidden items-center gap-7 lg:flex"><nav className="flex items-center gap-6">{links.map(item=><Link key={item.href} href={item.href} className="focus-ring text-xs font-semibold text-deepOlive transition hover:text-softGold">{item.label}</Link>)}</nav><CTAButton href={ctaLinks.secondary.href} variant="secondary" external className="!h-12 !px-5">Erstgespräch</CTAButton><CTAButton href={ctaLinks.primary.href} className="!h-12 !px-5">Kontakt</CTAButton></div><button type="button" aria-label={open?'Menü schließen':'Menü öffnen'} aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="focus-ring flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-olive/25 lg:hidden"><span className={`h-px w-5 bg-deepOlive transition ${open?'translate-y-[3.5px] rotate-45':''}`}/><span className={`h-px w-5 bg-deepOlive transition ${open?'-translate-y-[3.5px] -rotate-45':''}`}/></button></div>
    <AnimatePresence>{open&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-olive/10 bg-cream lg:hidden"><div className="container py-6"><nav className="grid gap-1">{navLinks.map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="rounded-2xl px-4 py-3 text-base text-deepOlive hover:bg-sibylleMist">{item.label}</Link>)}</nav><div className="mt-5 grid gap-3 sm:grid-cols-2"><CTAButton href={ctaLinks.secondary.href} variant="secondary" external>Erstgespräch</CTAButton><CTAButton href={ctaLinks.primary.href}>Kontakt</CTAButton></div></div></motion.div>}</AnimatePresence>
  </header>;
}
