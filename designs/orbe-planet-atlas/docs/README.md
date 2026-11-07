# ORBE — Planet Atlas · Orbital Flow Edition

## 打开方式 / Open

完整解压压缩包后，双击 index.html。渲染库、贴图和字体均已内嵌，无需联网、安装或启动服务。不要在压缩包内部直接预览网页。

Extract the ZIP completely, then open index.html in a modern browser. The HTML embeds the rendering library, textures and fonts and has no network dependency.

## Motion

- Two clearly visible, tapered luminous arcs orbit on separate ring lanes, with real front/back occlusion.
- Ice dust travels at different speeds at different radii. Mobile density and point sizes are reduced for a cleaner result.
- The nebula has broad drift and animated internal flow. Foreground star parallax supplies a separate depth layer.
- The mobile background composition keeps the visible nebula edges instead of cropping them out.
- ON/OFF and the menu's Pause action freeze all continuous motion. Reduced-motion preference is respected.

## Included files

- index.html: complete, self-contained executable webpage.
- PROMPT.en.md: full English recreation brief, exact shader specifications and fixed asset URLs.
- ASSET-PROMPT.en.md: the background artwork generation prompt.
- assets/: editable artwork, original PNGs, optimized WebP copies, SVG lettering and Three.js MIT license.
- desktop-preview.jpg, mobile-preview.jpg, menu-preview.jpg: actual browser captures of this edition.
- asset-manifest.json: original asset sizes and hashes.

## Controls

Explore Aethra opens the archive and lighting controls. Menu opens navigation, information and motion controls. The close button, Escape and outside clicks dismiss dialogs. The desktop CTA is226×56px and the phone CTA is220×54px.

## Verification

The scene and shaders were exercised in a browser at desktop and phone sizes. No runtime/shader errors were reported. The ZIP is integrity-checked and JavaScript syntax checks pass. The browser automation tool does not permit file:// navigation, so the direct local-file protocol was not exercised through that tool; the HTML is built with embedded runtime resources, classic scripts and data-URI textures specifically to remove local cross-origin/module dependencies.

All planetary content is fictional art direction. Three.js r160 is MIT-licensed; its license is included. Artwork dimensions are the real delivered dimensions and are not described as4K.
