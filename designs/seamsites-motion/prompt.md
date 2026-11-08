# SeamSites — Frontend Motion Experience

Copy the English brief below into a coding assistant. For the same rendered result, use the pinned implementation rather than approximating the procedural geometry. A descriptive prompt alone cannot guarantee identical output across generators.

---

Build a polished, full-viewport interactive frontend design showcase named **SeamSites**. Use the pinned reference implementation and assets below as the exact visual and behavioral source of truth. Download the HTML and particle generator unchanged into the specified paths, then run them as a static website. Do not replace the WebGL point clouds with icons, image slides, emoji, CSS silhouettes or prerecorded video.

## Exact implementation and assets

- HTML, CSS, WebGL shaders and interaction controller: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/index.html
- Deterministic six-shape point cloud generator (save as assets/particle-shapes.js): https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/assets/particle-shapes.js
- Original generated silk/light-field texture: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/assets/silk-field.webp
- Desktop composition reference: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/previews/desktop.png
- Butterfly composition reference: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/previews/butterfly.png
- Ringed planet composition reference: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/previews/planet.png
- Mobile composition reference: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/501d78aa88f44408730d827795c6dad106b2af56/designs/seamsites-motion/previews/mobile.png

The HTML already embeds the texture as a WebP data URI for reliable offline rendering. Retain that embedding. The texture file is also supplied for asset reuse. All links above are pinned to source commit 501d78aa88f44408730d827795c6dad106b2af56.

## Art direction

Use a near-black cinematic canvas with subtly tinted atmosphere. Place the small cream SeamSites. wordmark at top left, a colored status dot and the active chapter plus “/ Frontend design” at the top center, and Pause motion at top right. Add a compact vertical 00–05 chapter selector at the right edge; reveal the selected chapter name, highlight its numeral and dot. Avoid panels and heavy card interfaces.

Center a large luminous particle sculpture in the upper half. Use 16,000 seeded, spatial particles per sculpture, additive soft circular sprites with varying brightness, fine drift, restrained pointer parallax and visible depth. Keep particle sculptures separated from the title below. Build a real branching tree volume with trunk, roots, three-dimensional limbs and foliage; continuously rotate it around its vertical axis at about 0.22 radians per second. Other sculptures gently oscillate to stay recognizable. The mature oak uses a curved tapering trunk, buttress roots, successively thinner boughs, and rounded three-dimensional leaf clusters; keep the branch silhouette visible through natural gaps. The butterfly has four distinct lobed wings, slim body, antennae and a gentle independent wing flutter.

Behind the particles, render layered translucent silk-like light ribbons flowing horizontally through the middle and lower canvas. Animate the texture coordinates and brightness continuously with WebGL. On every chapter change, smoothly blend the atmospheric tint and ribbons, add a radial travelling light wave, a brief central flare and a swirl of distortion, and scatter/reassemble the point cloud into the destination form. Use a roughly 1.1-second smoothstep transition; fade and lightly blur the old title into the new title. Rapid clicks should queue the latest destination cleanly.

## Six chapters and exact headlines

1. **00 Foundations — amber/gold — rotating tree.** Headline: “Great interfaces.” / “Deep roots.” Description: “Beautiful frontends grow from strong foundations. We bring structure, visual design and expressive code together.”
2. **01 Craft — ice blue/cyan — faceted diamond.** Headline: “Every detail.” / “Precisely crafted.” A crown, tabletop and pointed pavilion must read as a cut gemstone.
3. **02 Motion — rose pink — butterfly.** Headline: “Make interaction” / “feel alive.” Description: “Fluid transitions and thoughtful feedback turn everyday actions into memorable experiences.”
4. **03 Systems — periwinkle/violet — spiral galaxy.** Headline: “One system.” / “Infinite possibilities.” Four spiral arms, an inclined disk and a luminous core.
5. **04 Flow — emerald/mint — three-dimensional torus knot.** Headline: “Designed to flow.” / “Built to perform.” Description: “Smooth rendering, accessible controls and responsive layouts. Performance is part of the design.”
6. **05 Horizons — warm orange — ringed planet.** Headline: “New horizons.” / “Built for the web.” Description: “Explore new possibilities through expressive interfaces, spatial design and thoughtful frontend engineering.” The spherical body has fine latitude variation and two separated, inclined particle ring bands. Gently oscillate the whole planet so the rings remain legible. Show an Explore again control returning to the tree.

Use large, light-weight, tightly tracked sans-serif headlines in two lines near the lower third; first line warm cream, second line the chapter accent. Keep supporting text small and muted beneath. Put Share at bottom left and “Design & code by SeamSites” at bottom right. The opening scene includes a discreet scroll-to-explore hint.

## Interaction and delivery

Support clicking all six chapter controls, mouse wheel navigation, up/down arrow keys, Home to return to the tree, touch swipes, space to pause/resume, and the visible pause toggle. Respect prefers-reduced-motion on initial load. Keep aria labels, pressed state and keyboard focus visible. Make layout responsive at desktop and 390px phone width without cutting off headlines, navigation or the sculpture. Cap device pixel ratio at 1.5 for rendering cost. Use plain HTML/CSS/JavaScript with WebGL 2 and no external runtime dependency. Deliver index.html, assets/particle-shapes.js, assets/silk-field.webp, a README, this prompt and a complete ZIP that works after extraction.

Reuse the reference implementation when identical output is required. This is the customized SeamSites frontend concept; it is not a pixel-perfect reconstruction claim for the original Saffron video.


## Lightweight preview standard

Actual working-page preview: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/66eb10bc8d84a3d39f09d82b2ebbb54b5aaf5e51/designs/seamsites-motion/assets/demo-mini.mp4

Keep the preview about six seconds, 640×360, 24 fps, muted H.264 with fast-start; this verified export is 216,878 bytes (about 217 KB). Capture continuous live-rendered frames or use an existing continuous high-quality source; do not merely increase the declared frame rate of a stuttering capture. Preserve the original aspect ratio. Reuse this immutable video link when referencing the actual project preview. The extracted offline ZIP includes the same MP4 locally.
