'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, LockOpen } from 'lucide-react';

export default function EasterEgg() {
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newInput = (input + e.key).toLowerCase().slice(-5);
      setInput(newInput);
      
      if (newInput === 'sudo' || newInput === 'panger') {
        setShow(true);
        setTimeout(() => setShow(false), 5000); // Auto close after 5s
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.9, y: -20 }}
           className="fixed bottom-12 right-12 z-[10001] w-80 p-6 rounded-2xl bg-black border-2 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.3)] backdrop-blur-2xl"
        >
           <div className="flex items-center gap-4 mb-4">
             <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
               <ShieldAlert />
             </div>
             <div>
               <h4 className="text-emerald-400 font-bold uppercase tracking-tighter italic">Privilege Escalation</h4>
               <p className="text-[10px] text-emerald-400/50 uppercase font-bold tracking-widest">SUDO_ACCESS_GRANTED</p>
             </div>
           </div>

           <div className="space-y-3">
             <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-emerald-500/10 transition-colors cursor-pointer">
               <div className="flex items-center gap-2">
                 <Terminal size={14} className="text-emerald-400" />
                 <span className="text-xs text-white/70">View Source Code</span>
               </div>
               <span className="text-[10px] text-white/20 uppercase font-mono group-hover:text-emerald-400">ROOT</span>
             </div>
             <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between group hover:bg-emerald-500/10 transition-colors cursor-pointer">
               <div className="flex items-center gap-2">
                 <Cpu size={14} className="text-emerald-400" />
                 <span className="text-xs text-white/70">System Diagnostics</span>
               </div>
               <span className="text-[10px] text-white/20 uppercase font-mono group-hover:text-emerald-400">DEBUG</span>
             </div>
           </div>

           <motion.div 
             initial={{ width: '0%' }}
             animate={{ width: '100%' }}
             transition={{ duration: 5, ease: 'linear' }}
             className="absolute bottom-0 left-0 h-1 bg-emerald-500" 
           />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
