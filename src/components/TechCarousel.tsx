"use client";

import { motion } from "framer-motion";

export interface Tech {
  name: string;
  src: string;
}

interface TechCarouselProps {
  techStack: Tech[];
}

const TechCarousel = ({ techStack }: TechCarouselProps) => {
  // Duplicate the array for seamless looping
  const infiniteLogos = [...techStack, ...techStack];

  return (
    <div className="carousel-container mt-5">
      <motion.div
        className="carousel-track"
        animate={{ x: ["0%", "-50%"] }} // Adjust this value as needed for seamless looping
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {infiniteLogos.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.name}
            className="carousel-item"
            onError={() => console.error(`Failed to load image: ${tech.src}`)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechCarousel;

// Optionally, export the techStack if you want to reuse it in About directly
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
