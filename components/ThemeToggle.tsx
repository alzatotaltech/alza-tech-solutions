"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type ThemeName = "alza-blue" | "dark-saas";
const STORAGE_KEY = "alza-theme-v55";

function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", theme === "dark-saas" ? "#05060a" : "#020a18");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeName>("alza-blue");

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark-saas" ? "dark-saas" : "alza-blue";
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
      className={`theme-toggle-v55${dark ? " is-dark" : ""}`}
      aria-label={dark ? "Switch to current ALZA Blue theme" : "Switch to Dark SaaS theme"}
      aria-pressed={dark}
      title={dark ? "Switch to ALZA Blue" : "Switch to Dark SaaS"}
      onClick={toggle}
      whileTap={{ scale: 0.96 }}
    >
      <span className="theme-toggle-icon-v55" aria-hidden="true">
        {dark ? (
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></svg>
        ) : (
          <svg viewBox="0 0 24 24"><path d="M20.4 14.1A8.4 8.4 0 0 1 9.9 3.6 8.5 8.5 0 1 0 20.4 14.1Z"/></svg>
        )}
      </span>
      <span className="theme-toggle-label-v55">{dark ? "ALZA Blue" : "Dark SaaS"}</span>
      <span className="theme-toggle-switch-v55" aria-hidden="true"><span/></span>
    </motion.button>
  );
}
