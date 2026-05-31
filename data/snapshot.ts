import type { GhRepo } from "./types";
import { OWNER } from "./config";

/**
 * Committed fallback snapshot of the real GitHub repos, captured from the
 * GitHub API. Used only when a live fetch fails (rate limit, network, or
 * GitHub downtime) so the site never renders empty or breaks the build.
 *
 * This is regenerated automatically by the daily refresh workflow
 * (`scripts/refresh-snapshot.mjs`), so it stays current without manual edits.
 */
export const snapshotGeneratedAt = "2026-05-31";

export const repoSnapshot: GhRepo[] = [
  {
    name: "sylistly",
    full_name: `${OWNER}/sylistly`,
    html_url: `https://github.com/${OWNER}/sylistly`,
    description: null,
    language: "TypeScript",
    homepage: "https://sylistly.vercel.app",
    private: false,
    fork: false,
    archived: false,
    size: 47382,
    pushed_at: "2026-05-31T12:34:22Z",
  },
  {
    name: "bertos-ai-os",
    full_name: `${OWNER}/bertos-ai-os`,
    html_url: `https://github.com/${OWNER}/bertos-ai-os`,
    description: null,
    language: "TypeScript",
    homepage: "https://bertos-ai-os.vercel.app",
    private: false,
    fork: false,
    archived: false,
    size: 4982,
    pushed_at: "2026-05-31T03:58:14Z",
  },
  {
    name: "carpool-optimizer",
    full_name: `${OWNER}/carpool-optimizer`,
    html_url: `https://github.com/${OWNER}/carpool-optimizer`,
    description: null,
    language: "TypeScript",
    homepage: "https://carpool-optimizer-five.vercel.app",
    private: false,
    fork: false,
    archived: false,
    size: 264,
    pushed_at: "2026-05-19T05:40:08Z",
  },
  {
    name: "accounting",
    full_name: `${OWNER}/accounting`,
    html_url: `https://github.com/${OWNER}/accounting`,
    description: null,
    language: null,
    homepage: null,
    private: false,
    fork: false,
    archived: false,
    size: 0,
    pushed_at: "2026-05-22T13:16:48Z",
  },
  {
    name: "will-life-morning-dashboard",
    full_name: `${OWNER}/will-life-morning-dashboard`,
    html_url: `https://github.com/${OWNER}/will-life-morning-dashboard`,
    description: null,
    language: null,
    homepage: null,
    private: false,
    fork: false,
    archived: false,
    size: 0,
    pushed_at: "2026-05-25T13:39:44Z",
  },
];
