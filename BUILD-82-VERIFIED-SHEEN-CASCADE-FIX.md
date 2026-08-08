# ALZA Build 82 — verified sheen cascade fix

## Root cause confirmed
Build 81 correctly inserted a dedicated sheen span, but the base rule declared:

`transform: translate3d(0,0,0) skewX(-18deg) !important;`

The keyframes also animate `transform`. In the CSS cascade, an author `!important` declaration wins over CSS animation values, so the keyframes could not change the transform. The sheen therefore remained parked off-screen even though the animation itself was running.

This explains the observed result exactly:
- company pill sweep invisible on desktop;
- company pill sweep invisible on mobile;
- button sheen invisible on desktop.

## Correction
Build 82 keeps the dedicated real sheen layer from Build 81, but removes `!important` from the live layer's base `transform`. The unique `.alza-live-sheen-v81` class is not targeted by the legacy pseudo-element rules, so no `!important` is needed there.

All other positioning, clipping, z-index and animation declarations remain isolated from the historical `::after` cascade.

## Validation
The defect and correction were reproduced in headless Chromium by sampling `getComputedStyle(...).transform` over time.

With `transform: ... !important`, four samples were identical and the layer did not move.

With the corrected non-important base transform, every sample changed, proving the keyframes were actively moving the sheen.

## Scope
- Home company identity pill — desktop + mobile
- Inner-page hero kicker pills — desktop + mobile
- All `.btn` buttons — desktop + mobile
- Dynamic buttons added after route transitions remain covered by `GlobalSheenRuntime`

## Performance
Transform-only motion is retained. No continuous blur, filter, box-shadow or background-position animation is introduced. Desktop rotating conic borders remain disabled.

## Apply
Apply Build 82 on top of Build 81 (or on the current Build 80 → 81 chain), preserving paths. Rebuild/export and deploy. `layout.tsx` loads only `live-sheen-v82.css?v=82`, not the broken v81 stylesheet.
