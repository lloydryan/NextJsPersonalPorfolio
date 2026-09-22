"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { experience } from "../data/portfolio";

const cardPositions = ["left", "center", "right"] as const;
const cardCenters = [0.2, 0.5, 0.8];
const cardBaseX = [-35, 0, 35];
const cardBaseY = [18, -8, 18];
const cardBaseRotate = [-8, 0, 8];
const aboutCollage = "/images/about-collage.png";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const mix = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;

const smooth = (value: number) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

const getCardLayout = (cardIndex: number, cardCount: number) => {
  if (cardCount === 1) {
    return {
      position: "center",
      center: 0.5,
      baseX: 0,
      baseY: -8,
      baseRotate: 0,
      baseZ: 2,
    };
  }

  if (cardCount === 2) {
    const twoCardLayout = [
      { position: "left", center: 0.34, baseX: -24, baseY: 10, baseRotate: -6 },
      { position: "right", center: 0.66, baseX: 24, baseY: 10, baseRotate: 6 },
    ] as const;

    return { ...twoCardLayout[cardIndex], baseZ: 1 };
  }

  return {
    position: cardPositions[cardIndex],
    center: cardCenters[cardIndex],
    baseX: cardBaseX[cardIndex],
    baseY: cardBaseY[cardIndex],
    baseRotate: cardBaseRotate[cardIndex],
    baseZ: cardIndex === 1 ? 2 : 1,
  };
};

export default function AboutExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateProgress = () => {
      frame = 0;

      if (motionQuery.matches || !sectionRef.current) {
        setProgress(0);
        return;
      }

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(
        section.offsetHeight - window.innerHeight,
        1,
      );

      setProgress(clamp(-rect.top / scrollableDistance));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    motionQuery.addEventListener("change", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      motionQuery.removeEventListener("change", requestUpdate);
    };
  }, []);

  const steps = useMemo(() => experience.length, []);
  const introEnd = 0.2;
  const storyStart = 0.15;
  const copyExit = smooth(progress / introEnd);
  const storyProgress = clamp((progress - storyStart) / (1 - storyStart));
  const chapterProgress = storyProgress * steps;

  return (
    <section
      id="about"
      className="content-section about-section about-story"
      ref={sectionRef}
    >
      <div className="about-story-sticky">
        <div
          className="about-copy"
          style={
            {
              "--about-copy-x": `${mix(0, -128, copyExit)}%`,
              "--about-copy-opacity": mix(1, 0, copyExit),
            } as CSSProperties
          }
        >
          <p className="section-kicker">About</p>
          <h2>Developer, designer, and College Instructor at UM.</h2>
          <p>
            I am Lloyd Ryan Largo, a College Instructor at the University of
            Mindanao and a web developer from the Philippines. My portfolio spans
            web applications, mobile development, and interface design.
          </p>
          <p>
            I work with frontend and backend technologies and bring the same
            interest in clear structure to both development and UI/UX design.
          </p>
        </div>

        <div
          className="about-collage"
          style={
            {
              "--about-collage-opacity": 1 - copyExit,
              "--about-collage-x": `${mix(0, -96, copyExit)}%`,
              "--about-collage-scale": mix(1, 0.94, copyExit),
              "--about-collage-y": `${mix(0, -12, copyExit)}px`,
            } as CSSProperties
          }
        >
          <Image
            src={aboutCollage}
            alt="Personal developer and instructor collage"
            fill
            priority
            quality={100}
            sizes="(max-width: 900px) 90vw, 52vw"
          />
        </div>

        <p className="section-kicker about-story-kicker">Experience</p>

        <div className="experience-list" aria-label="Experience timeline">
          {experience.map((item, index) => {
            const isLast = index === steps - 1;
            const rawStep = chapterProgress - index;
            const forward = smooth(rawStep / 0.18);
            const settle = smooth((rawStep - 0.08) / 0.22);
            const leaving = isLast ? 0 : smooth((rawStep - 0.9) / 0.1);
            const before = clamp(rawStep / 0.16);
            const activeOpacity = before * (1 - leaving);
            const liftY = mix(34, 0, forward) + mix(0, -22, leaving);
            const scale = mix(mix(0.9, 1.06, forward), 1, settle);

            return (
              <article
                key={`${item.period}-${item.title}`}
                className="experience-story-card"
                style={
                  {
                    "--experience-x": `${mix(16, 0, settle)}%`,
                    "--experience-y": `${liftY}px`,
                    "--experience-scale": scale,
                    "--experience-opacity": activeOpacity,
                    "--experience-blur": `${mix(8, 0, forward)}px`,
                  } as CSSProperties
                }
              >
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.organization}</span>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="about-visual-stack" aria-hidden="true">
          {experience.map((item, index) => {
            const isLast = index === steps - 1;
            const rawStep = chapterProgress - index;
            const enter = smooth((rawStep - 0.1) / 0.18);
            const exit = isLast ? 0 : smooth((rawStep - 0.9) / 0.1);
            const opacity = enter * (1 - exit);
            const cardProgress = clamp((rawStep - 0.16) / 0.68);
            const highlightReady = smooth((rawStep - 0.16) / 0.08);

            return (
              <div
                className="about-visual-frame"
                key={`${item.period}-${item.title}-visual`}
                style={
                  {
                    "--visual-x": `${mix(34, 0, enter) + mix(0, -12, exit)}%`,
                    "--visual-y": `${mix(24, 0, enter) + mix(0, -16, exit)}px`,
                    "--visual-scale": mix(0.96, 1, enter),
                    "--visual-opacity": opacity,
                  } as CSSProperties
                }
              >
                <div className="about-card-fan">
                  {item.images.map((image, cardIndex) => {
                    const layout = getCardLayout(cardIndex, item.images.length);
                    const peak =
                      highlightReady *
                      smooth(
                        1 -
                          Math.abs(cardProgress - layout.center) / 0.18,
                      );

                    return (
                      <div
                        className={`about-image-card about-image-card-${layout.position}`}
                        key={`${item.period}-${image}-${cardIndex}`}
                        style={
                          {
                            "--card-x": `${layout.baseX + mix(0, -layout.baseX * 0.06, peak)}%`,
                            "--card-y": `${layout.baseY + mix(0, -20, peak)}px`,
                            "--card-rotate": `${mix(layout.baseRotate, layout.baseRotate * 0.5, peak)}deg`,
                            "--card-scale": mix(1, 1.08, peak),
                            "--card-opacity": 1,
                            "--card-brightness": mix(1, 1.06, peak),
                            "--card-depth": `${mix(0, 64, peak)}px`,
                            "--card-z": Math.round(layout.baseZ + peak * 20),
                          } as CSSProperties
                        }
                      >
                        <Image
                          src={image}
                          alt=""
                          fill
                          sizes="(max-width: 900px) 42vw, 18vw"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="about-story-progress" aria-hidden="true">
          {String(
            Math.min(Math.floor(chapterProgress) + 1, steps),
          ).padStart(2, "0")}
          <span>/ {String(steps).padStart(2, "0")}</span>
        </p>
      </div>
    </section>
  );
}
