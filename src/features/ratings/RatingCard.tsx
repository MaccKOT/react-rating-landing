import type { Casino } from "../../shared/config/types";
import { Button } from "../../shared/ui/Button";
import { LogoTile } from "../../shared/ui/LogoTile";
import { Rank } from "../../shared/ui/Rank";
import { Stars } from "../../shared/ui/Stars";

type RatingCardProps = {
  casino: Casino;
  position: number;
  onReview: (casino: Casino) => void;
  onPlay: (casino: Casino) => void;
  animationDelayMs: number;
};

// Compact mobile card: the logo opens the review, so no separate review button.
export function RatingCard({
  casino,
  position,
  onReview,
  onPlay,
  animationDelayMs,
}: RatingCardProps) {
  return (
    <article
      className="anim-up min-w-0 rounded-md border border-slate-200 bg-white p-2.5 shadow-[0_2px_10px_-4px_rgba(15,23,42,.08)]"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <div className="flex items-start gap-2.5">
        <div className="flex w-10 shrink-0 flex-col items-center gap-1.5 pt-0.5">
          <Rank position={position} small />
          <Stars value={casino.rating} size={7} gap={1} />
        </div>
        <button
          type="button"
          onClick={() => onReview(casino)}
          className="group w-20 shrink-0 text-left sm:w-24"
          aria-label={`Обзор ${casino.name}`}
          title={`Обзор ${casino.name}`}
        >
          <LogoTile casino={casino} />
        </button>
        <div className="min-w-0 flex-1">
          <p className="wrap-break-word text-[11px] leading-snug text-slate-600">{casino.bonus}</p>
          <Button
            onClick={() => onPlay(casino)}
            className="mt-2 w-full max-w-36 px-2 py-1.5 text-[11px]"
          >
            Играть
          </Button>
        </div>
      </div>
    </article>
  );
}
