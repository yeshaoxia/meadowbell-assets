# ORBE — Planet Atlas · Production Recreation Brief

Build this exact experience: a one-screen, non-scrolling, full-viewport exoplanet observatory called **ORBE — Planet Atlas**. Preserve the cinematic composition, precise sci-fi HUD, custom geometric lettering and material fidelity of a high-end interactive art direction website. The centerpiece is Aethra, a fictional blue mineral planet with real 3D terrain shading, a thin cyan atmosphere, a small moon and a broad inclined ice-dust ring system.

Deliver a complete working `index.html` with inline CSS and application JavaScript. Use the supplied artwork and lettering. This is a functional browser experience, not a screenshot displayed as a page. The large hero planet must be a textured Three.js sphere with real-time lighting and rotation. Background artwork is permitted; replacing the planet with a CSS gradient sphere, a low-resolution procedural noise ball or an unrelated stock planet is not.

Page title: `ORBE — Planet Atlas`. Language: `en`. The planet, sector and archive information below are explicitly fictional concept content, not measured astronomical data.

## 1. Authoritative assets and implementation reference

Use the actual assets at these URLs. Do not invent or substitute asset addresses. Read the reference implementation when uncertain about a shader or a glyph; it is the executable counterpart of this brief.

- **Aethra surface albedo, 1774 × 887, 2:1 equirectangular WebP:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d95638c8e654c1925dfa63770cd7adbaa29b3532/orbe-planet-atlas/assets/aethra-albedo.webp`
- **Deep-space environment plate, 1536 × 1024, 3:2 WebP:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d95638c8e654c1925dfa63770cd7adbaa29b3532/orbe-planet-atlas/assets/deep-field.webp`
- **Exact PLANET ATLAS lettering, SVG:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d95638c8e654c1925dfa63770cd7adbaa29b3532/orbe-planet-atlas/assets/planet-atlas-lettering.svg`
- **Exact NEW lettering, SVG:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d95638c8e654c1925dfa63770cd7adbaa29b3532/orbe-planet-atlas/assets/new-lettering.svg`
- **Exact WORLDS lettering, SVG:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d95638c8e654c1925dfa63770cd7adbaa29b3532/orbe-planet-atlas/assets/worlds-lettering.svg`
- **Editable display glyph paths and advance widths, JSON:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/d95638c8e654c1925dfa63770cd7adbaa29b3532/orbe-planet-atlas/assets/display-glyphs.json`
- **Working reference HTML, including embedded fonts and shader source:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/main/orbe-planet-atlas/index.html`
- **Browser-rendered desktop reference, not an AI mockup:** `https://raw.githubusercontent.com/yeshaoxia/meadowbell-assets/main/orbe-planet-atlas/desktop-preview.jpg`

The albedo is original AI-generated geological artwork. It contains folded blue basalt, pale mineral seams, crater basins and fractured icy deposits. Its dimensions above are the actual delivered dimensions; do not describe it as a 4K image. The supplied background is also original generated artwork. The rings are built as geometry with a deterministic radial dust texture; there is no missing ring photograph, GLB or video dependency.

For WebGL-bound images use `crossOrigin = "anonymous"` before setting `src`. In Three.js use `TextureLoader.setCrossOrigin("anonymous")`. Check load failures. Never leave a blank hero if a texture request fails.

### Runtime

Use a pinned Three.js r160 ES module:

`https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js`

Import-map alias: `three`. Do not mix releases or load a second Three.js copy. No React or build step is required. Serve over HTTP or HTTPS; do not rely on `file://` module behavior.

### Fonts

All small interface text uses **Orbe Mono**. The large title and bottom words are SVG geometry, not font approximations.

Embed the following two WOFF2 files as base64 in the delivered HTML, under the same family name `Orbe Mono`:

1. Share Tech Mono 400 Latin: `https://fonts.gstatic.com/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2`
2. Share Tech 400 Latin, declared second with `unicode-range: U+0030`: `https://fonts.gstatic.com/s/sharetech/v23/7cHtv4Uyi5K0OeZ7bohU8H0JmA.woff2`

