export interface Repo {
  name: string;
  fullName: string;
  url: string;
  /** Primary language reported by GitHub, if any. */
  language?: string;
  visibility: "public" | "private";
  /** GitHub `pushed_at`, human-readable. */
  lastUpdated: string;
  description: string;
  /** Maps to a project slug in data/projects.ts when one exists. */
  projectSlug?: string;
  /** Verified, working production URL when known. */
  liveUrl?: string;
  /**
   * True when the repo exists under the account but is empty, private with no
   * deployment, or otherwise not yet verified as a usable, shippable app.
   */
  needsReview: boolean;
  /** Why this repo needs review — shown in the fallback warning. */
  reviewNote?: string;
}

/**
 * Real GitHub repositories under willywonka773202-cloud, verified via the
 * GitHub API. Hash-named and duplicate generated repos (e.g.
 * `sylistly-b2dc8756`, `7c6c3aae...`) and unrelated Roblox concepts
 * (`unlocked-roblox`) are intentionally excluded.
 */
export const repos: Repo[] = [
  {
    name: "sylistly",
    fullName: "willywonka773202-cloud/sylistly",
    url: "https://github.com/willywonka773202-cloud/sylistly",
    language: "TypeScript",
    visibility: "public",
    lastUpdated: "May 2026",
    description:
      "Fashion/outfit curation app — themed outfit boards, filtering, and a closet/build flow.",
    projectSlug: "sylistly",
    liveUrl: "https://sylistly.vercel.app",
    needsReview: false,
  },
  {
    name: "bertos-ai-os",
    fullName: "willywonka773202-cloud/bertos-ai-os",
    url: "https://github.com/willywonka773202-cloud/bertos-ai-os",
    language: "TypeScript",
    visibility: "public",
    lastUpdated: "May 2026",
    description:
      "Local-first AI operating system dashboard for routing prompts and managing AI workflows.",
    projectSlug: "bertos-ai-os",
    liveUrl: "https://bertos-ai-os.vercel.app",
    needsReview: false,
  },
  {
    name: "carpool-optimizer",
    fullName: "willywonka773202-cloud/carpool-optimizer",
    url: "https://github.com/willywonka773202-cloud/carpool-optimizer",
    language: "TypeScript",
    visibility: "public",
    lastUpdated: "May 2026",
    description:
      "Route-planning / carpool app that builds the fastest drop-off order with shareable links.",
    projectSlug: "carpool-optimizer",
    liveUrl: "https://carpool-optimizer-five.vercel.app",
    needsReview: false,
  },
  {
    name: "vibe-coding-platform",
    fullName: "willywonka773202-cloud/vibe-coding-platform",
    url: "https://github.com/willywonka773202-cloud/vibe-coding-platform",
    language: "TypeScript",
    visibility: "private",
    lastUpdated: "Apr 2026",
    description:
      "Coding/productivity platform connected to GitHub and Vercel.",
    projectSlug: "vibe-coding-platform",
    needsReview: true,
    reviewNote:
      "Private repository with no published content yet — scope and deployment unverified.",
  },
  {
    name: "accounting",
    fullName: "willywonka773202-cloud/accounting",
    url: "https://github.com/willywonka773202-cloud/accounting",
    visibility: "public",
    lastUpdated: "May 2026",
    description: "Accounting-related project repository.",
    needsReview: true,
    reviewNote:
      "Repository is currently empty — no source or deployment to verify yet.",
  },
  {
    name: "deerfield-aquatics-schedule",
    fullName: "willywonka773202-cloud/deerfield-aquatics-schedule",
    url: "https://github.com/willywonka773202-cloud/deerfield-aquatics-schedule",
    language: "TypeScript",
    visibility: "private",
    lastUpdated: "May 2026",
    description:
      "Scheduling app for Deerfield aquatics — a TypeScript project in progress.",
    needsReview: true,
    reviewNote:
      "Private repository with no public deployment yet — contents not verified.",
  },
  {
    name: "will-life-morning-dashboard",
    fullName: "willywonka773202-cloud/will-life-morning-dashboard",
    url: "https://github.com/willywonka773202-cloud/will-life-morning-dashboard",
    visibility: "public",
    lastUpdated: "May 2026",
    description: "Personal morning-dashboard project repository.",
    needsReview: true,
    reviewNote:
      "Repository is currently empty — no source or deployment to verify yet.",
  },
  {
    name: "roblox-game-flipping",
    fullName: "willywonka773202-cloud/roblox-game-flipping",
    url: "https://github.com/willywonka773202-cloud/roblox-game-flipping",
    language: "Python",
    visibility: "private",
    lastUpdated: "May 2026",
    description:
      "Python project exploring Roblox game-flipping tooling.",
    needsReview: true,
    reviewNote:
      "Private repository with no public deployment yet — contents not verified.",
  },
];

export const verifiedRepos = repos.filter((r) => !r.needsReview);
export const reviewRepos = repos.filter((r) => r.needsReview);
