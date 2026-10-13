import React from 'react';
import type { Language } from '../content';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

interface Props {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  isDark?: boolean;
}

export const LanguageSwitcher: React.FC<Props> = ({ currentLang, onToggle, isDark = true }) => {
  return (
    <div className={`lang-switcher ${isDark ? 'lang-dark' : 'lang-light'}`} role="group" aria-label="Language selection">
      <Globe size={15} className="lang-icon" aria-hidden="true" />
      <button
        type="button"
        className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => onToggle('en')}
        aria-pressed={currentLang === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={`lang-btn ${currentLang === 'es' ? 'active' : ''}`}
        onClick={() => onToggle('es')}
        aria-pressed={currentLang === 'es'}
        title="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};
