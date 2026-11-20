import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { trajectoryData } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Industry Experience',
    'Education & Academics',
    'Honors & Leadership'
  ];

  const filteredItems = activeCategory === 'All'
    ? trajectoryData
    : trajectoryData.filter((item) => item.category === activeCategory);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-300 dark:border-blue-800 mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>CAREER & ACADEMIC TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-slate-800 dark:text-slate-200 max-w-xl mt-2 text-sm sm:text-base font-normal leading-relaxed">
            Proven leadership in founding production AI ventures, deploying predictive models at scale, and achieving academic distinction.
          </p>
        </div>

        {/* Uniform Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-300 dark:border-slate-700 shadow-sm self-start md:self-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playPop();
                  setActiveCategory(cat);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-800 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Uniform Trajectory Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-blue-400 group"
          >
            <div>
              {/* Top Row: Uniform Type Badge + Date + Location */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono-fact font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-950 dark:text-sky-300 border border-blue-300 dark:border-blue-800 shadow-xs">
                  {item.typeBadge}
                </span>

                <div className="flex items-center gap-3 text-xs font-mono-fact font-bold text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    <span>{item.period}</span>
                  </div>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Title & Organization Header */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                {item.role}
              </h3>

              <div className="flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-sky-400 mt-1 mb-3">
                <span>{item.organization}</span>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playPop()}
                    className="inline-flex items-center gap-1 hover:underline text-xs text-blue-600 dark:text-sky-300"
                  >
                    <span>{item.url.replace('https://', '')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Uniform Key Metric Ribbon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 text-xs font-mono-fact font-bold text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-700 mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>{item.metricBadge}</span>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-2.5 mb-6">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech / Domains Pill Strip */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
              {item.stack.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-fact font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
