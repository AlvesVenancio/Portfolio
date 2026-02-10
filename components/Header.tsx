
import React from 'react';
import type { Lang, Translations } from '../types';

interface HeaderProps {
  lang: Lang;
  t: Translations;
  onLangChange: (newLang: Lang) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, t, onLangChange }) => {
  const navItems = [
    { href: '#about', label: t.navAbout },
    { href: '#skills', label: t.navSkills },
    { href: '#projects', label: t.navProjects },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-[#121212]/80 backdrop-blur-sm z-50">
      <div className="max-w-[1140px] mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tight text-white">
          Felipe Venancio<span className="text-cyan-400">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          {lang === 'pt' ? (
            <button
              onClick={() => onLangChange('en')}
              className="text-sm px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors text-white"
            >
              EN
            </button>
          ) : (
            <button
              onClick={() => onLangChange('pt')}
              className="text-sm px-3 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors text-white"
            >
              PT
            </button>
          )}
        </div>
      </div>
    </header>
  );
};