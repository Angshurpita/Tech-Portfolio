import React from 'react';
import { ArrowDown, Terminal, Cpu, ShieldCheck, Zap, Network, ExternalLink, Award, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo, metrics } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function Hero({ onOpenTerminal }) {
  return (
    <section id="top" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      
      {/* Top Status Capsule - Maximum Legibility & Solid White Background in Lite Mode */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6 animate-float">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-xs font-bold text-slate-950 dark:text-white border border-slate-300 dark:border-slate-700 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-extrabold text-emerald-700 dark:text-emerald-400">Available</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span>Founder @ NERV-VIPER · Lead AI & Systems Architect</span>
        </div>

        <a
          href="https://github.com/Angshurpita"
          target="_blank"
          rel="noreferrer"
          onClick={() => sound.playPop()}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-xs font-mono-fact font-bold text-slate-950 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
        >
          <GithubIcon className="w-3.5 h-3.5 fill-slate-950 dark:fill-white text-slate-950 dark:text-white" />
          <span>github.com/Angshurpita</span>
        </a>
      </div>

      {/* Main Headline - Ultra-Crisp & Commanding */}
      <div className="max-w-4xl relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.08] mb-6">
          Architecting{' '}
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Grounded AI
          </span>{' '}
          & High-Throughput Systems.
        </h1>

        <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-100 max-w-2xl font-medium leading-relaxed mb-8">
          Hi, I'm <strong className="font-extrabold text-black dark:text-white underline decoration-blue-500/40 decoration-2 underline-offset-4">{personalInfo.name}</strong>. 
          I engineer zero-hallucination multi-agent code intelligence, sub-second duplex voice AI pipelines, and from-scratch 
          distributed storage engines with verified mathematical rigor.
        </p>

        {/* Action Button Strip */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <a
            href="#architecture"
            onClick={() => sound.playPop()}
            className="px-6 py-3.5 rounded-full text-sm font-extrabold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Explore 3D Architecture Lab</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            onClick={() => sound.playPop()}
            className="px-5 py-3.5 rounded-full text-sm font-extrabold bg-white/95 dark:bg-slate-900/95 text-slate-950 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500 active:scale-95 transition-all shadow-sm"
          >
            View Flagship Projects
          </a>

          <button
            onClick={() => {
              sound.playSuccess();
              onOpenTerminal();
            }}
            className="px-4 py-3.5 rounded-full text-sm font-mono-fact font-extrabold bg-blue-50 dark:bg-blue-950/70 text-blue-900 dark:text-sky-200 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 flex items-center gap-2 active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-blue-700 dark:text-sky-300" />
            <span>Launch CLI [Terminal]</span>
          </button>
        </div>
      </div>

      {/* Metrics Ribbon - Solid Fact Cards, 100% Readable */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-4">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-1">
              {m.label}
            </div>
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-2xl sm:text-3xl font-black font-mono-fact text-slate-950 dark:text-white">
                {m.value}
              </span>
              <span className="text-xs font-black text-blue-700 dark:text-sky-400 font-mono-fact">
                {m.suffix}
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-300 leading-snug">
              {m.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Core Focus Domains Strip - 100% Legibility */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <span className="font-extrabold text-slate-950 dark:text-white tracking-wider">
          CORE FOCUS DOMAINS:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-950 dark:text-sky-200 font-mono-fact font-bold border border-blue-200 dark:border-blue-800 shadow-xs">
            Hybrid RAG (BM25 + Dense RRF)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-950 dark:text-sky-200 font-mono-fact font-bold border border-blue-200 dark:border-blue-800 shadow-xs">
            128K+ req/s SkipList RESP Engine
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-950 dark:text-sky-200 font-mono-fact font-bold border border-blue-200 dark:border-blue-800 shadow-xs">
            Duplex Agora WebRTC Audio
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-950 dark:text-sky-200 font-mono-fact font-bold border border-blue-200 dark:border-blue-800 shadow-xs">
            Financial Graph Topologies (SIH 3rd)
          </span>
        </div>
      </div>

    </section>
  );
}
