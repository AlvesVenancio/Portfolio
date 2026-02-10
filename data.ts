
import type { Skill, Project, Lang, Translations } from './types';

export const translations: Record<Lang, Translations> = {
  pt: {
    navAbout: 'Sobre',
    navSkills: 'Habilidades',
    navProjects: 'Projetos',
    aboutTitle: 'Sobre Mim',
    aboutText: 'Developer Web/Designer com mais de 5 anos de experiência. Nesses anos de experiência desenvolvi sites com Wordpress e Elementor. Construindo funcionalidades personalizadas com plugins e temas sempre que necessário.',
    skillsTitle: 'Habilidades Técnicas',
    projectsTitle: 'Portfólio de Projetos',
    close: 'Fechar',
  },
en: {
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    aboutTitle: 'About Me',
    aboutText: "Web Developer/Designer with more than 5 years of experience. Throughout this period, I've specialized in developing websites using WordPress and Elementor, creating customized functionalities with plugins and themes whenever necessary.",
    skillsTitle: 'Technical Skills',
    projectsTitle: 'Project Portfolio',
    close: 'Close',
  },
};

export const skills: Skill[] = [
  { name: 'WordPress' },
  { name: 'Elementor' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'PHP' },
  { name: 'MySQL' },
  { name: 'API' },
  { name: 'SASS' },
  { name: 'Bootstrap' },
  { name: 'jQuery' },
  { name: 'GIT' },
];

const projectDomains = [
  'paineirascorcovado.com.br',
  'bcrj.org.br',
  'gremar.org.br',
  'nortecquimica.com.br',
  'mach10imoveis.com',
  'cetbrazil.com.br',
  'universodoc.com.br',
  'clinicaneurovida.com.br',
  'aurumenergia.com.br',
  'cxadvogados.com.br',
  'dominiint.com',
  'grasp.org.br',
  'futuresigns.com.br',
  'tudoffshore.com',
  'grupodomini.com',
  'edre.com.br',
  'autonomieaba.com.br',
  'juicemachine.com.br',
  'cadacantoplanejado.com.br',
  'mpeengenharia.com.br',
  'psicologiario.com.br',
  'altiplanoengenharia.com.br',
  'bravocameras.com.br',
  'camarj.com.br',
  'clusterinfo.com.br',
  'maccomevap.com.br',
  'alutechsa.com.br'
];

export const projects: Project[] = projectDomains.map((domain, index) => {
    return {
        id: index + 1,
        name: domain,
        imageSlug: domain
    };
});