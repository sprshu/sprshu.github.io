import SplitChars from "./SplitChars";
import { asset } from "@/lib/base";

const CARDS = [
  {
    media: "media-buildc",
    mediaEyebrow: "$ build-c --init",
    mediaEyebrowColor: "#7dd3fc",
    mediaTitle: "第3のプレーヤーとして、\n未来を構築する。",
    mediaTitleColor: "#fff",
    index: "02",
    category: "コーポレートサイト / 実案件",
    title: "Build-C",
    desc: "テクノロジー・イノベーション企業のコーポレートサイト。ターミナル調の未来的なデザインで、ブランドの世界観と「構築する」という姿勢を表現。",
    stack: "WordPress · PHP",
    href: "https://build-c.com/",
    linkLabel: "サイトを見る →",
  },
  {
    media: "media-sakura",
    mediaEyebrow: "RESTAURANT",
    mediaEyebrowColor: "rgba(245,238,225,0.65)",
    mediaTitle: "桜 Sakura Bistro",
    mediaTitleColor: "#f5eede",
    index: "03",
    category: "飲食店サイト",
    title: "Sakura Bistro",
    desc: "「和」を基調にしたレストランサイト。落ち着いた配色と余白で、料理の世界観と空気感を伝えるデザイン。",
    stack: "HTML · CSS · JavaScript",
    href: "https://github.com/sprshu/portfolio-restaurant-sakura-bistro",
    linkLabel: "GitHub →",
  },
  {
    media: "media-techside",
    mediaEyebrow: "TECHSIDE ACADEMY",
    mediaEyebrowColor: "#7dd3fc",
    mediaTitle: "未経験から、\nエンジニアへ。",
    mediaTitleColor: "#fff",
    index: "04",
    category: "ランディングページ",
    title: "TechSide Academy",
    desc: "プログラミングスクールのLP。訴求の流れとCTA導線を意識し、申し込みまでを自然に促す構成に。",
    stack: "HTML · CSS · JavaScript",
    href: "https://github.com/sprshu/portfolio-lp-techside-academy",
    linkLabel: "GitHub →",
  },
  {
    media: "media-nexalab",
    mediaEyebrow: "NEXALAB",
    mediaEyebrowColor: "#2563eb",
    mediaTitle: "テクノロジーで、\n事業の可能性を広げる。",
    mediaTitleColor: "#0f2a52",
    index: "05",
    category: "コーポレートサイト",
    title: "NexaLab",
    desc: "IT企業のコーポレートサイト。信頼感のあるレイアウトと整理された情報設計を重視したデザイン。",
    stack: "HTML · CSS · JavaScript",
    href: "https://github.com/sprshu/portfolio-corporate-nexalab",
    linkLabel: "GitHub →",
  },
];

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="ghost-word" data-ghost aria-hidden="true">
        Works
      </div>
      <div className="wrap">
        <div className="section-head">
          <h2 className="section-title" data-split-heading>
            <SplitChars text="Works" />
          </h2>
          <span className="section-title-ja mono-label">制作実績</span>
        </div>

        {/* Featured: PokerMemoDB */}
        <a
          className="work-featured"
          data-reveal
          href="https://apps.apple.com/jp/app/pokermemodb/id6784554500"
          target="_blank"
          rel="noopener"
        >
          <div className="work-featured-body">
            <span className="mono-label">01 — iOS App / 個人開発</span>
            <div className="work-featured-title-row">
              <h3 className="work-featured-title">Poker Memo DB</h3>
              <span className="work-live-pill">
                <i />
                App Store公開中
              </span>
            </div>
            <p>
              ポーカーのハンド・収支を記録するiOSアプリ。アクションを入力するだけで損益と勝敗を自動算出し、セッションカレンダーと累積損益グラフで成長を振り返れます。設計から実装、App
              Store申請・公開までを個人で完遂した第1作（2026年7月リリース）。
            </p>
            <div className="work-tag-row">
              {[
                "損益・勝敗の自動計算",
                "セッションカレンダー",
                "累積損益グラフ",
                "ハンドのシェア画像",
              ].map((t) => (
                <span key={t} className="work-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="work-featured-foot">
              <span className="work-stack" style={{ color: "#9a9aa2" }}>
                React Native · Expo · TypeScript · Supabase
              </span>
              <span className="work-arrow" style={{ color: "#fafafa" }}>
                App Storeで見る →
              </span>
            </div>
          </div>
          <div className="work-featured-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="featured-shot"
              src={asset("/pokermemodb-stats.png")}
              alt="Poker Memo DB 統計画面（累積損益グラフ）のスクリーンショット"
            />
          </div>
        </a>

        <div className="work-grid">
          {CARDS.map((c) => (
            <a
              key={c.title}
              className="work-card"
              data-reveal
              href={c.href}
              target="_blank"
              rel="noopener"
            >
              <div className={`work-media ${c.media}`}>
                <span
                  className="work-media-eyebrow"
                  style={{ color: c.mediaEyebrowColor }}
                >
                  {c.mediaEyebrow}
                </span>
                <span
                  className="work-media-title"
                  style={{ color: c.mediaTitleColor, whiteSpace: "pre-line" }}
                >
                  {c.mediaTitle}
                </span>
              </div>
              <div className="work-body">
                <div className="work-meta">
                  <span className="mono-label">
                    {c.index} — {c.category}
                  </span>
                </div>
                <h3 className="work-title">{c.title}</h3>
                <p className="work-desc">{c.desc}</p>
                <div className="work-foot">
                  <span className="work-stack">{c.stack}</span>
                  <span className="work-arrow">{c.linkLabel}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="concept-panel" data-reveal>
          <h3>
            個人向け AI データベース
            <span className="concept-badge">構想中</span>
          </h3>
          <p>
            健康・学習・仕事・家族・趣味などの情報を一元管理し、AIが活用できるパーソナルデータベース構想。AI時代の個人開発者として、自分自身が一番使いたいものを作ります。
          </p>
        </div>
      </div>
    </section>
  );
}
