import React from 'react';

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-80 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
              <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-400">
              Engineering Student & Frontend Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a B.Tech Computer Science Engineering student at R R Institute Of Modern Technology (AKTU) with a strong academic record (83.2%). I have hands-on experience with Java, Python, C, and web technologies, constantly working on projects that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond academics, I enjoy coding challenges on platforms like LeetCode and GFG, and watching movies. I believe in continuous learning and am always excited to explore new technologies and contribute to innovative projects.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
