'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text' | 'view'>('default');
  const [projectImage, setProjectImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('[data-cursor="view"]');
      
      if (card) {
        setCursorType('view');
        const img = card.getAttribute('data-cursor-img');
        setProjectImage(img);
      } else if (target.closest('a') || target.closest('button')) {
        setCursorType('hover');
        setProjectImage(null);
      } else if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'P') {
        setCursorType('text');
        setProjectImage(null);
      } else {
        setCursorType('default');
        setProjectImage(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  const variants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: '#34d399', // emerald-400
      mixBlendMode: 'normal' as const,
    },
    hover: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(4px)',
      mixBlendMode: 'difference' as const,
    },
    view: {
      height: 80,
      width: 80,
      backgroundColor: '#34d399',
      border: 'none',
      mixBlendMode: 'normal' as const,
    },
    text: {
      height: 20,
      width: 4,
      backgroundColor: '#60a5fa', // blue-400
      borderRadius: '2px',
      mixBlendMode: 'normal' as const,
    }
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: 9999,
        pointerEvents: 'none',
        borderRadius: '50%',
      }}
      variants={variants}
      animate={cursorType}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    >
      {cursorType === 'view' && (
        <div className="relative h-full w-full flex items-center justify-center">
          {projectImage && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute w-[180px] aspect-[16/10] rounded-xl overflow-hidden border-4 border-white shadow-2xl z-[-1] pointer-events-none -translate-y-full mb-8 ml-8"
            >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={projectImage} alt="Preview" className="w-full h-full object-cover" />
            </motion.div>
          )}
          <span className="text-black text-[10px] font-black tracking-[0.2em] uppercase">VIEW</span>
        </div>
      )}
    </motion.div>
  );
}
