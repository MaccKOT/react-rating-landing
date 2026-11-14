import { NAV } from "../../shared/config/content";
import type { SectionId } from "../../shared/config/types";

type NavListProps = {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
};

export function NavList({ activeSection, onNavigate }: NavListProps) {
  return (
    <nav className="space-y-1" aria-label="Основная навигация">
      {NAV.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? "true" : undefined}
            className={`group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${isActive ? "bg-indigo-50/80 font-semibold text-brand" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${isActive ? "bg-brand" : "bg-slate-300 group-hover:bg-slate-400"}`}
            />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
