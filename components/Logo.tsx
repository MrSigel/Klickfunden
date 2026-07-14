import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[10px] font-display font-semibold tracking-[-0.005em] ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <rect x="13" y="38" width="9" height="13" rx="3" fill="var(--color-signal)" />
        <rect x="27.5" y="30" width="9" height="21" rx="3" fill="var(--color-signal)" />
        <rect x="42" y="20" width="9" height="31" rx="3" fill="var(--color-signal)" />
        <path
          d="M40 18 L52 18 L52 30"
          stroke="var(--color-signal)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-[19px] leading-none">
        Klick<span className="text-signal">funden</span>
      </span>
      <span className="sr-only">{site.brand}</span>
    </span>
  );
}
