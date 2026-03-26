'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';

interface Props {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: Props) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 25% to 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);
  // Pointer events: only interactive when actually visible
  const pointerEvents2 = useTransform(opacity2, (v) => (v > 0.1 ? 'auto' : 'none'));

  // Section 3: 55% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);
  // Pointer events: only interactive when actually visible
  const pointerEvents3 = useTransform(opacity3, (v) => (v > 0.1 ? 'auto' : 'none'));

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Section 1 — non-clickable */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white text-center leading-[0.9]">
          Panger Lkr
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 font-medium tracking-[0.2em] text-center uppercase">
          Cybersecurity Professional <br className="sm:hidden" />& Entrepreneur
        </p>
      </motion.div>

      {/* Section 2 — clickable ONLY when visible */}
      <motion.div
        style={{ opacity: opacity2, y: y2, pointerEvents: pointerEvents2 }}
        className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-16 md:px-32"
      >
        <Link href="/projects" className="inline-block group hover:scale-[1.02] transition-transform duration-300 max-w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-[1.1] text-white mix-blend-difference group-hover:text-emerald-400 transition-colors">
            Securing the digital frontier.
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-emerald-400/50 group-hover:bg-emerald-400 mt-6 rounded-full transition-colors" />
          <p className="text-white/60 mt-4 text-lg sm:text-xl tracking-wide font-light group-hover:text-white/90 transition-colors">
            View featured deployments &rarr;
          </p>
        </Link>
      </motion.div>

      {/* Section 3 — clickable ONLY when visible */}
      <motion.div
        style={{ opacity: opacity3, y: y3, pointerEvents: pointerEvents3 }}
        className="absolute inset-0 flex flex-col justify-center items-end px-8 sm:px-16 md:px-32 text-right"
      >
        <Link href="/projects" className="inline-flex flex-col items-end group hover:scale-[1.02] transition-transform duration-300 max-w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-[1.1] text-white mix-blend-difference group-hover:text-blue-400 transition-colors">
            Bridging innovation and defense.
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-400/50 group-hover:bg-blue-400 mt-6 rounded-full self-end transition-colors" />
          <p className="text-white/60 mt-4 text-lg sm:text-xl tracking-wide font-light group-hover:text-white/90 transition-colors">
            Explore core projects &rarr;
          </p>
        </Link>
      </motion.div>
    </div>
  );
}
