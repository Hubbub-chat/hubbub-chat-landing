# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing/landing site for Hubbub Chat (a separate Rust/Tauri desktop app, hosted at `thanghn14/hubbub-chat`). Stack: React 19, TypeScript, Tailwind CSS v4 (via `@tailwindcss/vite`), Vite. No router, no backend, no test runner, no linter configured.

## Commands

- `npm run dev` — Vite dev server on port 3000
- `npm run build` — `tsc -b && vite build` (type-check is the only static check; output in `dist/`)
- `npm run preview` — serve the production build

## Architecture

- `src/App.tsx` composes the page as a linear stack of section components (`src/components/`) inside `ThemeProvider` > `LanguageProvider`. Section order is: Hero, AgentOrchestrationDemo, BentoFeatures, SecurityArchitecture, ComparisonTable, DownloadSection, FaqSection, Footer. Navbar anchors rely on section ids (e.g. `#architecture`, `#main-content`).
- **i18n (EN/VI)**: all copy lives in `src/utils/translations.ts` as a nested `{ en: {...}, vi: {...} }` object. Components call `t('section.key')` from `useLanguage()` (`src/context/LanguageContext.tsx`; the provider is in `LanguageProvider.tsx`). `t` resolves dot paths, returns arrays/objects too (typed `any`), and returns the key itself if missing. Any new copy must be added to **both** `en` and `vi` (they are kept symmetric). Some components still branch inline on `lang === 'vi'`. Language persists in localStorage `hubbub_lang` (default `en`).
- **Theme**: `ThemeContext.tsx` toggles the `dark` class on `<html>`, syncs the `theme-color` meta, persists to `hubbub_theme` (default dark). Colors are semantic tokens in `src/index.css` (`bg-bg`, `text-muted`, `border-line`, `text-accent`, …) that switch with the `dark` class: Supabase-like dark, Devin-like light, sky-blue accent. Prefer these over raw `slate-*`/`dark:` pairs.
- **Motion**: demos (`HeroDemo`, `AgentOrchestrationDemo`, `SecurityArchitecture`, `BentoFeatures` visuals) are code-driven off `useClock`/`useInView` in `src/hooks/`; they pause off-screen/hidden and show a static end state under `prefers-reduced-motion`.
- **Downloads**: `DownloadSection.tsx` defines `RELEASE_VERSION` / `RELEASE_BASE_URL` pointing at GitHub Releases assets, plus a hardcoded SHA-256 checksum. When publishing a new release, update the version, asset names, and checksum together (and the version strings in `translations.ts`, e.g. `v0.1.0` badges).
- `index.html` holds SEO metadata and Schema.org JSON-LD; keep it consistent with content changes.
- Accessibility is a stated goal (skip link, ARIA tabs/accordions, focus-visible styles) — preserve it when editing components.
- `dist/` and `*.tsbuildinfo` are build artifacts.
