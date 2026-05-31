export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-base-600/60 bg-base-800/60 px-2 py-0.5 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
