import { useEffect, useRef } from "react";
import type { SectionId, Slot } from "../../shared/config/types";
import { Icon } from "../../shared/ui/Icon";
import { Logo } from "../../shared/ui/Logo";
import { NavList } from "./NavList";
import { SlotList } from "./SlotList";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  onPlaySlot: (slot: Slot) => void;
};

export function Drawer({ isOpen, onClose, activeSection, onNavigate, onPlaySlot }: DrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-900/45 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Меню навигации"
        className={`absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          visibility: isOpen ? "visible" : "hidden",
          transitionProperty: "transform, visibility",
        }}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <Icon name="x" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          <NavList activeSection={activeSection} onNavigate={onNavigate} />
          <p className="mt-5 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Топ слоты
          </p>
          <div className="mt-2">
            <SlotList
              onPlay={(slot) => {
                onPlaySlot(slot);
                onClose();
              }}
            />
          </div>
        </div>
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-2">
            <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white">
              18+
            </span>
            <p className="text-[10px] leading-snug text-slate-400">Играйте ответственно.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
