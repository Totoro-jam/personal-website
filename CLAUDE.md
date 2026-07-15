# Totoro's Voyage Log — 个人网站

> 极简技术博客 + 项目展示。AI 驱动开发，Cloudflare Pages 零维护部署。

## 技术栈

- **框架**: Astro 6.x + TailwindCSS v4
- **主题**: AstroPaper (satnaing/astro-paper)
- **部署**: Cloudflare Pages
- **评论**: Giscus (GitHub Discussions)
- **搜索**: Pagefind (主题内置)
- **包管理**: pnpm
- **Node**: v22 LTS

## 质量红线

1. `pnpm build` 必须零错误零警告
2. 文章 frontmatter 必须完整：`title` / `description` / `pubDate` / `tags` / `draft`
3. 外链使用之前先验证可访问
4. 不推送包含 `draft: true` 的文章到生产环境
5. 每次修改样式后必须验证暗色/亮色模式都正常

## 常用命令

```bash
pnpm dev            # 开发服务器 (localhost:4321)
pnpm build          # 生产构建
pnpm preview        # 预览生产构建
pnpm lint           # 代码检查
```

## 目录结构

```
src/
├── components/     # Astro 组件（可覆盖主题默认组件）
├── content/
│   ├── posts/      # 博客文章 (.md/.mdx)
│   └── pages/      # 静态页面 (about.md 等)
├── layouts/        # 页面布局
├── pages/          # Astro 路由页面
├── styles/         # 全局样式 + 主题变量
├── config.ts       # 站点配置 (SITE 对象)
└── constants.ts    # 社交链接等常量
```

## 文章模板

```markdown
---
title: "文章标题"
description: "文章摘要，用于列表展示和 SEO"
pubDatetime: 2026-07-15
modDatetime: 2026-07-15
tags: ["tag1", "tag2"]
draft: false
---

正文内容...
```

## 提交规范

| 类型 | 用途 |
|------|------|
| `feat:` | 新功能 / 新组件 |
| `post:` | 新博客文章 |
| `fix:` | 修复 bug / 链接 |
| `style:` | 样式微调 |
| `chore:` | 配置 / 依赖 / CLAUDE.md 更新 |

## AI 协作规范

1. **修改样式前**：先读 `src/styles/global.css` 了解现有 CSS 变量体系
2. **新增组件前**：先检查主题是否已有类似组件可覆盖
3. **写文章时**：Markdown 优先，不需要 CMS
4. **部署前**：运行 `/deploy-check` skill 做自检
5. **不确定时**：先提方案，确认后再改代码
