// Live apps are derived from GitHub `homepage` URLs (see lib/portfolio.ts);
// duplicate/unverified Vercel projects live in data/config.ts (vercelExtras).
// This file re-exports the shared type so component imports keep working.
export type { VercelProject } from "./types";
