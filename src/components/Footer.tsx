import React from 'react';
import type { ContentData, Language } from '../content';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../content/businessInfo';
import { LanguageSwitcher } from './LanguageSwitcher';
import './Footer.css';

interface Props {
  content: ContentData;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<Props> = ({ content, onLanguageChange }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img
                src="/images/logo-white.png"
                alt="ATX Star Cleaning"
                className="footer-logo"
                width="48"
                height="48"
              />
              <div className="footer-brand-text">
                <span className="footer-name">ATX STAR</span>
                <span className="footer-sub">CLEANING</span>
              </div>
            </div>
            <p className="footer-tagline">{content.footer.tagline}</p>
            <div className="footer-lang-wrap">
              <LanguageSwitcher
                currentLang={content.lang}
                onToggle={onLanguageChange}
                isDark={true}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">{content.footer.quickLinksTitle}</h4>
            <ul className="footer-links">
              <li><a href="#home">{content.nav.home}</a></li>
              <li><a href="#services">{content.nav.services}</a></li>
              <li><a href="#about">{content.nav.about}</a></li>
              <li><a href="#gallery">{content.nav.gallery}</a></li>
              <li><a href="#contact">{content.nav.contact}</a></li>
            </ul>
          </div>

          {/* Confirmed Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">{content.footer.servicesTitle}</h4>
            <ul className="footer-links">
              {content.servicesSection.items.map((item) => (
                <li key={item.id}>
                  <a href="#services">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-col-title">{content.footer.contactTitle}</h4>
            <ul className="footer-contact-list">
              <li>
                <Phone size={16} className="f-icon" />
                <a href={`tel:${BUSINESS_INFO.phoneTel}`}>{BUSINESS_INFO.phoneDisplay}</a>
              </li>
              <li>
                <Mail size={16} className="f-icon" />
                <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
              </li>
              <li>
                <MapPin size={16} className="f-icon" />
                <span>{BUSINESS_INFO.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Rueda La Rola Media credit */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {currentYear} {content.footer.copyright}
          </p>
          <div className="footer-agency-credit">
            <span className="agency-credit-text">
              {content.lang === 'es' ? 'Creado por ' : 'Created by '}
              <strong className="agency-credit-highlight">Rueda La Rola Media</strong>
            </span>
          </div>
          <p className="footer-web-tag">
            www.atxstarcleaning.com
          </p>
        </div>
      </div>
    </footer>
  );
};
