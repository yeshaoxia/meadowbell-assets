# ORBE — Planet Atlas · Orbital Flow Edition — Complete Production Brief

Build this exact experience: a one-screen, non-scrolling, full-viewport exoplanet observatory called **ORBE — Planet Atlas**. Preserve the cinematic composition, precise sci-fi HUD, custom geometric lettering and material fidelity of a high-end interactive art direction website. The centerpiece is Aethra, a fictional blue mineral planet with real 3D terrain shading, a thin cyan atmosphere, a small moon and a broad inclined ice-dust ring system.

Deliver a complete working `index.html` with inline CSS and application JavaScript. Use the supplied artwork and lettering. This is a functional browser experience, not a screenshot displayed as a page. The large hero planet must be a textured Three.js sphere with real-time lighting and rotation. Background artwork is permitted; replacing the planet with a CSS gradient sphere, a low-resolution procedural noise ball or an unrelated stock planet is not.

Page title: `ORBE — Planet Atlas`. Language: `en`. The planet, sector and archive information below are explicitly fictional concept content, not measured astronomical data.

## 1. Authoritative assets and implementation reference

Use the actual assets at these URLs. Do not invent or substitute asset addresses. Read the reference implementation when uncertain about a shader or a glyph; it is the executable counterpart of this brief.

- **Aethra surface albedo, 1774 × 887, 2:1 equirectangular WebP:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/assets/aethra-albedo.webp`
- **Deep-space environment plate, 1536 × 1024, 3:2 WebP:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/assets/deep-field-refined.webp`
- **Exact PLANET ATLAS lettering, SVG:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/assets/planet-atlas-lettering.svg`
- **Exact NEW lettering, SVG:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/assets/new-lettering.svg`
- **Exact WORLDS lettering, SVG:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/assets/worlds-lettering.svg`
- **Editable display glyph paths and advance widths, JSON:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/assets/display-glyphs.json`
- **Working reference HTML, including embedded fonts and shader source:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/index.html`

The albedo is original AI-generated geological artwork. It contains folded blue basalt, pale mineral seams, crater basins and fractured icy deposits. Its dimensions above are the actual delivered dimensions; do not describe it as a 4K image. The supplied background is original generated artwork for this Quiet Observatory edition: blue teal and muted violet nebula wisps with subtle champagne detail at the edges, tiny silver stars and a very dark central area. The untouched PNG source is included in the ZIP; runtime uses the same-size optimized WebP. Its full generation prompt is included in ASSET-PROMPT.en.md. The rings are built as geometry with a deterministic radial dust texture; there is no missing ring photograph, GLB or video dependency.

For WebGL-bound images use `crossOrigin = "anonymous"` before setting `src`. In Three.js use `TextureLoader.setCrossOrigin("anonymous")`. Check load failures. Never leave a blank hero if a texture request fails.

### Runtime

Use the official pinned Three.js r160 classic build, available at:

`https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js`

For the downloadable deliverable, embed this library as an inline classic script and keep its MIT license. Run the scene inside an async IIFE rather than an ES module. Embed the actual WebP asset bytes as `data:image/webp;base64,...` URLs. Fonts are embedded too. The resulting HTML must work when double-clicked from an extracted ZIP, with no HTTP server and no internet connection. Do not leave local cross-origin texture requests or remote module imports in the portable HTML. Keep separate source assets in the ZIP for editing.

### Fonts

All small interface text uses **Orbe Mono**. The large title and bottom words are SVG geometry, not font approximations.

Embed the following two WOFF2 files as base64 in the delivered HTML, under the same family name `Orbe Mono`:

1. Share Tech Mono 400 Latin: `https://fonts.gstatic.com/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2`
2. Share Tech 400 Latin, declared second with `unicode-range: U+0030`: `https://fonts.gstatic.com/s/sharetech/v23/7cHtv4Uyi5K0OeZ7bohU8H0JmA.woff2`

Both faces: `font-display: block`. Stack: `"Orbe Mono", ui-monospace, monospace`. The second face changes the digit zero to an unslashed zero while preserving the rest of the mono font. Embedded font declarations can be copied from the reference HTML.

### Palette

Ink `#f3f6ff`; active cyan `#5ef3ff`; bezel/background `#030409`; secondary interface text `#a5bdd2`; geological material tint `#c3d5ee`. The environment supplies its own blue and violet tones. Avoid extra saturated colors or oversized glow effects.

## 2. Reference coordinates, responsive units and layers

The master artwork frame is **2048 × 1360**. Frame x runs right; frame y runs downward. Treat numbers marked `u` as pinned interface frame units, and unmarked 3D coordinates as master-frame units.

Two independent layouts are essential:

**Cover frame:** a centered 2048 × 1360 box scaled by `max(viewportWidth / 2048, viewportHeight / 1360)`. It covers without letterboxing. The environment and 3D canvas share this framing on desktop. Do not stretch the sphere into an ellipse.

