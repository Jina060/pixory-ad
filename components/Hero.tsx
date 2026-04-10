"use client";

import DecorativeCurve from './DecorativeCurve';
import DecorativeCircles from './DecorativeCircles';
import DecorativeTriangle from './DecorativeTriangle';
import DecorativeOval from './DecorativeOval';
import CursorFollowDot from './CursorFollowDot';
import DecorativeCircle1 from './DecorativeCircle1';
import Crown from './Crown';
import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WORDS = ["Scale", "Convert", "Dominate", "Grow"];

const RotatingWord = () => {
  const index = useRef(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cycle = () => {
      if (!textRef.current) return;
      animate(textRef.current, { opacity: 0, y: -12 }, { duration: 0.3 }).then(() => {
        index.current = (index.current + 1) % WORDS.length;
        if (textRef.current) textRef.current.textContent = WORDS[index.current];
        animate(textRef.current!, { opacity: 1, y: 0 }, { duration: 0.3 });
      });
    };
    const interval = setInterval(cycle, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={textRef}
      className="inline-block"
      style={{ opacity: 1, transform: 'translateY(0)', color: '#2201DC' }}
    >
      {WORDS[0]}
    </span>
  );
};

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split('');
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: delay } },
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 12, stiffness: 200 } },
    hidden: { opacity: 0, y: 20 },
  };
  return (
    <motion.span style={{ display: 'inline-block' }} variants={container} initial="hidden" animate="visible">
      {letters.map((letter, i) => (
        <motion.span key={i} variants={child} style={{ display: 'inline-block' }}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const PulsingOrb = ({ size, x, y, delay, color }: { size: number; x: string; y: string; delay: number; color: string }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ width: size, height: size, left: x, top: y, background: color, filter: 'blur(70px)' }}
    animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.25, 0.12] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const FloatingParticle = ({ x, y, delay }: { x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-white/30 pointer-events-none"
    style={{ left: x, top: y }}
    animate={{ y: [0, -20, 0], opacity: [0, 0.8, 0] }}
    transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

// Animated grid lines in the background
const GridLines = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 0.5 }}
    style={{
      backgroundImage: `
        linear-gradient(rgba(34,1,220,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,1,220,0.06) 1px, transparent 1px)
      `,
      backgroundSize: '80px 80px',
      maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
    }}
  />
);

// Orbiting ring around a center point
const OrbitRing = ({ size, duration, delay, color }: { size: number; duration: number; delay: number; color: string }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: '50%',
      top: '50%',
      marginLeft: -size / 2,
      marginTop: -size / 2,
      border: `1px solid ${color}`,
    }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
  >
    {/* Orbiting dot */}
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{ background: color, top: -4, left: '50%', marginLeft: -4 }}
    />
  </motion.div>
);

// Scanning line effect
const ScanLine = () => (
  <motion.div
    className="absolute left-0 right-0 pointer-events-none"
    style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(34,1,220,0.4), transparent)',
    }}
    initial={{ top: '0%', opacity: 0 }}
    animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
  />
);

// Corner brackets — techy framing element
const CornerBrackets = () => (
  <div className="absolute inset-0 pointer-events-none hidden md:block">
    {/* Top-left */}
    <motion.div
      className="absolute top-24 left-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M32 2H2V32" stroke="#2201DC" strokeWidth="2" />
      </svg>
    </motion.div>
    {/* Top-right */}
    <motion.div
      className="absolute top-24 right-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 1.3, duration: 0.6 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M0 2H30V32" stroke="#2201DC" strokeWidth="2" />
      </svg>
    </motion.div>
    {/* Bottom-left */}
    <motion.div
      className="absolute bottom-8 left-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M32 30H2V0" stroke="#2201DC" strokeWidth="2" />
      </svg>
    </motion.div>
    {/* Bottom-right */}
    <motion.div
      className="absolute bottom-8 right-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M0 30H30V0" stroke="#2201DC" strokeWidth="2" />
      </svg>
    </motion.div>
  </div>
);


