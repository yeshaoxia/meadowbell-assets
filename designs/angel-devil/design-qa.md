# Angel / Devil — visual and interaction QA

final result: passed

## Visual truth and evidence

Source: `../reference-start.png`, extracted from the user-supplied Pink Rider MP4 (1920 × 1416). Full video contact sheet: `../contact.jpg`.

Implementation: `../qa/desktop.png`, `../qa/reveal.png`, each 1920 × 1416 physical pixels at a 1920 × 1416 CSS viewport, DPR 1. Mobile capture: `../qa/mobile.png`, 390 × 844 CSS/pixel dimensions. No image-density rescaling before comparison. Full combined comparison: `../qa/comparison-full.jpg`; focused comparisons: `../qa/comparison-header.jpg` and `../qa/comparison-type.jpg`. Both source and actual browser screenshots were opened together in those comparison inputs.

Rest-state comparison uses the opening reference frame; reveal comparison is behavioral, not pixel-identical: the original character and pink riding outfit are intentionally replaced by a newly generated angel/devil pair. The first source frame includes a tiny residual shoulder reveal. Marquee phase and pointer trajectory are time-dependent.

## Required fidelity surfaces

- Typography: Arial/Helvetica matches the source's neutral grotesk direction. Oversized uppercase horizontal rows retain the source hierarchy and density; top row is muted, second is black. Fixed an initially excessive second-row weight and moved both rows up 20 CSS pixels. New thematic copy and different word widths are intentional. Rolling phase is not used as a pixel-fidelity claim.
- Spacing/layout: header at roughly 45 px from top/edges; large centered, bottom-cropped portrait; typography at the same middle-page band; two footer controls. Angel wings intentionally broaden the silhouette. Halo and horns require more headroom than the original girl's hair. Same shared 3:4 image rectangle is used for both identities.
- Colors/tokens: pale pink `#fae9f1`, pink accent `#f77eae`, near-black `#171416`, muted gray-pink `#cbbbc3`. The source has a subtle vertical pink variation; this recreation uses a stable pale pink for clean transparent-image integration (P3 acceptable difference).
- Imagery: two detailed 1086 × 1448 alpha portraits. Feather, skin, pearls, metallic filigree, garnet and horn details inspected at full resolution. Devil derived from the exact angel image; facial landmarks and clothing seams remain closely aligned. No fake illustration, placeholder or SVG character art. Icons are the official Heroicons library. Full-color WebP quality 91 preserves alpha and local texture.
- Copy/content: coherent duality/creative portfolio theme; SeamSites branding carried from the user's established project family. Newly completed menus are independent creative content, not unseen original-video claims. Local-only brief download is explained before and after submission.

## Findings and iteration history

1. [P2, fixed] Original fading alpha mask made dark materials appear gray/ghosted. Replaced with full-opacity brush circles whose radius contracts smoothly over 1.75 seconds. Re-captured reveal confirms clear burgundy metal and dark hair.
2. [P2, fixed] Dragging selected the background marquee. Disabled user selection on the interactive stage; re-captured drag shows no blue selection band.
3. [P2, fixed] Overlay-only compositing left the angel halo visible behind a revealed horn. The renderer now removes the angel within the mask and inserts the registered devil, including alpha; additive premultiplied composition avoids a bright seam. Post-fix reveal capture shows the corresponding halo segment removed.
4. [P2, fixed] Mobile footer instruction lost contrast over pale couture. Added a restrained pale pill, shorter touch-specific wording, and a full mobile menu. Post-fix 390 × 844 capture shows legible footer controls and accessible sections.
5. [P2, fixed] Initial black marquee weight drifted too far from the reference. Adjusted optical weight and vertical position; focused type comparison inspected again.

No actionable P0/P1/P2 findings remain.

## Browser verification

Verified in the user's in-app browser against the running React/Vite app and the portable IIFE build. Desktop pointer drag across horns/face/bodice produces a solid local reveal and restores the angel after contraction. Mobile drag verified at 390 × 844. Opened Atelier and viewed both complete portraits. Opened Visions, entered automatic demonstration, then stopped/cleared with Escape. Mobile menu reaches Journal and returns correctly. Native modal keyboard focus stays within dialogs; Escape dismisses and returns to the originating control. Contact form filled with test data and saved a project brief, reaching the explicit success state. Browser error log: no errors in tested states. Production build and four template hosting checks passed.

## Follow-up polish / limitations

- P3: source font was unavailable, so the system grotesk is a close optical match, not an extracted original font.
- P3: feather contours and some hair strands differ between the two generated identities, appropriately localized by the mask. Identical canvas geometry prevents crop or position jumps; it does not imply every feather is mathematically identical.
- No reference mobile/menu views were supplied; those are deliberate responsive completions.
- Artwork is photographic raster imagery, not an independently rigged 3D model. Cursor reveal, marquee and automatic demonstration are live animation.
