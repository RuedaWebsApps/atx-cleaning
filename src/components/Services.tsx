import React from 'react';
import type { ContentData, ServiceItem } from '../content';
import { Home, Building2, Hotel, Truck, ArrowUpRight, Star, CheckCircle } from 'lucide-react';
import './Services.css';

interface Props {
  content: ContentData;
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<Props> = ({ content, onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'home':
        return <Home size={22} />;
      case 'building':
        return <Building2 size={22} />;
      case 'hotel':
        return <Hotel size={22} />;
      case 'truck':
        return <Truck size={22} />;
      default:
        return <CheckCircle size={22} />;
    }
  };

  const isStarred = (id: string) => id === 'commercial' || id === 'airbnb';

  return (
    <section id="services" className="section section-warm services-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-block">
          <span className="section-tag section-tag-purple">
            <Star size={14} className="fill-purple" />
            {content.servicesSection.tag}
          </span>
          <h2 className="section-title services-main-title">
            {content.servicesSection.title}
          </h2>
          <p className="section-subtitle">
            {content.servicesSection.subtitle}
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="services-grid">
          {content.servicesSection.items.map((service, index) => (
            <article key={service.id} className={`service-card card-variant-${index % 2}`}>
              <div className="service-image-wrap">
                <picture>
                  <source srcSet={service.imageWebp} type="image/webp" />
                  <img
                    src={service.image}
                    alt={`${service.name} in Austin Texas`}
                    className="service-img"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </picture>
                <div className="service-badge-pill">
                  {isStarred(service.id) ? (
                    <Star size={14} className="badge-bullet star-bullet" />
                  ) : (
                    <CheckCircle size={14} className="badge-bullet check-bullet" />
                  )}
                  <span>{service.badge}</span>
                </div>
              </div>

              <div className="service-info-wrap">
                <div className="service-header-row">
                  <div className="service-icon-box">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="service-name">{service.name}</h3>
                </div>

                <p className="service-desc">{service.shortDesc}</p>

                <button
                  type="button"
                  className="service-quote-action"
                  onClick={() => onSelectService(service.name)}
                >
                  <span>{content.servicesSection.ctaText}</span>
                  <ArrowUpRight size={18} className="action-arrow" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
