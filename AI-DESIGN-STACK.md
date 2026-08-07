# Build 57 AI-first design stack

This repository separates **production runtime technology** from **AI design/developer tooling**.

## Production runtime
- Next.js App Router
- React 19
- Motion (`motion/react`, the current Framer Motion package)
- Tailwind CSS v4
- shadcn-compatible local component architecture
- Radix UI primitives
- Lucide icons
- Existing ALZA media, SEO, structured data and static-export deployment

## UI/UX Pro Max
UI/UX Pro Max is an AI skill, not a browser library. It should not be shipped to site visitors. Install it into Codex for design/refactor work:

```bash
npm run uiux:install
```

or run the combined bootstrap:

```bash
npm run design:bootstrap -- --apply
```

## 21st.dev
21st.dev is a component registry and agent workflow. It is intentionally not a production runtime dependency. Use its CLI to install the agent skill and discover/import components into the repository:

```bash
npm run 21st:install-skill
npx @21st-dev/cli@latest login
npx @21st-dev/cli@latest search "saas hero"
npx @21st-dev/cli@latest search "pricing section"
```

Once a component is copied into the project, the project owns that local code; there is normally no `21st` browser dependency. Review the selected component's source/license and keep any required attribution.

## Build 57 implemented refactors
The homepage now uses new Tailwind/shadcn/Radix/Motion components for the service bento grid and FAQ rather than legacy generated HTML. This establishes the pattern for progressively refactoring the remaining page sections without resetting the approved ALZA content or SEO structure.
