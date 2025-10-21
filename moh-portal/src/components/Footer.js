import React from "react";
import { Link } from "react-router-dom";
import languagePack from "../utils/language";
import { useAppContext } from "../utils/AppContext";

export default function Footer() {
  const { language } = useAppContext();
  const t = language === "en" ? languagePack.EN : languagePack.TN;

  return (
    <footer className="site-footer">
      {/* Emergency Section */}
      <div className="footer-emergency">
        <div className="emergency-content">
          <div className="emergency-info">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h3>{language === 'en' ? 'Emergency Contacts' : 'Dikgolagano tša Tšhogo'}</h3>
              <div className="emergency-numbers">
                <div className="emergency-item">
                  <span className="number-label">{language === 'en' ? 'Ambulance' : 'Ambalese'}:</span>
                  <span className="number-value">997</span>
                </div>
                <div className="emergency-item">
                  <span className="number-label">{language === 'en' ? 'Police' : 'Mapodisi'}:</span>
                  <span className="number-value">911</span>
                </div>
                <div className="emergency-item">
                  <span className="number-label">{language === 'en' ? 'Fire' : 'Mello'}:</span>
                  <span className="number-value">998</span>
                </div>
              </div>
            </div>
          </div>
          <Link to="/emergency" className="emergency-btn">
            {language === 'en' ? 'Full Emergency Info' : 'Tshedimosetso e e Tlatsetsang ya Tšhogo'}
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-section">
            <h4>{t.siteTitle}</h4>
            <p>{language === 'en' 
              ? 'Official digital health portal of the Ministry of Health, Botswana'
              : 'Lefelo la ditiro tsa bophelo la puso la Lefapha la Bophelo, Botswana'}
            </p>
          </div>

          <div className="footer-section">
            <h4>{language === 'en' ? 'Quick Links' : 'Dikgokaganyo tše di Bonolo'}</h4>
            <Link to="/services">{t.services}</Link>
            <Link to="/education">{t.education}</Link>
            <Link to="/careers">{t.careers}</Link>
            <Link to="/feedback">{t.feedback}</Link>
          </div>

          <div className="footer-section">
            <h4>{language === 'en' ? 'Contact Info' : 'Tshedimosetso ya Kgolagano'}</h4>
            <p>📞 (+267) 363-2500</p>
            <p>📍 Plot 54069, 24 Amos Street, Gaborone</p>
            <p>📧 {language === 'en' ? 'info@health.gov.bw' : 'info@health.gov.bw'}</p>
          </div>

          <div className="footer-section">
            <h4>{language === 'en' ? 'Ministry' : 'Lefapha'}</h4>
            <Link to="/about">{t.about}</Link>
            <Link to="/policy">{t.policy}</Link>
            {/* Removed LanguageSwitcher and ThemeToggle from footer */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div>&copy; {new Date().getFullYear()} {t.siteTitle}. {language === 'en' ? 'All rights reserved.' : 'Ditokelo tsotlhe di bolokilwe.'}</div>
          <div>
            <Link to="/policy">{t.policy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}