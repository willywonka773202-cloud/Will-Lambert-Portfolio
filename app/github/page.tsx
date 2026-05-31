import type { Metadata } from "next";
import { verifiedRepos, reviewRepos } from "@/data/repos";
import RepoCard from "@/components/RepoCard";
import PageHeader from "@/components/PageHeader";
import { GitHubIcon, WarningIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "GitHub",
  description: "Real GitHub repositories under willywonka773202-cloud.",
};

export default function GitHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Code"
        title="GitHub"
        description="Repositories pulled from my GitHub account, willywonka773202-cloud. Hash-named and duplicate generated repos are intentionally left out."
      />

      <div className="mt-6">
        <a
          href="https://github.com/willywonka773202-cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          <GitHubIcon /> github.com/willywonka773202-cloud
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-ink">Active repositories</h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verifiedRepos.map((repo) => (
            <RepoCard key={repo.fullName} repo={repo} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
          <WarningIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
          <div>
            <h2 className="text-base font-semibold text-amber-200">Repositories that need review</h2>
            <p className="mt-1 text-sm leading-relaxed text-amber-100/80">
              These repos exist but are empty, private, or have no verified deployment. They&apos;re
              shown for transparency and shouldn&apos;t be treated as finished, shippable apps yet.
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviewRepos.map((repo) => (
            <RepoCard key={repo.fullName} repo={repo} />
          ))}
        </div>
      </section>
    </div>
  );
}
