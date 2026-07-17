// テキストを1文字ずつ<span>に分割してレンダリングする。
// GSAPのSplitTextプラグインを使わずにSSG時点で分割しておくことで、
// ハイドレーション時のチラつきなしに文字単位アニメーションを可能にする。
export default function SplitChars({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={className}>
        {text.split(" ").map((word, wi, arr) => (
          <span key={wi}>
            <span className="split-word">
              {[...word].map((ch, ci) => (
                <span className="split-char" key={ci}>
                  {ch}
                </span>
              ))}
            </span>
            {wi < arr.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </>
  );
}
