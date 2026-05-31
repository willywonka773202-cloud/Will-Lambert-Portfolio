# Lambert Labs — Portfolio

A recruiter-ready personal portfolio for Will Lambert, built with **Next.js + TypeScript + Tailwind CSS**.

It showcases **only real projects** that exist in the
[`willywonka773202-cloud`](https://github.com/willywonka773202-cloud) GitHub account and
the corresponding Vercel deployments. Nothing is invented from memory; descriptions are
grounded in real repository names and verified live-app content.

## Pages

- **Home** — headline, CTAs, and featured projects
- **Projects** — full grid + a transparent "Needs Review" section
- **Project detail** — `/projects/[slug]` case-study pages
- **GitHub** — real repo cards with review fallbacks
- **Live Apps** — verified Vercel deployments (duplicates kept separate)
- **About** / **Contact**

## Auto-syncs from GitHub — no manual editing

The portfolio generates itself from my GitHub account. Create a new repo (or
ship a deployment) and it shows up on its own:

- **Live fetch + daily ISR** — pages fetch the repo list from the GitHub API and
  revalidate every 24h (`lib/github.ts`, `lib/portfolio.ts`). New repos appear
  automatically; deployed repos (those with a published URL) land on **Live Apps**.
- **Daily refresh workflow** — `.github/workflows/refresh-portfolio.yml` runs
  `scripts/refresh-snapshot.mjs` once a day to refresh the committed fallback and
  trigger a redeploy.
- **Always-on fallback** — if the GitHub API is rate-limited or down, the site
  serves the committed snapshot (`data/snapshot.ts`) so it never breaks.

### Curation, kept simple

Auto-detection stays grounded via small, typed config files — you rarely touch them:

- `data/config.ts` — owner, inclusion rules (hash-named, forked, archived, and
  denylisted repos are filtered out), private-repo seeds, and Vercel extras
- `data/overrides.ts` — per-repo overrides: verified descriptions, featured flags,
  status, tech stack, and case-study detail. Add an entry to promote a freshly
  detected repo to a featured, fully written-up project.
- `data/snapshot.ts` — auto-generated offline fallback (don't edit by hand)

### Optional: `GITHUB_TOKEN`

Works out of the box on public repos. Set `GITHUB_TOKEN` (a fine-grained PAT) in
your Vercel/GitHub env to raise the rate limit and include private repos — they
appear under **Needs Review** automatically.

## Reusable components

`ProjectCard`, `StatusBadge`, `TechTag`, `ProjectGrid`, `ProjectDetail`, `RepoCard`,
`VercelProjectCard`, plus `Navbar`, `Footer`, and `PageHeader`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
npm run build      # production build

node scripts/refresh-snapshot.mjs  # refresh the GitHub snapshot manually
```

## Verified live apps

| Project | Repo | Live |
| --- | --- | --- |
| Sylistly | `willywonka773202-cloud/sylistly` | https://sylistly.vercel.app |
| BertOS — AI OS | `willywonka773202-cloud/bertos-ai-os` | https://bertos-ai-os.vercel.app |
| Carpool Optimizer | `willywonka773202-cloud/carpool-optimizer` | https://carpool-optimizer-five.vercel.app |
