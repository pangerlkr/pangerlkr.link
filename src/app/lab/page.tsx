'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TerminalComp from '@/components/Terminal';
import { FlaskConical, ShieldCheck, Database, LayoutPanelTop } from 'lucide-react';

export default function LabPage() {
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
      transition: { duration: 0.6 } 
    }
  };

  return (
    <main className="min-h-screen bg-[#121212] pt-32 pb-20 px-6 md:px-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <FlaskConical size={14} />
            Experimental Zone
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            The Lab.
          </h1>
          <p className="text-lg text-white/40 max-w-xl leading-relaxed">
            Where research meets execution. A secure environment for testing zero-trust protocols and developing defensive strategies.
          </p>
        </motion.div>

        {/* Terminal Section */}
        <motion.div variants={itemVariants} className="mb-24 flex justify-center">
          <TerminalComp />
        </motion.div>

        {/* Lab Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors group">
            <ShieldCheck className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-white mb-4 italic uppercase">Threat Defense</h3>
            <p className="text-white/40 text-sm">Real-time analysis of adversarial patterns using custom behavioral models.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors group">
            <Database className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-white mb-4 italic uppercase">Identity Management</h3>
            <p className="text-white/40 text-sm">Decentralized protocols for ultra-secure identity verification and access control.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors group">
            <LayoutPanelTop className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold text-white mb-4 italic uppercase">Systems Architecture</h3>
            <p className="text-white/40 text-sm">Developing modular security frameworks for scalable infrastructure.</p>
          </motion.div>
        </div>

      </motion.div>
    </main>
  );
}
