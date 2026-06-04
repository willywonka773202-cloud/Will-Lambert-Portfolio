# Project Context — Will Lambert Portfolio (for Codex)

This is the full, verified reference for the portfolio. The companion `PROMPT.md`
points here. Everything below was verified against the GitHub API and by loading the
live apps. **Re-verify before shipping — repos change.**

---

## 1. Source of truth
- **GitHub owner:** `willywonka773202-cloud` → https://github.com/willywonka773202-cloud
- **Vercel account:** "willywonka773202-cloud's projects"
- **Live portfolio:** https://will-lambert-portfolio.vercel.app
- **Contact email:** willywonka773202@gmail.com

## 2. Verified repositories

### Real, live, working apps (load these to confirm)
| Repo | Lang | Live URL | Notes |
| --- | --- | --- | --- |
| `sylistly` | TypeScript | https://sylistly.vercel.app | Fashion/outfit curation: themed outfit boards, filters (style/occasion/gender), per-piece breakdown w/ cost, Feed/Swipe/Build/Discover/Saved/Profile nav |
| `bertos-ai-os` | TypeScript | https://bertos-ai-os.vercel.app | Local-first AI OS dashboard: Oracle Channel (route prompts to Claude/Codex/Ollama/Gemini/Hermes), Mission Control, Provider Pantheon, Autopilot, Agent Legion |
| `bertos-v2` | TypeScript | https://bertos-v2.vercel.app | Newer BertOS — build automation + code editing, chat/voice, workspace/project mgmt, memory brain, multi-provider AI, task scheduling, Telegram integration |
| `carpool-optimizer` | TypeScript | https://carpool-optimizer-five.vercel.app | Carpool drop-off route planner: route personality (Fastest/Balanced/Alternate), avoidances, riders/stops, driver+seat assignment, repeat scheduling, pre-drive checklist, shareable links |

> Note: `carpool-optimizer`'s production alias is `carpool-optimizer-five.vercel.app`.
> `bertos-v2` was **auto-detected by the daily refresh workflow** — proof the
> auto-sync works. Decide whether `bertos-v2` supersedes `bertos-ai-os` as the
> featured BertOS, or feature both.

### Real but not finished — keep honest
| Repo | Lang | Visibility | Status to show | Why |
| --- | --- | --- | --- | --- |
| `deerfield-aquatics-schedule` | TypeScript | public | In Progress | Real code (~600KB), no deployment yet |
| `accounting` | — | public | Needs Review | Empty repo (size 0) |
| `will-life-morning-dashboard` | — | public | Needs Review | Empty repo (size 0) |
| `vibe-coding-platform` | TypeScript | private | Needs Review | Private + empty |
| `roblox-game-flipping` | Python | private | Needs Review | Private; real Python content |

> Private repos only appear via the unauthenticated API when a `GITHUB_TOKEN` is set.
> They're seeded manually in `data/config.ts` (`manualRepos`) so they still show
> under "Needs Review" for transparency.

### Always EXCLUDE (do not show)
- `sylistly-b2dc8756`, `7c6c3aae8fddc47a4b70cf66c226f7bb6ca9d07a` — hash-named / duplicate generated repos
- `unlocked-roblox` — Roblox concept the owner doesn't want shown
- `Will-Lambert-Portfolio` — the portfolio repo itself
- Any fork, archived repo, or remembered/concept project with no real repo/app

## 3. Vercel projects (mapping)
| Vercel project | Maps to | Treatment |
| --- | --- | --- |
| `sylistly` | repo `sylistly` | Primary (verified live) |
| `bertos-ai-os` | repo `bertos-ai-os` | Primary (verified live) |
| `bertos-v2` | repo `bertos-v2` | Primary (verified live) |
| `carpool-optimizer` | repo `carpool-optimizer` | Primary (verified live, prod alias `…-five`) |
| `accounting` | repo `accounting` | Unverified (empty source) |
| `vibe-coding-platform` | repo `vibe-coding-platform` | Unverified (private/empty) |
| `project-p0d2a` | — | Duplicate/preview — no clear GitHub match; keep out of main grid |
| `carpool-optimizer-be7l` | repo `carpool-optimizer` | Duplicate deployment — not the primary |