Both faces: `font-display: block`. Stack: `"Orbe Mono", ui-monospace, monospace`. The second face changes the digit zero to an unslashed zero while preserving the rest of the mono font. Embedded font declarations can be copied from the reference HTML.

### Palette

Ink `#f3f6ff`; active cyan `#5ef3ff`; bezel/background `#030409`; secondary interface text `#a5bdd2`; geological material tint `#d7e8ff`. The environment supplies its own blue and violet tones. Avoid extra saturated colors or oversized glow effects.

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
- `bumpScale`: **3.8** frame units;
- `color`: `#d7e8ff`;
- `roughness`: **0.86**;
- `metalness`: **0.06**;
- `clearcoat`: **0.05**;
- `clearcoatRoughness`: **0.8**;
- `emissive`: `#273358`;
- `emissiveIntensity`: **0.035**.

This material should read as basalt and mineral ice. Avoid polished plastic, molten lava or chrome. Keep crater rims and folded strata visible at normal desktop viewing distance. Never replace the supplied map with a few sine waves or a coarse generated noise texture.

Lighting:

- Hemisphere light: sky `#b4d9ff`, ground `#151329`, intensity **0.20**.
- Main directional: `#e6f3ff`, intensity **3.1**; normalized sun vector **normalize(−1, 0.48, 0.48)**; place the light at `center + sun × 2000`, targeting the planet center.
- Rear violet directional: `#6d6bff`, intensity **0.55**, position `(1900, −400, −900)`, targeting the planet center.

Preserve the terminator. Increasing ambient light until every crater is equally visible ruins the spherical form. Do not use a white page-wide bloom pass to hide weak lighting.

### Rings casting a shadow on the sphere

Patch the physical material with world position varying `vWorld`. Let `N` be the ring plane's world normal and `S` the normalized sun direction. From a point on the sphere, intersect the sunward ray with the ring plane:

`travel = -dot(vWorld - center, N) / dot(S, N)`

`hit = vWorld - center + S * travel`

`radius = length(hit)`

Only positive travel can shadow the surface. The annulus mask is `smoothstep(540,555,radius) * (1-smoothstep(795,810,radius))`. Modulate the mask with `0.55 + 0.15*sin(radius*0.41) + 0.15*sin(radius*0.93)`. Attenuate outgoing light by `1 - mask * modulation * 0.57`. Apply this before the physical shader's opaque output. Keep coordinates consistent if the whole group is scaled or moved.

## 5. Thin atmosphere, not a neon outline

Create a separate sphere of radius `452 × 1.023`, 128 × 80 segments, BackSide, transparent, additive blending and depthWrite false.

Use a custom shader with world normal N and world position P. View direction is `normalize(cameraPosition-P)`. Compute:

`rim = pow(1 - abs(dot(normalize(N), view)), 4.8)`

`lit = smoothstep(-0.38, 0.7, dot(normalize(N), sun))`

`color = mix(vec3(0.16,0.22,0.74), vec3(0.18,0.78,1.0), lit)`

`alpha = rim * (0.18 + 0.62*lit)`

The thin illuminated cyan limb is strongest on the sunward edge. It must not look like a flat CSS box shadow or an opaque thick blue stroke. Keep the dark-side atmosphere restrained.

## 6. Ice-dust rings and reciprocal shadows

Build real RingGeometry with inner radius **540**, outer radius **810**, 256 angular segments. Use a custom transparent DoubleSide material with depthWrite false and depthTest true. The opaque planet must correctly occlude the far-side dust.

**Rotation order matters:** use Euler order **ZXY**, rotation x **−1.13**, y **0**, z **0.36** radians. Simply setting XYZ with a positive x produces the wrong front/back composition. Derive the shadow plane normal from the same transform.

