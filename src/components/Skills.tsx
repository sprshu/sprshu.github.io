"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "CMS / Tools",
    skills: ["WordPress", "Notion", "GitHub", "Figma"],
  },
  {
    label: "AI Workflow",
    skills: ["Claude AI", "Codex", "Prompt Engineering"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 2.5rem",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)",
        position: "relative",
      }}
    >
      {/* Subtle border top */}
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

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ marginBottom: "64px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "36px",
                height: "1px",
                background: "var(--accent)",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--accent)",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--font-display)",
              }}
            >
              Tech Stack
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "white",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Skills
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: gi * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  fontFamily: "var(--font-display)",
                  marginBottom: "16px",
                }}
              >
                {group.label}
              </p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
              >
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: gi * 0.1 + si * 0.05 + 0.2,
                      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                    }}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text)",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.02em",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(129,140,248,0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(129,140,248,0.25)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text)";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