**Pinned frame:** full-viewport interface with `u = min(viewportWidth / 2048, viewportHeight / 1150)`. Headline attaches to the top, bottom words and CTA to the bottom, side copy to the vertical center. Interface elements are not cropped with the artwork.

The HUD uses its own `h = min(W/2048, H/1360)`; on phones use `W/860`.

Layer order, back to front:

1. Dark background surface.
2. The supplied environment image and its WebGL refraction canvas.
3. The oversized PLANET ATLAS SVG marquee.
4. One transparent Three.js canvas containing the planet, atmosphere, rings, moon and orbital line. Occlusion inside this canvas is resolved by depth, not separate HTML z-index tricks.
5. Side information, NEW / WORLDS, planet identifier and CTA.
6. Viewport-pinned HUD and its controls.
7. An accessible native dialog, only while opened.

Art layers use `pointer-events: none`; actual controls use `pointer-events: auto`. A visually hidden h1 reads `Planet Atlas — explore Aethra with ORBE`.

## 3. Composition and planet placement

Use an orthographic camera: left 0, right 2048, top 0, bottom −1360, near 1, far 8000. Camera z = 2600. A scene group is centered at `(1024, −730, 0)`.

The main sphere radius is **452**. At rest its master-frame silhouette is x 572–1476, y 278–1182. It overlaps the lower part of the headline. Keep its left mineral terrain illuminated and its right hemisphere substantially darker. The bottom of the planet sits behind the identifier and above the CTA.

The ring's outer diameter is 1620 frame units; it reaches well beyond the sphere without covering the side copy. Its major axis rises from lower left to upper right. Its front half crosses the lower planet; its far half disappears behind the planet. This orientation is part of the design, not an optional flourish.

## 4. Renderer, geology and light

Renderer: transparent canvas, antialiasing enabled, `powerPreference: "high-performance"`, `SRGBColorSpace`, `ACESFilmicToneMapping`, exposure **1.06**, clear alpha zero. Cap pixel ratio at 1.5 on desktop and 1.25 on mobile.

Sphere geometry: radius 452, 192 width segments, 128 height segments. Initial Euler rotation `(0.08, 0.72, −0.08)`.

Load the exact supplied albedo. Set color space to sRGB, longitude wrap to RepeatWrapping, anisotropy to `min(8, maximumSupportedAnisotropy)`. Clone the texture for the bump channel and set that clone to NoColorSpace. Do not apply sRGB decoding to height data.

Use MeshPhysicalMaterial:

- `map`: supplied albedo;
- `bumpMap`: the linear-data clone;
- `bumpScale`: **0.72** frame units;
- `color`: `#c3d5ee`;
- `roughness`: **0.68**;
- `metalness`: **0.09**;
- `clearcoat`: **0.20**;
- `clearcoatRoughness`: **0.55**;
- `emissive`: `#203352`;
- `emissiveIntensity`: **0.022**.

After sampling the albedo, compute mineral luminance `dot(diffuseColor.rgb,vec3(.2126,.7152,.0722))`. Mix the sampled color between multipliers(.78,.98,1.16) and(1.10,1.08,1.06), using `smoothstep(.10,.48,mineral)`. This preserves fine texture while making shadowed mineral regions cool and illuminated ice subtly warm.

This material should read as basalt and mineral ice. Avoid polished plastic, molten lava or chrome. Keep crater rims and folded strata visible at normal desktop viewing distance. Never replace the supplied map with a few sine waves or a coarse generated noise texture.

Lighting:

- Hemisphere light: sky `#b4d9ff`, ground `#191529`, intensity **0.24**.
- Main directional: `#fff0df`, intensity **3.35**; normalized sun vector **normalize(−1, 0.55, 0.65)**; place the light at `center + sun × 2000`, targeting the planet center.
- Rear violet directional: `#7190ff`, intensity **0.72**, position `(1900, −400, −900)`, targeting the planet center.

Preserve the terminator. Increasing ambient light until every crater is equally visible ruins the spherical form. Do not use a white page-wide bloom pass to hide weak lighting.

### Rings casting a shadow on the sphere

Patch the physical material with world position varying `vWorld`. Let `N` be the ring plane's world normal and `S` the normalized sun direction. From a point on the sphere, intersect the sunward ray with the ring plane:

`travel = -dot(vWorld - center, N) / dot(S, N)`

`hit = vWorld - center + S * travel`

`radius = length(hit)`

Only positive travel can shadow the surface. The annulus mask is `smoothstep(540,555,radius) * (1-smoothstep(795,810,radius))`. Modulate the mask with `0.55 + 0.15*sin(radius*0.41) + 0.15*sin(radius*0.93)`. Attenuate outgoing light by `1 - mask * modulation * 0.33`. Apply this before the physical shader's opaque output. Keep coordinates consistent if the whole group is scaled or moved: use the live group position as center, pass its uniform scale to both shadow shaders, divide planet-relative distances by that scale before testing the master-frame annulus or sphere radius.

## 5. Thin atmosphere, not a neon outline

