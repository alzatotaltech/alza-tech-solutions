# Build 73 — Desktop performance / smooth scrolling

This patch replaces Build 72's repaint-heavy desktop visual layer with a GPU-light implementation.

## Removed from continuous desktop animation
- four large blurred aurora/ribbon surfaces
- section-wide animated gradient illumination
- continuous box-shadow/border animations on every card
- continuous animated card background-position sheen
- continuous icon/SVG filter animations
- proof-strip animated shadow
- header animated shadow
- always-running CTA border rotation / sheen
- large media glow + scan combinations

## Retained
- approved desktop layout
- static premium glass depth
- hero/media movement using transform only
- one-time Motion section/card reveals
- scroll progress
- pointer spotlight / subtle card tilt when not scrolling
- hover/focus CTA animation
- mobile/tablet visual experience unchanged

## Scroll performance protection
During active scrolling the runtime adds `is-scrolling-v73`. Pointer spotlight, card tilt and magnetic button transforms temporarily freeze for roughly 120 ms after the last scroll event, allowing Chrome to prioritize scrolling/compositing.
