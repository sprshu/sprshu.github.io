export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tech: string[];
  github: string;
  live: string;
  accent: string;
  gradientFrom: string;
  gradientTo: string;
  symbol: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "TechSide Academy",
    subtitle: "副業スクール LP",
    description:
      "エンジニアが副業で月10万円を目指すための特化型スクールのランディングページ。FAQアコーディオン・料金プラン比較・スクロール連動ナビゲーションを実装。",
    category: "Landing Page",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sprshu/portfolio-lp-techside-academy",
    live: "https://sprshu.github.io/portfolio-lp-techside-academy/",
    accent: "#4F8EF7",
    gradientFrom: "#0B0F1A",
    gradientTo: "#1A2E54",
    symbol: "🚀",
  },
  {
    id: "02",
    title: "NexaLab Inc.",
    subtitle: "ITスタートアップ コーポレートサイト",
    description:
      "AI・クラウド・Web開発を軸とするITスタートアップのコーポレートサイト。お問い合わせフォーム・チーム紹介・ニュースセクションを完備。",
    category: "Corporate Site",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sprshu/portfolio-corporate-nexalab",
    live: "https://sprshu.github.io/portfolio-corporate-nexalab/",
    accent: "#00B8A9",
    gradientFrom: "#0A1929",
    gradientTo: "#0A3330",
    symbol: "💼",
  },
  {
    id: "03",
    title: "SAKURA BISTRO",
    subtitle: "レストラン サイト",
    description:
      "四季の食材と日仏融合の料理をコンセプトにしたレストランサイト。ランチ/ディナーのメニュータブ切り替え・シェフ紹介・アクセス情報を掲載。",
    category: "Restaurant / WordPress",
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
    github: "https://github.com/sprshu/portfolio-restaurant-sakura-bistro",
    live: "https://sprshu.github.io/portfolio-restaurant-sakura-bistro/",
    accent: "#C9A96E",
    gradientFrom: "#1A0E08",
    gradientTo: "#3A2010",
    symbol: "🌸",
  },
];
