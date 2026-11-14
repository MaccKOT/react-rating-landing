import type { ComponentProps } from "react";

const BASE_CLASS =
  "inline-flex min-w-0 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-[.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50";

const VARIANT_CLASS = {
  primary:
    "bg-brand text-white shadow-[0_8px_18px_-8px_rgba(39,66,232,.7)] hover:bg-brand-dark hover:-translate-y-px",
  ghost:
    "border border-slate-300 bg-white text-slate-600 hover:border-brand hover:text-brand hover:bg-indigo-50/40",
} as const;

type ButtonProps = ComponentProps<"button"> & {
  variant?: keyof typeof VARIANT_CLASS;
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  // Default type="button" prevents accidental form submits.
  return (
    <button
      type={type}
      className={`${BASE_CLASS} ${VARIANT_CLASS[variant]} ${className}`}
      {...rest}
    />
  );
}
