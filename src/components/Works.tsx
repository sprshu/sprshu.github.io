import SplitChars from "./SplitChars";
import FeaturedPokerMemo from "./FeaturedPokerMemo";
import { asset } from "@/lib/base";

const WEB_CARDS = [
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

// 5ジャンル同時開発したiOSアプリのMVP群（2026年7月・ローカルファースト設計）
const APP_CARDS = [
  {
    media: "media-habitkit",
    shot: "/works/habitkit.png",
    shotAlt: "HabitKit 習慣追加画面のスクリーンショット",
    index: "06",
    category: "iOS App / 習慣化",
    title: "HabitKit",
    desc: "毎日の習慣をワンタップでチェックし、ストリーク（連続日数）と週間グリッドで継続を可視化する習慣トラッカー。",
    stack: "React Native · Expo · TypeScript",
  },
  {
    media: "media-kakeipocket",
    shot: "/works/kakeipocket.png",
    shotAlt: "KakeiPocket 月別集計画面のスクリーンショット",
    index: "07",
    category: "iOS App / 家計簿",
    title: "KakeiPocket",
    desc: "支出をすばやく登録し、月合計とカテゴリ別の内訳バーで家計を一目で把握できるシンプル家計簿。金額のライブカンマ整形など入力UXにこだわり。",
    stack: "React Native · Expo · TypeScript",
  },
  {
    media: "media-flashdeck",
    shot: "/works/flashdeck.png",
    shotAlt: "FlashDeck デッキ一覧画面のスクリーンショット",
    index: "08",
    category: "iOS App / 学習",
    title: "FlashDeck",
    desc: "暗記カードのデッキを作り、フリップアニメーションと「わかった/まだ」の仕分けで一周学習できる暗記アプリ。",
    stack: "React Native · Expo · Reanimated",
  },
  {
    media: "media-soranow",
    shot: "/works/soranow.png",
    shotAlt: "SoraNow 現在地の天気と7日間予報のスクリーンショット",
    index: "09",
    category: "iOS App / 天気・API連携",
    title: "SoraNow",
    desc: "現在地の実況と7日間予報をシンプルに表示する天気アプリ。Open-Meteo APIとの連携・位置情報・オフラインキャッシュに対応。",
    stack: "React Native · Expo · Open-Meteo API",
  },
  {
    media: "media-pairpop",
    shot: "/works/pairpop.png",
    shotAlt: "PairPop 神経衰弱ゲーム画面のスクリーンショット",
    index: "10",
    category: "iOS App / ゲーム",
    title: "PairPop",
    desc: "絵文字の神経衰弱で遊べるミニゲーム。手数・タイムの計測、ベスト記録の保存、めくりアニメーションを実装。",
    stack: "React Native · Expo · Reanimated",
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

        <FeaturedPokerMemo />

        <div className="work-grid">
          {WEB_CARDS.map((c) => (
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

          {APP_CARDS.map((c) => (
            <div key={c.title} className="work-card" data-reveal>
              <div className={`work-media work-media--shot ${c.media}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="app-shot" src={asset(c.shot)} alt={c.shotAlt} />
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
                  <span className="work-mvp-pill">MVP 2026.07</span>
                </div>
              </div>
            </div>
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
