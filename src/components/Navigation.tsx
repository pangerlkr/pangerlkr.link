'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Magnetic from '@/components/Magnetic';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const playBlip = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1200, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.05);

      gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      console.log('Audio error:', e);
    }
  };

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'The Lab', path: '/lab' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-black/60 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent'
        }`}
      >
        <Link 
          href="/" 
          onMouseEnter={playBlip}
          className="text-xl font-bold tracking-widest text-white uppercase group flex items-center gap-2"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden group-hover:scale-110 transition-transform border border-white/10 bg-black/20">
            <img src="/panger-lkr.png" alt="Panger Lkr Logo" className="w-full h-full object-cover" />
          </div>
          <span className="hidden sm:inline">Panger Lkr</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                onMouseEnter={playBlip}
                className="relative text-sm font-medium tracking-wide uppercase group"
              >
                <span className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
        {/* Security Status Pulse */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 mr-6 translate-y-0.5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <div className="relative">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse border border-emerald-400/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-[7px] uppercase font-bold tracking-[0.2em] text-emerald-400/50 leading-none mb-0.5 font-mono">Status</span>
            <span className="text-[9px] font-black uppercase text-emerald-400 tracking-tighter leading-none font-mono">Internal_Stable</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Magnetic strength={0.2} className="hidden sm:block">
            <Link 
              href="/contact"
              onMouseEnter={playBlip}
              className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              Initiate Protocol
            </Link>
          </Magnetic>

          {/* Mobile Toggle */}
          <button 
            onClick={() => {
              setIsOpen(!isOpen);
              playBlip();
            }}
            className="flex flex-col gap-1.5 z-[110] md:hidden p-2"
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-white rounded-full" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white rounded-full self-end" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8, width: 32 } : { rotate: 0, y: 0, width: 16 }}
              className="w-4 h-0.5 bg-white rounded-full self-end" 
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100vw' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-black flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path} 
                    onClick={playBlip}
                    className={`text-5xl font-bold tracking-tighter uppercase transition-colors ${
                      pathname === link.path ? 'text-white' : 'text-white/20 hover:text-white/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-16"
            >
              <div className="w-full h-px bg-white/5 mb-8" />
              <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.3em] mb-4">Secure Channel</p>
              <a href="mailto:contact@pangerlkr.link" className="text-2xl text-white font-light hover:text-emerald-400 transition-colors">contact@pangerlkr.link</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
