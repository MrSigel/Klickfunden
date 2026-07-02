'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { themeCards } from '@/lib/sibylle/siteData';

export function ThemeCards() {
  const featured = themeCards.filter((_,i)=>i<2);
  return <section className="section-shell bg-sibylleMist/55">
    <div className="container"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Zwei Themenwelten</p><h2 className="editorial mt-5 max-w-3xl text-[clamp(3rem,5vw,5.2rem)] leading-none">Wo suchst du gerade Klarheit?</h2></div><p className="max-w-sm text-sm leading-7 text-olive">Kein Schema, sondern ein sorgfältiger Blick auf das, was sich in deinem Leben zeigt.</p></div>
      <div className="grid gap-5 lg:grid-cols-2">{featured.map((item,index)=><motion.article key={item.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8,delay:index*.12}} whileHover={{y:-7}} className={`group relative min-h-[31rem] overflow-hidden rounded-[2.5rem] p-8 md:p-12 ${index===0?'bg-deepOlive text-cream':'premium-panel text-warmBlack'}`}>
        <div className={`absolute -right-24 -top-24 h-72 w-72 rounded-full border ${index===0?'border-cream/15 bg-softGold/10':'border-olive/15 bg-sand/20'} transition-transform duration-700 group-hover:scale-110`} />
        <div className="relative flex h-full flex-col"><span className={`text-[.7rem] font-bold uppercase tracking-[.23em] ${index===0?'text-sand':'text-olive'}`}>{item.label}</span><h3 className="editorial mt-10 max-w-md text-5xl leading-[.98] md:text-6xl">{item.title}</h3><p className={`mt-6 max-w-md leading-8 ${index===0?'text-cream/65':'text-deepOlive/75'}`}>{item.description}</p><Link href={item.href} className="focus-ring mt-auto inline-flex w-fit items-center gap-4 pt-12 text-sm font-bold"><span>Den Raum entdecken</span><span className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition duration-500 group-hover:translate-x-1 group-hover:bg-softGold group-hover:text-warmBlack">→</span></Link></div>
      </motion.article>)}</div>
    </div>
  </section>;
}