export default function Hero() {
  return (
    <>
      <CursorFollowDot />
      <section
        data-hero-section
        className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <DecorativeCurve />
          <DecorativeCircles />
          <DecorativeTriangle />
          <DecorativeOval />
          <DecorativeCircle1 />

          {/* Grid */}
          <GridLines />

          {/* Scan line */}
          <ScanLine />

          {/* Orbit rings — centered in section */}
          <OrbitRing size={420} duration={18} delay={0} color="rgba(34,1,220,0.15)" />
          <OrbitRing size={580} duration={28} delay={1} color="rgba(254,90,122,0.1)" />
          <OrbitRing size={720} duration={40} delay={0.5} color="rgba(34,1,220,0.07)" />

          {/* Ambient orbs */}
          <PulsingOrb size={400} x="60%" y="-10%" delay={0} color="rgba(254,90,122,0.35)" />
          <PulsingOrb size={300} x="-5%" y="40%" delay={1.5} color="rgba(34,1,220,0.4)" />
          <PulsingOrb size={250} x="75%" y="55%" delay={0.8} color="rgba(34,1,220,0.2)" />

          {/* Floating particles */}
          {[
            { x: "15%", y: "20%", d: 0 },
            { x: "80%", y: "15%", d: 0.5 },
            { x: "25%", y: "70%", d: 1 },
            { x: "70%", y: "75%", d: 1.5 },
            { x: "50%", y: "85%", d: 0.3 },
            { x: "90%", y: "40%", d: 0.9 },
            { x: "40%", y: "10%", d: 0.6 },
            { x: "60%", y: "60%", d: 1.2 },
          ].map((p, i) => (
            <FloatingParticle key={i} x={p.x} y={p.y} delay={p.d} />
          ))}
        </div>

        {/* Corner brackets */}
        <CornerBrackets />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <Crown />

          {/* Headline — same font size as original */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold md:font-normal text-white mb-1 leading-tight md:leading-tight">
            <span className="block">
              <AnimatedText text="We" delay={0} />&nbsp;<AnimatedText text="Design, " delay={0.08} />
              <span className="relative inline-block">
                <span className="inline-block">
                  <AnimatedText text="Build &" delay={0.3} />
                </span>
                <motion.svg
                  className="absolute top-full left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 -mt-2 md:-mt-4 opacity-20 md:opacity-100 z-0 md:z-auto w-16 md:w-auto h-auto"
                  width="84" height="27" viewBox="0 0 84 27" fill="none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0, 0.2, 1], scale: 1, y: [0, -2, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.5 },
                    scale: { duration: 0.5, delay: 0.5 },
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                  }}
                >
                  <motion.path
                    d="M1.23633 1.1875L21.189 21.9515L33.5921 6.85042L48.4218 21.9515L64.5996 6.85042L82.6649 25.1875"
                    stroke="#FE5A7A" strokeWidth="3.42857"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 3, delay: 0.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                  />
                </motion.svg>
              </span>
            </span>
            <span className="block mt-1 md:mt-0">
              <AnimatedText text="Launch Digital" delay={0.5} />
            </span>
            <span className="block mt-1 md:mt-0">
              <AnimatedText text="Product That " delay={0.7} />
              <RotatingWord />
            </span>
          </h1>

          {/* Subtext — about us, not comparing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-white/80 max-w-lg mx-auto mb-12 leading-relaxed font-extralight"
          >
            From idea to execution, Pixory Flow builds premium digital products that help brands launch faster and grow smarter.
          </motion.p>

          {/* CTA — centered, single button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <a href="https://calendly.com/pixoryflow-info/30min" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-[#2201DC] hover:bg-[#1a01b0] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-300 uppercase tracking-wider text-sm overflow-hidden cursor-pointer border border-white"
              >
                <motion.span
                  className="absolute inset-0 bg-white/15 -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <span className="relative z-10">START A PROJECT</span>
              </motion.button>
            </a>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/40 text-xs"
            >
              No commitment · Free strategy call · 30 mins
            </motion.p>
          </motion.div>

         
        </div>
      </section>
    </>
  );
}