Create a separate sphere of radius `452 × 1.019`, 128 × 80 segments, BackSide, transparent, additive blending and depthWrite false.

Use a custom shader with world normal N and world position P. View direction is `normalize(cameraPosition-P)`. Compute:

`rim = pow(1 - abs(dot(normalize(N), view)), 5.4)`

`lit = smoothstep(-0.38, 0.7, dot(normalize(N), sun))`

`color = mix(vec3(0.21,0.24,0.59), vec3(0.32,0.71,1.0), lit)`

`alpha = rim * (0.12 + 0.58*lit)`

The thin illuminated cyan limb is strongest on the sunward edge. It must not look like a flat CSS box shadow or an opaque thick blue stroke. Keep the dark-side atmosphere restrained.

## 6. Ice-dust rings and reciprocal shadows

Build real RingGeometry with inner radius **540**, outer radius **810**, 256 angular segments. Use a custom transparent DoubleSide material with depthWrite false and depthTest true. The opaque planet must correctly occlude the far-side dust.

**Rotation order matters:** use Euler order **ZXY**, rotation x **−1.13**, y **0**, z **0.36** radians. Simply setting XYZ with a positive x produces the wrong front/back composition. Derive the shadow plane normal from the same transform.

Create a deterministic 2048 × 1 RGBA radial dust texture. Seed starts at 21003. Random generator:

`seed = (seed * 1664525 + 1013904223) >>> 0`

`random = seed / 4294967296`

For each radial sample index i:

- `u = i / 2047`;
- density base `v = 0.38 + 0.045*sin(i*0.09) + 0.018*sin(i*0.43) + 0.025*sin(u*19)`;
- softened gaps: `gap = 1 - 0.82*exp(-pow((u-0.41)/0.015,2)) - 0.54*exp(-pow((u-0.73)/0.010,2))`;
- edge fade `pow(sin(PI*u),0.55)`; fine density multiplier `0.94+0.06*random()`;
- warmth `warm=exp(-pow((u-0.18)/0.24,2))`; RGB bytes `(180+warm*52, 201+warm*24, 240-warm*20)`;
- alpha byte: `max(0,v*fine*gap*edgeFade)*255`.

Use linear magnification and linear mipmapped minification. Generate mipmaps. The thin dust lines must not turn into a flickering checkerboard when viewed obliquely.

In the fragment shader derive radial UV from `length(localPosition.xy)`, not the default RingGeometry texture coordinates. Sample at `((radius-540)/270, 0.5)`.

The planet casts a shadow onto the far ring. For ring position P relative to the planet center and sun S, `along = dot(P,S)` and `nearDistance = length(P-S*along)`. Only `along < 0` can be shadowed. Use a softened sphere radius test from `R-9` to `R+9` and reduce brightness by up to 76%.

For visible azimuthal motion, particle flow and the separate luminous arc layer, use section17. Preserve the base ring illumination and shadow behavior. Do not add a solid opaque ellipse behind the ring.

Add 2,600 tiny depth-tested ice particles on the same ring plane. Use the same seeded random generator; radius `545+pow(random(),0.8)*260`, angle `random()*2*PI`, local z within ±0.6 units. Point sizes 0.5–1.8 pixels. Use a soft circular point shader, pale blue, additive alpha no greater than 0.32 and depthWrite false. Particles should read as fine ice dust, not large stars or glitter confetti.

Add one extremely subtle orbital guide: radius 875, same inclination as the ring, thin `#7cc9e8`, opacity 0.09. It is background notation, not a bright outline.

## 7. Moon and continuous motion

Moon radius **48**, 64 × 48 segments. Initial local position `(648,292,−240)`. Reuse the geological texture at this smaller scale, tint `#9991b5`, bumpScale 0.45, emissiveIntensity 0.035. It shares the scene's light direction. Do not place an unrelated flat moon sticker above the render.

Main rotation: **180 seconds per revolution**. Rotate the surface, not the whole layout. Starting yaw 0.72 radians. Maintain delta-time-based motion with dt clamped to 0–0.05 seconds.

Moon motion: x `648*cos(time*0.025)`, y 292, z `−240+220*sin(time*0.025)`; self-rotation `time*0.07`. It moves slowly enough to feel astronomical.

Pointer view offset: normalized pointer x/y in −1…1; target group x drift ±10 frame units and y drift ±7. Ease with `k = 1-exp(-dt*3.5)`. Apply small group translation; do not distort the sphere or swivel its light source with the cursor. Return toward the centered composition when the pointer leaves.

## 8. Background and liquid-glass pointer trail

The supplied nebula plate fills the cover frame. Its center stays dark; blue violet dust remains mainly at the lower left and upper right. Render it at86% brightness in the background shader. Keep the natural fine detail of the source image. Do not add a blanket decorative gradient or bright fog across the center. Do not add an Earth cloud horizon or dense floating particles over every region.

