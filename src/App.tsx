import { useState } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import './styles/global.css';

export function App() {
  const { content, setLang } = useLanguage();
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header
        content={content}
        onLanguageChange={(newLang) => setLang(newLang)}
      />

      <main id="main-content">
        <Hero content={content} />
        <Services content={content} onSelectService={handleSelectService} />
        <About content={content} />
        <Benefits content={content} />
        <Gallery content={content} />
        <Contact content={content} selectedServicePreset={selectedService} />
        <CallToAction content={content} />
      </main>

      <Footer
        content={content}
        onLanguageChange={(newLang) => setLang(newLang)}
      />

      <WhatsAppButton content={content} />
    </>
  );
}

export default App;
