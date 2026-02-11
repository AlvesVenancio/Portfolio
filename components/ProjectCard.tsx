
import React from 'react';
import type { Project } from '../types';

const projectImages = import.meta.glob('../assets/images/*.png', { eager: true });

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const imagePath = `../assets/images/${project.imageSlug}.png`;
  const imageSrc = (projectImages[imagePath] as { default: string })?.default;

  const isBravo = project.imageSlug.includes('bravocameras');

  return (
    <div
      onClick={onClick}
      className="group relative h-80 w-full overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:-translate-y-1 bg-gray-900"
    >
      <img
        className={`absolute top-0 left-0 w-full ${isBravo ? 'h-full' : 'h-auto'} object-cover transition-transform duration-[7000ms] ease-linear group-hover:-translate-y-[calc(100%-20rem)]`}
        src={imageSrc}
        alt={`Screenshot of ${project.name}`}
        loading="lazy"
        width="400"
        height="320"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-lg font-semibold text-white tracking-wide">{project.name}</h3>
      </div>
    </div>
  );
};