Use a WebGL background canvas, capped to1440px backing width on desktop and900px on mobile, alpha false, antialias false. Keep the image visible underneath as a fallback. Upload the image with UNPACK_FLIP_Y_WEBGL true.

Use **two 256 × 170 RGBA textures and framebuffers in ping-pong**, matching the original ORBE glass trail technique. Each active frame:

1. Decay the previous value: `max(value*0.972-0.0035,0)`.
2. Add a soft capsule between previous and current pointer positions. UV y is flipped. Multiply the x axis by 1.506 when computing distance.
3. Capsule contribution is `(1-smoothstep(0,0.075,distance))*amount*0.55`.
4. Clamp to 0…1. Increase amount on pointermove by `hypot(movementX,movementY)/40`, capped at 1. After each frame multiply amount by 0.82.

Sky shading uses the trail gradient, sampled with offsets `1.5/256` and `1.5/170`, plus the rib field:

`rib.x = sin(v.y*180 + time*2.2 + sin(v.x*70+time)*2.4)`

`rib.y = cos(v.x*150 - time*1.7 + sin(v.y*60)*2.2)`

Offset is `gradient*0.05 + rib*0.013*smoothstep(0,0.6,trail)`. Sample red, green and blue at offset multipliers 1.25, 1.0 and 0.75. Clamp sample coordinates to 0.001–0.999.

Mix toward `color*vec3(1.08,0.98,1.15)+vec3(0.05,0.03,0.09)` inside the trail. Add a small gradient edge glint and rib shading, as in the executable reference. The trail refracts the environment only; it does not smear the planet, letters or CTA.

Disable trail injection on touch layouts, reduced motion and when paused. On webglcontextlost stop that canvas and reveal the unchanged plate.

## 9. Complete, static display lettering

Use the supplied PLANET ATLAS SVG as editable inline geometry. Preserve its authored glyph paths. Remove the small index-label text from the hero title and render just one complete phrase. The refined edition prioritizes legibility over a continuously cropped marquee.

On desktop, place the title at left5%, top11%, width90%, aspect ratio2415/280. Inline SVG viewBox is `-25 95 2415 280`, with xMinYMin preservation. Keep the 189-unit glyph cap height and 30-unit geometric strokes. Disable the track animation and hide the extra repeat copies. The entire phrase must be readable in the initial view.

The planet still occludes the lower central portion of the title. Never put the lettering above the planet canvas. On mobile use left6%, top96px, width88%, the same aspect ratio. The title should remain a complete phrase rather than enormous clipped fragments.

## 10. HUD bezel and coordinate readout

Use a full-viewport SVG with one even-odd filled path: outer viewport rectangle minus an inner window. Fill `#030409`. Recompute it on resize.

Let `L=20h`, `T=20h`, `R=W-20h`, `B=H-30h`, `cx=W/2`, `bc=H*577/1360`.

Top notch points: `(cx-220h,T)`, `(cx-188h,T+30h)`, `(cx+190h,T+30h)`, `(cx+222h,T)`.

Bottom notch, from the right: `(cx+232h,B)`, `(cx+190h,B-37h)`, `(cx-188h,B-37h)`, `(cx-230h,B)`.

Desktop side bulges step inward 26h around bc, with the top/bottom chamfer interval from `bc±247h` to `bc±195h`. Remove these on phones. Soften polygon corners with quadratic joins of about 7h.

Four L brackets: offset 5h from viewport corners, arm length 14h, stroke `#cfd6e6`, width `max(1,2h)`. Desktop side rails: x 20h and W−20h, y bc−180h to bc+208h, stroke at opacity 0.55; 3h radius endpoint dots.

The frame retains its original master-unit geometry, but the controls use fixed, legible CSS sizes. ORBE sits centered at top12px, size14px, tracking0.18em. On phones it is top8px and12px. Coordinates are centered at bottom18px, size11px and muted blue; phones use bottom12px and10px.

MENU and the motion toggle are quiet translucent header buttons, top24px, inset32px from their respective sides, minimum height40px, padding10px14px, gap10px, font12px with tracking0.08em. Surface#08141db3, complete1px border#b7d4df29, radius8px, backdrop blur12px. Hover surface#152b39d9 and border#a9d2df70. On phones: top28px, side inset18px, padding9px11px, gap8px, font11px. Keep their touch height40px.

The Menu button combines the word `Menu` with an authored two-line16×12 icon. Set aria-label `Open menu`, aria-haspopup `dialog`, aria-expanded false. When the menu is open, the two lines translate by±5.5px and rotate±45 degrees. Reset aria-expanded on the dialog close event, including Escape.

The motion badge uses a 68 × 22 viewBox: dark rounded rectangle x1 y1 width66 height20 radius5, white 1.4 stroke, four slanted filled stripes and a small dot at `(60,11)` radius2.4. Display the badge at42×14px on desktop and34×12px on mobile. Label `ON` or `OFF` sits beside it within the header button.

Bottom coordinate readout: `X.0052  //  Y.0053`, size21.3h, centered, bottom27h. On pointermove update to actual rounded client coordinates, four-digit zero padded, keeping the last four digits. Coordinates continue to update when animation is paused.

