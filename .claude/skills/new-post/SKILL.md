---
name: new-post
description: Create a new blog post with complete frontmatter, following the site's content standards.
---

# Create a New Blog Post

You are creating a new blog post for Totoro's Voyage Log. Follow this workflow — do not skip validation.

## Workflow

### 1. Gather Information

Ask the user (if not already provided):

- **Title**: Post title (will also generate slug)
- **Topic**: What the post is about
- **Tags**: 2-4 relevant tags (check existing tags in `src/content/posts/` for consistency)

### 2. Determine Slug

Convert title to slug: lowercase, replace spaces with hyphens, remove special chars.
Example: "My First Post — Hello!" → `my-first-post-hello`

### 3. Create File

Create `src/content/posts/<YYYY-MM-DD>-<slug>.md` with frontmatter:

```markdown
---
title: "Post Title"
description: "A concise description for SEO and post cards (120-160 chars recommended)."
pubDatetime: YYYY-MM-DD
tags: ["tag1", "tag2"]
draft: true
---

Content goes here...
```

### 4. Frontmatter Checklist

- [ ] `title` — filled, no quotes needed unless contains special chars
- [ ] `description` — 120-160 characters, describes what reader will learn
- [ ] `pubDate` — ISO format YYYY-MM-DD (today's date)
- [ ] `tags` — 2-4 lowercase tags, use existing tags when possible
- [ ] `draft` — set to `true` initially, change to `false` when ready to publish

### 5. Content Guidelines

- Start with a brief intro (2-3 sentences) — what is this post about and why it matters
- Use `## ` headings for sections (H2)
- Code blocks: specify language for syntax highlighting (` ```typescript `)
- Images: use Markdown `![alt](path)` syntax
- Links: use Markdown `[text](url)` syntax
- End with a closing thought or next steps

### 6. Verify

```bash
pnpm dev   # Check rendering in browser
pnpm build # Verify zero errors
```

After verification:

- [ ] Set `draft: false` if ready to publish
- [ ] Commit with message: `post: add <title>`
