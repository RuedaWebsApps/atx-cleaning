import React, { useState, useEffect } from 'react';
import type { ContentData, Language } from '../content';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../content/businessInfo';
import './Header.css';

interface Props {
  content: ContentData;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<Props> = ({ content, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="header-brand" aria-label="ATX Star Cleaning Home">
          <img
            src="/images/logo-white.png"
            alt="ATX Star Cleaning Logo"
            className="header-logo"
            width="48"
            height="48"
          />
          <div className="header-brand-text">
            <span className="brand-name">ATX STAR</span>
            <span className="brand-sub">CLEANING</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">{content.nav.home}</a></li>
            <li><a href="#services" className="nav-link">{content.nav.services}</a></li>
            <li><a href="#about" className="nav-link">{content.nav.about}</a></li>
            <li><a href="#gallery" className="nav-link">{content.nav.gallery}</a></li>
            <li><a href="#contact" className="nav-link">{content.nav.contact}</a></li>
          </ul>
        </nav>

        {/* Actions & Language */}
        <div className="header-actions">
          <LanguageSwitcher
            currentLang={content.lang}
            onToggle={onLanguageChange}
            isDark={true}
          />
          <a href="#contact" className="btn btn-primary header-cta-btn">
            {content.nav.quoteBtn}
          </a>
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li><a href="#home" onClick={closeMenu}>{content.nav.home}</a></li>
              <li><a href="#services" onClick={closeMenu}>{content.nav.services}</a></li>
              <li><a href="#about" onClick={closeMenu}>{content.nav.about}</a></li>
              <li><a href="#gallery" onClick={closeMenu}>{content.nav.gallery}</a></li>
              <li><a href="#contact" onClick={closeMenu}>{content.nav.contact}</a></li>
            </ul>
            <div className="mobile-menu-footer">
              <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="mobile-call-link">
                <Phone size={18} />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a href="#contact" className="btn btn-primary btn-block" onClick={closeMenu}>
                {content.nav.quoteBtn}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