## 11. Balanced typography, modest controls and a clear primary action

Side copy begins at46% viewport height, inset6% from the left/right edges. Main copy is `clamp(14px,1.05vw,17px)`, line height1.65, tracking0.01em. The cyan `+++` marker is11px with16px separation below it. Secondary information is11px, line height1.85, tracking0.10em, color#a2b6c7 and margin-top20px.

Left copy, verbatim:

```
+++
An ocean of stone.
A horizon of light.

AETHRA / SECTOR 021
BEYOND THE KNOWN
```

Right copy, verbatim:

```
+++
Born of ice.
Held by gravity.

ONE WORLD. ENDLESS WONDER.
ORBITAL ARCHIVE / 003
```

Use the supplied NEW and WORLDS SVG paths. Their height is `clamp(40px,6vw,80px)` and bottom inset `clamp(96px,10.5vh,144px)`. NEW left5%, width `clamp(142px,18vw,260px)`. WORLDS right5%, width `clamp(220px,28vw,410px)`. These are supporting words, not a second competing hero.

Identifier: `AETHRA · SECTOR 021`, centered at bottom `clamp(164px,18vh,230px)`. Font11px, tracking0.14em, padding6px12px, color#c5d8e4, dark translucent surface#06101b9c, complete1px border#a8cfdd20 and4px radius.

The primary action is deliberately moderate: **226×56px** on desktop, **220×54px** on phone. Label `Explore Aethra`, accessible name `Explore planet`. Center it at bottom `clamp(62px,8.5vh,112px)` on desktop and44px on phones.

Use a normal HTML button with a pale porcelain surface#e8f1f3, dark text#102333, complete1px light border, radius10px and soft downward shadow `0 8px 24px #0006`. Flex layout, centered items, space-between, gap16px, padding8px8px8px20px. The label is14px on desktop and13px on mobile. Do not enlarge the button with the master-frame scale or stretch a framed SVG around it.

Inside the right edge, place a38×38px navy tile#102636 with6px radius. Its18×18 authored SVG arrow uses viewBox0 0 20 20 and path `M5 15L15 5M5 5H15V15`, stroke1.5, round caps/joins, color#bdeaf0.

Hover raises the button2px, changes surface to#f4fcff, deepens its neutral downward shadow and moves the arrow2px right/up. Tile changes to#1b4152. Transition0.35s cubic-bezier(.22,1,.36,1); press returns to resting elevation. Keep visible2px cyan keyboard focus with5px offset.

## 12. Working interactions

Motion toggle pauses planet self-rotation, moon motion and glass-trail simulation. Toggle label, aria-pressed and aria-label update together. Resuming continues from stored elapsed time without jumping.

ENTER ORBIT opens an accessible native dialog titled `Aethra.` with the planet description and these concept fields: Classification / Rocky exoplanet; Surface / Basalt / mineral ice; Ring system / Fine ice dust; Archive / Sector 021 / 003. Clearly label the content `FICTIONAL WORLD · CONCEPT PARAMETERS`.

Include two real lighting controls: NATURAL LIGHT and SURVEY LIGHT. Survey mode smoothly raises emissiveIntensity from0.022 toward0.222 and reduces key light from3.35 toward2.65, revealing the shadowed terrain. Buttons expose aria-pressed. Do not attach them to empty event handlers.

MENU opens a native dialog styled as a compact right-side navigation sheet. Desktop box:400px wide, height `min(640px,calc(100dvh - 40px))`, top20px, right20px, margin0, padding32px and16px radius. Use a complete1px cool border, deep translucent#08131df5 surface and a neutral downward shadow. Do not make it an oversized central alert. Backdrop is#02070db3 with10px blur.

Its caption is `ORBE / PLANET ATLAS`. Heading: `Your next discovery.`, font32px, normal weight, line height1.25, max-width260px. Keep a36×36px close control at top/right18px with8px radius and an authored cross icon. Give this positioned close control z-index2 so the content/caption cannot intercept its clicks.

Three navigation rows:

1. `Explore Aethra` / `Surface, atmosphere & rings` — opens the planet archive.
2. `About the atlas` / `A study of worlds beyond our own` — opens the about view.
3. `Pause the orbit` or `Resume the orbit`, matching current state / `Set the pace of your exploration` — changes the actual animation state and closes the menu.

Rows have minimum height80px, padding16px12px, gap16px, radius8px and a quiet lower separator. Number11px, primary17px, secondary12px. Use a small diagonal arrow at the right. Hover gently reveals a full outline and translucent surface. Because rows contain nested spans and icons, delegate events with `event.target.closest('[data-panel],[data-motion],[data-view]')`; the entire row must respond, not just its outer padding.

Menu footer sits below the rows with automatic flexible spacing: a tiny muted mint dot, `SECTOR 021 / ORBITAL ARCHIVE`, and the lines `One world. A thousand perspectives.` / `Take your time. Look a little closer.`. An extremely faint authored orbital line drawing may sit behind the footer at opacity0.09. Keep it decorative and noninteractive.

