import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sun, Moon, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandAIcon } from './Icons';
import { sound } from '../utils/audio';

export default function Navbar({ isDark, setIsDark, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = sound.toggle();
    setSoundEnabled(state);
  };

  const navItems = [
    { label: 'Architecture', href: '#architecture' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator Line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-blue-100/40 dark:bg-slate-900/60">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand Mark - Pro White-Background Blue 'A' Logo Badge */}
          <a
            href="#top"
            onClick={() => sound.playPop()}
            className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-300/90 dark:border-slate-700 shadow-md transition-all active:scale-95"
          >
            <BrandAIcon className="w-5 h-5 rounded-md shadow-xs shrink-0" />
            <span className="font-black tracking-wider text-slate-950 dark:text-white text-[15px]">
              ANGSHURPITA
            </span>
          </a>

          {/* Desktop Nav Pills - Solid White/Dark Background with Crisp Dark Text */}
          <nav className="pointer-events-auto hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-300/90 dark:border-slate-700 shadow-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => sound.playPop()}
                className="px-4 py-1.5 text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-300 rounded-full transition-all hover:bg-slate-100/90 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Terminal Trigger */}
            <button
              onClick={() => {
                sound.playPop();
                onOpenTerminal();
              }}
              className="p-2.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-300/90 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-300 shadow-sm transition-colors cursor-pointer"
              title="Open Interactive Terminal (Ctrl+K)"
              aria-label="Interactive Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-full border shadow-sm transition-colors cursor-pointer ${
                soundEnabled
                  ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-sky-300 border-blue-400 dark:border-blue-700'
                  : 'bg-white/95 dark:bg-slate-900/95 border-slate-300/90 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:text-blue-600'
              }`}
              title={soundEnabled ? 'Mute Atmosphere Audio' : 'Enable Atmosphere Audio'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                sound.playPop();
                setIsDark(!isDark);
              }}
              className="p-2.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-300/90 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-sky-300 shadow-sm transition-colors cursor-pointer"
              title={isDark ? 'Switch to Lite Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
            </button>

            {/* Connect CTA Button */}
            <a
              href="#contact"
              onClick={() => sound.playChime()}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/30 active:scale-95 transition-all"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => {
                sound.playPop();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2.5 rounded-full bg-white/95 dark:bg-slate-900/95 border border-slate-300/90 dark:border-slate-700 text-slate-900 dark:text-slate-100 shadow-sm cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 p-4 rounded-2xl max-w-sm mx-auto shadow-2xl border border-slate-300 dark:border-slate-700 bg-white/98 dark:bg-slate-900/98 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    sound.playPop();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2.5 text-sm font-bold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex-1 py-2.5 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-center flex items-center justify-center gap-1.5 border border-slate-300 dark:border-slate-700"
                >
                  <Terminal className="w-4 h-4" />
                  Terminal CLI
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 text-xs font-black bg-blue-600 text-white rounded-full text-center flex items-center justify-center shadow-md shadow-blue-500/20"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
