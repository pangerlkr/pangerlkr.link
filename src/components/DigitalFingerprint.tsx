'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DigitalFingerprint() {
  const [stats, setStats] = useState({
    ip: '127.0.0.1',
    os: 'Unknown OS',
    browser: 'Generic Agent',
    status: 'SCANNING...'
  });

  useEffect(() => {
    // Basic detection
    const userAgent = window.navigator.userAgent;
    let os = 'Unknown OS';
    if (userAgent.indexOf('Win') !== -1) os = 'Windows 11';
    if (userAgent.indexOf('Mac') !== -1) os = 'macOS';
    if (userAgent.indexOf('Linux') !== -1) os = 'Linux Enterprise';
    
    let browser = 'Unknown Browser';
    if (userAgent.indexOf('Chrome') !== -1) browser = 'Google Chrome';
    else if (userAgent.indexOf('Safari') !== -1) browser = 'Safari Engine';
    else if (userAgent.indexOf('Firefox') !== -1) browser = 'Firefox Quantum';

    // Simulated IP fetch (local simulation)
    const timer = setTimeout(() => {
      setStats({
        ip: '192.168.1.' + Math.floor(Math.random() * 255),
        os,
        browser,
        status: 'SECURE'
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
       initial={{ opacity: 0, x: -20 }}
       animate={{ opacity: 1, x: 0 }}
       className="fixed bottom-12 left-12 z-[99] hidden lg:block"
    >
      <div className="flex flex-col gap-1 p-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/5 font-mono text-[8px] uppercase tracking-widest text-white/30">
        <div className="flex items-center gap-2">
           <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-emerald-500/80">Digital_Fingerprint</span>
        </div>
        <div className="mt-2">Visitor_IP: <span className="text-white/60">{stats.ip}</span></div>
        <div>System_OS: <span className="text-white/60 text-[7px]">{stats.os}</span></div>
        <div>Agent_ID: <span className="text-white/60 text-[7px]">{stats.browser}</span></div>
        <div className="mt-1 pt-1 border-t border-white/5">
           Status: <span className={stats.status === 'SECURE' ? 'text-emerald-500/80' : 'text-yellow-500/50'}>{stats.status}</span>
        </div>
      </div>
    </motion.div>
  );
}
