---
name: alza-premium-web
description: ALZA-specific Next.js App Router design and implementation guardrails for premium enterprise SaaS UI. Use for visual design, page creation, responsive behavior, Motion animation, shadcn/Radix components, Tailwind styling, accessibility, and 21st.dev component research.
ALZA Premium Web Skill
Required stack
Next.js App Router and React Server Components by default.
Client Components only for state, browser APIs, Motion, Radix interactive primitives, forms, theme switching, and pointer interactions.
Motion from `motion/react` for interaction and scroll choreography.
Tailwind CSS v4 for new/refactored component styling.
shadcn-compatible local components under `components/ui/` using Radix primitives where appropriate.
Lucide icons. Do not use emoji as interface icons.
External design intelligence
Before significant redesign work, use the official UI/UX Pro Max Codex skill if it is installed. The project bootstrap command is:
`npm run uiux:install`
For component discovery, use 21st.dev before inventing a complex marketing block from scratch:
`npx @21st-dev/cli@latest login`
`npx @21st-dev/cli@latest search "<component need>"`
inspect the selected component and its dependencies before bringing code into the project.
preserve attribution/licensing requirements of the selected source.
ALZA visual rules
Enterprise dark-first visual language, not gaming/neon.
ALZA Blue and Dark SaaS must both remain legible.
Cyan/blue are accents, not full-page text colors.
Use depth through subtle gradients, glass, border light, and restrained blur.
No excessive glow, spinning ornaments, cursor gimmicks, or continuous motion without purpose.
Minimum 44px touch targets for interactive controls.
Respect `prefers-reduced-motion` and Save-Data.
Mobile must be tested independently from desktop; never assume desktop hover behavior translates to touch.
Preserve SEO metadata, structured data, canonical URLs, and accessible semantic hierarchy.
Component policy
Prefer reusable typed components over repeated raw markup.
New primitives belong in `components/ui/`.
ALZA marketing compositions belong in `components/premium/`.
Keep server-renderable content out of Client Components unless interaction requires it.
Avoid adding a dependency when an existing primitive already covers the requirement.
QA gate
Before delivery verify: keyboard navigation, focus visibility, mobile overflow, contrast in both themes, reduced motion, no duplicate H1, correct links, static-export compatibility, and no missing public assets.
