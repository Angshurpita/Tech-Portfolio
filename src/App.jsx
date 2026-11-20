import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3DScene from './components/Hero3DScene';
import Hero from './components/Hero';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/Terminal';
import { sound } from './utils/audio';

export default function App() {
  // Default to lite theme as preferred by user
  const [isDark, setIsDark] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Sync dark class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Global keyboard shortcuts (Ctrl+K or ` to toggle terminal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sound.playPop();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        sound.playPop();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-akashic-mesh selection:bg-blue-500/20 selection:text-blue-600 transition-colors duration-300">
      
      {/* 3D WebGL Three.js Glacier Scene */}
      <Hero3DScene isDark={isDark} />

      {/* Floating Pill Navigation */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-4">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <ArchitectureShowcase />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}

