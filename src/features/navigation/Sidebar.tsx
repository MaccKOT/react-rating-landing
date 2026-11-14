import type { SectionId, Slot } from "../../shared/config/types";
import { Logo } from "../../shared/ui/Logo";
import { NavList } from "./NavList";
import { SlotList } from "./SlotList";

type SidebarProps = {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onPlaySlot: (slot: Slot) => void;
  isSlotsHighlighted: boolean;
};

export function Sidebar({
  activeSection,
  onNavigate,
  onPlaySlot,
  isSlotsHighlighted,
}: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-slate-200/80 bg-white lg:flex xl:w-64">
      <div className="border-b border-slate-100 px-5 py-5">
        <Logo />
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <NavList activeSection={activeSection} onNavigate={onNavigate} />
        <div data-section="slots" className="mt-5">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Топ слоты
          </p>
          <div className="mt-2">
            <SlotList onPlay={onPlaySlot} isHighlighted={isSlotsHighlighted} />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-2">
          <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white">
            18+
          </span>
          <p className="text-[10px] leading-snug text-slate-400">
            Играйте ответственно. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </aside>
  );
}
