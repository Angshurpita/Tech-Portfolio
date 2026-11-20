export const personalInfo = {
  name: "Angshurpita Ganguly",
  tagline: "AI Systems Architect · Low-Latency Systems Engineer · Founder",
  bio: "Architecting grounded LLM platforms, sub-second multimodal voice pipelines, and high-throughput distributed storage engines from first principles. Passionate about multi-agent orchestration, graph-theoretic intelligence, and zero-hallucination systems.",
  location: "Kolkata, India",
  timezone: "Asia/Kolkata (UTC+5:30)",
  email: "angshuganguly777@gmail.com",
  phone: "+91 8172068803",
  github: "https://github.com/Angshurpita",
  linkedin: "https://www.linkedin.com/in/angshurpita-ganguly/",
  x: "https://x.com/AngshurpitaGan1",
  nervUrl: "https://nerv.co.in",
  availability: "Available for High-Impact Roles & Systems Consulting",
  education: {
    institution: "Government College of Engineering and Ceramic Technology",
    degree: "B.Tech in Information Technology",
    period: "Aug 2024 – June 2028",
    cgpa: "9.72 / 10.00",
    rank: "Top 1% Department Rank",
    location: "Kolkata, India",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning Foundations",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Distributed Systems Principles"
    ]
  }
};

export const metrics = [
  { label: "Academic CGPA", value: "9.72", suffix: "/ 10", sub: "Top 1% Department Rank" },
  { label: "Storage Engine Speed", value: "128K+", suffix: "req/s", sub: "Custom pyredis RESP Engine" },
  { label: "Voice AI Latency", value: "<800", suffix: "ms", sub: "Time-to-First-Token (TTFT)" },
  { label: "Automated Test Suites", value: "58", suffix: "tests", sub: "Grounded AST Verification" },
  { label: "Smurfing Detection", value: "7", suffix: "algos", sub: "Graph-Theoretic Topologies (SIH 3rd)" }
];

