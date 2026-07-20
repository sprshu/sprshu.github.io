"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function FXRoot() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("js");

    // reduced motion: プリローダーを外し、Lenis・GSAPを起動しない
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      html.classList.add("fx-off");
      document.getElementById("preloader")?.remove();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.115 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.stop(); // プリローダー中はスクロールを止める

    const removers: (() => void)[] = [];

    // プリローダーはトップページのみ。サブページ（/works等）ではイントロを省略する
    const hasIntro = !!document.getElementById("preloader");

    const ctx = gsap.context(() => {
      /* ---------- 初期状態 ---------- */
      gsap.set(".site-nav", { autoAlpha: 0, y: -18 });
      gsap.set("[data-reveal]", { autoAlpha: 0, y: 44 });

      if (!hasIntro) {
        gsap.to(".site-nav", {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.1,
        });
        lenis.start();
      }

      if (hasIntro) {
      gsap.set(".hero-title .split-char", { yPercent: 120 });
      gsap.set(".hero-eyebrow, .hero-lead, .hero-scroll", {
        autoAlpha: 0,
        y: 26,
      });
      gsap.set(".hero-shape", { autoAlpha: 0, scale: 0.5 });

      /* ---------- プリローダー: %カウンター + リング → ヒーロー開幕 ---------- */
      const ring = document.getElementById(
        "preloader-ring-fg"
      ) as unknown as SVGCircleElement | null;
      const count = document.getElementById("preloader-count");
      const CIRC = 2 * Math.PI * 54;
      if (ring) {
        ring.style.strokeDasharray = `${CIRC}`;
        ring.style.strokeDashoffset = `${CIRC}`;
      }
      const prog = { v: 0 };
      gsap
        .timeline({ onComplete: () => lenis.start() })
        .to(prog, {
          v: 100,
          duration: 1.7,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count)
              count.textContent = String(Math.round(prog.v)).padStart(3, "0");
            if (ring)
              ring.style.strokeDashoffset = String(CIRC * (1 - prog.v / 100));
          },
        })
        .to(
          "#preloader-inner",
          { autoAlpha: 0, scale: 0.9, duration: 0.35, ease: "power2.in" },
          "+=0.1"
        )
        .to(
          "#preloader",
          { yPercent: -100, duration: 0.85, ease: "power4.inOut" },
          "<0.15"
        )
        .set("#preloader", { display: "none" })
        .to(
          ".site-nav",
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          ".hero-title .split-char",
          {
            yPercent: 0,
            duration: 1.05,
            ease: "power4.out",
            stagger: 0.05,
          },
          "-=0.75"
        )
        .to(
          ".hero-eyebrow",
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.9"
        )
        .to(
          ".hero-lead",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.09,
          },
          "-=0.6"
        )
        .to(
          ".hero-shape",
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.7)",
            stagger: 0.07,
          },
          "-=0.8"
        )
        .to(".hero-scroll", { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.4");

      /* ---------- 浮遊シェイプ（内側）: ゆっくり漂う ---------- */
      gsap.utils.toArray<HTMLElement>(".hero-shape").forEach((el, i) => {
        gsap.to(el, {
          y: () => gsap.utils.random(-30, 30),
          x: () => gsap.utils.random(-22, 22),
          rotation: () => gsap.utils.random(-16, 16),
          duration: gsap.utils.random(3.2, 5.4),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          repeatRefresh: true,
          delay: i * 0.25,
        });
      });

      /* ---------- マウスパララックス（外側ラッパー） ---------- */
      const wraps = gsap.utils
        .toArray<HTMLElement>(".hero-shape-wrap")
        .map((el) => ({
          depth: parseFloat(el.dataset.depth ?? "0.08"),
          qx: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          qy: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        }));
      const onMouse = (e: MouseEvent) => {
        const dx = e.clientX - window.innerWidth / 2;
        const dy = e.clientY - window.innerHeight / 2;
        for (const w of wraps) {
          w.qx(dx * w.depth);
          w.qy(dy * w.depth);
        }
      };
      window.addEventListener("mousemove", onMouse, { passive: true });
      removers.push(() => window.removeEventListener("mousemove", onMouse));

      /* ---------- ヒーローのスクロールアウト ---------- */
      gsap.to(".hero-title", {
        yPercent: -14,
        autoAlpha: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      } // hasIntro（プリローダー・ヒーロー関連はトップページのみ）

      /* ---------- 見出しの文字分割リベール ---------- */
      gsap.utils
        .toArray<HTMLElement>("[data-split-heading]")
        .forEach((heading) => {
          const chars = heading.querySelectorAll(".split-char");
          gsap.set(chars, { yPercent: 120 });
          gsap.to(chars, {
            yPercent: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.035,
            scrollTrigger: { trigger: heading, start: "top 85%", once: true },
          });
        });

      /* ---------- 汎用リベール ---------- */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.to(el, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      /* ---------- 背景ゴーストテキストのスクラブ ---------- */
      gsap.utils.toArray<HTMLElement>("[data-ghost]").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: 5 },
          {
            xPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      /* ---------- フィーチャード画像のパララックス ---------- */
      gsap.fromTo(
        ".featured-shot",
        { yPercent: 6 },
        {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: ".work-featured",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* ---------- マグネティックボタン ---------- */
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
        const qx = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
        const qy = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          qx((e.clientX - (r.left + r.width / 2)) * 0.32);
          qy((e.clientY - (r.top + r.height / 2)) * 0.32);
        };
        const onLeave = () => {
          qx(0);
          qy(0);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        removers.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });

      /* ---------- ページ内アンカーをLenisでスムーズに ---------- */
      document
        .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        .forEach((a) => {
          const onClick = (e: Event) => {
            const id = a.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector<HTMLElement>(id);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: -70 });
          };
          a.addEventListener("click", onClick);
          removers.push(() => a.removeEventListener("click", onClick));
        });
    });

    // Webフォント適用後にScrollTriggerの位置を再計算する
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      removers.forEach((fn) => fn());
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
