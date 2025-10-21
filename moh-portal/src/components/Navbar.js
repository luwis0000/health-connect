import React from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import languagePack from "../utils/language";
import { useAppContext } from "../utils/AppContext";

export default function Navbar() {
  const { language } = useAppContext();
  const t = language === "en" ? languagePack.EN : languagePack.TN;

  return (
    <header className="navbar-blue">
      <div className="nav-content">
        {/* Brand */}
        <div className="nav-left">
          <NavLink to="/" className="brand">
            <div className="brand-content">
              <div className="brand-logo">🏥</div>
              <div className="brand-text">
                <div className="brand-title">{t.siteTitle}</div>
                <div className="brand-subtitle">
                  {language === 'en' ? 'Ministry of Health' : 'Lefapha la Bophelo'}
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
          <NavLink to="/careers" className="nav-link-main">
            {t.careers}
          </NavLink>
          <NavLink to="/feedback" className="nav-link-main">
            {t.feedback}
          </NavLink>
        </nav>

        {/* Tools */}
        <div className="nav-tools">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}