import { asset } from "@/lib/base";
import { cx } from "@/lib/cx";
import { APP_BADGE, type Work } from "@/data/works";

// Work（web/app）1件をカードとして描画する。
// web は外部リンク（<a>）、app はスクショ＋MVPバッジの静的カード（<div>）。
export default function WorkCard({ work }: { work: Work }) {
  const inner = (
    <>
      <div
        className={cx(
          "work-media",
          work.kind === "app" && "work-media--shot",
          work.media
        )}
      >
        {work.kind === "web" ? (
          <>
            <span
              className="work-media-eyebrow"
              style={{ color: work.mediaEyebrowColor }}
            >
              {work.mediaEyebrow}
            </span>
            <span
              className="work-media-title"
              style={{ color: work.mediaTitleColor, whiteSpace: "pre-line" }}
            >
              {work.mediaTitle}
            </span>
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="app-shot" src={asset(work.shot)} alt={work.shotAlt} />
        )}
      </div>
      <div className="work-body">
        <div className="work-meta">
          <span className="mono-label">
            {work.index} — {work.category}
          </span>
        </div>
        <h3 className="work-title">{work.title}</h3>
        <p className="work-desc">{work.desc}</p>
        <div className="work-foot">
          <span className="work-stack">{work.stack}</span>
          {work.kind === "web" ? (
            <span className="work-arrow">{work.linkLabel}</span>
          ) : (
            <span className="work-mvp-pill">{APP_BADGE}</span>
          )}
        </div>
      </div>
    </>
  );

  if (work.kind === "web") {
    return (
      <a
        className="work-card"
        data-reveal
        href={work.href}
        target="_blank"
        rel="noopener"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="work-card" data-reveal>
      {inner}
    </div>
  );
}
