import type { Brand } from "@/data/types";

/** Stable hash → hue, so every repo gets its own consistent color. */
function hashHue(value: string): number {
  let h = 0;
  for (let i = 0; i < value.length; i++) {
    h = (h * 31 + value.charCodeAt(i)) % 360;
  }
  return h;
}

function autoGradient(name: string): [string, string] {
  const hue = hashHue(name);
  return [`hsl(${hue} 72% 56%)`, `hsl(${(hue + 42) % 360} 70% 44%)`];
}

/** Up-to-two-letter monogram derived from the project name. */
function monogram(name: string): string {
  const words = name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const sizes = {
  sm: "h-9 w-9 rounded-lg text-xs",
  md: "h-12 w-12 rounded-xl text-sm",
  lg: "h-16 w-16 rounded-2xl text-lg",
};

export default function ProjectLogo({
  name,
  brand,
  size = "md",
  className = "",
}: {
  name: string;
  brand?: Brand;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const [from, to] = brand ? [brand.from, brand.to] : autoGradient(name);
  const label = brand?.glyph ?? monogram(name);

  return (
    <span
      aria-hidden="true"
      className={`relative grid shrink-0 place-items-center overflow-hidden font-bold tracking-tight text-white shadow-[0_8px_24px_-10px_rgba(0,0,0,0.8)] ring-1 ring-inset ring-white/15 ${sizes[size]} ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* soft top highlight + subtle texture */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 to-transparent opacity-60" />
      <span className="pointer-events-none absolute -right-3 -top-4 h-10 w-10 rounded-full bg-white/20 blur-md" />
      <span className="relative drop-shadow-sm">{label}</span>
    </span>
  );
}
