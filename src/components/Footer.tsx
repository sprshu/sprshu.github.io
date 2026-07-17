import { asset } from "@/lib/base";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo-mark.png")} alt="" />
          shubert
        </div>
        <span className="mono-label">
          © 2026 shubert — Built with Next.js & GSAP
        </span>
      </div>
    </footer>
  );
}
