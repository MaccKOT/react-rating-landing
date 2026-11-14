import { Logo } from "../../shared/ui/Logo";

type MobileHeaderProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

export function MobileHeader({ isMenuOpen, onToggleMenu }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md lg:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <Logo />
        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-lg border border-slate-200 bg-white transition hover:border-slate-300"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-slate-800 transition-transform duration-300 ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-slate-800 transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-slate-800 transition-transform duration-300 ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}
