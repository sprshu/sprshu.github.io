import SplitChars from "./SplitChars";
import { cx } from "@/lib/cx";

// セクション見出し（英語タイトルの文字分割リベール＋日本語サブラベル）。
export default function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cx("section-head", className)}>
      <h2 className="section-title" data-split-heading>
        <SplitChars text={title} />
      </h2>
      {subtitle && (
        <span className="section-title-ja mono-label">{subtitle}</span>
      )}
    </div>
  );
}
