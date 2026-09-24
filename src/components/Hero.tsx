import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { portfolioStats } from "../data/portfolio";
import CursorAwarePortrait from "./CursorAwarePortrait";

export default function Hero() {
  return (
    <section id="home" className="hero-section-shell !px-0 !py-10 min-[901px]:!py-11">
      <div className="hero-grid !grid-cols-1 !gap-10 min-[901px]:!grid-cols-[minmax(0,1fr)_minmax(390px,0.82fr)] min-[1181px]:!grid-cols-[minmax(0,1.2fr)_minmax(440px,0.82fr)] min-[1181px]:!gap-16">
        <div className="hero-copy">
          <p className="section-kicker">Build / Design / Solve</p>
          <h1 className="!text-[3.15rem] min-[561px]:!text-6xl min-[1181px]:!text-[4.75rem]">
            Lloyd Ryan Largo
          </h1>
          <h2 className="!text-[1.35rem] min-[561px]:!text-[1.65rem] min-[1181px]:!text-[1.9rem]">
            Full Stack Developer &amp; UI/UX Designer
          </h2>
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

        <aside
          className="hero-portrait !grid-cols-1 min-[561px]:!grid-cols-[minmax(210px,1fr)_minmax(140px,0.7fr)] min-[1181px]:!grid-cols-[minmax(230px,1.1fr)_minmax(150px,0.72fr)]"
          aria-label="Profile information"
        >
          <CursorAwarePortrait />
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
