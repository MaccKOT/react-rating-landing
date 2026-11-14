import { Icon } from "./Icon";

export function Toast({ text }: { text: string }) {
  return (
    <div
      role="status"
      className="anim-toast fixed bottom-5 left-1/2 z-70 flex max-w-[calc(100vw-24px)] -translate-x-1/2 items-center gap-2 rounded-full bg-slate-900/95 px-4 py-2.5 text-xs font-medium text-white shadow-2xl backdrop-blur"
    >
      <Icon name="info" className="h-4 w-4 shrink-0 text-amber-400" />
      <span className="truncate">{text}</span>
    </div>
  );
}