Primary live apps are derived automatically from each repo's GitHub `homepage` URL.
Duplicates/unverified are listed separately so the portfolio never shows confusing
duplicates as primary projects (`data/config.ts` → `vercelExtras`).

## 4. How the auto-sync works (current architecture)
- **`lib/github.ts`** — `fetchGithubRepos()` calls the GitHub REST API
  (`/users/<owner>/repos`), uses `GITHUB_TOKEN` if present, revalidates daily
  (`revalidate: 86400`), and returns the committed snapshot on any failure.
- **`lib/portfolio.ts`** — `getPortfolio()` merges live repos + manual private seeds,
  applies the exclusion rules, applies per-repo overrides, auto-classifies status
  (private/empty → Needs Review; has homepage → Live; else In Progress), derives live
  URLs from `homepage`, and splits results into projects / review repos / Vercel
  primary+review+duplicate.
- **`data/config.ts`** — owner, `DENYLIST`, `isHashName()`, `isAllowedRepo()`,
  `manualRepos` (private seeds), `vercelExtras`.
- **`data/overrides.ts`** — per-repo curation: verified description, tagline, brand
  colors, status, category, tech stack, `featured`, and full case-study `detail`.
  **This is the one file you edit to promote/curate a project.**
- **`data/snapshot.ts`** — committed fallback, **auto-generated** by
  `scripts/refresh-snapshot.mjs`. Don't hand-edit.
- **`.github/workflows/refresh-portfolio.yml`** — daily (07:00 UTC) + manual; runs the
  refresh script and commits an updated snapshot, triggering a redeploy.
- **ISR** — pages set `export const revalidate = 86400`; `/projects/[slug]` sets
  `dynamicParams = true` so newly detected repos render on demand.

### To add a brand-new app: do nothing
It appears automatically within a day. To **feature** it or write a real case study,
add an entry in `data/overrides.ts` keyed by the repo name.

## 5. Pages & components
- **Pages:** Home (landing), Projects (grid + "Needs Review" section), Project detail
  `/projects/[slug]`, GitHub (repo cards + review fallback), Live Apps (Vercel),
  About, Contact, 404.
- **Components:** `ProjectCard`, `ProjectGrid`, `ProjectDetail`, `ProjectLogo`
  (gradient monogram per app — curated colors for known apps, deterministic from name
  for auto-detected ones), `StatusBadge`, `TechTag`, `RepoCard`, `VercelProjectCard`,
  `Navbar`, `Footer`, `Reveal` (scroll animation), `PageHeader`.

## 6. Design system (current)
- Dark palette in `tailwind.config.ts` (`base.*`, `accent.*`, `ink.*`), emerald/cyan
  accent, gradient text, animated hero aurora, tech marquee, card hover-lift, button
  sheen — all gated by `prefers-reduced-motion` in `app/globals.css`.
- Branding: **"Portfolio"** (not "Lambert Labs").
- Statuses: `Live` · `In Progress` · `Prototype` · `Needs Review`.

## 7. Commands
```bash
npm install
npm run dev        # local dev (http://localhost:3000)
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run build      # production build
node scripts/refresh-snapshot.mjs   # refresh GitHub snapshot (honors GITHUB_TOKEN)
```

## 8. Environment
- `GITHUB_TOKEN` (optional, recommended): a read-only fine-grained PAT. Raises the API
  rate limit and includes private repos. Set it in Vercel → Project → Settings →
  Environment Variables, and locally for the refresh script. Without it, the site
  works on public repos and falls back to the snapshot when rate-limited.

## 9. Known follow-ups / ideas
- Real screenshots/OG images for live apps instead of placeholder tiles.
- Decide `bertos-v2` vs `bertos-ai-os` featuring.
- Project filtering/search; richer grounded case studies; a11y + Lighthouse pass;
  CI (typecheck/lint/build) on PRs.
