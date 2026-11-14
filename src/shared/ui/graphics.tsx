import { useId } from "react";
import type { ReactNode } from "react";
import type { BrandMarkKind, Slot } from "../config/types";

export function Flame({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2C9 6 6 8.6 6 13a6 6 0 0 0 12 0c0-2.5-1.2-4.3-2.5-6-.6 1.3-1.4 2.1-2.5 2.4C13.4 7 13 4.5 12 2Z"
        fill="#fff"
      />
      <path
        d="M12 21a3.4 3.4 0 0 1-3.4-3.4c0-1.9 1.6-2.7 3.4-4.5 1.8 1.8 3.4 2.6 3.4 4.5A3.4 3.4 0 0 1 12 21Z"
        fill="#9db4ff"
      />
    </svg>
  );
}

type BrandMarkProps = { kind: BrandMarkKind; color: string; size?: number };

export function BrandMark({ kind, color, size = 22 }: BrandMarkProps) {
  const shapes: Record<BrandMarkKind, ReactNode> = {
    bolt: <path d="M13 2 4.5 13.5h5L9.5 22 19 10.5h-5.5L13 2Z" />,
    chip: (
      <>
        <circle cx="12" cy="12" r="10" fill={color} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="10.9"
            y="1.4"
            width="2.2"
            height="4.2"
            rx="1"
            fill="#fff"
            opacity=".85"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
        <circle cx="12" cy="12" r="5.2" fill="#fff" />
        <circle cx="12" cy="12" r="2.4" fill={color} />
      </>
    ),
    spade: (
      <path d="M12 2C8.3 6.6 4 9.2 4 13a4.2 4.2 0 0 0 6.9 3.2c-.3 1.9-1 3.2-2.2 4.3h6.6c-1.2-1.1-1.9-2.4-2.2-4.3A4.2 4.2 0 0 0 20 13c0-3.8-4.3-6.4-8-11Z" />
    ),
    diamond: (
      <>
        <path d="M6.5 3h11L22 9l-10 12L2 9l4.5-6Z" />
        <path
          d="M2 9h20M9.5 9 12 21 14.5 9M6.5 3 9.5 9l2.5-6 2.5 6 3-6"
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          opacity=".6"
        />
      </>
    ),
    wave: (
      <>
        <path
          d="M2 10c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2.2 5-1"
          stroke={color}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M2 16c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2.2 5-1"
          stroke={color}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
          opacity=".45"
        />
      </>
    ),
    clover: (
      <>
        <circle cx="12" cy="7.5" r="4" />
        <circle cx="7.5" cy="13" r="4" />
        <circle cx="16.5" cy="13" r="4" />
        <path d="M11 14h2c0 3 .8 5 2.5 6.5h-3.2C11.2 18.5 11 16.5 11 14Z" />
      </>
    ),
    crown: (
      <>
        <path d="M3 8.5 7.5 12 12 4.5 16.5 12 21 8.5 19.2 19H4.8L3 8.5Z" />
        <rect x="4.8" y="19" width="14.4" height="2.2" rx="1" />
      </>
    ),
    seven: (
      <text
        x="12"
        y="18.5"
        textAnchor="middle"
        fontSize="17"
        fontWeight="900"
        fontStyle="italic"
        fill={color}
        fontFamily="inherit"
      >
        7
      </text>
    ),
    star: (
      <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
    ),
    dice: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill={color} />
        {[
          [8, 8],
          [16, 8],
          [12, 12],
          [8, 16],
          [16, 16],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.9" fill="#fff" />
        ))}
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className="shrink-0"
      aria-hidden="true"
    >
      {shapes[kind]}
    </svg>
  );
}

type SlotThumbProps = { slot: Slot; className?: string };

export function SlotThumb({ slot, className = "" }: SlotThumbProps) {
  // useId may contain characters that are invalid inside url(#...) references.
  const gradientId = `slot-gradient-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={slot.gradient[0]} />
          <stop offset="1" stopColor={slot.gradient[1]} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill={`url(#${gradientId})`} />
      {slot.art === "fruits" && (
        <g>
          <path
            d="M24 10c-3 4-7 6-9 10M24 10c2 5 5 8 7 12"
            stroke="#166534"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M24 10c1-3 4-5 7-5-1 3-3 5-7 5Z" fill="#22c55e" />
          <circle cx="15" cy="26" r="7.5" fill="#dc2626" />
          <circle cx="31" cy="30" r="8" fill="#b91c1c" />
          <circle cx="12.5" cy="23.5" r="2.2" fill="#fca5a5" />
          <circle cx="28.5" cy="27.5" r="2.4" fill="#f87171" />
          <text
            x="24"
            y="44.5"
            textAnchor="middle"
            fontSize="7.5"
            fontWeight="800"
            fill="#fff"
            opacity=".9"
          >
            100
          </text>
        </g>
      )}
      {slot.art === "seven" && (
        <g>
          <text
            x="24"
            y="34"
            textAnchor="middle"
            fontSize="30"
            fontWeight="900"
            fontStyle="italic"
            fill="#fde047"
            stroke="#a16207"
            strokeWidth="1"
          >
            7
          </text>
          <path
            d="M8 10l1.2 3 3 1.2-3 1.2L8 18.4l-1.2-3-3-1.2 3-1.2L8 10Z"
            fill="#fff"
            opacity=".9"
          />
          <circle cx="40" cy="12" r="1.6" fill="#fff" opacity=".8" />
          <circle cx="38" cy="38" r="1.2" fill="#fff" opacity=".6" />
        </g>
      )}
      {slot.art === "cocktail" && (
        <g>
          <path d="M10 12h28L24 28 10 12Z" fill="#fff" opacity=".92" />
          <path d="M14 15h20l-10 11-10-11Z" fill="#fb923c" />
          <path d="M24 28v10M17 40h14" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M30 6l-6 10" stroke="#fde047" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="31" cy="7" r="3" fill="#ef4444" />
        </g>
      )}
    </svg>
  );
}
