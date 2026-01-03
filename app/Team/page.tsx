"use client";
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  ArrowLeft, 
  Code, 
  Terminal, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';

export default function TeamPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    {
      name: "Pinaki",
      role: "Core Architect",
      handle: "@pinaki_dev",
      bio: "Experienced in systems programming, data science and AI/ML with Python3 and .NET Development with C#, System Design with JAVA and Web Development with Next.js and Typescript",
      focus: "Backend Logic, Funnel Architecture, R&D",
      stack: ["Rust", "Python", "System Design", "C#", ".NET"],
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Bishal",
      role: "Core Architect",
      handle: "@bishal_ui",
      bio: "Experienced in Backend Development with Rust and Typescript, Research in Pipelines and Chain Derrivatives, Web Development with Next.js, react and Rust Web Frameworks with Tokio",
      focus: "Complier Architecture, Systems Design, R&D", 
      stack: ["TypeScript", "React 19", "Rust", "C++", "Compiler Architecture"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 overflow-x-hidden">
      {/* Dynamic Cursor Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 40%)`
        }}
      />

      {/* Header Navigation */}
      <nav className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK_TO_HOME
          </a>
          <div className="text-xl font-bold tracking-tighter">ALBEDO <span className="text-white/30 text-xs font-mono ml-2">/ TEAM</span></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 mb-4 tracking-widest uppercase">
            Project Contributors
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Meet the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/20">Architects.</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed font-mono">
            Our Team at AlBDO, trying to make it big with our research in Web Development and Complier Design.
          </p>
          <p className="text-lg text-white/50 leading-relaxed font-mono">
            "We're in the Major Leagues Jackie!" - Cyberpunk 2077
            </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {teamMembers.map((member, i) => (
            <div key={i} className="group relative">
              {/* Animated Border Glow */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${member.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-lg`} />
              
              <div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
                {/* Background ID Watermark */}
                <div className="absolute -right-10 -bottom-10 opacity-[0.02] rotate-12 pointer-events-none">
                   <Terminal size={300} />
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl font-bold shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                      {member.name[0]}
                    </div>
                    <div className="flex gap-2">
                      <SocialLink icon={<Github className="w-5 h-5" />} />
                      <SocialLink icon={<Twitter className="w-5 h-5" />} />
                      <SocialLink icon={<Linkedin className="w-5 h-5" />} />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-sm font-mono text-blue-400 mb-6">{member.role}</p>
                    <p className="text-white/60 mb-8 leading-relaxed max-w-md italic">
                      "{member.bio}"
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">What we do</h4>
                      <div className="flex items-center gap-3 text-sm text-white/80">
                        <Code className="w-4 h-4 text-white/30" />
                        {member.focus}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">Our Poisons</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.stack.map((tech, t) => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-mono text-white/50 group-hover:text-white group-hover:border-white/30 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="py-20 text-center opacity-20 pointer-events-none">
        <div className="text-[150px] font-black tracking-tighter select-none">CONTRIBUTORS</div>
      </footer>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-white/40 hover:text-white">
      {icon}
    </a>
  );
}