# ALZA Total Tech Solutions — Next.js / React Migration (Build 52)

This project migrates the ALZA marketing site from static HTML + imperative JavaScript to **Next.js 16 + React 19 + Motion** while preserving the existing public URLs and GitHub Pages hosting model.

## Architecture

- **Next.js Pages Router** is intentionally used for the first migration because filenames such as `products.html.tsx` preserve the existing `/products.html` URLs, avoiding an SEO-breaking URL migration.
- **React shared shell**: header, mobile navigation, footer, WhatsApp action, lead modal, SEO head, and client runtime are reusable React components.
- **Motion**: navigation/modal animations plus content reveal effects.
- **Static export**: `output: 'export'` keeps the site deployable on GitHub Pages with no Node server.
- **All 25 page bodies are now JSX-native React components.** The converter preserves the production structure and SEO copy while React owns the DOM. Shared shell and interactions are reusable components/hooks.

## Install and run

```bash
npm install
npm run dev
```

Production static export:

```bash
npm run typecheck
npm run build
```

The deployable site is generated in `out/`.

## GitHub Pages

The included `.github/workflows/deploy-pages.yml` builds the Next.js static export and deploys `out/`. `public/CNAME` preserves `alzatotaltech.com`.

## Important: legacy URLs preserved

Examples:

- `/products.html`
- `/solutions.html`
- `/pricing.html`
- `/resources/m365-migration-checklist.html`

This prevents unnecessary canonical/redirect churn while Google is still learning the ALZA entity.

## Next migration phase

The project is now React/Next.js with JSX-native page bodies. The next cleanup phase can consolidate repeated page-section patterns into typed reusable components without changing public URLs or visual appearance.

## Legacy `.html` export normalization

Next.js static export may append its own `.html` suffix to routes that already end in `.html`. The build script includes `scripts/fix-static-html-routes.mjs`, which normalizes generated files back to the exact production URLs before GitHub Pages deployment. `scripts/verify-export.mjs` then fails the build if any critical legacy URL is missing.

## React ownership

The exported site no longer loads the old `master.js`, `mobile-media.js`, `hero-video.js`, or Motion enhancement scripts. Navigation, modal state, FAQ/tabs, mobile media switching, form handling, release status, and internal client-side routing are owned by React hooks/components. Existing CSS is intentionally retained to preserve the approved ALZA visual design.
