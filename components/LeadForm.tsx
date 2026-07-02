"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Globe2,
  Megaphone,
  Search,
  Sparkles,
} from "lucide-react";
import { submitLead } from "@/app/actions/submitLead";

type Goal = "mehr-sichtbarkeit" | "mehr-leads" | "ki-suche" | "ads";

type FormState = {
  goal: Goal | null;
  website: string;
  noWebsite: boolean;
  name: string;
  email: string;
  phone: string;
  companyWebsite: string;
  startedAt: number;
};

const goals: { id: Goal; label: string; description: string; icon: typeof Search }[] = [
  {
    id: "mehr-sichtbarkeit",
    label: "Mehr Sichtbarkeit",
    description: "Bei Google besser gefunden werden",
    icon: Search,
  },
  {
    id: "ki-suche",
    label: "Sichtbarkeit in der KI-Suche",
    description: "In ChatGPT, Gemini & Co. auftauchen",
    icon: Sparkles,
  },
  {
    id: "mehr-leads",
    label: "Mehr Anfragen & Leads",
    description: "Planbar neue Kund:innen gewinnen",
    icon: Globe2,
  },
  {
    id: "ads",
    label: "Bezahlte Reichweite",
    description: "Google, Meta oder TikTok Ads starten",
    icon: Megaphone,
  },
];

