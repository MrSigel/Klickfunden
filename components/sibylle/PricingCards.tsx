'use client';
import { motion } from 'framer-motion';
import { pricingPackages } from '@/lib/sibylle/siteData';
import { CTAButton } from './CTAButton';

export function PricingCards() {
  return <section className="section-shell bg-sibylleMist/45"><div className="container"><div className="mb-14 grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Begleitung & Preise</p><h2 className="editorial mt-6 text-[clamp(3.2rem,5vw,5.5rem)] leading-[.95]">Klar in der Form. Persönlich im Weg.</h2></div><p className="max-w-lg self-end text-base leading-8 text-deepOlive/75">Die Angebote zeigen mögliche Formate. Welche Begleitung stimmig ist, wird im persönlichen Kontakt geklärt – transparent und ohne Druck.</p></div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{pricingPackages.map((item,index)=><motion.article key={item.title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.7,delay:(index%3)*.08}} whileHover={{y:-8}} className={`group flex min-h-[25rem] flex-col rounded-[2.2rem] border p-7 transition-shadow duration-500 md:p-9 ${index===1?'border-deepOlive bg-deepOlive text-cream shadow-[0_28px_70px_rgba(56,65,44,.2)]':'border-olive/15 bg-cream/75 text-warmBlack shadow-[0_20px_50px_rgba(31,33,26,.06)]'}`}>
      <div className="flex items-center justify-between"><span className={`text-[.65rem] font-bold uppercase tracking-[.22em] ${index===1?'text-sand':'text-olive'}`}>Format 0{index+1}</span>{index===1&&<span className="rounded-full bg-softGold px-3 py-1 text-[.6rem] font-bold uppercase tracking-widest text-warmBlack">Fokus</span>}</div><h3 className="editorial mt-7 text-3xl leading-tight">{item.title}</h3><p className={`editorial mt-5 text-4xl ${index===1?'text-sand':'text-deepOlive'}`}>{item.price}</p><div className={`my-6 h-px ${index===1?'bg-cream/15':'bg-olive/15'}`}/><p className={`text-sm leading-7 ${index===1?'text-cream/60':'text-deepOlive/70'}`}>{item.description}</p><div className="mt-auto pt-7"><CTAButton href={item.href ?? 'mailto:kontakt@sibylle-bergold.de'} variant={index===1?'secondary':'ghost'} className={index===1?'!border-cream/30 !text-cream hover:!bg-cream/10':''}>{item.href?'Zur Academy':'Anfrage senden'}</CTAButton></div>
    </motion.article>)}</div>
  </div></section>;
}
