import React from "react";
import { useAppContext } from "../utils/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useAppContext();
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}
