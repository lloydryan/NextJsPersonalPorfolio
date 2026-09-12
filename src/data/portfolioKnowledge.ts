import {
  achievements,
  experience,
  highlightedTech,
  portfolioStats,
  projects,
  socialLinks,
  techStack,
} from "./portfolio";

export interface KnowledgeEntry {
  id: string;
  title: string;
  category: string;
  content: string;
  keywords: string[];
}

export const ownerProfile = {
  name: "Lloyd Ryan Largo",
  role: "College Instructor at the University of Mindanao",
  location: "Davao City, Philippines",
  summary:
    "Lloyd Ryan Largo is a College Instructor at the University of Mindanao, a full stack developer, and a UI/UX designer.",
};

export const portfolioKnowledge: KnowledgeEntry[] = [
  {
    id: "profile",
    title: "Profile",
    category: "About",
    content: `${ownerProfile.summary} He is based in ${ownerProfile.location}.`,
    keywords: ["lloyd", "profile", "about", "who", "role", "location"],
  },
  {
    id: "experience",
    title: "Experience",
    category: "Experience",
    content: experience
      .map(
        (item) =>
          `${item.period}: ${item.title} at ${item.organization}. ${item.description}`
      )
      .join(" "),
    keywords: [
      "experience",
      "work",
      "job",
      "career",
      "instructor",
      "freelance",
      "graduated",
    ],
  },
  {
    id: "teaching-subjects",
    title: "Teaching Subjects",
    category: "Teaching",
    content:
      "As a College Instructor at the University of Mindanao, Lloyd teaches IoT and robotics, networking, databases, and web development.",
    keywords: [
      "teacher",
      "teaches",
      "teaching",
      "subject",
      "subjects",
      "university",
      "instructor",
      "iot",
      "robotics",
      "networking",
      "databases",
      "web",
      "development",
    ],
  },
  {
    id: "personal",
    title: "Personal Details",
    category: "Personal",
    content:
      "Lloyd's favorite color is blue. Lloyd is not single; he has a girlfriend.",
    keywords: [
      "favorite",
      "colour",
      "color",
      "blue",
      "single",
      "relationship",
      "girlfriend",
      "personal",
    ],
  },
  {
    id: "skills",
    title: "Skills and Tech Stack",
    category: "Skills",
    content: `Lloyd's highlighted technologies are ${highlightedTech.join(
      ", "
    )}. His full tech stack includes ${techStack
      .map((tech) => tech.name)
      .join(", ")}.`,
    keywords: ["skills", "tech", "stack", "tools", "programming", "language"],
  },
  {
    id: "projects",
    title: "Projects",
    category: "Projects",
    content: projects
      .map(
        (project) =>
          `${project.title}: ${project.description} Technologies or tags: ${project.tags.join(
            ", "
          )}.`
      )
      .join(" "),
    keywords: ["projects", "portfolio", "apps", "built", "work", "system"],
  },
  {
    id: "certifications",
    title: "Certifications",
    category: "Certifications",
    content: achievements
      .map(
        (achievement) =>
          `${achievement.title} certification from ${achievement.provider}, earned on ${achievement.date}.`
      )
      .join(" "),
    keywords: [
      "certificates",
      "certifications",
      "credentials",
      "achievement",
      "cybersecurity",
      "networking",
      "database",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    category: "Contact",
    content: `You can contact Lloyd by email at ${socialLinks.email.replace(
      "mailto:",
      ""
    )}. His GitHub is ${socialLinks.github}, LinkedIn is ${
      socialLinks.linkedin
    }, and Facebook is ${socialLinks.facebook}.`,
    keywords: ["contact", "email", "github", "linkedin", "facebook", "social"],
  },
  {
    id: "stats",
    title: "Portfolio Stats",
    category: "About",
    content: portfolioStats
      .map((stat) => `${stat.label}: ${stat.value}.`)
      .join(" "),
    keywords: ["stats", "numbers", "started", "coding", "count"],
  },
];
