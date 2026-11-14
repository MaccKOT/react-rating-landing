# TOP CASINO — Landing Page Template

Test assignment for a **Middle Frontend Developer** position: a content-driven, responsive landing page built with React 19 and TypeScript, organized with a lightweight Feature-Driven Architecture.

## Disclaimer

This project is a **technical demo, not gambling advertising or promotion**. All company names, logos, bonuses, and ratings are placeholders used solely to illustrate UI patterns; trademarks belong to their respective owners, and this project is not affiliated with or endorsed by any of them. "Play" buttons perform no navigation — they show a demo toast. The 18+ / responsible-gaming labels are part of the demo UI.

## Stack

- **React 19 + TypeScript (strict)** — typed domain model, `satisfies`-validated content, union-typed UI variants.
- **Vite+ (`vp` CLI)** — Vite 8 / Rolldown for dev & build, Oxlint + Oxfmt + type-check via `vp check`, Vitest available via `vp test`.
- **Tailwind CSS v4** — `@tailwindcss/vite` plugin, CSS-first design tokens in `@theme` (brand colors, font families). No runtime CDN.
- **Bun** — package manager and script runner (the toolchain itself runs on Node, managed by `vp`).
- **Self-hosted variable fonts** — Inter & Unbounded via Fontsource.

## Quick start

```bash
bun install
bun run dev      # vp dev — dev server with HMR
bun run check    # format + lint + type-check
bun run build    # production build
bun run preview  # preview the build
```

## Architecture (FDA-lite)

```txt
src/
├── app/ # composition root, global styles, footer
├── features/ # navigation · clubs · rating · slots · casino-review
└── shared/ # config (typed content) · lib (hooks) · ui (primitives)
```

Dependency rule: `app → features → shared`; features never import each other. Deliberately trimmed for a landing template: no barrels, no extra layers. All copy and data live in one typed file — `shared/config/content.ts` — so re-skinning the template never touches components.

## Highlights

- Responsive: rating table (xl+) degrades to compact cards; fixed sidebar (lg+) becomes a slide-in drawer; fluid buttons with max-width caps instead of fixed widths (no overflow at 320px).
- Accessibility: review modal is a native `<dialog>` (focus trap, Esc, focus restore); inert page behind the drawer; aria-current / aria-expanded / aria-controls; role="status" toast; prefers-reduced-motion support.
- Performance: build-time Tailwind and local fonts (zero runtime CDN), rAF-throttled scroll spy with passive listeners.
- Corner cases: ratings clamped to 0–5, useId sanitized for SVG gradient IDs, timer cleanup on unmount, body scroll lock without layout shift (scrollbar-gutter: stable), buttons default to `type="button"`.

## Production notes

- SPA rendering is fine for a demo; add prerendering/SSG before real SEO-driven deployment.
- Replace demo toasts with validated https links and rel="noopener noreferrer" for external targets.
- Cover useScrollSpy / useToast with Vitest unit tests (vp test is already wired).
