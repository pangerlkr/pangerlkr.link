'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';

const INITIAL_OUTPUT = [
  'PR-OS Security Terminal [v2.4.0-stable]',
  'Initializing Kernel Modules... [DONE]',
  'Loading Secure Handshaking Protocol... [DONE]',
  'Current Node: Kohima-District-Alpha',
  'Encryption: AES-512 Native Hardened',
  'Status: AUTHENTICATED as guest@pangerlkr.lab',
  '---',
  'Type "help" to list available system commands.',
  ' '
];

const COMMANDS: Record<string, string | string[]> = {
  help: [
    'SYSTEM COMMANDS:',
    '  - about: Core profile information',
    '  - projects: Asset deployment index',
    '  - lab: Hardware & software specs',
    '  - contact: Encrypted comms lines',
    '  - identity: User privilege & IP lookup',
    '  - ls: List lab directory contents',
    '  - scan: Initiate network sweep',
    '  - clear: Purge terminal buffer',
  ],
  about: [
    'IDENTITY: PANGERKUMZUK LONGKUMER',
    'SPECIALIZATION: ZERO-TRUST ARCHITECTURE, OPS-SEC',
    'EXPERTISE: DEFENSIVE STRATEGY, THREAT INTELLIGENCE, HARDENED SYSTEMS',
    'BIO: 5+ years building secure infrastructure in complex environments.'
  ],
  projects: [
    'DEPLOYMENTS:',
    '  - [SOC-ANALYSIS-PLATFORM]: Operational',
    '  - [SECURE-COMM]: Operational',
    '  - [PROXIMITY-SENSE]: Experimental',
    '  - [RED-TEAM-ORCH]: Classified',
  ],
  lab: [
    'HARDWARE:',
    '  - CPU: Ryzen 9 7940HS [Nagaland Grid]',
    '  - GPU: RTX 4070 Mobile Cluster',
    '  - NET: 1Gbps Dedicated Fiber (E2EE Enabled)',
    'LAB STATUS: OPTIMAL'
  ],
  contact: [
    'SECURE CHANNELS:',
    '  - PGP: contact@pangerlkr.link',
    '  - TEL: +91 8132872135 [Secure Line]',
    '  - SIG: @pangerlkr.01'
  ],
  identity: [
    'UID: 1004 (guest)',
    'GID: 1004 (guest)',
    'GROUPS: observer, researcher',
    'SHELL: /bin/psh',
    'LOCATION: Kohima, Nagaland'
  ],
  ls: [
    'drwxr-xr-x  projects/',
    'drwxr-xr-x  security_logs/',
    '-rw-r--r--  manifest.txt',
    '-rw-r--r--  private_key.pem [ENCRYPTED]',
    '-rwxr-xr-x  neural_net.sh'
  ],
  scan: [
    'Scanning network 192.168.1.0/24...',
    '[+] 192.168.1.1: Gateway Found [HARDENED]',
    '[+] 192.168.1.44: Lab-Node-01 [ACTIVE]',
    '[+] 192.168.1.102: Intrusion Detection Node [ACTIVE]',
    'Scan Complete. 3 hosts alive.'
  ]
};

const MATRIX_MESSAGES = [
  'Wake up, researcher...',
  'The Lab has you.',
  'Follow the white Ethernet cable.',
  'Knock, knock.'
];

