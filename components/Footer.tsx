import Link from "next/link";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-base-700/60 bg-base-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-semibold text-ink">Will Lambert · Portfolio</p>
          <p className="mt-1 text-xs text-ink-faint">
            Real apps, experiments, and deployments — from GitHub and Vercel.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-ink-muted">
          <Link href="/projects" className="hover:text-ink">Projects</Link>
          <a
            href="https://github.com/willywonka773202-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-ink"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
          <Link href="/contact" className="inline-flex items-center gap-1 hover:text-ink">
            <ExternalLinkIcon className="h-4 w-4" /> Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-base-800/60 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-6xl text-xs text-ink-faint">
          © {new Date().getFullYear()} Will Lambert · Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
