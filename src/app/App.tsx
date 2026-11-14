import { useCallback, useEffect, useRef, useState } from "react";
import { CasinoModal } from "../features/casino-review/CasinoModal";
import { ClubsSection } from "../features/clubs/ClubsSection";
import { Drawer } from "../features/navigation/Drawer";
import { MobileHeader } from "../features/navigation/MobileHeader";
import { Sidebar } from "../features/navigation/Sidebar";
import { RatingSection } from "../features/ratings/RatingSection";
import { SlotsStrip } from "../features/slots/SlotsStrip";
import { CASINOS, SECTION_IDS } from "../shared/config/content";
import type { Casino, SectionId, Slot } from "../shared/config/types";
import { useBodyScrollLock } from "../shared/lib/useBodyScrollLock";
import { useEscapeKey } from "../shared/lib/useEscapeKey";
import { useScrollSpy } from "../shared/lib/useScrollSpy";
import { useToast } from "../shared/lib/useToast";
import { Background } from "../shared/ui/Background";
import { Toast } from "../shared/ui/Toast";
import { Footer } from "./Footer";

const COLLAPSED_ROWS_COUNT = 5;
const SLOTS_HIGHLIGHT_MS = 1800;

export function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRatingExpanded, setIsRatingExpanded] = useState(false);
  const [reviewedCasino, setReviewedCasino] = useState<Casino | null>(null);
  const [isSlotsHighlighted, setIsSlotsHighlighted] = useState(false);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { toast, showToast } = useToast();
  const { activeSection, scrollProgress } = useScrollSpy(SECTION_IDS);

  const isOverlayOpen = isDrawerOpen || reviewedCasino !== null;
  useBodyScrollLock(isOverlayOpen);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  // The review modal handles Escape itself via <dialog>.
  useEscapeKey(closeDrawer, isDrawerOpen);

  useEffect(() => {
    return () => {
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
    };
  }, []);

  const goToSection = useCallback((sectionId: SectionId) => {
    setIsDrawerOpen(false);
    requestAnimationFrame(() => {
      const element = [...document.querySelectorAll(`[data-section="${sectionId}"]`)].find(
        (node) => node.getClientRects().length > 0,
      );
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    if (sectionId === "slots") {
      setIsSlotsHighlighted(true);
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(() => setIsSlotsHighlighted(false), SLOTS_HIGHLIGHT_MS);
    }
  }, []);

  const playCasino = (casino: Casino) => showToast(`Демо-макет: переход на сайт «${casino.name}»`);
  const playSlot = (slot: Slot) => showToast(`Демо-макет: запуск слота «${slot.name}»`);

  const visibleCasinos = isRatingExpanded ? CASINOS : CASINOS.slice(0, COLLAPSED_ROWS_COUNT);
  const reviewedPosition = reviewedCasino
    ? CASINOS.findIndex((casino) => casino.id === reviewedCasino.id) + 1
    : 0;

  return (
    <div className="min-h-screen overflow-x-clip">
      {/* inert keeps keyboard focus inside the drawer while it is open (React 19+). */}
      <div inert={isDrawerOpen}>
        <Background />
        <div
          className="fixed left-0 top-0 z-55 h-0.75 bg-linear-to-r from-brand via-violet-600 to-amber-500 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <Sidebar
          activeSection={activeSection}
          onNavigate={goToSection}
          onPlaySlot={playSlot}
          isSlotsHighlighted={isSlotsHighlighted}
        />
        <MobileHeader
          isMenuOpen={isDrawerOpen}
          onToggleMenu={() => setIsDrawerOpen((open) => !open)}
        />

        <main className="relative z-10 lg:pl-60 xl:pl-64">
          <div className="mx-auto max-w-6xl space-y-3 px-2 py-3 sm:space-y-6 sm:px-6 sm:py-8">
            <ClubsSection
              onShowRating={() => goToSection("rating")}
              onPickCasino={setReviewedCasino}
            />
            <RatingSection
              casinos={visibleCasinos}
              isExpanded={isRatingExpanded}
              onToggleExpanded={() => setIsRatingExpanded((expanded) => !expanded)}
              onReview={setReviewedCasino}
              onPlay={playCasino}
            />
            <SlotsStrip onPlay={playSlot} />
            <Footer />
          </div>
        </main>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        activeSection={activeSection}
        onNavigate={goToSection}
        onPlaySlot={playSlot}
      />

      {reviewedCasino && (
        <CasinoModal
          casino={reviewedCasino}
          position={reviewedPosition}
          onClose={() => setReviewedCasino(null)}
          onPlay={playCasino}
        />
      )}
      {toast && <Toast key={toast.id} text={toast.text} />}
    </div>
  );
}
