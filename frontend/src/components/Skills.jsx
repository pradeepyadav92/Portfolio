import React from 'react';

const skills = [
  { category: 'Programming Languages', items: ['JavaScript', 'Java', 'Python', '  C  '] },
  { category: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Tailwind CSS','NodeJS','Express','WordPress'] },
  { category: 'Database & Tools', items: ['MySQL','MongoDB', 'Git','GitHub', 'Problem Solving', 'Team Collaboration'] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-gray-200 hover:bg-indigo-500 hover:-translate-y-1 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
