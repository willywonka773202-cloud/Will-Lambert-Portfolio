import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  "In Progress": "bg-sky-500/10 text-sky-300 ring-sky-500/30",
  Prototype: "bg-violet-500/10 text-violet-300 ring-violet-500/30",
  "Needs Review": "bg-amber-500/10 text-amber-300 ring-amber-500/30",
};

const dot: Record<ProjectStatus, string> = {
  Live: "bg-emerald-400",
  "In Progress": "bg-sky-400",
  Prototype: "bg-violet-400",
  "Needs Review": "bg-amber-400",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {status}
    </span>
  );
}
