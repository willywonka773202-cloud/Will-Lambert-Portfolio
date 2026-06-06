import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="kicker text-gold">Error 404</p>
      <h1 className="mt-5 display-tight text-7xl text-ink sm:text-8xl">Lost the thread.</h1>
      <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
        That page doesn&apos;t exist. Let&apos;s get you back to the real work.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-0.5"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-base-600/70 px-6 py-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
        >
          View work
        </Link>
      </div>
    </div>
  );
}
