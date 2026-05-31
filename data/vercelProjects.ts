export interface VercelProject {
  name: string;
  /** Production URL. `verified: true` means it was confirmed reachable. */
  url?: string;
  verified: boolean;
  /** Matching GitHub repo, when one is clearly identified. */
  githubRepo?: string;
  /** Matching project slug in data/projects.ts, if any. */
  projectSlug?: string;
  /**
   * "primary"  -> the current production deployment to feature.
   * "review"   -> a real Vercel project that isn't a verified usable app yet.
   * "duplicate"-> preview/duplicate deployment, not the main project.
   */
  kind: "primary" | "review" | "duplicate";
  note?: string;
}

/**
 * Real Vercel projects under "willywonka773202-cloud's projects".
 * Production URLs for the primary apps were verified as reachable, working
 * pages. Duplicate/preview deployments are kept out of the main grid so the
 * portfolio doesn't show confusing duplicates as primary projects.
 */
export const vercelProjects: VercelProject[] = [
  {
    name: "sylistly",
    url: "https://sylistly.vercel.app",
    verified: true,
    githubRepo: "willywonka773202-cloud/sylistly",
    projectSlug: "sylistly",
    kind: "primary",
  },
  {
    name: "bertos-ai-os",
    url: "https://bertos-ai-os.vercel.app",
    verified: true,
    githubRepo: "willywonka773202-cloud/bertos-ai-os",
    projectSlug: "bertos-ai-os",
    kind: "primary",
  },
  {
    name: "carpool-optimizer",
    url: "https://carpool-optimizer-five.vercel.app",
    verified: true,
    githubRepo: "willywonka773202-cloud/carpool-optimizer",
    projectSlug: "carpool-optimizer",
    kind: "primary",
    note: "Production alias resolves to carpool-optimizer-five.vercel.app.",
  },
  {
    name: "accounting",
    verified: false,
    githubRepo: "willywonka773202-cloud/accounting",
    kind: "review",
    note: "GitHub repo is empty — deployment not verified as a usable app.",
  },
  {
    name: "vibe-coding-platform",
    verified: false,
    githubRepo: "willywonka773202-cloud/vibe-coding-platform",
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
    githubRepo: "willywonka773202-cloud/carpool-optimizer",
    kind: "duplicate",
    note: "Duplicate deployment of carpool-optimizer — the primary production URL is the one shown above.",
  },
];

export const primaryVercelProjects = vercelProjects.filter((p) => p.kind === "primary");
export const reviewVercelProjects = vercelProjects.filter((p) => p.kind === "review");
export const duplicateVercelProjects = vercelProjects.filter((p) => p.kind === "duplicate");
