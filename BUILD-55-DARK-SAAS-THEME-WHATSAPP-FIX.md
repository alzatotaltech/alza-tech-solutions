# Build 55 — Dark SaaS Theme + Floating WhatsApp Fix

## Fixed
- Restored WhatsApp to true viewport-fixed positioning on the RIGHT side.
- It remains visible while scrolling on desktop and mobile.
- Added safe-area offsets for iPhone/Safari browser chrome.
- Removed the Build 54 selector that accidentally changed the WhatsApp control to `position: relative`.

## Added
- Persistent two-theme switch in the primary navigation.
- Default: approved ALZA Blue/current theme.
- Alternate: Dark SaaS — near-black neutral surfaces with cyan/violet ALZA accents.
- Theme choice persists through `localStorage` across routes and visits.
- Pre-paint theme boot script minimizes theme flash on navigation/reload.
- Browser `theme-color` is updated with the selected theme.

## Dark SaaS coverage
Header, mobile menu, hero overlays, typography, sections, cards, pricing, tabs, FAQ, forms, tables, CTA bands, modal, footer, Motion grid/orbs and focus/contrast surfaces are explicitly themed.
