import React from 'react';
import { Mail, Linkedin, Github, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950/90 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:pradeepyadav7326@gmail.com"
            className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transform hover:-translate-y-1 transition-all"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/pradeep-yaduvanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transform hover:-translate-y-1 transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/pradeepyadav92"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transform hover:-translate-y-1 transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://leetcode.com/u/Pradeepyaduvanshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transform hover:-translate-y-1 transition-all"
          >
            <Code size={20} />
          </a>
        </div>
        <p className="text-center text-gray-400">
          © 2025 Pradeep Kumar Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
