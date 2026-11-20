import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Code2, Layers, CheckCircle, Sparkles, Filter, ChevronRight, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { allProjects } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveModalProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalProject]);

  const categories = [
    'All',
    'AI & LLM Systems',
    'Real-Time & Systems',
    'Systems & Algorithms',
    'Data Science & Analytics'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-300 dark:border-blue-800 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>FEATURED SYSTEMS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
            Engineering Projects
          </h2>
          <p className="text-slate-900 dark:text-slate-100 max-w-xl mt-2 text-sm sm:text-base font-normal leading-relaxed">
            High-reliability AI platforms, zero-dependency storage engines, and algorithmic intelligence deployed to production and open-source.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-700 shadow-sm self-start md:self-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playPop();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-900 dark:text-slate-100 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-400"
          >
            <div>
              {/* Card Header & Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-950 dark:text-sky-300 border border-blue-300 dark:border-blue-800 font-mono-fact shadow-xs">
                  {project.badge}
                </span>

                <span className="text-xs font-mono-fact font-extrabold text-slate-900 dark:text-slate-200">
                  {project.stats}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <div className="text-xs font-bold text-blue-700 dark:text-sky-300 mt-0.5 mb-3">
                {project.subtitle}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed mb-4 font-normal">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {project.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-900 dark:text-slate-100 font-medium">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Badges & Actions */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {project.stack.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-mono-fact font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => {
                    sound.playPop();
                    setActiveModalProject(project);
                  }}
                  className="text-xs font-extrabold text-blue-700 dark:text-sky-400 hover:text-blue-900 dark:hover:text-sky-300 flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {/* High-Visibility Project Link Buttons */}
                <div className="flex items-center gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playPop()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm shadow-blue-500/25 transition-all cursor-pointer"
                      title="Visit Live Application"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playPop()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-xs shadow-sm transition-all cursor-pointer border border-slate-800"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5 fill-white text-white" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Deep Dive Modal - Rendered via React Portal directly in document.body with guaranteed top stacking */}
      {activeModalProject && typeof document !== 'undefined' && createPortal(
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProject(null);
          }}
          className="fixed inset-0 z-50 fixed-modal-overlay flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
          style={{ zIndex: 99999 }}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-300 dark:border-slate-700"
            style={{ zIndex: 100000 }}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer"
              title="Close modal (Escape)"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="px-3.5 py-1 rounded-full text-xs font-mono-fact bg-blue-100 dark:bg-blue-950 text-blue-950 dark:text-sky-300 font-black mb-3 inline-block border border-blue-300 dark:border-blue-800">
              {activeModalProject.badge} · {activeModalProject.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
              {activeModalProject.title}
            </h3>
            <div className="text-sm font-bold text-blue-700 dark:text-sky-400 mb-4">
              {activeModalProject.subtitle}
            </div>

            <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed mb-6 font-normal">
              {activeModalProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-950 dark:text-slate-200 mb-3">
                Architectural Highlights & Engineering Decisions:
              </h4>
              <div className="space-y-2">
                {activeModalProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-slate-100">
                    <CheckCircle className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-950 dark:text-slate-200 mb-2">
                Technical Stack & Dependencies:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.stack.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono-fact font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-950 dark:text-sky-200 border border-blue-200 dark:border-blue-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              {activeModalProject.live && (
                <a
                  href={activeModalProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-md shadow-blue-500/25"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
              )}
              {activeModalProject.github && (
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-white dark:bg-slate-800 flex items-center gap-1.5 border border-slate-800"
                >
                  <GithubIcon className="w-4 h-4 fill-white text-white" />
                  <span>GitHub Repo</span>
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
