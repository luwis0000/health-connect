import React, { useState } from "react";
import Card from "../components/Card";
import languagePack from "../utils/language";
import { announcements } from "../utils/data";
import { useAppContext } from "../utils/AppContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { language } = useAppContext();
  const t = language === "en" ? languagePack.EN : languagePack.TN;
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="page home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>{t.siteTitle}</h1>
        <p className="hero-subtitle">
          {language === 'en' 
            ? 'Ministry of Health - Botswana'
            : 'Lefapha la Bophelo - Botswana'}
        </p>
        <p className="hero-description">
          {language === 'en'
            ? 'Providing quality, affordable health services to all citizens of Botswana.'
            : 'Re fana ka tshedimosetso, ditiro, le dithusi tsa bophelo tse di tshepetsweng ko bathong botlhe ba Botswana.'}
        </p>
        <div className="hero-actions">
          <Link to="/services" className="btn primary">
            <span className="btn-icon">🏥</span>
            {language === 'en' ? 'Find Health Services' : 'Fumana Ditirelo tsa Bophelo'}
          </Link>
          <Link to="/education" className="btn secondary">
            <span className="btn-icon">📚</span>
            {language === 'en' ? 'Health Education' : 'Thuto ya Bophelo'}
          </Link>
        </div>
      </section>

      {/* QUICK ACTIONS WITH GLOSSY CARDS */}
      <section className="quick-actions">
        <h2>{language === 'en' ? "Quick Access" : "Go Fitišega ka Bonako"}</h2>
        <div className="card-container">
          <Card 
            title={language === 'en' ? "Health Facilities" : "Dibaka tsa Bophelo"}
            text={language === 'en' ? "Find hospitals and clinics nationwide" : "Fumana dibedele le dikliniki mo nageng yotlhe"}
            footer={<Link to="/services" className="btn primary">{language === 'en' ? 'Find Now' : 'Fumana Gompieno'}</Link>}
            className="card-glossy primary"
          />
          <Card 
            title={language === 'en' ? "Health Education" : "Thuto ya Bophelo"}
            text={language === 'en' ? "Learn about diseases and prevention" : "Ithute ka malwetsi le thibelo"}
            footer={<Link to="/education" className="btn secondary">{language === 'en' ? 'Learn More' : 'Ithute go Feta'}</Link>}
            className="card-glossy accent"
          />
          <Card 
            title={language === 'en' ? "Public Health Programs" : "Mananeo a Bophelo jwa Sechaba"}
            text={language === 'en' ? "National health initiatives and campaigns" : "Mananeo a sechaba a bophelo le matsela"}
            footer={<Link to="/education" className="btn secondary">{language === 'en' ? 'View Programs' : 'Bona Mananeo'}</Link>}
            className="card-glossy"
          />
          <Card 
            title={language === 'en' ? "Careers" : "Dithuto le Ditiro"}
            text={language === 'en' ? "Government jobs and opportunities" : 'Mešomo ya puso le dithušo'}
            footer={<Link to="/careers" className="btn secondary">{language === 'en' ? 'View Jobs' : 'Bona Mešomo'}</Link>}
            className="card-glossy compact"
          />
        </div>
      </section>

      {/* ANNOUNCEMENTS WITH GLOSSY CARDS */}
      <section className="announcements">
        <h2>{language === 'en' ? "Latest Updates" : "Dipotlako tša bofelo"}</h2>
        <div className="card-container">
          {announcements.map((a) => (
            <Card 
              key={a.id} 
              title={a.title} 
              text={a.summary}
              footer={
                <div className="announcement-footer">
                  <span className="announcement-date">{a.date}</span>
                  <Link to="/education" className="btn link">
                    {language === 'en' ? 'Learn more →' : 'Ithute go feta →'}
                  </Link>
                </div>
              } 
              className="card-glossy"
            />
          ))}
        </div>
      </section>

      {/* MINISTRY INFO SECTION */}
      <section className="ministry-info">
        <div className="section-header" onClick={() => toggleSection('ministry')}>
          <h2>{language === 'en' ? "About Ministry of Health" : "Ka Ga Lefapha la Bophelo"}</h2>
          <span className="expand-icon">{expandedSection === 'ministry' ? '−' : '+'}</span>
        </div>
        
        {expandedSection === 'ministry' && (
          <div className="expanded-section">
            <div className="minister-brief">
              <div className="minister-avatar">👨‍💼</div>
              <div>
                <h4>Dr. Stephen Modise</h4>
                <p>{language === 'en' ? 'Minister of Health' : 'Tona ya Bophelo'}</p>
                <small>{language === 'en' ? 'Appointed November 2024' : 'O thomilwe ka Lwetse 2024'}</small>
              </div>
            </div>
            
            <div className="ministry-mission">
              <p>{language === 'en' 
                ? 'Providing quality, affordable health services to all Batswana.'
                : 'Go naya Batho botlhe ba Botswana ditirelo tsa bophelo tsa boleng le tse di itekanetseng.'}
              </p>
            </div>

            <div className="quick-links-mini">
              <Link to="/about" className="mini-link">
                {language === 'en' ? 'Ministry Structure' : 'Thulaganyo ya Lefapha'}
              </Link>
              <Link to="/about" className="mini-link">
                {language === 'en' ? 'Contact Info' : 'Tshedimosetso ya Kgolagano'}
              </Link>
              <Link to="/about" className="mini-link">
                {language === 'en' ? 'Leadership' : 'Botleami'}
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* FACILITY HOURS */}
      <section className="facility-hours-simple">
        <Card 
          title={language === 'en' ? "Health Facility Hours" : "Diuiri tša Mafelo a Bophelo"}
          text={language === 'en' 
            ? "Hospitals: 24 hours • Clinics: 7:30-16:30 • On-call service available after hours"
            : "Dibedele: diuiri tše 24 • Dikliniki: 7:30-16:30 • Tirelo ya go bitswa e a gona ka diuiri tše dingwe"}
          className="card-glossy compact"
        />
      </section>

      {/* CHATBOT PROMPT */}
      <section className="chatbot-prompt">
        <div className="prompt-content">
          <div className="prompt-icon">🤖</div>
          <div className="prompt-text">
            <h3>{language === 'en' ? 'Need help?' : 'O tlhoka thuso?'}</h3>
            <p>{language === 'en' 
              ? 'Ask our AI assistant about health services'
              : 'Botša motsaedi wa rona wa AI ka ditirelo tsa bophelo'}
            </p>
          </div>
          <Link to="/chatbot" className="btn secondary">
            {language === 'en' ? 'Ask Now' : 'Botša Gompieno'}
          </Link>
        </div>
      </section>
    </div>
  );
}