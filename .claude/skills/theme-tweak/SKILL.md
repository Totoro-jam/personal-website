---
name: theme-tweak
description: Systematic theme customization — adjust colors, fonts, layout, or override components. Always verify both light and dark modes.
---

# Theme Tweak Workflow

AstroPaper theming works through CSS custom properties on `:root` and `[data-theme="dark"]`. Follow this workflow when adjusting the theme.

## Step 1: Read Current State

Before changing anything:
```bash
# Understand the current CSS variable system
cat src/styles/global.css
```

AstroPaper's key variables:
- `--background` / `--foreground` — page background/text
- `--accent` — links, buttons, active states
- `--muted` / `--border` — subtle backgrounds and borders
- `--card-bg` — card component background

## Step 2: Make Changes

### Color Adjustments (most common)

Edit `src/styles/global.css`:

```css
:root, html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #282728;
  --accent: #YOUR_COLOR;    /* ← change this */
  --muted: #e6e6e6;
  --border: #ece9e9;
}

html[data-theme="dark"] {
  --background: #212737;
  --foreground: #eaedf3;
  --accent: #YOUR_COLOR;    /* ← change this too */
  --muted: #343f60bf;
  --border: #ab4b08;
}
```

### Component Override

To replace a theme component:
1. Find the component in `src/components/`
2. Create a file with the same name to shadow it
3. Use the original as reference but customize as needed

Never modify theme components directly in `node_modules/`.

### Layout Adjustments

`max-w-app` in `global.css` controls content width:
```css
.max-w-app { max-width: 768px; }  /* default, change as needed */
```

## Step 3: Verify Both Modes

```bash
pnpm dev
```

- [ ] Light mode: all text readable, accent color visible
- [ ] Dark mode: no blinding white elements, contrast adequate
- [ ] Toggle: switching between modes is smooth (no FOUC)
- [ ] Code blocks: syntax highlighting works in both modes

## Step 4: Build and Commit

```bash
pnpm build   # Must pass with zero errors
```

Commit with: `style: <description of change>`
