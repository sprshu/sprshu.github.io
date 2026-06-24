"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      <div
        className="glass-card"
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "default",
        }}
      >
        {/* Thumbnail */}
        <div
          style={{
            height: "220px",
            background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: `1px solid ${project.accent}22`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              border: `1px solid ${project.accent}18`,
            }}
          />
          {/* Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(${project.accent}08 1px, transparent 1px), linear-gradient(90deg, ${project.accent}08 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Symbol */}
          <span
            style={{ fontSize: "4rem", position: "relative", zIndex: 1 }}
          >
            {project.symbol}
          </span>
          {/* ID badge */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "20px",
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: project.accent,
              letterSpacing: "0.15em",
              opacity: 0.8,
            }}
          >
            {project.id}
          </div>
          {/* Category */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "16px",
              background: `${project.accent}18`,
              border: `1px solid ${project.accent}30`,
              color: project.accent,
              padding: "4px 12px",
              borderRadius: "100px",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              fontFamily: "var(--font-display)",
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "28px" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "white",
              margin: 0,
              marginBottom: "4px",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.75rem",
              color: project.accent,
              fontWeight: 600,
              letterSpacing: "0.08em",
              marginBottom: "16px",
              fontFamily: "var(--font-display)",
            }}
          >
            {project.subtitle}
          </p>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--muted-2)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "24px",
            }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--muted-2)",
                  padding: "3px 10px",
                  borderRadius: "4px",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--muted-2)",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                letterSpacing: "0.04em",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.color = "var(--muted-2)";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: project.accent,
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                letterSpacing: "0.04em",
                padding: "8px 16px",
                borderRadius: "6px",
                border: `1px solid ${project.accent}30`,
                background: `${project.accent}08`,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  `${project.accent}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  `${project.accent}08`;
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 7h12M7 1l6 6-6 6" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Works() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="works"
      style={{ padding: "120px 2.5rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ marginBottom: "72px" }}
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
                background: "var(--primary)",
              }}
            />
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--primary)",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "var(--font-display)",
              }}
            >
              Portfolio
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
            Works
            <span
              style={{ color: "var(--muted)", fontSize: "0.5em", marginLeft: "16px" }}
            >
              0{projects.length}
            </span>
          </h2>
          <p
            style={{
              color: "var(--muted-2)",
              fontSize: "0.95rem",
              marginTop: "16px",
              lineHeight: 1.75,
              maxWidth: "480px",
            }}
          >
            制作した模擬サイト。今後の実案件も順次追加していきます。
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
