# ORBE — Planet Atlas · Quiet Observatory Edition

A real-time Three.js exoplanet experience built from original generated geology and deep-space artwork.

## Run

Extract the ZIP, then double-click `index.html` in a modern browser. No server, installation or internet connection is required. The rendering library, images and fonts are embedded in the HTML.

解压压缩包后，双击 index.html 即可。无需安装、启动服务或联网。请先解压，不要在压缩包内部预览。

`?still=1` opens the reproducible initial frame. Motion, the planet archive, lighting controls and the menu are functional. The fictional planet and archive entries are concept art.

## Contents

- `index.html`: runnable source with embedded fonts.
- `PROMPT.en.md`: full English production recreation brief with real immutable asset URLs.
- `assets/`: original generated PNGs, optimized WebP copies and authored editable SVG lettering.
- `ASSET-PROMPT.en.md`: the complete generation prompt for the new cyan-violet nebula background.
- This edition does not include a screenshot: browser capture was unavailable, so previews from the previous edition were excluded.
- `asset-manifest.json`: file hashes and actual sizes.

The PNG originals were generated with the built-in image-generation tool. WebP copies retain the original pixel dimensions. They are 1774 × 887 for the surface atlas and 1536 × 1024 for the environment, not 4K assets. Runtime embeds the official Three.js r160 classic build, originally obtained from jsDelivr. Its MIT license is included in assets/THREE-LICENSE.txt. Fonts are Share Tech Mono and Share Tech from Google Fonts, embedded in the HTML.

## Publication

Original assets are preserved in commit d95638c8e654c1925dfa63770cd7adbaa29b3532 of yeshaoxia/meadowbell-assets under `orbe-planet-atlas/assets/`. Existing repository content is preserved.

## Refined controls

The primary action is 226 × 56 px on desktop and 220 × 54 px on mobile. The menu is a 400 px wide, maximum 640 px high panel on desktop; it fits inside the phone viewport with 12 px margins. Header controls keep a 40 px minimum height. The planet archive, lighting selection, menu navigation, animation toggle and Escape dismissal are functional.

The new cyan-violet environment asset is pinned to GitHub commit 7d22ef71c2bdb3f34b3e898e37799187b437f836. The original geology remains in its original asset commit.

Verification: the running page was checked through its DOM and interactions at desktop and mobile sizes. No browser-rendered screenshot is claimed for this edition. The browser tool does not allow file:// navigation, so direct double-click behavior could not be exercised in that tool; the portable HTML embeds all runtime resources and uses no module imports or external image requests.
