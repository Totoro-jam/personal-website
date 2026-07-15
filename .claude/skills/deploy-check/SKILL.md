---
name: deploy-check
description: Pre-deployment quality check — build, lint, link verification, and content validation.
---

# Pre-Deployment Quality Check

Run this before pushing to production. Acts as a final gate — if any step fails, fix it before deploying.

## Checklist

### 1. Build Verification

```bash
pnpm build
```

- [ ] Zero errors
- [ ] Zero warnings (warnings today = errors tomorrow)
- [ ] Check output size (unexpectedly large = probably an unoptimized image)

### 2. Lint Check

```bash
pnpm lint 2>/dev/null || echo "No linter configured — skip"
```

### 3. Content Validation

Scan all posts for common issues:

- [ ] No posts with `draft: true` (unless intentionally pre-publishing)
- [ ] All `pubDate` values are valid dates
- [ ] All tags are lowercase, no typos
- [ ] All internal links are relative paths (not absolute localhost URLs)
- [ ] No placeholder text ("lorem ipsum", "TODO", "TBD") in published posts

Run this check:

```bash
grep -r "draft: true" src/content/posts/ && echo "WARNING: Draft posts found!" || echo "No drafts"
grep -r "TODO\|TBD\|lorem ipsum" src/content/ --include="*.md" && echo "WARNING: Placeholder text found!" || echo "No placeholders"
```

### 4. Link Verification

For any new or modified external links:

```bash
# Check each new external link returns 200
curl -sI <url> | head -1
```

### 5. Visual Spot-Check

```bash
pnpm preview
```

- [ ] Homepage loads without layout shift
- [ ] At least one post page loads with correct metadata
- [ ] Dark mode toggle works
- [ ] Search (Pagefind) returns results
- [ ] Mobile viewport looks reasonable (use browser dev tools)

### 6. Final Gate

If all above pass:

- [ ] Ready to `git push`
- [ ] Cloudflare Pages will auto-deploy from `main` branch
