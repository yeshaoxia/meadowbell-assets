# CRAFTLINE recreation QA

- Source visual truth: work/ink-reveal/frame-0.15.png; frame-2.png; original 6.47-second reference video.
- Implementation: http://127.0.0.1:8795/ and portable build served at http://127.0.0.1:8792/ink-reveal/record-preview.html?demo=1.
- Screenshots: previews/rest.png, previews/hover.png, previews/mobile.png.
- Desktop comparison viewport: 1920 × 1418 CSS px; source and implementation 1920 × 1418 image pixels. No density mismatch. Mobile adaptation: 390 × 844 CSS px.
- Full-view comparison evidence: work/ink-reveal/comparisons/rest.jpg and hover.jpg, source and implementation side by side in the same artifact.
- Focused comparison: work/ink-reveal/comparisons/rest-header.jpg. Wordmark uses the measured source crop (104,584)–(1831,837); output retains its intrinsic aspect ratio and centered placement.

## Comparison history

1. [P1] Title could disappear on first image load because initial element height was zero. Fixed with the measured intrinsic aspect ratio and verified after reload and packaged-build recording.
2. [P2] Header copy was too narrow and primary button slightly small. Removed excess negative tracking, adjusted padding and compared the focused header capture again.
3. [P1] First portable build used the wrong JSX transform. Corrected export to automatic JSX; reloaded the exported bundle with a fresh resource URL and verified visible interface plus successful animation recording.
4. [P2] Separate droplets were missing. Added seeded, velocity-triggered droplets with gradual shrinkage and drift; verified by desktop hover capture and video.

## Required fidelity surfaces

- Typography: source-derived wordmark retains the exact visible letter shapes and spacing. Supporting interface is Arial/Helvetica; minor rasterization differences remain.
- Spacing: same centered wordmark footprint, measured corner margins and reference-sized top controls. Mobile uses proportionate scaling without overflow.
- Colors: sampled paper background RGB (243,243,240), black type, muted gray UI, spatial blue–pink–orange pigment palette. White lettering is clipped to the live pigment mask.
- Image quality: source crop retained for the wordmark/button chevron; generated photographic pigment texture supplies internal folds. Pigment is a regenerated material rather than an original source texture. Its individual folds and stochastic trajectories are expected to differ; no pixel-identical claim is made.
- Copy: reference headline, intro, navigation and footer preserved. Unseen menu/form contents are clearly scoped demo completions.

## Functional checks

Desktop mouse sweep, persistent-to-fading ink trail, text inversion, droplets, Main clear, Story and Browse panels, Enquire form, local brief download, Escape close/clear, Shift-Tab focus wrap, mobile layout and keyboard demo mode were checked in the browser. No browser console errors occurred in the corrected running app. React/Vite build and four hosting runtime checks passed. Exported portable build was browser-rendered and recorded successfully.

## Follow-up polish

[P3] Source-video antialiasing and regenerated pigment fold placement cannot be pixel matched. Hover shapes depend on the actual pointer path and timing; comparisons assess the same broad reveal state rather than identical stochastic pixels. The reference gives no mobile or panel targets.

final result: passed
