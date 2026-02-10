
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const imageSizes = [400, 800, 1200];
  const createSrcSet = (format: 'png' | 'webp') => 
    imageSizes.map(size => `./assets/images/${project.imageSlug}-${size}w.${format} ${size}w`).join(', ');

  return (
    <div
      onClick={onClick}
      className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:-translate-y-1 bg-gray-900"
    >
      <picture>
        <source
          type="image/webp"
          srcSet={createSrcSet('webp')}
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw"
        />
        <img
          className="absolute top-0 left-0 w-full h-auto object-cover transition-transform duration-[7000ms] ease-linear group-hover:-translate-y-[calc(100%-20rem)]"
          src={`./assets/images/${project.imageSlug}.png`}
          srcSet={createSrcSet('png')}
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw"
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          width="400"
          height="320"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-lg font-semibold text-white tracking-wide">{project.name}</h3>
      </div>
    </div>
  );
};