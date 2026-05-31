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

## Data is the source of truth

All content lives in typed data files so the portfolio stays grounded and easy to update:

- `data/projects.ts` — featured/case-study projects
- `data/repos.ts` — real GitHub repositories
- `data/vercelProjects.ts` — Vercel deployments and their GitHub matches

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
```

## Verified live apps

| Project | Repo | Live |
| --- | --- | --- |
| Sylistly | `willywonka773202-cloud/sylistly` | https://sylistly.vercel.app |
| BertOS — AI OS | `willywonka773202-cloud/bertos-ai-os` | https://bertos-ai-os.vercel.app |
| Carpool Optimizer | `willywonka773202-cloud/carpool-optimizer` | https://carpool-optimizer-five.vercel.app |
