import SplitChars from "./SplitChars";

const ROWS: { items: string[]; reverse?: boolean }[] = [
  {
    items: [
      "React",
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    items: [
      "Supabase",
      "PostgreSQL",
      "WordPress",
      "GitHub",
      "Apple Developer",
      "Notion",
    ],
    reverse: true,
  },
  {
    items: ["Claude", "ChatGPT", "Claude Code", "AI-Driven Development"],
  },
];

function MarqueeRow({
  items,
  reverse,
  outline,
}: {
  items: string[];
  reverse?: boolean;
  outline?: boolean;
}) {
  // シームレスにループさせるため同じ内容を2回並べ、-50%までを無限に流す
  const half = (key: string) => (
    <span key={key} aria-hidden={key === "b" ? true : undefined}>
      {items.map((s) => (
        <span key={s}>
          <span className={`marquee-item ${outline ? "is-outline" : ""}`}>
            {s}
          </span>
          <span className="marquee-dot" aria-hidden="true">
            ●
          </span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`marquee ${reverse ? "is-reverse" : ""}`}>
      <div className="marquee-track">
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="ghost-word" data-ghost aria-hidden="true">
        Skills
      </div>
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" data-split-heading>
            <SplitChars text="Skills" />
          </h2>
          <span className="section-title-ja mono-label">
            スキル・技術スタック
          </span>
        </div>
      </div>

      <div className="skills-rows" data-reveal>
        <MarqueeRow items={ROWS[0].items} />
        <MarqueeRow items={ROWS[1].items} reverse outline />
        <MarqueeRow items={ROWS[2].items} />
      </div>

      <div className="wrap">
        <p className="skills-note" data-reveal>
          シンプルさを優先した技術選定。モダンなWeb技術を中心に、必要なものを過不足なく。AIを取り入れ、設計から実装までを効率よく進めます。
        </p>
      </div>
    </section>
  );
}
