
import React, { useState, useEffect } from 'react';
import { translations, skills, projects } from './data';
import type { Lang, Translations } from './types';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Header } from './components/Header';

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>('pt');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('l');
    if (langParam === 'en') {
      setLang('en');
    } else {
      setLang('pt');
    }
  }, []);

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
    const url = new URL(window.location.toString());
    url.searchParams.set('l', newLang);
    window.history.pushState({}, '', url);
  };

  const t = translations[lang];

  return (
    <div className="bg-[#121212] min-h-screen font-sans">
      <Header lang={lang} t={t} onLangChange={handleLangChange} />
      <main className="max-w-[1140px] mx-auto px-4">
        <About t={t} />
        <Skills t={t} skills={skills} />
        <Portfolio t={t} projects={projects} />
      </main>
      <footer className="text-center py-8 text-gray-400 border-t border-gray-800 mt-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <a href="mailto:venancio.felipe@outlook.com" className="flex items-center hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            venancio.felipe@outlook.com
          </a>
          <a href="tel:+5521981251362" className="flex items-center hover:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +55 21 98125 1362
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;