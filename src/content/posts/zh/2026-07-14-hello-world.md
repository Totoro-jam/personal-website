---
title: "Hello World — 开篇"
description: "这个博客的搭建过程和技术选型：AstroPaper + Cloudflare Pages + AI 工程化。"
pubDatetime: 2026-07-14
modDatetime: 2026-07-14
tags: ["astro", "cloudflare", "blog"]
draft: false
---

为什么又搭了一个博客？因为需要一个干净、可控、零维护成本的地方写东西。

## 技术选型

### AstroPaper

在几个 Astro 主题之间做了对比：

| 主题 | Stars | 维护状态 |
|------|-------|---------|
| Astro Micro | 519 | 2025-09 后停滞 |
| **AstroPaper** | **4,300+** | **2026-06 活跃** |
| Astro Theme Cactus | 1,500+ | 一般 |

最终选了 AstroPaper：社区大、维护活跃、内置 i18n 和动态 OG 图片生成。Giscus 评论后续集成。

### Cloudflare Pages

部署选 Cloudflare Pages 的理由很简单：域名已在 CF、带宽无限、自动 HTTPS、构建快。

### AI 工程化

这个博客的一个实验：全程用 AI 辅助开发和维护。工程实践包括：

- `CLAUDE.md` — 项目治理入口，AI 协作规范
- 自定义 Skills — `new-post`（创建文章）、`deploy-check`（部署前自检）、`theme-tweak`（主题微调）
- Memory 系统 — 跨会话记录设计决策
- Hooks — 防破坏性操作、构建提醒

## 下一步

计划写的内容：

- 日常技术笔记
- 项目复盘
- 工具和效率

Stay tuned. ⛵️
