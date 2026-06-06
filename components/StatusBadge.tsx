import type { ProjectStatus } from "@/data/types";

const styles: Record<ProjectStatus, string> = {
  Live: "bg-mint/10 text-mint ring-mint/30",
  "In Progress": "bg-gold/10 text-gold-bright ring-gold/30",
  Prototype: "bg-ink/[0.06] text-ink-muted ring-ink/15",
  "Needs Review": "bg-amber-500/10 text-amber-300 ring-amber-500/30",
};

const dot: Record<ProjectStatus, string> = {
  Live: "bg-mint",
  "In Progress": "bg-gold",
  Prototype: "bg-ink-muted",
  "Needs Review": "bg-amber-400",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ring-1 ring-inset ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]} ${status === "Live" ? "animate-blink" : ""}`} />
      {status}
    </span>
  );
}
