<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/hero/terminal-hero.svg">
    <img src="./assets/hero/terminal-hero-static.svg" alt="Taeyoon Kim - Turning small ideas into production-grade systems" width="894">
  </picture>
</p>

<p align="center">
  <strong>SaaS / Infra / Automation Builder</strong><br>
  <span>Prompt → Plan → Patch → Verify → Deploy</span><br>
  <sub>작은 아이디어를 실제로 돌아가는 시스템으로 만듭니다.</sub>
</p>

<p align="center">
  <a href="https://github.com/taeyoon0526">GitHub</a>
  ·
  <a href="mailto:me@taeyoon.kr">Email</a>
  ·
  <a href="https://qcut.me">QCut</a>
  ·
  <a href="https://bot.nexiott.shop">Discord Hub</a>
  ·
  <a href="https://discord.com/users/1173942304927645786">Discord</a>
  ·
  <a href="https://t.me/ferox_ty">Telegram</a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=taeyoon0526&amp;style=flat-square&amp;color=38BDF8&amp;label=Profile%20views" alt="Profile view counter">
</p>

## Status HUD

| Signal | Current focus |
| --- | --- |
| Identity | Korean student builder shipping small but real systems |
| Positioning | SaaS, infrastructure, Discord automation, and AI-assisted engineering workflows |
| Operating style | Build the spec, patch the repo, verify the result, deploy with guardrails |
| Public contact | [me@taeyoon.kr](mailto:me@taeyoon.kr) |

## About

I build small but real systems: link platforms, Discord automation, infrastructure workflows, and security-minded tools. The work I like most is practical: a product someone can open, an operations flow that saves time, or a service that keeps running after the first deploy.

I am a Korean student builder exploring real-world SaaS, automation, and infrastructure. I care about clean user flows, clear system boundaries, monitoring, and the small operational details that make a tool usable after launch.

## Featured Projects

Not just demos. These are systems designed around deployment, operations, and maintainability.

<p align="center">
  <img src="./assets/projects/projects-overview.svg" alt="Featured systems map connecting QCut, Nexi Vend, and Foram" width="894">
</p>

<table>
  <tr>
    <td width="50%" valign="top">
      <img src="./assets/projects/qcut-architecture.svg" alt="QCut architecture showing auth, link API, analytics, QNote, and security workflow" width="430">
      <h3>QCut — Link Analytics + QNote Platform</h3>
      <p><a href="https://qcut.me">qcut.me</a></p>
      <p>A production-focused link platform combining short URLs, click analytics, QNote sharing, auth, API workflows, i18n, and security hardening.</p>
      <p><strong>Build surface:</strong> Next.js, TypeScript, Tailwind CSS, Clerk, PostgreSQL, Redis, Drizzle, Zod, Recharts, Cloudflare, Caddy, Docker Compose, Turnstile, Sentry, Playwright, Vitest, POEditor, gitleaks.</p>
    </td>
    <td width="50%" valign="top">
      <img src="./assets/projects/nexi-vend-architecture.svg" alt="Nexi Vend architecture showing Discord bot, Cloudflare Pages, Supabase, Redis workers, and monitoring" width="430">
      <h3>Nexi Vend — Distributed Runtime + Web Control Panel</h3>
      <p><a href="https://bot.nexiott.shop">bot.nexiott.shop</a></p>
      <p>A Discord-connected digital commerce system with a web control panel, Supabase-backed source of truth, Redis-driven background workers, and runtime monitoring.</p>
      <p><strong>Build surface:</strong> Discord Bot, Cloudflare Pages, Supabase, Postgres, Storage, RPC, Redis, Python runtime, multi-host services, Prometheus, Sentry, health checks, workers.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="./assets/projects/foram-ops-pipeline.svg" alt="Foram operations pipeline showing voice, chat, ticket, backup, and DM workflows" width="430">
      <h3>Foram — Discord Community Operations Suite</h3>
      <p>A Discord operations suite for community management, meeting audit logs, voice and chat activity tracking, Newface management, ticket workflows, backups, announcements, and moderation utilities.</p>
      <p><strong>Build surface:</strong> discord.py 2.7.1, SQLite, aiosqlite, persistent views, slash commands, server structure backup and restore, photo channel sticky threads, message auto-delete, reaction checks, welcome messages, announcement DM.</p>
    </td>
    <td width="50%" valign="top">
      <h3>Operating Pattern</h3>
      <p>The shared pattern across these projects is simple: ship a working system, automate the repetitive parts, harden the edges, and observe the runtime.</p>
      <table>
        <tr><td><strong>Ship</strong></td><td>Real services and control panels</td></tr>
        <tr><td><strong>Automate</strong></td><td>Bots, workers, workflows, and background jobs</td></tr>
        <tr><td><strong>Secure</strong></td><td>Auth, validation, abuse checks, secret scanning</td></tr>
        <tr><td><strong>Observe</strong></td><td>Logs, health checks, analytics, regression tests</td></tr>
      </table>
    </td>
  </tr>
</table>

## Discord Ops Lab

Discord is not just a chat surface here. It is an operations environment with admin workflows, persistent UI, audit trails, and automation that has to survive restarts.

