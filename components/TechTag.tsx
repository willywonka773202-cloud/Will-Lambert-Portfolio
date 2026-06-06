export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-base-700/70 bg-base-800/50 px-2 py-0.5 font-mono text-[11px] text-ink-muted">
      {children}
    </span>
  );
}
