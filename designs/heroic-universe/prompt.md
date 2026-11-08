# SeamSites — Heroic Universe / English Recreation Prompt

Copy the brief below into a frontend coding assistant. For the closest result, supply the linked reference code and use the exact provided artwork. Text alone cannot guarantee identical output from different AI platforms; some platforms cannot open external links, so upload the downloaded files in that case.

## Build brief

Build a premium, cinematic, fullscreen single-viewport landing page for **SeamSites**, titled **Heroic Universe**. It introduces two original science-fantasy characters: **Vesper**, a seated black-and-silver interstellar ranger with a violet vertical visor, and **Aureon**, a standing crimson-and-antique-brass mechanical knight with an ivory faceplate and amber lights. This is an independent fictional universe. Do not substitute existing movie characters or regenerate the selected artwork.

Use the actual assets and reference implementation below. Reproduce their composition, motion, typography and responsive behavior. A runnable HTML/CSS/JavaScript implementation is provided; adapt to another framework only if required, preserving the same result.

### Immutable source and media

All owned links are pinned to the existing snapshot `77406255f505d9f2b64273562e1a225666d9ff27`.

- [HTML reference](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/index.html)
- [CSS reference](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/style.css)
- [JavaScript and animation reference](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/app.js)
- [Selected hero artwork, WebP](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/hero-duo.webp)
- [Original full-quality PNG](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/hero-original.png)
- [Local display font, Barlow Condensed](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/display.woff2)
- [Font license](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/font-license.txt)
- [Favicon](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/favicon.svg)
- [Portable portrait data script](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/portrait-data.js)
- [Six-second rendered MP4 reference](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/77406255f505d9f2b64273562e1a225666d9ff27/designs/heroic-universe/assets/demo-mini.mp4)

Download these files into the matching local paths. The HTML expects `style.css`, `app.js` and one `assets/` directory. Keep local assets in the deliverable so it runs without a remote CDN. Load the portrait data script before app.js; it supports local-file texture loading. The supplied WebP has SHA-256 `9fd3af51b1327bd570d47b05e5b80c50f352d9688d6388bcc2a49fa228cdae01`.

### Art direction and layout

- Burgundy/crimson cyclorama, dark stone plinths, pearl-white and champagne typography. Use the supplied wide artwork at cover scale, with both full figures on the right at a 1280×720 desktop viewport. Leave the left side for text. Preserve the artwork's lighting, shadows and intricate surfaces.
- Header: a thin stacked geometric mark and **SeamSites®** on the left, restrained centered navigation **The heroes 02 / The story / Our universe ↗**, and a two-line menu button on the right. Keep desktop navigation clear of the standing character's helmet.
- Main copy sits approximately 6% from the left, 26–28% from the top. Eyebrow: **AN ORIGINAL SEAMSITES UNIVERSE**, accompanied by a tiny amber dot and **VOL. 01**.
- Large condensed two-line title: **BUILT TO / BE HEROIC.** Set it in the provided display font, around 109px at 1280px viewport width, 0.88 line height and tight spacing. “HEROIC.” is warm champagne. Keep headings as crisp, selectable HTML text.
- Supporting copy: **Extraordinary is never an accident. / Meet the ones who were made for more.**
- Primary cream rectangular CTA: **Explore the heroes ↗**. Secondary circular play control: **Enter the moment**, with a small **THE LIVING PORTRAIT** caption.
- Lower-right live caption defaults to **THE ORIGINALS / 001**, **Different by design.**, **Two worlds. One extraordinary alliance.**
- Footer has a fine divider, green status dot and **UNIVERSE ONLINE**, three character selectors **00 The alliance / 01 Vesper / 02 Aureon**, and a motion toggle. At spacious heights include **01 — 02 / FORGED IN FIRE. DEFINED BY CHOICE.** Hide that detail when it would collide with the footer.

### Real-time motion

Use the supplied shader and canvas implementation to preserve the actual result. This is procedural motion applied to one still image, not a rigged 3D model or a generated character video.

1. Render the portrait in a WebGL full-screen quad with aspect-correct cover cropping. On narrow screens anchor the crop toward the characters at x≈0.73. Limit pixel ratio to 1.75.
2. Apply tiny elliptical local texture displacements to the ranger's upper body/head and the knight's upper body/head. Breathing and head settling must stay subtle, with stone plinths stable. Avoid bending limbs or animating the whole image as if it were a cardboard cutout.
3. Pulse the ranger's violet visor and the knight's paired amber collar lights softly. Add a restrained optical push and eased pointer parallax.
4. Independently animate layered low red haze and 66 seeded, softly glowing rising ember particles. Use restrained screen blending. Keep copy readable.
5. Selecting Vesper eases the atmosphere toward violet; selecting Aureon shifts it toward amber. Animate a soft light sweep across the scene and update the active button, hero name and description. Do not claim the selector loads another character model; both figures remain in the composition.
6. The pause button freezes all canvas animation. Respect the initial prefers-reduced-motion setting, and suspend animation updates when the document is hidden. Preserve a static artwork fallback if WebGL is unavailable.

### Working interactions and accessibility

- **Explore the heroes** and **The heroes** open an accessible modal containing two original character profiles and working **View Vesper / View Aureon** actions. These close the modal and select the corresponding hero.
- **The story** opens a short original story about a protector and an explorer choosing to cross an unknown threshold together.
- **Our universe** opens a concise explanation of the original SeamSites character study and the available interactions.
- The menu button opens a styled navigation modal with the same working destinations. Support close buttons, Escape, focus management and clicking outside the dialog.
- **Enter the moment** hides the navigation, copy and controls to reveal the living portrait. Show **Two silhouettes. Infinite possibility.** and a **Return to experience ↗** control; Escape returns too. This is an in-page cinematic mode, not a fake video link.
- All interactive elements must be real buttons/links with visible keyboard focus. Keep selector aria-pressed and menu aria-expanded in sync. The hidden cinematic return control must not remain keyboard-focusable.

### Responsive and delivery

At phone widths around 390×844, retain the full-height atmospheric composition, crop the artwork toward the figures, add sufficient dark gradient behind the text, hide desktop navigation, keep the menu usable, size the heading at roughly 16vw, and arrange the bottom selectors in their own row. Support short windows through a minimum viewport height and ordinary page scrolling rather than clipping controls.

Deliver the complete runnable source and local assets. Keep a simple folder: index.html, style.css, app.js, prompt.md, README.md, download.zip and one assets/ directory. Preserve the original image and font license. The gallery preview is a six-second, 640×360, 24fps, silent H.264 MP4 with fast-start; it is a preview, not the full-resolution page background. Use the actual code and image links above for close reproduction rather than promising that the prose alone will generate identical output on every platform.

## Image generation provenance

The selected still was created with the built-in image generation tool using original character designs. Its source prompt requested a cinematic 16:9 crimson studio scene, empty left 45%, a seated black-and-silver ranger with a vertical violet visor, and a standing crimson/brass mechanical knight with an ivory faceplate and paired amber collar lights. Regenerating that description may produce different artwork; use the linked selected asset to match this project.
