import { asset } from "@/lib/base";

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="サイト内ナビゲーション">
      <a href="#top" className="site-nav-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/logo-mark.png")} alt="" />
        shubert
      </a>
      <div className="site-nav-links">
        <a href="#works" className="site-nav-link">
          Works
        </a>
        <a href="#about" className="site-nav-link">
          About
        </a>
        <a href="#skills" className="site-nav-link">
          Skills
        </a>
      </div>
      <a href="#contact" className="site-nav-cta">
        Contact
      </a>
    </nav>
  );
}
