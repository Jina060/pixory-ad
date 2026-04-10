"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Codelin",
    description: "File taxes 60% faster — effortless and intuitive",
    image: "Codelin.png",
  },
  {
    name: "Flowpay",
    description: "Serving clients seamlessly across multiple regions",
    image: "Flowpay.png",
  },
  {
    name: "Lumi",
    description: "Building family trust through compassionate health care",
    image: "Lumi.png",
  },
  {
    name: "Motionx",
    description: "A bold creative presence built to attract premium clients",
    image: "Motionx.png",
  },
  {
    name: "Mullian3",
    description: "Streamlined fintech UI driving faster payment adoption",
    image: "Mullian 3.png",
  },
  {
    name: "RapidLogix",
    description: "Logistics platform scaled for high-volume operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    name: "Emmanuel Works",
    description: "Portfolio that converts visitors into paying clients",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
  },
  {
    name: "JKP Solutions",
    description: "Enterprise-grade web presence with measurable ROI",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=800&q=80",
  },
];

// Duplicate for seamless infinite loop
const allProjects = [...projects, ...projects];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="relative shrink-0 w-[75vw] sm:w-95 md:w-85 lg:w-90 rounded-2xl overflow-hidden bg-[#000000] p-2">
    {/* Inner frame with image */}
    <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
      <Image
        src={project.image}
        alt={project.name}
        fill
        unoptimized
        className="object-contain object-top"
      />

      {/* Gradient overlay — fades up from bottom, covers ~45% */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(2,6,23,0.97) 0%, rgba(2,6,23,0.85) 25%, rgba(2,6,23,0.4) 45%, transparent 65%)',
        }}
      />

      {/* Floating info rectangle on top of gradient */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-[#000000]/80 backdrop-blur-md border border-white/8 rounded-xl px-5 py-3.5">
          {/* Project name */}
          <p className="text-white font-medium text-sm md:text-lg leading-tight">
            {project.name}
          </p>
          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-2.5" />
          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </div>

     

      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-7 h-7 pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M20 2H2V20" stroke="#2201DC" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      </div>
    </div>
  </div>
);

// Desktop: continuous CSS animation scroll
const DesktopScroll = () => (
  <div className="hidden sm:block overflow-hidden w-full">
    <style>{`
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .scroll-track {
        display: flex;
        gap: 24px;
        width: max-content;
        animation: scrollLeft 45s linear infinite;
      }
      .scroll-track:hover {
        animation-play-state: paused;
      }
    `}</style>
    <div className="scroll-track">
      {allProjects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  </div>
);

// Mobile: slow one-card-at-a-time auto scroll
const MobileScroll = () => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3800);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="sm:hidden w-full overflow-hidden">
      <div className="relative w-full" style={{ height: 'calc(75vw * 5/4 + 16px)' }}>
        {projects.map((project, i) => {
          const offset = i - current;
          // Handle wrap-around
          const adjustedOffset =
            offset > total / 2 ? offset - total :
            offset < -total / 2 ? offset + total : offset;

          return (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{
                x: `${adjustedOffset * 100}%`,
                opacity: adjustedOffset === 0 ? 1 : 0.3,
                scale: adjustedOffset === 0 ? 1 : 0.92,
              }}
              transition={{
                duration: 0.9,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {projects.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full bg-white"
            animate={{
              width: i === current ? 20 : 6,
              opacity: i === current ? 1 : 0.25,
            }}
            style={{ height: 6 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#000000] py-20 md:py-32 overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(34,1,220,0.1) 50%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Header — same structure as other sections */}
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#FE5A7A]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-white/50 text-xs tracking-widest uppercase">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold md:font-normal text-white leading-tight md:leading-tight mb-4"
          >
            <span className="text-[#FE5A7A]">Trusted</span> By Startups <br className="hidden sm:block" />
            &amp; Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-xl font-light leading-relaxed"
          >
            A growing collection of digital products we&apos;ve designed, built, and launched for ambitious brands around the world.
          </motion.p>
        </div>
      </div>

      {/* Scroll tracks — full width, outside the max-w container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full"
      >
        <DesktopScroll />

        {/* Mobile: padded to match section margins */}
        <div className="sm:hidden px-6">
          <MobileScroll />
        </div>
      </motion.div>

    </section>
  );
}