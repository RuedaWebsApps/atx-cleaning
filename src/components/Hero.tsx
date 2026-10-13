import React from 'react';
import type { ContentData } from '../content';
import { Phone, ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../content/businessInfo';
import './Hero.css';

interface Props {
  content: ContentData;
}

export const Hero: React.FC<Props> = ({ content }) => {
  return (
    <section id="home" className="hero-section">
      {/* Background Graphic Lines */}
      <div className="hero-pattern-overlay" aria-hidden="true" />
      <div className="hero-gold-glow" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="hero-eyebrow-wrapper">
            <span className="hero-sparkle-icon" aria-hidden="true">
              <Sparkles size={16} />
            </span>
            <span className="hero-eyebrow">{content.hero.eyebrow}</span>
          </div>

          <h1 className="hero-title">
            {content.hero.title}
          </h1>

          <p className="hero-description">
            {content.hero.description}
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary hero-btn-main">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="btn btn-secondary hero-btn-tel"
            >
              <Phone size={18} className="gold-accent" />
              <span>{content.hero.secondaryCta}</span>
            </a>
          </div>

          {/* Micro badges & confirmed indicators */}
          <div className="hero-micro-bar">
            <div className="hero-pill">
              <ShieldCheck size={16} className="pill-icon" />
              <span>{content.hero.badgeText}</span>
            </div>
            <div className="hero-pill">
              <Star size={15} className="pill-icon fill-gold" />
              <span>Austin, TX</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual with Real Professional Photography */}
        <div className="hero-visual">
          <div className="hero-card-frame">
            {/* Geometric luxury diagonal accent lines */}
            <div className="diagonal-gold-line line-1" aria-hidden="true" />
            <div className="diagonal-gold-line line-2" aria-hidden="true" />

            <picture>
              <source srcSet="/images/hero-cleaner.webp" type="image/webp" />
              <img
                src="/images/hero-cleaner.jpg"
                alt="ATX Star Cleaning professional wearing purple uniform providing cleaning in a pristine Austin home"
                className="hero-cleaner-img"
                width="800"
                height="800"
                fetchPriority="high"
              />
            </picture>

            {/* Quality badge card overlay */}
            <div className="hero-floating-badge">
              <div className="floating-badge-icon">
                <Star size={20} className="fill-gold" />
              </div>
              <div className="floating-badge-text">
                <span className="badge-highlight">QUALITY WITH PASSION</span>
                <span className="badge-sub">ATX STAR CLEANING</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Diagonal Separator Bottom */}
      <div className="hero-bottom-cut" aria-hidden="true" />
    </section>
  );
};
