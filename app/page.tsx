import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { verifiedRepos } from "@/data/repos";
import { primaryVercelProjects } from "@/data/vercelProjects";
import ProjectGrid from "@/components/ProjectGrid";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon, VercelIcon } from "@/components/icons";

const stats = [
  { label: "Featured projects", value: String(featuredProjects.length) },
  { label: "Live deployments", value: String(primaryVercelProjects.length) },
  { label: "Active repos", value: String(verifiedRepos.length) },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-base-700/70 bg-base-850/70 px-3 py-1 text-xs text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Lambert Labs · Builder portfolio
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          I build and ship apps, AI tools, and product systems.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
          A portfolio of real apps, experiments, and deployments from my GitHub and Vercel.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-base-950 transition-colors hover:bg-accent-muted"
          >
            View Projects <ArrowRightIcon />
          </Link>
          <Link
            href="/github"
            className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <GitHubIcon /> View GitHub
          </Link>
          <Link
            href="/live-apps"
            className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <VercelIcon className="h-3.5 w-3.5" /> View Live Apps
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
          >
            <ExternalLinkIcon /> Contact Me
          </Link>
        </div>

        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-base-700/60 bg-base-850/60 p-4"
            >
              <dt className="text-2xl font-bold text-ink">{s.value}</dt>
              <dd className="mt-1 text-xs text-ink-faint">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured */}
      <section className="pb-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink">Featured projects</h2>
            <p className="mt-1 text-sm text-ink-muted">
              Hand-picked builds, each backed by a real repo and (where live) a working deployment.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-accent hover:text-accent-muted sm:inline-flex"
          >
            All projects <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
    </div>
  );
}
