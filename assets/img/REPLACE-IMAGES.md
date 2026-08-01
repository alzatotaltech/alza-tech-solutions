# ALZA animated WebP replacement guide

Build 35 restores moving WebP artwork while reducing decode load. The large animations use approximately half the original frames and display-appropriate dimensions.

Stable paths:

- `assets/img/alza-brand-mark.webp`
- `assets/img/alza-monogram.webp`
- `assets/img/hero-cloud-migration-v21.webp`
- `assets/img/pricing-growth-rays.webp`
- `assets/img/solutions-delivery-model.webp`
- `assets/img/customer-controlled-perimeter-diagram.webp`
- `assets/img/uae-tech-solutions.webp`
- `assets/img/contact-us.webp`

For future moving artwork, retain the same filename and aspect ratio. Target 12–16 frames per second for ambient UI motion, size the file close to its maximum displayed width, loop continuously, and keep individual assets preferably below 2.5 MB. Avoid restoring 90–123 full-resolution frames unless the artwork genuinely requires that frame rate.

`favicon.svg` and `whatsapp-logo.svg` remain SVG vector interface icons.
