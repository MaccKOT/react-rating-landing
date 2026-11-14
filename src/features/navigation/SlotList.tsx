import { SLOTS } from "../../shared/config/content";
import type { Slot } from "../../shared/config/types";
import { SlotThumb } from "../../shared/ui/graphics";

type SlotListProps = {
  onPlay: (slot: Slot) => void;
  isHighlighted?: boolean;
};

export function SlotList({ onPlay, isHighlighted = false }: SlotListProps) {
  return (
    <div
      className={`space-y-1 rounded-xl transition-shadow duration-300 ${isHighlighted ? "ring-2 ring-brand/40" : ""}`}
    >
      {SLOTS.map((slot) => (
        <button
          key={slot.id}
          type="button"
          onClick={() => onPlay(slot)}
          className="flex w-full items-center gap-2.5 rounded-lg p-2 text-left transition hover:-translate-y-px hover:bg-slate-50"
        >
          <SlotThumb slot={slot} className="h-10 w-10 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate text-xs font-semibold text-slate-700">{slot.name}</span>
            <span className="block text-[10px] text-slate-400">{slot.provider}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
