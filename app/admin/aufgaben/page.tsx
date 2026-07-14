import { createClient } from "@/lib/supabase/server";
import { createTask, toggleTask } from "../actions";

export const dynamic = "force-dynamic";

const fmtDate = (s: string | null) =>
  s ? new Date(s).toLocaleDateString("de-DE", { day: "2-digit", month: "short" }) : null;

export default async function AufgabenPage() {
  const supabase = await createClient();
  const { data: tasks } = await supabase
    .from("crm_tasks")
    .select("*")
    .order("done", { ascending: true })
    .order("created_at", { ascending: false });

  const inputCls =
    "h-10 rounded-lg border border-line-hard bg-ink/60 px-3 text-[14px] text-paper placeholder:text-fog-dim focus:border-signal focus:outline-none";

  return (
    <div>
      <h1 className="mb-6 font-display text-[26px] font-medium">Aufgaben</h1>

      <form action={createTask} className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-line bg-surface/40 p-3">
        <input name="title" placeholder="Neue Aufgabe" required className={`${inputCls} flex-1 min-w-[180px]`} />
        <input name="due_date" type="date" className={`${inputCls} min-w-[150px]`} />
        <button className="btn btn-primary !h-10 !px-5">Hinzufügen</button>
      </form>

      {(tasks?.length ?? 0) === 0 && (
        <p className="rounded-2xl border border-line bg-surface/40 p-5 text-[14px] text-fog">Keine Aufgaben.</p>
      )}

      <div className="grid gap-2">
        {tasks?.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface/40 px-4 py-3"
          >
            <form action={toggleTask}>
              <input type="hidden" name="id" value={t.id} />
              <input type="hidden" name="done" value={(!t.done).toString()} />
              <button
                type="submit"
                aria-label={t.done ? "Als offen markieren" : "Als erledigt markieren"}
                className={`grid h-6 w-6 place-items-center rounded-md border transition-colors ${
                  t.done ? "border-signal bg-signal text-[#04120a]" : "border-line-hard hover:border-signal"
                }`}
              >
                {t.done && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </form>
            <span className={`flex-1 text-[15px] ${t.done ? "text-fog-dim line-through" : "text-paper"}`}>
              {t.title}
            </span>
            {fmtDate(t.due_date) && <span className="text-[12px] text-fog-dim">{fmtDate(t.due_date)}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
