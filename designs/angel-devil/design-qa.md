# SeamSites Angel / Devil — V2 review

final result: passed

## Source and matched evidence

Source baseline: `before.png`, the actual V1 portable page captured at 1280 × 944 CSS pixels / physical pixels, DPR 1. Implementation: `desktop.png` and `reveal.png`, captured from V2 at the same 1280 × 944 CSS/pixel viewport, DPR 1. The user requested new menu styling, a new photographic background, and distinct angel/devil effects; these are intentional redesign surfaces, not reference-fidelity defects. The full combined before/after comparison `comparison.jpg` and focused `comparison-header.jpg` were opened and reviewed. Mobile: `mobile.png`, actual browser capture at 390 × 844 CSS/pixel dimensions. No density normalization was necessary.

## Required surfaces

- Typography: retains neutral Arial marquees and SeamSites wordmark; new small numbered navigation uses 16 px desktop text, warm-metal indices, and clear spacing. Dialog titles and edition pill use Georgia for a more editorial finish. No new font requests or external runtime dependencies.
- Layout: centered portrait, shared image rectangle, two background type rows and primary navigation all retained. Navigation is now one pearl-glass capsule, with a deep plum CTA and ivory circular arrow. Mobile keeps a compact menu plus CTA, with no header collisions at 390 px. Footer pills remain legible over the character.
- Color: new warm ivory, aged gold, rose clouds, pearl architecture and plum. Marquees are deliberately softened so they do not overpower the environment. CTA contrast and focus indicators remain clear. Dialog surfaces match the navigation palette.
- Image quality: generated photographic 1448 × 1086 pearl-arch/cloud background; generated transparent 512 × 512 feather sprite. Real assets, no CSS approximation of the architecture or feather. Original aligned angel/devil portraits unchanged. Landscape uses centered composition; mobile deliberately shifts crop toward one arch instead of stretching the image. Background moves subtly through real image transforms.
- Copy: existing portfolio content retained. Main CTA is now “Let’s create”; edition label is “The Duality Study · 01”. Modal navigation and local contact-brief behavior are unchanged.

## Motion and regression checks

Angel: warm halo bloom, gold-white motes, occasional narrow glints, and drifting/rotating true-alpha feathers. Devil: restrained warm burgundy illumination within the revealed image and orange-red emissive embers rising from recently revealed opaque character pixels. Ember emission persists briefly along the trail, not only at the final cursor position. The two looks remain visually distinct without covering facial features.

The portrait replacement still uses the same source rectangle and contracting alpha mask. Horn/halo replacement, face/bodice registration, pointer drag, restoration and automatic demonstration remain functional. Atmosphere uses its own low-resolution canvas, capped at 960 px wide and about 30 frames/sec; portrait compositing keeps its existing on-demand loop. Reduced motion disables environmental drift and time-varying ambient motion; manually requested reveal remains usable.

Opened the updated Atelier dialog and inspected both portraits. Checked Escape return, mobile menu access, and the new contact CTA reaching the labeled local-brief form. Portable IIFE page loaded the redesigned menu and background with local embedded assets. Vite production build and all four template checks passed. Current page browser error logs checked; no runtime errors in final tested states.

## Iterations

- P2 fixed: initial ember emission ended immediately when a quick drag left the character. Emission now samples a capped history of opaque character hits for 850 ms, so the trail emits coherently as it restores.
- P2 fixed: initial mobile center crop hid both architectural edges. Shifted the mobile background to 18% horizontal position to show one side of the setting without distortion. Updated mobile capture inspected.
- No outstanding P0/P1/P2 findings. The new background, menu geometry and reduced marquee opacity are user-requested design changes.

## P3 / limits

Environment is a photographic plate with slow pan, scale and lighting, not a newly simulated 3D world. Feathers and glints are intentionally delicate; the stronger red effects occur locally during revelation. Exact particle positions and marquee phase vary with time and pointer motion.


Video revision: browser playback verified with 640 × 472 dimensions, six-second duration, readyState 4 and active playback. The 24 fps MP4 has 144 decoded frames, all distinct, with zero adjacent duplicate frames. Payload: 206,367 bytes.
