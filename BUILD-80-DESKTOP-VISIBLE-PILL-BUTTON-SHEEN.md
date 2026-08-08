# ALZA Website Build 80 — Desktop Visible Pill + Button Sheen

## Why Build 79 was still invisible on desktop
The desktop performance layer from Build 75 contains an authoritative rule:

`.btn::after { opacity: 0 !important; }`

Later builds restarted the pseudo-element animation, but their keyframes attempted to animate `opacity`. An `!important` author declaration wins over animated opacity, so the sheen could move while remaining transparent.

## Build 80 correction
- Desktop only (`min-width: 901px`) hardening layer loaded after Build 79.
- Company/hero pill sweep is applied to `.hero-copy .eyebrow` and `.page-hero .kicker`.
- All shared `.btn` variants receive visible sheen.
- Desktop pseudo-elements use fixed visible opacity with `!important`.
- They rest fully outside the clipped pill/button and animate **transform only** across the control.
- This eliminates dependence on animated opacity and avoids the Build 75 cascade conflict.
- Primary rotating conic button border stays disabled on desktop.
- No animated blur, filter, backdrop-filter, box-shadow or background-position.
- Mobile remains unchanged and continues using Build 79.

## Apply order
Apply Build 80 on top of Build 79.

## Expected desktop motion
Continuous effects remain limited to:
1. ALZA A logo motion already established by prior builds.
2. Hero/video motion already established by prior builds.
3. Visible button sheen.
4. Visible company/page-hero pill sweep.
5. Other expensive ambient motion remains suppressed until interaction where applicable.
