import type { ReactNode } from "react";

const ICON_PATHS = {
  x: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrowDown: <path d="M12 4v16m0 0 6-6m-6 6-6-6" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01M12 11v5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICON_PATHS;

type IconProps = { name: IconName; className?: string };

export function Icon({ name, className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
