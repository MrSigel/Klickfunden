"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Animates a number from 0 to `value` once it scrolls into view. */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const start = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setN(value * easeOut(t));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, value, duration]);

  const text =
    prefix +
    n.toLocaleString("de-DE", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix;

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
