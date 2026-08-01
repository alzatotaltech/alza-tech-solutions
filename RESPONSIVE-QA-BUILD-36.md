# Responsive QA — Build 36

Validated viewport widths: 320, 360, 412, 480, 640, 720, 768, 900, 1024, 1199, 1200, 1440 and 1600 CSS pixels.

Checks completed:
- Mobile navigation opens as a full-height drawer and displays all nine navigation links.
- Desktop navigation restores at 1200px and above.
- Homepage hero no longer reserves an empty lower background area.
- Animated hero artwork is rendered as a responsive image element.
- Service cards use one column on phones, two on small tablets, and three on wider tablets/desktops.
- Proof strip uses two columns on phones, three on tablets, and six on desktop.
- Solutions, Contact and Pricing hero layouts were checked at phone and tablet widths.
- All 25 HTML pages include the viewport tag and the Build 36 responsive stylesheet.
- Local links/assets and JSON-LD blocks validated.
- JavaScript syntax and CSS parsing validated.
- No document-level horizontal overflow in the tested viewport set.

Animated WebP files were retained; no animation frames were removed in this build.
