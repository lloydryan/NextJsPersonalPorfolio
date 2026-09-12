import AboutExperience from "./AboutExperience";
import Certifications from "./Certifications";
import { Contact, SiteFooter } from "./ContactFooter";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStack from "./TechStack";

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
