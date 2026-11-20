import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function Footer({ onOpenTerminal }) {
  const [kolkataTime, setKolkataTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setKolkataTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 pt-16 pb-12 border-t border-blue-200 dark:border-blue-900/60 overflow-hidden z-10 bg-white/40 dark:bg-slate-950/40">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10 dark:via-blue-900/10 dark:to-blue-950/30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Top Horizon Line with Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200">
          <div className="flex items-center gap-3 font-mono-fact font-bold">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-xs" />
            <span className="text-slate-950 dark:text-white">ALL ARCHITECTURES OPERATIONAL</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-blue-700 dark:text-sky-300">Kolkata, IN: {kolkataTime || '18:00:00 IST'}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-pill text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
          >
            <span>Return to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Big Akashic-Style Horizon Typography - High Contrast */}
        <div className="py-12 select-none">
          <div className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-slate-950 dark:text-white">
            ANGSHURPITA
          </div>
          <div className="text-xs sm:text-sm font-mono-fact tracking-wider uppercase text-blue-700 dark:text-sky-400 font-extrabold mt-1">
            Grounded AI Systems · Low-Latency Architecture · Kolkata, India
          </div>
        </div>

        {/* Bottom Link Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-300">
          <div className="flex flex-wrap items-center gap-5">
            <a href="#architecture" className="hover:text-blue-600 transition-colors">Architecture</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <button
              onClick={() => {
                sound.playPop();
                onOpenTerminal();
              }}
              className="hover:text-blue-600 flex items-center gap-1 font-mono-fact text-blue-700 dark:text-sky-400 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Terminal</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {personalInfo.x && (
              <a
                href={personalInfo.x}
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                title="X (Twitter)"
              >
                <XIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href="https://nerv.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
              title="NERV-VIPER"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-slate-600 dark:text-slate-400 font-medium">© {new Date().getFullYear()} Angshurpita Ganguly</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
