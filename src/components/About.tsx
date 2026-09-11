"use client";

import { useEffect, useState } from "react";
import ConnectWithMe from "./Connect";
import { techStack } from "./TechCarousel";

const groupedTechStack = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Flutter"],
  Backend: ["Node.js", "Python", "PHP", "Flask", "Laravel", "Java"],
  Databases: ["MongoDB", "MySQL", "Firebase"],
  "Cloud & DevOps": ["AWS", "Google Cloud"],
  "UI/UX": ["Figma", "Framer"],
  "Data Visualization": ["Chart.js"],
};

const timelineData = [
  {
    year: "Present",
    title: "College Instructor at the University of Mindanao",
    description:
      "Now serving as a College Instructor at the University of Mindanao, teaching practical computing concepts and mentoring the next generation of developers.",
  },
  {
    year: "August 2025",
    title: "Graduated",
    description:
      "Successfully graduated from the University of Mindanao, completing my degree and solidifying my foundation in computer science.",
  },
  {
    year: "2022-2024",
    title: "Freelance Programmer",
    description:
      "Worked as a freelance programmer, building projects and gaining real-world experience in web development and software solutions.",
  },
  {
    year: "2021",
    title: "Started Coding Journey",
    description:
      "Began my coding journey upon enrolling at the University of Mindanao, discovering my passion for programming and web development.",
  },
];

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container text-center p-5">
      <br />
      <h1 className="text-3xl font-bold mt-5">About Me</h1>
      <h1 className="text-center">{"Hi, I'm Lloyd Ryan Largo"}</h1>
      <h3 className="text-center">
        A College Instructor at the University of Mindanao and passionate Web
        Developer from the Philippines
      </h3>

      <div className="timeline-section">
        <h3 className="timeline-title">My Journey</h3>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h4>{item.title}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-left mt-5">Languages and Tools:</h3>
      <div className="tech-grid">
        {Object.entries(groupedTechStack).map(
          ([category, techNames], index) => {
            let delay;

            switch (index) {
              case 0:
                delay = 100;
                break;
              case 1:
                delay = 250;
                break;
              case 2:
                delay = 450;
                break;
              case 3:
                delay = 100;
                break;
              case 4:
                delay = 250;
                break;
              case 5:
                delay = 450;
                break;
              default:
                delay = index * 200;
            }

            return (
              <div
                key={category}
                className="tech-card"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay={isSmallScreen ? 0 : delay}
              >
                <h4 className="tech-category">{category}</h4>
                <div className="tech-icons">
                  {techStack
                    .filter((tech) => techNames.includes(tech.name))
                    .map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.src}
                        alt={tech.name}
                        className="tech-icon"
                      />
                    ))}
                </div>
              </div>
            );
          }
        )}
      </div>

      <br />
      <br />
      <ConnectWithMe />
    </div>
  );
};

export default About;