const stepLabels = ["Ziel", "Website", "Kontakt"];
const contactEmail = "kontakt@klickfunden.de";
const databaseDownMessage =
  "Aktuell nehmen wir Veränderungen vor. Bitte kontaktiere uns mit deinem Anliegen per E-Mail. Wir sind bald wieder über das Formular erreichbar.";

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [databaseDown, setDatabaseDown] = useState(false);
  const [emailWarning, setEmailWarning] = useState("");
  const [form, setForm] = useState<FormState>({
    goal: null,
    website: "",
    noWebsite: false,
    name: "",
    email: "",
    phone: "",
    companyWebsite: "",
    startedAt: Date.now(),
  });

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 2));
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const canContinueStep0 = form.goal !== null;
  const canContinueStep1 = form.noWebsite || form.website.trim().length > 2;
  const canSubmit =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.phone.trim().length > 3;

  const handleSubmit = async () => {
    if (!form.goal) {
      setSubmitMessage("Bitte wähle zuerst dein wichtigstes Ziel aus.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");
    setDatabaseDown(false);

    const selectedGoal = goals.find((goal) => goal.id === form.goal);
    try {
      const result = await submitLead({
        goal: form.goal,
        goalLabel: selectedGoal?.label || form.goal,
        website: form.website,
        noWebsite: form.noWebsite,
        name: form.name,
        email: form.email,
        telefon: form.phone,
        companyWebsite: form.companyWebsite,
        startedAt: form.startedAt,
      });

      if (!result.success) {
        if (result.errorType === "DATABASE_DOWN") {
          setDatabaseDown(true);
          setSubmitMessage("");
          return;
        }

        setSubmitMessage(result.message);
        return;
      }

      setEmailWarning(result.emailWarning || "");
      setSubmitted(true);
    } catch {
      setDatabaseDown(true);
      setSubmitMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="angebot" className="relative bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-radial-fade opacity-60" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="eyebrow">Individuelles Angebot</span>
            <h2 className="section-label mt-5 text-balance">
              In 3 Schritten zu deiner Strategie
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-mist-100/75">
              Keine Preisliste, kein Standardpaket – nur ein Angebot, das zu
              deinem Business passt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 overflow-hidden rounded-4xl border border-white/10 bg-ink-800/70 shadow-card backdrop-blur"
          >
            {!submitted ? (
              <>
                <div className="flex items-center gap-3 border-b border-white/10 px-7 py-6 sm:px-10">
                  {stepLabels.map((label, i) => (
                    <div key={label} className="flex flex-1 items-center gap-3">
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                          i <= step
                            ? "bg-marsgreen text-ink-900"
                            : "bg-white/10 text-mist-100/75"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span
                        className={`hidden text-sm font-medium sm:block ${
                          i <= step ? "text-white" : "text-mist-100/75"
                        }`}
                      >
                        {label}
                      </span>
                      {i < stepLabels.length - 1 && (
                        <div className="h-px flex-1 bg-white/10">
                          <motion.div
                            className="h-px bg-marsgreen"
                            initial={{ width: "0%" }}
                            animate={{ width: i < step ? "100%" : "0%" }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="relative min-h-[360px] px-7 py-9 sm:px-10">
                  <AnimatePresence mode="wait" custom={direction} initial={false}>
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h3 className="font-display text-xl font-semibold text-white">
                          Was ist dein wichtigstes Ziel?
                        </h3>
                        <p className="mt-1 text-sm text-mist-100/75">
                          Wähle die Option, die am besten passt.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {goals.map((g) => {
                            const Icon = g.icon;
                            const active = form.goal === g.id;
                            return (
                              <motion.button
                                key={g.id}
                                type="button"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() =>
                                  setForm((f) => ({ ...f, goal: g.id }))
                                }
                                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-colors duration-200 ${
                                  active
                                    ? "border-marsgreen bg-marsgreen/10"
                                    : "border-white/10 bg-ink-700/50 hover:border-white/25"
                                }`}
                              >
                                <span
                                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                                    active
                                      ? "bg-marsgreen text-ink-900"
                                      : "bg-white/10 text-mist-100/80"
                                  }`}
                                >
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-white">
                                    {g.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-mist-100/75">
                                    {g.description}
                                  </span>
                                </span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h3 className="font-display text-xl font-semibold text-white">
                          Wie heißt deine aktuelle Website?
                        </h3>
                        <p className="mt-1 text-sm text-mist-100/75">
                          So können wir uns vor dem Gespräch einen ersten
                          Eindruck verschaffen.
                        </p>

                        <div className="mt-6">
                          <label className="mb-2 block text-sm font-medium text-mist-100/80">
                            Website-URL
                          </label>
                          <input
                            type="text"
                            placeholder="www.dein-business.de"
                            disabled={form.noWebsite}
                            value={form.website}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, website: e.target.value }))
                            }
                            className="w-full rounded-xl border border-white/15 bg-ink-700/60 px-4 py-3.5 text-white placeholder:text-mist-100/75 outline-none transition-colors focus:border-marsgreen disabled:opacity-60"
                          />

                          <label className="mt-4 flex items-center gap-2.5 text-sm text-mist-100/80">
                            <input
                              type="checkbox"
                              checked={form.noWebsite}
                              onChange={(e) =>
                                setForm((f) => ({
                                  ...f,
                                  noWebsite: e.target.checked,
                                  website: "",
                                }))
                              }
                              className="h-4 w-4 rounded border-white/30 bg-ink-700 text-marsgreen accent-marsgreen"
                            />
                            Ich habe aktuell noch keine Website
                          </label>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h3 className="font-display text-xl font-semibold text-white">
                          Wie erreichen wir dich?
                        </h3>
                        <p className="mt-1 text-sm text-mist-100/75">
                          Wir melden uns persönlich für ein kurzes
                          Erstgespräch.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                            <label htmlFor="company-website">Unternehmenswebsite bestätigen</label>
                            <input
                              id="company-website"
                              type="text"
                              tabIndex={-1}
                              autoComplete="off"
                              value={form.companyWebsite}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, companyWebsite: e.target.value }))
                              }
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="mb-2 block text-sm font-medium text-mist-100/80">
                              Name *
                            </label>
                            <input
                              type="text"
                              value={form.name}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, name: e.target.value }))
                              }
                              placeholder="Dein Name"
                              className="w-full rounded-xl border border-white/15 bg-ink-700/60 px-4 py-3.5 text-white placeholder:text-mist-100/75 outline-none transition-colors focus:border-marsgreen"
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-medium text-mist-100/80">
                              E-Mail *
                            </label>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, email: e.target.value }))
                              }
                              placeholder="du@business.de"
                              className="w-full rounded-xl border border-white/15 bg-ink-700/60 px-4 py-3.5 text-white placeholder:text-mist-100/75 outline-none transition-colors focus:border-marsgreen"
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-medium text-mist-100/80">
                              Telefon *
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) =>
                                setForm((f) => ({ ...f, phone: e.target.value }))
                              }
                              placeholder="+49 ..."
                              className="w-full rounded-xl border border-white/15 bg-ink-700/60 px-4 py-3.5 text-white placeholder:text-mist-100/75 outline-none transition-colors focus:border-marsgreen"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/10 px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                    className={`flex items-center gap-2 text-sm font-medium transition-opacity ${
                      step === 0
                        ? "pointer-events-none opacity-0"
                        : "text-mist-100/80 hover:text-white"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück
                  </button>

                  {step < 2 ? (
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={goNext}
                      disabled={step === 0 ? !canContinueStep0 : !canContinueStep1}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Weiter
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  ) : (
                    <div className="flex w-full flex-col items-stretch gap-3 text-left sm:max-w-sm sm:items-end sm:text-right">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleSubmit}
                        disabled={!canSubmit || isSubmitting}
                        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      >
                        {isSubmitting ? "Anfrage wird gespeichert" : "Angebot anfordern"}
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                      {submitMessage && (
                        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-xs leading-relaxed text-red-100">
                          {submitMessage}
                        </p>
                      )}
                      {databaseDown && (
                        <div className="rounded-2xl border border-marsgreen/35 bg-marsgreen/10 px-4 py-3 text-left shadow-glow sm:text-left">
                          <p className="text-xs leading-relaxed text-mist-100/90">
                            {databaseDownMessage}
                          </p>
                          <a
                            href={`mailto:${contactEmail}`}
                            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-marsgreen hover:underline"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            {contactEmail}
                          </a>
                        </div>
                      )}
                      <p className="text-xs leading-relaxed text-mist-100/75">
                        Wir verarbeiten deine Angaben, um deine Anfrage zu
                        beantworten und ein Angebot vorzubereiten. Weitere Informationen
                        findest du in unserer{" "}
                        <a
                          href="/datenschutz"
                          className="font-semibold text-marsgreen hover:underline"
                        >
                          Datenschutzerklärung
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center px-7 py-16 text-center sm:px-10"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-marsgreen/15 text-marsgreen">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  Danke, {form.name.split(" ")[0] || "und willkommen"}!
                </h3>
                <p className="mt-3 max-w-md text-balance text-mist-100/75">
                  Wir haben deine Angaben erhalten und melden uns innerhalb
                  von 24 Stunden mit deinem individuellen Angebot.
                </p>
                {emailWarning && (
                  <p className="mt-5 max-w-md rounded-xl border border-amber-300/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
                    {emailWarning}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
