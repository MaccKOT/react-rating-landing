import { useEffect } from "react";

export function useEscapeKey(onEscape: () => void, isEnabled: boolean): void {
  useEffect(() => {
    if (!isEnabled) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onEscape();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, isEnabled]);
}
