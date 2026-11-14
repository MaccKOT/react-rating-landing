type RankProps = { position: number; small?: boolean };

export function Rank({ position, small = false }: RankProps) {
  const medalClass =
    position === 1
      ? "bg-amber-50 text-amber-600 ring-amber-200"
      : position === 2
        ? "bg-slate-100 text-slate-500 ring-slate-200"
        : position === 3
          ? "bg-orange-50 text-orange-600 ring-orange-200"
          : "text-slate-800 ring-transparent";

  return (
    <div
      className={`font-brand grid shrink-0 place-items-center rounded-full font-bold ring-1 ${small ? "h-8 w-8 text-base" : "h-10 w-10 text-lg"} ${medalClass}`}
    >
      {position}
    </div>
  );
}
