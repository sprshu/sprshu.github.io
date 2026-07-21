import Section from "./Section";
import SectionHeader from "./SectionHeader";

const STRENGTHS = [
  "講師経験あり",
  "行動が速い",
  "学習速度が速い",
  "AI活用に抵抗がない",
  "新技術を試すのが好き",
  "雑談力に自信あり",
];

const COMMITMENTS = [
  {
    n: "01",
    title: "迅速なレスポンス",
    sub: "ご連絡にはできるだけ早く対応します。",
  },
  {
    n: "02",
    title: "丁寧なコミュニケーション",
    sub: "専門用語を避け、分かりやすくご説明します。",
  },
  {
    n: "03",
    title: "進捗状況の共有",
    sub: "作業の状況をこまめにご報告します。",
  },
  {
    n: "04",
    title: "納品後のサポート",
    sub: "公開して終わりではなく、その後も対応します。",
  },
];

export default function About() {
  return (
    <Section id="about" ghost="About">
      <div className="wrap">
        <SectionHeader title="About" subtitle="わたしについて" />

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p>
              現在は <b>React・Next.js・TypeScript</b>{" "}
              などのモダンなWeb技術を学びながら、Webサイト制作や個人開発に取り組んでおります。以前は専門学校にて教育に携わっていた経験があり、お客様のご要望を丁寧にヒアリングし、分かりやすくご説明することを大切にしています。
            </p>
            <div className="about-concerns">
              {[
                "何を準備したらいいか分からない",
                "ホームページが必要だけど知識がない",
                "WordPressを少しだけ修正したい",
              ].map((t) => (
                <div key={t}>
                  <span style={{ fontWeight: 700 }}>―</span>
                  {t}
                </div>
              ))}
            </div>
            <p>
              といったご相談も歓迎しております。一件一件のご依頼に真摯に向き合い、お客様に満足していただけるよう努めます。まずはお気軽にご相談ください。
            </p>
            <div className="about-strengths">
              {STRENGTHS.map((s) => (
                <span key={s} className="strength-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div data-reveal>
            <div className="mono-label" style={{ marginBottom: 14 }}>
              Commitment — 心掛けていること
            </div>
            <div className="commitments">
              {COMMITMENTS.map((c) => (
                <div key={c.n} className="commitment">
                  <span className="commitment-n">{c.n}</span>
                  <div>
                    <div className="commitment-title">{c.title}</div>
                    <div className="commitment-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