Create a deterministic 2048 × 1 RGBA radial dust texture. Seed starts at 21003. Random generator:

`seed = (seed * 1664525 + 1013904223) >>> 0`

`random = seed / 4294967296`

For each radial sample index i:

- `u = i / 2047`;
- density `v = 0.16 + random()*0.35 + 0.13*sin(i*0.11) + 0.10*sin(i*0.47)`;
- if `0.32 < u < 0.36` or `0.72 < u < 0.76`, multiply density by 0.035 to create gaps;
- edge fade `min(1, u*35, (1-u)*35)`;
- RGB bytes: `(160+random()*50, 183+random()*40, 235)`;
- alpha byte: `max(0,v)*255*edgeFade`.

Use linear magnification and linear mipmapped minification. Generate mipmaps. The thin dust lines must not turn into a flickering checkerboard when viewed obliquely.

In the fragment shader derive radial UV from `length(localPosition.xy)`, not the default RingGeometry texture coordinates. Sample at `((radius-540)/270, 0.5)`.

The planet casts a shadow onto the far ring. For ring position P relative to the planet center and sun S, `along = dot(P,S)` and `nearDistance = length(P-S*along)`. Only `along < 0` can be shadowed. Use a softened sphere radius test from `R-9` to `R+9` and reduce brightness by up to 88%.

Dust grain multiplier: `0.95 + 0.05*sin(angle*71 + radius*0.12)`. Light multiplier: `0.65 + 0.35*abs(dot(ringNormal,S))`. Final RGB is sampled RGB × light × planetShadow × grain × 1.6. Final alpha is sampled alpha × 0.9. Do not add a solid opaque ellipse behind the ring.

Add one extremely subtle orbital guide: radius 875, same inclination as the ring, thin `#7cc9e8`, opacity 0.09. It is background notation, not a bright outline.

## 7. Moon and continuous motion

Moon radius **48**, 64 × 48 segments. Initial local position `(648,292,−240)`. Reuse the geological texture at this smaller scale, tint `#9991b5`, bumpScale 1.8, emissiveIntensity 0.035. It shares the scene's light direction. Do not place an unrelated flat moon sticker above the render.

Main rotation: **180 seconds per revolution**. Rotate the surface, not the whole layout. Starting yaw 0.72 radians. Maintain delta-time-based motion with dt clamped to 0–0.05 seconds.

Moon motion: x `648*cos(time*0.025)`, y 292, z `−240+220*sin(time*0.025)`; self-rotation `time*0.07`. It moves slowly enough to feel astronomical.

Pointer view offset: normalized pointer x/y in −1…1; target group x drift ±10 frame units and y drift ±7. Ease with `k = 1-exp(-dt*3.5)`. Apply small group translation; do not distort the sphere or swivel its light source with the cursor. Return toward the centered composition when the pointer leaves.

## 8. Background and liquid-glass pointer trail

The supplied nebula plate fills the cover frame. Its center stays dark; blue violet dust remains mainly at the lower left and upper right. Render it at approximately 85% brightness. Do not add an Earth cloud horizon or dense floating particles over every region.

Use a WebGL background canvas, capped to 1600 px backing width, alpha false, antialias false. Keep the image visible underneath as a fallback. Upload the image with UNPACK_FLIP_Y_WEBGL true.

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

## 9. Exact display lettering and marquee

Use the supplied PLANET ATLAS SVG as editable inline geometry. Do not approximate it with Arial, a generic sci-fi font or a raster title.

The glyphs use 189-unit cap height, 30-unit strokes, butt caps and rounded joins. The P has an open lower counter; the A has a tall pointed apex and a high crossbar; the N is a continuous diagonal; the S has engineered rectangular curves. Exact paths and advances are supplied in display-glyphs.json.

Place the title container at x 0, top **92u**, height **280u**, width **10000u**. Its SVG viewBox is `0 95 10000 280`, preserving xMinYMin. Glyph cap top is y 122.5. One period is **2415** SVG units, repeated three times. Animate the track from x 0 to x −2415 over **60 seconds**, linear, infinite. Match the repeat distance exactly so the loop does not jump.

