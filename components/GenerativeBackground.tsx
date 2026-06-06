"use client";

import { useEffect, useRef } from "react";

/**
 * "Nocturne" flow field — a living constellation of particles drifting along a
 * smooth pseudo-noise vector field, gently reactive to the cursor. Faint gold on
 * warm black so it reads as atmosphere, never as noise. Performance-guarded:
 * DPR-aware, particle count scales to viewport, pauses when the tab is hidden,
 * and renders a single static frame when reduced motion is requested.
 */
export default function GenerativeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const pointer = { x: -9999, y: -9999, active: false };

    type P = { x: number; y: number; px: number; py: number; spd: number };
    let particles: P[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0a0908";
      ctx.fillRect(0, 0, w, h);

      const count = Math.min(Math.round((w * h) / 11000), 200);
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return { x, y, px: x, py: y, spd: 0 };
      });
    };

    // Smooth, cheap pseudo-noise vector field (layered trig).
    const field = (x: number, y: number, t: number) => {
      const s = 0.0016;
      return (
        Math.sin(x * s + t) * 1.4 +
        Math.cos(y * s * 1.3 - t * 0.8) * 1.4 +
        Math.sin((x + y) * s * 0.7 + t * 0.5) +
        Math.cos((x - y) * s * 0.9 - t * 0.6)
      );
    };

    let t = 0;
    let raf = 0;

    const step = () => {
      // Fade previous frame to leave soft trails.
      ctx.fillStyle = "rgba(10, 9, 8, 0.07)";
      ctx.fillRect(0, 0, w, h);
      t += 0.0016;

      for (const p of particles) {
        p.px = p.x;
        p.py = p.y;
        const angle = field(p.x, p.y, t) * Math.PI;
        let vx = Math.cos(angle) * 0.9;
        let vy = Math.sin(angle) * 0.9;

        // Cursor swirl
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          const r = 170;
          if (d2 < r * r) {
            const d = Math.sqrt(d2) || 1;
            const force = (1 - d / r) * 2.4;
            // tangential push for a gentle vortex
            vx += (-dy / d) * force + (dx / d) * force * 0.3;
            vy += (dx / d) * force + (dy / d) * force * 0.3;
          }
        }

        p.x += vx;
        p.y += vy;
        p.spd = Math.hypot(vx, vy);

        // Wrap
        if (p.x < -5) { p.x = w + 5; p.px = p.x; }
        if (p.x > w + 5) { p.x = -5; p.px = p.x; }
        if (p.y < -5) { p.y = h + 5; p.py = p.y; }
        if (p.y > h + 5) { p.y = -5; p.py = p.y; }

        const fast = Math.min(p.spd / 2.6, 1);
        const alpha = 0.05 + fast * 0.32;
        // gold that brightens with speed
        ctx.strokeStyle = `rgba(${232 + fast * 23}, ${184 + fast * 40}, ${109 + fast * 60}, ${alpha})`;
        ctx.lineWidth = 0.8 + fast * 0.7;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(step);
    };

    const drawStatic = () => {
      ctx.fillStyle = "#0a0908";
      ctx.fillRect(0, 0, w, h);
      for (const p of particles) {
        ctx.fillStyle = "rgba(232,184,109,0.18)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => { pointer.active = false; };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        raf = requestAnimationFrame(step);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
    />
  );
}
