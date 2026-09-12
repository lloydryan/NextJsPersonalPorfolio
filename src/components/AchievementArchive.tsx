import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { achievements } from "../data/portfolio";
import { SiteFooter } from "./ContactFooter";

export default function AchievementArchive() {
  return (
    <div className="portfolio-site archive-page">
      <section className="archive-intro">
        <Link className="text-link" href="/#about">
          <FaArrowLeft aria-hidden="true" />
          Back to about
        </Link>
        <p className="section-kicker">Credentials</p>
        <h1>Achievements &amp; Certifications</h1>
        <p>
          Information Technology Specialist certifications earned between 2023
          and 2024.
        </p>
      </section>

      <section className="archive-content" aria-label="Certifications">
        <div className="credential-grid">
          {achievements.map((achievement) => (
            <article className="credential-card" key={achievement.title}>
              <div className="credential-media">
                <Image
                  src={achievement.image}
                  alt={`${achievement.title} certificate`}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div className="credential-copy">
                <time>{achievement.date}</time>
                <h2>{achievement.title}</h2>
                <p>{achievement.provider}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
