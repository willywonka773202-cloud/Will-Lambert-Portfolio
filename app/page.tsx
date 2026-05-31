import Link from "next/link";
import { getPortfolio } from "@/lib/portfolio";
import ProjectGrid from "@/components/ProjectGrid";
import Reveal from "@/components/Reveal";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon, VercelIcon } from "@/components/icons";

export const revalidate = 86400;

const techMarquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Vercel",
  "GitHub",
  "AI / LLMs",
];

const valueProps = [
  {
    title: "Real & shipped",
    body: "Every project links to an actual repo — and, where it's live, a working deployment. No mockups, no vaporware.",
    icon: (
      <path d="M20 6 9 17l-5-5" />
    ),
  },
  {
    title: "Always current",
    body: "The portfolio syncs itself from my GitHub daily. New apps show up automatically — what you see is what I'm actually building.",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v5h-5" />
      </>
    ),
  },
  {
    title: "Built to a bar",
    body: "Clean, fast, responsive, and honest about status. The same care goes into the work itself.",
    icon: (
      <path d="m12 2 2.6 6.6L21 9.2l-5 4.3L17.5 21 12 17.3 6.5 21 8 13.5l-5-4.3 6.4-.6L12 2Z" />
    ),
  },
];

export default async function HomePage() {
  const { featured, projects, counts } = await getPortfolio();
  const showcase = (featured.length > 0 ? featured : projects).slice(0, 6);

  const stats = [
    { label: "Projects tracked", value: String(counts.projects) },
    { label: "Live deployments", value: String(counts.live) },
    { label: "Repos detected", value: String(counts.repos) },
  ];

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="aura-blob left-[8%] top-[-60px] h-72 w-72 animate-aurora-slow bg-emerald-500/30" />
        <div className="aura-blob right-[6%] top-[40px] h-80 w-80 animate-aurora-fast bg-sky-500/20" />
        <div className="aura-blob left-[40%] top-[120px] h-72 w-72 animate-aurora-slow bg-violet-500/20" />

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-base-700/70 bg-base-850/70 px-3 py-1 text-xs text-ink-muted backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Builder portfolio · auto-synced from GitHub &amp; Vercel
          </span>

          <h1 className="mt-6 max-w-4xl animate-fade-up text-4xl font-bold leading-[1.08] tracking-tight text-ink [animation-delay:80ms] sm:text-6xl">
            I build and ship <span className="text-gradient">apps, AI tools</span>, and product systems.
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-muted [animation-delay:160ms]">
            A living portfolio of real apps, experiments, and deployments — pulled straight from my
            GitHub and Vercel, so it&apos;s always exactly what I&apos;m working on right now.
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <Link
              href="/projects"
              className="sheen inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-base-950 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-accent-muted"
            >
              View Projects <ArrowRightIcon />
            </Link>
            <Link
              href="/github"
              className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-5 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <GitHubIcon /> View GitHub
            </Link>
            <Link
              href="/live-apps"
              className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-5 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <VercelIcon className="h-3.5 w-3.5" /> Live Apps
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-5 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <ExternalLinkIcon /> Contact
            </Link>
          </div>

          <dl className="mt-14 grid max-w-xl animate-fade-up grid-cols-3 gap-4 [animation-delay:320ms]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-base-700/60 bg-base-850/60 p-4 backdrop-blur"
              >
                <dt className="text-3xl font-bold tracking-tight text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs text-ink-faint">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* tech marquee */}
        <div className="relative border-y border-base-800/70 bg-base-900/40 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base-950 to-transparent" />
          <div className="flex w-max animate-marquee gap-3 pr-3">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="rounded-full border border-base-700/60 bg-base-850/60 px-4 py-1.5 text-xs font-medium text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured ===== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-accent">Selected work</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">Featured projects</h2>
              <p className="mt-2 max-w-xl text-sm text-ink-muted">
                Hand-picked builds, each backed by a real repo and — where it&apos;s live — a working
                deployment you can open right now.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm text-accent hover:text-accent-muted sm:inline-flex"
            >
              All projects <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8">
          <ProjectGrid projects={showcase} />
        </div>
      </section>

      {/* ===== Value props ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="card-hover h-full rounded-2xl border border-base-700/70 bg-base-850/70 p-6 hover:border-accent/30 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/25">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="sheen relative overflow-hidden rounded-3xl border border-base-700/70 bg-gradient-to-br from-base-850 to-base-900 p-8 text-center sm:p-14">
            <div className="aura-blob left-1/2 top-[-40px] h-56 w-72 -translate-x-1/2 bg-accent/20" />
            <h2 className="relative text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Want to see how these were built?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
              Dive into a case study, browse the code on GitHub, or open a live app. Hiring or
              collaborating? I&apos;d love to talk.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-0.5 hover:bg-accent-muted"
              >
                Explore projects <ArrowRightIcon />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-5 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
