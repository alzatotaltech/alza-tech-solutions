# Build 74 — Brand Glass + Footer Logo + Always-Live Buttons

Patch target: apply on top of Build 73.

## Changes

- Removed the moving glass scan from the ALZA A mark while retaining its glow/float/energy animation.
- Moved the moving glass treatment to the visible legal company name: `ALZA Total Tech Solutions FZ-LLC` in the header/footer brand lockup.
- Kept the exact legal-name home hero badge glass sweep continuously live.
- Wrapped the footer ALZA mark with the same `brand-logo-live` structure used by the header so the footer receives matching desktop A animation; mobile retains the existing pulse.
- Restored continuously visible button animation for primary, ghost, and secondary `.btn` controls in both themes and all viewport sizes.
- Reimplemented button sheen using transform/opacity rather than animated `left` to reduce repaints.
- Preserved Build 73 scroll-performance safeguards: magnetic/tilt movement still freezes while actively scrolling, but the small button animations remain live.
- No layout, route, SEO, media, mobile composition, or section-order changes.
