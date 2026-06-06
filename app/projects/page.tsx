import type { Metadata } from "next";
import { getPortfolio } from "@/lib/portfolio";
import ProjectGrid from "@/components/ProjectGrid";
import RepoCard from "@/components/RepoCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { WarningIcon } from "@/components/icons";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Projects",
  description: "Real apps and experiments from Will Lambert's GitHub and Vercel.",
};

export default async function ProjectsPage() {
  const { projects, reviewRepos } = await getPortfolio();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="Synced automatically from my GitHub account. Every card maps to a real repository; live apps link to working deployments. New repos show up here on their own."
      />

      <section className="mt-8">
        <ProjectGrid projects={projects} />
      </section>

      {/* Needs Review */}
      {reviewRepos.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center gap-2.5">
            <WarningIcon className="h-5 w-5 text-amber-400" />
            <h2 className="display-tight text-3xl text-ink">Needs Review</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Real repositories under my account that aren&apos;t presented as finished apps yet —
            they&apos;re empty, private, or awaiting a verified deployment. Listed here for full
            transparency rather than dressed up as polished products.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewRepos.map((repo, i) => (
              <Reveal key={repo.fullName} delay={(i % 3) * 90}>
                <RepoCard repo={repo} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
