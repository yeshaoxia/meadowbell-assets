# SeamSites — Heroic Universe / Motion III

Copy this brief into a frontend coding assistant. Use the linked source files and actual artwork for close reproduction. Text-only regeneration on different AI platforms is not deterministic. If your platform cannot open links, upload the downloaded project instead.

## Build the experience

Create a premium fullscreen cinematic landing page for **SeamSites**, introducing two original science-fantasy characters: **Vesper**, a seated graphite-and-silver ranger with a vertical violet visor, and **Aureon**, a standing crimson-and-brass mechanical knight with an ivory faceplate and amber collar lights. Retain the selected character designs. Use the exact implementation below as the reference, including its independent image layers and motion system. Deliver runnable HTML/CSS/JavaScript and local assets; do not substitute a static mockup.

## Immutable code, media and reference screenshots

All URLs below identify the existing snapshot `54f1d9778a10dc78a17109ce4b419281651070ce`. Download each file to the matching relative path.

- [index.html](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/index.html)
- [style.css](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/style.css)
- [motion-v2.css](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/motion-v2.css)
- [app.js](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/app.js)
- [motion-v2.js](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/motion-v2.js)
- [assets/stage-v2.webp](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/stage-v2.webp)
- [assets/characters-v2.webp](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/characters-v2.webp)
- [assets/layers-data.js](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/layers-data.js)
- [assets/hero-duo.webp](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/hero-duo.webp)
- [assets/hero-original.png](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/hero-original.png)
- [assets/display.woff2](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/display.woff2)
- [assets/font-license.txt](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/font-license.txt)
- [assets/favicon.svg](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/favicon.svg)
- [assets/demo-mini.mp4](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/assets/demo-mini.mp4)
- [previews/desktop-v3.webp](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/previews/desktop-v3.webp)
- [previews/menu-v2.webp](https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/54f1d9778a10dc78a17109ce4b419281651070ce/designs/heroic-universe/previews/menu-v2.webp)

The desktop and menu screenshots show the actual implemented interface. The MP4 is a small rendered preview, not the full-resolution background. The original composite WebP remains the visual fallback. Keep the transparent character layer's alpha channel intact. Load assets/layers-data.js before motion-v2.js and app.js to support offline file opening.

## Layout, typography and copy

Use a single fullscreen, burgundy/crimson stage with black marble plinths and gold veins. The two full-body characters occupy the right half at 1280×720. Preserve negative space on the left, cream and champagne typography, restrained fine borders and a cinematic dark gradient behind the copy. Use the local Barlow Condensed display font with Arial for small interface text; retain its bundled license.

Header: geometric stacked mark, **SeamSites®**, centered **The heroes 02 / The story / Our universe ↗** navigation, and a framed two-line menu control. Keep navigation clear of the standing knight's helmet.

Main heading: **BUILT TO / BE HEROIC.** Condensed, approximately 109px at 1280px width, 0.88 line height, tight spacing; HEROIC. is champagne. Eyebrow: **AN ORIGINAL SEAMSITES UNIVERSE / VOL. 01**. Supporting copy: **Extraordinary is never an accident. / Meet the ones who were made for more.**

Primary CTA: **Explore the heroes ↗**. Secondary play control: **Enter the moment / THE LIVING PORTRAIT**. Add a restrained hover light pass and an arrow that lifts diagonally.

Lower-right caption defaults to **THE ORIGINALS / 001**, **Different by design.**, **Two worlds. One extraordinary alliance.** Footer: status dot and **UNIVERSE ONLINE**, the three selectors **00 The alliance / 01 Vesper / 02 Aureon**, and a motion toggle. Include a fine interaction hint: **MOVE TO EXPLORE / CLICK TO AWAKEN**. Keep optional edition details hidden at short heights so they never collide with the footer.

## Preserve the character artwork exactly

Keep both figures as undeformed, stationary artwork. Remove all local vertex displacement, joint rotation masks, body bending, cape stretching, pointer-driven head turns, camera following and simulated arm raises. Use one fixed cover transform for the stage and transparent foreground layer. Render each layer as a six-vertex quad; character geometry must not depend on time, hover, pointer or selected hero.

This revision deliberately preserves the original silhouettes. It does not provide limb animation. Genuine expressive gestures require a real animated video or a rigged three-dimensional asset; do not fake those gestures by warping the supplied still image. Keep movement in the lighting, haze, particles and interface instead.

Use restrained violet and amber light breathing. Hover adds a soft continuous lighting response, with no neon silhouette tracing or wrist orbit graphics. Selection may brighten one signature and dim the other slightly, without moving the figures or zooming the scene.

## Smooth, restrained pointer response and lighter mist

Use the native mouse cursor. Remove the duplicate reticle, scan label, pointer-following camera and abrupt particle repulsion. Do not visually drag the scene behind the pointer.

