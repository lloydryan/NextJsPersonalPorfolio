"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";

const lightThemeVars: Record<string, string> = {
  "--color-bg": "#f2efe7",
  "--color-bg-elevated": "#ffffff",
  "--color-text": "#1f2933",
  "--color-accent": "#006a71",
  "--color-border": "rgba(0, 0, 0, 0.08)",
  "--shadow-soft": "0 10px 30px rgba(15, 23, 42, 0.08)",
};

const darkThemeVars: Record<string, string> = {
  "--color-bg": "#050816",
  "--color-bg-elevated": "#0b1020",
  "--color-text": "#e5e7eb",
  "--color-accent": "#38bdf8",
  "--color-border": "rgba(148, 163, 184, 0.3)",
  "--shadow-soft": "0 18px 45px rgba(15, 23, 42, 0.7)",
};

const applyTheme = (theme: Theme) => {
  const vars = theme === "light" ? lightThemeVars : darkThemeVars;
  const body = document.body;

  Object.entries(vars).forEach(([key, value]) => {
    body.style.setProperty(key, value);
  });

  body.dataset.theme = theme;
};

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("preferred-theme", nextTheme);
  };

  useEffect(() => {
    setShow(true);

    const stored = window.localStorage.getItem(
      "preferred-theme"
    ) as Theme | null;

    let initialTheme: Theme = "light";

    if (stored === "light" || stored === "dark") {
      initialTheme = stored;
    } else if (window.matchMedia) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      initialTheme = prefersDark ? "dark" : "light";
    }

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const linkClassName = (href: string) =>
    `nav-link${pathname === href ? " active" : ""}`;

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm p-3 fixed-top ${
        show ? "show-navbar" : ""
      }`}
    >
      <div className="container d-flex align-items-center justify-content-between position-relative">
        {/* Logo */}
        <Link className="navbar-brand text-xl font-bold" href="/">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
        </Link>

        {/* Navbar items */}
        <div
          className={`collapse navbar-collapse position-relative ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav position-absolute start-50 translate-middle-x align-items-center gap-1">
            <li className="nav-item">
              <Link className={linkClassName("/")} href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={linkClassName("/about")}
                href="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={linkClassName("/works")}
                href="/works"
                onClick={closeMenu}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={linkClassName("/achievements")}
                href="/achievements"
                onClick={closeMenu}
              >
                Achievements
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: Theme toggle & mobile toggler */}
        <div className="d-flex align-items-center gap-2">
          {/* Desktop toggle */}
          <div className="d-none d-lg-flex align-items-center">
            <button
              type="button"
              className={`theme-toggle-btn ${
                theme === "dark" ? "theme-toggle-btn-dark" : ""
              }`}
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Activate dark mode"
                  : "Activate light mode"
              }
            >
              <span
                className={`theme-icon ${theme === "light" ? "sun" : "moon"}`}
              />
            </button>
          </div>

          {/* Mobile toggler + theme toggle */}
          <div className="d-lg-none d-flex align-items-center gap-2">
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggle}
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              type="button"
              className={`theme-toggle-btn ${
                theme === "dark" ? "theme-toggle-btn-dark" : ""
              }`}
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Activate dark mode"
                  : "Activate light mode"
              }
            >
              <span
                className={`theme-icon ${theme === "light" ? "sun" : "moon"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
