# Codex Rebuild Prompt — Will Lambert Portfolio

> Paste everything below (from "You are taking over…" to the end) into Codex as
> your opening message, with this repository open as the working directory.
> It is self-contained, but it also points Codex at `PROJECT_CONTEXT.md` and the
> existing codebase so nothing is lost.

---

You are taking over an existing personal portfolio website and rebuilding it to be
even better. **Read this entire prompt, then read `codex-handoff/PROJECT_CONTEXT.md`
and the existing codebase before writing any code.** The current site already works
and is deployed on Vercel — treat it as a strong starting point to improve, not a
blank slate.

## What this project is
A recruiter-ready personal portfolio for **Will Lambert** that showcases his real
apps. The defining principle: **it only ever shows real projects that actually exist
in his GitHub and Vercel — never invented, remembered, or placeholder projects.**
The site auto-detects new apps from GitHub so it stays current with zero manual edits.

- GitHub owner (source of truth): `willywonka773202-cloud`
- Vercel account: "willywonka773202-cloud's projects"
- Live site: https://will-lambert-portfolio.vercel.app

## Non-negotiables (do NOT regress these)
1. **Only real projects.** Pull the project list live from the GitHub API. Never
   hardcode fake projects or invent descriptions/features from memory. If you can't
   verify something, mark it "Needs Review" instead of dressing it up.
2. **Keep auto-detection.** A new repo on the account must appear on the site
   automatically (daily), with no code edits. Preserve the live-fetch + daily
   revalidation + committed-snapshot-fallback design (see PROJECT_CONTEXT.md).
3. **Keep the exclusion rules.** Hash-named repos (e.g. `sylistly-b2dc8756`,
   `7c6c3aae…`), forks, archived repos, duplicate generated repos, and the denylist
   (`unlocked-roblox`, the portfolio repo itself) must stay filtered out.
4. **Grounded descriptions only.** Descriptions must come from the repo name, the
   GitHub description/homepage, or content actually observed on the live app — never
   guessed.
5. **Never break the build when GitHub is rate-limited.** The site must fall back to
   the committed snapshot and still render. (Vercel build IPs are often rate-limited
   unauthenticated; a `GITHUB_TOKEN` env var is supported and recommended.)
6. **Quality bar:** TypeScript, fully responsive/mobile, no broken links, no empty
   filler, no placeholder brands. `npm run typecheck`, `npm run lint`, and
   `npm run build` must all pass, and every page/route must load.

## The real projects (verified — confirm again live before shipping)
**Live, working apps (verified reachable):**
- `sylistly` — fashion/outfit curation app — https://sylistly.vercel.app
- `bertos-ai-os` — local-first AI operating system dashboard — https://bertos-ai-os.vercel.app
- `bertos-v2` — newer BertOS (build automation, chat/voice, memory, multi-provider AI, Telegram) — https://bertos-v2.vercel.app
- `carpool-optimizer` — carpool drop-off route planner — https://carpool-optimizer-five.vercel.app

**Real but not finished (keep honest / "Needs Review" or "In Progress"):**
- `deerfield-aquatics-schedule` — public TypeScript scheduling app, no deployment yet
- `accounting` — empty repo
- `will-life-morning-dashboard` — empty repo
- `vibe-coding-platform` — private, empty
- `roblox-game-flipping` — private Python project

**Never include:** hash-named/duplicate repos, `unlocked-roblox`, or any
remembered/concept project that has no real repo or app.

(See PROJECT_CONTEXT.md for the full verified table, statuses, and Vercel mapping.)

## Current tech (you may keep, upgrade, or replace with justification)
- Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Vercel
- Auto-sync: `lib/github.ts` (fetch), `lib/portfolio.ts` (build the portfolio),
  `data/config.ts` (rules + private-repo seeds + Vercel extras),
  `data/overrides.ts` (per-repo curation), `data/snapshot.ts` (auto-generated
  fallback), `scripts/refresh-snapshot.mjs` + `.github/workflows/refresh-portfolio.yml`
  (daily refresh)
- Components: `ProjectCard`, `ProjectGrid`, `ProjectDetail`, `ProjectLogo`,
  `StatusBadge`, `TechTag`, `RepoCard`, `VercelProjectCard`, `Navbar`, `Footer`,
  `Reveal`, `PageHeader`
- Pages: Home, Projects, Project detail (`/projects/[slug]`), GitHub, Live Apps,
  About, Contact, 404

## Design direction
Professional, **dark mode**, clean, modern, slightly AI-dashboard-inspired but not
chaotic. It must read like a premium product **landing page** that sells how good
these apps are, and a recruiter must "get it" within 20 seconds. Per-app logos,
tasteful motion (respecting `prefers-reduced-motion`), strong hierarchy. Branding is
simply **"Portfolio"** (the previous "Lambert Labs" name was dropped).

## Your mission: rebuild it better
Improve the site meaningfully while honoring every non-negotiable above. Strong
candidate improvements (use judgment, propose your own):
- **Real screenshots** of each live app (e.g. fetch OpenGraph images, or a small
  screenshot pipeline) instead of placeholder tiles — only for apps confirmed live.
- Richer, still-grounded case studies; pull README/topics via the API where useful.
- Project **filtering/search** by category, status, and tech.
- Sharper visual design, better typography, motion, and performance (Lighthouse).
- Accessibility pass (focus states, semantics, color contrast, reduced motion).
- Add a lightweight **test** or two and CI (typecheck + lint + build on PRs).
- Make the GitHub data layer more robust (caching, error states, `GITHUB_TOKEN`).

## Workflow
1. Read `codex-handoff/PROJECT_CONTEXT.md` and skim the codebase (`app/`,
   `components/`, `lib/`, `data/`).
2. Re-verify the live project list against the GitHub API and load each live URL to
   confirm it still works; update statuses/descriptions from what you actually see.
3. Propose a short plan, then implement.
4. Run `npm install`, `npm run typecheck`, `npm run lint`, `npm run build`; fix all
   errors. Run the app and click through every page on desktop and mobile widths.
5. Keep `data/snapshot.ts` current (run `node scripts/refresh-snapshot.mjs` with a
   `GITHUB_TOKEN` if available) and ensure the daily auto-sync still works.

Deliver a portfolio that is unmistakably real, current, fast, and impressive — with
zero fake projects.
