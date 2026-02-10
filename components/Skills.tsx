
import React from 'react';
import type { Skill, Translations } from '../types';
import { SkillIcon } from './SkillIcon';

interface SkillsProps {
  t: Translations;
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ t, skills }) => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">{t.skillsTitle}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg transition-transform hover:scale-105 hover:bg-gray-800">
            <div className="text-cyan-400 w-12 h-12 mb-3">
                <SkillIcon skillName={skill.name} />
            </div>
            <span className="font-medium text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
