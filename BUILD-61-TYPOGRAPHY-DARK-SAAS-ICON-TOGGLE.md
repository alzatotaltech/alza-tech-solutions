# Build 61 — Typography Clarity + Full Dark SaaS + Icon-only Toggle

## Corrected
- Self-hosted Inter through `next/font/google` for consistent font rendering.
- Higher body/muted-text contrast and slightly stronger small-text sizing/weights.
- Reduced overly-tight heading tracking and enabled optical/legibility rendering.
- Added a final clarity stylesheet that loads after all legacy CSS.
- Dark SaaS now forces the complete page surface system to near-black: sections, cards, pricing, diagrams, tabs, FAQ, forms, articles, CTA, mobile navigation and footer.
- Legacy white/light nodes such as flow nodes, control plane, callouts, badges, annual-saving pills, pricing cards, table headers and modal surfaces are explicitly themed.
- Theme control is now one icon-only moon/stars button. No label and no switch track. Clicking the icon toggles ALZA Blue ↔ Dark SaaS and preserves the stored preference.
- Existing fixed-right WhatsApp behavior remains unchanged.

## Files changed
- `components/ThemeToggle.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `public/assets/css/clarity-v61.css` (new)
- `package.json`
