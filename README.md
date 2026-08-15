# Reclipse — Cinematic Photography Portfolio

A scene-based, film-paced photography & film portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lenis, GSAP, React Router, and React Player.

## Setup

```bash
npm install
npm run dev
```

## Structure

- `src/pages/Home.tsx` — the homepage scene sequence (hero → statement → featured story → quote → invitation)
- `src/pages/Photography.tsx` — full-bleed, Netflix-style archive scroll
- `src/pages/ProjectDetail.tsx` — opening still → story → gallery → quote → next
- `src/pages/Films.tsx` — widescreen poster archive with hover reveal + inline playback
- `src/pages/FAQs.tsx` — subtitle-style fade-in Q&A
- `src/pages/Enquire.tsx` — ending scene with minimal form
- `src/components/Navigation.tsx` — floating nav, hides on scroll down
- `src/components/CinematicCursor.tsx` — subtle custom cursor, active only over photographs
- `src/components/Loader.tsx` — "Developing the negatives…" loading scene
- `src/components/Scene.tsx` — shared fade/cut scroll-reveal wrapper
- `src/lib/useLenis.ts` — smooth, film-paced scroll setup

## Notes on substitutions

- **Canela** is a paid, proprietary typeface (Colophon Foundry) with no free web-embeddable license. This scaffold uses **Fraunces** as a free, similarly warm editorial serif with the same restrained italic display feel — swap in Canela via `@font-face` in `src/index.css` if you have a license.
- All imagery is Unsplash placeholder photography standing in for Kaia's actual negatives — replace `src/data/projects.ts`, `films.ts` with real assets.
- Film playback uses YouTube URLs as placeholders for `react-player` — swap for hosted MP4/HLS sources.
- GSAP drives the one moment that needed frame-level timeline control: the loader's "Developing the negatives…" iris wipe (`src/components/Loader.tsx`). Everything else uses Framer Motion + Lenis, which is enough for simple enter/exit fades.
