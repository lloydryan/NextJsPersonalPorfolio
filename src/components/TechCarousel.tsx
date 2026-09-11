"use client";

import { motion } from "framer-motion";
import type { Tech } from "../data/portfolio";

export type { Tech } from "../data/portfolio";
export { techStack } from "../data/portfolio";

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
