import type { Casino } from "../../shared/config/types";
import { Button } from "../../shared/ui/Button";
import { LogoTile } from "../../shared/ui/LogoTile";
import { Rank } from "../../shared/ui/Rank";
import { Stars } from "../../shared/ui/Stars";

type RatingTableProps = {
  casinos: readonly Casino[];
  onReview: (casino: Casino) => void;
  onPlay: (casino: Casino) => void;
};

export function RatingTable({ casinos, onReview, onPlay }: RatingTableProps) {
  return (
    <div className="hidden overflow-x-auto xl:block">
      <table className="w-full min-w-245 border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 text-[10px] uppercase tracking-[0.12em] text-slate-400">
            <th className="px-3 py-2.5 text-center font-semibold">Место</th>
            <th className="px-3 py-2.5 font-semibold">Казино</th>
            <th className="px-3 py-2.5 font-semibold">Бонус</th>
            <th className="px-3 py-2.5 font-semibold">Отдача</th>
            <th className="px-3 py-2.5 font-semibold">Софт</th>
            <th className="px-3 py-2.5 font-semibold">Выплаты</th>
            <th className="px-3 py-2.5 font-semibold">Кэшбэк</th>
            <th className="px-3 py-2.5 font-semibold">Обзор</th>
            <th className="px-3 py-2.5 text-center font-semibold">Сайт</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {casinos.map((casino, index) => (
            <tr
              key={casino.id}
              className="anim-up align-middle transition-colors hover:bg-[#f6f8ff]"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <td className="px-3 py-4">
                <div className="flex justify-center">
                  <Rank position={index + 1} />
                </div>
              </td>
              <td className="w-34 px-3 py-4">
                <LogoTile casino={casino} />
              </td>
              <td className="max-w-47.5 px-3 py-4">
                <p className="text-[11px] leading-snug text-slate-600">{casino.bonus}</p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-emerald-600">
                {casino.payout}
              </td>
              <td className="max-w-37.5 px-3 py-4 text-[10.5px] leading-relaxed text-slate-500">
                {casino.providers.join(", ")}
              </td>
              <td className="max-w-42.5 px-3 py-4 text-[10.5px] leading-snug text-slate-500">
                {casino.withdrawals}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-slate-800">
                {casino.cashback}
              </td>
              <td className="px-3 py-4">
                <Button
                  variant="ghost"
                  onClick={() => onReview(casino)}
                  className="px-3.5 py-1.5 text-[11px]"
                >
                  Обзор
                </Button>
              </td>
              <td className="px-3 py-4">
                <div className="flex flex-col items-center gap-1.5">
                  <Button
                    onClick={() => onPlay(casino)}
                    className="w-full max-w-24 px-4 py-1.5 text-[11px]"
                  >
                    Играть
                  </Button>
                  <Stars value={casino.rating} size={11} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
