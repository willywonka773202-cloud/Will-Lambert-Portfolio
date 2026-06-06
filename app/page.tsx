import Link from "next/link";
import { getPortfolio } from "@/lib/portfolio";
import ProjectGrid from "@/components/ProjectGrid";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import AnimatedCounter from "@/components/AnimatedCounter";
import { GitHubIcon, ExternalLinkIcon, ArrowRightIcon, VercelIcon } from "@/components/icons";

export const revalidate = 86400;

const techMarquee = [
  "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js",
  "Python", "Vercel", "GitHub", "AI / LLMs", "Design Systems",
];

const valueProps = [
  {
    n: "01",
    title: "Real & shipped",
    body: "Every project links to an actual repo — and, where it's live, a working deployment. No mockups, no vaporware.",
  },
  {
    n: "02",
    title: "Always current",
    body: "This portfolio syncs itself from my GitHub daily. New apps appear on their own — what you see is what I'm building right now.",
  },
  {
    n: "03",
    title: "Built to a bar",
    body: "Fast, responsive, accessible, and honest about status. The same care goes into the work itself.",
  },
];

export default async function HomePage() {
  const { featured, projects, counts } = await getPortfolio();
  const showcase = (featured.length > 0 ? featured : projects).slice(0, 6);

  const stats = [
    { label: "Projects", value: counts.projects },
    { label: "Live apps", value: counts.live },
    { label: "Repos detected", value: counts.repos },
  ];

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* rotating ornament */}
        <div className="pointer-events-none absolute -right-40 top-10 hidden h-[34rem] w-[34rem] animate-spin-slow rounded-full border border-dashed border-gold/15 lg:block">
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold/50" />
          <div className="absolute inset-16 rounded-full border border-gold/10" />
          <div className="absolute inset-32 rounded-full border border-dashed border-gold/10" />
        </div>

        {/* ghost wordmark */}
        <span className="pointer-events-none absolute -left-4 top-24 select-none font-display text-[34vw] leading-none tracking-tightest text-base-800/40 sm:top-16 lg:text-[20rem]">
          ✶
        </span>

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
          <p className="kicker animate-fade-up text-gold">Will Lambert — Builder Portfolio</p>

          <h1 className="mt-7 max-w-5xl display-tight text-[15vw] text-ink sm:text-7xl lg:text-[6.2rem]">
            <span className="block animate-blur-in [animation-delay:60ms]">I build &amp; ship</span>
            <span className="block animate-blur-in [animation-delay:200ms]">
              <span className="text-gold-shimmer">apps, AI tools</span>,
            </span>
            <span className="block animate-blur-in [animation-delay:340ms]">&amp; product systems.</span>
          </h1>

          <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-muted [animation-delay:520ms]">
            A living gallery of real apps, experiments, and deployments — pulled straight from my
            GitHub and Vercel, so it&apos;s always exactly what I&apos;m working on right now.
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:640ms]">
            <Magnetic>
              <Link
                href="/projects"
                className="sheen inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-base-950 shadow-[0_14px_40px_-12px_rgba(200,149,74,0.8)] transition-transform hover:-translate-y-0.5"
              >
                View Work <ArrowRightIcon />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/github"
                className="inline-flex items-center gap-2 rounded-full border border-base-600/70 px-6 py-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
              >
                <GitHubIcon /> GitHub
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/live-apps"
                className="inline-flex items-center gap-2 rounded-full border border-base-600/70 px-6 py-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
              >
                <VercelIcon className="h-3.5 w-3.5" /> Live Apps
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-base-600/70 px-6 py-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
              >
                <ExternalLinkIcon /> Contact
              </Link>
            </Magnetic>
          </div>

          <dl className="mt-16 grid max-w-2xl animate-fade-up grid-cols-3 gap-px overflow-hidden rounded-2xl border border-base-700/50 bg-base-700/30 [animation-delay:760ms]">
            {stats.map((s) => (
              <div key={s.label} className="bg-base-900/70 px-5 py-6 backdrop-blur-sm">
                <dt className="font-display text-4xl tracking-tightest text-gold-bright sm:text-5xl">
                  <AnimatedCounter value={s.value} />
                </dt>
                <dd className="mt-2 kicker text-ink-faint">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* tech marquee */}
        <div className="relative border-y border-base-700/40 bg-base-900/30 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-base-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-base-950 to-transparent" />
          <div className="flex w-max animate-marquee gap-8 pr-8">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={`${t}-${i}`} className="flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-ink-faint">
                <span className="text-gold/50">✶</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured ===== */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker text-gold">Selected Work</p>
              <h2 className="mt-4 display-tight text-5xl text-ink sm:text-6xl">Featured projects</h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">
                Hand-picked builds — each backed by a real repo and, where it&apos;s live, a working
                deployment you can open right now.
              </p>
            </div>
            <Link
              href="/projects"
              className="link-underline hidden shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-bright sm:inline-flex"
            >
              All work <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12">
          <ProjectGrid projects={showcase} />
        </div>
      </section>

      {/* ===== Value props ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-base-700/50 bg-base-700/30 sm:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="group h-full bg-base-900/60 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-base-850/70">
                <span className="font-display text-5xl tracking-tightest text-base-600 transition-colors duration-500 group-hover:text-gold">
                  {v.n}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tightest text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
        <Reveal>
          <div className="sheen relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-base-850 to-base-900 px-6 py-16 text-center sm:px-14 sm:py-24">
            <div className="pointer-events-none absolute left-1/2 top-[-30%] h-72 w-[36rem] -translate-x-1/2 animate-aurora-slow rounded-full bg-gold/15 blur-[90px]" />
            <p className="relative kicker text-gold">Let&apos;s talk</p>
            <h2 className="relative mx-auto mt-5 max-w-2xl display-tight text-5xl text-ink sm:text-6xl">
              Want to see how these were built?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-muted">
              Dig into a case study, browse the code, or open a live app. Hiring or collaborating?
              I&apos;d love to talk.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-0.5"
                >
                  Explore projects <ArrowRightIcon />
                </Link>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-base-600/70 px-6 py-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
                >
                  Get in touch
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
