# SeamSites — Angel / Devil

A pink editorial portfolio with a registered angel-to-devil cursor reveal. Recreated from the supplied Pink Rider video, with original angel/devil fashion imagery and SeamSites branding.

- [Live interactive demo](https://seamsites-angel-devil.vercel.app/)
- [English recreation prompt](prompt.md)
- [Download complete offline project](download.zip)
- [Compact page preview](assets/demo-mini.mp4)
- [Portrait generation prompts](asset-prompts.md)

## Run

Download and extract the complete ZIP, then open `index.html`. No installation, account, server or internet connection is needed for the main experience. Images are embedded in `assets/inline-assets.js` for reliable local-file Canvas rendering; separate transparent WebP files are also included.

Move across the face, wings or couture to reveal the devil. The trail smoothly contracts over about 1.75 seconds and returns to the angel. On mobile, drag over the portrait. Click the bottom-left hint or press Space for automatic demonstration; Escape stops and clears it. Add `?demo=1` to start in demo mode. The Atelier panel displays both portraits in full.

Visions, Atelier and Journal open working dialogs. A compact mobile menu keeps every section accessible. The contact form validates input and downloads a local project brief. It does not send email or store information.

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
