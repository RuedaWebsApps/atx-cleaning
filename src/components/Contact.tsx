import React, { useState, useEffect } from 'react';
import type { ContentData } from '../content';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../content/businessInfo';
import './Contact.css';

interface Props {
  content: ContentData;
  selectedServicePreset?: string;
}

export const Contact: React.FC<Props> = ({ content, selectedServicePreset = '' }) => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string>(() => {
    if (selectedServicePreset) {
      const match = content.contactSection.choices.find(c => 
        selectedServicePreset.toLowerCase().includes(c.id.toLowerCase())
      );
      if (match) return match.id;
    }
    return content.contactSection.choices[0]?.id || 'residential';
  });

  useEffect(() => {
    if (selectedServicePreset) {
      const match = content.contactSection.choices.find(c => 
        selectedServicePreset.toLowerCase().includes(c.id.toLowerCase())
      );
      if (match) setSelectedChoiceId(match.id);
    }
  }, [selectedServicePreset, content]);

  const currentChoice = content.contactSection.choices.find(c => c.id === selectedChoiceId) 
    || content.contactSection.choices[0];

  const getWhatsAppLink = (messageText: string) => {
    return `https://wa.me/17377812909?text=${encodeURIComponent(messageText)}`;
  };

  return (
    <section id="contact" className="section section-dark contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="section-tag section-tag-gold">
            <Sparkles size={14} />
            {content.contactSection.tag}
          </span>
          <h2 className="section-title">
            {content.contactSection.title}
          </h2>
          <p className="section-subtitle">
            {content.contactSection.description}
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <div className="info-icon-box">
                <Phone size={22} />
              </div>
              <div>
                <span className="info-label">{content.contactSection.info.phoneTitle}</span>
                <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="info-val-link">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-info-card active-wa-card">
              <div className="info-icon-box wa-icon-box">
                <MessageCircle size={24} />
              </div>
              <div>
                <span className="info-label">WhatsApp Direct</span>
                <a
                  href={getWhatsAppLink(content.whatsapp.prefilledMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-val-link"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <span className="info-label">{content.contactSection.info.emailTitle}</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="info-val-link">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <span className="info-label">{content.contactSection.info.locationTitle}</span>
                <p className="info-val-text">{content.contactSection.info.locationText}</p>
              </div>
            </div>

            <div className="contact-trust-note">
              <p>{content.contactSection.info.hoursNote}</p>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Interactive Hub */}
          <div className="contact-wa-hub-card">
            <div className="wa-hub-header">
              <div className="wa-badge-live">
                <span className="wa-pulse-dot" />
                <span>ONLINE SUPPORT</span>
              </div>
              <h3 className="wa-hub-title">
                {content.contactSection.directWhatsAppTitle}
              </h3>
              <p className="wa-hub-desc">
                {content.contactSection.directWhatsAppDesc}
              </p>
            </div>

            {/* Quick Service Inquiry Selector */}
            <div className="wa-choices-group">
              <span className="wa-choices-label">
                {content.contactSection.prefilledChoiceTitle}
              </span>
              <div className="wa-chips-list">
                {content.contactSection.choices.map((choice) => {
                  const isSelected = choice.id === selectedChoiceId;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      className={`wa-choice-chip ${isSelected ? 'chip-active' : ''}`}
                      onClick={() => setSelectedChoiceId(choice.id)}
                    >
                      <span className="chip-indicator">
                        {isSelected ? <Check size={14} /> : <span className="chip-empty-dot" />}
                      </span>
                      <span>{choice.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Preview Box */}
            <div className="wa-message-preview">
              <span className="preview-label">
                {content.lang === 'es' ? 'Mensaje preparado para enviar:' : 'Prepared WhatsApp message:'}
              </span>
              <div className="preview-bubble">
                <p>"{currentChoice.messageText}"</p>
              </div>
            </div>

            {/* Direct Connect CTA Button */}
            <a
              href={getWhatsAppLink(currentChoice.messageText)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-direct"
            >
              <MessageCircle size={22} />
              <span>{content.contactSection.directWhatsAppBtn}</span>
              <ArrowUpRight size={20} />
            </a>

            <div className="wa-instant-guarantee">
              <span>⚡ {content.lang === 'es' ? 'Abre la app de WhatsApp al instante con el mensaje listo' : 'Instantly opens the WhatsApp app with message ready to send'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
