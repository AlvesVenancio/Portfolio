
import React, { useEffect, useState } from 'react';
import type { Project, Translations } from '../types';

interface LightboxProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  t: Translations;
}

export const Lightbox: React.FC<LightboxProps> = ({ project, onClose, onNext, onPrev, t }) => {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setZoom(1);
  }, [project]);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 overflow-auto flex"
      onClick={onClose}
    >
      <div 
        className={`relative m-auto p-4 pb-32 flex flex-col items-center transition-all duration-200 ${zoom === 1 ? 'max-w-4xl' : 'max-w-none'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`/assets/images/${project.imageSlug}.png`}
          alt={`Full view of ${project.name}`}
          className="rounded-lg transition-all duration-200 ease-out object-contain"
          style={{ 
            height: zoom === 1 ? '85vh' : `${zoom * 85}vh`,
            maxWidth: 'none',
          }}
          loading="eager"
        />
      </div>

      <div 
        className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 flex flex-col items-center z-50 border-t border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center text-white mb-4 font-medium">{project.name}</p>
        <div className="flex gap-6">
          <button onClick={handleZoomOut} className="text-white hover:text-cyan-400 transition-colors p-2" aria-label="Zoom Out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
            </svg>
          </button>
          <button onClick={handleZoomIn} className="text-white hover:text-cyan-400 transition-colors p-2" aria-label="Zoom In">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
            </svg>
          </button>
        </div>
      </div>

      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-3xl hover:text-cyan-400 transition-colors z-50"
        aria-label={t.close}
      >
        &times;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors z-50"
        aria-label="Previous project"
      >
        &#8249;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors z-50"
        aria-label="Next project"
      >
        &#8250;
      </button>
    </div>
  );
};