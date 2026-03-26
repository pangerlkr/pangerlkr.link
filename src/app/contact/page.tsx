'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Shield, Terminal, Phone } from 'lucide-react';
import React, { useRef, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

import TiltCard from '@/components/TiltCard';

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFocus = (name: string) => setFocusedInput(name);
  const handleBlur = () => setFocusedInput(null);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-16 w-full relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >
        {/* Left Column: Info */}
        <div className="flex flex-col justify-center">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
            <h2 className="text-xl font-medium tracking-widest uppercase text-blue-400">Initiate Contact</h2>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]"
          >
            Secure Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Digital Assets.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-white/50 font-light max-w-lg mb-12">
            Whether you need enterprise-level security consulting, threat hunting, or a zero-trust architecture overhaul, establishing a secure comms channel is the first step.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
            {/* Email Card */}
            <TiltCard glowFrom="from-emerald-500/30" glowTo="to-teal-500/20"
              className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.05] hover:border-white/[0.15] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mb-1">Encrypted Comms</p>
                <a href="mailto:contact@pangerlkr.link" className="text-white hover:text-emerald-400 transition-colors font-medium">contact@pangerlkr.link</a>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard glowFrom="from-blue-500/30" glowTo="to-indigo-500/20"
              className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.05] hover:border-white/[0.15] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mb-1">Direct Line</p>
                <a href="tel:+918132872135" className="text-white hover:text-blue-400 transition-colors font-medium">+91 8132872135</a>
              </div>
            </TiltCard>

            {/* Location Card */}
            <TiltCard glowFrom="from-purple-500/30" glowTo="to-pink-500/20"
              className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.05] hover:border-white/[0.15] transition-all duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mb-1">Location / HQ</p>
                <p className="text-white font-medium">Kohima, Nagaland 797001, India</p>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Right Column: Form with 3D tilt */}
        <motion.div variants={itemVariants}>
          <TiltCard
            glowFrom="from-blue-500/20"
            glowTo="to-emerald-500/20"
            className="rounded-3xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 pointer-events-none" />
            <div className="relative bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:contact@pangerlkr.link?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Name Input */}
                  <div className="relative">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Subject Name</label>
                    <div className={`relative rounded-xl overflow-hidden border transition-colors duration-300 ${focusedInput === 'name' ? 'border-blue-400 bg-blue-400/5' : 'border-white/10 bg-white/5'}`}>
                      <input
                        type="text"
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/20"
                        placeholder="Ghost Protocol"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Secure Email</label>
                    <div className={`relative rounded-xl overflow-hidden border transition-colors duration-300 ${focusedInput === 'email' ? 'border-emerald-400 bg-emerald-400/5' : 'border-white/10 bg-white/5'}`}>
                      <input
                        type="email"
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/20"
                        placeholder="ghost@protocol.dev"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Transmission Data</label>
                  <div className={`relative rounded-xl overflow-hidden border transition-colors duration-300 ${focusedInput === 'message' ? 'border-white/40 bg-white/10' : 'border-white/10 bg-white/5'}`}>
                    <textarea
                      rows={5}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/20 resize-none"
                      placeholder="Enter briefing details..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group overflow-hidden rounded-xl bg-white text-black font-bold uppercase tracking-widest py-4 mt-4"
                >
                  <span className="relative z-10">Transmit Signal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </main>
  );
}
