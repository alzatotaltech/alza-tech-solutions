# Build 77 — Restore glass pill + desktop button motion

Apply on top of Build 76.

## Fixes
- Restores the moving glass sweep on the homepage `ALZA TOTAL TECH SOLUTIONS FZ-LLC` identity pill on desktop and mobile.
- Restores always-visible button sheen on desktop while preserving mobile behavior.
- Keeps Build 75's rotating conic border disabled on desktop.
- Uses transform + opacity only; no animated blur, filter, backdrop-filter, box-shadow, or background-position.
- Keeps Build 73 scroll freeze for pointer tilt/magnetic movement.
- Leaves header/footer brand text static and keeps the ALZA A animation unchanged.

## Files
- `app/layout.tsx`
- `public/assets/css/live-glass-v77.css`
