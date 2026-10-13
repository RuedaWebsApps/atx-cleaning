import { useState, useEffect } from 'react';
import type { Language, ContentData } from '../content';
import { contentEn, contentEs } from '../content';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/es')) return 'es';
      const stored = localStorage.getItem('atx_lang') as Language;
      if (stored === 'es' || stored === 'en') return stored;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('atx_lang', lang);
    document.documentElement.lang = lang;
    
    // Update Document Title and Meta tags dynamically
    if (lang === 'es') {
      document.title = 'ATX STAR CLEANING | Servicios de Limpieza en Austin, Texas';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Contacte a ATX STAR CLEANING para consultar servicios de limpieza residencial, comercial, Airbnb y mudanzas en Austin, Texas.');
      }
      if (window.location.pathname !== '/es') {
        window.history.replaceState(null, '', '/es' + window.location.hash);
      }
    } else {
      document.title = 'ATX STAR CLEANING | Professional Cleaning Services in Austin, TX';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Looking for residential or commercial cleaning in Austin, TX? Contact ATX STAR CLEANING about home, Airbnb, and move-in or move-out cleaning services.');
      }
      if (window.location.pathname.startsWith('/es')) {
        window.history.replaceState(null, '', '/' + window.location.hash);
      }
    }
  }, [lang]);

  const toggleLang = (target?: Language) => {
    setLang((prev) => (target ? target : prev === 'en' ? 'es' : 'en'));
  };

  const content: ContentData = lang === 'es' ? contentEs : contentEn;

  return { lang, setLang, toggleLang, content };
}
