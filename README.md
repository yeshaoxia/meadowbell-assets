# 设计作品仓库

所有设计统一存放在 [designs/](designs/)，根目录只保留导航与仓库规则。

| 项目 | 内容 | 入口 |
| --- | --- | --- |
| Meadowbell | 原仓库根目录中的图片与循环视频 | [项目目录](designs/meadowbell/) |
| Lumora | 图片与循环视频 | [项目目录](designs/lumora/) |
| ORBE — Planet Atlas | 行星交互页面、素材、提示词、预览 | [项目目录](designs/orbe-planet-atlas/) |
| SeamSites v3 | 四季森林页面、9张素材、英文提示词 | [项目目录](designs/seamsites/) |

## 后续新增设计

从 [项目模板](designs/_template/) 复制目录，以清晰的英文小写项目名命名。每个项目单独分类；不要在仓库根目录散放素材。

- assets/：素材，继续按图片、视频、天空、动物、植物等用途细分。
- code/：页面与实现代码。
- prompts/：复现提示词与图片生成提示词。
- previews/：真实页面截图、录屏。
- docs/：说明、素材清单、授权信息。
- downloads/：面向用户的交付压缩包。
- versions/：需要保留的历史版本，按 v1、v2 等单独归档。

## 链接迁移

此次归类移动了38个原有文件，图片与视频内容保持不变。仓库内已知的 main 分支引用已更新。旧的 main/原路径 地址需要改成新路径；此前固定到历史提交的链接不受影响。

完整路径对应表见 [迁移清单](designs/migration-map.json)。外部复制过的旧提示词建议重新复制新版。没有归档的源码、提示词和截图会明确标注，不会凭空补造。
