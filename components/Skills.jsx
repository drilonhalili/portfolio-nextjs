import React from 'react';

import Testimonial from './Testimonial';

import { skills } from '../utils/data';

const Skills = () => {
  const path = "/public/assets/skills/"
  
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Testimonial
              key={skill.name}
              name={skill.name}
              src={`${path}${skill.image}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Skills;
