# ALZA Build 83 — Pill glass + button rotating colour split

## Approved motion model
- Pills: travelling glass sweep only.
- Buttons: internal rotating cyan / blue / violet colour motion only.
- No glass sweep on buttons.
- Desktop and mobile both covered.

## Why this build is different
Builds 74/75 and 77–82 reused button pseudo-elements for multiple effects. Build 83 separates the two effects into dedicated real DOM layers:
- `.alza-pill-glass-v83` for the pill sweep.
- `.alza-button-color-v83` for button colour rotation.

Historical button `::after` sheen and primary-button `::before` rotation are explicitly retired, so no old desktop/mobile cascade can suppress or duplicate the new motion.

## Performance
Both effects animate transform only. The conic colour field is painted once and its layer rotates; there is no animated blur, filter, shadow, background-position, or gradient stop.

## Apply
Apply over Build 82, preserving paths, then rebuild/export and deploy. The layout loads `/assets/css/motion-split-v83.css?v=83` instead of Build 82's live-sheen stylesheet.

## Runtime validation
Validated in headless Chromium by sampling computed transforms over time. The pill layer remained parked during its intentional idle interval and then translated across the pill; the button colour layer continuously changed rotation matrices, confirming independent motion channels.
