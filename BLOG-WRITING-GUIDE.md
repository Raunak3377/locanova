# Blog Writing Guide

Write blog posts in:

`src/content/blog/`

## How to add a new post

1. Copy `src/content/blog/_template.md`
2. Rename file to URL slug, for example:
   - `my-new-growth-strategy.md`
3. Fill frontmatter + content
4. Commit and push to GitHub
5. On next build/deploy, the blog appears automatically at:
   - `/blog/my-new-growth-strategy`

## Frontmatter format

```md
---
title: "Your Blog Title"
description: "SEO description"
industry: institute
date: "2026-03-24"
---
```

`industry` values:
- `institute`
- `real-estate`
- `general`

## Notes

- Blog index `/blog/` auto-lists posts from markdown files
- Post URLs are generated from file names
- No code change needed for new blogs
