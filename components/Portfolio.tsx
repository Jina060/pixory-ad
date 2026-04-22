"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Codelin",
    description: "Describe what you want to build - Codelin generates production-ready code, UI, logic in seconds.",
    image: "Codelin.png",
  },
  {
    name: "Flowpay",
    description: "FlowPay helps you track spending, automate savings, and grow healthier financial habits all in one simple app.",
    image: "Flowpay.png",
  },
  {
    name: "Lumi Solar",
    description: "Harnessing renewable power through advanced solar, wind, and next-generation energy systems.",
    image: "Lumi.png",
  },
  {
    name: "Motionx",
    description: "Personalized training plans, certified coaches, and real results you can see and feel.",
    image: "Motionx.png",
  },
  {
    name: "Mullian3",
    description: "Step into the next generation of the internet powered by secure, transparent, and decentralized technologies.",
    image: "Mullian3.png",
  },
  {
    name: "Delux Spa",
    description: "Revitalize your skin with premium skincare treatments that enhance your natural beauty.",
    image: "DeluxSpa.png",
  },
  {
    name: "Grower Ai",
    description: "Simple AI tool designed to help you scale your business ",
    image: "GrowerAi.png",
  },
  {
    name: "kimi.Ai",
    description: "The All-in-one intelligence platform for data- driven organization",
    image: "kimiai.png",
  },
  {
    name: "Marinex",
    description: "Connecting continents with precision logistics and operational excellence.",
    image: "Marinex.png",
  },
  {
    name: "Monify",
    description: "Manage payments, Manage your money securely with fast transfers, savings plans, and 24/7 digital banking services.",
    image: "Monify.png",
  },
  {
    name: "Nexaron",
    description: "Build in Web3 with ease using our platform’s multi-chain connectivity and AI-driven smart contracts.",
    image: "Nexaron.png",
  },
  {
    name: "Roofy",
    description: "Professional roofing services for homes and businesses installation, repairs, and maintenance you can rely on.",
    image: "Roofy.png",
  },
  {
    name: "Sivour Kle",
    description: "Experience skincare and cosmetics crafted to enhance your natural radiance with luxury ingredients and flawless results.",
    image: "SivourKle.png",
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
const MobileScroll = () => (
  <div className="sm:hidden overflow-hidden w-full">
    <style>{`
      @keyframes scrollLeftMobile {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .scroll-track-mobile {
        display: flex;
        gap: 16px;
        width: max-content;
        animation: scrollLeftMobile 60s linear infinite;
      }
    `}</style>
    <div className="scroll-track-mobile">
      {allProjects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  </div>
);



export default function Portfolio() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#000000] py-20 md:py-25 overflow-hidden">

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

<div className="flex flex-col md:flex-row md:items-center lg:gap-30">
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
            className="text-white/50 text-base md:text-lg max-w-md font-light leading-relaxed lg:text-right"
          >
            A growing collection of digital products we&apos;ve designed, built, and launched for ambitious brands around the world.
          </motion.p>
        </div>
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