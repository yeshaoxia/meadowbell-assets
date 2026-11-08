# SeamSites — Angel / Devil: recreation prompt

Build a complete, polished, responsive frontend that reproduces the supplied Pink Rider portfolio composition and its transient local cursor-reveal interaction, adapted to an angel and devil dual identity. Brand: **SeamSites**.

## Exact implementation and immutable assets

For the closest result, reuse these existing files rather than drawing substitute characters or inventing a different interaction. Download the files into one local assets directory and preserve their names. The links below are fixed to a concrete Git commit.

- Complete portable HTML: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/index.html
- Production JavaScript: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/app.js
- Production CSS: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/app.css
- Embedded image data for local-file reliability: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/inline-assets.js
- Angel portrait, transparent WebP, 1086 × 1448: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/angel.webp
- Devil portrait, transparent WebP, 1086 × 1448: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/devil.webp
- Readable reveal engine: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/reveal-engine.source.js
- Readable React interface: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/interface.source.jsx
- Readable stylesheet: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/styles.source.css
- Desktop visual target: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/previews/desktop.png
- Actual reveal-state target: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/previews/reveal.png
- Mobile target: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/previews/mobile.png
- Real browser-rendered MP4: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/assets/demo-mini.mp4
- Original image generation/edit prompts: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/edf093a25e50382debf21034f5f7abdc28fcbfac/designs/angel-devil/asset-prompts.md

Use the linked desktop and mobile captures as the visual truth for this adaptation. Original interaction reference supplied by the user: https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/pink-rider-portfolio.mp4 . That video is inspiration only; never embed it as a substitute for the actual interactive webpage.

The most deterministic delivery is to retain the linked HTML, CSS, JS and embedded-assets script verbatim, place them at their original relative paths, and expose the HTML as the entry point. The production JS already includes React and official Heroicons. If a different framework is required, use the readable sources to reproduce the exact behavior and image placement.

## Art direction

A spacious, full-height, pale-pink fashion-editorial stage. No cards, extra headlines, scrolling content sections, heavy shadows, generic gradients, unnecessary particles or invented scenery on the landing view. The hero is a detailed photographic angel centered in front of two huge horizontal scrolling type rows.

The angel and devil are the **same adult woman, same camera, same pose, same image dimensions and same composition**. The angel has natural skin texture, platinum center-parted hair, individually layered ivory feather wings, a slender warm gold halo, fully clothed sculpted ivory couture, silver botanical filigree, pearls and crystal details. The devil has aligned facial landmarks, wine-black hair, elegant ridged obsidian horns, black raven-feather wings with burgundy highlights, oxblood/graphite couture with the corresponding seams and garnet jewels. Refined luxury fashion photography, tactile materials and believable light, never cartoon/game art or a plastic face. Reuse the supplied pair; independent regeneration usually destroys registration.

## Layout and typography

Desktop reference viewport: 1920 × 1416 CSS pixels. The screen is a single fixed-height stage with overflow hidden and a pale pink background #fae9f1. Text uses Arial, Helvetica, sans-serif, with antialiasing. Main foreground #171416, muted large text #cbbbc3, accent #f77eae.

Header: roughly 2.35% left, 2.1% right and 3.2% top. Left logo consists of a 68 × 68 px pink rounded-square container with the official Heroicons Sparkles outline icon in white, followed by SeamSites in a clean 30 px semibold wordmark. About 20 px gap. Right navigation: Visions, Atelier, Journal in muted 28 px text; 36 px gaps; a pink rounded Say hello! button with an official ArrowUpRight outline icon. CTA vertical/horizontal padding about 22/35 px, radius 21 px. Preserve the lighter small-screen variants from the stylesheet.

Background marquee begins at 32.9% viewport height. First row reads “SOFT SOUL. WILD SPIRIT.” repeated three times, muted gray-pink. Second row reads “STAY ANGEL. PLAY DEVIL.” repeated three times, near black. Font size clamp(75px, 9.3vw, 180px), line-height 1.13, letter spacing -.065em. Both rows use an optically light/regular grotesk weight. 12 px gap before the second line. Opposite continuous horizontal motion: 40 seconds and 48 seconds, linear, one third of the repeated string per loop. They stay behind the portrait.

Portrait rectangle: absolute, 94% viewport height, 110% viewport width, left -5%, bottom -1 px. Center both images using identical contain scaling and bottom alignment. Never size the layers independently. This yields the halo near the upper region and torso cropped at the bottom. Wings intentionally broaden the original video's silhouette while the face remains centered. The canvas and image rectangle must coincide.

