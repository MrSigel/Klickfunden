'use client';

import { motion } from 'framer-motion';
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
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .13 } } }}>
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

          <motion.div initial={{opacity:0,x:35,rotate:2}} animate={{opacity:1,x:0,rotate:0}} transition={{duration:1.1,delay:.25,ease}} className="relative mx-auto w-full max-w-[480px] lg:mx-0">
            <motion.div animate={{y:[0,-10,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}} className="premium-panel relative aspect-[4/5] overflow-hidden rounded-[2.6rem] p-3">
              <div className="relative h-full overflow-hidden rounded-[2.15rem] bg-gradient-to-br from-[#e6d4b8] via-[#c8b087] to-[#596448]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,.65),transparent_26%),radial-gradient(circle_at_25%_76%,rgba(31,33,26,.24),transparent_42%)]" />
                <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/50" />
                <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/25" />
                <button aria-label="Vorstellungsvideo abspielen" className="focus-ring absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-cream/80 text-deepOlive shadow-[0_18px_60px_rgba(31,33,26,.25)] backdrop-blur-xl transition duration-500 hover:scale-105 hover:bg-white">
                  <span className="ml-1 text-xl">▶</span>
                </button>
                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/30 bg-warmBlack/35 p-5 text-cream backdrop-blur-xl">
                  <p className="text-[.65rem] font-bold uppercase tracking-[.24em] text-cream/70">Begegnung statt Inszenierung</p>
                  <p className="editorial mt-2 text-2xl leading-tight">Sibylles Ansatz in 90 Sekunden</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -left-5 top-16 hidden rounded-full border border-white/60 bg-cream/75 px-5 py-3 text-xs font-bold tracking-wide text-deepOlive shadow-soft backdrop-blur-xl sm:block">15+ Jahre Erfahrung</div>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="show" variants={{hidden:{},show:{transition:{delayChildren:.8,staggerChildren:.12}}}} className="mt-16 grid gap-3 md:mt-20 md:grid-cols-3">
          {heroQuestions.map((question,index)=><motion.div key={question} variants={{hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.7,ease}}}} whileHover={{y:-5}} className="premium-panel group rounded-[1.6rem] p-5 md:p-6">
            <div className="flex items-start gap-4"><span className="editorial text-2xl text-softGold">0{index+1}</span><p className="text-[.95rem] leading-7 text-warmBlack">{question}</p></div>
          </motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
