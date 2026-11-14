import type { Casino } from "../config/types";
import { BrandMark } from "./graphics";

type LogoTileProps = { casino: Casino; large?: boolean };

export function LogoTile({ casino, large = false }: LogoTileProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-200 group-hover:border-brand/50 group-hover:shadow-[0_10px_24px_-12px_rgba(39,66,232,.45)]">
      <div
        className={`flex items-center justify-center gap-1.5 px-2 ${large ? "h-16 sm:h-20" : "h-12"}`}
      >
        <BrandMark kind={casino.mark} color={casino.color} size={large ? 26 : 20} />
        <span
          className={`truncate font-extrabold ${large ? "font-brand text-[13px] sm:text-[15px]" : "text-[11px]"}`}
          style={{ color: casino.color }}
        >
          {casino.name}
        </span>
      </div>
      <div
        className={`truncate bg-slate-100 text-center text-slate-500 ${large ? "py-1.5 text-[11px]" : "py-1 text-[10px]"}`}
      >
        {casino.name}
      </div>
    </div>
  );
}