Footer: left/right aligned with header, bottom 2.9%. Left: small pink status dot and “Move your cursor to meet your other side.” This is a real button toggling automatic demonstration. Right: translucent white pill “Angel / Devil · Edition 01”, opening the Atelier panel. Text about 24 px at reference size.

## Cursor reveal — essential behavior

Default state: show only the angel. Moving the pointer paints a temporary local mask that replaces only the traversed parts with the registered devil. Do not swap the whole picture on hover, use a single permanent round spotlight, apply a generic blur blob, or crossfade the entire character.

Use a Canvas 2D renderer and a separate alpha-mask canvas. Cap device pixel ratio at 1.5. Interpolate pointer samples at roughly 12 CSS px intervals so a fast stroke is continuous. Keep at most 420 recent points. Brush radius max(42, min(124, portraitHeight × .092)) px. Use a cached soft-edge brush with a solid center, approximately 90% solid radius and only a narrow feathered edge.

Each point retains a fully opaque interior while its radius smoothly contracts over about 1750 ms, with an initial 140 ms hold. Use smoothstep-like contraction. The point must not merely fade into a gray translucent ghost. Different-age points naturally create a living, shrinking trail and detached circular remnants. Once all points expire, the angel is fully restored.

Draw the angel into the shared rectangle. Remove its pixels inside the reveal mask using destination-out. Apply the same mask to the devil. Combine premultiplied image contributions additively and restore normal composition. This matters around the halo/horns: revealing a horn must remove the corresponding angel/halo area, and feathered edges must not create a white seam. Preserve transparency rather than baking the pale pink background into the portraits. Use the exact linked engine when possible.

Paint on the overall stage, but exclude buttons, anchors, dialogs and form fields. Disable user selection on the stage so dragging does not select marquee text. Pointer leave resets interpolation. A small pink pointer dot follows actual pointer movement; it is visual feedback, not the whole reveal effect.

Start animation only when the images are loaded. Keep the image bounds invariant through resizing and clear stale point coordinates on resize. Stop the rendering loop after all points expire; do not consume a continuous idle loop for a static portrait.

Touch: dragging across the stage reveals the devil locally. A footer button and Space toggle a hands-free reveal path across face, wings and bodice. Escape stops and clears it. Support ?demo=1 for automatic start. Mirror playback state in the visible hint and aria-pressed. Under prefers-reduced-motion, stop the marquees and shorten mask lifetime; explicit manual demonstration remains available.

## Functional menus and responsive details

Visions opens a native modal with portfolio entries. The current Angel / Devil entry starts automatic reveal and closes the modal. Atelier shows the full angel and devil portraits side by side, with labels “01 — The light within” and “02 — The spark beneath.” Journal contains brief editorial notes about contrast and transient movement. Say hello! opens a labeled, validated name/email/project form. This preview saves a local text project brief and shows an honest success message; do not pretend to send email or store leads.

Native modal focus containment, Escape dismissal, return focus, backdrop dismissal and visible keyboard focus are required. Use the provided copy and interface source for exact panel contents.

At widths up to 540 px, show the SeamSites logo, an accessible compact menu and Say hello! in the header. The compact menu retains all navigation sections. Portrait: 83% stage height, 195% width, left -47.5%, bottom 4%; central face stays visible while wings may crop at the sides. Marquee type is about 77 px and remains behind the portrait. Footer instruction becomes “Touch to reveal your other side” in a small pale pill with good contrast over the couture. Keep the edition pill. At intermediate widths use the supplied stylesheet's 850 px breakpoint. Avoid horizontal document scrolling or controls hidden outside the viewport.

## Delivery and validation

Deliver a complete runnable page with local assets and a complete ZIP. The portable HTML must work by extracting and opening index.html directly. Use inline-assets.js data URLs to avoid local-file Canvas image-origin problems. Keep readable sources as well as the production bundle. No backend is necessary.

Test desktop drag, fading restoration, face/wing/bodice registration, halo/horn replacement, mobile drag, full mobile navigation, automatic playback, Space/Escape, modal focus and local brief download. Compare actual browser screenshots to the linked desktop and mobile targets. Include a compact actual page recording around six seconds, H.264 MP4, about 480 × 354, muted and fast-start for web previews.

The supplied images and code make reproduction much more reliable. A prompt alone, image regeneration, unavailable URL access or platform-specific constraints cannot guarantee an identical result. Preserve the actual assets and implementation when exact appearance is the priority.
