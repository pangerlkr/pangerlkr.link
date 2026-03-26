'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowFrom?: string;
  glowTo?: string;
  maxRotateX?: number;
  maxRotateY?: number;
  perspective?: number;
  translateZ?: number;
  stiffness?: number;
  damping?: number;
}

export default function TiltCard({
  children,
  className = '',
  glowFrom = 'from-blue-500/30',
  glowTo = 'to-emerald-500/30',
  maxRotateX = 14,
  maxRotateY = 14,
  perspective = 1400,
  translateZ = 60,
  stiffness = 250,
  damping = 25,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness, damping });
  const mouseYSpring = useSpring(y, { stiffness, damping });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxRotateX}deg`, `-${maxRotateX}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxRotateY}deg`, `${maxRotateY}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={`relative group ${className}`}
      >
        {/* Liquid glow overlay */}
        <div
          className={`absolute inset-0 rounded-[inherit] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay bg-gradient-to-tr ${glowFrom} ${glowTo}`}
        />

        {/* Ambient glow behind card */}
        <div
          className={`absolute inset-0 rounded-[inherit] bg-gradient-to-bl ${glowFrom} ${glowTo} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none -z-10`}
          style={{ transform: `translateZ(-${translateZ}px) scale(0.9)` }}
        />

        <div style={{ transform: `translateZ(${translateZ}px)`, transformStyle: 'preserve-3d' }} className="h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
