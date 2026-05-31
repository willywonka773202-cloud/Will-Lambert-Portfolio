import type { Metadata } from "next";
import {
  primaryVercelProjects,
  reviewVercelProjects,
  duplicateVercelProjects,
} from "@/data/vercelProjects";
import VercelProjectCard from "@/components/VercelProjectCard";
import PageHeader from "@/components/PageHeader";
import { VercelIcon, WarningIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Live Apps",
  description: "Working Vercel deployments mapped to their GitHub repos.",
};

export default function LiveAppsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Deployments"
        title="Live Apps"
        description="Production Vercel deployments, each matched to its GitHub repo. The primary apps below were confirmed reachable as working pages."
      />

      <section className="mt-8">
        <div className="flex items-center gap-2">
          <VercelIcon className="h-4 w-4 text-ink" />
          <h2 className="text-lg font-semibold text-ink">Primary deployments</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primaryVercelProjects.map((p) => (
            <VercelProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      {reviewVercelProjects.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center gap-2">
            <WarningIcon className="h-5 w-5 text-amber-400" />
            <h2 className="text-lg font-semibold text-ink">Unverified deployments</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Real Vercel projects whose source repos are empty or private — not yet confirmed as
            usable live apps.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviewVercelProjects.map((p) => (
              <VercelProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
      )}

      {duplicateVercelProjects.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold text-ink">Duplicate &amp; preview deployments</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Extra Vercel projects that map to an existing app or have no clear GitHub match. Kept
            out of the main list so the portfolio doesn&apos;t show confusing duplicates as primary
            projects.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {duplicateVercelProjects.map((p) => (
              <VercelProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
