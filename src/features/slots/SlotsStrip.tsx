import { SLOTS } from "../../shared/config/content";
import type { Slot } from "../../shared/config/types";
import { SlotThumb } from "../../shared/ui/graphics";

export function SlotsStrip({ onPlay }: { onPlay: (slot: Slot) => void }) {
  return (
    <section
      data-section="slots"
      data-spy="slots"
      className="anim-up scroll-mt-24 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_30px_-18px_rgba(15,23,42,.25)] lg:hidden"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-brand text-[11px] font-bold uppercase tracking-wide text-slate-900">
          Топ слоты
        </h2>
        <span className="text-[10px] text-slate-400">Lorem ipsum</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {SLOTS.map((slot) => (
          <button
            key={slot.id}
            type="button"
            onClick={() => onPlay(slot)}
            className="group mx-auto w-full max-w-32 min-w-0 text-center"
          >
            <SlotThumb
              slot={slot}
              className="aspect-square w-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]"
            />
            <p className="mt-1.5 truncate text-[11px] font-semibold text-slate-700">{slot.name}</p>
            <p className="truncate text-[10px] text-slate-400">{slot.provider}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
