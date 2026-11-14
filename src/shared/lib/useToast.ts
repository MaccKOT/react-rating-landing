import { useCallback, useEffect, useState } from "react";

export type ToastMessage = { id: number; text: string };

export function useToast(timeoutMs = 2600) {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), timeoutMs);
    return () => clearTimeout(timer);
  }, [toast, timeoutMs]);

  const showToast = useCallback((text: string) => {
    // New id remounts the toast so the enter animation replays.
    setToast({ id: Date.now(), text });
  }, []);

  return { toast, showToast };
}
