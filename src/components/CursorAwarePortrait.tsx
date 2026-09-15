"use client";

import { useEffect, useRef, useState } from "react";

type PortraitDirection =
  | "center"
  | "left"
  | "right"
  | "up"
  | "down"
  | "up-left"
  | "up-right"
  | "down-left"
  | "down-right";

const portraitSources: Record<PortraitDirection, string> = {
  center: "/images/portrait-directions/center.jpg",
  left: "/images/portrait-directions/left.png",
  right: "/images/portrait-directions/right.png",
  up: "/images/portrait-directions/up.png",
  down: "/images/portrait-directions/down.png",
  "up-left": "/images/portrait-directions/up-left.png",
  "up-right": "/images/portrait-directions/up-right.png",
  "down-left": "/images/portrait-directions/down-left.png",
  "down-right": "/images/portrait-directions/down-right.png",
};

const getDirectionFromPointer = (
  pointerX: number,
  pointerY: number,
  bounds: DOMRect,
): PortraitDirection => {
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  const relativeX = (pointerX - centerX) / bounds.width;
  const relativeY = (pointerY - centerY) / bounds.height;
  const deadZone = 0.18;
  const horizontal =
    relativeX < -deadZone ? "left" : relativeX > deadZone ? "right" : "";
  const vertical =
    relativeY < -deadZone ? "up" : relativeY > deadZone ? "down" : "";

  if (vertical && horizontal) return `${vertical}-${horizontal}`;
  if (vertical) return vertical;
  if (horizontal) return horizontal;
  return "center";
};

export default function CursorAwarePortrait() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<PortraitDirection>("center");

  useEffect(() => {
    Object.values(portraitSources).forEach((source) => {
      const image = new window.Image();
      image.src = source;
    });

    const handlePointerMove = (event: PointerEvent) => {
      const portrait = portraitRef.current;
      if (!portrait) return;

      const bounds = portrait.getBoundingClientRect();

      setDirection((currentDirection) => {
        const nextDirection = getDirectionFromPointer(
          event.clientX,
          event.clientY,
          bounds,
        );

        return currentDirection === nextDirection
          ? currentDirection
          : nextDirection;
      });
    };

    const handlePointerLeave = () => setDirection("center");

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="portrait-frame cursor-aware-portrait" ref={portraitRef}>
      {(Object.keys(portraitSources) as PortraitDirection[]).map(
        (portraitDirection) => (
          <img
            className={
              portraitDirection === direction
                ? "portrait-direction-image is-active"
                : "portrait-direction-image"
            }
            key={portraitDirection}
            src={portraitSources[portraitDirection]}
            alt={
              portraitDirection === "center"
                ? "Portrait of Lloyd Ryan Largo"
                : ""
            }
            aria-hidden={portraitDirection === "center" ? undefined : true}
            decoding="sync"
            fetchPriority="high"
          />
        ),
      )}
    </div>
  );
}
