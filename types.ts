
export type Skill = {
  name: string;
};

export type Project = {
  id: number;
  name: string;
  imageSlug: string;
};

export type Lang = 'pt' | 'en';

export interface Translations {
  navAbout: string;
  navSkills: string;
  navProjects: string;
  aboutTitle: string;
  aboutText: string;
  skillsTitle: string;
  projectsTitle: string;
  close: string;
}