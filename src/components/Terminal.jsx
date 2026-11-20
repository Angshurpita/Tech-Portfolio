import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, metrics, allProjects, skillsData } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '==================================================' },
    { type: 'system', text: ' ANGSHURPITA GANGULY // CORE OS CLI [v4.2.0]' },
    { type: 'system', text: ' Type "help" or tap any command below.' },
    { type: 'system', text: '==================================================' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Lock body scroll and focus input when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 100);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const runCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    const cmd = rawCmd.toLowerCase();
    sound.playPop();

    setHistory((prev) => [...prev, { type: 'user', text: `$ ${rawCmd}` }]);
    if (rawCmd) {
      setCommandHistory((prev) => [...prev, rawCmd]);
      setHistoryIdx(-1);
    }
    setInputVal('');

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'exit' || cmd === 'quit') {
      onClose();
      return;
    }

    if (cmd === 'help') {
      setHistory((prev) => [
        ...prev,
        { type: 'output', text: 'Available Commands:' },
        { type: 'output', text: '  bio         - Executive background & core philosophy' },
        { type: 'output', text: '  projects    - List all flagship systems and repositories' },
        { type: 'output', text: '  ironclad    - Deep dive on Grounded RAG & AST Citation CLI' },
        { type: 'output', text: '  nerv        - Details on NERV-VIPER 3-layer agent topology' },
        { type: 'output', text: '  quantara    - Graph-theoretic financial smurfing detection' },
        { type: 'output', text: '  redis       - pyredis-engine SkipList & RESP benchmarks' },
        { type: 'output', text: '  skills      - Full architectural & language skill matrix' },
        { type: 'output', text: '  metrics     - Quantitative system throughput & academic stats' },
        { type: 'output', text: '  contact     - Direct contact info & socials' },
        { type: 'output', text: '  sudo hire   - Dispatch priority recruitment webhook' },
        { type: 'output', text: '  clear       - Clear CLI viewport' },
        { type: 'output', text: '  exit        - Close terminal emulator' }
      ]);
      return;
    }

    if (cmd === 'bio') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: `Name: ${personalInfo.name}` },
        { type: 'output', text: `Tagline: ${personalInfo.tagline}` },
        { type: 'output', text: `Location: ${personalInfo.location}` },
        { type: 'output', text: `Education: ${personalInfo.education.institution} (${personalInfo.education.cgpa} CGPA)` },
        { type: 'output', text: `Bio: ${personalInfo.bio}` }
      ]);
      return;
    }

    if (cmd === 'metrics') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'KEY SYSTEM METRICS & HIGHLIGHTS:' },
        ...metrics.map((m) => ({
          type: 'output',
          text: `  • ${m.label.padEnd(24)}: ${m.value} ${m.suffix} (${m.sub})`
        }))
      ]);
      return;
    }

    if (cmd === 'projects') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'FLAGSHIP PROJECTS:' },
        ...allProjects.map((p) => ({
          type: 'output',
          text: `  [${p.badge}] ${p.title} — ${p.subtitle}\n    Stack: ${p.stack.join(', ')}\n    URL: ${p.github || p.live}`
        }))
      ]);
      return;
    }

    if (cmd === 'ironclad') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'PROJECT IRONCLAD — Grounded RAG & Codebase CLI' },
        { type: 'output', text: '  * Model: Google Gemma 4 (31B) via cloud inference & local Ollama' },
        { type: 'output', text: '  * Retrieval: Hybrid BM25 sparse lexical + dense vector embeddings' },
        { type: 'output', text: '  * Fusion: Reciprocal Rank Fusion (RRF)' },
        { type: 'output', text: '  * Verifier: Independent AST line-range citation engine with zero hallucination' },
        { type: 'output', text: '  * Tests: 58 automated unit/integration tests passing' }
      ]);
      return;
    }

    if (cmd === 'nerv') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'NERV-VIPER (nerv.co.in) — Autonomous Multi-Agent Security' },
        { type: 'output', text: '  * Autonomous multi-agent code security orchestration platform' },
        { type: 'output', text: '  * 3-Layer Agentic Topology: Directives -> Orchestration -> Execution' },
        { type: 'output', text: '  * AST static analysis for zero-hallucination security patches' },
        { type: 'output', text: '  * Supabase Auth, integrated Stripe & Razorpay payment rail' }
      ]);
      return;
    }

    if (cmd === 'quantara') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'QUANTARA — Financial Crime & Smurfing Detection' },
        { type: 'output', text: '  * Awarded 3rd Position at Smart India Hackathon (SIH) Internal' },
        { type: 'output', text: '  * 7 graph algorithms (Johnson cycle, fan-out dispersal, mule fan-in)' },
        { type: 'output', text: '  * High-throughput FastAPI + Cytoscape.js canvas processing 100K+ tx' }
      ]);
      return;
    }

    if (cmd === 'redis') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'pyredis-engine — In-Memory Storage Engine from Scratch' },
        { type: 'output', text: '  * Zero external dependencies (100% pure Python)' },
        { type: 'output', text: '  * Benchmarked at 128,000+ req/sec throughput' },
        { type: 'output', text: '  * SkipLists with span widths for O(log N) rank/range queries' },
        { type: 'output', text: '  * Asyncio TCP sockets, raw RESP parsing, background AOF compaction' }
      ]);
      return;
    }

    if (cmd === 'skills') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'SYSTEMS & TECHNICAL CAPABILITIES:' },
        ...Object.entries(skillsData).map(([cat, skills]) => ({
          type: 'output',
          text: `  [${cat}]\n    ${skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}`
        }))
      ]);
      return;
    }

    if (cmd === 'contact') {
      setHistory((prev) => [
        ...prev,
        { type: 'highlight', text: 'CONTACT & CHANNELS:' },
        { type: 'output', text: `  Email:    ${personalInfo.email}` },
        { type: 'output', text: `  Phone:    ${personalInfo.phone}` },
        { type: 'output', text: `  GitHub:   ${personalInfo.github}` },
        { type: 'output', text: `  LinkedIn: ${personalInfo.linkedin}` },
        { type: 'output', text: `  X (Tw):   ${personalInfo.x}` },
        { type: 'output', text: `  Location: ${personalInfo.location}` }
      ]);
      return;
    }

    if (cmd === 'sudo hire' || cmd === 'hire') {
      sound.playSuccess();
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 }
      });
      setHistory((prev) => [
        ...prev,
        { type: 'success', text: '>>> ACCESS GRANTED: PRIORITY RECRUITMENT PIPELINE INITIALIZED! <<<' },
        { type: 'success', text: `Email Angshurpita directly at: ${personalInfo.email}` },
        { type: 'output', text: 'Ready to build high-impact AI architectures together.' }
      ]);
      return;
    }

    // Default unknown command
    setHistory((prev) => [
      ...prev,
      { type: 'error', text: `Command not found: "${rawCmd}". Type "help" for a list of commands.` }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIdx < commandHistory.length - 1 ? historyIdx + 1 : historyIdx;
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else {
        setHistoryIdx(-1);
        setInputVal('');
      }
      return;
    }

    if (e.key === 'Enter') {
      runCommand(inputVal);
    }
  };

  return typeof document !== 'undefined' ? createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 fixed-modal-overlay flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
      style={{ zIndex: 99999 }}
    >
      <div
        className={`w-full bg-[#0a0f1d] rounded-2xl shadow-2xl border border-blue-500/40 flex flex-col overflow-hidden transition-all duration-200 font-mono text-xs ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'h-[620px] max-w-3xl'
        }`}
        style={{ zIndex: 100000 }}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800/80 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors cursor-pointer"
              title="Close (Escape)"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors cursor-pointer"
              title="Resize"
            />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <div className="ml-3 flex items-center gap-1.5 text-slate-300 text-[11px] font-bold">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>angshurpita@ironclad-box: ~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white transition-colors cursor-pointer"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Console Viewport */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-1.5 cursor-text text-slate-200"
        >
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === 'system'
                  ? 'text-slate-400 font-semibold'
                  : line.type === 'user'
                  ? 'text-blue-400 font-bold'
                  : line.type === 'highlight'
                  ? 'text-sky-300 font-bold'
                  : line.type === 'success'
                  ? 'text-emerald-400 font-bold'
                  : line.type === 'error'
                  ? 'text-rose-400 font-semibold'
                  : 'text-slate-200'
              }`}
            >
              {line.text}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-1 text-slate-100">
            <span className="text-emerald-400 font-bold">angshurpita@core:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                sound.playTerminalKey();
              }}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0 p-0"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Footer Quick Hints */}
        <div className="px-4 py-2.5 bg-[#090d17] border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-500">Quick run:</span>
            {['projects', 'ironclad', 'nerv', 'quantara', 'redis', 'skills', 'sudo hire', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => runCommand(cmd)}
                className="px-2 py-0.5 rounded bg-blue-950/80 hover:bg-blue-900 text-sky-300 font-mono text-[10px] border border-blue-800/80 cursor-pointer active:scale-95 transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[10px] text-slate-500">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">Enter</kbd>
            <span>to execute</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;
}
