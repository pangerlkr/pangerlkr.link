'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Globe, Rocket, Terminal, Zap, Fingerprint, Target, Activity, ShieldCheck, Briefcase } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import Magnetic from '@/components/Magnetic';
import ScrambleText from '@/components/ScrambleText';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6
      } 
    }
  };

  const techStack = [
    { name: 'Penetration Testing', category: 'Offensive' },
    { name: 'Vulnerability Assessment', category: 'Security' },
    { name: 'Threat Hunting', category: 'Defensive' },
    { name: 'Social Engineering', category: 'Offensive' },
    { name: 'Network Security', category: 'Systems' },
    { name: 'Risk Advisory', category: 'Business' },
    { name: 'Phishing Simulation', category: 'Offensive' },
    { name: 'Hardening', category: 'Defensive' }
  ];

  return (
    <main className="min-h-screen bg-[#121212] pt-32 pb-20 px-6 md:px-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Fingerprint size={14} />
            Identity Verified: pangerlkr
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
            <ScrambleText text="The architect of" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              digital resilience.
            </span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl leading-relaxed">
            Pangerkumzuk Longkumer, known as <span className="text-white font-bold">Panger Lkr</span>, is a cybersecurity professional and entrepreneur from Nagaland, India.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          
          {/* Core Philosophy Card */}
          <div className="md:col-span-8 md:row-span-2">
            <TiltCard className="h-full w-full bg-white/[0.02] border-white/5">
              <div className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-emerald-400 font-mono text-sm uppercase tracking-widest">
                    <Activity size={18} />
                    Mission Briefing
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">“Security is not broken by sophistication. <br/> It is broken by oversight.”</h3>
                  <p className="text-white/60 leading-relaxed text-lg italic">
                    I operate with a simple reality: most systems are not breached because they are advanced, but because they are misconfigured, misunderstood, or blindly trusted.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-3xl">OFFENSIVE</span>
                    <span className="text-white/40 text-xs uppercase tracking-widest">Mindset</span>
                  </div>
                  <div className="w-px h-10 bg-white/10 mx-4" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-3xl">DEFENSIVE</span>
                    <span className="text-white/40 text-xs uppercase tracking-widest">Execution</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Arsnel Stack Card */}
          <div className="md:col-span-4 md:row-span-3">
            <TiltCard className="h-full w-full bg-emerald-500/5 border-emerald-500/20 overflow-hidden relative">
              <div className="p-8 h-full flex flex-col z-10 relative">
                <Terminal className="text-emerald-400 mb-6" size={32} />
                <h3 className="text-2xl font-bold text-white mb-6">Expertise</h3>
                <div className="flex flex-col gap-4">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all hover:translate-x-1">
                      <span className="text-white/80 text-sm font-medium">{tech.name}</span>
                      <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">{tech.category}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <p className="text-white/40 text-sm italic">
                    "Security is not a tool you install. It is a mindset you enforce."
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-0" />
            </TiltCard>
          </div>

          {/* Venture Card 1: NEXUSCIPHERGUARD */}
          <div className="md:col-span-4 md:row-span-2">
            <TiltCard className="h-full w-full bg-blue-500/5 border-blue-500/20">
              <div className="p-8 h-full flex flex-col">
                <ShieldCheck className="text-blue-400 mb-4" size={28} />
                <h4 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">Venture Alpha</h4>
                <h3 className="text-xl font-bold text-white mb-4">NEXUSCIPHERGUARD India</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  A regional cybersecurity force bridging the gap between awareness and implementation through VAPT and social engineering simulations.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-white font-bold italic">Nagaland, India</span>
                  <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded-full">HQ</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Venture Card 2: Aegis Mind */}
          <div className="md:col-span-4 md:row-span-2">
            <TiltCard className="h-full w-full bg-purple-500/5 border-purple-500/20">
              <div className="p-8 h-full flex flex-col">
                <Briefcase className="text-purple-400 mb-4" size={28} />
                <h4 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-2">Operational Reach</h4>
                <h3 className="text-xl font-bold text-white mb-4">Aegis Mind Technologies</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Successfully acquired this Bangalore-based tech powerhouse to expand technical capabilities beyond regional boundaries.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-white font-bold italic">Bangalore, India</span>
                  <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase rounded-full">ACQUISITION</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Strategy Vision Card */}
          <div className="md:col-span-8 md:row-span-2">
            <TiltCard className="h-full w-full border-white/5 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5" />
               <div className="p-10 relative z-10 h-full flex flex-col justify-center">
                 <Target className="text-emerald-400 mb-6" size={32} />
                 <h3 className="text-3xl font-black text-white italic tracking-tighter mb-4 uppercase">The Strategic Vision</h3>
                 <p className="text-white/60 leading-relaxed text-xl max-w-3xl">
                   To build a cybersecurity ecosystem in North-East India that establishes technology and safety as a core business layer, rooted in Nagaland with national reach.
                 </p>
                 <div className="mt-8 flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 text-xs font-mono tracking-widest uppercase">Offensive Recon</div>
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 text-xs font-mono tracking-widest uppercase">Defensive Strategy</div>
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 text-xs font-mono tracking-widest uppercase">Entrepreneurial Journey</div>
                 </div>
               </div>
            </TiltCard>
          </div>

          {/* Advisory & Leadership */}
          <div className="md:col-span-4 md:row-span-2">
            <TiltCard className="h-full w-full bg-white/[0.02] border-white/10">
              <div className="p-8 h-full flex flex-col">
                <Globe className="text-white mb-4" size={28} />
                <h4 className="text-white/30 font-mono text-xs uppercase tracking-widest mb-2">Social Contribution</h4>
                <h3 className="text-lg font-bold text-white mb-4">Cybersecurity Advisor: MMB Cyber School</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  Strategic and technical guidance for digital literacy and cyber awareness initiatives at a community-led non-profit.
                </p>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* Methodology Section - The Dual Lens */}
        <motion.div 
          variants={itemVariants}
          className="my-12 py-16 px-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden"
        >
          <div className="max-w-4xl">
            <h3 className="text-3xl font-black text-white italic tracking-tighter mb-4 uppercase flex items-center gap-4">
              <Rocket className="text-emerald-400" />
              Operational Flow
            </h3>
            <p className="text-white/30 text-sm mb-12 max-w-xl">
              Understanding how systems fail is the first step in building systems that withstand real-world threats.
            </p>
          </div>
          
          <div className="flex gap-8 overflow-x-auto pb-10 scroll-hide snap-x">
            {/* Step 1 */}
            <div className="flex-shrink-0 w-80 p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/5 snap-start hover:border-emerald-500/20 transition-colors group">
              <div className="text-5xl font-black text-white/5 mb-6 font-mono group-hover:text-emerald-500/10 transition-colors uppercase">Recon</div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Attack Surface Mapping</h4>
              <p className="text-white/40 text-sm leading-relaxed">Understanding intruder workflows and mapping hidden entry points before an actual hit occurs.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex-shrink-0 w-80 p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/5 snap-start hover:border-blue-500/20 transition-colors group">
              <div className="text-5xl font-black text-white/5 mb-6 font-mono group-hover:text-blue-500/10 transition-colors uppercase">Demo</div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Exploitation Analysis</h4>
              <p className="text-white/40 text-sm leading-relaxed">Live attack demonstrations and social engineering simulations to prove real-world vulnerability risks.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex-shrink-0 w-80 p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/5 snap-start hover:border-purple-500/20 transition-colors group">
              <div className="text-5xl font-black text-white/5 mb-6 font-mono group-hover:text-purple-500/10 transition-colors uppercase">Harden</div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Risk Mitigation</h4>
              <p className="text-white/40 text-sm leading-relaxed">Applying structure and awareness to institutional defense, moving from paper security to physical resilience.</p>
            </div>
            
            {/* Step 4 */}
            <div className="flex-shrink-0 w-80 p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/5 snap-start hover:border-emerald-500/20 transition-colors group">
              <div className="text-5xl font-black text-white/5 mb-6 font-mono group-hover:text-emerald-500/10 transition-colors uppercase">Pulse</div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter italic">Continuous Advisory</h4>
              <p className="text-white/40 text-sm leading-relaxed">Iterative feedback loops ensuring that technical systems remain aligned with security-first organisational thinking.</p>
            </div>
          </div>
          
          <style jsx>{`
            .scroll-hide::-webkit-scrollbar {
              height: 6px;
            }
            .scroll-hide::-webkit-scrollbar-track {
              background: rgba(255,255,255,0.02);
              border-radius: 10px;
            }
            .scroll-hide::-webkit-scrollbar-thumb {
              background: rgba(52, 211, 153, 0.2);
              border-radius: 10px;
            }
          `}</style>
        </motion.div>

        {/* Philosophy Board */}
        <motion.div variants={itemVariants} className="mt-20 py-24 border-t border-white/5">
            <h2 className="text-center text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-16">Principles of Operation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                   <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs text-emerald-400">01 / Prevention</h3>
                   <p className="text-white/40 leading-relaxed italic">Prevention is always cheaper than recovery. Reputations are built on proactive design, not post-breach patches.</p>
                </div>
                <div>
                   <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs text-blue-400">02 / Simplicity</h3>
                   <p className="text-white/40 leading-relaxed italic">Simplicity is the most exploited weakness. Systems must be hardened from the core out, starting with human awareness.</p>
                </div>
                <div>
                   <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs text-purple-400">03 / Reputation</h3>
                   <p className="text-white/40 leading-relaxed italic">Reputation is the only currency that compounds in cybersecurity. Secure lines and integrity are non-negotiables.</p>
                </div>
            </div>
        </motion.div>

        {/* Final CTA Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[180px] mt-12">
          <div className="md:col-span-12 md:row-span-2">
            <TiltCard className="h-full w-full group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 h-full flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-center md:text-left">
                  <Zap className="text-yellow-400 mb-4 group-hover:scale-125 transition-transform" size={48} />
                  <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">Ready to harden your systems?</h3>
                  <p className="text-white/40 text-lg">Secure lines are open for high-stakes collaborations.</p>
                </div>
                <div className="w-full md:w-auto">
                  <Magnetic strength={0.2}>
                    <a href="/contact" className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-emerald-400 transition-all text-xl uppercase tracking-tighter italic shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      Initiate Protocol
                    </a>
                  </Magnetic>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

      </motion.div>

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>
    </main>
  );
}
