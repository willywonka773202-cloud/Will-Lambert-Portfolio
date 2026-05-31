import type { GhRepo } from "@/data/types";
import { OWNER } from "@/data/config";
import { repoSnapshot } from "@/data/snapshot";

export interface FetchResult {
  repos: GhRepo[];
  /** "live" when fetched from GitHub, "snapshot" when the fallback was used. */
  source: "live" | "snapshot";
}

/** How often Next.js re-fetches the repo list in production (seconds). */
export const REVALIDATE_SECONDS = 60 * 60 * 24; // daily

/**
 * Fetch the owner's repositories from GitHub.
 *
 * - Uses GITHUB_TOKEN when present (higher rate limit + private repos).
 * - Revalidates daily, so a deployed site auto-detects new repos without any
 *   manual edits or rebuilds.
 * - Falls back to the committed snapshot on any failure (rate limit, network,
 *   downtime) so the build and pages never break.
 */
export async function fetchGithubRepos(): Promise<FetchResult> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "lambert-labs-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${OWNER}/repos?per_page=100&sort=pushed&type=owner`,
      { headers, next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (!res.ok) {
      return { repos: repoSnapshot, source: "snapshot" };
    }
    const data: unknown = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return { repos: repoSnapshot, source: "snapshot" };
    }
    const repos: GhRepo[] = data.map((r: Record<string, unknown>) => ({
      name: String(r.name),
      full_name: String(r.full_name),
      html_url: String(r.html_url),
      description: (r.description as string | null) ?? null,
      language: (r.language as string | null) ?? null,
      homepage: (r.homepage as string | null) ?? null,
      private: Boolean(r.private),
      fork: Boolean(r.fork),
      archived: Boolean(r.archived),
      size: Number(r.size ?? 0),
      pushed_at: String(r.pushed_at ?? ""),
    }));
    return { repos, source: "live" };
  } catch {
    return { repos: repoSnapshot, source: "snapshot" };
  }
}
