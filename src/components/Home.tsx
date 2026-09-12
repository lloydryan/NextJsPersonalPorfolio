import AboutExperience from "./portfolio/AboutExperience";
import Certifications from "./portfolio/Certifications";
import { Contact, SiteFooter } from "./portfolio/ContactFooter";
import Hero from "./portfolio/Hero";
import Projects from "./portfolio/Projects";
import TechStack from "./portfolio/TechStack";

export default function Home() {
  return (
    <div className="portfolio-site">
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
