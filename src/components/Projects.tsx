'use client';

import { motion } from 'framer-motion';
import { Terminal, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TiltCard from '@/components/TiltCard';
import { PROJECTS_DATA } from '@/data/projects';

// Take the first 3 projects for the home page showcase
const featuredProjects = Object.entries(PROJECTS_DATA).slice(0, 3).map(([slug, data], index) => ({
  ...data,
  id: index + 1,
  slug,
  color: index % 2 === 0 ? 'from-emerald-400/50 to-blue-500/50' : 'from-purple-400/50 to-blue-500/50',
}));

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCardHome: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <div className="block">
        <TiltCard
          className="rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 transition-all duration-500 hover:border-white/[0.2] hover:bg-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl group overflow-visible"
          glowFrom={project.color.split(' ')[0]}
          glowTo={project.color.split(' ')[1]}
          translateZ={40}
          perspective={1400}
          maxRotateX={10}
          maxRotateY={10}
          data-cursor="view"
          data-cursor-img={project.image}
        >
          {/* === Thumbnail with 3D Pop === */}
          <Link href={`/projects/${project.slug}`} className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl origin-center" style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1200 ease-out group-hover:scale-[1.1]"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10" />
          </Link>

          {/* === Interactive Actions Overlay === */}
          <div className="absolute top-8 right-8 flex gap-3 z-50">
             {project.githubRepo && (
               <a 
                 href={project.githubRepo} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl backdrop-blur-md"
               >
                 <Terminal className="w-4 h-4" />
                 <span>Source</span>
               </a>
             )}
             <Link 
               href={`/projects/${project.slug}`}
               className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 shadow-2xl backdrop-blur-md"
             >
               <ExternalLink className="w-5 h-5" />
             </Link>
          </div>

          {/* === Float Text Layer === */}
          <div className="px-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-4 h-px bg-emerald-400/40" />
              <p className="text-[10px] font-black tracking-[0.3em] text-emerald-400/60 uppercase">
                {project.category}
              </p>
            </div>
            
            <Link href={`/projects/${project.slug}`} className="block mb-4">
              <h3 className="text-3xl font-black text-white hover:text-emerald-400 transition-colors uppercase italic tracking-tighter leading-none">
                {project.title}
              </h3>
            </Link>
            
            <p className="text-white/30 text-base leading-relaxed line-clamp-2 font-light italic">
              {project.description}
            </p>
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-40 px-6 md:px-16 z-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-emerald-500/[0.02] blur-[200px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-blue-500/[0.02] blur-[180px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="mb-24 md:mb-32 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-white/5 bg-white/[0.02] mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)] animate-pulse"></span>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/30">Intelligence Assets</span>
          </div>
          
          <h2 className="text-5xl md:text-9xl font-black tracking-[0.02em] text-white italic uppercase leading-[0.8] mb-10">
            Selected <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Deployments.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/20 font-light max-w-3xl mx-auto leading-relaxed">
            A strategic showcase of defensive security architectures and high-end engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {featuredProjects.map((project, index) => (
            <ProjectCardHome key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link href="/projects" className="group relative inline-flex items-center gap-6 px-12 py-6 rounded-full border border-white/10 hover:border-emerald-400/40 transition-all duration-700 bg-white/[0.01]">
             <span className="text-[10px] font-black tracking-[0.6em] uppercase text-white/40 group-hover:text-emerald-400 transition-colors">Connect All Nodes</span>
             <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-emerald-400 transition-all group-hover:translate-x-3" />
             <div className="absolute inset-0 rounded-full bg-emerald-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity blur-[20px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
