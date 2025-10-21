import React from "react";
import { useAppContext } from "../utils/AppContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useAppContext();
  return (
    <button className="lang-switch" onClick={toggleLanguage} aria-label="Switch language">
      {language === "en" ? "EN" : "TN"}
    </button>
  );
}
