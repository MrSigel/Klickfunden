"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const FROM = 2.9;
const TO = 4.8;

// A rising, slightly organic climb — real growth is never a straight line.
const DATA = [2.9, 3.0, 2.8, 3.3, 3.6, 3.5, 4.0, 4.3, 4.2, 4.6, 4.8];
const W = 320;
const H = 120;
const PAD = 8;
const MIN_V = 2.6;
const MAX_V = 5.0;

const xAt = (i: number) => PAD + (i / (DATA.length - 1)) * (W - PAD * 2);
const yAt = (v: number) => H - PAD - ((v - MIN_V) / (MAX_V - MIN_V)) * (H - PAD * 2);

const fmt = (n: number) =>
  n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function chartPaths(progress: number) {
  const total = DATA.length;
  const shown = Math.max(1, Math.floor(progress * (total - 1)) + 1);
  const frac = progress * (total - 1) - (shown - 1);

  const pts: [number, number][] = [];
  for (let i = 0; i < shown; i++) pts.push([xAt(i), yAt(DATA[i])]);
  if (shown < total && frac > 0) {
    const x = xAt(shown - 1) + (xAt(shown) - xAt(shown - 1)) * frac;
    const y = yAt(DATA[shown - 1]) + (yAt(DATA[shown]) - yAt(DATA[shown - 1])) * frac;
    pts.push([x, y]);
  }

  const line = pts
    .map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + " " + p[1].toFixed(1))
    .join(" ");
  const last = pts[pts.length - 1];
  const area = `${line} L ${last[0].toFixed(1)} ${H - PAD} L ${PAD} ${H - PAD} Z`;
  return { line, area, dot: last };
}

export function SignatureRating() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(FROM);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setValue(TO);
      return;
    }

    const duration = 2200;
    const start = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(FROM + (TO - FROM) * easeOut(t));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView]);

  const progress = (value - FROM) / (TO - FROM);
  const { line, area, dot } = chartPaths(progress);

  return (
    <aside
      ref={ref}
      className="signature w-full max-w-[460px]"
      aria-label={`Durchschnittliche Kundenbewertung: ${fmt(value)} von 5 Sternen`}
    >
      <div className="mb-[18px] flex items-center justify-between">
        <span className="font-mono text-[11.5px]  tracking-[0.02em] text-fog">
          Ø Bewertung nach 90 Tagen
        </span>
        <span className="rounded-full border border-signal/25 bg-signal/10 px-[10px] py-1 font-mono text-xs text-signal">
          +1,9 ★
        </span>
      </div>

      <div className="mb-[22px] flex items-baseline gap-4">
        <span className="font-display text-[clamp(56px,8vw,76px)] font-semibold leading-none tracking-[-0.01em] tabular-nums">
          {fmt(value)}
        </span>
        <div className="flex gap-[3px] pb-2 text-xl" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => {
            const cls =
              value >= i + 1 ? "star on" : value >= i + 0.5 ? "star half" : "star";
            return <span key={i} className={cls}>★</span>;
          })}
        </div>
      </div>

      <svg
        className="mb-[14px] h-[110px] w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#fillGrad)" />
        <path
          d={line}
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={dot[0]} cy={dot[1]} r="4" fill="var(--color-signal)" />
      </svg>

      <div className="flex items-center justify-between text-[11px] text-fog-dim">
        <span className="font-mono">Google · Trustpilot · Jameda</span>
        <span className="font-mono">von ★ 2,9</span>
      </div>
    </aside>
  );
}
