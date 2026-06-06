"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/github", label: "Code" },
  { href: "/live-apps", label: "Live" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-base-700/60 bg-base-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-gold-bright to-gold-deep shadow-[0_8px_22px_-8px_rgba(200,149,74,0.9)] ring-1 ring-inset ring-white/25 transition-transform duration-500 group-hover:rotate-[20deg]">
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-70" />
            <span className="relative font-display text-base font-semibold text-base-950">W</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tightest text-ink">Portfolio</span>
            <span className="kicker text-[8px] text-ink-faint">Will Lambert</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`link-underline font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive(l.href) ? "text-gold-bright" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-base-700/70 p-2 text-ink-muted md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6 18 18M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-base-700/60 bg-base-950/90 px-4 py-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 font-mono text-sm uppercase tracking-widest transition-colors ${
                  isActive(l.href) ? "bg-base-800 text-gold-bright" : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
