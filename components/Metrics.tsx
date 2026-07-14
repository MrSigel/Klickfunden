"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Metric = {
  value: number;
  decimals: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const METRICS: Metric[] = [
  { value: 140, decimals: 0, suffix: "+", label: "Betriebe betreut" },
  { value: 1.6, decimals: 1, prefix: "+", suffix: " ★", label: "Sterne im Schnitt" },
  { value: 3.4, decimals: 1, suffix: "×", label: "mehr Anfragen" },
  { value: 38, decimals: 0, prefix: "−", suffix: " %", label: "Cost-per-Lead" },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function CountUp({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setN(metric.value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setN(metric.value * easeOut(t));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, metric.value]);

  const text =
    (metric.prefix ?? "") +
    n.toLocaleString("de-DE", {
      minimumFractionDigits: metric.decimals,
      maximumFractionDigits: metric.decimals,
    }) +
    (metric.suffix ?? "");

  return (
    <span
      ref={ref}
      className="font-display text-[clamp(36px,4.5vw,54px)] font-semibold leading-none tracking-[-0.008em] tabular-nums"
    >
      {text}
    </span>
  );
}

export function Metrics() {
  return (
    <section
      aria-label="Kennzahlen"
      className="mx-auto grid max-w-[var(--maxw)] grid-cols-2 gap-px border-y border-line bg-line-soft md:grid-cols-4"
    >
      {METRICS.map((m) => (
        <div key={m.label} className="flex flex-col gap-2 bg-ink px-[22px] py-[34px]">
          <CountUp metric={m} />
          <span className="font-mono text-xs  tracking-[0.02em] text-fog">
            {m.label}
          </span>
        </div>
      ))}
    </section>
  );
}
