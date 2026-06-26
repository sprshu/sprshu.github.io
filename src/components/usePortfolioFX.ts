"use client";

import { useEffect } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

/**
 * Faithful port of the Claude Design `DCLogic` runtime loop:
 * particle canvas, mouse-follow blob, drifting orbs, magnetic buttons,
 * scroll-reveal, and the intro curtain fade.
 */
export function usePortfolioFX() {
  useEffect(() => {
    const canvas = document.getElementById(
      "hero-particles"
    ) as HTMLCanvasElement | null;

    let dpr = 1;
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const blob = { x: mouse.x, y: mouse.y };

    const resize = () => {
      if (!canvas) return;
      const d = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      if (r.width === 0) return;
      canvas.width = r.width * d;
      canvas.height = r.height * d;
      dpr = d;
      w = r.width;
      h = r.height;
    };

    const initParticles = () => {
      resize();
      const n = Math.max(30, Math.min(72, Math.floor((w * h) / 14000)));
      particles = [];
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * (w || 1000),
          y: Math.random() * (h || 800),
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };

    const drawParticles = () => {
      if (!canvas || !particles.length || !w) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const rect = canvas.getBoundingClientRect();
      const lmx = mouse.x - rect.left;
      const lmy = mouse.y - rect.top;
      const ps = particles;
      for (const p of ps) {
        const dx = p.x - lmx;
        const dy = p.y - lmy;
        const d = Math.hypot(dx, dy);
        if (d < 150 && d > 0) {
          const f = ((150 - d) / 150) * 0.4;
          p.vx += (dx / d) * f * 0.3;
          p.vy += (dy / d) * f * 0.3;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (p.x < 0) p.x += w;
        if (p.x > w) p.x -= w;
        if (p.y < 0) p.y += h;
        if (p.y > h) p.y -= h;
      }
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const a = ps[i];
          const q = ps[j];
          const dx = a.x - q.x;
          const dy = a.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < 118) {
            ctx.strokeStyle = "rgba(40,36,32," + (1 - d / 118) * 0.16 + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      for (const p of ps) {
        ctx.fillStyle = "rgba(45,40,36,0.45)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, 7);
        ctx.fill();
      }
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => resize();

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    initParticles();

    let raf = 0;
    let t0 = 0;
    let curtainHidden = false;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = performance.now();
      const t = now / 1000;
      if (!t0) t0 = now;
      const elapsed = (now - t0) / 1000;

      // mouse blob lerp
      blob.x += (mouse.x - blob.x) * 0.08;
      blob.y += (mouse.y - blob.y) * 0.08;
      const b = document.getElementById("mouse-blob");
      if (b)
        b.style.transform =
          "translate(" + (blob.x - 300) + "px," + (blob.y - 300) + "px)";

      // ambient orb drift
      const o1 = document.getElementById("orb1");
      if (o1)
        o1.style.transform =
          "translate(" +
          Math.sin(t * 0.32) * 46 +
          "px," +
          Math.cos(t * 0.27) * 34 +
          "px) scale(" +
          (1 + Math.sin(t * 0.4) * 0.06) +
          ")";
      const o2 = document.getElementById("orb2");
      if (o2)
        o2.style.transform =
          "translate(" +
          Math.cos(t * 0.24) * 54 +
          "px," +
          Math.sin(t * 0.3) * 42 +
          "px) scale(" +
          (1 + Math.cos(t * 0.35) * 0.05) +
          ")";
      const o3 = document.getElementById("orb3");
      if (o3)
        o3.style.transform =
          "translate(" +
          Math.sin(t * 0.21 + 1) * 36 +
          "px," +
          Math.cos(t * 0.26 + 2) * 40 +
          "px)";

      // intro curtain fade + hide
      const cur = document.getElementById("intro-curtain");
      if (cur && !curtainHidden) {
        const op = elapsed < 1.3 ? 1 : Math.max(0, 1 - (elapsed - 1.3) / 0.7);
        cur.style.opacity = String(op);
        cur.style.transform = "translateY(" + -(1 - op) * 44 + "px)";
        if (elapsed > 2.2) {
          cur.style.display = "none";
          curtainHidden = true;
        }
      }

      // magnetic
      const R = 130;
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mouse.x - cx;
        const dy = mouse.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < R) {
          el.style.transform =
            "translate(" + dx * 0.3 + "px," + dy * 0.3 + "px)";
        } else {
          el.style.transform = "translate(0,0)";
        }
      });

      drawParticles();

      // scroll reveal — JS-driven fade
      const vh = window.innerHeight;
      document
        .querySelectorAll<HTMLElement & { _revStart?: number; _revDone?: boolean }>(
          "[data-reveal]"
        )
        .forEach((el) => {
          if (el._revDone) {
            el.style.opacity = "1";
            el.style.transform = "none";
            return;
          }
          if (el._revStart == null) {
            const r = el.getBoundingClientRect();
            if (r.top < vh * 0.9 && r.bottom > 0) {
              el._revStart = now;
            } else {
              el.style.opacity = "0";
              el.style.transform = "translateY(28px)";
              return;
            }
          }
          let p = (now - el._revStart) / 720;
          if (p >= 1) {
            p = 1;
            el._revDone = true;
          }
          const e = 1 - Math.pow(1 - p, 3);
          el.style.opacity = String(e);
          el.style.transform = "translateY(" + 28 * (1 - e) + "px)";
        });
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);
}
