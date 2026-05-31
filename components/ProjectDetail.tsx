import Link from "next/link";
import type { Project } from "@/data/types";
import StatusBadge from "./StatusBadge";
import TechTag from "./TechTag";
import ProjectLogo from "./ProjectLogo";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon } from "./icons";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-base-700/60 py-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const d = project.detail;
  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-xs text-ink-faint transition-colors hover:text-ink-muted"
      >
        ← All projects
      </Link>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <ProjectLogo name={project.name} brand={project.brand} size="lg" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink">{project.name}</h1>
            <p className="mt-1 text-sm text-ink-faint">{project.category}</p>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {project.tagline && (
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{project.tagline}</p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          <GitHubIcon /> View Repo
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent/15 px-3 py-2 text-sm font-medium text-accent ring-1 ring-inset ring-accent/30 transition-colors hover:bg-accent/25"
          >
            <ExternalLinkIcon /> Open Live App
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-base-700/60 px-3 py-2 text-sm font-medium text-ink-faint">
            No verified live deployment yet
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      {project.autoDetected && (
        <div className="mt-6 rounded-lg border border-base-700/60 bg-base-850/60 p-3 text-xs text-ink-faint">
          Auto-detected from GitHub. A full case study for this project is on the way.
        </div>
      )}

      {d.what && <Section title="What it does">{d.what}</Section>}

      {d.why && <Section title="Why I built it">{d.why}</Section>}

      {d.features.length > 0 && (
        <Section title="Main features">
          <ul className="space-y-2">
            {d.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <ArrowRightIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-muted" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Tech stack">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
      </Section>

      <Section title="Screenshots">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-base-600/70 bg-base-900/60 bg-grid bg-[size:24px_24px] text-xs text-ink-faint"
            >
              Screenshot placeholder
            </div>
          ))}
        </div>
      </Section>

      {d.learned.length > 0 && (
        <Section title="What I learned">
          <ul className="space-y-2">
            {d.learned.map((l) => (
              <li key={l} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {d.next.length > 0 && (
        <Section title="Next improvements">
          <ul className="space-y-2">
            {d.next.map((n) => (
              <li key={n} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
