export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
}

export interface Achievement {
  title: string;
  provider: string;
  date: string;
  image: string;
}

export interface Tech {
  name: string;
  src: string;
}

export type ContactLinkId = "email" | "facebook" | "github" | "linkedin";

export interface ContactLink {
  id: ContactLinkId;
  label: string;
  href: string;
  external: boolean;
}

export const navItems = [
  { id: "home", href: "/#home", label: "Home" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "skills", href: "/#skills", label: "Skills" },
  {
    id: "certifications",
    href: "/#certifications",
    label: "Certificates",
  },
  { id: "about", href: "/#about", label: "About" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export const sectionIds = navItems.map((item) => item.id);

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    image: "/images/project1.png",
    description:
      "An e-commerce platform with a clean product browsing flow and a seamless UI/UX experience.",
    tags: ["E-commerce", "UI/UX"],
    featured: true,
  },
  {
    id: "movie-searcher-chat-app",
    title: "Movie Searcher & Chat App",
    image: "/images/project2.png",
    description:
      "A web movie searcher and real-time chat application using WebSockets and Node.js.",
    tags: ["Node.js", "WebSockets"],
    featured: true,
  },
  {
    id: "swap-ta-ga",
    title: "Swap Ta Ga",
    image: "/images/project-swap-ta-ga.png",
    description:
      "A live web application for item swapping and community exchange.",
    tags: ["Web app", "Marketplace"],
    liveUrl: "https://swap-ta-ga.onrender.com/",
    featured: true,
  },
  {
    id: "bh-management-system",
    title: "BH Management System",
    image: "/images/project-boardhaus.png",
    description:
      "A live management system built to organize boarding house operations and records.",
    tags: ["Management system", "Web app"],
    liveUrl: "https://bh-managementsystem.vercel.app/",
    featured: true,
  },
  {
    id: "cms-system",
    title: "Project 3",
    image: "/images/project3.png",
    description: "A CMS system for content management with rich text editing.",
    tags: ["CMS", "Rich text editing"],
  },
  {
    id: "kiosk-mode-web-app-launcher",
    title: "Kiosk Mode Web App Launcher",
    image: "/images/project4.png",
    description:
      "A kiosk mode application that launches a web app link in forced full-screen mode, making the web app feel like a native desktop application.",
    tags: ["Kiosk mode", "Web app launcher"],
  },
  {
    id: "company-web-design",
    title: "Web Design for a Company",
    image: "/images/project5.png",
    description:
      "A web design concept focused on minimalism for a corporate client.",
    tags: ["Web design", "Minimalism"],
  },
  {
    id: "safetrack",
    title: "SafeTrack",
    image: "/images/project6.png",
    description: "A mobile application built using Flutter for real-time tracking.",
    tags: ["Flutter", "Real-time tracking"],
    featured: true,
  },
];

export const achievements: Achievement[] = [
  {
    title: "Cybersecurity",
    provider: "Information Technology Specialist",
    date: "December 18, 2024",
    image: "/images/cert/image (1).png",
  },
  {
    title: "Network Security",
    provider: "Information Technology Specialist",
    date: "July 15, 2024",
    image: "/images/cert/image (2).png",
  },
  {
    title: "Networking",
    provider: "Information Technology Specialist",
    date: "October 7, 2023",
    image: "/images/cert/image (3).png",
  },
  {
    title: "HTML and CSS",
    provider: "Information Technology Specialist",
    date: "May 19, 2023",
    image: "/images/cert/image (4).png",
  },
  {
    title: "Databases",
    provider: "Information Technology Specialist",
    date: "March 15, 2023",
    image: "/images/cert/image (5).png",
  },
];

export const experience = [
  {
    period: "Present",
    title: "College Instructor",
    organization: "University of Mindanao",
    description:
      "Currently serving as a College Instructor at the University of Mindanao.",
  },
  {
    period: "August 2025",
    title: "Graduated",
    organization: "University of Mindanao",
    description:
      "Completed my degree and strengthened my foundation in computer science and software development.",
  },
  {
    period: "2022-2024",
    title: "Freelance Programmer",
    organization: "Independent work",
    description:
      "Built projects and gained real-world experience in web development and software solutions.",
  },
  {
    period: "2021",
    title: "Started Coding Journey",
    organization: "University of Mindanao",
    description:
      "Began learning programming after enrolling at the University of Mindanao.",
  },
];

export const portfolioStats = [
  { value: "2021", label: "Started coding" },
  { value: "100+", label: "Projects delivered" },
  { value: "5", label: "Main certs" },
];

export const highlightedTech = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Flutter",
  "Firebase",
  "PHP",
  "Laravel",
  "MongoDB",
  "MySQL",
  "AWS",
  "Figma",
];

export const socialLinks = {
  email: "mailto:largolloydryan0@gmail.com",
  github: "https://github.com/lloydryan",
  linkedin: "https://www.linkedin.com/in/lloyd-ryan-largo-295683356/",
  facebook: "https://www.facebook.com/lloydryan.largo.7",
};

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Start a conversation",
    href: socialLinks.email,
    external: false,
  },
  { id: "github", label: "GitHub", href: socialLinks.github, external: true },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: socialLinks.linkedin,
    external: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: socialLinks.facebook,
    external: true,
  },
];

export const techStack: Tech[] = [
  {
    name: "AWS",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  { name: "Chart.js", src: "https://www.chartjs.org/media/logo-title.svg" },
  {
    name: "CSS3",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "Dart",
    src: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },
  {
    name: "Figma",
    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    name: "Firebase",
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  { name: "Flask", src: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
  {
    name: "Flutter",
    src: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  },
  {
    name: "Framer",
    src: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
  {
    name: "Google Cloud",
    src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
  {
    name: "HTML5",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "Java",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "Laravel",
    src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  {
    name: "MongoDB",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "MySQL",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Node.js",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "PHP",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  },
  {
    name: "Python",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  { name: "React Native", src: "https://reactnative.dev/img/header_logo.svg" },
  {
    name: "TypeScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
];
