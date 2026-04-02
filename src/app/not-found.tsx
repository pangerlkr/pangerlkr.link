'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center p-6 text-center font-mono">
      {/* Glitchy 404 Text */}
      <div className="relative mb-12">
        <motion.h1 
           animate={{ 
             x: [-2, 2, -2],
             opacity: [1, 0.8, 1]
           }}
           transition={{ duration: 0.1, repeat: Infinity }}
           className="text-9xl font-black text-white/5 tracking-tighter"
        >
          404
        </motion.h1>
        <div className="absolute inset-0 flex items-center justify-center text-emerald-400">
           <ShieldAlert size={80} className="animate-pulse" />
        </div>
      </div>

      {/* Access Denied Label */}
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Access_Denied</h2>
        <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
           ERR_SECURE_PERIMETER_VIOLATION
        </div>
        <p className="text-white/30 text-sm max-w-sm mx-auto leading-relaxed italic">
           The requested protocol or subdirectory does not exist within the current security manifold. Retracing to a known secure zone is advised.
        </p>
      </div>

      {/* Terminal Signature */}
      <div className="mb-12 p-4 rounded-xl bg-white/5 border border-white/10 text-left text-[10px] text-emerald-400/50 w-full max-w-md">
         <div className="mb-1">guest@pangerlkr:~$ ping /requested-path</div>
         <div className="mb-1">PING_FAIL: Target not resolved.</div>
         <div>pangerlkr_os_v1.0: Retrying connection to head_node...</div>
      </div>

      {/* Action Button */}
      <Link href="/">
        <motion.div
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase italic tracking-tighter rounded-full hover:bg-emerald-400 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          Back to Secure Zone
        </motion.div>
      </Link>
    </main>
  );
}
