# SeamSites — Angel / Devil

A pearl-and-dark-gold celestial portfolio with a registered angel-to-devil cursor reveal. V2 redesign adds photographic rose-cloud architecture, refined glass navigation, floating feather motes, halo light and trail-driven devil embers. Recreated from the supplied Pink Rider video, with original angel/devil fashion imagery and SeamSites branding.

- [Live interactive demo](https://seamsites-angel-devil.vercel.app/)
- [English recreation prompt](prompt.md)
- [Download complete offline project](download.zip)
- [Compact page preview](assets/demo-mini.mp4)
- [Portrait generation prompts](asset-prompts.md)

## Run

Download and extract the complete ZIP, then open `index.html`. No installation, account, server or internet connection is needed for the main experience. Images are embedded in `assets/inline-assets.js` for reliable local-file Canvas rendering; separate transparent WebP files are also included.

Move across the face, wings or couture to reveal the devil. The trail smoothly contracts over about 1.75 seconds and returns to the angel. On mobile, drag over the portrait. Click the bottom-left hint or press Space for automatic demonstration; Escape stops and clears it. Add `?demo=1` to start in demo mode. The Atelier panel displays both portraits in full.

Visions, Atelier and Journal open working dialogs. A compact mobile menu keeps every section accessible. The contact form validates input and downloads a local project brief. It does not send email or store information.

## V2 atmosphere

A generated pearlescent arch-and-cloud environment drifts slowly behind the portrait. The angel uses warm halo light, gold-white glints and real feather sprites. The devil reveal uses a restrained burgundy light treatment and emissive embers originating from the opaque revealed silhouette. Effects respect reduced-motion preferences; the full-width effect canvas caps its render width at 960 pixels and runs at about 30 fps. The underlying character pair and local reveal remain registered.

## Files

- `index.html` — portable entry point
- `assets/app.js`, `assets/app.css` — complete bundled interface
- `assets/angel.webp`, `assets/devil.webp` — original generated transparent portraits, 1086 × 1448
- `assets/inline-assets.js` — embedded copies for offline reliability
- `assets/reveal-engine.source.js`, `assets/interface.source.jsx`, `assets/styles.source.css` — readable source
- `assets/demo-mini.mp4` — real browser-rendered six-second preview
- `previews/` — actual desktop, reveal and mobile captures
- `prompt.md` — English recreation brief with fixed-commit source and asset links

React and Heroicons are included in the self-contained build. The two original portraits were made with Image Gen, deriving the devil by editing the angel to preserve registration. Both render in exactly the same rectangle; the mask replaces the angel rather than merely painting a translucent devil over it.

## Fidelity

The layout, rolling typography, pink palette and transient local reveal follow the supplied video. Character artwork, branding, text and otherwise unseen menu contents are intentionally adapted. This is an interactive recreation, not the original source project or a guarantee of frame-identical output. Other AI platforms may vary; reuse the linked assets and implementation for the closest result.


Preview video update: six seconds, 640 × 472, 24 fps, approximately 206 KB. H.264 with fast-start, no audio. Re-recorded from live canvas layers for continuous motion.
