import { CASINOS } from "../../shared/config/content";
import type { Casino } from "../../shared/config/types";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { LogoTile } from "../../shared/ui/LogoTile";

type ClubsSectionProps = {
  onShowRating: () => void;
  onPickCasino: (casino: Casino) => void;
};

export function ClubsSection({ onShowRating, onPickCasino }: ClubsSectionProps) {
  return (
    <section
      data-section="clubs"
      data-spy="clubs"
      className="anim-up scroll-mt-24 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_30px_-18px_rgba(15,23,42,.25)] sm:p-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <div className="text-center lg:w-52 lg:shrink-0 lg:text-left">
          <h1 className="font-brand text-[12px] font-bold uppercase leading-snug tracking-wide text-slate-900">
            Лучшие игровые клубы
          </h1>
          <Button
            onClick={onShowRating}
            className="mx-auto mt-4 w-full max-w-60 px-5 py-2.5 lg:mx-0 lg:w-auto"
          >
            Показать рейтинг казино <Icon name="arrowDown" className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          {CASINOS.slice(0, 4).map((casino, index) => (
            <button
              key={casino.id}
              type="button"
              onClick={() => onPickCasino(casino)}
              className="group anim-up min-w-0 text-left transition-transform duration-200 hover:-translate-y-1"
              style={{ animationDelay: `${120 + index * 70}ms` }}
              aria-label={`Обзор ${casino.name}`}
            >
              <LogoTile casino={casino} large />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
