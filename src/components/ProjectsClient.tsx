'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import TiltCard from '@/components/TiltCard';
import ScrambleText from '@/components/ScrambleText';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

interface ProjectDetailsCardProps {
  project: any;
}

const ProjectCardGallery: React.FC<ProjectDetailsCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative z-10"
    >
      <div className="h-full">
        <TiltCard
          className="h-full w-full rounded-3xl bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.06] transition-all duration-500 overflow-visible"
          glowFrom={project.color.split(' ')[1]} // flipped for variety
          glowTo={project.color.split(' ')[0]}
          perspective={1200}
          maxRotateX={12}
          maxRotateY={12}
          translateZ={50}
          data-cursor="view"
          data-cursor-img={project.image}
        >
          {/* Action Layer - Floating above the card structure */}
          <div className="flex flex-col h-full relative z-50">
            
            {/* Header / ID & Buttons */}
            <div className="flex justify-between items-start mb-10 overflow-visible">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} shadow-xl shadow-black/40`}>
                <span className="text-white font-black text-xl italic">{project.id.toString().padStart(2, '0')}</span>
              </div>
              
              <div className="flex flex-wrap justify-end gap-2 max-w-[200px]">
                {project.githubRepo && (
                  <a 
                    href={project.githubRepo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg"
                  >
                    <Terminal className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Source</span>
                  </a>
                )}
                <Link 
                  href={`/projects/${project.slug}`}
                  className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all duration-300 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>Open</span>
                </Link>
              </div>
            </div>

            {/* Info Layer */}
            <div className="mt-auto">
              <div className="mb-2">
                 <span className="text-[10px] font-extrabold text-emerald-400/80 uppercase tracking-[0.3em] bg-emerald-400/5 px-2 py-0.5 rounded-md">
                   {project.category} / {project.year}
                 </span>
              </div>
              
              <Link href={`/projects/${project.slug}`} className="group/title block cursor-pointer mb-4">
                <h3 className="text-3xl font-black text-white group-hover/title:text-emerald-400 transition-colors uppercase italic tracking-tighter leading-none">
                  {project.title}
                </h3>
              </Link>
              
              <p className="text-white/40 text-base leading-relaxed mb-8 font-light line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: any) => (
                  <span key={tag} className="text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-white/10 text-white/30 bg-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
};

export default function ProjectsClient({ projectsList }: { projectsList: any[] }) {
  return (
    <main className="min-h-screen pt-32 pb-40 px-6 md:px-16 w-full relative overflow-hidden flex flex-col items-center">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Atmospheric Blur Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[1000px] h-[1000px] bg-emerald-500/[0.03] blur-[180px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-500/[0.03] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl w-full z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/50">Terminal Index</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter text-white mb-8 leading-[0.8] uppercase flex flex-col items-center">
             <span>Deployments</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-300% animate-gradient-flow">
               Protocol
             </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/30 font-light max-w-2xl mx-auto leading-relaxed">
            Archive of high-integrity security architectures, offensive tooling, and defensive infrastructure.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >
          {projectsList.map((project: any) => (
            <ProjectCardGallery key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Footer link to homepage */}
      <div className="mt-40">
        <Link href="/" className="group flex items-center gap-4 text-white/20 hover:text-emerald-400 transition-all duration-500">
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Return</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </main>
  );
}
