// Works（制作実績）の内容の唯一の正。トップ（WorksTeaser）とWorks一覧ページの両方が参照する。
// 代表作 PokerMemoDB は専用マークアップのため FeaturedPokerMemo コンポーネント側で扱う。

type WorkBase = {
  media: string; // 背景グラデーション用のCSSクラス（media-* ）
  index: string; // 通し番号ラベル
  category: string; // カテゴリ表記
  title: string; // カード見出し
  desc: string; // 説明文
  stack: string; // 技術スタック表記
};

// グラデーションバナー＋外部リンクを持つWeb制作カード
export type WebWork = WorkBase & {
  kind: "web";
  mediaEyebrow: string;
  mediaEyebrowColor: string;
  mediaTitle: string;
  mediaTitleColor: string;
  href: string;
  linkLabel: string;
};

// スクリーンショット＋MVPバッジを持つアプリカード（外部リンクなし）
export type AppWork = WorkBase & {
  kind: "app";
  shot: string; // public/ 配下のスクショパス
  shotAlt: string;
};

export type Work = WebWork | AppWork;

export const WEB_WORKS: WebWork[] = [
  {
    kind: "web",
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
    kind: "web",
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
    kind: "web",
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
    kind: "web",
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
export const APP_WORKS: AppWork[] = [
  {
    kind: "app",
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
    kind: "app",
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
    kind: "app",
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
    kind: "app",
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
    kind: "app",
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

// アプリカードのバッジ表記（今バッチは全てMVP・2026年7月）
export const APP_BADGE = "MVP 2026.07";

// 掲載件数（トップの導線コピーに使う）。代表作 PokerMemoDB を iOS 1件として加算する。
export const IOS_WORK_COUNT = 1 + APP_WORKS.length;
export const WEB_WORK_COUNT = WEB_WORKS.length;
