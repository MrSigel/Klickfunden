'use client';
import { motion } from 'framer-motion';
import { pricingPackages } from '@/lib/sibylle/siteData';
import { CTAButton } from './CTAButton';

export function PricingCards() {
  return <section className="section-shell bg-sibylleMist/45"><div className="container"><div className="mb-14 grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Persönliche Begleitung</p><h2 className="editorial mt-6 text-[clamp(3.2rem,5vw,5.5rem)] leading-[.95]">Klar im Kontakt. Individuell im Weg.</h2></div><p className="max-w-lg self-end text-base leading-8 text-deepOlive/75">Welche Begleitung stimmig ist, wird persönlich und transparent geklärt.</p></div>
    <div className="grid gap-5 md:grid-cols-2">{pricingPackages.map((item,index)=><motion.article key={item.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.7,delay:index*.08}} whileHover={{y:-8}} className={`group flex min-h-[20rem] flex-col rounded-[2.2rem] border p-7 transition-shadow duration-500 md:p-9 ${index===1?'border-deepOlive bg-deepOlive text-cream shadow-[0_28px_70px_rgba(63,74,44,.2)]':'border-olive/15 bg-cream/75 text-warmBlack shadow-[0_20px_50px_rgba(35,42,26,.06)]'}`}>
      <span className={`text-[.65rem] font-bold uppercase tracking-[.22em] ${index===1?'text-sand':'text-olive'}`}>Schritt 0{index+1}</span><h3 className="editorial mt-7 text-3xl leading-tight">{item.title}</h3><div className={`my-6 h-px ${index===1?'bg-cream/15':'bg-olive/15'}`}/><p className={`text-sm leading-7 ${index===1?'text-cream/70':'text-deepOlive/70'}`}>{item.description}</p><div className="mt-auto pt-7"><CTAButton href="mailto:info@sibylle-bergold.de" variant={index===1?'secondary':'ghost'} className={index===1?'!border-cream/30 !text-cream hover:!bg-cream/10':''}>Jetzt persönlich melden</CTAButton></div>
    </motion.article>)}</div>
  </div></section>;
}
