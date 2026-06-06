import Link from "next/link";
import type { Project } from "@/data/types";
import StatusBadge from "./StatusBadge";
import TechTag from "./TechTag";
import ProjectLogo from "./ProjectLogo";
import Reveal from "./Reveal";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon } from "./icons";

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="grid gap-3 border-t border-base-700/50 py-7 sm:grid-cols-[140px_1fr]">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-xs text-gold">{index}</span>
          <h2 className="font-mono text-xs uppercase tracking-widest text-ink-faint">{title}</h2>
        </div>
        <div className="text-[15px] leading-relaxed text-ink-muted">{children}</div>
      </section>
    </Reveal>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const d = project.detail;
  let n = 0;
  const idx = () => String(++n).padStart(2, "0");

  return (
    <div className="mx-auto max-w-4xl">
      <Link
        href="/projects"
        className="link-underline inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-ink-faint hover:text-ink-muted"
      >
        ← All work
      </Link>

      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-5">
          <ProjectLogo name={project.name} brand={project.brand} size="lg" />
          <div>
            <p className="kicker text-ink-faint">{project.category}</p>
            <h1 className="mt-2 display-tight text-5xl text-ink sm:text-6xl">{project.name}</h1>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {project.tagline && (
        <p className="mt-6 max-w-2xl font-display text-2xl leading-snug tracking-tightest text-ink-muted">
          {project.tagline}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-2.5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          <GitHubIcon /> View Code
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sheen inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-0.5"
          >
            <ExternalLinkIcon /> Open Live App
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-base-700/60 px-4 py-2.5 text-sm font-medium text-ink-faint">
            No live deployment yet
          </span>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      {project.autoDetected && (
        <div className="mt-7 rounded-xl border border-base-700/60 bg-base-850/60 p-4 font-mono text-xs text-ink-faint">
          ✶ Auto-detected from GitHub. A full case study for this project is on the way.
        </div>
      )}

      <div className="mt-8">
        {d.what && <Section index={idx()} title="What it does">{d.what}</Section>}
        {d.why && <Section index={idx()} title="Why I built it">{d.why}</Section>}

        {d.features.length > 0 && (
          <Section index={idx()} title="Main features">
            <ul className="space-y-2.5">
              {d.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <ArrowRightIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section index={idx()} title="Screenshots">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-base-600/70 bg-base-900/60 bg-grid bg-[size:22px_22px] font-mono text-[11px] uppercase tracking-widest text-ink-faint"
              >
                Screenshot
              </div>
            ))}
          </div>
        </Section>

        {d.learned.length > 0 && (
          <Section index={idx()} title="What I learned">
            <ul className="space-y-2.5">
              {d.learned.map((l) => (
                <li key={l} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {d.next.length > 0 && (
          <Section index={idx()} title="Next up">
            <ul className="space-y-2.5">
              {d.next.map((nx) => (
                <li key={nx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{nx}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </div>
  );
}
