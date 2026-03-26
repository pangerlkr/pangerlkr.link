'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TiltCard from './TiltCard';

const projects = [
  {
    id: 1,
    title: 'NexusCipherGuard',
    category: 'Next-Gen Encryption Protocol',
    image: '/project_1.png',
    link: '/projects',
    accent: 'from-emerald-400/50 to-blue-500/50',
  },
  {
    id: 2,
    title: 'Threat Intelligence Platform',
    category: 'Automated Threat Hunting',
    image: '/project_2.png',
    link: '/projects',
    accent: 'from-purple-400/50 to-blue-500/50',
  },
  {
    id: 3,
    title: 'Zero Trust Architecture',
    category: 'Enterprise Security Consulting',
    image: '/project_3.png',
    link: '/projects',
    accent: 'from-blue-400/50 to-emerald-400/50',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="relative z-10"
    >
      <Link href={project.link} className="block">
        <TiltCard
          className="rounded-3xl bg-white/[0.03] border border-white/[0.06] p-5 transition-all duration-500 hover:border-white/[0.2] hover:bg-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          glowFrom={project.accent.split(' ')[0]}
          glowTo={project.accent.split(' ')[1]}
          translateZ={60}
          perspective={1400}
          maxRotateX={14}
          maxRotateY={14}
        >
          {/* === Image thumbnail w/ 3D pop === */}
          <div
            style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.12]"
            />
            {/* bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80 z-10" />
          </div>

          {/* === Text content floating above === */}
          <div
            style={{ transform: 'translateZ(40px)' }}
            className="px-2 pb-2"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                {project.category}
              </p>
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white text-white group-hover:text-black">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-16 z-20">
      {/* Subtle background glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl">
            A showcase of recent ventures merging high-end defensive security with modern technological innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
