'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

import Magnetic from '@/components/Magnetic';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#0a0a0a] pt-32 pb-8 px-6 md:px-16 overflow-hidden z-20 rounded-t-[3rem] mt-[-2rem] border-t border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Massive CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 w-full"
        >
          <h2 className="text-[14vw] sm:text-[12vw] leading-none font-black tracking-tighter text-white mb-8 hover:text-white/80 transition-colors duration-500 cursor-default uppercase">
            LET&apos;S TALK
          </h2>
          
          <Magnetic strength={0.2}>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300">
              Start a project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </Magnetic>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-16">
            <a href="mailto:contact@pangerlkr.link" className="text-white/60 hover:text-white transition-colors flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
              contact@pangerlkr.link
            </a>
            <a href="tel:+918132872135" className="text-white/60 hover:text-white transition-colors flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></span>
              +91 8132872135
            </a>
          </div>
        </motion.div>

        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom Metadata & Links */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">Local Time</span>
              <span className="text-white/80 text-sm font-medium">{time}</span>
            </div>
          </div>

          <div className="flex gap-5">
            <Magnetic strength={0.4}>
              <a href="https://github.com/pangerlkr" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <GithubIcon />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://linkedin.com/in/pangerlkr" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <LinkedinIcon />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://x.com/panger__lkr" target="_blank" rel="noopener noreferrer" title="X / Twitter" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <TwitterIcon />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://instagram.com/panger__lkr" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <InstagramIcon />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://facebook.com/lkr.panger" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FacebookIcon />
              </a>
            </Magnetic>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-center md:text-right">
            <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">Copyright</span>
            <span className="text-white/80 text-sm font-medium">&copy; {currentYear} Personal Portfolio.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
