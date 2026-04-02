'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, Shield, CheckCircle2, TrendingUp, Lock, Terminal, ExternalLink, Cpu, Activity, Zap } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

export default function ProjectDetailClient({ project }: { project: any }) {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-50%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });

  // Scroll animations for main content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Floating background elements
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0d0d0d] text-white selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Dynamic Background Noise/Graphics */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Floating Particles/Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 120, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center mix-blend-difference">
        <Link href="/projects" className="group flex items-center gap-2 text-white/40 hover:text-white transition-all duration-500">
           <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em]">Nodes Return</span>
        </Link>
        <div className="flex items-center gap-4">
           <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Project Case: {project.id}</span>
        </div>
      </nav>

      {/* Hero Header Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 z-10">
        <motion.div 
           style={{ y: headerY, opacity: heroOpacity }}
           className="max-w-6xl w-full"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-400 px-4 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5">
               {project.category}
             </span>
             <span className="w-12 h-px bg-white/10" />
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">{project.year}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic italic-shimmer mb-12"
          >
            {project.title}
          </motion.h1>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="flex flex-wrap gap-8 items-start"
          >
            <p className="max-w-xl text-xl md:text-2xl text-white/40 font-light leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4">
               {project.githubRepo && (
                 <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="relative z-[100]">
                   <Magnetic strength={0.3}>
                     <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform duration-500 shadow-2xl">
                       <Terminal size={16} />
                       View Source
                     </div>
                   </Magnetic>
                 </a>
               )}
               {project.liveUrl && (
                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="relative z-[100]">
                   <Magnetic strength={0.3}>
                     <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-500">
                       <ExternalLink size={16} />
                       Live Deployment
                     </div>
                   </Magnetic>
                 </a>
               )}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
           animate={{ y: [0, 15, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/20"
        >
           <span className="text-[9px] font-black uppercase tracking-[0.5em]">Scroll Decode</span>
           <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* Parallax Hero Image Section */}
      <section className="relative w-full px-6 md:px-12 mb-40 z-10 overflow-hidden">
        <motion.div 
           style={{ scale: heroScale }}
           className="relative aspect-[21/9] w-full rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/5 group"
        >
           <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              priority 
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
           
           {/* Technical Overlay Graphics */}
           <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                 <div className="flex gap-8">
                    <div className="flex flex-col gap-1">
                       <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Lat. Position</span>
                       <span className="text-white font-mono text-sm tracking-widest">37.7749° N</span>
                    </div>
                    <div className="flex flex-col gap-1">
                       <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Status Code</span>
                       <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">200 OK</span>
                    </div>
                 </div>
                 <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                    <Cpu size={24} className="text-white/40" />
                 </div>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Challenge / Solution with Interactive Reveal */}
      <section className="max-w-7xl mx-auto px-6 mb-60 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-40 flex flex-col gap-8"
          >
             <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <TrendingUp size={24} />
             </div>
             <h3 className="text-5xl font-black uppercase italic tracking-tighter text-white">The Conflict.</h3>
             <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
                {project.challenge}
             </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 pt-40 lg:pt-80"
          >
             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Shield size={24} />
             </div>
             <h3 className="text-5xl font-black uppercase italic tracking-tighter text-white">The Resolve.</h3>
             <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed">
                {project.solution}
             </p>
             
             {/* Dynamic Security Indicator */}
             <div className="mt-12 p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                   <Activity className="text-emerald-400/20" size={80} />
                </div>
                <div className="relative z-10 flex flex-col gap-6">
                   <div className="flex items-center gap-3">
                      <Zap size={20} className="text-yellow-400" />
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Encryption Standard</span>
                   </div>
                   <div className="text-3xl font-mono text-white tracking-widest uppercase italic">AES-256 E2EE Enabled</div>
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "100%" }}
                         transition={{ duration: 2, ease: "easeInOut" }}
                         className="h-full bg-emerald-400"
                      />
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll Strategic Phase */}
      <section className="relative py-40 bg-zinc-950 overflow-hidden z-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 mb-24">
           <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic">Execution Protocol</h2>
        </div>

        <div ref={horizontalScrollRef} className="relative h-[600px] overflow-visible">
          <motion.div style={{ x: springX }} className="flex gap-12 px-12 md:px-40 absolute top-0 left-0">
            {project.process.map((item: any, i: number) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -20, scale: 1.02 }}
                className="flex-shrink-0 w-[450px] p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl transition-all duration-500 relative group"
              >
                <div className="absolute top-0 right-0 m-10 text-8xl font-black text-emerald-400/5 group-hover:text-emerald-400/10 transition-colors">
                  {item.step}
                </div>
                <div className="z-10 relative">
                   <div className="w-12 h-1 w-12 bg-emerald-400 mb-10" />
                   <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">{item.title}</h3>
                   <p className="text-lg text-white/40 font-light leading-relaxed italic">
                     {item.desc}
                   </p>
                </div>
              </motion.div>
            ))}
            {/* End Spacer */}
            <div className="w-[400px] flex-shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* Quantifiable Outcomes Section */}
      <section className="py-60 max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-32">
           <h2 className="text-6xl md:text-[9rem] font-black uppercase italic tracking-tighter text-white leading-[0.8]">
              Final <br /> <span className="text-emerald-400">Metrics.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {project.results.map((result: string, i: number) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.8 }}
               className="group flex items-center gap-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
             >
               <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                 <CheckCircle2 size={32} />
               </div>
               <span className="text-2xl md:text-3xl text-white/60 group-hover:text-white transition-colors font-light italic leading-tight">
                  {result}
               </span>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Final Action / Next Nodes */}
      <section className="px-6 py-60 z-10">
        <div className="max-w-7xl mx-auto rounded-[5rem] overflow-hidden relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 opacity-50" />
           <div className="absolute inset-0 bg-[#121212]/80 backdrop-blur-3xl" />
           
           <div className="relative z-10 py-52 px-10 flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="mb-12"
              >
                 <Lock className="text-emerald-400/40" size={120} />
              </motion.div>
              
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white italic uppercase mb-16 leading-none">
                 Secure your <br /> Infrastructure?
              </h2>
              
              <Link href="/contact" className="group relative px-16 py-8 rounded-full bg-white text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-emerald-400 transition-colors duration-500">
                 Initiate Handshake
                 <div className="absolute -inset-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500" />
              </Link>
           </div>
        </div>
      </section>

      {/* Infinite Bottom Marquee */}
      <div className="py-12 border-t border-white/5 bg-[#0a0a0a] overflow-hidden whitespace-nowrap flex">
         {[...Array(10)].map((_, i) => (
           <div key={i} className="flex items-center gap-12 px-12 animate-marquee">
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10">Project: {project.title}</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10">Status: Deployed</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/10">Location: Global Edge</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
           </div>
         ))}
      </div>
    </main>
  );
}