| Area | What it demonstrates |
| --- | --- |
| Foram | Community operations, voice and chat tracking, ticket workflows, backups, announcements, moderation utilities |
| Ticket systems | Admin workflows, transcripts, slash commands, persistent views, and support handoff patterns |
| bot.nexiott.shop | A Cloudflare Pages hub for bot landing pages, OAuth callbacks, KV-backed stats, and admin APIs |
| Discord UI Engineering Notes | Component V2 research and implementation notes for discord.py-based interfaces |

## AI Engineering Lab

<p align="center">
  <img src="./assets/ai/ai-workflow-pipeline.svg" alt="AI engineering workflow pipeline from Prompt to Deploy" width="894">
</p>

I use AI as a structured engineering layer: research the problem, shape a spec, patch the code, verify the result, and ship with guardrails. Codex and other LLM tools fit into the loop as assistants for repo analysis, planning, implementation, QA, code review, and security hardening.

The goal is not to skip engineering judgment. The goal is to make the loop more explicit: Ideation → Spec → Build → Audit → Deploy.

## Stack Map

| Ship | Automate | Secure | Observe |
| --- | --- | --- | --- |
| Next.js | Python | Clerk | Sentry |
| React | discord.py | Turnstile | Simple Analytics |
| TypeScript | GitHub Actions | Zod | Prometheus |
| Tailwind CSS | Redis | CSP | Playwright |
| PostgreSQL | Workers | gitleaks | Vitest |
| Drizzle | Supabase RPC | secret scanning | BrowserStack |
| Docker Compose | CLI tools | rate limiting | Recharts |
| Caddy / Cloudflare / VPS | tmux / systemd | audit logs | logs / health checks |

## GitHub Snapshot

<p align="center">
  <img src="./assets/widgets/neon-stats-frame.svg" alt="Neon frame introducing GitHub stats and activity widgets" width="894">
</p>

<p align="center">
  <img width="430" src="https://github-readme-stats.vercel.app/api?username=taeyoon0526&amp;show_icons=true&amp;include_all_commits=true&amp;rank_icon=percentile&amp;bg_color=0D1117&amp;title_color=F97316&amp;text_color=F8FAFC&amp;icon_color=38BDF8&amp;border_color=2A3344&amp;cache_seconds=21600" alt="Taeyoon Kim GitHub stats">
  <img width="430" src="https://github-readme-stats.vercel.app/api/top-langs/?username=taeyoon0526&amp;layout=compact&amp;langs_count=8&amp;bg_color=0D1117&amp;title_color=A855F7&amp;text_color=F8FAFC&amp;border_color=2A3344&amp;cache_seconds=21600" alt="Taeyoon Kim top languages">
</p>

<p align="center">
  <img width="894" src="https://streak-stats.demolab.com?user=taeyoon0526&amp;theme=dark&amp;background=0D1117&amp;border=2A3344&amp;stroke=38BDF8&amp;ring=F97316&amp;fire=A855F7&amp;currStreakLabel=F8FAFC&amp;sideLabels=94A3B8&amp;dates=94A3B8" alt="Taeyoon Kim GitHub streak stats">
</p>

<p align="center">
  <img width="894" src="https://github-readme-activity-graph.vercel.app/graph?username=taeyoon0526&amp;bg_color=0D1117&amp;color=F8FAFC&amp;line=38BDF8&amp;point=F97316&amp;area=true&amp;area_color=A855F7&amp;hide_border=true&amp;custom_title=Recent%20Activity%20Graph" alt="Taeyoon Kim recent GitHub activity graph">
</p>

<p align="center">
  <img width="894" src="https://github-profile-trophy.vercel.app/?username=taeyoon0526&amp;theme=onedark&amp;no-frame=true&amp;no-bg=true&amp;margin-w=8&amp;margin-h=8&amp;column=7" alt="Taeyoon Kim GitHub profile trophies">
</p>

## Contribution Snake

<p align="center">
  <img src="./assets/widgets/contribution-snake-frame.svg" alt="Neon frame introducing the contribution snake" width="894">
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/widgets/github-contribution-grid-snake-dark.svg">
    <img src="./assets/widgets/github-contribution-grid-snake.svg" alt="GitHub contribution snake animation for taeyoon0526" width="894">
  </picture>
</p>

## Contact

Explore the projects, check the systems, or reach out if you want to talk about building useful tools.

| Channel | Link |
| --- | --- |
| GitHub | [github.com/taeyoon0526](https://github.com/taeyoon0526) |
| Email | [me@taeyoon.kr](mailto:me@taeyoon.kr) |
| QCut | [qcut.me](https://qcut.me) |
| Discord Hub | [bot.nexiott.shop](https://bot.nexiott.shop) |
| Discord | [discord.com/users/1173942304927645786](https://discord.com/users/1173942304927645786) |
| Telegram | [t.me/ferox_ty](https://t.me/ferox_ty) |

<details>
  <summary>Maintenance and validation notes</summary>

- Local README assets are checked with `scripts/check-readme-assets.mjs`.
- Secret-like patterns, raw IP addresses, webhook URLs, and private operational details are checked with `scripts/check-readme-secrets.mjs`.
- Contribution snake SVGs are generated by `.github/workflows/snake.yml`.
- WakaTime stats are optional and only update when `WAKATIME_API_KEY` is configured.
- External widgets are useful context, but the README still has local SVG sections if a widget provider is temporarily unavailable.

<!--START_SECTION:waka-->
WakaTime stats are not configured yet. Add `WAKATIME_API_KEY` to enable the optional workflow.
<!--END_SECTION:waka-->

</details>
