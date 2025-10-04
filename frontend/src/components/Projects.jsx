import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
    title: 'Chatify',
    description: 'A real-time chat application built with React, Node.js, and Socket.io. Features include user authentication, private messaging, and group chats with a sleek, responsive design.',
    icon: '💬',
    demo: 'https://chat-app-vwi9.onrender.com/',
    github: 'https://github.com/pradeepyadav92/server'
  },
//     {
//     title: 'Personal Portfolio Website',
//     description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS featuring smooth animations and mobile-first design.',
//     icon: '💼',
//     demo: '#home',
//     github: 'https://github.com/pradeepyadav92'
//   },
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS featuring smooth animations and mobile-first design.',
    icon: '💼',
    demo: '#home',
    github: 'https://github.com/pradeepyadav92'
  },
  {
    title: 'Cryptora - Password Manager',
    description: 'A command-line password manager built with Python featuring secure storage and retrieval functionalities with robust exception handling.',
    icon: '🔐',
    github: 'https://github.com/pradeepyadav92/Cryptora.git'
  },
  {
    title: 'Scientific Calculator',
    description: 'A comprehensive scientific calculator application developed with Python. Features basic arithmetic operations, base conversion, and BMI calculation.',
    icon: '🧮',
    github: 'https://github.com/pradeepyadav92/Scientific-Calculator.git'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center text-7xl">
                {project.icon}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                <div className="flex gap-3 flex-wrap">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-500 hover:text-white transition-all inline-flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-500 hover:text-white transition-all inline-flex items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
