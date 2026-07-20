import { asset } from "@/lib/base";

// 代表作: App Store公開済みのPokerMemoDB。トップとWorks一覧の両方で使う
export default function FeaturedPokerMemo() {
  return (
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
  );
}
