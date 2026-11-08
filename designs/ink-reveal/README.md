# CRAFTLINE · Ink Reveal

参考视频：[ink-reveal-hover.mp4](https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/ink-reveal-hover.mp4)

[在线交互演示](https://craftline-ink-reveal.vercel.app/) · [英文提示词](prompt.md) · [轻量视频](assets/demo-mini.mp4)

在页面空白处移动鼠标，出现蓝色、洋红、橙色墨迹与液滴；墨迹与文字交叠时，文字变白。停止移动后，墨迹逐渐消散。手机支持手指拖动。空格切换自动演示，Esc 清空墨迹并关闭面板。

主画面的字形从参考视频中提取，墨迹纹理使用 AI 按参考风格重新生成，遮罩由实时 WebGL 驱动。它是基于视频的交互复刻，不是原站源码，也不保证随机流动的每一帧与视频完全相同。

Main、Story、Enquire、Start a project 和 Browse 均可交互。原视频没有展示的展开面板由本项目补全。表单只下载项目简介文本，不会发送邮件或收集资料。

## 运行与文件

完整解压 download.zip 后打开 index.html 即可运行；也可使用任意静态服务器。需要支持 WebGL 2 的现代浏览器。

- index.html：独立页面入口。
- assets/app.js、app.css：可直接运行的页面代码。
- assets/ink-engine.source.js、interface.source.jsx：可读的动效和界面源代码。
- assets/inline-assets.js：内嵌纹理，确保离线加载无需请求外部素材。
- assets/ink-texture.webp、craftline-wordmark.png、chevron.png：原始网页素材。
- assets/demo-mini.mp4：为网页卡片压缩的约 6 秒静音预览。
- previews/：实际浏览器截图。

完整开发项目使用 React + Vite。可读源文件修改后需重新打包；若仅替换文案和布局，参考 interface.source.jsx 与 app.css。复现同样效果时，请直接使用本目录的原代码与素材，单靠文字提示词不能保证跨平台完全一致。
