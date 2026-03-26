'use client';


import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Terminal } from 'lucide-react';
import React, { useRef } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Nexus Cipher Guard',
    description: 'Enterprise-level zero-trust architecture and threat hunting platform.',
    tags: ['Next.js', 'Cybersecurity', 'Framer Motion'],
    color: 'from-blue-500 to-emerald-500',
  },
  {
    id: 2,
    title: 'Ghost Protocol API',
    description: 'Encrypted communication layer for secure data transmission.',
    tags: ['Node.js', 'Cryptography', 'Redis'],
    color: 'from-purple-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Sentinel Dashboard',
    description: 'Real-time monitoring and analytics for distributed systems.',
    tags: ['React', 'WebGL', 'Three.js'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Windows 11 Portfolio',
    description: 'Meticulously replicated OS UI/UX for personal showcasing.',
    tags: ['TypeScript', 'TailwindCSS', 'Zustand'],
    color: 'from-blue-400 to-indigo-600',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

interface ProjectCardProps {
  project: typeof projects[0];
}

import TiltCard from '@/components/TiltCard';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative z-10"
    >
      <TiltCard
        className="h-full w-full rounded-3xl bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.05] transition-colors duration-500"
        glowFrom={project.color.split(' ')[0]}
        glowTo={project.color.split(' ')[1]}
        perspective={1000}
        maxRotateX={15}
        maxRotateY={15}
        translateZ={75}
      >
        {/* 3D Content Layers */}
        <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full z-20">
          <div className="flex justify-between items-start mb-12">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.color} shadow-lg shadow-black/50`}>
              <span className="text-white font-bold text-xl">{project.id.toString().padStart(2, '0')}</span>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Terminal className="w-4 h-4 text-white/70" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ExternalLink className="w-4 h-4 text-white/70" />
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <h3 style={{ transform: "translateZ(50px)" }} className="text-2xl font-bold tracking-wide text-white mb-4">{project.title}</h3>
            <p style={{ transform: "translateZ(25px)" }} className="text-white/50 text-base leading-relaxed mb-8">
              {project.description}
            </p>

            <div style={{ transform: "translateZ(30px)" }} className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40 bg-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-16 w-full relative overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
            Featured <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Deployments.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 font-light max-w-2xl mx-auto">
            A curated showcase of high-end engineering, secure infrastructure, and dynamic interfaces built for scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
