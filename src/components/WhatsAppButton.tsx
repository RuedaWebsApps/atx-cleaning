import React from 'react';
import type { ContentData } from '../content';
import { MessageCircle } from 'lucide-react';

interface Props {
  content: ContentData;
}

export const WhatsAppButton: React.FC<Props> = ({ content }) => {
  const url = `https://wa.me/17377812909?text=${encodeURIComponent(content.whatsapp.prefilledMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label={content.whatsapp.tooltip}
      title={content.whatsapp.tooltip}
    >
      <MessageCircle size={24} fill="#FFFFFF" color="#25D366" />
      <span>{content.whatsapp.tooltip}</span>
    </a>
  );
};