Small index text travels with the title: `P_021` at `(210,352)`, `AETHRA` at `(745,280)`, `ORBITAL ARCHIVE` at `(1390,340)`, `G_003` at `(2090,275)`. Size 24 units.

The main planet must render in front of this entire headline layer. White title fragments should disappear behind its silhouette. Never put the title above the planet canvas.

## 10. HUD bezel and coordinate readout

Use a full-viewport SVG with one even-odd filled path: outer viewport rectangle minus an inner window. Fill `#030409`. Recompute it on resize.

Let `L=20h`, `T=20h`, `R=W-20h`, `B=H-30h`, `cx=W/2`, `bc=H*577/1360`.

Top notch points: `(cx-220h,T)`, `(cx-188h,T+30h)`, `(cx+190h,T+30h)`, `(cx+222h,T)`.

Bottom notch, from the right: `(cx+232h,B)`, `(cx+190h,B-37h)`, `(cx-188h,B-37h)`, `(cx-230h,B)`.

Desktop side bulges step inward 26h around bc, with the top/bottom chamfer interval from `bc±247h` to `bc±195h`. Remove these on phones. Soften polygon corners with quadratic joins of about 7h.

Four L brackets: offset 5h from viewport corners, arm length 14h, stroke `#cfd6e6`, width `max(1,2h)`. Desktop side rails: x 20h and W−20h, y bc−180h to bc+208h, stroke at opacity 0.55; 3h radius endpoint dots.

HUD labels use Orbe Mono at 23h. ORBE sits centered in the upper notch, top 14h, shifted left 6h. MENU sits right 41h, top 42h. Motion toggle sits left 45h, top 40h.

The motion badge uses a 68 × 22 viewBox: dark rounded rectangle x1 y1 width66 height20 radius5, white 1.4 stroke, four slanted filled stripes and a small dot at `(60,11)` radius2.4. Label `ON` or `OFF` sits 8h to its right.

Bottom coordinate readout: `X.0052  //  Y.0053`, size21.3h, centered, bottom27h. On pointermove update to actual rounded client coordinates, four-digit zero padded, keeping the last four digits. Coordinates continue to update when animation is paused.

## 11. Interface copy, bottom words and CTA

Side-copy top is `50%−64u`. Main size21u, line-height31u, letter spacing0.025em. Left x100u; right inset94u, right aligned. `+++` uses letter spacing0.24em and a12u gap below. Secondary lines have size17u, color `#a5bdd2`, margin-top25u.

Left text, verbatim:

```
+++
BEYOND THE HORIZON

AETHRA / SECTOR 021
AN UNCHARTED WORLD
```

Right text, verbatim:

```
+++
WORLDS IN MOTION

ICE / STONE / STARDUST
ORBITAL ARCHIVE 003
```

Bottom left NEW: supplied SVG, width388u, height140u, left66u, bottom115u. Bottom right WORLDS: supplied SVG, width608u, height140u, right64u, bottom115u. Maintain each SVG's aspect ratio.

Planet identifier: `021 — AETHRA / FICTIONAL EXOPLANET`, centered at bottom254u, font15u, tracking0.18em, color `#a6bfd1`.

CTA: width360u, height102u, centered horizontally, bottom124u. Label `ENTER ORBIT`; accessible name `Explore planet`. The button is a black chamfered instrument key with one cyan chip, not a generic rounded pill.

Use viewBox `0 0 360 102`:

- Body: `M22 4H338L356 22V80L338 98H22L4 80V22Z`, fill `#04060c`, matching 7-unit outline.
- Cyan upper/left edge: `M9 69V24L24 9H338L349 20`, stroke2.2.
- Thin complete body outline: `#12303a`, width1.
- Cyan chip: `M278 13H334L348 27V69L334 83H278L264 69V27Z`.
- Three dark chevrons centered in the chip.
- HTML label: left42u, vertically centered, size24u.

