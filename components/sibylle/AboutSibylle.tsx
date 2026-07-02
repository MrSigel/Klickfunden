'use client';
import { motion } from 'framer-motion';

export function AboutSibylle() {
  return <section className="section-shell overflow-hidden"><div className="container grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
    <motion.div initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="relative mx-auto aspect-[4/5] w-full max-w-[470px] rounded-[2.7rem] bg-gradient-to-br from-sand/55 via-mist to-olive/35 p-3 shadow-[0_35px_90px_rgba(31,33,26,.14)]">
      <div className="relative h-full overflow-hidden rounded-[2.25rem] border border-white/60 bg-[radial-gradient(circle_at_62%_24%,rgba(255,255,255,.9),transparent_22%),linear-gradient(145deg,rgba(248,243,234,.75),rgba(56,65,44,.22))]"><div className="absolute inset-10 rounded-full border border-deepOlive/10"/><div className="absolute inset-20 rounded-full border border-softGold/30"/><p className="editorial absolute bottom-10 left-8 right-8 text-3xl leading-tight text-deepOlive">Persönlichkeit zeigt sich in der Begegnung – nicht in einem fremden Stockfoto.</p></div>
    </motion.div>
    <motion.div initial={{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.9}}><p className="eyebrow">Sibylle Bergold</p><h2 className="editorial mt-7 text-[clamp(3.2rem,5vw,5.8rem)] leading-[.95]">Wärme, Klarheit und systemische Tiefe.</h2><blockquote className="editorial my-9 border-l border-softGold pl-7 text-3xl italic leading-snug text-deepOlive">„Muster lassen sich sehen, ohne sie zu bewerten.“</blockquote><p className="max-w-xl text-base leading-8 text-deepOlive/80">Als Gründerin der Deutschen Akademie für Systemaufstellungen begleitet Sibylle seit über 15 Jahren Menschen bei Beziehungsmustern, Herkunftsfragen und persönlicher Orientierung.</p><div className="mt-9 inline-flex items-center gap-4 rounded-full border border-olive/20 bg-white/55 px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-deepOlive"><span className="h-2 w-2 rounded-full bg-softGold"/>Deutsche Akademie für Systemaufstellungen</div></motion.div>
  </div></section>;
}
