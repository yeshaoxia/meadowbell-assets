# CRAFTLINE — Ink Reveal Hover

Use this English prompt with an AI frontend coding platform. **A text prompt alone cannot guarantee identical output across platforms.** For the same runtime and assets, retrieve and run the pinned files below unchanged; if the platform cannot open GitHub URLs, upload the complete ZIP instead.

---

Create the interactive website shown by this reference: https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/ink-reveal-hover.mp4

Reproduce the minimal CRAFTLINE landing screen and its ink reveal hover interaction. Use the following implementation as the exact runtime source of truth rather than inventing a different layout or substituting a simple colored cursor circle. Copy these files into the indicated paths:

- index.html: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/index.html
- assets/app.js: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/app.js
- assets/app.css: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/app.css
- assets/inline-assets.js: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/inline-assets.js
- assets/craftline-wordmark.png: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/craftline-wordmark.png
- assets/chevron.png: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/chevron.png
- assets/ink-texture.webp: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/ink-texture.webp

Readable implementation references:
- WebGL motion engine: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/ink-engine.source.js
- React interface source: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/interface.source.jsx
- Desktop idle state: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/previews/rest.png
- Desktop reveal state: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/previews/hover.png
- Phone layout: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/previews/mobile.png
- Compact actual interaction video: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/9d240200c91c3dea9b3e4868aecc327fa57bfc23/designs/ink-reveal/assets/demo-mini.mp4

All owned links are pinned to commit 9d240200c91c3dea9b3e4868aecc327fa57bfc23; do not replace them with moving main-branch links.

## Exact composition

Use a full-viewport paper-white background RGB(243,243,240). The reference video is 1920 by 1418 pixels. Keep the interface light, quiet and flat with generous negative space. Do not add cards, borders, gradients, shadows or marketing sections to the landing canvas.

Place the source-derived, very heavy black CRAFTLINE wordmark across the middle of the viewport. Its reference crop is 1727 by 253 pixels; preserve that aspect ratio. Position the wordmark's left at 5.4167% of viewport width, width at 89.9479%, vertical center at approximately 50.1058% of viewport height. The extracted wordmark image preserves the source letterforms and spacing; do not approximate it with a different font.

At top left, retain the small gray “Design ©26” label and the two-line copy “Where the stale ideas are brushed” / “under a carpet.” Below, place a compact black pill button labelled “START A PROJECT” with the white source chevron at the right. At top right, stack Main, Story and Enquire, each with a tiny muted gray rounded dash. Use Arial/Helvetica for the small interface text. Anchor Browse with a short dash at bottom left and “Roam to unveil” at bottom right. Maintain proportional corner spacing and mobile readability.

## Live ink interaction

Render a real, pointer-driven WebGL 2 pigment mask over the entire canvas. The underlying macro photographic texture has electric ultramarine and cobalt on the left, violet and hot magenta in the center, and vermilion/orange/golden yellow on the right. It must have rich dimensional pigment folds and internal turbulence, not a flat rainbow gradient. Use the supplied texture and embedded data rather than generating a replacement when an identical implementation result is required.

Pointer movement continuously injects a soft capsule-shaped stroke into a low-resolution ping-pong density field. The field advects with smoothly animated multiscale noise, gradually decays and erodes after the pointer stops. Stroke thickness responds to velocity. A thresholded turbulent contour creates an irregular, liquid-like edge. Add a subtle gray-lilac residual halo and soft edge shading. Spawn a small number of independent, seeded droplets around fast motion, with drift, mild gravity and shrinking lifetimes.

Composite the CRAFTLINE glyph mask with the pigment mask in the final shader. Letters must stay black outside pigment, become white within pigment, and soften to gray through the residual halo. Do not cover the wordmark with a simple image rectangle. The reveal must follow the pointer trail continuously and correctly cross the letters. Texture flow, mask flow, droplets and fade remain animated.

Keep pointer painting separate from navigation buttons and form controls. On touch devices, support dragging over the canvas. Respect reduced-motion preferences. Cap device pixel ratio at 1.5 and the density simulation width at 650 pixels. Space toggles the automatic demonstration, and Escape clears the ink and closes overlays. The optional ?demo=1 URL starts a scripted interaction demonstration; the default page waits for real pointer movement.

## Working controls

Main returns to the canvas and clears the stroke. Story opens a compact monochrome studio panel. Enquire and Start a project open the same brief form. Browse opens three design-direction choices. Preserve the clean reference screen while these panels are closed. Close buttons, Escape and trapped keyboard focus must work. The brief form validates name, email and project text, then downloads a local text file; it does not send email or store personal data. These panel contents complete interactions that were not shown in the source video, so they are not presented as copied original content.

## Delivery

Provide a self-contained static entry point that works after ZIP extraction, original web assets, readable motion/interface sources, README, this prompt, actual browser screenshots and a compact six-second muted MP4 preview. Retain the inline texture data so local file opening has no external image request requirement. No backend, paid service, secret, external runtime CDN or production email integration is needed.

The original source website and original ink texture were not supplied. This version recreates the visible layout and interaction using a source-derived wordmark and a regenerated pigment material. Individual fluid shapes and pigment folds will not match every video frame; do not claim original-source or pixel-identical reproduction.
