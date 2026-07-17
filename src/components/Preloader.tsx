// %カウンター＋プログレスリング。アニメーション本体はFXRootが駆動する。
// JS無効環境ではCSS（html:not(.js)）で非表示になる。
export default function Preloader() {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="preloader-inner" id="preloader-inner">
        <svg viewBox="0 0 132 132" width="132" height="132">
          <circle className="preloader-ring-bg" cx="66" cy="66" r="54" />
          <circle
            className="preloader-ring-fg"
            id="preloader-ring-fg"
            cx="66"
            cy="66"
            r="54"
          />
        </svg>
        <span className="preloader-count" id="preloader-count">
          000
        </span>
      </div>
      <div className="preloader-caption mono-label">
        SHUBERT — PORTFOLIO
      </div>
    </div>
  );
}