Planet and About dialogs use width `min(540px,calc(100vw - 40px))`, max-height `calc(100dvh - 40px)`, padding32px, radius16px and title40px. Body text14px with comfortable line height. Archive fields form a restrained two-column definition list. Put the two lighting controls in a segmented group,5px inset,6px gap,40px minimum control height. Active surface#c9e8ed, active text#132a36. All dialog views support Escape, close and outside dismissal. Detect outside clicks using dialog bounding coordinates so clicking internal padding does not accidentally dismiss it. Preserve native focus return.

For deterministic inspection support `?still=1`: start paused at the initial planet orientation and the complete static title. This is a repeatable browser reference state, not a separate painted mockup.

## 13. Entrance and loading

The background is visible early. Start the interface reveal after fonts and background decoding, with a3.5-second failsafe. Title and UI fade in over1.0–1.2s, side copy delayed0.15s, bottom words0.25s, CTA0.35s.

While the texture loads show `ACQUIRING ORBITAL SIGNAL` with a thin quiet indicator. After the first complete rendered frame, fade the Three.js canvas in over1.6s and remove the loading status. Avoid a white flash, a default cube or a sphere shown briefly without its map.

If texture or renderer initialization fails, show a readable retry control rather than an empty center. On context loss retain the background and interface, stop animation and offer reload. Do not claim a model loaded successfully when a fallback is shown.

## 14. Mobile sizes, short-screen behavior and reduced motion

Breakpoint820px. The design must fit375×812 without horizontal scrolling.

- HUD uses W/860 and removes rails/bulges. Header control sizes are specified in section10.
- Full title: left6%, top96px, width88%, aspect2415/280.
- Side copy: top178px, inset22px, main12px/1.6; marker11px with10px gap; secondary11px, tracking0.015em, margin-top14px and line-height1.8.
- 3D stage: top170px, bottom105px. Cover-fit the2048×1360 master canvas in this area, group scale0.71, group y−690. Keep shadow uniforms in the same coordinate system.
- NEW: left20px, width112px, height36px, bottom120px. WORLDS: right20px, width168px, same height/bottom.
- Identifier: bottom180px, size10px, padding5px9px.
- CTA:220×54px, bottom44px, padding7px7px7px18px, label13px and38×38px arrow tile.
- General dialogs: padding28px24px, radius14px, title34px.
- Menu: left/right/top12px, width `calc(100vw - 24px)`, height `min(680px,calc(100dvh - 24px))`, padding28px24px. Heading30px; navigation row minimum76px; primary16px. Do not overflow the screen or crowd the close control.

Below720px viewport height on mobile: copy top160px and hide secondary metadata; 3D stage top145px/bottom100px; identifier bottom172px. Menu heading28px with tighter margins, row minimum66px and10px padding. Hide the extra footer sentence if necessary, preserving all actions.

Reduced motion disables continuous rotation, parallax, trail injection and entrance animation. Show the completed static scene; controls and coordinates still work. The initial motion-toggle state reflects the preference.

Pause rendering in hidden tabs. Clamp delta time to0–0.05s. Re-render after resizing even while paused; renderer resize clears the canvas. Stop on context loss. Keep draw calls small and never rebuild meshes/textures per frame.

## 15. Acceptance criteria and handoff

Verify the actual running page at desktop1440×960 and phone375×812, including a paused resize. Check:

1. The supplied geological image is visibly present on a real spherical surface.
2. Mineral ridges and craters remain detailed, with a coherent terminator and a thin atmosphere.
3. The front and back ring halves occlude correctly; reciprocal shadows are visible but restrained.
4. Title passes behind the sphere, while controls remain above it.
5. ENTER ORBIT, MENU, motion toggle, lighting modes, close and Escape all work.
6. There is no horizontal page overflow, no clipped CTA and no mobile-only disappearing planet.
7. There are no shader compilation errors, missing-texture errors or uncaught browser errors.
8. The result is shown in a live browser. Any exported preview must be captured from that working code, not separately generated to look better.

Deliver the runnable HTML, the exact asset list, the English recreation brief, desktop and phone previews when browser capture is available. Never include a preview from a previous edition as if it represented the final code. Explain any remaining verification limit plainly. Fidelity takes priority over adding unrelated sections, testimonials, dashboards or extra planets.

## 16. Portable download and verification record

The final package is an extracted-folder deliverable with a fully self-contained index.html. Its Three.js library, WebP texture bytes and WOFF2 font bytes are embedded. It has no remote runtime imports, no remote script/image src and no local texture requests. Keep the editable assets, full prompt and library license alongside it. A static HTTP preview may be used for browser interaction checks, but do not describe that as proof of file-protocol behavior. If the browser tool disallows file URLs, disclose that verification limit.

