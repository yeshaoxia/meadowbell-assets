# SeamSites — Heroic Universe / Motion III

[公开演示](https://seamsites-heroic-universe.vercel.app/?v=3) · [作品集](https://seamsites-design-gallery.vercel.app/)

## 本次修正

撤掉二维关节网格、局部旋转和披风拉伸，人物恢复为固定比例的独立透明原画。头部、手臂、盔甲及石台不会跟着鼠标变形或滑动。人物保留轻柔能量光，未提供真实肢体动作；明显动作需要另行制作动作视频或三维模型。

鼠标使用原生光标，移除额外准星、镜头跟随、霓虹描边及腕部旋转环。烟雾和 48 个余烬粒子只接受低强度、按帧平滑的鼠标影响。烟雾使用更轻的三层噪声，渲染更新上限约 60 次/秒，像素比上限 1.2；设备实际帧率仍取决于硬件。

保留全屏轨道导航、人物档案侧栏、故事时间线、宇宙介绍、人物选择切换和沉浸模式。支持暂停、键盘焦点、Escape 及初始减少动态效果偏好。

## 文件与运行

完整解压后打开 index.html，或运行 `python -m http.server 8080`。全部素材与字体随包提供。motion-v2.js 和 motion-v2.css 文件名为兼容既有目录保留，内容已更新为本次修正版。

视频 assets/demo-mini.mp4：6 秒、640×360、24fps、无音轨，约 114 KB。previews/desktop-v3.webp 为修正版实拍。prompt.md 中代码与媒体链接固定到 `54f1d9778a10dc78a17109ce4b419281651070ce`。复用代码和原画可保持结果，单独复制文字到不同 AI 平台不保证一致。

透明人物层和舞台由内置图片生成工具从原合成图编辑制作。原合成 PNG 已保留。字体许可见 assets/font-license.txt。
