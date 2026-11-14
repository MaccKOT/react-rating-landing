import { Flame } from "./graphics";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-bg-linear-to-br from-brand to-brand-dark shadow-[0_6px_14px_-6px_rgba(39,66,232,.6)]">
        <Flame />
      </span>
      <span className="font-brand text-[12px] font-bold tracking-wide text-slate-900">
        TOP <span className="text-brand">CASINO</span>
      </span>
    </div>
  );
}
