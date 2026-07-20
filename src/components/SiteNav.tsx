import { asset } from "@/lib/base";

export default function SiteNav({ onSubPage = false }: { onSubPage?: boolean }) {
  // サブページではトップのセクションへ戻るため "/#..." 形式にする
  const anchor = (hash: string) => (onSubPage ? asset(`/${hash}`) : hash);

  return (
    <nav className="site-nav" aria-label="サイト内ナビゲーション">
      <a href={onSubPage ? asset("/") : "#top"} className="site-nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/logo-mark.png")} alt="" />
        shubert
      </a>
      <div className="site-nav-links">
        <a href={asset("/works/")} className="site-nav-link">
          Works
        </a>
        <a href={anchor("#about")} className="site-nav-link">
          About
        </a>
        <a href={anchor("#skills")} className="site-nav-link">
          Skills
        </a>
      </div>
      <a href={anchor("#contact")} className="site-nav-cta">
        Contact
      </a>
    </nav>
  );
}
