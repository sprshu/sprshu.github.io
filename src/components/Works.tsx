import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FeaturedPokerMemo from "./FeaturedPokerMemo";
import WorkCard from "./WorkCard";
import { WEB_WORKS, APP_WORKS } from "@/data/works";

export default function Works() {
  return (
    <Section id="works" ghost="Works">
      <div className="wrap">
        <SectionHeader title="Works" subtitle="制作実績" />

        <FeaturedPokerMemo />

        <div className="work-grid">
          {[...WEB_WORKS, ...APP_WORKS].map((work) => (
            <WorkCard key={work.title} work={work} />
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
    </Section>
  );
}
