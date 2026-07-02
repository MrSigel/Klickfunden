import { CTAButton } from '@/components/sibylle/CTAButton';

export default function ReferenzenPage() {
  return <main className="section-shell min-h-[70vh]"><div className="container max-w-4xl"><p className="eyebrow">Vertrauen</p><h1 className="editorial mt-7 text-[clamp(3.5rem,7vw,7rem)] leading-[.9]">Persönliche Begleitung beginnt mit <span className="italic text-deepOlive">Wahrnehmung.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-deepOlive/75">Wenn du erfahren möchtest, ob Sibylles Arbeit zu deinem Anliegen passt, klärt ihr das in einem persönlichen Erstgespräch.</p><div className="mt-9"><CTAButton href="mailto:kontakt@sibylle-bergold.de">Jetzt persönlich bei Sibylle melden</CTAButton></div></div></main>;
}
