# SeamSites — Angel / Devil V2: exact recreation prompt

Create the complete responsive interactive portfolio shown in the linked V2 visual targets. Preserve the existing centered angel/devil local cursor reveal, and use the new pearl-glass navigation, rose-cloud architectural environment and distinct living effects described below.

## Reuse the exact implementation and original assets

These are immutable Git commit URLs. The most reliable reproduction is to download the HTML, production JS/CSS and embedded-assets script verbatim, preserve their relative paths and open index.html. The bundle includes React and official Heroicons and needs no backend. For another framework, port the readable sources without changing image registration or behavior.

- Portable entry point: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/index.html
- Complete production JavaScript: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/app.js
- Complete stylesheet: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/app.css
- Embedded offline image data: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/inline-assets.js
- Registered angel, transparent WebP, 1086 × 1448: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/angel.webp
- Registered devil, transparent WebP, 1086 × 1448: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/devil.webp
- Photographic pearl-arch/cloud background, 1448 × 1086: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/atelier-sky-v2.webp
- Real transparent feather sprite, 512 × 512: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/feather-v2.webp
- Readable React interface: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/interface.source.jsx
- Readable reveal renderer: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/reveal-engine.source.js
- Readable atmosphere animation: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/atmosphere.source.js
- Readable CSS: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/assets/styles.source.css
- Desktop visual truth, 1280 × 944: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/previews/desktop.png
- Actual reveal state: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/previews/reveal.png
- Mobile visual truth, 390 × 844: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/previews/mobile.png
- Actual six-second browser page recording: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/851077bb2cfe3d048ed3cd75e4ca8b92e3b24e47/designs/angel-devil/assets/demo-mini.mp4
- Original portrait, background and feather generation prompts: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/14e1ceea0cb27d757f283dc51dc3e7cd59abf3b5/designs/angel-devil/asset-prompts.md

The earlier interaction inspiration was the user-supplied Pink Rider video: https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/pink-rider-portfolio.mp4 . For this V2, the linked screenshots and implementation take precedence over that earlier pink flat-background layout. Do not embed the video as a replacement for a working page.

## Visual direction

An airy luxury celestial atelier: pearl, warm ivory, aged gold, rose clouds, deep plum and restrained burgundy. No generic dashboard, unrelated cards or new content sections on the landing view. One full-viewport stage, with the original photographic angel centered in front of two huge opposite-scrolling lines of typography. The angel has detailed ivory feathers, platinum hair, a fine gold halo and pearl-silver embroidered couture. Her aligned devil counterpart has wine-black hair, ridged obsidian horns, dark raven feathers and garnet/oxblood armor.

Use the supplied photographic environment behind the figure: monumental pearlescent arches near the outer edges, rose clouds along the bottom, a clear luminous center and soft directional light from the upper left. Fill the stage with object-fit:cover. Slowly pan/scale the real background image over 25 seconds, only a few percent; add a subtle seven-second light breathing effect. The environment is not a fully simulated 3D scene. At mobile widths deliberately move the crop to 18% horizontal position to show one arch; never stretch or squash the image.

Keep the existing portrait geometry unchanged. Desktop portrait rectangle is 94% stage height, 110% viewport width, left -5%, bottom -1px. Both identities use the same contain scale and bottom alignment. Mobile rectangle is 83% stage height, 195% viewport width, left -47.5%, bottom 4%. Reuse both actual portraits, never regenerate them independently or recenter one.

Marquees remain behind the portrait near 32.9% viewport height: “SOFT SOUL. WILD SPIRIT.” and “STAY ANGEL. PLAY DEVIL.”, each repeated three times. Neutral Arial/Helvetica, regular weight, huge clamp(75px,9.3vw,180px) type, line-height 1.13, letter-spacing -.065em. 40s and 48s opposite linear scrolling, exactly one repeated phrase per cycle. V2 tones the first row to muted lilac with .43 opacity and the second to #40313d at .78 opacity. Preserve the supplied responsive overrides.

## Redesigned menus and buttons

Place the header roughly 3% from left/right and 3.8% from top. Left: SeamSites wordmark in dark plum, with tiny widely tracked “THE DUALITY ATELIER” underneath. The official Sparkles outline icon sits in a circular ivory-pearl medallion with a restrained aged-gold border, inner highlight and frosted surface. Do not use the old solid pink rounded square.

