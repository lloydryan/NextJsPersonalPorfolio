import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import {
  contactLinks,
  socialLinks,
  type ContactLinkId,
} from "../data/portfolio";

const contactIcons: Record<ContactLinkId, IconType> = {
  email: FaEnvelope,
  facebook: FaFacebook,
  github: FaGithub,
  linkedin: FaLinkedin,
};

export function Contact() {
  return (
    <section id="contact" className="content-section contact-section-clean">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Have a project in mind?</h2>
        <p>Let&apos;s build something useful.</p>
      </div>
      <div className="contact-link-grid">
        {contactLinks.map((link) => {
          const Icon = contactIcons[link.id];

          return (
            <a
              href={link.href}
              key={link.id}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <Icon aria-hidden="true" />
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Lloyd Ryan Largo</strong>
        <span>College Instructor / Full Stack Developer</span>
      </div>
      <p>Designed &amp; built with care.</p>
      <div className="footer-links">
        <a href={socialLinks.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={socialLinks.email}>Email</a>
      </div>
      <small>&copy; {new Date().getFullYear()} Lloyd Ryan Largo</small>
    </footer>
  );
}
