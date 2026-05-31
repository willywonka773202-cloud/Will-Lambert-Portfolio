import type { GhRepo, VercelProject } from "./types";

/** GitHub account that the portfolio is generated from. */
export const OWNER = "willywonka773202-cloud";

/**
 * Repos to always hide, regardless of what GitHub returns.
 * - the portfolio repo itself
 * - Roblox concept dumps the owner doesn't want shown
 */
export const DENYLIST = new Set<string>([
  "will-lambert-portfolio",
  "unlocked-roblox",
]);

/**
 * Auto-generated / throwaway repo names we never want surfaced:
 * - pure hashes (e.g. `7c6c3aae8fddc47a4b70cf66c226f7bb6ca9d07a`)
 * - hash-suffixed duplicates (e.g. `sylistly-b2dc8756`)
 */
export function isHashName(name: string): boolean {
  return /^[0-9a-f]{16,}$/i.test(name) || /-[0-9a-f]{6,}$/i.test(name);
}

/** Should this repo appear anywhere on the site at all? */
export function isAllowedRepo(repo: GhRepo): boolean {
  if (DENYLIST.has(repo.name.toLowerCase())) return false;
  if (isHashName(repo.name)) return false;
  if (repo.fork || repo.archived) return false;
  return true;
}

/**
 * Private repositories that the unauthenticated GitHub API won't return but
 * that the owner still wants listed under "Needs Review" for transparency.
 * If a GITHUB_TOKEN is configured, the live fetch picks these up automatically
 * and these seeds are de-duplicated away.
 */
export const manualRepos: GhRepo[] = [
  {
    name: "vibe-coding-platform",
    full_name: `${OWNER}/vibe-coding-platform`,
    html_url: `https://github.com/${OWNER}/vibe-coding-platform`,
    description: "Coding/productivity platform connected to GitHub and Vercel.",
    language: "TypeScript",
    homepage: null,
    private: true,
    fork: false,
    archived: false,
    size: 0,
    pushed_at: "2026-04-28T01:18:00Z",
  },
  {
    name: "deerfield-aquatics-schedule",
    full_name: `${OWNER}/deerfield-aquatics-schedule`,
    html_url: `https://github.com/${OWNER}/deerfield-aquatics-schedule`,
    description: "Scheduling app for Deerfield aquatics — a TypeScript project in progress.",
    language: "TypeScript",
    homepage: null,
    private: true,
    fork: false,
    archived: false,
    size: 627,
    pushed_at: "2026-05-27T20:41:43Z",
  },
  {
    name: "roblox-game-flipping",
    full_name: `${OWNER}/roblox-game-flipping`,
    html_url: `https://github.com/${OWNER}/roblox-game-flipping`,
    description: "Python project exploring Roblox game-flipping tooling.",
    language: "Python",
    homepage: null,
    private: true,
    fork: false,
    archived: false,
    size: 9858,
    pushed_at: "2026-05-31T12:25:02Z",
  },
];

/**
 * Vercel projects that can't be derived from GitHub `homepage` data: duplicate
 * deployments and unverified projects. Primary live apps are derived
 * automatically from repos that publish a homepage URL.
 */
export const vercelExtras: VercelProject[] = [
  {
    name: "accounting",
    verified: false,
    githubRepo: `${OWNER}/accounting`,
    kind: "review",
    note: "GitHub repo is empty — deployment not verified as a usable app.",
  },
  {
    name: "vibe-coding-platform",
    verified: false,
    githubRepo: `${OWNER}/vibe-coding-platform`,
    projectSlug: "vibe-coding-platform",
    kind: "review",
    note: "Private/empty GitHub repo — deployment not verified.",
  },
  {
    name: "project-p0d2a",
    verified: false,
    kind: "duplicate",
    note: "Auto-named Vercel project with no clear GitHub match — likely a preview/duplicate, not a primary app.",
  },
  {
    name: "carpool-optimizer-be7l",
    verified: false,
    githubRepo: `${OWNER}/carpool-optimizer`,
    kind: "duplicate",
    note: "Duplicate deployment of carpool-optimizer — the primary production URL is shown under Primary deployments.",
  },
];
