import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Will Lambert.",
};

const EMAIL = "willywonka773202@gmail.com";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: <ExternalLinkIcon className="h-4 w-4" />,
  },
  {
    label: "GitHub",
    value: "github.com/willywonka773202-cloud",
    href: "https://github.com/willywonka773202-cloud",
    icon: <GitHubIcon className="h-4 w-4" />,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        description="Recruiting, collaboration, or just want to see a project up close? Reach out — I'm happy to walk through any of these builds."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 90}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-hover group flex items-center justify-between rounded-2xl border border-base-700/60 bg-gradient-to-b from-base-850/90 to-base-900/80 p-5 backdrop-blur-sm transition-colors hover:border-gold/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-base-800 text-ink-muted ring-1 ring-inset ring-base-600/60 transition-colors group-hover:text-gold">
                  {c.icon}
                </span>
                <div>
                  <p className="font-display text-lg tracking-tightest text-ink">{c.label}</p>
                  <p className="font-mono text-[11px] text-ink-faint">{c.value}</p>
                </div>
              </div>
              <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-6 rounded-2xl border border-base-700/60 bg-base-850/60 p-6 backdrop-blur-sm">
          <p className="text-[15px] leading-relaxed text-ink-muted">
            The fastest way to reach me is email. I usually reply within a day, and I&apos;m glad to
            share private repos or live demos on request.
          </p>
          <Magnetic>
            <a
              href={`mailto:${EMAIL}`}
              className="sheen mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-base-950 transition-transform hover:-translate-y-0.5"
            >
              Email me <ExternalLinkIcon />
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </div>
  );
}
