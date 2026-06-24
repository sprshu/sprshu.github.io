"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      {/* Contact section */}
      <section
        id="contact"
        ref={ref}
        style={{
          padding: "120px 2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          }}
        />
        {/* Orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "36px",
                  height: "1px",
                  background: "var(--pink)",
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--pink)",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-display)",
                }}
              >
                Contact
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "36px",
                  height: "1px",
                  background: "var(--pink)",
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "white",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              Let&apos;s work
              <br />
              <span className="gradient-text">together.</span>
            </h2>

            <p
              style={{
                color: "var(--muted-2)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "48px",
              }}
            >
              Web制作のご依頼・ご相談はお気軽にどうぞ。
              <br />
              ランディングページ・コーポレートサイト・WordPress制作に対応しています。
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <a
                href="mailto:taishu.sp@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  color: "white",
                  padding: "16px 48px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
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
                    "0 8px 36px rgba(99,102,241,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 24px rgba(99,102,241,0.35)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                taishu.sp@gmail.com
              </a>

              <a
                href="https://github.com/sprshu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--muted-2)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  fontFamily: "var(--font-display)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "white")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--muted-2)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/sprshu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "28px 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.8rem",
            color: "var(--muted)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 TAISHU TANABE
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            letterSpacing: "0.04em",
          }}
        >
          Built with Next.js · Deployed on GitHub Pages
        </span>
      </footer>
    </>
  );
}
