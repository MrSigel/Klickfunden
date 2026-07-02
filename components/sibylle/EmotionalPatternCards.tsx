'use client';
import { motion } from 'framer-motion';
import { emotionalPatterns } from '@/lib/sibylle/siteData';

export function EmotionalPatternCards() {
  return <section className="grain section-shell overflow-hidden bg-warmBlack text-cream">
    <div className="absolute left-[15%] top-0 h-96 w-96 rounded-full bg-olive/25 blur-[120px]" />
    <div className="container relative z-10 grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-24">
      <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.9}}><p className="eyebrow !text-sand">Emotionale Muster</p><h2 className="editorial mt-7 text-[clamp(3rem,5vw,5.7rem)] leading-[.95]">Die Geschichte kennt dich schon.</h2><p className="mt-7 max-w-lg text-base leading-8 text-cream/65">Wiederholungen haben oft eine innere Logik. Wenn sie sichtbar wird, entsteht Raum für eine eigene Position.</p></motion.div>
      <div className="relative space-y-4 py-4">
        <div className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-transparent via-softGold/40 to-transparent" />
        {emotionalPatterns.map((item,index)=><motion.article key={item.title} initial={{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.35}} transition={{duration:.75,delay:index*.12}} whileHover={{x:8}} className={`relative ml-${index === 1 ? '0' : '0'} rounded-[1.8rem] border border-cream/10 bg-cream/[.055] p-6 pl-20 backdrop-blur-md md:p-8 md:pl-24 ${index===1?'md:ml-10':''}`}>
          <span className="editorial absolute left-6 top-6 text-3xl text-softGold md:left-8 md:top-8">0{index+1}</span><h3 className="editorial text-3xl">{item.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-cream/65 md:text-base">{item.description}</p>
        </motion.article>)}
      </div>
    </div>
  </section>;
}
