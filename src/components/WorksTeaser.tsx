import Section from "./Section";
import SectionHeader from "./SectionHeader";
import FeaturedPokerMemo from "./FeaturedPokerMemo";
import { asset } from "@/lib/base";
import { IOS_WORK_COUNT, WEB_WORK_COUNT } from "@/data/works";

// トップページ用: 代表作（PokerMemoDB）＋Works一覧ページへの導線
export default function WorksTeaser() {
  return (
    <Section id="works" ghost="Works">
      <div className="wrap">
        <SectionHeader title="Works" subtitle="制作実績" />

        <FeaturedPokerMemo />

        <div className="works-cta-row" data-reveal>
          <span className="works-cta-note mono-label">
            iOSアプリ {IOS_WORK_COUNT}作品 / Web制作 {WEB_WORK_COUNT}作品を掲載中
          </span>
          <a className="hero-cta" href={asset("/works/")} data-magnetic>
            全ての制作実績を見る →
          </a>
        </div>
      </div>
    </Section>
  );
}