Pointer events only update a target position and continuous distance-based hero hover strengths. In the animation loop, use frame-time-based exponential smoothing: approximately 90ms position response, separately smoothed velocity capped to 0.35 normalized units per second, and gentle hover easing. Derive velocity from the eased position per elapsed frame time rather than event frequency. This avoids different behavior on different mice.

Use two mist passes, behind and in front of the characters, with a cheaper three-octave domain-warped field. The pointer gently influences its local flow; do not punch moving holes in the smoke. Keep faces and text clear. Limit the local force to a small perturbation. Use 48 rising embers with only a few pixels of smoothed pointer drift, not jumping scatter effects.

Clicking the scene produces a restrained energy-light response and a low-opacity ripple. Cap simultaneous ripples. Remove the floating wrist rings and strong edge outlines. Keep energy lighting soft.

Cap canvas rendering pixel ratio at 1.2 and target at most 60 render updates per second. Cache uniform locations. Pause all canvas simulation when requested and while the document is hidden. Respect initial prefers-reduced-motion. These are performance controls, not a guarantee of 60fps on every device.

## Redesign the hero selectors and transitions

Build a framed segmented control with one smoothly sliding active indicator; measure each button so the indicator remains aligned on resize. Change its warm or violet material according to the selected hero. Update aria-pressed and the live character caption.

On selection, move three staggered diagonal shutter/light blades across the stage, trigger a short energy-light response, ease the selected lighting, and change the caption with a short downward blur and re-entry. Vesper uses a violet signature; Aureon uses an amber signature. Repeated selection replays the restrained lighting response. Clear obsolete caption timers during fast clicks so the interface settles to the last selected hero.

## Distinct navigation experiences

Do not route every navigation item into the same generic centered modal.

- **Menu:** a fullscreen orbital navigation chamber. Desktop left half is dark editorial navigation, titled **CHOOSE / YOUR ORBIT.**, with three large numbered destinations and descriptive sublabels. The right half is a character composition, fine orbital lines, **TWO FORCES. / ONE HORIZON.**, and restrained archive labels. Reveal the chamber vertically, stagger the navigation rows, and animate the right-hand character image subtly. The menu has a clear RETURN/close action.
- **The heroes / Explore the heroes:** a full-height right-hand character archive drawer. Use two distinct numbered dossiers, large VESPER/AUREON names, short character profiles and small visual energy bars. Selecting a dossier closes the archive and activates its hero. The drawer slides horizontally rather than appearing as a centered card.
- **The story:** a wide bottom panoramic panel, with **ONE CHOICE. / EVERYTHING CHANGES.** and three chapters along a timeline: **Two strangers. / A common pulse. / Forward. Together.** Give it a vertical reveal. On phones, turn the horizontal timeline into a vertical sequence.
- **Our universe:** a separate centered editorial studio panel, headed **WORLDS, / WITH FEELING.**, with a concise original-universe introduction and three experience notes. Use a restrained scale/focus entrance and a different layout from the dossiers and story.
- **Enter the moment:** hide the normal interface to show the live portrait. Retain **Two silhouettes. Infinite possibility.** and **Return to experience ↗**. Escape returns to the interface. This is a live in-page experience, not an external video link.

Use native accessible dialogs with labelled headings, real buttons, keyboard focus, Escape and explicit close controls. Animate closing before removing a dialog, clear stale close timers, and keep aria-expanded synchronized. A hidden cinematic return control must not remain keyboard-focusable.

## Responsive behavior and deliverables

At 390×844, preserve a dramatic crop toward the characters, readable gradient-backed copy, the large condensed headline, a usable fullscreen menu and selectors on their own footer row. Hide desktop navigation, retain the native cursor, stack the studio content and make the dossier drawer full width. Allow scrolling on short screens instead of clipping controls.

Deliver all runtime source and local media in a simple project directory: index.html, style.css, motion-v2.css, app.js, motion-v2.js, README.md, prompt.md, download.zip, one assets/ directory, and previews/ only for actual screenshots. Keep the original composite artwork for reference. Provide a six-second 640×360, 24fps silent H.264 fast-start gallery MP4; the supplied Motion III preview is approximately 114 KB.

## Artwork generation provenance

The two new layers were edited with the built-in image generation tool from the original composite. Background-plate prompt: remove both figures, reconstruct the occluded black marble plinths and keep the exact crimson studio composition, perspective, lighting and empty left half. Foreground prompt: retain both figures at their original pixel positions, scale, poses and lighting, remove all stone, floor, shadows, haze and particles, and produce genuine transparent alpha around the complete characters. These are recorded production instructions, not a guarantee that rerunning image generation will reproduce identical pixels. Use the selected layer URLs to preserve this design.
