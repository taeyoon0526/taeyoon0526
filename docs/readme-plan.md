# README Redesign Plan

## Goal

Rebuild the `taeyoon0526/taeyoon0526` profile README into a compact developer landing page for Taeyoon Kim: a Korean student builder shipping SaaS, Discord automation, infrastructure workflows, security-minded tooling, and AI-assisted engineering pipelines.

## Brand positioning

- Name: Taeyoon Kim
- Username: `taeyoon0526`
- Contact email: `me@taeyoon.kr`
- Core line: `Turning small ideas into production-grade systems`
- Positioning: `SaaS / Infra / Automation Builder`
- Supporting workflow: `Prompt → Plan → Patch → Verify → Deploy`
- Tone: English-first, restrained SaaS landing page, calm neon terminal/HUD accents, one Korean motto.

## Current README analysis

- Current structure: capsule-render banner, Korean intro, shield badges, About Me bullets, Live Things table, stack badges, GitHub stats widgets.
- Existing external images: capsule-render, shields.io, GitHub Readme Stats, Streak Stats, Activity Graph.
- Existing contact links: GitHub, bot.nexiott.shop, vend.nexiott.shop, Discord user link, Telegram `taeyoon0526`.
- Existing stats/widgets: GitHub stats, top languages, streak, activity graph.
- Existing folders before redesign: no `assets/`, `docs/`, `.github/workflows/`, or `scripts/`.
- Preserve: small-idea-to-real-service message, Cloudflare/Discord automation direction, GitHub stats widgets.
- Remove or replace: badge-wall feel, capsule-render dependency for hero, shallow Live Things table, overly generic stack badge list.

## Section structure

1. Hero / Neon Terminal Boot
2. Status HUD / Quick Identity
3. About
4. Featured Projects
5. Discord Ops Lab
6. AI Engineering Lab
7. Stack Map
8. GitHub Stats / Widgets
9. Contribution Snake
10. Contact / Links
11. Maintenance and validation notes

## Asset inventory

- `assets/hero/terminal-hero.svg`
- `assets/hero/terminal-hero-static.svg`
- `assets/projects/projects-overview.svg`
- `assets/projects/qcut-architecture.svg`
- `assets/projects/nexi-vend-architecture.svg`
- `assets/projects/foram-ops-pipeline.svg`
- `assets/ai/ai-workflow-pipeline.svg`
- `assets/widgets/neon-stats-frame.svg`
- `assets/widgets/contribution-snake-frame.svg`
- `assets/widgets/github-contribution-grid-snake.svg`
- `assets/widgets/github-contribution-grid-snake-dark.svg`

## SVG design system

- Palette: `#0D1117`, `#111827`, `#2A3344`, `#F8FAFC`, `#94A3B8`, `#F97316`, `#A855F7`, `#38BDF8`, `#22C55E`, `#FACC15`, `#EF4444`.
- Style: dark panels, thin neon borders, terminal monospace labels, architecture-card layout.
- Constraints: no `<script>`, no external CSS or JS, avoid `<foreignObject>`, keep large assets at or below 894px wide and project cards at 430px wide.

## Widget strategy

- Keep external widgets as supporting context, not the main visual identity.
- Use local SVG section frames so README still looks intentional if third-party widgets fail.
- Include GitHub Readme Stats, Top Languages, Streak Stats, Activity Graph, Profile Trophy, Visitor Counter, and Contribution Snake.
- Keep Profile Trophy and Visitor Counter visually secondary.
- Treat volatile widget providers as non-blocking link-check warnings while still validating core project and contact links.

## GitHub Actions strategy

- `snake.yml`: use `Platane/snk@v3`, run daily, on manual dispatch, and on main pushes; write light/dark snake SVGs under `assets/widgets/`.
- `readme-validation.yml`: validate Markdown, local assets, SVG widths, unsafe SVG tags, alt text, secret-like patterns, and links.
- `wakatime.yml`: optional workflow; skip gracefully unless `WAKATIME_API_KEY` is configured.

## Validation checklist

- `npx --yes markdownlint-cli2 README.md "docs/**/*.md"`
- `node scripts/check-readme-assets.mjs`
- `node scripts/check-readme-secrets.mjs`
- `node scripts/check-readme-links.mjs`
- `find assets -name '*.svg' -print0 | while IFS= read -r -d '' file; do npx --yes svgo --input "$file" --output - --quiet > /dev/null; done`
- `npx --yes lychee README.md`
- Confirm all local image references exist.
- Confirm every README image has alt text.
- Confirm large SVG width is no more than 894px and card SVG width is no more than 430px.
- Confirm README contains no raw IPs, secrets, tokens, webhook URLs, database URLs, service-role keys, or private operational IDs.

## Privacy/security constraints

- Do not expose secrets, tokens, API keys, private keys, webhook URLs, raw IPs, DB URLs, Redis URLs, Supabase service-role keys, Discord bot tokens, Discord server or role IDs, user data, logs, dumps, or production login details.
- Public/private project details should stay at system-summary level.
- Prefer general terms such as `self-hosted`, `runtime cluster`, `monitoring`, and `security hardening`.

## Final file list

- `README.md`
- `docs/readme-plan.md`
- `docs/README.backup.md`
- `assets/hero/terminal-hero.svg`
- `assets/hero/terminal-hero-static.svg`
- `assets/projects/projects-overview.svg`
- `assets/projects/qcut-architecture.svg`
- `assets/projects/nexi-vend-architecture.svg`
- `assets/projects/foram-ops-pipeline.svg`
- `assets/ai/ai-workflow-pipeline.svg`
- `assets/widgets/neon-stats-frame.svg`
- `assets/widgets/contribution-snake-frame.svg`
- `assets/widgets/github-contribution-grid-snake.svg`
- `assets/widgets/github-contribution-grid-snake-dark.svg`
- `.github/workflows/snake.yml`
- `.github/workflows/readme-validation.yml`
- `.github/workflows/wakatime.yml`
- `scripts/check-readme-assets.mjs`
- `scripts/check-readme-secrets.mjs`
- `scripts/check-readme-links.mjs`
- `scripts/update-wakatime-section.mjs`
- `.markdownlint.json`
