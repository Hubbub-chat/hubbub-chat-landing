# Hubbub Chat — Landing Page

The official marketing site for **Hubbub Chat**, a local-first, multi-agent AI desktop studio for deep research. This repository contains only the web landing page; the desktop application lives in [thanghn14/hubbub-chat](https://github.com/thanghn14/hubbub-chat).

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff.svg)](https://vite.dev/)

## Overview

The site is a single-page, statically built application that presents Hubbub Chat's product story and distribution:

- **Hero** with an animated studio preview that cycles through representative research scenarios.
- **Multi-agent orchestration** demo showing how the Orchestrator, Researcher, Librarian, and Tutor agents hand work to one another under policy checks.
- **Feature grid** covering the native Rust core, low memory footprint, local-first storage and search, and model choice (local via Ollama / llama.cpp, or bring-your-own API key).
- **Security architecture** walkthrough of the layered policy pipeline.
- **Comparison table** against cloud-hosted chatbots and Electron-based AI wrappers.
- **Downloads** for Windows release packages, each listed with its SHA-256 checksum.
- **FAQ** covering data handling, hardware requirements, offline use, and licensing.

Additional characteristics:

- **Bilingual interface** — English and Vietnamese, with all copy maintained in a single symmetric translation dictionary. English is the default.
- **Light and dark themes** — the browser `theme-color` is kept in sync with the active theme.
- **Accessibility** — skip link, keyboard-operable tabs and accordions, visible focus styles, and reduced-motion fallbacks for all animated demos.
- **SEO** — Open Graph and Twitter metadata, plus Schema.org `SoftwareApplication` JSON-LD in `index.html`.

## Tech Stack

| Layer      | Technology                                  |
| ---------- | ------------------------------------------- |
| UI         | React 19, TypeScript 5.8                    |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`)       |
| Build      | Vite 8                                      |
| Icons      | lucide-react                                |

The site has no router, no backend, and no test runner. It is a static build that can be hosted on any static file host.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (the repository includes `package-lock.json`)

### Installation

```bash
git clone https://github.com/thanghn14/hubbub-chat-landing.git
cd hubbub-chat-landing
npm install
```

### Available Scripts

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start the Vite development server on `http://localhost:3000`        |
| `npm run build`   | Type-check with `tsc -b`, then produce an optimized build in `dist/` |
| `npm run preview` | Serve the production build locally for final verification          |

## Project Structure

```
hubbub-chat-landing/
├── public/
│   └── favicon.svg                    # Brand favicon
├── src/
│   ├── components/
│   │   ├── AgentOrchestrationDemo.tsx # Multi-agent orchestration stepper
│   │   ├── BentoFeatures.tsx          # Feature grid with live visuals
│   │   ├── ComparisonTable.tsx        # Responsive comparison matrix
│   │   ├── DownloadSection.tsx        # Release downloads and SHA-256 checksums
│   │   ├── FaqSection.tsx             # Accessible FAQ accordion
│   │   ├── Footer.tsx                 # Site footer and links
│   │   ├── HeroDemo.tsx               # Animated studio preview used by the hero
│   │   ├── HeroSection.tsx            # Hero layout and value proposition
│   │   ├── Logo.tsx                   # Vector brand logo
│   │   ├── Navbar.tsx                 # Header with theme and language toggles
│   │   ├── Reveal.tsx                 # Scroll-triggered reveal wrapper
│   │   ├── SectionHeader.tsx          # Shared section heading
│   │   └── SecurityArchitecture.tsx   # Layered security pipeline visualizer
│   ├── context/
│   │   ├── LanguageContext.tsx        # i18n context definition
│   │   ├── LanguageProvider.tsx       # Language state and <html lang> sync
│   │   └── ThemeContext.tsx           # Theme state and theme-color meta sync
│   ├── hooks/
│   │   ├── useClock.ts                # Shared clock for code-driven animations
│   │   └── useInView.ts               # Pauses demos when off-screen
│   ├── utils/
│   │   └── translations.ts            # English and Vietnamese dictionaries
│   ├── App.tsx                        # Page composition and skip link
│   ├── index.css                      # Tailwind directives and theme tokens
│   └── main.tsx                       # Application entry point
├── index.html                         # SEO metadata and JSON-LD
├── CLAUDE.md                          # Guidance for AI-assisted development
├── LICENSE
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Contributing Content

- **Copy changes:** add or edit strings in `src/utils/translations.ts`. Every key must exist in both the `en` and `vi` objects.
- **Theme colors:** use the semantic tokens defined in `src/index.css` (for example `bg-bg`, `text-muted`, `border-line`, `text-accent`) rather than raw color utilities.
- **Metadata:** keep `index.html` (title, description, JSON-LD) consistent with user-facing content.
- **Release updates:** when publishing a new Hubbub Chat version, update the version, asset names, and SHA-256 checksum in `src/components/DownloadSection.tsx` together, and the version labels in `src/utils/translations.ts`.

## Deployment

Because the output is static, the site can be deployed to any static host:

| Platform          | Settings                                                              |
| ----------------- | --------------------------------------------------------------------- |
| Vercel            | Framework preset: *Vite*; build command `npm run build`; output `dist` |
| Cloudflare Pages  | Framework preset: *Vite*; build command `npm run build`; output `dist` |
| Netlify           | Build command `npm run build`; publish directory `dist`              |
| GitHub Pages      | Publish `dist/` through a GitHub Actions workflow                    |

## Related Project

- **Hubbub Chat (desktop app):** [github.com/thanghn14/hubbub-chat](https://github.com/thanghn14/hubbub-chat)

## License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.

## Author

**thanghn** — [@thanghn14](https://github.com/thanghn14)
