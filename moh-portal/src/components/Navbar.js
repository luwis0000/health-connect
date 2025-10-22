import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import AccessibilityPanel from "./AccessibilityPanel";
import languagePack from "../utils/language";
import { useAppContext } from "../utils/AppContext";

export default function Navbar() {
  const { language } = useAppContext();
  const t = language === "en" ? languagePack.EN : languagePack.TN;
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  const toggleAccessibility = () => {
    setIsAccessibilityOpen(!isAccessibilityOpen);
  };

  const closeAccessibility = () => {
    setIsAccessibilityOpen(false);
  };

  return (
    <header className="navbar-blue">
      <div className="nav-content">
        {/* Brand */}
        <div className="nav-left">
          {/* Accessibility Hamburger Menu */}
          <button 
            className="accessibility-hamburger"
            onClick={toggleAccessibility}
            aria-label={language === "en" ? "Accessibility options" : "Dikgato tša go fitlhelela"}
            aria-expanded={isAccessibilityOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <NavLink to="/" className="brand">
            <div className="brand-content">
              <div className="brand-logo">
                <img
                  src="/assets/icons/Code-of-Arms-colour.png"
                  alt="Ministry of Health Logo"
                  className="logo-img"
                />
              </div>
              <div className="brand-text">
                <div className="brand-title">{t.siteTitle}</div>
                <div className="brand-subtitle">
                  {language === "en"
                    ? "Ministry of Health"
                    : "Lefapha la Bophelo"}
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Main Navigation */}
        <nav className="nav-links-main">
          <NavLink to="/" end className="nav-link-main">
            {t.home}
          </NavLink>
          <NavLink to="/about" className="nav-link-main">
            {t.about}
          </NavLink>
          <NavLink to="/services" className="nav-link-main">
            {t.services}
          </NavLink>
          <NavLink to="/education" className="nav-link-main">
            {t.education}
          </NavLink>
          <NavLink to="/analytics" className="nav-link-main">
            {language === 'en' ? 'Analytics' : 'Dianalitiki'}
          </NavLink>
          <NavLink to="/careers" className="nav-link-main">
            {t.careers}
          </NavLink>
          <NavLink to="/feedback" className="nav-link-main">
            {t.feedback}
          </NavLink>
        </nav>

        {/* Tools */}
        <div className="nav-tools">
          <NavLink to="/emergency" className="emergency-pill small">
            <span className="emergency-icon">🚨</span>
            <span>{language === "en" ? "Emergency" : "Tšhogo"}</span>
          </NavLink>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Accessibility Panel - Positioned on far left */}
      {isAccessibilityOpen && (
        <div className="accessibility-panel-left">
          <AccessibilityPanel onClose={closeAccessibility} />
        </div>
      )}
    </header>
  );
}