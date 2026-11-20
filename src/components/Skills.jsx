import React, { useState } from 'react';
import { Cpu, Terminal, Search, Check, Sparkles, Sliders } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('AI & LLM Systems');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Object.keys(skillsData);

  const currentSkills = skillsData[activeCategory] || [];

  const filteredSkills = searchQuery.trim() === ''
    ? currentSkills
    : Object.values(skillsData)
        .flat()
        .filter(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.detail.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-300 dark:border-blue-800 mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
            Skills & Systems Arsenal
          </h2>
          <p className="text-slate-800 dark:text-slate-200 max-w-xl mt-2 text-sm sm:text-base font-normal leading-relaxed">
            Deep algorithmic and architectural fluency spanning low-level network protocols, high-concurrency systems, and LLM inference pipelines.
          </p>
        </div>

        {/* Live Search Bar - High Contrast */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-600 dark:text-slate-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter technology (e.g. RAG, Redis, WebRTC)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-white/95 dark:bg-slate-900/95 border border-blue-200/90 dark:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white placeholder:text-slate-500 font-mono-fact font-semibold shadow-xs"
          />
        </div>
      </div>

      {/* Category Tabs (only when not searching) */}
      {searchQuery.trim() === '' && (
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playPop();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-blue-200/80 dark:border-blue-900/60 hover:border-blue-500'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/80 dark:border-blue-900/60 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400" />
                  {skill.name}
                </span>
                <span className="text-xs font-mono-fact font-extrabold text-blue-700 dark:text-sky-400">
                  {skill.level}%
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 font-medium leading-relaxed">
                {skill.detail}
              </p>
            </div>

            {/* High-Visibility Vibrant Gradient Progress Bar */}
            <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Systems Highlights Footer Card */}
      <div className="mt-10 p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-blue-200/90 dark:border-blue-900/60 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-950 dark:text-white">
              Deterministic & Zero-Hallucination Engineering
            </div>
            <div className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">
              Validated across 58 unit & integration test suites with strict AST line-range mappings.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-fact px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-bold">
            ● 58/58 Tests Passing
          </span>
          <span className="text-xs font-mono-fact px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-sky-300 border border-blue-300 dark:border-blue-800 font-bold">
            128k ops/sec
          </span>
        </div>
      </div>

    </section>
  );
}