For this edition, verify desktop1440×960, mobile375×812 and a short mobile viewport. Confirm the primary action dimensions, menu dimensions, complete click targets, lighting selection, Escape dismissal, expanded-state reset, zero horizontal overflow and no runtime errors. If screenshot capture fails, report it; do not fabricate a replacement screenshot.

## 17. Visible cinematic motion — orbital light arcs and flowing nebula

The motion must be clearly perceptible within the first few seconds. Keep the established composition, typography and controls stable. Use the shared scene clock, which advances only while motion is enabled, reduced motion is false and the document is visible. Clamp dt to0–0.05s and resume from stored elapsed time without a wall-clock jump.

### Ring movement

Use three coordinated layers: translucent ice bands, orbiting dust and two tapered luminous arcs. Do not merely rotate an almost rotationally symmetric ring texture and call that visible motion.

**Dust:** keep the2,600 seeded particles on the real ring plane. Set desktop point sizes to1.0–2.8px. On mobile draw only the first1,000 particles and multiply point sizes by0.65, preventing a dense glitter-like appearance. In the vertex shader, radius `r=length(position.xy)`, orbital angle `a=time*0.11*pow(600/max(r,1),1.5)`. Rotate initial x/y by a; keep z fixed. This provides visibly different speeds at different radii. Shimmer is `0.65+0.35*sin(time*1.2+position.x*0.051+position.y*0.037)`. Multiply the soft circular point alpha by0.58 and shimmer. Preserve depth testing, so the planet hides rear-side dust.

**Dust-band transport:** use grain multiplier `0.82+0.12*sin(angle*9-time*0.68+radius*0.045)+0.06*sin(angle*31-time*0.42+radius*0.13)`. Radial bands, gaps, geometry and shadows remain intact.

**Two luminous arcs:** add a second mesh that reuses the ring geometry and rotation. Use an additive, transparent DoubleSide shader with depthTest true, depthWrite false, renderOrder2 and the shared time uniform. The material is an intentional stylized orbital-light accent for this fictional world. The planet still occludes the rear arc through its real depth buffer.

The inner arc is centered at radius625, with4-unit core and17-unit soft halo. It advances at0.38 radians per second, approximately one revolution per16.5 seconds. Its initial phase is−1.6 radians, deliberately on the visible near side. The outer arc is centered at radius760, with3-unit core,13-unit halo and0.24 radians per second, initial phase−2.8. Their different rates create layered movement rather than a mechanically synchronized sweep.

Use long, exponentially fading tails, bright compact heads and cool cyan/violet colors. They must be short moving arcs, never two complete glowing circles. The exact arc fragment shader is below; the vertex shader passes local geometry position as `local` and projects it with the normal model/view/projection matrices:

```glsl
uniform float uTime;varying vec3 local;void main(){float r=length(local.xy),a=atan(local.y,local.x);float p=mod(uTime*.38-a-1.6+12.56637,6.283185),q=mod(uTime*.24-a-2.8+12.56637,6.283185);float tail=exp(-p/.8)*(1.-smoothstep(1.6,2.3,p));float tail2=exp(-q/.6)*(1.-smoothstep(1.2,1.9,q));float head=exp(-pow(min(p,6.283185-p)/.07,2.));float head2=exp(-pow(min(q,6.283185-q)/.06,2.));float core=exp(-pow((r-625.)/4.,2.)),halo=exp(-pow((r-625.)/17.,2.));float core2=exp(-pow((r-760.)/3.,2.)),halo2=exp(-pow((r-760.)/13.,2.));float first=(core*.66+halo*.18)*(tail+head*.5);float second=(core2*.46+halo2*.13)*(tail2+head2*.4);vec3 light=vec3(.28,.79,1.)*first+vec3(.69,.60,1.)*second+vec3(.68,.89,1.)*core*head*.4;gl_FragColor=vec4(light,clamp(first+second,0.,1.));}
```

### Background movement and depth

Use actual animated texture sampling, not an imperceptible uniform displacement. The nebula moves on three scales: broad drift, smoothly advected dust structure and independent foreground stars. Keep the middle dark enough for the planet and preserve all interface positions.

The texture sample starts with8% inset zoom to cover motion without exposed edges. Drift is `vec2(sin(time*0.12)*0.018, sin(time*0.09)*0.012)`. Derive a three-octave noise flow field and apply up to0.055 UV displacement where the source image has visible nebula brightness; preserve the dark center. A second advected noise field modulates cloud illumination. Foreground star cells translate independently, producing visible depth/parallax. Global brightness breathing is only±3.5% and never replaces spatial movement.

Compute the shared flow/light fields once per fragment, outside the three chromatic samples. Use an arithmetic hash rather than repeated sine hashing. Cap the background backing width at1440 on desktop and900 on phones to keep the effect practical. On mobile use a viewport-filling background canvas, a0.86 horizontal texture crop and a backing height proportional to its actual displayed height. Cap its pixel ratio at1.5 and resize when either backing dimension changes. Pass the canvas aspect ratio to the foreground star grid so the points remain round. This mobile composition keeps the visible nebula edges instead of cropping them away with the desktop cover frame. Do not allocate new textures or particle buffers per frame.

