
import React, { useEffect } from 'react';
import type { Project, Translations } from '../types';

interface LightboxProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  t: Translations;
}

export const Lightbox: React.FC<LightboxProps> = ({ project, onClose, onNext, onPrev, t }) => {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const imageSizes = [800, 1200, 1600];
  const createSrcSet = (format: 'png' | 'webp') => 
    imageSizes.map(size => `./assets/images/${project.imageSlug}-${size}w.${format} ${size}w`).join(', ');

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <picture>
           <source
            type="image/webp"
            srcSet={createSrcSet('webp')}
            sizes="(max-width: 1280px) 95vw, 1280px"
          />
          <img
            src={`./assets/images/${project.imageSlug}.png`}
            srcSet={createSrcSet('png')}
            sizes="(max-width: 1280px) 95vw, 1280px"
            alt={`Full view of ${project.name}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            loading="eager"
            width="1280"
            height="720"
          />
        </picture>
        <p className="text-center text-white mt-2 font-medium">{project.name}</p>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-cyan-400 transition-colors"
        aria-label={t.close}
      >
        &times;
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Previous project"
      >
        &#8249;
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Next project"
      >
        &#8250;
      </button>
    </div>
  );
};