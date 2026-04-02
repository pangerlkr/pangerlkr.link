'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Terminal, Activity } from 'lucide-react';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Handshake...');

  useEffect(() => {
    const statuses = [
      'Initializing Handshake...',
      'Verifying Zero-Trust Identity...',
      'Scaling Threat Intelligence...',
      'Hardening System Memory...',
      'Bypassing Firewall Voids...',
      'System Ready. Access Granted.'
    ];

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 800);
          return 100;
        }
        
        // Dynamic status text update
        const statusIdx = Math.floor((prev / 100) * statuses.length);
        setStatusText(statuses[statusIdx]);
        
        return prev + 1;
      });
    }, 35); // Approx 3.5 seconds to load

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-[#0d0d0d] flex flex-col items-center justify-center p-6"
        >
          {/* Central Logo / Pulse */}
          <div className="relative mb-16">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" 
            />
            <div className="relative w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl overflow-hidden">
              <img src="/panger-lkr.png" alt="Panger Lkr Logo" className="w-20 h-20 object-contain" />
            </div>
          </div>

          <div className="w-full max-w-sm">
            {/* Progress Label */}
            <div className="flex justify-between items-end mb-3">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-1">Status</span>
                <span className="text-xs font-mono text-emerald-400 italic lowercase tracking-tight">
                  {statusText}
                </span>
              </div>
              <span className="text-xl font-black text-white italic tracking-tighter">
                {percent}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                style={{ width: `${percent}%` }}
                layout
              />
            </div>
            
            {/* Real-time "scanning" line below */}
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="h-[1px] w-full bg-white/20 mt-8 opacity-20"
            />
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 flex flex-col items-center">
             <div className="text-[10px] uppercase font-bold text-white/20 tracking-[0.5em] mb-2">Authenticated Security Suite</div>
             <div className="text-[9px] font-mono text-white/10 italic">Revision 1.0.4 BUILD_STABLE</div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
