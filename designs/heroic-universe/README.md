# SeamSites — Heroic Universe / Motion II

原创双英雄电影风交互首页。Vesper：星际游侠；Aureon：机械骑士。

- [公开演示](https://seamsites-heroic-universe.vercel.app/?v=2)
- [在线作品集](https://seamsites-design-gallery.vercel.app/)
- 视频：assets/demo-mini.mp4，6 秒、640×360、24fps、无音轨，约 168 KB。
- prompt.md：英文复现提示词，代码与素材链接固定到 `ad39b7ba3d5d3be83ff16528a275f254be831a3f`。

## 第二版改进

人物与舞台分层：游侠转头、抬腕、呼吸及披风摆动；骑士抬臂、蓄能及复位，石台保持稳定。悬停人物增强各自能量光，点击场景触发动作与光环。鼠标会扰动前后两层卷流烟雾和余烬，并显示细线扫描光标。

人物选择器改为滑动指示器、分色斜向光幕与文案过渡。菜单改为全屏双栏轨道导航；人物档案使用右侧抽屉，故事采用底部时间线，宇宙介绍另用编辑式面板，不再共用一种展开样式。

这些动作使用透明原画结合二维关节网格制作，不是完整三维骨骼模型，也不是 AI 人物动作视频。两个人物保留在同一构图中；选择器改变焦点、动作和介绍。

## 本地运行

下载并完整解压后打开 index.html。已附带离线图层脚本及本地字体。也可在项目目录运行 `python -m http.server 8080`，打开 http://localhost:8080。

入口依次加载 assets/layers-data.js、motion-v2.js、app.js。style.css 为基本排版，motion-v2.css 为新版交互样式；assets/ 内含透明人物层、空舞台、合成原画、原始 PNG、字体及许可、视频与图标；previews/ 内为真实页面截图。

支持键盘焦点、Escape 关闭、暂停、初始减少动态效果偏好和手机布局。浏览器不支持 WebGL 时显示合成原画。文件无需第三方运行时库或在线字体。

## 素材与链接

分层原画由内置图片生成工具编辑制作。Barlow Condensed 字体许可见 assets/font-license.txt。提示词使用固定提交地址；后续 main 更新不会覆盖对应快照。仓库删除、历史清理、权限或网络限制仍可能影响访问，所以下载包同时包含本地媒体。
