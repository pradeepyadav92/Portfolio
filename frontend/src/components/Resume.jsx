import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="resume" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
          Resume
        </h2>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all">
          <div className="text-7xl mb-6">📄</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-4">
            Download My Resume
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my education, skills, projects, and experience. My resume includes information about my academic achievements, technical skills, and project work.
          </p>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 mb-8 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Education:</span>
              <span className="text-gray-200 font-medium">B.Tech CSE (83.2%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Experience:</span>
              <span className="text-gray-200 font-medium">Fresher with Projects</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Skills:</span>
              <span className="text-gray-200 font-medium">Web Developer, Java, Python, JavaScript</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
             <a
            href="/Pradeep_s_Resume.pdf"
            download="Pradeep_Kumar_Yadav_Resume.pdf"
            className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
              <Download size={18} />
              Download PDF
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-full font-semibold hover:bg-indigo-500/10 transform hover:-translate-y-1 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
