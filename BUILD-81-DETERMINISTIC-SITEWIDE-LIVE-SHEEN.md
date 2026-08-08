# ALZA Build 81 — deterministic site-wide live sheen

## Problem corrected
The company/page pill sweep was no longer visible on mobile or desktop, and the button sheen remained invisible on desktop.

The previous fixes continued to reuse `::after`, but the site has multiple historical layers (Build 54, 73, 74, 75, 77, 78, 79 and 80) that also control that same pseudo-element with viewport/state-specific `animation`, `opacity`, `display`, `content`, and scroll/reduced-motion rules.

## Build 81 architecture
Build 81 removes the Build 77/78/79/80 motion stylesheets from the active layout cascade and replaces them with one deterministic sheen system. The old files may remain on disk but are no longer loaded.

Build 81 no longer relies on the contested pseudo-element.

`GlobalSheenRuntime.tsx` inserts one dedicated `aria-hidden` span into:
- `.hero-copy .eyebrow` (Home hero identity pill)
- `.page-hero .kicker` (inner-page hero pill)
- every `.btn` (primary, secondary, ghost, header/modal/dynamic buttons)

A MutationObserver also decorates buttons/pills added later by route transitions or dynamic UI.

The legacy `::after` sheen is disabled only on decorated hosts. The new child layer is animated independently.

## Performance
- Transform-only continuous animation.
- No animated opacity.
- No blur/filter/backdrop-filter/box-shadow/background-position animation.
- Desktop rotating conic button border remains disabled.
- Existing hero/video and ALZA mark performance strategy is untouched.

## Apply
Apply this patch on top of Build 80, preserving paths, then rebuild/export and deploy.
