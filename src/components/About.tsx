import React from 'react';
import type { ContentData } from '../content';
import { Sparkles, MapPin, Check, HeartHandshake } from 'lucide-react';
import './About.css';

interface Props {
  content: ContentData;
}

export const About: React.FC<Props> = ({ content }) => {
  return (
    <section id="about" className="section section-white about-section">
      <div className="container about-container">
        {/* Left Column: Visual Card with Brand Geometry */}
        <div className="about-visual-side">
          <div className="about-image-card">
            <div className="about-diagonal-stripe" aria-hidden="true" />
            <img
              src="/images/logo-purple.png"
              alt="ATX Star Cleaning Emblem"
              className="about-brand-seal"
              width="260"
              height="260"
              loading="lazy"
            />
            <div className="about-location-tag">
              <MapPin size={16} className="tag-map-icon" />
              <span>{content.aboutSection.badgeAustin}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Copy strictly following confirmed facts */}
        <div className="about-text-side">
          <span className="section-tag section-tag-purple">
            <Sparkles size={14} />
            {content.aboutSection.tag}
          </span>

          <h2 className="section-title about-heading">
            {content.aboutSection.title}
          </h2>

          <p className="about-paragraph">
            {content.aboutSection.description}
          </p>

          <div className="about-feature-box">
            <div className="feature-icon-badge">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 className="feature-title">{content.aboutSection.highlightTitle}</h3>
              <p className="feature-desc">{content.aboutSection.highlightDesc}</p>
            </div>
          </div>

          <div className="about-points-list">
            <div className="about-point-item">
              <div className="check-disc"><Check size={14} /></div>
              <span>Commercial & Residential Expertise</span>
            </div>
            <div className="about-point-item">
              <div className="check-disc"><Check size={14} /></div>
              <span>Transparent & Responsive Communication</span>
            </div>
            <div className="about-point-item">
              <div className="check-disc"><Check size={14} /></div>
              <span>Detailed Care in Every Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
