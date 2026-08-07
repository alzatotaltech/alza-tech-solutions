"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type ThemeName = "alza-blue" | "dark-saas";
const STORAGE_KEY = "alza-theme-v55";

function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", theme === "dark-saas" ? "#030407" : "#020a18");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>("alza-blue");

  useEffect(() => {
    const current: ThemeName =
      document.documentElement.dataset.theme === "dark-saas" ? "dark-saas" : "alza-blue";
    setTheme(current);
    applyTheme(current);
  }, []);

  const dark = theme === "dark-saas";
  const toggle = () => {
    const next: ThemeName = dark ? "alza-blue" : "dark-saas";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <motion.button
      type="button"
      className={`theme-toggle-v61${dark ? " is-dark" : ""}`}
      aria-label={dark ? "Switch to ALZA Blue theme" : "Switch to Dark SaaS theme"}
      aria-pressed={dark}
      title={dark ? "Switch to ALZA Blue theme" : "Switch to Dark SaaS theme"}
      onClick={toggle}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.92 }}
    >
      <svg className="theme-toggle-icon-v61" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.2 15.35A7.55 7.55 0 0 1 8.65 4.8a8.15 8.15 0 1 0 10.55 10.55Z" />
        <path d="m18.35 3.15.48 1.2 1.2.48-1.2.48-.48 1.2-.48-1.2-1.2-.48 1.2-.48.48-1.2Z" />
        <path d="m15.05 6.65.3.76.76.3-.76.3-.3.76-.3-.76-.76-.3.76-.3.3-.76Z" />
      </svg>
    </motion.button>
  );
}
