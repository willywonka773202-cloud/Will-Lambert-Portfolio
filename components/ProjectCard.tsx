"use client";

import Link from "next/link";
import type { Project } from "@/data/types";
import StatusBadge from "./StatusBadge";
import TechTag from "./TechTag";
import ProjectLogo from "./ProjectLogo";
import TiltCard from "./TiltCard";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="group h-full">
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-base-700/70 bg-gradient-to-b from-base-850/90 to-base-900/80 p-6 shadow-card backdrop-blur-sm transition-colors duration-500 group-hover:border-gold/40 group-hover:shadow-lift">
        <div className="relative flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <ProjectLogo name={project.name} brand={project.brand} size="md" />
            <div>
              <h3 className="font-display text-xl leading-tight tracking-tightest text-ink">
                {project.name}
              </h3>
              <p className="mt-1 kicker text-ink-faint">{project.category}</p>
            </div>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">
          {project.tagline ?? project.description}
        </p>

        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="relative mt-5 rule" />

        <div className="relative mt-4 flex items-center justify-between font-mono text-[11px] text-ink-faint">
          <span>UPD · {project.lastUpdated}</span>
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 text-mint">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-mint" /> LIVE
            </span>
          )}
        </div>

        <div className="relative mt-4 flex flex-wrap items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-1 rounded-lg bg-gold/12 px-3 py-1.5 text-xs font-medium text-gold-bright ring-1 ring-inset ring-gold/30 transition-colors hover:bg-gold/20"
          >
            Case Study
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <GitHubIcon className="h-3.5 w-3.5" /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-base-600/70 px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" /> Live
            </a>
          )}
        </div>
      </article>
    </TiltCard>
  );
}