Hover: chip translates left5px and scales x1.06 around `(346,51)`; chevrons translate right6px. Duration0.5s, `cubic-bezier(0.2,0.8,0.2,1)`. Focus-visible is a2px cyan outline, offset6px.

## 12. Working interactions

Motion toggle pauses the headline, planet self-rotation, moon motion and glass-trail simulation. Toggle label, aria-pressed and aria-label update together. Resuming continues from stored elapsed time without jumping.

ENTER ORBIT opens an accessible native dialog titled `Aethra.` with the planet description and these concept fields: Classification / Rocky exoplanet; Surface / Basalt / mineral ice; Ring system / Fine ice dust; Archive / Sector 021 / 003. Clearly label the content `FICTIONAL WORLD · CONCEPT PARAMETERS`.

Include two real lighting controls: NATURAL LIGHT and SURVEY LIGHT. Survey mode smoothly raises emissiveIntensity from0.035 toward0.285 and reduces key light from3.1 toward2.4, revealing the shadowed terrain. Buttons expose aria-pressed. Do not attach them to empty event handlers.

MENU opens navigation: Aethra archive, About the atlas, Toggle motion. Archive opens the same planet content. About explains this fictional interactive art study. Toggle motion operates the actual animation state. Dialog supports Escape, close button, outside dismissal and correct focus return.

For deterministic inspection support `?still=1`: start paused at the initial planet orientation and the start of the title track. This is a repeatable browser reference state, not a separate painted mockup.

## 13. Entrance and loading

The background is visible early. Start the interface reveal after fonts and background decoding, with a3.5-second failsafe. Title and UI fade in over1.0–1.2s, side copy delayed0.2s, bottom words0.35s, CTA0.45s.

While the texture loads show `ACQUIRING ORBITAL SIGNAL` with a thin quiet indicator. After the first complete rendered frame, fade the Three.js canvas in over1.6s and remove the loading status. Avoid a white flash, a default cube or a sphere shown briefly without its map.

If texture or renderer initialization fails, show a readable retry control rather than an empty center. On context loss retain the background and interface, stop animation and offer reload. Do not claim a model loaded successfully when a fallback is shown.

## 14. Phone layout, reduced motion and performance

Breakpoint: **820px**.

- HUD uses W/860; omit rails and side bulges.
- Title: top68px, height126px, width4500px; keep horizontal overflow clipped by its stage.
- Side copy: top200px; left/right22px; main10px/15px; secondary9px with12px top gap.
- 3D stage: top120px, bottom70px. Cover-fit the master canvas inside this stage, then scale the group uniformly to0.71; group y−690. Do not nonuniformly scale the canvas contents.
- NEW: left20px, width120px, height44px, bottom126px.
- WORLDS: right20px, width168px, height44px, bottom126px.
- Identifier: bottom204px, size9px.
- CTA: width232px, height66px, bottom `max(36px, env(safe-area-inset-bottom))`; label15px, left26px.
- Top controls use10px text. Brand12px. Coordinates9px.
- No pointer-trail injection on touch layouts. No horizontal page scrolling at375px.

Reduced motion: no marquee, no continuous rotation, no pointer parallax or trail injection, no entrance movement. Show the completed static scene. The motion toggle's initial state reflects reduced-motion preference. Coordinates and dialog interactions remain available.

Pause rendering work in hidden tabs. Use delta time, not frame-count-dependent rotation. Re-render after resize **even while paused**; resizing the renderer clears the canvas, and omitting that redraw makes the planet disappear. Cancel animation on context loss. Keep the draw-call count small. Never rebuild the mesh or reallocate the texture every frame.

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

Deliver the runnable HTML, the exact asset list, the English recreation brief, a desktop preview and a phone preview. Explain any remaining verification limit plainly. Fidelity takes priority over adding unrelated sections, testimonials, dashboards or extra planets.
