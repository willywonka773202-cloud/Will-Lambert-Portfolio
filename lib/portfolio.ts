import type { GhRepo, Project, ProjectStatus, Repo, VercelProject } from "@/data/types";
import { isAllowedRepo, manualRepos, vercelExtras } from "@/data/config";
import { projectOverrides } from "@/data/overrides";
import { fetchGithubRepos } from "./github";

export interface Portfolio {
  projects: Project[];
  featured: Project[];
  /** All non-review repos, for the GitHub "active" section. */
  verifiedRepos: Repo[];
  reviewRepos: Repo[];
  vercel: {
    primary: VercelProject[];
    review: VercelProject[];
    duplicate: VercelProject[];
  };
  source: "live" | "snapshot";
  counts: { projects: number; live: number; repos: number };
}

function monthYear(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function httpUrl(value: string | null): string | undefined {
  if (!value) return undefined;
  const v = value.trim();
  return /^https?:\/\//i.test(v) ? v : undefined;
}

/** Auto-classify a repo's status when no manual override exists. */
function deriveStatus(repo: GhRepo, live?: string): ProjectStatus {
  if (repo.private) return "Needs Review";
  if (repo.size === 0) return "Needs Review";
  if (live) return "Live";
  return "In Progress";
}

/** Merge live/snapshot repos with the always-included manual (private) seeds. */
function mergeRepos(fetched: GhRepo[]): GhRepo[] {
  const byName = new Map<string, GhRepo>();
  for (const r of fetched) byName.set(r.name.toLowerCase(), r);
  for (const m of manualRepos) {
    if (!byName.has(m.name.toLowerCase())) byName.set(m.name.toLowerCase(), m);
  }
  return [...byName.values()];
}

function toProject(repo: GhRepo): Project {
  const override = projectOverrides[repo.name];
  const liveFromGh = httpUrl(repo.homepage);
  const liveUrl = override?.liveUrl ?? liveFromGh;
  const status = override?.status ?? deriveStatus(repo, liveUrl);
  const description =
    override?.description ??
    repo.description ??
    `${repo.name} — a project under my GitHub. A fuller write-up is on the way.`;
  const techStack =
    override?.techStack ?? (repo.language ? [repo.language] : []);

  return {
    slug: repo.name,
    name: override?.name ?? repo.name,
    description,
    status,
    category: override?.category ?? (repo.language ? `${repo.language} project` : "Project"),
    github: repo.full_name,
    githubUrl: repo.html_url,
    vercelProjectName: override?.vercelProjectName ?? repo.name,
    liveUrl,
    techStack,
    lastUpdated: monthYear(repo.pushed_at),
    featured: override?.featured ?? false,
    autoDetected: !override,
    detail:
      override?.detail ?? {
        what: description,
        why: "",
        features: [],
        learned: [],
        next: [],
      },
  };
}

function toRepoCard(repo: GhRepo, needsReview: boolean): Repo {
  const override = projectOverrides[repo.name];
  const reviewNote = repo.private
    ? "Private repository with no public deployment yet — contents not verified."
    : repo.size === 0
      ? "Repository is currently empty — no source or deployment to verify yet."
      : undefined;

  return {
    name: repo.name,
    fullName: repo.full_name,
    url: repo.html_url,
    language: repo.language ?? undefined,
    visibility: repo.private ? "private" : "public",
    lastUpdated: monthYear(repo.pushed_at),
    description:
      override?.description ??
      repo.description ??
      `${repo.name} — repository under my GitHub account.`,
    projectSlug: repo.name,
    liveUrl: override?.liveUrl ?? httpUrl(repo.homepage),
    needsReview,
    reviewNote: needsReview ? reviewNote : undefined,
    autoDetected: !override,
  };
}

/** Build the entire portfolio from live GitHub data (or the fallback snapshot). */
export async function getPortfolio(): Promise<Portfolio> {
  const { repos: fetched, source } = await fetchGithubRepos();
  const allowed = mergeRepos(fetched).filter(isAllowedRepo);

  // Most-recently-pushed first.
  allowed.sort((a, b) => (a.pushed_at < b.pushed_at ? 1 : -1));

  const projects: Project[] = [];
  const verifiedRepos: Repo[] = [];
  const reviewRepos: Repo[] = [];

  for (const repo of allowed) {
    const project = toProject(repo);
    const needsReview = project.status === "Needs Review";
    if (needsReview) {
      reviewRepos.push(toRepoCard(repo, true));
    } else {
      projects.push(project);
      verifiedRepos.push(toRepoCard(repo, false));
    }
  }

  // Featured first (in a stable, curated order), then everything else.
  const featuredOrder = ["sylistly", "bertos-ai-os", "carpool-optimizer"];
  projects.sort((a, b) => {
    const ai = a.featured ? featuredOrder.indexOf(a.slug) : Infinity;
    const bi = b.featured ? featuredOrder.indexOf(b.slug) : Infinity;
    if (ai !== bi) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    return 0;
  });

  const featured = projects.filter((p) => p.featured);

  // Live Apps: primary = anything with a verified live URL.
  const primary: VercelProject[] = projects
    .filter((p) => p.liveUrl)
    .map((p) => ({
      name: p.vercelProjectName ?? p.slug,
      url: p.liveUrl,
      verified: true,
      githubRepo: p.github,
      projectSlug: p.slug,
      kind: "primary" as const,
      note: undefined,
    }));

  const primaryNames = new Set(primary.map((p) => p.name));
  const review = vercelExtras.filter(
    (v) => v.kind === "review" && !primaryNames.has(v.name),
  );
  const duplicate = vercelExtras.filter((v) => v.kind === "duplicate");

  return {
    projects,
    featured,
    verifiedRepos,
    reviewRepos,
    vercel: { primary, review, duplicate },
    source,
    counts: { projects: projects.length, live: primary.length, repos: allowed.length },
  };
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const { repos } = await fetchGithubRepos();
  const allowed = mergeRepos(repos).filter(isAllowedRepo);
  const match = allowed.find((r) => r.name === slug);
  return match ? toProject(match) : undefined;
}

export async function getProjectSlugs(): Promise<string[]> {
  const { repos } = await fetchGithubRepos();
  return mergeRepos(repos)
    .filter(isAllowedRepo)
    .map((r) => r.name);
}
