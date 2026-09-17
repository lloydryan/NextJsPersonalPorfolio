import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects, type Project } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

interface ProjectCardProps {
  project: Project;
  linked?: boolean;
}

export function ProjectCard({ project, linked = true }: ProjectCardProps) {
  const projectImage = (
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      fill
      sizes="(max-width: 900px) 100vw, 50vw"
    />
  );

  return (
    <article className="project-card" id={project.id}>
      {linked ? (
        <Link
          className="project-media"
          href={`/works#${project.id}`}
          aria-label={`View ${project.title} in the project archive`}
        >
          {projectImage}
        </Link>
      ) : (
        <div className="project-media">{projectImage}</div>
      )}
      <div className="project-copy">
        <div className="project-title-row">
          <div className="project-title-group">
            <h3>
              {linked ? (
                <Link href={`/works#${project.id}`}>{project.title}</Link>
              ) : (
                project.title
              )}
            </h3>
            <span className="project-title-tag">{project.tags[0]}</span>
            {linked ? (
              <FaArrowUpRightFromSquare
                className="project-title-icon"
                aria-hidden="true"
              />
            ) : null}
          </div>
        </div>
        <p>{project.description}</p>
        {project.liveUrl ? (
          <a
            className="project-live-link"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live site`}
          >
            Live site
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        ) : null}
        <ul aria-label={`${project.title} technologies and project details`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="content-section projects-section">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Selected Work"
        description="A selection of projects representing my work across web applications, mobile development, and interface design."
        action={
          <Link className="text-link" href="/works">
            View all projects
            <FaArrowRight aria-hidden="true" />
          </Link>
        }
      />
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
