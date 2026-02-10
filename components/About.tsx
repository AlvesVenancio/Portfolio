
import React from 'react';
import type { Translations } from '../types';

interface AboutProps {
  t: Translations;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="relative h-[60vh] min-h-[400px] my-16 flex items-center rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(./assets/images/felipe.jpeg)" }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 p-8 md:p-12 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tighter">
          Luiz Felipe Alves Venancio
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          {t.aboutText}
        </p>
      </div>
    </section>
  );
};