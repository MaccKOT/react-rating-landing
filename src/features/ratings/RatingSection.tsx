import { CASINOS } from "../../shared/config/content";
import type { Casino } from "../../shared/config/types";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { RatingArticle } from "./RatingArticle";
import { RatingCard } from "./RatingCard";
import { RatingTable } from "./RatingTable";

type RatingSectionProps = {
  casinos: readonly Casino[];
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onReview: (casino: Casino) => void;
  onPlay: (casino: Casino) => void;
};

export function RatingSection({
  casinos,
  isExpanded,
  onToggleExpanded,
  onReview,
  onPlay,
}: RatingSectionProps) {
  return (
    <section
      data-section="rating"
      data-spy="rating"
      className="anim-up -mx-2 scroll-mt-24 rounded-none border-x-0 border-y border-slate-200/80 bg-white p-2.5 shadow-[0_8px_30px_-18px_rgba(15,23,42,.25)] sm:mx-0 sm:rounded-2xl sm:border-x sm:p-6"
      style={{ animationDelay: "80ms" }}
    >
      <div className="px-1 sm:px-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h2 className="max-w-2xl text-[13px] font-extrabold uppercase leading-snug tracking-wide text-slate-900 sm:text-base">
            Честный рейтинг казино 2026: список лучших онлайн казино и топ 10
          </h2>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600 ring-1 ring-emerald-100">
            <Icon name="shield" className="h-3.5 w-3.5" /> Проверено экспертами
          </div>
        </div>
        <p className="mt-1.5 text-[11px] text-slate-400">
          Показано {casinos.length} из {CASINOS.length} клубов
        </p>
      </div>

      <div id="rating-list" className="mt-3 sm:mt-4">
        <RatingTable casinos={casinos} onReview={onReview} onPlay={onPlay} />
        <div className="grid min-w-0 gap-2 md:grid-cols-2 xl:hidden">
          {casinos.map((casino, index) => (
            <RatingCard
              key={casino.id}
              casino={casino}
              position={index + 1}
              onReview={onReview}
              onPlay={onPlay}
              animationDelayMs={index * 50}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center sm:mt-4">
        <Button
          onClick={onToggleExpanded}
          aria-expanded={isExpanded}
          aria-controls="rating-list"
          className="w-full px-6 py-2.5 sm:w-auto"
        >
          {isExpanded ? "Свернуть таблицу" : "Развернуть таблицу"}
          <Icon
            name="chevron"
            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </Button>
      </div>

      <div className="px-1 sm:px-0">
        <RatingArticle />
      </div>
    </section>
  );
}
