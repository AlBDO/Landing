"use client";
import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  GitBranch, 
  ArrowRight, 
  Layers, 
  Activity, 
  Box, 
  Github,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function AlbedoLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      
      {/* Dynamic Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      
      <div className="fixed inset-0 z-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} 
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            ALBEDO
          </div>
          <div className="flex gap-6 text-sm font-medium text-white/60">
            <Link href="/Team" className="hover:text-white transition-colors">Team</Link>
            <a href="#how-it-works" className="hover:text-white transition-colors">Architecture</a>
            <a href="https://github.com/AlBDO" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10">
          
          {/* Left: Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              v0.3.0 ALPHA DEVELOPMENT
            </div>
          
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              2026 Entry for GSOC
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1]">
              Next.js Rendering, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                Perfected by Rust.
              </span>
            </h1>
            
            <p className="text-lg text-white/60 max-w-xl leading-relaxed">
              Next.js meets its match with Albedo — the AI-powered framework that optimizes component rendering order using Rust-based analysis and Markov prediction.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all">
                Start Optimizing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-lg font-medium border border-white/20 hover:bg-white/5 transition-all text-white/80 font-mono text-sm">
                npm install albedo-cli
              </button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-xl blur opacity-30" />
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="ml-4 text-xs font-mono text-white/40">albedo-scanner — zsh</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-white/80">
                <div className="flex gap-2">
                  <span className="text-green-400">➜</span>
                  <span>albedo scan ./app</span>
                </div>
                <div className="text-white/50 pb-2">[INFO] Initializing Rust backend...</div>
                
                <div className="flex justify-between text-xs text-white/40 border-b border-white/10 pb-1 mb-2">
                  <span>COMPONENT</span>
                  <span>PRIORITY</span>
                  <span>BITRATE</span>
                </div>

                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                  <span className="text-blue-300">Header.tsx</span>
                  <span className="text-red-400 font-bold">CRITICAL</span>
                  <span>1.2kb</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-blue-300">HeroBanner.tsx</span>
                  <span className="text-orange-400">HIGH</span>
                  <span>45.0kb</span>
                </div>
                <div className="flex justify-between items-center p-2 opacity-60">
                  <span className="text-blue-300">Footer.tsx</span>
                  <span className="text-gray-400">DEFERRED</span>
                  <span>2.4kb</span>
                </div>
                
                <div className="pt-4 text-green-400">
                  ✔ Optimization complete. Gain: +42% TTI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[
            { label: 'Improvement', value: '40 % +', sub: 'Faster TTI' },
            { label: 'Overhead', value: '0 ms', sub: 'Runtime Cost' },
            { label: 'Accuracy', value: '98 %', sub: 'Markov Prediction' },
            { label: 'Setup', value: '1 cmd', sub: 'Zero Config' },
          ].map((stat, i) => (
            <div key={i} className="p-8 text-center group hover:bg-white/5 transition-colors">
              <div className="text-3xl font-bold mb-1 tracking-tight group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
              <div className="text-sm font-medium text-white/50">{stat.label}</div>
              <div className="text-xs text-white/30 font-mono mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Section */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Evolving Architetcture</h2>
            <p className="text-white/60 max-w-2xl">
              Albedo doesn't just lazy load components. It understands how your users traverse your application
              and pre-calculates the optimal render path.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
            {[
              { 
                icon: <Terminal className="w-6 h-6" />, 
                title: "Rust Scanner", 
                desc: "Analyzes AST and file metrics in real-time.",
                meta: ["Static Analysis", "Type Inference"]
              },
              { 
                icon: <Activity className="w-6 h-6" />, 
                title: "Priority Calculation", 
                desc: "Assigns weight based on bitrate and complexity.",
                meta: ["Heuristic Alg", "Bitrate Map"]
              },
              { 
                icon: <GitBranch className="w-6 h-6" />, 
                title: "Markov Prediction", 
                desc: "Simulates 100 iterations of user state transitions.",
                meta: ["ML Model", "Predictive Loading"]
              },
              { 
                icon: <Zap className="w-6 h-6" />, 
                title: "Instruction Injection", 
                desc: "Next.js receives optimal hydration order.",
                meta: ["Hydration Control", "React 19 Ready"]
              }
            ].map((step, i) => (
              <div key={i} className="relative pl-12 md:pl-16 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] top-1 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center text-white/50 group-hover:border-white group-hover:text-white transition-all z-10">
                  {step.icon}
                </div>
                
                {/* Card */}
                <div className="bg-white/[0.03] border border-white/10 p-6 rounded-xl hover:bg-white/[0.06] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <div className="flex gap-2">
                      {step.meta.map((tag, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-black/50 text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repositories Grid */}
      <section id="repos" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Ecosystem</h2>
              <p className="text-white/60">Modular architecture allowing for standalone usage.</p>
            </div>
            <a href="https://github.com/orgs/AlBDO/repositories" className="text-sm font-mono border-b border-white/30 pb-1 hover:border-white transition-all">
              VIEW ALL ON GITHUB
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Albedo-cli",
                icon: <Terminal className="w-8 h-8 mb-6 text-white/40" />,
                desc: "Scaffolding tool. Sets up Next.js + Rust bridge in seconds.",
                link: "https://github.com/AlBDO/Alpha-cli"
              },
              {
                title: "Component-Scanner",
                icon: <Layers className="w-8 h-8 mb-6 text-white/40" />,
                desc: "The core analysis engine. Handles AST parsing and weighting.",
                link: "https://github.com/AlBDO/alpha-2"
              },
              {
                title: "Markov-Predictor",
                icon: <Cpu className="w-8 h-8 mb-6 text-white/40" />,
                desc: "AI model for predictive path rendering and prefetching.",
                link: "https://github.com/AlBDO/alpha-3",
                highlight: true
              }
            ].map((repo, i) => (
              <a 
                key={i} 
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  repo.highlight 
                    ? 'bg-white text-black border-transparent hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]' 
                    : 'bg-black border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className={repo.highlight ? "text-black/60" : ""}>{repo.icon}</div>
                  {repo.highlight && (
                    <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">LATEST</span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{repo.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 ${repo.highlight ? 'text-black/70' : 'text-white/50'}`}>
                  {repo.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold tracking-wide uppercase">
                  View Repo <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Box className="w-5 h-5" />
            <span className="font-mono text-sm">ALBEDO_FRAMEWORK</span>
          </div>
          
          <div className="text-sm text-white/40 flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-right">
            <span>© 2025 AlBDO</span>
            <span>Developed by Pinaki & Bishal</span>
          </div>
        </div>
      </footer>

    </div>
  );
}