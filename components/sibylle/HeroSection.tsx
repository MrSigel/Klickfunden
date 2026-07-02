'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CTAButton } from './CTAButton';
import { ctaLinks, heroQuestions } from '@/lib/sibylle/siteData';

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="grain relative min-h-[calc(100svh-82px)] overflow-hidden px-4 pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-sand/20 blur-[100px]" />
      <div className="absolute -right-24 top-12 h-[30rem] w-[30rem] rounded-full bg-olive/10 blur-[110px]" />
      <div className="container relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.78fr] lg:gap-20">
          <motion.div initial={false} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .13 } } }}>
            <motion.p variants={{ hidden:{opacity:0,y:16},show:{opacity:1,y:0,transition:{duration:.7,ease}} }} className="eyebrow">Systemische Klarheit · persönlich begleitet</motion.p>
            <motion.h1 variants={{ hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:1,ease}} }} className="editorial mt-7 max-w-[760px] text-[clamp(3.4rem,7vw,7.3rem)] leading-[.88] text-warmBlack">
              Wenn sich dein Leben <span className="italic text-deepOlive">wiederholt,</span> will etwas gesehen werden.
            </motion.h1>
            <motion.p variants={{ hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.8,ease}} }} className="mt-8 max-w-xl text-base leading-8 text-deepOlive/85 md:text-lg">
              Ein geschützter Raum für Beziehungsmuster, Sinnfragen und familiäre Dynamiken – ruhig, klar und ohne Druck.
            </motion.p>
            <motion.div variants={{ hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{duration:.8,ease}} }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={ctaLinks.primary.href}>Persönlich Kontakt aufnehmen</CTAButton>
              <CTAButton href={ctaLinks.secondary.href} variant="secondary" external>Erstgespräch buchen</CTAButton>
            </motion.div>
          </motion.div>

          <motion.div initial={false} animate={{opacity:1,x:0}} transition={{duration:1.1,delay:.25,ease}} className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-olive/15 bg-sibylleMist shadow-[0_35px_100px_rgba(35,42,26,.12)]">
              <div className="absolute inset-8 rounded-full border border-softGold/20" />
              <div className="absolute inset-16 rounded-full border border-olive/10" />
              <Image src="/sibylle/brand/logo-primary.png" alt="Sibylle Bergold – systemische Klarheit" fill priority sizes="(min-width: 1024px) 500px, 90vw" className="relative object-contain p-12 sm:p-16" />
            </div>
            <div className="absolute -bottom-5 -right-3 flex h-24 w-24 items-center justify-center rounded-full bg-deepOlive shadow-soft sm:h-28 sm:w-28"><Image src="/sibylle/brand/monogram-cream.png" alt="" width={618} height={799} className="h-16 w-auto sm:h-20" /></div>
          </motion.div>
        </div>

        <motion.div initial={false} animate="show" variants={{hidden:{},show:{transition:{delayChildren:.8,staggerChildren:.12}}}} className="mt-16 grid gap-3 md:mt-20 md:grid-cols-3">
          {heroQuestions.map((question,index)=><motion.div key={question} variants={{hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.7,ease}}}} whileHover={{y:-5}} className="premium-panel group rounded-[1.6rem] p-5 md:p-6">
            <div className="flex items-start gap-4"><span className="editorial text-2xl text-softGold">0{index+1}</span><p className="text-[.95rem] leading-7 text-warmBlack">{question}</p></div>
          </motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
