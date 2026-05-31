import Link from "next/link";
import type { VercelProject } from "@/data/vercelProjects";
import { VercelIcon, ExternalLinkIcon, WarningIcon, ArrowRightIcon } from "./icons";

export default function VercelProjectCard({ project }: { project: VercelProject }) {
  return (
    <article className="flex flex-col rounded-xl border border-base-700/70 bg-base-850/80 p-5 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <VercelIcon className="h-3.5 w-3.5 text-ink" />
          <h3 className="font-mono text-sm font-semibold text-ink">{project.name}</h3>
        </div>
        {project.verified ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300 ring-1 ring-inset ring-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Verified live
          </span>
        ) : (
          <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-300 ring-1 ring-inset ring-amber-500/30">
            Unverified
          </span>
        )}
      </div>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 truncate font-mono text-xs text-accent hover:underline"
        >
          {project.url.replace("https://", "")}
        </a>
      )}

      {project.note && (
        <div
          className={`mt-3 flex items-start gap-2 rounded-lg border p-2.5 text-xs ${
            project.verified
              ? "border-base-600/60 bg-base-800/50 text-ink-faint"
              : "border-amber-500/30 bg-amber-500/5 text-amber-200/90"
          }`}
        >
          {!project.verified && (
            <WarningIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
          )}
          <span>{project.note}</span>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-base-700/60 pt-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <ExternalLinkIcon className="h-3.5 w-3.5" /> Open
          </a>
        )}
        {project.projectSlug && (
          <Link
            href={`/projects/${project.projectSlug}`}
            className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/20"
          >
            Case Study <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        )}
        {project.githubRepo && (
          <a
            href={`https://github.com/${project.githubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-ink-faint hover:text-ink-muted"
          >
            {project.githubRepo}
          </a>
        )}
      </div>
    </article>
  );
}
