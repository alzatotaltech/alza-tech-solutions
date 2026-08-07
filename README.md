# ALZA Total Tech Solutions — Build 57

Build 57 is the current **Next.js App Router + React 19** ALZA website with the modern AI-assisted design stack wired in correctly.

## Production/runtime stack
- Next.js App Router
- React 19
- Motion (`motion/react`, the current Framer Motion package)
- Tailwind CSS v4 + PostCSS
- shadcn-compatible local component architecture
- Radix UI primitives
- Lucide icons
- ALZA Blue + Dark SaaS themes
- GitHub Pages static-export deployment and optional full Next.js runtime mode

## AI/design development stack
- UI/UX Pro Max official Codex installer is wired through `npm run uiux:install`.
- 21st.dev official agent/registry workflow is wired through `npm run 21st:install-skill`, `npm run 21st:login`, and `npm run 21st:search -- "..."`.
- `.codex/skills/alza-premium-web/SKILL.md` provides persistent ALZA-specific design guardrails.

UI/UX Pro Max and 21st.dev are **development-time tools**, not public browser libraries. The production site ships the resulting React components, Motion, Tailwind-generated CSS and required UI dependencies—not the agent tools themselves.

## Build 57 visible component refactors
The homepage now has two sections rebuilt as modern reusable components instead of migrated legacy markup:
- `components/premium/ServiceBentoGrid.tsx` — Tailwind + local Card/Badge primitives + Lucide + Motion.
- `components/premium/PremiumFaq.tsx` — Radix Accordion + shadcn-style local wrapper + Motion.

This establishes the component model for progressively refactoring the remaining migrated page sections without resetting ALZA content, SEO, responsive media or URL structure.

## Install and run
```bash
npm install
npm run design:doctor
npm run dev
```

## Install AI design tools for Codex
Preview the commands:
```bash
npm run design:bootstrap
```
Install them:
```bash
npm run design:bootstrap -- --apply
```
Or individually:
```bash
npm run uiux:install
npm run 21st:install-skill
npm run 21st:login
```

## Use 21st.dev
```bash
npm run 21st:search -- "enterprise SaaS hero"
npm run 21st:search -- "pricing section"
npm run 21st:search -- "navigation menu"
```
Review the selected source, dependencies, accessibility and licensing before bringing a component into ALZA. Adapt imported code to ALZA tokens rather than mixing visual systems.

## Production build
Full Next.js runtime:
```bash
npm run typecheck
npm run build
npm start
```

GitHub Pages/static hosting:
```bash
npm run typecheck
npm run build:static
```
The static artifact is generated in `out/`.

## Deployment
GitHub Pages must use **Settings → Pages → Source: GitHub Actions**. The workflow at `.github/workflows/deploy-pages.yml` builds and publishes only `out/`.
