import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TechTag from "@/components/TechTag";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "About Will Lambert — builder of apps, AI tools, and product systems.",
};

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Vercel",
  "GitHub",
];

const principles = [
  {
    title: "Ship real things",
    body: "Every project here is a real repo with a real deployment where one exists — no mockups masquerading as products.",
  },
  {
    title: "Be honest about status",
    body: "Live, In Progress, Prototype, or Needs Review — the label always matches the actual state of the work.",
  },
  {
    title: "Build with AI as a tool",
    body: "From a fashion catalog to a local-first AI command center, I use AI to move faster and to build the tools themselves.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Hi, I'm Will Lambert."
        description="I build and ship apps, AI tools, and product systems — and deploy them for real on Vercel."
      />

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-muted">
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

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
          Tools I work with
        </h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-xl border border-base-700/60 bg-base-850/60 p-4">
            <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{p.body}</p>
          </div>
        ))}
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-base-950 transition-colors hover:bg-accent-muted"
        >
          See my projects <ArrowRightIcon />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-lg border border-base-600/70 px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
