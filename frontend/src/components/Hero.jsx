import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-indigo-400 to-purple-500 text-transparent bg-clip-text leading-tight">
          Hi, I'm Pradeep Kumar Yadav
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 font-medium">Frontend Developer & Aspiring Engineer</p>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
         Full-Stack Magic with MERN | I turn ideas into blazing-fast web apps. From MongoDB to Node.js, Express to React, I craft dynamic, scalable, and stunning interfaces that not only work flawlessly but feel alive. Building responsive, pixel-perfect, and user-friendly experiences is my jam — let's code the future together!
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transform hover:-translate-y-1 transition-all"
          >
            Get In Touch
          </button>
          <a
            href="/Pradeep_s_Resume.pdf"
            download="Pradeep_Kumar_Yadav_Resume.pdf"
            className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
