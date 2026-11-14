import { useEffect, useRef } from "react";
import { LOREM } from "../../shared/config/content";
import type { Casino } from "../../shared/config/types";
import { Button } from "../../shared/ui/Button";
import { BrandMark } from "../../shared/ui/graphics";
import { Icon } from "../../shared/ui/Icon";
import { Stars } from "../../shared/ui/Stars";

type CasinoModalProps = {
  casino: Casino;
  position: number;
  onClose: () => void;
  onPlay: (casino: Casino) => void;
};

export function CasinoModal({ casino, position, onClose, onPlay }: CasinoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    // close() before unmount restores focus to the trigger element.
    return () => dialog.close();
  }, []);

  const stats = [
    { label: "Отдача", value: casino.payout, valueClass: "text-emerald-600" },
    { label: "Кэшбэк", value: casino.cashback, valueClass: "text-slate-900" },
    { label: "Рейтинг", value: casino.rating.toFixed(1), valueClass: "text-amber-500" },
  ];

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Обзор ${casino.name}`}
      onCancel={(event) => {
        // Keep React state as the single source of truth for open/closed.
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        // Clicks on the dialog surface itself (outside the card) close the modal.
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-end justify-center bg-transparent p-0 open:flex sm:items-center sm:p-6 backdrop:bg-slate-900/50 backdrop:backdrop-blur-[2px]"
    >
      <div className="anim-pop relative flex max-h-[88vh] w-full min-w-0 flex-col overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:max-w-lg sm:rounded-2xl sm:p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <Icon name="x" />
        </button>

        <div className="flex items-center gap-3">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
            style={{ background: `${casino.color}14` }}
          >
            <BrandMark kind={casino.mark} color={casino.color} size={26} />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3
                className="font-brand truncate text-base font-bold"
                style={{ color: casino.color }}
              >
                {casino.name}
              </h3>
              <span className="shrink-0 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                #{position}
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <Stars value={casino.rating} size={12} />
              <span className="text-[11px] font-semibold text-slate-500">
                {casino.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">Бонус</p>
          <p className="mt-1 wrap-break-word text-sm font-semibold text-slate-800">
            {casino.bonus}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center"
            >
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
              <p className={`mt-0.5 text-sm font-extrabold ${stat.valueClass}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Провайдеры
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {casino.providers.map((provider) => (
              <span
                key={provider}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Выплаты
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">{casino.withdrawals}</p>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">{LOREM[1]}</p>

        <div className="mt-5 flex gap-2">
          <Button variant="ghost" className="flex-1 px-4 py-2.5" onClick={onClose}>
            Закрыть
          </Button>
          <Button className="flex-1 px-4 py-2.5" onClick={() => onPlay(casino)}>
            Играть
          </Button>
        </div>
      </div>
    </dialog>
  );
}
