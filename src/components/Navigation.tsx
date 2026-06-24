"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(7, 9, 15, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #818CF8, #A78BFA)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "white",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.02em",
              flexShrink: 0,
            }}
          >
            TT
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.02em",
            }}
          >
            TANABE
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline"
                style={{
                  color: "var(--muted-2)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-display)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "white")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted-2)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "8px",
            fontSize: "1.2rem",
          }}
          className="nav-mobile-toggle"
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(7, 9, 15, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 2.5rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                display: "block",
                color: "var(--muted-2)",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