The following is the exact background fragment shader. The vertex shader supplies `v` in0…1; uniforms are the image texture, ping-pong trail texture, shared elapsed time and cover crop. Preserve the existing capsule trail simulation from section8:

```glsl
precision mediump float;
varying vec2 v;
uniform sampler2D image,field;uniform float time,cover,aspect;float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}float fbm(vec2 p){return .57*noise(p)+.28*noise(p*2.03+17.)+.15*noise(p*4.01+31.);}vec3 sampleAt(vec2 uv,vec2 flow,float light){vec2 drift=vec2(sin(time*.12)*.018,sin(time*.09)*.012);vec2 at=.5+(uv-.5)*.92+drift;at.x=.5+(at.x-.5)*cover;vec3 base=texture2D(image,clamp(at,.001,.999)).rgb;float cloud=smoothstep(.035,.24,dot(base,vec3(.2126,.7152,.0722)));at+=flow*.055*cloud;vec3 col=texture2D(image,clamp(at,.001,.999)).rgb;return col*mix(1.,light,cloud);}void main(){vec2 cloudFlow=vec2(fbm(v*3.1+vec2(time*.035,-time*.022)),fbm(v*3.1+vec2(-time*.025,time*.031)+23.))-.5;float cloudLight=.90+.16*fbm(v*4.2+vec2(time*.06,-time*.035));float t=texture2D(field,v).r;vec2 g=vec2(texture2D(field,v+vec2(1.5/256.,0.)).r-texture2D(field,v-vec2(1.5/256.,0.)).r,texture2D(field,v+vec2(0.,1.5/170.)).r-texture2D(field,v-vec2(0.,1.5/170.)).r);vec2 rib=vec2(sin(v.y*180.+time*2.2+sin(v.x*70.+time)*2.4),cos(v.x*150.-time*1.7+sin(v.y*60.)*2.2));vec2 off=g*.05+rib*.013*smoothstep(0.,.6,t);vec3 c=vec3(sampleAt(v+off*1.25,cloudFlow,cloudLight).r,sampleAt(v+off,cloudFlow,cloudLight).g,sampleAt(v+off*.75,cloudFlow,cloudLight).b);c=mix(c,c*vec3(1.08,.98,1.15)+vec3(.05,.03,.09),smoothstep(0.,.5,t));c+=vec3(.7,.9,1.)*length(g)*.12+vec3(.75,.7,1.)*dot(rib,vec2(.55,.83))*.05*smoothstep(0.,.5,t);float starMask=smoothstep(.42,.82,max(c.r,max(c.g,c.b)));float twinkle=sin(time*.85+floor(v.x*97.)*1.73+floor(v.y*79.)*2.19);c+=vec3(.028,.038,.05)*starMask*twinkle;vec2 nearUV=v*vec2(36.*aspect,36.)+vec2(time*.17,-time*.065);vec2 cell=floor(nearUV);vec2 spot=vec2(hash(cell),hash(cell+19.));float star=pow(max(0.,1.-length(fract(nearUV)-spot)/.065),2.)*step(.985,hash(cell+7.));float pulse=.65+.35*sin(time*1.1+hash(cell)*6.28);c+=vec3(.48,.65,.83)*star*pulse;float breath=1.+.035*sin(time*.21);gl_FragColor=vec4(c*.86*breath,1.);}
```

### Pause and verification

All three ring layers and all background movement use the same elapsed clock as planet rotation. ON/OFF and the menu's Pause action freeze every continuous effect. Reduced motion renders a completed static scene; controls remain usable. Hidden tabs pause without jumping on return.

Verify the first-frame arc placement, visible progression over subsequent frames, front/back occlusion, mobile composition, pause/resume and absence of shader compilation errors. Keep the offline build self-contained: no video or network dependency is needed. Any preview image must come from this actual implementation, not a separate generative mockup.

## Stable implementation reference

Reference HTML: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d3ac2df4b5d9d18c002268966b00c507b20ef029/designs/orbe-planet-atlas/index.html

All repository image and implementation URLs above use the immutable commit `d3ac2df4b5d9d18c002268966b00c507b20ef029`. Download the ZIP for local assets and offline use. Keeping the repository public and retaining its history is still required for online links.


## Lightweight preview standard

Actual working-page preview: https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/66eb10bc8d84a3d39f09d82b2ebbb54b5aaf5e51/designs/orbe-planet-atlas/assets/demo-mini.mp4

Keep the preview about six seconds, 640×360, 24 fps, muted H.264 with fast-start; this verified export is 128,688 bytes (about 129 KB). Capture continuous live-rendered frames or use an existing continuous high-quality source; do not merely increase the declared frame rate of a stuttering capture. Preserve the original aspect ratio. Reuse this immutable video link when referencing the actual project preview. The extracted offline ZIP includes the same MP4 locally.
