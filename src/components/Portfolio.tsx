"use client";

import { usePortfolioFX } from "./usePortfolioFX";

const FONT_SPACE = "'Space Grotesk',sans-serif";
const FONT_ZEN = "'Zen Kaku Gothic New',sans-serif";

const stackChip: React.CSSProperties = {
  padding: "9px 14px",
  borderRadius: "11px",
  background: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(26,24,21,0.06)",
  fontSize: "13.5px",
  fontWeight: 600,
};

const aiChip: React.CSSProperties = {
  padding: "9px 14px",
  borderRadius: "11px",
  background: "#fff",
  border: "1px solid rgba(70,64,58,0.3)",
  fontSize: "13.5px",
  fontWeight: 600,
  color: "#1a1815",
};

const strengthChip: React.CSSProperties = {
  padding: "8px 14px",
  borderRadius: "999px",
  background: "rgba(26,24,21,0.05)",
  color: "#1a1815",
  fontSize: "13px",
  fontWeight: 600,
};

const pokerTag: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: "999px",
  background: "rgba(26,24,21,0.05)",
  color: "#1a1815",
  fontSize: "12px",
  fontWeight: 600,
};

const aiDbTag: React.CSSProperties = {
  padding: "7px 14px",
  borderRadius: "11px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  fontSize: "13px",
  fontWeight: 600,
};

const sectionIndex: React.CSSProperties = {
  fontFamily: FONT_SPACE,
  fontSize: "13px",
  color: "#1a1815",
  fontWeight: 600,
  letterSpacing: ".1em",
};

const h2Style: React.CSSProperties = {
  margin: 0,
  fontFamily: FONT_ZEN,
  fontWeight: 900,
  fontSize: "clamp(28px,4.4vw,46px)",
  letterSpacing: "-0.01em",
};

function WhatIDoRow({ title, sub }: { title: string; sub: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "14px 16px",
        borderRadius: "14px",
        background: "rgba(255,255,255,0.7)",
        border: "1px solid rgba(26,24,21,0.05)",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#1a1815",
          flex: "none",
        }}
      />
      <div>
        <div style={{ fontWeight: 700, fontSize: "15px" }}>{title}</div>
        <div style={{ fontSize: "12px", color: "#8a857c" }}>{sub}</div>
      </div>
    </div>
  );
}

