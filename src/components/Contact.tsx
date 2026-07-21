import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { LINKS } from "@/lib/links";

export default function Contact() {
  return (
    <Section id="contact" ghost="Contact" className="contact">
      <div className="wrap">
        <SectionHeader title="Contact" className="section-head--center" />
        <p className="contact-lead" data-reveal>
          お仕事のご相談、お気軽にどうぞ。
        </p>
        <a
          className="contact-cta"
          data-reveal
          data-magnetic
          href={LINKS.x}
          target="_blank"
          rel="noopener"
        >
          Let&apos;s Talk
          <small>via X DM</small>
        </a>
        <div className="contact-links" data-reveal>
          <a
            className="contact-link"
            href={LINKS.github}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            className="contact-link"
            href={LINKS.x}
            target="_blank"
            rel="noopener"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </Section>
  );
}
