# Build 66 — Desktop Glass + Motion Parity Patch

Patch-only release over Build 65.

Changed files:
- `app/layout.tsx`
- `components/PageRuntime.tsx`
- `public/assets/css/clarity-v61.css`
- `public/assets/css/experience-v54.css`

Fixes:
- Adds the new React/Tailwind `.b57-premium-card` surfaces to desktop pointer spotlight/tilt handling.
- Extends interactive surfaces to resource/use-case/pricing/architecture/control panels.
- Makes desktop ALZA Blue and Dark SaaS cards genuinely translucent glass rather than opaque slabs.
- Restores ambient Motion visibility through desktop sections and panels.
- Strengthens desktop glass highlights and subtle idle light drift while preserving `prefers-reduced-motion`.
- Leaves mobile/tablet composition unchanged.
- Cache busts the changed CSS to `v=66`.
