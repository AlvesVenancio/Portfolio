
import React, { useState, useCallback } from 'react';
import type { Project, Translations } from '../types';
import { ProjectCard } from './ProjectCard';
import { Lightbox } from './Lightbox';

interface PortfolioProps {
  t: Translations;
  projects: Project[];
}

export const Portfolio: React.FC<PortfolioProps> = ({ t, projects }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextProject = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % projects.length);
    }
  }, [lightboxIndex, projects.length]);

  const prevProject = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + projects.length) % projects.length);
    }
  }, [lightboxIndex, projects.length]);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">{t.projectsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} onClick={() => openLightbox(index)} />
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          project={projects[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextProject}
          onPrev={prevProject}
          t={t}
        />
      )}
    </section>
  );
};
