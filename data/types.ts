export type ProjectStatus = "Live" | "In Progress" | "Prototype" | "Needs Review";

export interface ProjectDetail {
  what: string;
  why: string;
  features: string[];
  learned: string[];
  next: string[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  status: ProjectStatus;
  category: string;
  github: string;
  githubUrl: string;
  vercelProjectName?: string;
  liveUrl?: string;
  techStack: string[];
  lastUpdated: string;
  featured: boolean;
  /** True when the project was discovered from GitHub without a manual override. */
  autoDetected?: boolean;
  detail: ProjectDetail;
}

export interface Repo {
  name: string;
  fullName: string;
  url: string;
  language?: string;
  visibility: "public" | "private";
  lastUpdated: string;
  description: string;
  projectSlug?: string;
  liveUrl?: string;
  needsReview: boolean;
  reviewNote?: string;
  /** True when discovered from GitHub without a manual override. */
  autoDetected?: boolean;
}

export interface VercelProject {
  name: string;
  url?: string;
  verified: boolean;
  githubRepo?: string;
  projectSlug?: string;
  kind: "primary" | "review" | "duplicate";
  note?: string;
}

/** Normalized subset of the GitHub REST repo object that we actually use. */
export interface GhRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  homepage: string | null;
  private: boolean;
  fork: boolean;
  archived: boolean;
  size: number;
  pushed_at: string;
}
