import { highlightedTech, techStack } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function TechStack() {
  const displayedTech = techStack.filter((tech) =>
    highlightedTech.includes(tech.name)
  );

  return (
    <section id="skills" className="content-section skills-section">
      <SectionHeader
        eyebrow="Tech Stack"
        title="Tools I Use"
        description="Technologies I use to build modern, scalable, and user-friendly applications."
      />
      <div className="tech-grid-clean">
        {displayedTech.map((tech) => (
          <div className="tech-item" key={tech.name}>
            <img src={tech.src} alt="" aria-hidden="true" loading="lazy" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
