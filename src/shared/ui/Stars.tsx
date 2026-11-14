type StarsProps = { value?: number; size?: number; gap?: number; className?: string };

export function Stars({ value = 5, size = 13, gap = 2, className = "" }: StarsProps) {
  // Guard against out-of-range data: negative or >5 ratings must not break layout.
  const clampedValue = Math.min(5, Math.max(0, value));
  const totalWidth = size * 5 + gap * 4;

  const renderRow = (colorClass: string) => (
    <div className={`flex ${colorClass}`} style={{ width: totalWidth, gap }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div
      className={`relative ${className}`}
      style={{ width: totalWidth, height: size }}
      role="img"
      aria-label={`Рейтинг ${clampedValue} из 5`}
    >
      {renderRow("text-slate-300")}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: (clampedValue / 5) * totalWidth }}
      >
        {renderRow("text-amber-400")}
      </div>
    </div>
  );
}
