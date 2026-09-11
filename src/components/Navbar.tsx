"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXmark,
} from "react-icons/fa6";
import { socialLinks } from "../data/portfolio";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          {isOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-panel ${isOpen ? "is-open" : ""}`}
        >
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
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
