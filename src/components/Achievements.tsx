"use client";

import { useEffect, useState } from "react";

const achievementsData = [
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

const Achievements = () => {
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
    <div className="container mx-auto text-center p-5 mt-5">
      <h1 className="text-4xl font-bold text-teal-800 mt-3 mb-5">
        Achievements & Certifications
      </h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-6">
        {achievementsData.map((achievement, index) => {
          let delay;

          // Custom delay for larger screens
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
            default:
              delay = index * 200;
          }

          return (
            <div
              key={index}
              className="col"
              data-aos={isSmallScreen ? "fade-left" : "fade-up"}
              data-aos-delay={isSmallScreen ? 0 : delay} // No delay on small screens
            >
              <div className="card achievement-card">
                {/* Image Section */}
                <div className="position-relative">
                  <img
                    src={achievement.image}
                    className="card-img-top achievement-img"
                    alt={achievement.title}
                  />
                </div>

                {/* Divider */}
                <div className="achievement-divider"></div>

                {/* Text Section */}
                <div className="card-body achievement-text">
                  <h5 className="achievement-title">{achievement.title}</h5>
                  <p className="achievement-provider">
                    <strong>{achievement.provider}</strong>
                  </p>
                  <p className="achievement-date">{achievement.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
