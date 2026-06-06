import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TechTag from "@/components/TechTag";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "About Will Lambert — builder of apps, AI tools, and product systems.",
};

const stack = [
  "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Python", "Vercel", "GitHub",
];

const principles = [
  {
    n: "01",
    title: "Ship real things",
    body: "Every project here is a real repo with a real deployment where one exists — no mockups masquerading as products.",
  },
  {
    n: "02",
    title: "Be honest about status",
    body: "Live, In Progress, Prototype, or Needs Review — the label always matches the actual state of the work.",
  },
  {
    n: "03",
    title: "Build with AI as a tool",
    body: "From a fashion catalog to a local-first AI command center, I use AI to move faster and to build the tools themselves.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Will."
        description="I build and ship apps, AI tools, and product systems — and deploy them for real on Vercel."
      />

      <Reveal>
        <section className="mt-10 space-y-4 text-base leading-relaxed text-ink-muted">
          <p>
            I&apos;m a builder who likes turning ideas into working software fast. My projects span
            AI developer tools, consumer web apps, and everyday utilities — things like a fashion
            outfit-curation app, a local-first AI operating system, and a carpool route planner.
          </p>
          <p>
            This portfolio is intentionally grounded: it&apos;s generated from my actual GitHub
            repositories and Vercel deployments, so what you see maps directly to code I&apos;ve
            written and apps I&apos;ve shipped. When something isn&apos;t finished, I say so.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-12">
          <h2 className="kicker text-gold">Tools I work with</h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {stack.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-base-700/50 bg-base-700/30 sm:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <div className="group h-full bg-base-900/60 p-6 transition-colors duration-500 hover:bg-base-850/70">
              <span className="font-display text-4xl tracking-tightest text-base-600 transition-colors group-hover:text-gold">
                {p.n}
              </span>
              <h3 className="mt-4 font-display text-xl tracking-tightest text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        <Magnetic>
          <Link
            href="/projects"
            className="sheen inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-0.5"
          >
            See my work <ArrowRightIcon />
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
  );
}
