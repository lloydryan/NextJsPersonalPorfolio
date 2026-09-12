import Image from "next/image";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { portfolioStats } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="hero-section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">Build / Design / Solve</p>
          <h1>Lloyd Ryan Largo</h1>
          <h2>Full Stack Developer &amp; UI/UX Designer</h2>
          <p>
            I build web and mobile applications across frontend, backend, and
            interface design. I am also a College Instructor at the University
            of Mindanao.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              View Projects
              <FaArrowRight aria-hidden="true" />
            </a>
            <a className="button button-light" href="#contact">
              Contact Me
            </a>
          </div>

          <dl className="hero-stats" aria-label="Portfolio highlights">
            {portfolioStats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="hero-portrait" aria-label="Profile information">
          <div className="portrait-frame">
            <Image
              src="/images/profile.jpg"
              alt="Portrait of Lloyd Ryan Largo"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 36vw"
            />
          </div>
          <p className="editorial-note">Good ideas build better tomorrows.</p>
          <div className="location-card">
            <FaLocationDot aria-hidden="true" />
            <div>
              <span>Based in the Philippines</span>
              <strong>College Instructor at the University of Mindanao</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
