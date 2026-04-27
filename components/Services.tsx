"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Product Design",
    description: "UX Research · UI Design · Prototyping",
    image:
      "pd.jpg",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive Websites · Mobile Interfaces",
    image:
      "fed.jpg",
  },
  {
    title: "Backend Development",
    description: "Scalable Architecture · API Integrations · Cloud Deployment",
    image:
      "bed.png",
  },
  {
    title: "No-Code & Fast Launch",
    description: "Framer · Webflow · WordPress · MVP Launches",
    image:
      "nc.jpg",
  },
  {
    title: "Branding & Graphics Design",
    description: "Logo & Identity · Brand Guidelines",
    image:
      "gd.jpg",
  },
  {
    title: "SEO and End-To-End Growth",
    description: "Launch Roadmaps · Ongoing Optimization · Dedicated Support",
    image:
      "t2.jpg",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const delay = (index % 3) * 0.12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group rounded-2xl overflow-hidden aspect-square"
    >
      {/* Image */}
      <Image
        src={service.image}
        alt={service.title}
        width={600}
        height={600}
        unoptimized
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Full overlay — darkens whole card subtly */}
      <div className="absolute inset-0 bg-[#020617]/40 transition-opacity duration-300 group-hover:bg-[#020617]/50" />

      {/* Blue glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,1,220,0.25), transparent 60%)",
        }}
      />

      

      {/* Corner accent bottom-right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none z-10">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 30H30V8"
            stroke="#2201DC"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* Bottom label bar — dark overlay with service name */}
      {/* Bottom label bar — floating rectangle not touching edges */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        
       
        <div className="bg-[#000000]/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/8">
          <p className="text-white font-medium text-base md:text-xl leading-9">
            {service.title}
          </p>
          <p className="text-white/45 text-xs mt-1 font-light">
            {service.description}
          </p>
        </div>
        
      </div>

      {/* Scan shimmer on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(34,1,220,0.08) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

const NodeGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-[#2201DC]/50"
        style={{ left: `${10 + i * 20}%`, top: `${30 + (i % 2) * 40}%` }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{
          duration: 2.5 + i * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.20]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="10%"
        y1="30%"
        x2="30%"
        y2="70%"
        stroke="#2201DC"
        strokeWidth="1"
      />
      <line
        x1="30%"
        y1="70%"
        x2="50%"
        y2="30%"
        stroke="#2201DC"
        strokeWidth="1"
      />
      <line
        x1="50%"
        y1="30%"
        x2="70%"
        y2="70%"
        stroke="#2201DC"
        strokeWidth="1"
      />
      <line
        x1="70%"
        y1="70%"
        x2="90%"
        y2="30%"
        stroke="#2201DC"
        strokeWidth="1"
      />
    </svg>
  </div>
);

export default function Services() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#000000] py-20 md:py-25 overflow-hidden">
      <NodeGrid />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(34,1,220,0.1) 50%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header — same structure as Results */}
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
            <span className="text-white/50 text-xs tracking-widest uppercase">
              Our Services
            </span>
          </motion.div>
<div className="flex flex-col md:flex-row md:items-center lg:gap-40">


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold md:font-normal text-white leading-tight md:leading-tight mb-4"
          >
            End-to-End Digital <br className="hidden sm:block" />
            <span className="text-[#FE5A7A]">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-md font-light leading-relaxed lg:text-left"
          >
            We partner with ambitious brands to bring ideas to life — from
            stunning interfaces to powerful backend systems.
          </motion.p>
        </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
