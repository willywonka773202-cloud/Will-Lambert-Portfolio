import Link from "next/link";
import type { Project } from "@/data/types";
import StatusBadge from "./StatusBadge";
import TechTag from "./TechTag";
import ProjectLogo from "./ProjectLogo";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-base-700/70 bg-base-850/80 p-5 shadow-card hover:border-accent/40 hover:shadow-lift">
      {/* hover gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <ProjectLogo name={project.name} brand={project.brand} size="md" />
          <div>
            <h3 className="text-base font-semibold text-ink">{project.name}</h3>
            <p className="mt-0.5 text-xs text-ink-faint">{project.category}</p>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.tagline ?? project.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <div className="relative mt-4 flex items-center justify-between border-t border-base-700/60 pt-4 text-xs text-ink-faint">
        <span>Updated {project.lastUpdated}</span>
        {project.liveUrl && (
          <span className="inline-flex items-center gap-1 text-emerald-300/90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
          </span>
        )}
      </div>

      <div className="relative mt-3 flex flex-wrap items-center gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/20"
        >
          Case Study <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          <GitHubIcon className="h-3.5 w-3.5" /> GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <ExternalLinkIcon className="h-3.5 w-3.5" /> Live App
          </a>
        )}
      </div>
    </article>
  );
}
