import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Brotkrumen" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px]  tracking-[0.02em] text-fog-dim">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-fog">{item.name}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-signal">
                  {item.name}
                </Link>
              )}
              {!last && <span aria-hidden className="text-fog-dim">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
