"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXmark,
} from "react-icons/fa6";
import { socialLinks } from "../data/portfolio";

const navItems = [
  { id: "home", href: "/#home", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "skills", href: "/#skills", label: "Skills" },
  {
    id: "certifications",
    href: "/#certifications",
    label: "Certificates",
  },
  { id: "contact", href: "/#contact", label: "Contact" },
];

const sectionOrder = [
  "home",
  "projects",
  "skills",
  "certifications",
  "about",
  "contact",
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(
        pathname.startsWith("/works")
          ? "projects"
          : pathname.startsWith("/achievements")
            ? "certifications"
            : "home",
      );
      return;
    }

    const sections = sectionOrder
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;
      const marker = window.scrollY + window.innerHeight * 0.3;
      let currentSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          currentSection = section.id;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      ) {
        currentSection = sections.at(-1)?.id ?? currentSection;
      }

      setActiveSection((current) =>
        current === currentSection ? current : currentSection,
      );
    };

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand-lockup" href="/#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            LR
          </span>
          <span>Lloyd Ryan Largo</span>
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <FaXmark aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel ${isOpen ? "is-open" : ""}`}
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? "is-active" : undefined}
                aria-current={
                  activeSection === item.id ? "location" : undefined
                }
                onClick={() => {
                  setActiveSection(item.id);
                  closeMenu();
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <span className="current-role">
              <span aria-hidden="true" />
              College Instructor at UM
            </span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a href={socialLinks.email} aria-label="Email">
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
