"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { 
    name: "Ikoe .E. Winyawoko", 
    role: "Managing Director", 
    image: "/Team/Ikoe.jpeg",
    description: "Visionary leader with 10+ years of experience in digital transformation and strategic innovation."
  },
  { 
    name: "Victoria Ajibade", 
    role: "Product Lead", 
    image: "/Team/Victoria.jpeg",
    description: "Expert in project delivery and client relations, ensuring seamless execution of all initiatives."
  },
  { 
    name: "George Moses", 
    role: "UI/UX Designer", 
    image: "/Team/Moses.jpeg",
    description: "Creative designer specializing in user-centered design and intuitive digital experiences."
  },
  { 
    name: "Joel Ehabe", 
    role: "IT & Snr. Developer", 
    image: "/Team/Joel.jpeg",
    description: "Full-stack developer with expertise in scalable architectures and cutting-edge technologies."
  },
  { 
    name: "Kumfa Jina", 
    role: "Jnr. Developer", 
    image: "/Team/Jina.jpeg",
    description: "Full-stack developer with strong problem-solving skills and development of innovative web solutions."
  },
  {
    name: "Songe Nkoke Emmanuel",
    role: "No Code & SEO Expert",
    image: "/Team/Songe.jpeg",
    description: "Specialist in no-code development platforms and SEO optimization strategies to boost online visibility."
  },
  {
    name: "Thierry Sanam",
    role: "QA Engineer",
    image: "/Team/Thierry.jpeg",
    description: "Detail-oriented quality assurance expert ensuring flawless performance and user experience across all platforms."
  },
  {
    name: "Ndangha Mba Jean De Dieu",
    role: "Marketing Expert",
    image: "/Team/Jean.jpeg",
    description: "Strategic marketing professional driving brand growth and customer engagement through innovative campaigns."
  },
  {
    name: "Nkefor Benjamin",
    role: "Brand Identity Designer",
    image: "/Team/Benjamin.jpeg",
    description: "Creative brand specialist crafting compelling visual identities that resonate with target audiences."
  }
];

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => isMobile && setHovered(!hovered)}
      className="flex items-center gap-4 p-4 rounded-2xl border border-white/6 bg-white/2 hover:border-[#2201DC]/30 hover:bg-white/4 transition-all duration-300 cursor-default"
    >
      {/* Photo */}
      <div className="relative shrink-0 w-14 h-16 md:w-16 md:h-20 rounded-xl overflow-hidden border border-white/10">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="64px"
        />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
          style={{ background: 'rgba(34,1,220,0.2)' }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold leading-tight truncate">
          {member.name}
        </p>
        <p className="text-violet-400 text-xs mt-1 uppercase tracking-widest leading-tight">
          {member.role}
        </p>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
          transition={{ duration: 0.25 }}
          className="text-white/40 text-xs leading-relaxed font-light mt-2 overflow-hidden"
        >
          {member.description}
        </motion.p>
      </div>

      {/* Dot */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.3, scale: hovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
        className="shrink-0 w-2 h-2 rounded-full bg-[#2201DC]"
      />
    </motion.div>
  );
}

export default function Team() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section className="w-full bg-black pt-10 pb-20 px-6 overflow-hidden">

         {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,1,220,0.1) 50%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />
      
      <div className="max-w-7xl mx-auto">

        <div ref={headerRef} className="flex flex-col items-center text-center mb-16">
          <motion.h2
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-sm sm:text-base leading-relaxed text-center max-w-2xl px-2"
          >
            Creative minds, technical experts, and strategic thinkers bringing
            your digital vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {teamMembers.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}