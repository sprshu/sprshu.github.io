import SplitChars from "./SplitChars";
import FeaturedPokerMemo from "./FeaturedPokerMemo";
import { asset } from "@/lib/base";

// トップページ用: 代表作（PokerMemoDB）＋Works一覧ページへの導線
export default function WorksTeaser() {
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

        <div className="works-cta-row" data-reveal>
          <span className="works-cta-note mono-label">
            iOSアプリ 6作品 / Web制作 4作品を掲載中
          </span>
          <a className="hero-cta" href={asset("/works/")} data-magnetic>
            全ての制作実績を見る →
          </a>
        </div>
      </div>
    </section>
  );
}
