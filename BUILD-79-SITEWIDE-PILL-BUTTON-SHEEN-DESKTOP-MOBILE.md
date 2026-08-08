# ALZA Website Build 79 — Site-wide Pill + Button Sheen

## Purpose
Correct Build 78 scope so the approved moving glass treatment is consistent across the entire website, not only the homepage.

## Changes
- Restores the pre-Build-77 transform/opacity glass sweep on the homepage `.hero-copy .eyebrow` pill.
- Extends the same sweep to every inner-page hero `.page-hero .kicker` pill.
- Reasserts the moving sheen on every shared `.btn`, including primary, secondary and ghost variants.
- Applies on both desktop and mobile; no viewport rule disables these two micro-animations.
- Keeps the button sheen running during the Build-73 scrolling state.
- Keeps hero-pill sweep running during the Build-73 scrolling state.
- Keeps Build-75 desktop GPU relief: the expensive rotating conic button border remains disabled on desktop.
- Does not animate blur, filter, box-shadow, backdrop-filter or background-position.
- Header/footer legal-name copy remains static; the ALZA logo animation is untouched.

## Apply order
Apply on top of Build 78. The patch adds `/public/assets/css/sitewide-glass-v79.css` as the final stylesheet in `app/layout.tsx`.

## Scope validation
The established site structure uses `.hero-copy .eyebrow` for the homepage identity pill and `.page-hero .kicker` for inner-page hero pills. `.btn` is the shared site-wide button class.
