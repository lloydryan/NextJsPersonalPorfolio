import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { projects } from "../../data/portfolio";
import { SiteFooter } from "./ContactFooter";
import { ProjectCard } from "./Projects";

export default function ProjectArchive() {
  return (
    <div className="portfolio-site archive-page">
      <section className="archive-intro">
        <Link className="text-link" href="/#projects">
          <FaArrowLeft aria-hidden="true" />
          Back to selected work
        </Link>
        <p className="section-kicker">Project Archive</p>
        <h1>All Projects</h1>
        <p>
          A complete collection of the web, mobile, and interface projects
          currently represented in my portfolio.
        </p>
      </section>

      <section className="archive-content" aria-label="All projects">
        <div className="project-grid project-grid-archive">
          {projects.map((project) => (
            <ProjectCard project={project} linked={false} key={project.id} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
