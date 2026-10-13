import React from 'react';
import type { ContentData } from '../content';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../content/businessInfo';
import './CallToAction.css';

interface Props {
  content: ContentData;
}

export const CallToAction: React.FC<Props> = ({ content }) => {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-card">
          {/* Subtle geometric lines */}
          <div className="cta-gold-accent-line" aria-hidden="true" />
          
          <div className="cta-content-wrapper">
            <h2 className="cta-title">
              {content.ctaBanner.title}
            </h2>
            <p className="cta-desc">
              {content.ctaBanner.description}
            </p>
            <div className="cta-buttons-row">
              <a href="#contact" className="btn btn-primary cta-btn">
                <span>{content.ctaBanner.primaryBtn}</span>
                <ArrowRight size={18} />
              </a>
              <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="btn btn-secondary cta-btn">
                <Phone size={18} />
                <span>{content.ctaBanner.callBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