export const interactiveShowcases = [
  {
    id: "nerv-viper",
    title: "NERV-VIPER 3-Layer Agentic Topology",
    tagline: "Autonomous multi-agent code security orchestration platform",
    category: "Multi-Agent Systems",
    metrics: ["3 Agent Layers", "Deterministic AST", "Zero Hallucination", "Supabase & Stripe"],
    description: "Orchestrates specialized LLM agents in a deterministic 3-tier hierarchy to inspect ASTs, build vulnerability graphs, and synthesize verified security patches.",
    layers: [
      {
        name: "Layer 1: Directives",
        role: "Intent Parsing & Security Policy Compilation",
        detail: "Decodes developer intent, bounds execution constraints, and synthesizes immutable policy guardrails."
      },
      {
        name: "Layer 2: Orchestration",
        role: "Static AST Analysis & Vulnerability Graphing",
        detail: "Extracts language-agnostic Abstract Syntax Trees and constructs directed vulnerability dependency graphs."
      },
      {
        name: "Layer 3: Execution",
        role: "Deterministic Patch Synthesis & Verification",
        detail: "Synthesizes code remediation with zero hallucinations, verified against automated test suites and compiler feedback."
      }
    ],
    tech: ["Supabase Auth", "Stripe / Razorpay", "LLM Multi-Agent", "Python AST", "TypeScript", "Next.js"],
    liveUrl: "https://nerv.co.in",
    githubUrl: "https://github.com/Angshurpita/NERV"
  },
  {
    id: "ironclad",
    title: "PROJECT IRONCLAD — Grounded RAG & Codebase CLI",
    tagline: "Grounded RAG developer CLI with Reciprocal Rank Fusion",
    category: "AI & LLM Systems",
    metrics: ["Gemma 4 (31B)", "58 Passing Tests", "Hybrid RRF", "0% Hallucination"],
    description: "An ultra-reliable developer CLI executing hybrid search (BM25 sparse lexical + dense vector embeddings) fused via Reciprocal Rank Fusion (RRF), coupled with an independent AST file path verification engine.",
    pipeline: [
      { step: "User Query / Diff", detail: "Code context & question ingested via CLI" },
      { step: "Dual Retrieval", detail: "BM25 Sparse Lexical + Dense Vector Embeddings" },
      { step: "RRF Fusion", detail: "Reciprocal Rank Fusion merges top-k semantic & exact matches" },
      { step: "Gemma 4 (31B) Inference", detail: "Cloud API / local Ollama inference under strict prompts" },
      { step: "AST Citation Engine", detail: "Validates every claim to verified AST file paths & line ranges" }
    ],
    tech: ["Python 3.11", "Google Gemma 4 (31B)", "BM25", "Sentence-Transformers", "RRF", "Pytest"],
    githubUrl: "https://github.com/Angshurpita/IRONCLAD"
  },
  {
    id: "quantara",
    title: "QUANTARA — Graph-Theoretic Smurfing Detection",
    tagline: "High-volume directed transaction network analysis platform",
    category: "Graph Theory & Financial Crime",
    metrics: ["100K+ Tx Batches", "7 Graph Algos", "SIH 3rd Place", "Sub-second Exec"],
    description: "High-throughput financial intelligence platform applying 7 graph-theory algorithms (cycle detection, layered chains, fan-in / fan-out flows) to uncover complex money laundering topologies.",
    algorithms: [
      "Directed Cycle Detection (circular flow / round-tripping)",
      "Fan-Out Distribution (smurfing dispersal)",
      "Fan-In Aggregation (consolidation into mule accounts)",
      "Layered Chains (deep intermediary hops)",
      "Degree Centrality & Anomaly Score Thresholding",
      "Temporal Window Clustered Subgraphs",
      "Dynamic Flow Velocity Quantification"
    ],
    tech: ["Python", "FastAPI", "NetworkX", "Pandas", "Cytoscape.js", "Firebase"],
    githubUrl: "https://github.com/Angshurpita/Quantara"
  },
  {
    id: "pyredis",
    title: "pyredis-engine — In-Memory Storage Engine from Scratch",
    tagline: "Zero-dependency Redis-compatible engine over raw TCP sockets",
    category: "Low-Latency Systems",
    metrics: ["128,000+ req/s", "0 Dependencies", "O(log N) SkipLists", "AOF Compaction"],
    description: "Built completely from scratch in pure Python. Parses raw byte-level RESP protocols over non-blocking asynchronous TCP sockets, backed by SkipList-based sorted sets with span widths for O(log N) range/rank queries.",
    features: [
      "Raw byte-level RESP (REdis Serialization Protocol) streaming parser",
      "Non-blocking asynchronous TCP socket event loop using asyncio",
      "SkipList sorted sets with span widths for O(log N) rank/range operations",
      "Active and passive probabilistic key expiration algorithms",
      "Background Append-Only File (AOF) log compaction thread"
    ],
    tech: ["Python", "asyncio", "TCP Sockets", "SkipLists", "Concurrency", "Systems Architecture"],
    githubUrl: "https://github.com/Angshurpita/pyredis-engine"
  }
];

