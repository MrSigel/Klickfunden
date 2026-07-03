type AdminPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function AdminPageHeader({ eyebrow, title, description }: AdminPageHeaderProps) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marsgreen-300">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist-100/80">
        {description}
      </p>
    </>
  );
}