export default function TerminalComp() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>(INITIAL_OUTPUT);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const playBlip = (freq = 400, type: OscillatorType = 'sine', duration = 0.05) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + duration);
    } catch {}
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex);
          setInput(history[history.length - 1 - nextIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmdInput = input.trim();
    const cmd = cmdInput.split(' ')[0].toLowerCase();
    
    if (!cmdInput) return;

    playBlip(600, 'square', 0.1);
    const newOutput = [...output, `guest@pangerlkr.lab:~$ ${cmdInput}`];

    if (cmd === 'clear') {
      setOutput([]);
      setInput('');
      setHistory([cmdInput, ...history]);
      setHistoryIndex(-1);
      return;
    }

    if (cmd === 'matrix') {
      setIsMatrixMode(!isMatrixMode);
      newOutput.push(...MATRIX_MESSAGES);
      if (!isMatrixMode) {
        newOutput.push('>>> SYSTEM OVERRIDE: MATRIX_PROTOCOL_INITIALIZED');
      } else {
        newOutput.push('>>> SYSTEM STABILIZED: EXITING_MATRIX_MODE');
      }
    } else if (cmd === 'cat') {
      const args = cmdInput.split(' ').slice(1);
      if (args.length === 0) {
        newOutput.push('cat: missing operand. Usage: cat [filename]');
      } else if (args[0] === 'manifest.txt') {
        newOutput.push('System Manifest:', '- Type: Lab Instance', '- Uptime: 452:12:04', '- Status: Secure');
      } else {
        newOutput.push(`cat: ${args[0]}: Permission denied (or encrypted stream)`);
      }
    } else if (COMMANDS[cmd]) {
      const response = COMMANDS[cmd];
      if (Array.isArray(response)) {
        newOutput.push(...response);
      } else {
        newOutput.push(response as string);
      }
    } else {
      newOutput.push(`sh: command not found: ${cmd}. Type "help" for a list of valid modules.`);
    }

    newOutput.push(' ');
    setOutput(newOutput);
    setHistory([cmdInput, ...history]);
    setHistoryIndex(-1);
    setInput('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      onClick={focusInput}
      className={`relative w-full max-w-4xl h-[600px] overflow-hidden flex flex-col font-mono shadow-[0_0_50px_rgba(16,185,129,0.15)] backdrop-blur-3xl group border transition-all duration-1000 ${
        isMatrixMode 
          ? 'bg-black border-emerald-500 shadow-[0_0_80px_rgba(16,185,129,0.3)] text-emerald-400' 
          : 'bg-[#0a0a0a] border-emerald-500/30 text-emerald-400/90 rounded-xl'
      }`}
    >
      <MatrixRain active={isMatrixMode} />
      
      {/* CRT Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      {/* Glow / Flicker Effect */}
      <div className={`absolute inset-0 pointer-events-none z-40 animate-pulse ${isMatrixMode ? 'bg-emerald-500/[0.03]' : 'bg-emerald-500/[0.01]'}`} />

      {/* Terminal Header */}
      <div className={`relative z-[60] px-6 py-3 flex items-center justify-between border-b transition-colors duration-1000 ${
        isMatrixMode ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-emerald-500/10 border-emerald-500/20'
      }`}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
        </div>
        <div className="flex items-center gap-4">
           <div className="text-[9px] uppercase font-black tracking-[0.2em] text-emerald-500 /60 hidden sm:block">STATUS: SECURE_CHANNEL_READY</div>
           <div className={`text-[10px] uppercase tracking-widest font-bold ${isMatrixMode ? 'text-white' : 'text-[#27c93f]'}`}>Node: P-Lab-Beta {isMatrixMode && '(MATRIX_ACTIVE)'}</div>
        </div>
      </div>
      
      {/* Terminal Main Area */}
      <div 
        ref={scrollRef}
        className="relative z-20 flex-1 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500/20 custom-scrollbar selection:bg-emerald-500/20 selection:text-white"
      >
        <AnimatePresence>
          {output.map((line, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              key={i} 
              className={`mb-1.5 min-h-[1.2em] leading-relaxed break-words relative z-20 ${
                line.startsWith('guest@') ? 'text-blue-400 font-bold' : 
                line.includes('error') || line.includes('denied') ? 'text-red-400' :
                line.includes('[+]') ? 'text-emerald-300 font-bold' : 
                line.includes('Wake up') || line.includes('Follow the white') ? 'text-emerald-200' : ''
              }`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
        
        <form onSubmit={handleCommand} className="flex relative items-center z-20">
          <span className="text-blue-400 font-bold mr-2 whitespace-nowrap">guest@pangerlkr.lab:~$</span>
          <input
            ref={inputRef}
            type="text"
            autoFocus
            spellCheck={false}
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setInput(e.target.value);
              playBlip(300, 'sine', 0.02);
            }}
            className="flex-1 bg-transparent border-none outline-none text-emerald-400 caret-emerald-500 font-mono text-base"
          />
        </form>
      </div>

      {/* Terminal Footer */}
      <div className={`relative z-30 border-t px-6 py-2 flex justify-between text-[8px] font-black uppercase tracking-[0.3em] text-white/20 transition-colors duration-1000 ${
        isMatrixMode ? 'bg-black border-emerald-500/40 text-emerald-500/40' : 'bg-black/40 border-white/5'
      }`}>
         <div>Handshake: Established</div>
         <div>Encryption: AES-512-GCM</div>
         <div>Load: {isMatrixMode ? '98.7%' : '2.1%'}</div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.25);
        }
      `}</style>
    </div>
  );
}
