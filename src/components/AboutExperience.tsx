import { experience } from "../data/portfolio";

export default function AboutExperience() {
  return (
    <section id="about" className="content-section about-section">
      <div className="about-copy">
        <p className="section-kicker">About</p>
        <h2>Developer, designer, and College Instructor at UM.</h2>
        <p>
          I am Lloyd Ryan Largo, a College Instructor at the University of
          Mindanao and a web developer from the Philippines. My portfolio spans
          web applications, mobile development, and interface design.
        </p>
        <p>
          I work with frontend and backend technologies and bring the same
          interest in clear structure to both development and UI/UX design.
        </p>
      </div>

      <div className="experience-list" aria-label="Experience timeline">
        {experience.map((item) => (
          <article key={`${item.period}-${item.title}`}>
            <time>{item.period}</time>
            <div>
              <h3>{item.title}</h3>
              <span>{item.organization}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
