import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        description="Recruiting, collaboration, or just want to see a project up close? Reach out — I'm happy to walk through any of these builds."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between rounded-xl border border-base-700/60 bg-base-850/60 p-4 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-base-800 text-ink-muted ring-1 ring-inset ring-base-600/60 group-hover:text-accent">
                {c.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{c.label}</p>
                <p className="text-xs text-ink-faint">{c.value}</p>
              </div>
            </div>
            <span className="text-ink-faint transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-base-700/60 bg-base-850/60 p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          The fastest way to reach me is email. I usually reply within a day, and I&apos;m glad to
          share private repos or live demos on request.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-base-950 transition-colors hover:bg-accent-muted"
        >
          Email me <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}
