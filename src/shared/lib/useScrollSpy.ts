import { useEffect, useState } from "react";
import type { SectionId } from "../config/types";

const SPY_OFFSET_PX = 170;

type ScrollSpyState = {
  activeSection: SectionId;
  scrollProgress: number;
};

export function useScrollSpy(sectionIds: readonly SectionId[]): ScrollSpyState {
  const [state, setState] = useState<ScrollSpyState>({
    activeSection: sectionIds[0] ?? "clubs",
    scrollProgress: 0,
  });

  useEffect(() => {
    let isFrameScheduled = false;

    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? Math.min(100, (scrollY / maxScroll) * 100) : 0;

      let activeSection: SectionId = sectionIds[0] ?? "clubs";
      for (const id of sectionIds) {
        // Sections may be duplicated for desktop/mobile; only the visible one counts.
        const element = [...document.querySelectorAll(`[data-spy="${id}"]`)].find(
          (node) => node.getClientRects().length > 0,
        );
        if (element && element.getBoundingClientRect().top <= SPY_OFFSET_PX) {
          activeSection = id;
        }
      }
      setState({ activeSection, scrollProgress });
    };

    const onScroll = () => {
      if (isFrameScheduled) return;
      isFrameScheduled = true;
      requestAnimationFrame(() => {
        isFrameScheduled = false;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return state;
}
