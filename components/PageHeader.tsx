export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-base-700/60 pb-8">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-wide text-accent">{eyebrow}</p>
      )}
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}
