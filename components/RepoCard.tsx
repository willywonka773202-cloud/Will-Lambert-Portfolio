import Link from "next/link";
import type { Repo } from "@/data/repos";
import { GitHubIcon, ExternalLinkIcon, WarningIcon, ArrowRightIcon } from "./icons";

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="flex flex-col rounded-xl border border-base-700/70 bg-base-850/80 p-5 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <GitHubIcon className="h-4 w-4 text-ink-faint" />
          <h3 className="font-mono text-sm font-semibold text-ink">{repo.name}</h3>
        </div>
        <span className="rounded-full border border-base-600/70 px-2 py-0.5 text-[10px] uppercase tracking-wide text-ink-faint">
          {repo.visibility}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{repo.description}</p>

      {repo.needsReview && repo.reviewNote && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 p-2.5 text-xs text-amber-200/90">
          <WarningIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
          <span>{repo.reviewNote}</span>
        </div>
      )}

      <div className="mt-4 flex items-center gap-3 text-xs text-ink-faint">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-muted" />
            {repo.language}
          </span>
        )}
        <span>Updated {repo.lastUpdated}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          <GitHubIcon className="h-3.5 w-3.5" /> View Repo
        </a>
        {repo.liveUrl && (
          <a
            href={repo.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <ExternalLinkIcon className="h-3.5 w-3.5" /> Live
          </a>
        )}
        {repo.projectSlug && (
          <Link
            href={`/projects/${repo.projectSlug}`}
            className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/20"
          >
            Case Study <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}
