import Image from "next/image";
import { FaAward } from "react-icons/fa6";
import { achievements } from "../../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="content-section certifications-section">
      <header className="certifications-heading">
        <div>
          <p className="section-kicker">Certifications</p>
          <h2>Certificates &amp; Achievements</h2>
          <p className="certifications-intro">
            Certifications earned as part of my continued learning and
            professional development in information technology.
          </p>
        </div>

        <div className="certifications-note">
          <FaAward aria-hidden="true" />
          <p>
            These certificates represent my commitment to learning, growth,
            and professional development.
          </p>
        </div>
      </header>

      <div className="certifications-grid">
        {achievements.map((achievement) => (
          <article className="certificate-card" key={achievement.title}>
            <div className="certificate-image">
              <Image
                src={achievement.image}
                alt={`${achievement.title} certificate`}
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 20vw"
              />
            </div>
            <div className="certificate-copy">
              <h3>{achievement.title}</h3>
              <p>{achievement.provider}</p>
              <time>{achievement.date}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
