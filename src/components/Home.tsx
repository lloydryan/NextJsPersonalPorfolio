import AboutExperience from "./AboutExperience";
import Certifications from "./Certifications";
import { Contact, SiteFooter } from "./ContactFooter";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div className="portfolio-site !w-[min(calc(100%_-_1.5rem),var(--portfolio-container))] min-[561px]:!w-[min(calc(100%_-_2rem),var(--portfolio-container))] min-[1181px]:!w-[min(calc(100%_-_2.5rem),var(--portfolio-container))]">
      <Hero />
      <Projects />
      <TechStack />
      <Certifications />
      <AboutExperience />
      <Contact />
      <SiteFooter />
    </div>
  );
}