Right: a single translucent ivory capsule with thin light border, restrained elevation and 24px backdrop blur. Inside it are “01 Visions”, “02 Atelier”, “03 Journal”. Numerals are small and warm gold; labels are neutral 16px text at the 1280px reference. Each has its own subtle warm-tinted hover surface and rises only 1px. The primary CTA reads “Let’s create”, deep plum with a fine warm metallic border and an ivory round arrow container. Use official ArrowUpRight and menu/close library icons, not handmade SVG substitutes.

Footer uses matching ivory-glass pills with small aged-gold dot. Left toggles demonstration and reads “Move your cursor to meet your other side”. Right reads “The Duality Study · 01” in a refined italic Georgia serif. On mobile the hint becomes “Touch to reveal your other side”. Keep the compact menu and CTA together in an ivory capsule; every section remains accessible.

Dialog style follows the same direction: warm ivory frosted surface, refined Georgia title, small tracked gold eyebrow, circular close control, soft plum backdrop blur. Retain all working sections and the local-only project brief form. Do not add backend email behavior or imply that a message has been sent.

## Registered local reveal

Default to the angel. Painting the pointer reveals the devil only under a transient, organically contracting brush trail. This is not a whole-image hover swap or one permanent circular spotlight.

Follow the supplied Canvas 2D engine. Interpolate points at 12px spacing; cap history at 420. Use a cached solid-center brush with a narrow feathered edge. Radius max(42,min(124,portraitHeight*.092)) CSS px; points retain a brief 140ms hold and contract with smoothstep over about 1750ms. Keep the revealed interiors fully opaque; do not turn dark armor into a gray ghost.

Composite by removing the angel within the alpha mask and inserting the registered devil there. Add premultiplied contributions correctly so feathered boundaries do not create a white seam. A revealed horn must replace the relevant halo segment. Source alpha and crop must remain aligned through resizing.

Ignore paint events on links, buttons, dialogs and fields. Disable stage text selection. Pointer leave resets interpolation. Space or the footer hint toggles an automatic path through face, wings and bodice; Escape stops and restores; ?demo=1 starts automatic playback. Show an accurate aria-pressed and hint label. Touch drag must work.

## Different angel and devil effects

Angel atmosphere: warm halo bloom tied to the halo position, sparse floating gold-white motes, occasional fine vertical/horizontal glints and a few slowly drifting, rotating real feather sprites. Desktop uses around 42 motes and six feathers; mobile around 22 motes and three feathers. Vary speed, scale, alpha and slight depth. Use the real feather texture and preserve its transparency. Keep facial features and craftsmanship readable; avoid dense confetti.

Devil effect: inside the revealed portrait add a restrained warm burgundy/ember illumination pulse, using source-atop so it cannot fill transparent regions. Sample opaque character pixels to decide where sparks originate. Track up to 35 recent hits; emit glowing orange-red embers along valid hits for 850ms after pointer passage. Sparks rise with varied velocity, live about 1.2–2 seconds and fade naturally. Cap them at 90. Do not emit across blank sky or make the entire page flash red. Use a soft red-orange halo around tiny hot cores, distinct from the angel's cooler gold-white glints.

Atmosphere runs on an independent canvas over the artwork and below interactive navigation, capped at 960 render pixels wide and approximately 30 fps. The portrait renderer remains on-demand when the mask is idle. Respect prefers-reduced-motion: stop background and marquee drift and time-varying ambient motion, while permitting explicit manual reveal. Use the provided atmosphere source for exact timing and positions.

## Behavior and delivery

Keep working Visions, Atelier, Journal and contact dialogs. Atelier shows both full portraits. Visions can launch automatic reveal. The contact form validates name, email and brief and downloads a local text file, with an honest success state; nothing is sent or stored. Native modal focus containment, Escape, return focus, backdrop close and visible keyboard focus are required.

Supply local assets, readable source, portable production files, updated English prompt and a complete ZIP. Use embedded image data so extracting the ZIP and opening index.html works without a server or network. Do not leave runtime references to remote imagery. Provide a real short H.264 fast-start MP4 preview around six seconds.

Verify desktop and mobile layouts, all images, local reveal restoration, halo/horn replacement, gold feathers versus red embers, menus, keyboard controls and local brief behavior. Compare the real page to the linked V2 desktop/mobile targets.

For exact reproduction, preserve the linked original assets and code. A prompt by itself, regenerated images, inaccessible external URLs or differences between AI platforms cannot guarantee identical output.


Preview encoding update: the linked MP4 is six seconds, 640 × 472, 24 fps, H.264 fast-start, about 206 KB. It was re-recorded by compositing the actual live canvas layers with cached static interface layers; all 144 output frames are distinct. Keep a similar balance between visible clarity, smooth motion and web payload size.
