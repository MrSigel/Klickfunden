"use client";

import { useMemo, useState } from "react";
import { MODULES, MODULE_GROUPS, fmtEur } from "@/lib/pricing";
import { WhatsAppCta } from "./WhatsAppCta";

export function PriceCalculator() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(["bewertungen", "localseo"])
  );
  const [locations, setLocations] = useState(1);
  const [adBudget, setAdBudget] = useState(500);

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const calc = useMemo(() => {
    const chosen = MODULES.filter((m) => selected.has(m.id));
    const anyAd = chosen.some((m) => m.hasAdBudget);
    const factor = (m: (typeof MODULES)[number]) => (m.perLocation ? locations : 1);

    const setupTotal = chosen.reduce((s, m) => s + m.setup * factor(m), 0);
    const mgmtMonthly = chosen.reduce((s, m) => s + m.monthly * factor(m), 0);
    const adPart = anyAd ? adBudget : 0;
    const monthlyTotal = mgmtMonthly + adPart;
    const firstYear = setupTotal + monthlyTotal * 12;

    return { chosen, anyAd, setupTotal, mgmtMonthly, adPart, monthlyTotal, firstYear };
  }, [selected, locations, adBudget]);

  const message = useMemo(() => {
    const names = calc.chosen.map((m) => m.name).join(", ") || "—";
    const lines = [
      "Hallo Enrico, ich habe den Preisrechner genutzt.",
      `Ausgewählt: ${names}`,
      `Standorte: ${locations}`,
      calc.anyAd ? `Werbebudget: ${fmtEur(adBudget)}/Monat` : null,
      `Geschätzt: einmalig ${fmtEur(calc.setupTotal)}, monatlich ${fmtEur(
        calc.monthlyTotal
      )}.`,
      "Bitte meldet euch für ein genaues Angebot.",
    ].filter(Boolean);
    return lines.join("\n");
  }, [calc, locations, adBudget]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start">
      {/* Controls */}
      <div className="rounded-3xl border border-line bg-surface/60 p-[clamp(20px,3vw,32px)]">
        {MODULE_GROUPS.map((group) => (
          <div key={group} className="mb-7 last:mb-0">
            <h3 className="mb-3 font-mono text-[11px]  tracking-[0.02em] text-fog-dim">
              {group}
            </h3>
            <div className="grid gap-2">
              {MODULES.filter((m) => m.group === group).map((m) => {
                const on = selected.has(m.id);
                const price =
                  m.monthly > 0
                    ? `${fmtEur(m.monthly)}/Mon.`
                    : `${m.note ?? "einmalig"} ${fmtEur(m.setup)}`;
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    onClick={() => toggle(m.id)}
                    className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                      on
                        ? "border-signal/50 bg-signal/10"
                        : "border-line hover:border-line-hard"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-[6px] border transition-colors ${
                          on ? "border-signal bg-signal text-[#04120a]" : "border-line-hard"
                        }`}
                      >
                        {on && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <span className="text-[15px] text-paper">
                        {m.name}
                        {m.perLocation && (
                          <span className="ml-2 font-mono text-[10px]  tracking-[0.02em] text-fog-dim">
                            pro Standort
                          </span>
                        )}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[12px] text-fog">{price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Locations */}
        <div className="mb-7 flex items-center justify-between border-t border-line pt-6">
          <div>
            <p className="text-[15px] text-paper">Standorte</p>
            <p className="text-[13px] text-fog">Skaliert lokale Module</p>
          </div>
          <div className="flex items-center gap-3">
            <Stepper value={locations} onChange={setLocations} min={1} max={10} />
          </div>
        </div>

        {/* Ad budget */}
        <div className="border-t border-line pt-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[15px] text-paper">Monatliches Werbebudget</p>
            <span className={`font-mono text-[14px] ${calc.anyAd ? "text-signal" : "text-fog-dim"}`}>
              {calc.anyAd ? `${fmtEur(adBudget)}/Mon.` : "—"}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={5000}
            step={100}
            value={adBudget}
            disabled={!calc.anyAd}
            onChange={(e) => setAdBudget(Number(e.target.value))}
            className="w-full accent-[var(--color-signal)] disabled:opacity-40"
            aria-label="Monatliches Werbebudget"
          />
          <p className="mt-2 text-[13px] text-fog">
            {calc.anyAd
              ? "Wird direkt an Google/Meta/TikTok gezahlt — zusätzlich zur Betreuung."
              : "Wähle einen Ads-Kanal, um ein Werbebudget einzuplanen."}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="lg:sticky lg:top-24">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-[linear-gradient(160deg,var(--color-surface)_0%,var(--color-ink-2)_100%)] p-[clamp(22px,3vw,34px)]">
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl border border-signal/15" />
          <p className="eyebrow mb-6">Deine Schätzung</p>

          <Row label="Einmalig (Setup)" value={fmtEur(calc.setupTotal)} />
          <Row label="Betreuung / Monat" value={fmtEur(calc.mgmtMonthly)} />
          {calc.anyAd && <Row label="Werbebudget / Monat" value={fmtEur(calc.adPart)} muted />}

          <div className="my-5 border-t border-line" />

          <div className="flex items-end justify-between">
            <span className="text-[15px] text-fog">Monatlich gesamt</span>
            <span className="font-display text-[clamp(30px,5vw,42px)] font-semibold leading-none tracking-[-0.008em] text-signal tabular-nums">
              {fmtEur(calc.monthlyTotal)}
            </span>
          </div>
          <p className="mt-3 text-[13px] text-fog">
            Hochrechnung 1. Jahr ca. <strong className="text-paper">{fmtEur(calc.firstYear)}</strong> (Setup + 12 Monate).
          </p>

          <div className="mt-7">
            <WhatsAppCta
              label="Angebot per WhatsApp anfragen"
              message={message}
              className="w-full"
            />
          </div>

          <p className="mt-4 text-[12px] leading-relaxed text-fog-dim">
            Unverbindliche Schätzung. Preise netto, keine USt. (Kleinunternehmer §&nbsp;19 UStG).
            Dein individuelles Angebot kann je nach Umfang abweichen.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className={`text-[15px] ${muted ? "text-fog-dim" : "text-fog"}`}>{label}</span>
      <span className="font-mono text-[15px] text-paper tabular-nums">{value}</span>
    </div>
  );
}

function Stepper({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  const btn =
    "grid h-9 w-9 place-items-center rounded-lg border border-line-hard text-paper transition-colors hover:border-signal hover:text-signal disabled:opacity-30";
  return (
    <div className="flex items-center gap-2">
      <button type="button" className={btn} onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label="Weniger Standorte">
        −
      </button>
      <span className="w-6 text-center font-mono text-[16px] text-paper tabular-nums">{value}</span>
      <button type="button" className={btn} onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label="Mehr Standorte">
        +
      </button>
    </div>
  );
}
