'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-[#121212]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <Link href="/" className="text-xl font-bold tracking-widest text-white uppercase group flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-black group-hover:scale-110 transition-transform">
            PL
          </div>
          <span className="hidden sm:inline">Panger Lkr</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link key={link.path} href={link.path} className="relative text-sm font-medium tracking-wide uppercase group">
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
        
        <div className="flex items-center gap-6">
          <Link 
            href="/contact"
            className="hidden sm:block px-5 py-2.5 rounded-full border border-white/20 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Initiate Protocol
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a] flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.path} 
                    className={`text-5xl font-bold tracking-tighter uppercase ${
                      pathname === link.path ? 'text-white' : 'text-white/30'
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
              transition={{ delay: 0.4 }}
              className="mt-auto mb-16"
            >
              <div className="w-full h-px bg-white/10 mb-8" />
              <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Secure Channel</p>
              <a href="mailto:contact@pangerlkr.link" className="text-2xl text-white font-light">contact@pangerlkr.link</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
