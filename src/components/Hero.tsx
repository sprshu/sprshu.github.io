import SplitChars from "./SplitChars";

// wrap（外側）にマウスパララックス、shape（内側）に浮遊ループを割り当てる。
// transformの適用先を分けることでGSAPのアニメーション同士が干渉しない。
const SHAPES = [
  {
    cls: "shape-sphere",
    size: 120,
    style: { top: "16%", left: "9%" },
    depth: 0.05,
  },
  {
    cls: "shape-ring",
    size: 170,
    style: { top: "58%", left: "5%" },
    depth: 0.08,
  },
  {
    cls: "shape-pill",
    size: 150,
    style: { top: "13%", right: "10%" },
    depth: 0.06,
    ratio: 0.36,
    rotate: -24,
  },
  {
    cls: "shape-cube",
    size: 84,
    style: { top: "66%", right: "16%" },
    depth: 0.1,
    rotate: 18,
  },
  {
    cls: "shape-sphere",
    size: 46,
    style: { top: "38%", right: "5%" },
    depth: 0.14,
  },
  {
    cls: "shape-ring",
    size: 74,
    style: { top: "80%", left: "24%" },
    depth: 0.12,
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className="hero-shape-wrap"
          data-depth={s.depth}
          style={s.style}
          aria-hidden="true"
        >
          <div
            className={`hero-shape ${s.cls}`}
            style={{
              width: s.size,
              height: s.size * (s.ratio ?? 1),
              rotate: s.rotate ? `${s.rotate}deg` : undefined,
            }}
          />
        </div>
      ))}

      <div className="hero-eyebrow mono-label">
        Web Developer — Indie App Builder
      </div>
      <h1 className="hero-title">
        <SplitChars text="SHUBERT" className="chrome-text" />
      </h1>
      <p className="hero-lead-ja hero-lead">アイデアを、カタチに。</p>
      <p className="hero-lead-sub hero-lead">
        元専門学校講師のWebデベロッパー。ご要望のヒアリングから設計・実装・公開まで、
        ひとつひとつ丁寧に。Web制作から個人開発アプリまで対応します。
      </p>
      <div className="hero-cta-row hero-lead">
        <a href="#works" className="hero-cta" data-magnetic>
          制作物を見る
        </a>
        <a href="#contact" className="hero-cta is-ghost" data-magnetic>
          相談する
        </a>
      </div>

      <div className="hero-scroll mono-label">
        Scroll
        <span />
      </div>
    </section>
  );
}
