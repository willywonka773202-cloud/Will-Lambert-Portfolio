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
    <div className="relative border-b border-base-700/50 pb-10">
      {eyebrow && <p className="kicker animate-fade-up text-gold">{eyebrow}</p>}
      <h1 className="mt-4 animate-fade-up display-tight text-5xl text-ink [animation-delay:80ms] sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-muted [animation-delay:160ms]">
          {description}
        </p>
      )}
    </div>
  );
}
