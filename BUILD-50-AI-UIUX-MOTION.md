# Build 50 — GPT/Codex UI/UX + Motion Integration

## Architecture decision
The production site remains static HTML/CSS/JavaScript for GitHub Pages. A full React/Next.js conversion was intentionally not performed because it would change the deployment architecture, page URLs and SEO surface.

## Motion
The current Motion package (successor to Framer Motion) is declared in package.json and production pages load pinned Motion 12.43.0 through the official jsDelivr ESM distribution. This gives the static site Motion-powered UI interactions without shipping a React runtime.

Implemented:
- hero text sequencing
- section/card stagger reveals
- restrained desktop hover elevation
- pointer-position spotlight on cards
- workload/pricing tab panel transitions
- scroll progress indicator
- reduced-motion handling
- touch-device protection from desktop hover/parallax behavior

## UI/UX Pro Max adaptation
A project-local Codex/GPT skill is included at `.codex/skills/alza-ui-ux/SKILL.md` and the persistent design system is at `design-system/alza-total-tech-solutions/MASTER.md`.

The priority model used is accessibility → touch → performance → style consistency → responsive layout → typography/color → animation → forms → navigation.

## 21st.dev
21st.dev was used as a design/component reference for enterprise dual-CTA hero hierarchy, dark SaaS glow treatment and modern pricing interaction patterns. React/Tailwind component source was not directly installed because the current production stack is static HTML/CSS/JS; the patterns were ported into the existing ALZA system instead of silently introducing a second framework.

## Future optional phase
A separate React/Next.js migration can be built later if component-level Motion/AnimatePresence, shadcn/ui and direct 21st.dev component installation become a higher priority than preserving the current static architecture.
