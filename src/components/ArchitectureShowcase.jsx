import React, { useState } from 'react';
import { Layers, Search, Network, Database, Play, CheckCircle2, AlertTriangle, ArrowRight, Activity, Terminal, Shield, RefreshCw } from 'lucide-react';
import { interactiveShowcases } from '../data/portfolioData';
import { sound } from '../utils/audio';

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState('nerv-viper');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState([]);

  const currentSystem = interactiveShowcases.find((s) => s.id === activeTab) || interactiveShowcases[0];

  const handleRunSimulation = (id) => {
    sound.playPop(800, 0.08);
    setIsSimulating(true);
    setSimulationLogs([]);

    if (id === 'nerv-viper') {
      const logs = [
        '[L1: DIRECTIVE] Parsing codebase security policy... Target: auth_session.py',
        '[L1: DIRECTIVE] Synthesizing execution guardrails: zero-unverified-imports = TRUE',
        '[L2: ORCHESTRATION] Extracting Python AST nodes and symbol dependency tree...',
        '[L2: ORCHESTRATION] Vulnerability detected: CWE-287 Potential Token Replay in verify_jwt()',
        '[L2: ORCHESTRATION] Building directed vulnerability graph (edges: 14, depth: 4)',
        '[L3: EXECUTION] Dispatching Gemma remediation agent with strict refusal boundaries...',
        '[L3: EXECUTION] Patch generated. Running AST syntax validation... PASS',
        '[L3: EXECUTION] 58/58 regression test suites passing. Patch verified with 0% hallucination.'
      ];
      logs.forEach((log, index) => {
        setTimeout(() => {
          setSimulationLogs((prev) => [...prev, log]);
          sound.playTerminalKey();
          if (index === logs.length - 1) {
            setIsSimulating(false);
            sound.playSuccess();
          }
        }, (index + 1) * 350);
      });
    } else if (id === 'ironclad') {
      const logs = [
        '[CLI INGEST] Query: "Find rate-limiting token bucket implementation in core"',
        '[RETRIEVAL: DENSE] Computing 768-d sentence embeddings (cos_sim top-k: 10)',
        '[RETRIEVAL: SPARSE] BM25 lexical tokenizer scanning 1,420 source files...',
        '[RRF ENGINE] Executing Reciprocal Rank Fusion: score = sum(1 / (60 + r_i))',
        '[RRF ENGINE] Merged rank top candidate: src/network/limiter.py (Score: 0.0328)',
        '[INFERENCE] Gemma 4 (31B) generating grounded codebase summary with citations...',
        '[CITATION VERIFIER] Mapping claim 1 -> src/network/limiter.py:L45-L78 (MATCH)',
        '[VERIFICATION] AST line bounds verified. Zero untruthful claims detected.'
      ];
      logs.forEach((log, index) => {
        setTimeout(() => {
          setSimulationLogs((prev) => [...prev, log]);
          sound.playTerminalKey();
          if (index === logs.length - 1) {
            setIsSimulating(false);
            sound.playSuccess();
          }
        }, (index + 1) * 320);
      });
    } else if (id === 'quantara') {
      const logs = [
        '[GRAPH INGEST] Loading transaction batch (100,000 directed edges, 18,400 vertices)...',
        '[ALGO 1: CYCLE] Executing Johnson’s cycle detection algorithm on directed graph...',
        '[ALGO 1: ALERT] Circular smurfing loop detected: Node_A -> Node_D -> Node_G -> Node_A ($48,500)',
        '[ALGO 2: FAN-OUT] Scanning high-velocity dispersal: Node_K -> 14 micro-accounts (< ₹50,000)',
        '[ALGO 3: FAN-IN] Mule consolidation identified: 14 micro-accounts -> Node_Z within 42 mins',
        '[CYTOSCAPE UI] Subgraph rendered with anomaly score 0.94. SIH Top-Ranked detection confirmed.'
      ];
      logs.forEach((log, index) => {
        setTimeout(() => {
          setSimulationLogs((prev) => [...prev, log]);
          sound.playTerminalKey();
          if (index === logs.length - 1) {
            setIsSimulating(false);
            sound.playSuccess();
          }
        }, (index + 1) * 340);
      });
    } else if (id === 'pyredis') {
      const logs = [
        '[CLIENT CONNECT] Async TCP socket handshake accepted on port 6379',
        '[RESP PARSER] Ingested raw bytes: *3\\r\\n$3\\r\\nSET\\r\\n$4\\r\\nkey1\\r\\n$8\\r\\nval_data\\r\\n',
        '[EVENT LOOP] Non-blocking stream framing demuxed in 0.007ms',
        '[SKIPLIST ENGINE] Inserting node to level-4 SkipList. Updating span widths...',
        '[SKIPLIST QUERY] ZRANGEBYSCORE executed with O(log N) skip-pointer traversal',
        '[AOF BACKGROUND] Append-Only File rewrite thread compaction completed (128,400 ops/sec).'
      ];
      logs.forEach((log, index) => {
        setTimeout(() => {
          setSimulationLogs((prev) => [...prev, log]);
          sound.playTerminalKey();
          if (index === logs.length - 1) {
            setIsSimulating(false);
            sound.playSuccess();
          }
        }, (index + 1) * 300);
      });
    }
  };

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header - Bold & High Visibility */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-300 dark:border-blue-800 mb-3 shadow-xs">
          <Activity className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
          <span>INTERACTIVE SYSTEMS SANDBOX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white">
          Architectural Deep Dives
        </h2>
        <p className="text-slate-800 dark:text-slate-200 max-w-2xl mt-2 text-sm sm:text-base font-normal leading-relaxed">
          Inspect and test the deterministic topologies, hybrid retrieval pipelines, graph theory algorithms, and byte-level storage protocols built from first principles.
        </p>
      </div>

      {/* Tabs - Distinct, High-Contrast Buttons */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {interactiveShowcases.map((system) => {
          const isActive = system.id === activeTab;
          return (
            <button
              key={system.id}
              onClick={() => {
                sound.playPop();
                setActiveTab(system.id);
                setSimulationLogs([]);
                setIsSimulating(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-xs ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-[1.02]'
                  : 'bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border border-blue-200/80 dark:border-blue-900/60 hover:border-blue-500/60'
              }`}
            >
              {system.id === 'nerv-viper' && <Shield className="w-4 h-4 text-inherit" />}
              {system.id === 'ironclad' && <Search className="w-4 h-4 text-inherit" />}
              {system.id === 'quantara' && <Network className="w-4 h-4 text-inherit" />}
              {system.id === 'pyredis' && <Database className="w-4 h-4 text-inherit" />}
              <span>{system.title.split('—')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Display Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white/95 dark:bg-slate-900/95 rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-200/80 dark:border-blue-900/60">
        
        {/* Left Column: Details & Topology */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-fact px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-sky-300 border border-blue-200 dark:border-blue-800 font-bold">
                {currentSystem.category}
              </span>
              <div className="flex items-center gap-2">
                {currentSystem.githubUrl && (
                  <a
                    href={currentSystem.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playPop()}
                    className="text-xs font-bold text-blue-600 dark:text-sky-400 hover:text-blue-800 dark:hover:text-sky-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect Source</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-2">
              {currentSystem.title}
            </h3>

            <p className="text-sm text-slate-800 dark:text-slate-200 mb-6 font-normal leading-relaxed">
              {currentSystem.description}
            </p>

            {/* Architecture breakdown by system type */}
            {currentSystem.layers && (
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-extrabold uppercase text-slate-800 dark:text-slate-300 tracking-wider">
                  Deterministic Agent Topology:
                </div>
                {currentSystem.layers.map((layer, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-200/70 dark:border-slate-700">
                    <div className="text-xs font-extrabold text-blue-700 dark:text-sky-300 font-mono-fact">
                      {layer.name}
                    </div>
                    <div className="text-xs font-bold text-slate-950 dark:text-white mt-0.5">
                      {layer.role}
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-normal leading-snug">
                      {layer.detail}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentSystem.pipeline && (
              <div className="space-y-2 mb-6">
                <div className="text-xs font-extrabold uppercase text-slate-800 dark:text-slate-300 tracking-wider">
                  Retrieval & Verification Flow:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
                  {currentSystem.pipeline.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-200/70 dark:border-slate-700 flex flex-col justify-between">
                      <div className="text-[10px] font-extrabold text-blue-700 dark:text-sky-300 font-mono-fact">
                        STEP 0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-slate-950 dark:text-white my-1">
                        {step.step}
                      </div>
                      <div className="text-[10px] text-slate-700 dark:text-slate-300 font-medium leading-tight">
                        {step.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSystem.algorithms && (
              <div className="space-y-2 mb-6">
                <div className="text-xs font-extrabold uppercase text-slate-800 dark:text-slate-300 tracking-wider">
                  Graph-Theory Anomaly Detectors (7 Implemented):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSystem.algorithms.map((algo, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-200/70 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>{algo}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentSystem.features && (
              <div className="space-y-2 mb-6">
                <div className="text-xs font-extrabold uppercase text-slate-800 dark:text-slate-300 tracking-wider">
                  From-Scratch Systems Specifications:
                </div>
                <div className="space-y-1.5">
                  {currentSystem.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Chips - High Legibility */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentSystem.metrics.map((m, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono-fact font-bold bg-blue-100/80 dark:bg-blue-950/70 text-blue-900 dark:text-sky-200 border border-blue-300 dark:border-blue-800"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Simulated Execution Terminal */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#090d16] text-slate-100 p-5 shadow-2xl border border-blue-900/60 font-mono text-xs">
          <div>
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300 text-[11px] font-semibold ml-2">sandbox://{currentSystem.id}</span>
              </div>
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Live Pipeline</span>
            </div>

            {/* Output Feed */}
            <div className="min-h-[220px] max-h-[300px] overflow-y-auto space-y-2 py-2 pr-1">
              <div className="text-slate-400 font-semibold">
                # System ready: {currentSystem.title.split('—')[0]}
              </div>
              <div className="text-slate-500 text-[11px]">
                Click below to trigger live state-machine execution...
              </div>

              {simulationLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`text-[11px] leading-relaxed transition-opacity duration-200 ${
                    log.includes('ALERT') || log.includes('detected')
                      ? 'text-amber-300 font-bold'
                      : log.includes('verified') || log.includes('PASS') || log.includes('MATCH') || log.includes('confirmed')
                      ? 'text-emerald-400 font-bold'
                      : 'text-sky-300 font-medium'
                  }`}
                >
                  {log}
                </div>
              ))}

              {isSimulating && (
                <div className="flex items-center gap-2 text-sky-400 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  <span>Processing pipeline stage...</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-4 border-t border-slate-800">
            <button
              disabled={isSimulating}
              onClick={() => handleRunSimulation(currentSystem.id)}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 active:scale-98 disabled:opacity-50 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>
                {isSimulating ? 'Executing Verification Pipeline...' : `Run ${currentSystem.title.split('—')[0]} Simulation`}
              </span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
