import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { socialLinks } from "../../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="content-section contact-section-clean">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Have a project in mind?</h2>
        <p>Let&apos;s build something useful.</p>
      </div>
      <div className="contact-link-grid">
        <a href={socialLinks.email}>
          <FaEnvelope aria-hidden="true" />
          Start a conversation
        </a>
        <a href={socialLinks.github} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin aria-hidden="true" />
          LinkedIn
        </a>
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
          <FaFacebook aria-hidden="true" />
          Facebook
        </a>
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
