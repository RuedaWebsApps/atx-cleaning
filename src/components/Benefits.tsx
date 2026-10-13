import React from 'react';
import type { ContentData } from '../content';
import { Shield, Sparkles, Building, PhoneCall } from 'lucide-react';
import './Benefits.css';

interface Props {
  content: ContentData;
}

export const Benefits: React.FC<Props> = ({ content }) => {
  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles size={24} />;
      case 1:
        return <Building size={24} />;
      case 2:
        return <Shield size={24} />;
      case 3:
        return <PhoneCall size={24} />;
      default:
        return <Sparkles size={24} />;
    }
  };

  return (
    <section className="section section-warm benefits-section">
      <div className="container">
        <div className="benefits-header">
          <span className="section-tag section-tag-purple">
            {content.benefitsSection.tag}
          </span>
          <h2 className="section-title">
            {content.benefitsSection.title}
          </h2>
          <p className="section-subtitle">
            {content.benefitsSection.subtitle}
          </p>
        </div>

        <div className="benefits-grid">
          {content.benefitsSection.items.map((benefit, idx) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-wrapper">
                {getBenefitIcon(idx)}
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
