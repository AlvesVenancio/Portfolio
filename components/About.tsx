
import React from 'react';
import type { Translations } from '../types';

interface AboutProps {
  t: Translations;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="relative md:h-[60vh] md:min-h-[400px] my-16 flex flex-col md:flex-row md:items-center rounded-lg overflow-hidden" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="relative z-10 p-8 md:p-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tighter text-gray-900">
          Felipe Venancio
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          {t.aboutText}
        </p>
      </div>
      <div className="w-full h-80 md:absolute md:inset-0 md:h-full md:flex md:justify-end">
        <img
          src="/assets/images/felipe.jpeg"
          alt="Felipe Venancio"
          className="w-full h-full object-cover object-center md:w-auto md:h-full"
        />
      </div>
    </section>
  );
};