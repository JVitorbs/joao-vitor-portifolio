"use client";

import { FiSun } from "react-icons/fi";
import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme-mode");

    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem("theme-mode", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
      aria-label="Alternar tema claro e escuro"
    >
      <FiSun className="h-4 w-4" />
    </button>
  );
}