export const allProjects = [
  {
    id: "ironclad",
    title: "PROJECT IRONCLAD",
    badge: "Flagship AI",
    subtitle: "Grounded RAG & Codebase Intelligence CLI",
    category: "AI & LLM Systems",
    description: "Minimal-footprint developer CLI grounded on Google Gemma 4 (31B). Executes Hybrid Search with Reciprocal Rank Fusion (RRF) combining BM25 sparse lexical retrieval with dense vector embeddings. Built an independent citation verification engine mapping every claim to verified AST file paths and line ranges with strict refusal/abstention mechanisms.",
    highlights: [
      "Hybrid search fusing BM25 lexical retrieval and dense vector embeddings via RRF",
      "Google Gemma 4 (31B) cloud inference + local Ollama fallback",
      "Independent citation verification engine mapping claims to AST line ranges",
      "Validated by 58 passing automated unit & integration tests"
    ],
    stack: ["Python 3.11", "Google Gemma 4 (31B)", "BM25", "Sentence-Transformers", "RRF", "Pytest"],
    github: "https://github.com/Angshurpita/IRONCLAD",
    stats: "58 Tests Passed · 0% Hallucination"
  },
  {
    id: "nerv-voice",
    title: "NERV-VOICE",
    badge: "Real-Time AI",
    subtitle: "Real-Time Conversational Voice AI Platform",
    category: "Real-Time & Systems",
    description: "Architected a sub-second latency duplex voice conversation engine streaming WebRTC browser audio to AI voice agents using Agora RTC low-latency audio channels, integrating Deepgram Nova STT, Google Gemini LLM, and Deepgram Aura TTS. Engineered a custom OpenAI-compatible LLM endpoint adapter with resilient WebSocket session state management.",
    highlights: [
      "Full-duplex WebRTC bidirectional audio streaming via Agora RTC",
      "Deepgram Nova STT -> Google Gemini LLM -> Deepgram Aura TTS pipeline",
      "Custom OpenAI-compatible LLM endpoint adapter for Agora conversational AI worker",
      "Sub-800ms time-to-first-token (TTFT) response latency"
    ],
    stack: ["TypeScript", "Node.js", "Agora RTC", "Google Gemini API", "Deepgram Nova/Aura", "React"],
    github: "https://github.com/Angshurpita/NERV-VOICE",
    stats: "<800ms TTFT · Full Duplex"
  },
  {
    id: "quantara",
    title: "QUANTARA",
    badge: "Hackathon Winner",
    subtitle: "Graph-Theoretic Financial Crime & Smurfing Detection",
    category: "Systems & Algorithms",
    description: "Enterprise financial intelligence platform implementing 7 graph-theory algorithms (cycle detection, layered chains, fan-in/fan-out flows) to identify complex money laundering topologies on high-volume directed transaction networks. Built high-throughput stateless FastAPI backend and Cytoscape.js visual graph canvas, processing 100K+ transaction batches with sub-second execution.",
    highlights: [
      "Awarded 3rd Position at Smart India Hackathon (SIH) Internal Competition",
      "7 graph algorithms for circular smurfing, fan-out dispersal, and mule aggregation",
      "Sub-second execution on 100,000+ directed transaction batches",
      "Interactive Cytoscape.js visualization canvas with real-time anomaly alerts"
    ],
    stack: ["Python", "FastAPI", "NetworkX", "Pandas", "Cytoscape.js", "Firebase"],
    github: "https://github.com/Angshurpita/Quantara",
    stats: "3rd Position SIH · 100K+ Tx Batches"
  },
  {
    id: "pyredis-engine",
    title: "pyredis-engine",
    badge: "Low-Level Systems",
    subtitle: "In-Memory Key-Value Storage Engine from Scratch",
    category: "Real-Time & Systems",
    description: "From-scratch Redis-compatible storage engine in pure Python with zero external dependencies. Parses raw byte-level RESP protocols over asynchronous TCP sockets with non-blocking stream framing and pipelining. Engineered SkipList-based sorted sets with span widths for O(log N) range/rank queries, active key expiration, and background AOF log compaction.",
    highlights: [
      "Zero external dependencies: 100% pure Python systems implementation",
      "Benchmarked at 128,000+ req/sec throughput with pipelined socket requests",
      "SkipList sorted sets with span widths for O(log N) rank and range operations",
      "Active probabilistic expiration & non-blocking background AOF log rewrite"
    ],
    stack: ["Python", "asyncio", "TCP Sockets", "SkipLists", "Concurrency", "Systems Architecture"],
    github: "https://github.com/Angshurpita/pyredis-engine",
    stats: "128,000+ req/sec · Pure Python"
  },
  {
    id: "nerv-viper",
    title: "NERV-VIPER",
    badge: "Founder & Lead",
    subtitle: "Autonomous Multi-Agent Code Security Orchestration",
    category: "AI & LLM Systems",
    description: "Bootstrapped and shipped an autonomous multi-agent code security orchestration platform via Supabase Auth and integrated Stripe/Razorpay payment infrastructure. Designed a 3-layer agentic topology (Directives, Orchestration, Execution) coordinating specialized LLM agents for deterministic AST static analysis and zero-hallucination patch synthesis.",
    highlights: [
      "3-layer agentic topology: Directives, Orchestration, and Execution",
      "Deterministic AST static analysis with automated vulnerability graph generation",
      "Automated regression validation harness ensuring zero-drift patch synthesis",
      "Production deployment with Supabase Auth, Stripe, and Razorpay"
    ],
    stack: ["TypeScript", "Next.js", "Python AST", "Supabase", "Stripe", "Razorpay", "Multi-Agent"],
    live: "https://nerv.co.in",
    github: "https://github.com/Angshurpita/NERV",
    stats: "3 Agent Layers · Zero Hallucination"
  },
  {
    id: "nexustrade",
    title: "NexusTrade",
    badge: "High-Performance",
    subtitle: "Trading Command Center with Sub-Second Market Latency",
    category: "Real-Time & Systems",
    description: "High-performance, professional-grade trading command center. Aggregates real-time price action, deep-history technical charts, and global financial news into a unified, sub-second latency interface—engineered with resilient streaming adapters.",
    highlights: [
      "Sub-second market price updates with low-latency client streaming",
      "Interactive technical charting with deep historical indicators",
      "Global real-time financial news stream integration"
    ],
    stack: ["TypeScript", "React", "TradingView Lightweight", "Financial APIs", "Tailwind CSS"],
    github: "https://github.com/Angshurpita/NexusTrade",
    stats: "Sub-Second Latency · Real-Time"
  },
  {
    id: "algoviz-toolkit",
    title: "AlgoViz Toolkit",
    badge: "Systems & Algorithms",
    subtitle: "Interactive Algorithm Visualization Web Application",
    category: "Systems & Algorithms",
    description: "Interactive algorithm visualization web app demonstrating how core algorithms work through step-by-step execution, real-time controls, time-complexity tracking, and clean architectural separation of algorithmic logic and rendering UI.",
    highlights: [
      "Step-by-step visual execution of sorting, graph search, and tree traversals",
      "Real-time speed controls, step-forward / step-back inspection",
      "Strict separation of algorithmic state machines and rendering layer"
    ],
    stack: ["TypeScript", "React", "Data Structures & Algorithms", "Tailwind CSS"],
    github: "https://github.com/Angshurpita/algoviz-toolkit",
    stats: "Interactive Visualizer · Real-Time"
  },
  {
    id: "manhattan-eda",
    title: "The Manhattan Project — Retail Intelligence",
    badge: "Data & ML",
    subtitle: "Predictive Modeling & CLV Estimation Across 100K+ Records",
    category: "Data Science & Analytics",
    description: "Engineered end-to-end data processing and predictive modeling pipelines across 100K+ transactional records (OmniMart dataset). Architected Customer Lifetime Value (CLV ≈ ₹14.2K, 10x single-order value) estimation models and churn prediction classifiers identifying 27.5% at-risk accounts.",
    highlights: [
      "Processed 100K+ transactional records with automated feature engineering",
      "CLV estimation models (≈ ₹14.2K, 10x single order) & churn classifiers",
      "Identified 27.5% at-risk customer cohort for automated retention interventions",
      "Multivariate statistical testing, anomaly detection & executive dashboards"
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter", "Statistical Modeling"],
    github: "https://github.com/Angshurpita/ByteMe_Challenge1_TMP",
    stats: "100K+ Records · ₹14.2K CLV Model"
  }
];

export const skillsData = {
  "AI & LLM Systems": [
    { name: "RAG & Hybrid Search", level: 98, detail: "Dense vector + BM25 sparse lexical retrieval" },
    { name: "Reciprocal Rank Fusion (RRF)", level: 95, detail: "Rank-based fusion for balanced relevance" },
    { name: "Citation Grounding & AST Verification", level: 96, detail: "Strict refusal & line-range AST mapping" },
    { name: "Multi-Agent Orchestration", level: 94, detail: "Directives, Orchestration, Execution topologies" },
    { name: "LLM Inference & Local Run", level: 92, detail: "Gemma 4 (31B), Gemini, Claude, LLaMA, Ollama" },
    { name: "Embeddings & Vector Search", level: 95, detail: "Sentence-Transformers, cosine distance, indexing" },
    { name: "Prompt Engineering & Guardrails", level: 94, detail: "Deterministic structured output extraction" },
    { name: "Scikit-learn & Predictive ML", level: 88, detail: "Classification, churn modeling, CLV estimation" }
  ],
  "Real-Time & Systems": [
    { name: "WebRTC & Agora RTC", level: 94, detail: "Sub-second bidirectional audio & voice channels" },
    { name: "Duplex Audio STT/TTS Pipelines", level: 95, detail: "Deepgram Nova STT + Aura TTS streaming" },
    { name: "Asyncio & TCP Sockets", level: 96, detail: "Non-blocking event loops, raw byte streaming" },
    { name: "RESP Protocol Parsing", level: 95, detail: "Zero-dependency custom Redis byte framing" },
    { name: "Low-Latency Event-Driven Arch", level: 92, detail: "WebSocket session resilience, sub-800ms TTFT" },
    { name: "REST APIs & Microservices", level: 92, detail: "Stateless high-throughput FastAPI & Node" }
  ],
  "Languages & Core CS": [
    { name: "Python 3.11+", level: 98, detail: "Systems, asyncio, AST, ML, FastAPI, Pytest" },
    { name: "TypeScript / JavaScript", level: 95, detail: "Type-safe full-stack, WebSockets, React" },
    { name: "C++", level: 90, detail: "Low-level memory, systems, data structures" },
    { name: "Java", level: 86, detail: "Object-oriented systems, collections, concurrency" },
    { name: "SQL", level: 90, detail: "Relational modeling, query optimization, indexing" },
    { name: "Data Structures & SkipLists", level: 96, detail: "O(log N) probabilistic trees, graphs, heaps" },
    { name: "Graph Theory Algorithms", level: 95, detail: "Cycle detection, topological sort, flows" },
    { name: "Go (Golang)", level: 75, detail: "Basic concurrent routines, channels" }
  ],
  "Frameworks & Developer Tools": [
    { name: "FastAPI", level: 96, detail: "Async Python high-throughput microservices" },
    { name: "React & Next.js", level: 94, detail: "Modern reactive frontends, SSR, interactive canvases" },
    { name: "Node.js & Express", level: 92, detail: "Event-driven backends, WebSocket adapters" },
    { name: "Redis & Custom Engines", level: 95, detail: "In-memory caching, pub/sub, custom storage" },
    { name: "Supabase & Firebase", level: 92, detail: "Auth, PostgreSQL, real-time sync, storage" },
    { name: "Docker & Linux / Bash", level: 90, detail: "Containerization, shell scripting, POSIX" },
    { name: "Git, Pytest & Ruff", level: 95, detail: "CI/CD, 58+ automated test suites, code quality" }
  ]
};

export const trajectoryData = [
  {
    id: "nerv-viper-founder",
    category: "Industry Experience",
    typeBadge: "Commercial Venture · Founder",
    role: "Founder & Lead AI / Systems Architect",
    organization: "NERV-VIPER",
    url: "https://nerv.co.in",
    period: "Jan 2026 – Present",
    location: "Remote / Kolkata",
    metricBadge: "Autonomous Code Security Orchestration",
    highlights: [
      "Bootstrapped and shipped an autonomous multi-agent code security orchestration platform via Supabase Auth and integrated Stripe/Razorpay payment infrastructure.",
      "Designed a 3-layer agentic topology (Directives, Orchestration, Execution) coordinating specialized LLM agents for deterministic AST static analysis, automated vulnerability graph generation, and zero-hallucination patch recommendations.",
      "Engineered automated regression validation harnesses ensuring zero-drift patch synthesis."
    ],
    stack: ["Supabase Auth", "Stripe / Razorpay", "Python AST", "TypeScript", "Next.js", "Multi-Agent LLMs"]
  },
  {
    id: "manhattan-project",
    category: "Industry Experience",
    typeBadge: "Machine Learning Internship",
    role: "Machine Learning & Data Analytics Intern",
    organization: "The Manhattan Project",
    period: "Aug 2024 – Present (2 Years)",
    location: "Kolkata / Remote",
    metricBadge: "100K+ Records · ₹14.2K CLV Model",
    highlights: [
      "Engineered end-to-end data processing and predictive modeling pipelines across 100K+ transactional records (OmniMart dataset), creating automated feature engineering, cohort segmentation, and validation workflows in Python (Pandas, NumPy).",
      "Architected Customer Lifetime Value (CLV ≈ ₹14.2K, 10× single-order value) estimation models and churn prediction classifiers, identifying 27.5% at-risk accounts to prioritize automated customer retention and multi-channel interventions.",
      "Conducted multivariate statistical testing, trend regression, and operational anomaly detection, translating high-dimensional consumer patterns into executive decision dashboards and strategic category recommendations."
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Statistical Modeling", "Jupyter"]
  },
  {
    id: "gcect-btech",
    category: "Education & Academics",
    typeBadge: "B.Tech Undergraduate Degree",
    role: "B.Tech in Information Technology",
    organization: "Government College of Engineering and Ceramic Technology",
    period: "Aug 2024 – June 2028",
    location: "Kolkata, India",
    metricBadge: "9.72 / 10.00 CGPA · Top 1% Department Rank",
    highlights: [
      "Maintained an exceptional 9.72 / 10.00 CGPA across B.Tech Information Technology curriculum, ranking in the Top 1% of the department.",
      "Rigorous theoretical & applied foundations spanning low-level systems programming, graph algorithms, memory management, operating systems, and distributed networks.",
      "Lead developer and researcher for competitive hackathons, algorithmic initiatives, and production software engineering projects."
    ],
    stack: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Distributed Systems", "C++ / OOP"]
  },
  {
    id: "mckinsey-forward",
    category: "Honors & Leadership",
    typeBadge: "Executive Digital Fellowship",
    role: "McKinsey Forward Program (Batch 2026)",
    organization: "McKinsey & Company",
    period: "Batch 2026",
    location: "Global / Virtual",
    metricBadge: "Digital Leadership & Agile Problem Solving",
    highlights: [
      "Competitively selected for McKinsey & Company's flagship program on digital leadership, structured problem-solving, and agile team execution.",
      "Mastered structured problem-solving frameworks (hypothesis-driven analysis, MECE principle, root cause trees) applied to technological transformation.",
      "Completed intensive modules in executive business communication, change management, and high-performance digital team collaboration."
    ],
    stack: ["Structured Problem Solving", "MECE Principle", "Digital Leadership", "Agile Execution", "Executive Communication"]
  },
  {
    id: "sih-hackathon",
    category: "Honors & Leadership",
    typeBadge: "National Engineering Hackathon",
    role: "3rd Position — Smart India Hackathon (SIH)",
    organization: "Ministry of Education / SIH",
    period: "Competitive Evaluation",
    location: "National / India",
    metricBadge: "3rd Position · QUANTARA Financial Smurfing Detection",
    highlights: [
      "Awarded 3rd Position at Smart India Hackathon Internal Competition for designing and demonstrating the QUANTARA transaction intelligence platform.",
      "Led team of 6 engineers through rapid prototyping, graph data modeling, and backend integration under competitive evaluation timelines.",
      "Architected 7 graph-theory algorithms detecting complex smurfing, cycle round-tripping, and layered chain topologies on 100K+ transaction batches."
    ],
    stack: ["Graph Theory", "NetworkX", "FastAPI", "Cytoscape.js", "Python", "High-Throughput Pipelines"]
  }
];

export const experiences = [
  {
    role: "Founder & Lead AI / Systems Architect",
    company: "NERV-VIPER",
    url: "https://nerv.co.in",
    period: "Jan 2026 – Present",
    type: "Leadership / Commercial Venture",
    location: "Remote / Kolkata",
    highlights: [
      "Bootstrapped and shipped an autonomous multi-agent code security orchestration platform via Supabase Auth and integrated Stripe/Razorpay payment infrastructure.",
      "Designed a 3-layer agentic topology (Directives, Orchestration, Execution) coordinating specialized LLM agents for deterministic AST static analysis, automated vulnerability graph generation, and zero-hallucination patch recommendations.",
      "Engineered automated regression validation harnesses ensuring zero-drift patch synthesis."
    ]
  },
  {
    role: "Machine Learning & Data Analytics Intern",
    company: "The Manhattan Project",
    period: "Aug 2024 – Present (2 Years)",
    type: "Internship",
    location: "Kolkata / Remote",
    highlights: [
      "Engineered end-to-end data processing and predictive modeling pipelines across 100K+ transactional records (OmniMart dataset), creating automated feature engineering, cohort segmentation, and validation workflows in Python (Pandas, NumPy).",
      "Architected Customer Lifetime Value (CLV ≈ ₹14.2K, 10x single-order value) estimation models and churn prediction classifiers, identifying 27.5% at-risk accounts to prioritize automated customer retention and multi-channel interventions.",
      "Conducted multivariate statistical testing, trend regression, and operational anomaly detection, translating high-dimensional consumer patterns into executive decision dashboards and strategic category recommendations."
    ]
  }
];

export const honors = [
  {
    title: "McKinsey Forward Program (Batch 2026)",
    issuer: "McKinsey & Company",
    detail: "Selected for McKinsey & Company's flagship program on digital leadership, structured problem-solving, business communication, and agile execution."
  },
  {
    title: "3rd Position — Smart India Hackathon (SIH) Internal Competition",
    issuer: "Ministry of Education / SIH",
    detail: "Led team of 6 engineers through rapid prototyping, graph data modeling, and backend integration under competitive evaluation timelines for the QUANTARA financial smurfing detection system."
  },
  {
    title: "Academic Distinction — Top 1% Department Rank",
    issuer: "Govt College of Engineering and Ceramic Technology",
    detail: "Maintained a 9.72 / 10.00 CGPA across B.Tech Information Technology curriculum."
  },
  {
    title: "Open-Source & Founder Leadership",
    issuer: "NERV-VIPER (nerv.co.in)",
    detail: "Bootstrapped and launched NERV-VIPER to commercial production with paying global customers and active developer adoption."
  }
];

