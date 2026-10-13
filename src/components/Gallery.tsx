import React, { useState, useEffect } from 'react';
import type { ContentData } from '../content';
import { Eye, X, Sparkles } from 'lucide-react';
import './Gallery.css';

interface Props {
  content: ContentData;
}

interface GalleryImage {
  id: string;
  src: string;
  webp: string;
  alt: string;
  caption: string;
}

export const Gallery: React.FC<Props> = ({ content }) => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 'g1',
      src: '/images/hero-cleaner.jpg',
      webp: '/images/hero-cleaner.webp',
      alt: 'Professional cleaner in ATX Star Cleaning purple uniform in Austin residence',
      caption: 'Professional Residential Care'
    },
    {
      id: 'g2',
      src: '/images/commercial.jpg',
      webp: '/images/commercial.webp',
      alt: 'Spotless modern office workspace in Austin Texas',
      caption: 'Commercial & Office Cleaning'
    },
    {
      id: 'g3',
      src: '/images/residential.jpg',
      webp: '/images/residential.webp',
      alt: 'Clean, luminous home interior with pristine flooring',
      caption: 'Spotless Living Environments'
    },
    {
      id: 'g4',
      src: '/images/airbnb.jpg',
      webp: '/images/airbnb.webp',
      alt: 'Immaculately arranged Airbnb vacation rental bedroom ready for guests',
      caption: 'Airbnb Turnover Presentation'
    },
    {
      id: 'g5',
      src: '/images/moveinout.jpg',
      webp: '/images/moveinout.webp',
      alt: 'Turnkey move-in and move-out ready residence with gleaming floors',
      caption: 'Move In / Move Out Precision'
    }
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <section id="gallery" className="section section-white gallery-section">
      <div className="container">
        <div className="gallery-header">
          <span className="section-tag section-tag-purple">
            <Sparkles size={14} />
            {content.gallerySection.tag}
          </span>
          <h2 className="section-title">
            {content.gallerySection.title}
          </h2>
          <p className="section-subtitle">
            {content.gallerySection.subtitle}
          </p>
        </div>

        <div className="gallery-masonry-grid">
          {images.map((item, idx) => (
            <div
              key={item.id}
              className={`gallery-item item-${idx}`}
              onClick={() => setActiveImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              aria-label={`View enlarged ${item.caption}`}
            >
              <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-thumb"
                  loading="lazy"
                />
              </picture>
              <div className="gallery-hover-overlay">
                <span className="gallery-view-icon">
                  <Eye size={22} />
                </span>
                <span className="gallery-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Full Screen Lightbox Modal */}
      {activeImage && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.caption}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label={content.gallerySection.closeModal}
            >
              <X size={24} />
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="modal-full-img"
            />
            <p className="modal-caption-text">{activeImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};
