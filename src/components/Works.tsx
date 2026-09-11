"use client";

import { useEffect, useState } from "react";

import TechCarousel, { techStack } from "./TechCarousel";

const works = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/images/project1.png",
    description:
      "This is an e-commerce platform with a seamless UI/UX experience.",
    gallery: ["/images/project2.png", "/images/project4.png", "/images/project3.png"],
  },
  {
    id: 2,
    title: "Movie Searcher & Chat App",
    image: "/images/project2.png",
    description:
      "A web movie searcher and a real-time chat application using WebSockets and Node.js.",
    gallery: ["/images/project1.png", "/images/project3.png", "/images/project5.png"],
  },
  {
    id: 3,
    title: "Project 3",
    image: "/images/project3.png",
    description: "A CMS system for content management with rich text editing.",
    gallery: ["/images/project1.png", "/images/project4.png", "/images/project6.png"],
  },
  {
    id: 4,
    title: "Project 4",
    image: "/images/project4.png",
    description: "A portfolio website built using React and Bootstrap.",
    gallery: ["/images/project2.png", "/images/project3.png", "/images/project5.png"],
  },
  {
    id: 5,
    title: "Web Design for a Company",
    image: "/images/project5.png",
    description:
      "A web design concept focused on minimalism for a corporate client.",
    gallery: ["/images/project1.png", "/images/project3.png", "/images/project6.png"],
  },
  {
    id: 6,
    title: "SafeTrack",
    image: "/images/project6.png",
    description:
      "A mobile application built using Flutter for real-time tracking.",
    gallery: ["/images/project2.png", "/images/project4.png", "/images/project5.png"],
  },
];

const Works = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedWork, setSelectedWork] = useState<
    (typeof works)[number] | null
  >(null);

  return (
    <div className="container text-center py-5 mt-5">
      <br />
      <h1 className="mb-4">Most Recent Projects</h1>

      {/* Grid Layout */}
      <div className="row g-3">
        {works.map((work, index) => {
          let delay;

          switch (index) {
            case 0:
              delay = 100;
              break;
            case 1:
              delay = 200;
              break;
            case 2:
              delay = 300;
              break;
            case 3:
              delay = 400;
              break;
            case 4:
              delay = 500;
              break;
            case 5:
              delay = 600;
              break;
            default:
              delay = index * 200;
          }

          return (
            <div
              key={work.id}
              className="col-12 col-sm-6 col-md-4"
              data-aos={isSmallScreen ? "fade-left" : "fade-up"}
              data-aos-delay={isSmallScreen ? 0 : delay}
            >
              <div className="work-card" onClick={() => setSelectedWork(work)}>
                <img src={work.image} alt={work.title} className="img-fluid" />
                <div className="work-title">{work.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {selectedWork && (
        <div className="modal show d-block modal-fullscreen" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">{selectedWork.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedWork(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal-grid">
                  {/* Main Image */}
                  <div className="main-image">
                    <img
                      src={selectedWork.image}
                      alt={selectedWork.title}
                      className="img-fluid"
                    />
                  </div>
                  {/* Gallery Thumbnails */}
                  {selectedWork.gallery.map((image, idx) => (
                    <div key={idx} className={`thumb thumb-${idx + 1}`}>
                      <img
                        src={image}
                        alt={`${selectedWork.title} thumbnail ${idx + 1}`}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p>{selectedWork.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {selectedWork && <div className="modal-backdrop show"></div>}

      <br />
      <br />
      <TechCarousel techStack={techStack} />
    </div>
  );
};

export default Works;
