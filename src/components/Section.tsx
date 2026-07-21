import { cx } from "@/lib/cx";

// 各セクション共通の外枠。<section> と背景のゴーストワードだけを担う。
// 中身（.wrap の置き方）はセクションごとに異なるため children にそのまま委ねる
// （Skills はマーキーをフルブリードで置くなど構成が一様でないため）。
export default function Section({
  id,
  ghost,
  className,
  children,
}: {
  id: string;
  ghost: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cx("section", className)} id={id}>
      <div className="ghost-word" data-ghost aria-hidden="true">
        {ghost}
      </div>
      {children}
    </section>
  );
}
