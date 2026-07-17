import SplitChars from "./SplitChars";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="ghost-word" data-ghost aria-hidden="true">
        Contact
      </div>
      <div className="wrap">
        <div
          className="section-head"
          style={{ justifyContent: "center" }}
        >
          <h2 className="section-title" data-split-heading>
            <SplitChars text="Contact" />
          </h2>
        </div>
        <p className="contact-lead" data-reveal>
          お仕事のご相談、お気軽にどうぞ。
        </p>
        <a
          className="contact-cta"
          data-reveal
          data-magnetic
          href="https://x.com/bertWithYou"
          target="_blank"
          rel="noopener"
        >
          Let&apos;s Talk
          <small>via X DM</small>
        </a>
        <div className="contact-links" data-reveal>
          <a
            className="contact-link"
            href="https://github.com/sprshu"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            className="contact-link"
            href="https://x.com/bertWithYou"
            target="_blank"
            rel="noopener"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
}
