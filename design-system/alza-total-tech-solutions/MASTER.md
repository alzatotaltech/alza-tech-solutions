# ALZA Total Tech Solutions — Master Design System

## Product and audience
Enterprise technology consultancy + proprietary Microsoft 365 migration software. Audience: UAE SMB, enterprise IT, MSP/consulting buyers and technically sophisticated administrators.

## Visual direction
Premium dark enterprise SaaS. Navy execution surface, electric cyan/blue accents, restrained glass depth, technical grid cues, high contrast typography. Avoid generic neon overload, cartoon illustration, emoji icons, oversaturated gradients and gratuitous 3D.

## Core tokens
- Canvas: #020A18 / #031126 / #071D3B
- Elevated surface: rgba(7, 28, 58, .82)
- Border: rgba(73, 169, 255, .24)
- Primary cyan: #21C7F5
- Primary blue: #1885FF
- Secondary violet: #7D71FF
- Text: #F4F8FF
- Muted text: #A9BDD5
- Success: #27D8A1
- Radius: 16 / 22 / 28px
- Spacing scale: 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px

## Typography
Large, confident sans-serif display headings. Body copy minimum 16px desktop/mobile where practical, line-height 1.5–1.7. Never break words to make a layout fit.

## Layout
Mobile-first. One column <= 639px, two-column content 640–899px where appropriate, full desktop layouts >= 1200px. Touch targets >=44px. No horizontal page scrolling.

## Motion
Motion conveys hierarchy and continuity. Entry 320–480ms; hover/tap 160–240ms. Animate transform/opacity, not width/height. Respect prefers-reduced-motion. Animated WebP/MP4 remains ambient background; interface motion must stay subtle.

## Components
- Navigation: compact persistent brand, active indicator, accessible drawer on mobile.
- Hero: one dominant message, max two primary actions, artwork integrated into background rather than boxed.
- Cards: thin blue border, dark glass surface, semantic SVG icon, optional pointer spotlight on desktop only.
- Pricing: scannable plan cards, clear active application selector, no hidden horizontal overflow on mobile.
- Footer: full-width background, centered inner grid, 4/2/1 column responsive pattern.

## Accessibility + performance gate
Contrast >=4.5:1 for normal text; keyboard focus visible; icon-only controls labeled; semantic alt text; below-fold media lazy loaded; reserve media dimensions; do not run heavy pointer/parallax effects on touch devices.

## Design references used
21st.dev enterprise dual-CTA hero, dark SaaS hero/glow patterns and modern pricing table interaction patterns were used as reference directions, then adapted to ALZA's existing HTML/CSS design rather than copied as React components.