function Commitment({
  n,
  title,
  sub,
}: {
  n: string;
  title: string;
  sub: string;
}) {
  return (
    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
      <span
        style={{
          fontFamily: FONT_SPACE,
          fontWeight: 700,
          color: "#1a1815",
          fontSize: "14px",
        }}
      >
        {n}
      </span>
      <div>
        <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "3px" }}>
          {title}
        </div>
        <div style={{ fontSize: "13px", color: "#6a655c", lineHeight: 1.7 }}>
          {sub}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  usePortfolioFX();

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#f6f4f0",
        color: "#1a1815",
        fontFamily: "'Noto Sans JP',sans-serif",
      }}
    >
      {/* BACKGROUND ORBS */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          id="orb1"
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "46vw",
            height: "46vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%,rgba(70,64,58,0.15),rgba(70,64,58,0) 70%)",
            filter: "blur(20px)",
            willChange: "transform",
          }}
        />
        <div
          id="orb2"
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-8%",
            width: "52vw",
            height: "52vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 40%,rgba(60,54,48,0.13),rgba(60,54,48,0) 70%)",
            filter: "blur(20px)",
            willChange: "transform",
          }}
        />
        <div
          id="orb3"
          style={{
            position: "absolute",
            top: "35%",
            left: "55%",
            width: "34vw",
            height: "34vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%,rgba(120,112,102,0.12),rgba(120,112,102,0) 70%)",
            filter: "blur(20px)",
            willChange: "transform",
          }}
        />
      </div>

      {/* MOUSE BLOB */}
      <div
        id="mouse-blob"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(40,36,32,0.07),rgba(40,36,32,0) 65%)",
          pointerEvents: "none",
          zIndex: 1,
          willChange: "transform",
        }}
      />

      {/* INTRO CURTAIN */}
      <div
        id="intro-curtain"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "#15120f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "18px",
          pointerEvents: "none",
          willChange: "opacity",
        }}
      >
        <div
          style={{
            fontFamily: FONT_SPACE,
            fontSize: "clamp(28px,5vw,56px)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: ".04em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          SHUBERT
          <span
            style={{
              display: "inline-block",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#e8e3dc",
              animation: "blink 1s steps(1) infinite",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: FONT_SPACE,
            fontSize: "12px",
            letterSpacing: ".5em",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            paddingLeft: ".5em",
          }}
        >
          Web Developer
        </div>
      </div>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px clamp(20px,5vw,56px)",
          background: "rgba(246,244,240,0.7)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(26,24,21,0.06)",
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#1a1815",
          }}
        >
          <span
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "9px",
              background: "linear-gradient(135deg,#4a443d,#1a1815)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: FONT_SPACE,
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 6px 16px -4px rgba(26,24,21,0.6)",
            }}
          >
            S
          </span>
          <span
            style={{
              fontFamily: FONT_SPACE,
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: ".02em",
            }}
          >
            shubert
          </span>
        </a>
        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,2.4vw,34px)",
          }}
        >
          <a
            href="#about"
            className="nav-link"
            style={{
              textDecoration: "none",
              color: "#4a4640",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link"
            style={{
              textDecoration: "none",
              color: "#4a4640",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Skills
          </a>
          <a
            href="#works"
            className="nav-link"
            style={{
              textDecoration: "none",
              color: "#4a4640",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Works
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px clamp(20px,5vw,56px) 80px",
        }}
      >
        <canvas
          id="hero-particles"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        <div
          className="hero-grid"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1120px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "clamp(30px,5vw,70px)",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              data-reveal
              style={{
                fontFamily: FONT_SPACE,
                fontSize: "12px",
                letterSpacing: ".14em",
                color: "#1a1815",
                fontWeight: 600,
              }}
            >
              WEB DEVELOPER
            </div>
            <h1
              data-reveal
              style={{
                margin: 0,
                fontFamily: FONT_ZEN,
                fontWeight: 900,
                fontSize: "clamp(32px,5.4vw,62px)",
                lineHeight: 1.12,
                letterSpacing: "-0.01em",
              }}
            >
              アイデアを、
              <br />
              <span className="grad-text">カタチに</span>。
            </h1>
            <p
              data-reveal
              style={{
                margin: 0,
                maxWidth: "450px",
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#5a554d",
              }}
            >
              元専門学校講師として培った「伝える力」を活かし、
              <br />
              ご要望をていねいにヒアリング。
              <br />
              Web制作から個人開発まで、ひとつひとつ丁寧に対応します。
            </p>
            <div
              data-reveal
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <a
                href="#works"
                data-magnetic
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "14px 28px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg,#4a443d,#1a1815)",
                  boxShadow: "0 14px 32px -10px rgba(26,24,21,0.6)",
                  willChange: "transform",
                }}
              >
                制作物を見る →
              </a>
            </div>
          </div>

          <div
            data-reveal
            style={{
              position: "relative",
              padding: "26px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 24px 60px -22px rgba(120,70,30,0.4)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_SPACE,
                fontSize: "12px",
                letterSpacing: ".1em",
                color: "#9a948c",
                marginBottom: "16px",
              }}
            >
              WHAT I DO
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <WhatIDoRow
                title="Webサイト制作"
                sub="コーポレート・LP・ポートフォリオ"
              />
              <WhatIDoRow
                title="WordPress 修正・カスタマイズ"
                sub="ちょっとした修正もお気軽に"
              />
              <WhatIDoRow
                title="React / Next.js 開発"
                sub="モダンなWebアプリ・個人開発"
              />
              <WhatIDoRow
                title="ヒアリング & 納品後サポート"
                sub="丁寧なコミュニケーション"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "26px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            color: "#a89f93",
            fontSize: "11px",
            letterSpacing: ".2em",
            fontFamily: FONT_SPACE,
          }}
        >
          SCROLL
          <span
            style={{
              width: "1px",
              height: "30px",
              background: "linear-gradient(#1a1815,transparent)",
            }}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "clamp(70px,10vw,130px) clamp(20px,5vw,56px)",
          scrollMarginTop: "70px",
        }}
      >
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
            marginBottom: "46px",
          }}
        >
          <span style={sectionIndex}>01</span>
          <h2 style={h2Style}>About</h2>
        </div>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "clamp(24px,4vw,48px)",
            alignItems: "start",
          }}
        >
          <div
            data-reveal
            style={{
              padding: "30px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 18px 50px -22px rgba(120,70,30,0.3)",
            }}
          >
            <div style={{ fontSize: "15px", lineHeight: 2, color: "#4a463f" }}>
              <p style={{ margin: "0 0 16px" }}>
                現在は{" "}
                <b style={{ color: "#1a1815" }}>
                  React・Next.js・TypeScript
                </b>{" "}
                などのモダンなWeb技術を学びながら、Webサイト制作や個人開発に取り組んでおります。
              </p>
              <p style={{ margin: "0 0 16px" }}>
                また、以前は専門学校にて教育に携わっていた経験があり、お客様のご要望を丁寧にヒアリングし、分かりやすくご説明することを大切にしています。
              </p>
              <div
                style={{
                  margin: "0 0 16px",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(26,24,21,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                }}
              >
                {[
                  "何を準備したらいいか分からない",
                  "ホームページが必要だけど知識がない",
                  "WordPressを少しだけ修正したい",
                ].map((t) => (
                  <div
                    key={t}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ color: "#1a1815", fontWeight: 700 }}>―</span>
                    {t}
                  </div>
                ))}
              </div>
              <p style={{ margin: 0 }}>
                といったご相談も歓迎しております。まだまだ経験を積んでいる段階だからこそ、一件一件のご依頼に真摯に向き合い、お客様に満足していただけるよう努めます。まずはお気軽にご相談ください。
              </p>
            </div>
            <div
              style={{
                marginTop: "26px",
                paddingTop: "22px",
                borderTop: "1px solid rgba(26,24,21,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  color: "#9a948c",
                  letterSpacing: ".08em",
                  marginBottom: "14px",
                  fontFamily: FONT_SPACE,
                }}
              >
                STRENGTHS
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}
              >
                {[
                  "認知能力が高い",
                  "雑談力に自信あり",
                  "講師経験あり",
                  "行動が速い",
                  "学習速度が速い",
                  "AI活用に抵抗がない",
                  "新技術を試すのが好き",
                ].map((s) => (
                  <span key={s} style={strengthChip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#9a948c",
                letterSpacing: ".08em",
                fontFamily: FONT_SPACE,
                paddingLeft: "4px",
              }}
            >
              COMMITMENT / 心掛けていること
            </div>
            <div
              style={{
                padding: "24px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.7)",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <Commitment
                n="01"
                title="迅速なレスポンス"
                sub="ご連絡にはできるだけ早く対応します。"
              />
              <Commitment
                n="02"
                title="丁寧なコミュニケーション"
                sub="専門用語を避け、分かりやすくご説明します。"
              />
              <Commitment
                n="03"
                title="進捗状況の共有"
                sub="作業の状況をこまめにご報告します。"
              />
              <Commitment
                n="04"
                title="納品後のサポート"
                sub="公開して終わりではなく、その後も対応します。"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "clamp(50px,8vw,100px) clamp(20px,5vw,56px)",
          scrollMarginTop: "70px",
        }}
      >
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
            marginBottom: "18px",
          }}
        >
          <span style={sectionIndex}>02</span>
          <h2 style={h2Style}>Skills &amp; Stack</h2>
        </div>
        <p
          data-reveal
          style={{ margin: "0 0 40px", color: "#6a655c", fontSize: "15px" }}
        >
          シンプルさを優先した技術選定。モダンなWeb技術を中心に、必要なものを過不足なく。
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "18px",
          }}
        >
          {/* FRONTEND */}
          <div
            data-reveal
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_SPACE,
                fontSize: "12px",
                letterSpacing: ".08em",
                color: "#9a948c",
                marginBottom: "16px",
              }}
            >
              FRONTEND
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                "React",
                "React Native",
                "Expo",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
              ].map((s) => (
                <span
                  key={s}
                  data-magnetic={s === "React" ? "" : undefined}
                  className="chip"
                  style={{ ...stackChip, willChange: "transform" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND + TOOLS */}
          <div
            data-reveal
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_SPACE,
                fontSize: "12px",
                letterSpacing: ".08em",
                color: "#9a948c",
                marginBottom: "16px",
              }}
            >
              BACKEND
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Supabase", "PostgreSQL"].map((s) => (
                <span key={s} style={stackChip}>
                  {s}
                </span>
              ))}
            </div>
            <div
              style={{
                fontFamily: FONT_SPACE,
                fontSize: "12px",
                letterSpacing: ".08em",
                color: "#9a948c",
                margin: "22px 0 16px",
              }}
            >
              TOOLS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["GitHub", "Apple Developer", "Notion"].map((s) => (
                <span key={s} style={stackChip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* AI TOOLS */}
          <div
            data-reveal
            style={{
              padding: "24px",
              borderRadius: "20px",
              background:
                "linear-gradient(160deg,rgba(70,64,58,0.16),rgba(26,24,21,0.08))",
              border: "1px solid rgba(70,64,58,0.3)",
            }}
          >
            <div
              style={{
                fontFamily: FONT_SPACE,
                fontSize: "12px",
                letterSpacing: ".08em",
                color: "#1a1815",
                marginBottom: "16px",
              }}
            >
              AI TOOLS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Claude", "ChatGPT", "Codex"].map((s) => (
                <span
                  key={s}
                  data-magnetic={s === "Claude" ? "" : undefined}
                  style={{
                    ...aiChip,
                    willChange: s === "Claude" ? "transform" : undefined,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <p
              style={{
                margin: "18px 0 0",
                fontSize: "13px",
                lineHeight: 1.8,
                color: "#6a655c",
              }}
            >
              AIを取り入れ、設計から実装までを効率よく進めます。
            </p>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section
        id="works"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "clamp(50px,8vw,100px) clamp(20px,5vw,56px)",
          scrollMarginTop: "70px",
        }}
      >
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
            marginBottom: "46px",
          }}
        >
          <span style={sectionIndex}>03</span>
          <h2 style={h2Style}>Works</h2>
        </div>

        {/* Site cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {/* Sakura Bistro */}
          <a
            href="https://github.com/sprshu/portfolio-restaurant-sakura-bistro"
            target="_blank"
            rel="noopener"
            data-reveal
            className="work-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              borderRadius: "22px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 18px 50px -26px rgba(40,36,32,0.4)",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
                background: "linear-gradient(150deg,#20302450,#33402f)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: "5px", padding: "10px 12px" }}>
                {[0.35, 0.25, 0.18].map((o, i) => (
                  <span
                    key={i}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: `rgba(255,255,255,${o})`,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  padding: "0 18px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: ".42em",
                    color: "rgba(245,238,225,0.65)",
                    paddingLeft: ".42em",
                  }}
                >
                  R E S T A U R A N T
                </div>
                <div
                  style={{
                    fontFamily: "'Zen Kaku Gothic New',serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px,3.4vw,28px)",
                    color: "#f5eede",
                    lineHeight: 1.15,
                  }}
                >
                  桜{" "}
                  <span style={{ fontStyle: "italic", fontWeight: 500 }}>
                    Sakura Bistro
                  </span>
                </div>
                <div
                  style={{ width: "34px", height: "1.5px", background: "#c9a24a" }}
                />
                <div
                  style={{
                    fontSize: "10.5px",
                    color: "rgba(245,238,225,0.55)",
                  }}
                >
                  旬の食材と、静かな時間を。
                </div>
              </div>
            </div>
            <div style={{ padding: "20px 22px 22px" }}>
              <div
                style={{
                  fontFamily: FONT_SPACE,
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#9a948c",
                  marginBottom: "7px",
                }}
              >
                飲食店サイト
              </div>
              <h3
                style={{
                  margin: "0 0 9px",
                  fontFamily: FONT_ZEN,
                  fontWeight: 900,
                  fontSize: "19px",
                }}
              >
                Sakura Bistro
              </h3>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "#5a554d",
                }}
              >
                「和」を基調にしたレストランサイト。落ち着いた配色と余白で、料理の世界観と空気感を伝えるデザイン。
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "13px",
                  borderTop: "1px solid rgba(26,24,21,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#8a857c",
                    fontWeight: 600,
                  }}
                >
                  HTML · CSS · JavaScript
                </span>
                <span
                  style={{
                    fontFamily: FONT_SPACE,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1a1815",
                  }}
                >
                  GitHub →
                </span>
              </div>
            </div>
          </a>

          {/* TechSide Academy */}
          <a
            href="https://github.com/sprshu/portfolio-lp-techside-academy"
            target="_blank"
            rel="noopener"
            data-reveal
            className="work-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              borderRadius: "22px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 18px 50px -26px rgba(40,36,32,0.4)",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
                background: "linear-gradient(145deg,#0b1f3a,#1d4ed8)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: "5px", padding: "10px 12px" }}>
                {[0.35, 0.25, 0.18].map((o, i) => (
                  <span
                    key={i}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: `rgba(255,255,255,${o})`,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "11px",
                  padding: "0 22px 16px",
                }}
              >
                <div
                  style={{
                    fontFamily: FONT_SPACE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".04em",
                    color: "#7dd3fc",
                  }}
                >
                  TECHSIDE ACADEMY
                </div>
                <div
                  style={{
                    fontFamily: FONT_ZEN,
                    fontWeight: 900,
                    fontSize: "clamp(18px,3vw,24px)",
                    color: "#fff",
                    lineHeight: 1.25,
                  }}
                >
                  未経験から、
                  <br />
                  エンジニアへ。
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    marginTop: "2px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#0b1f3a",
                      background: "#fbbf24",
                      padding: "7px 14px",
                      borderRadius: "999px",
                    }}
                  >
                    無料体験はこちら
                  </span>
                  <span
                    style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.7)" }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
            <div style={{ padding: "20px 22px 22px" }}>
              <div
                style={{
                  fontFamily: FONT_SPACE,
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#9a948c",
                  marginBottom: "7px",
                }}
              >
                ランディングページ
              </div>
              <h3
                style={{
                  margin: "0 0 9px",
                  fontFamily: FONT_ZEN,
                  fontWeight: 900,
                  fontSize: "19px",
                }}
              >
                TechSide Academy
              </h3>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "#5a554d",
                }}
              >
                プログラミングスクールのLP。訴求の流れとCTA導線を意識し、申し込みまでを自然に促す構成に。
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "13px",
                  borderTop: "1px solid rgba(26,24,21,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#8a857c",
                    fontWeight: 600,
                  }}
                >
                  HTML · CSS · JavaScript
                </span>
                <span
                  style={{
                    fontFamily: FONT_SPACE,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1a1815",
                  }}
                >
                  GitHub →
                </span>
              </div>
            </div>
          </a>

          {/* NexaLab */}
          <a
            href="https://github.com/sprshu/portfolio-corporate-nexalab"
            target="_blank"
            rel="noopener"
            data-reveal
            className="work-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              borderRadius: "22px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 18px 50px -26px rgba(40,36,32,0.4)",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
                background: "#f4f6fb",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 14px",
                  borderBottom: "1px solid rgba(15,30,60,0.07)",
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_SPACE,
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#0f2a52",
                  }}
                >
                  Nexa<span style={{ color: "#2563eb" }}>Lab</span>
                </span>
                <div style={{ display: "flex", gap: "8px" }}>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: "18px",
                        height: "3px",
                        borderRadius: "2px",
                        background: "rgba(15,42,82,0.18)",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "0 22px",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "3px",
                    background: "#2563eb",
                    borderRadius: "2px",
                  }}
                />
                <div
                  style={{
                    fontFamily: FONT_ZEN,
                    fontWeight: 900,
                    fontSize: "clamp(17px,2.8vw,23px)",
                    color: "#0f2a52",
                    lineHeight: 1.25,
                  }}
                >
                  テクノロジーで、
                  <br />
                  事業の可能性を広げる。
                </div>
                <div style={{ display: "flex", gap: "7px", marginTop: "3px" }}>
                  <span
                    style={{
                      height: "7px",
                      width: "54px",
                      borderRadius: "3px",
                      background: "rgba(15,42,82,0.1)",
                    }}
                  />
                  <span
                    style={{
                      height: "7px",
                      width: "38px",
                      borderRadius: "3px",
                      background: "rgba(15,42,82,0.1)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ padding: "20px 22px 22px" }}>
              <div
                style={{
                  fontFamily: FONT_SPACE,
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#9a948c",
                  marginBottom: "7px",
                }}
              >
                コーポレートサイト
              </div>
              <h3
                style={{
                  margin: "0 0 9px",
                  fontFamily: FONT_ZEN,
                  fontWeight: 900,
                  fontSize: "19px",
                }}
              >
                NexaLab
              </h3>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "#5a554d",
                }}
              >
                IT企業のコーポレートサイト。信頼感のあるレイアウトと整理された情報設計を重視したデザイン。
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "13px",
                  borderTop: "1px solid rgba(26,24,21,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#8a857c",
                    fontWeight: 600,
                  }}
                >
                  HTML · CSS · JavaScript
                </span>
                <span
                  style={{
                    fontFamily: FONT_SPACE,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1a1815",
                  }}
                >
                  GitHub →
                </span>
              </div>
            </div>
          </a>

          {/* Build-C */}
          <a
            href="https://build-c.com/"
            target="_blank"
            rel="noopener"
            data-reveal
            className="work-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              borderRadius: "22px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 18px 50px -26px rgba(40,36,32,0.4)",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
                background: "linear-gradient(150deg,#0a0f1c,#111a2e)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "10px 12px",
                  borderBottom: "1px solid rgba(125,211,252,0.12)",
                }}
              >
                {[0.5, 0.32, 0.22].map((o, i) => (
                  <span
                    key={i}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: `rgba(125,211,252,${o})`,
                    }}
                  />
                ))}
                <span
                  style={{
                    marginLeft: "8px",
                    fontFamily: "'Space Grotesk',monospace",
                    fontSize: "10px",
                    color: "rgba(125,211,252,0.55)",
                    letterSpacing: ".04em",
                  }}
                >
                  build-c — zsh
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "0 22px 16px",
                  fontFamily: "'Space Grotesk',monospace",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#7dd3fc",
                    letterSpacing: ".02em",
                  }}
                >
                  $ build-c --init
                </div>
                <div
                  style={{
                    fontFamily: FONT_ZEN,
                    fontWeight: 900,
                    fontSize: "clamp(18px,3vw,24px)",
                    color: "#fff",
                    lineHeight: 1.25,
                  }}
                >
                  第3のプレーヤーとして、
                  <br />
                  未来を構築する。
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "11px",
                    color: "rgba(226,232,240,0.7)",
                    letterSpacing: ".06em",
                  }}
                >
                  City · Community · Code · Connect
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "14px",
                      background: "#7dd3fc",
                      animation: "blink 1s steps(1) infinite",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ padding: "20px 22px 22px" }}>
              <div
                style={{
                  fontFamily: FONT_SPACE,
                  fontSize: "11px",
                  letterSpacing: ".06em",
                  color: "#9a948c",
                  marginBottom: "7px",
                }}
              >
                コーポレートサイト / 実案件
              </div>
              <h3
                style={{
                  margin: "0 0 9px",
                  fontFamily: FONT_ZEN,
                  fontWeight: 900,
                  fontSize: "19px",
                }}
              >
                Build-C
              </h3>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "#5a554d",
                }}
              >
                テクノロジー・イノベーション企業のコーポレートサイト。ターミナル調の未来的なデザインで、ブランドの世界観と「構築する」という姿勢を表現。
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "13px",
                  borderTop: "1px solid rgba(26,24,21,0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#8a857c",
                    fontWeight: 600,
                  }}
                >
                  WordPress · PHP
                </span>
                <span
                  style={{
                    fontFamily: FONT_SPACE,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1a1815",
                  }}
                >
                  サイトを見る →
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Poker Memo */}
        <div
          data-reveal
          className="poker-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 0,
            borderRadius: "26px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 26px 70px -28px rgba(120,70,30,0.4)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: "300px",
              background:
                "repeating-linear-gradient(135deg,rgba(70,64,58,0.14) 0 14px,rgba(70,64,58,0.06) 14px 28px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk',monospace",
                fontSize: "12px",
                color: "#6a655c",
                letterSpacing: ".06em",
                padding: "8px 14px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              app screenshot
            </span>
          </div>
          <div style={{ padding: "clamp(24px,3.5vw,40px)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: FONT_ZEN,
                  fontWeight: 900,
                  fontSize: "clamp(22px,3vw,30px)",
                }}
              >
                Poker Memo
              </h3>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 11px",
                  borderRadius: "999px",
                  background: "rgba(34,197,94,0.12)",
                  color: "#16864a",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                />
                開発中
              </span>
            </div>
            <p
              style={{
                margin: "0 0 18px",
                fontSize: "14.5px",
                lineHeight: 1.85,
                color: "#5a554d",
              }}
            >
              ポーカーのハンド履歴を記録・分析するためのサービス。GTO判定より「記録」を優先し、自分専用のポーカーデータベースを作ります。後から検索・分析できることを重視し、将来的には AI によるプレイ傾向分析も検討。
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "18px",
              }}
            >
              {["入力速度", "記録のしやすさ", "検索性", "データ蓄積", "統計分析"].map(
                (t) => (
                  <span key={t} style={pokerTag}>
                    {t}
                  </span>
                )
              )}
            </div>
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                paddingTop: "16px",
                borderTop: "1px solid rgba(26,24,21,0.08)",
              }}
            >
              {["React Native", "Expo", "Supabase"].map((s, i, arr) => (
                <span
                  key={s}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#8a857c",
                      fontWeight: 600,
                    }}
                  >
                    {s}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ color: "#d8c4b0" }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* AI database concept */}
        <div
          data-reveal
          style={{
            padding: "clamp(24px,3.5vw,38px)",
            borderRadius: "26px",
            background:
              "linear-gradient(135deg,rgba(21,18,15,0.97),rgba(40,28,18,0.97))",
            color: "#f6f4f0",
            boxShadow: "0 26px 70px -28px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "14px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: FONT_ZEN,
                fontWeight: 900,
                fontSize: "clamp(20px,2.8vw,28px)",
              }}
            >
              個人向け AI データベース
            </h3>
            <span
              style={{
                padding: "5px 11px",
                borderRadius: "999px",
                background: "rgba(70,64,58,0.2)",
                color: "#6f675f",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              構想中
            </span>
          </div>
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "14.5px",
              lineHeight: 1.85,
              color: "rgba(246,244,240,0.72)",
              maxWidth: "680px",
            }}
          >
            ユーザーの健康・学習・仕事・家族・趣味などの情報を一元管理し、AI
            が活用できるパーソナルデータベース構想。AI
            時代の個人開発者として、自分自身が一番使いたいものを作ります。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["健康", "学習", "仕事", "家族", "趣味"].map((t) => (
              <span key={t} style={aiDbTag}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(26,24,21,0.07)",
          padding: "40px clamp(20px,5vw,56px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "18px",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1080px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "8px",
              background: "linear-gradient(135deg,#4a443d,#1a1815)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: FONT_SPACE,
              fontWeight: 700,
              fontSize: "13px",
            }}
          >
            S
          </span>
          <span
            style={{ fontFamily: FONT_SPACE, fontWeight: 700, fontSize: "14px" }}
          >
            shubert
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <a
            href="https://github.com/sprshu"
            target="_blank"
            rel="noopener"
            style={{
              textDecoration: "none",
              color: "#6a655c",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: FONT_SPACE,
            }}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#6a655c",
              fontSize: "13px",
              fontWeight: 600,
              fontFamily: FONT_SPACE,
            }}
          >
            X
          </a>
          <span
            style={{
              fontSize: "12px",
              color: "#a89f93",
              fontFamily: FONT_SPACE,
            }}
          >
            Built with AI · Notion → Claude → Codex
          </span>
        </div>
      </footer>
    </div>
  );
}
