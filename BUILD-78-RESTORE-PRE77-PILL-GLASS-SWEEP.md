# Build 78 — Restore pre-Build-77 company-pill glass sweep

Apply on top of Build 77.

## Objective
Restore the visibly moving glass sweep that existed before Build 77 on the homepage **ALZA TOTAL TECH SOLUTIONS FZ-LLC** identity pill.

## Root-cause correction
Build 77 changed the pill's sweep geometry/timing and introduced a new stacking treatment (`isolation:isolate` plus `z-index:0` on the sweep layer). Build 78 removes only that Build-77 pill-specific stacking change and reinstates the proven Build 75/76 sweep architecture.

## Preserved behavior
- Build 77 button sheen remains unchanged and continuously live.
- Build 75 desktop GPU-relief protections remain unchanged.
- Build 76 header/footer company text remains static.
- The ALZA A/logo animation remains unchanged.
- No animated blur, filter, backdrop-filter, box-shadow, or background-position is introduced.
- The pill sweep uses only `transform` + `opacity` animation.
- Desktop and mobile both retain the visible sweep.

## Files
- `app/layout.tsx`
- `public/assets/css/pill-glass-v78.css`

## Expected visual result
The homepage legal-company-name pill should again show the same clearly visible travelling glass reflection cadence as before Build 77, without reintroducing the heavier desktop effects removed in Build 75.
