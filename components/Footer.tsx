import Link from "next/link";
import { GitHubIcon, ExternalLinkIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-base-700/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker text-gold">Will Lambert</p>
            <p className="mt-3 max-w-md font-display text-3xl leading-tight tracking-tightest text-ink">
              Real apps, shipped — straight from GitHub &amp; Vercel.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
            <Link href="/projects" className="link-underline hover:text-ink">Work</Link>
            <Link href="/live-apps" className="link-underline hover:text-ink">Live</Link>
            <a
              href="https://github.com/willywonka773202-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 hover:text-ink"
            >
              <GitHubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
            <Link href="/contact" className="link-underline inline-flex items-center gap-1.5 hover:text-ink">
              <ExternalLinkIcon className="h-3.5 w-3.5" /> Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 rule" />
        <div className="mt-5 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Will Lambert</p>
          <p>Next.js · TypeScript · Tailwind · auto-synced from GitHub</p>
        </div>
      </div>
    </footer>
  );
}
