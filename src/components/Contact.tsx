import React, { useState } from 'react';
import type { ContentData } from '../content';
import { Phone, Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../content/businessInfo';
import './Contact.css';

interface Props {
  content: ContentData;
  selectedServicePreset?: string;
}

export const Contact: React.FC<Props> = ({ content, selectedServicePreset = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState(selectedServicePreset);
  const [propertyType, setPropertyType] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppRedirectUrl, setWhatsAppRedirectUrl] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = content.contactSection.form.errors.nameRequired;
    }
    if (!phone.trim()) {
      errs.phone = content.contactSection.form.errors.phoneRequired;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = content.contactSection.form.errors.emailInvalid;
    }
    if (!serviceNeeded) {
      errs.serviceNeeded = content.contactSection.form.errors.serviceRequired;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Create a clean WhatsApp message
    const greeting = content.lang === 'es' ? '¡Hola ATX STAR CLEANING!' : 'Hello ATX STAR CLEANING!';
    const intro = content.lang === 'es' 
      ? `Me gustaría cotizar el servicio de limpieza:` 
      : `I would like to request a quote for cleaning services:`;
    
    const lines = [
      greeting,
      intro,
      `• Nombre: ${fullName.trim()}`,
      `• Servicio: ${serviceNeeded}`,
      `• Teléfono: ${phone.trim()}`,
    ];

    if (email.trim()) lines.push(`• Email: ${email.trim()}`);
    if (propertyType.trim()) lines.push(`• Propiedad: ${propertyType.trim()}`);
    if (message.trim()) lines.push(`• Detalles: ${message.trim()}`);

    const rawMsg = lines.join('\n');
    const waUrl = `https://wa.me/17377812909?text=${encodeURIComponent(rawMsg)}`;

    setWhatsAppRedirectUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in a new tab safely
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section section-dark contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="section-tag section-tag-gold">
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

            <div className="contact-info-card">
              <div className="info-icon-box">
                <MessageSquare size={22} />
              </div>
              <div>
                <span className="info-label">WhatsApp</span>
                <a
                  href={`https://wa.me/17377812909?text=${encodeURIComponent(content.whatsapp.prefilledMessage)}`}
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

          {/* Right Column: Quote Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} noValidate className="quote-form-card">
              <h3 className="form-card-title">
                {content.contactSection.form.submitBtn}
              </h3>

              {isSubmitted ? (
                <div className="form-success-box" role="alert">
                  <CheckCircle size={32} className="success-icon" />
                  <p className="success-msg">{content.contactSection.form.statusSuccess}</p>
                  {whatsAppRedirectUrl && (
                    <a
                      href={whatsAppRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {content.contactSection.form.statusRedirectWhatsApp}
                    </a>
                  )}
                </div>
              ) : (
                <>
                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="fullName" className="form-label">
                        {content.contactSection.form.fullName} <span className="req">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                        placeholder={content.contactSection.form.fullNamePlaceholder}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        aria-invalid={!!errors.fullName}
                      />
                      {errors.fullName && (
                        <span className="error-message">
                          <AlertCircle size={14} /> {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone" className="form-label">
                        {content.contactSection.form.phone} <span className="req">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={`form-input ${errors.phone ? 'has-error' : ''}`}
                        placeholder={content.contactSection.form.phonePlaceholder}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <span className="error-message">
                          <AlertCircle size={14} /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="email" className="form-label">
                        {content.contactSection.form.email}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`form-input ${errors.email ? 'has-error' : ''}`}
                        placeholder={content.contactSection.form.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <span className="error-message">
                          <AlertCircle size={14} /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="serviceNeeded" className="form-label">
                        {content.contactSection.form.serviceNeeded} <span className="req">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        className={`form-select ${errors.serviceNeeded ? 'has-error' : ''}`}
                        value={serviceNeeded}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        required
                        aria-invalid={!!errors.serviceNeeded}
                      >
                        <option value="">{content.contactSection.form.selectServicePrompt}</option>
                        {content.servicesSection.items.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      {errors.serviceNeeded && (
                        <span className="error-message">
                          <AlertCircle size={14} /> {errors.serviceNeeded}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="propertyType" className="form-label">
                      {content.contactSection.form.propertyType}
                    </label>
                    <input
                      id="propertyType"
                      type="text"
                      className="form-input"
                      placeholder={content.contactSection.form.propertyTypePlaceholder}
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="form-label">
                      {content.contactSection.form.message}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="form-textarea"
                      placeholder={content.contactSection.form.messagePlaceholder}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <p className="form-disclaimer">
                    {content.contactSection.form.disclaimer}
                  </p>

                  <button type="submit" className="btn btn-primary btn-submit-quote">
                    <span>{content.contactSection.form.submitBtn}</span>
                    <Send size={18} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
