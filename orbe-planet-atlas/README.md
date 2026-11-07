# ORBE — Planet Atlas

A real-time Three.js exoplanet experience built from original generated geology and deep-space artwork.

## Run

Serve this directory with any static HTTP server, for example `python -m http.server 8080`, and open `http://localhost:8080`.

`?still=1` opens the reproducible initial frame. Motion, the planet archive, lighting controls and the menu are functional. The fictional planet and archive entries are concept art.

## Contents

- `index.html`: runnable source with embedded fonts.
- `PROMPT.en.md`: full English production recreation brief with real immutable asset URLs.
- `assets/`: original generated PNGs, optimized WebP copies and authored editable SVG lettering.
- `desktop-preview.jpg`, `mobile-preview.jpg`: captures from the running code.
- `asset-manifest.json`: file hashes and actual sizes.

The PNG originals were generated with the built-in image-generation tool. WebP copies retain the original pixel dimensions. They are 1774 × 887 for the surface atlas and 1536 × 1024 for the environment, not 4K assets. Runtime uses Three.js r160 from jsDelivr. Fonts are Share Tech Mono and Share Tech from Google Fonts, embedded in the HTML.

## Publication

Original assets are preserved in commit d95638c8e654c1925dfa63770cd7adbaa29b3532 of yeshaoxia/meadowbell-assets under `orbe-planet-atlas/assets/`. Existing repository content is preserved.
