"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Cursor glow */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 1,
          transition: "left 0.1s ease, top 0.1s ease",
        }}
      />

      {/* Orbs */}
      <div
        className="orb orb-1"
        style={{ top: "-10%", left: "-15%", zIndex: 0 }}
      />
      <div
        className="orb orb-2"
        style={{ bottom: "10%", right: "-10%", zIndex: 0 }}
      />
      <div
        className="orb orb-3"
        style={{ top: "40%", left: "55%", zIndex: 0 }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(129,140,248,0.08)",
              border: "1px solid rgba(129,140,248,0.2)",
              color: "var(--primary)",
              padding: "6px 16px",
              borderRadius: "100px",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "40px",
              fontFamily: "var(--font-display)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px #4ade80",
              }}
            />
            Available for work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={item}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 13vw, 11rem)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              margin: 0,
              marginBottom: "0.08em",
            }}
          >
            TAISHU
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <h1
            className="gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 13vw, 11rem)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              margin: 0,
              marginBottom: "48px",
            }}
          >
            TANABE.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          style={{
            color: "var(--muted-2)",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
            letterSpacing: "0.06em",
            marginBottom: "56px",
            fontWeight: 400,
          }}
        >
          フロントエンドエンジニア &nbsp;/&nbsp; Web クリエイター
          <br />
          <span style={{ fontSize: "0.85em", color: "var(--muted)" }}>
            HTML · CSS · JavaScript · Next.js · WordPress
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#works"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
              color: "white",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              fontFamily: "var(--font-display)",
              boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 32px rgba(99,102,241,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 24px rgba(99,102,241,0.35)";
            }}
          >
            制作実績を見る
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "var(--muted-2)",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              fontFamily: "var(--font-display)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "var(--muted-2)";
            }}
          >
            お問い合わせ
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--muted)",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "var(--font-display)",
          }}
        >
          Scroll
        </span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect
            x="1"
            y="1"
            width="14"
            height="18"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="7" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
