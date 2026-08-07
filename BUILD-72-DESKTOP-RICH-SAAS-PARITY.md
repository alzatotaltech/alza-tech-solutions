# Build 72 — Desktop Rich SaaS Parity

Purpose: bring the desktop/laptop experience up to the visual richness of the approved mobile experience without changing the approved desktop layout.

## Root cause corrected
Windows/Chrome can report `prefers-reduced-motion: reduce`. Older ALZA CSS contains `!important` reduced-motion rules that disabled desktop panel float/glow/scan and page artwork drift even though the React runtime had already been configured to keep desktop motion active. Build 72 adds an explicit desktop-rich class when the viewport is desktop and Save-Data is not enabled, and the final CSS layer restores the requested desktop animations.

## Desktop-only enhancements
- Restores hero/page artwork drift, media panel float/glow and scanning effects.
- Adds persistent Motion auroras and light ribbons visible even before pointer interaction.
- Adds non-layout section illumination behind existing content containers.
- Adds idle breathing depth and travelling glass sheen to Motion surfaces.
- Adds persistent proof-strip glass depth.
- Adds subtle living icon, SVG, kicker and header edge effects.
- Keeps pointer spotlight, tilt and button magnetic effects as an additional interaction layer.
- Keeps Dark SaaS near-black; cyan/blue/violet remain illumination/accent only.

## Explicit non-goals
No changes to desktop grid, widths, section order, padding, navigation dimensions, mobile media logic, URLs or SEO. Mobile/tablet styling is not changed by this build.
