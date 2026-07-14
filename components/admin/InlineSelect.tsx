"use client";

export function InlineSelect({
  action,
  id,
  name,
  value,
  options,
}: {
  action: (formData: FormData) => void | Promise<void>;
  id: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
}) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <select
        name={name}
        defaultValue={value}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="h-9 rounded-lg border border-line-hard bg-ink/60 px-2.5 text-[13px] text-paper focus:border-signal focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </form>
  );
}
