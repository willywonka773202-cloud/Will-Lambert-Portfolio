"use client";

import { useEffect, useState } from "react";

/**
 * A soft gold light that trails the cursor on pointer-capable devices.
 * Disabled on touch and under reduced-motion (see globals.css).
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      document.documentElement.style.setProperty("--cursor-x", `${cx}px`);
      document.documentElement.style.setProperty("--cursor-y", `${cy}px`);
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return <div className="cursor-glow" aria-hidden="true" />;
}
