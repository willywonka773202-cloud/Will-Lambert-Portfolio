import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">Page not found</h1>
      <p className="mt-3 text-sm text-ink-muted">
        That page doesn&apos;t exist. Let&apos;s get you back to the real projects.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-base-950 transition-colors hover:bg-accent-muted"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="rounded-lg border border-base-600/70 px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}
