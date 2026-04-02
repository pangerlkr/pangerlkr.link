'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Atmosphere() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#121212]">
      {/* Dynamic Gradient Blobs */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-100, 150, -100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-emerald-500/[0.04] blur-[140px] rounded-full"
      />
      
      <motion.div
        animate={{
          x: [150, -150, 150],
          y: [100, -150, 100],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[15%] w-[70vw] h-[70vw] bg-blue-500/[0.05] blur-[150px] rounded-full"
      />

      <motion.div
        animate={{
          x: [-200, 200, -200],
          y: [200, -200, 200],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] left-[20%] w-[90vw] h-[90vw] bg-purple-500/[0.03] blur-[160px] rounded-full"
      />

      {/* Subtle Noise Texture on top of gradients */}
      <div className="absolute inset-0 bg-[#121212] mix-blend-color opacity-20" />
    </div>
  );
}
