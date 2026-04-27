"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "David Okoro",
    role: "CEO, Nexaron",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=84&h=84&fit=crop&auto=format",
    text: "Working with Pixory Flow was a game changer for us. From strategy to launch, their team delivered a product that not only looks incredible but works seamlessly.",
  },
  {
    name: "Amara Diallo",
    role: "Founder, MotionX",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=84&h=84&fit=crop&auto=format",
    text: "The Pixory Flow team understood our vision immediately. They built our platform faster than we thought possible and the result exceeded every expectation.",
  },
  {
    name: "James Kweku",
    role: "CTO, FlowPay",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=84&h=84&fit=crop&auto=format",
    text: "Our fintech dashboard needed to be bulletproof. Pixory Flow delivered clean architecture, pixel-perfect UI, and a backend that handles scale without breaking a sweat.",
  },
  {
    name: "Nadia Essien",
    role: "Head of Brand, Roofy",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=84&h=84&fit=crop&auto=format",
    text: "Our rebrand needed to feel premium and modern. Pixory Flow nailed the identity system, guidelines, and every piece of collateral. Clients notice the difference immediately.",
  },
  {
    name: "Emmanuel Tabi",
    role: "CEO, Lumi Solar",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=84&h=84&fit=crop&auto=format",
    text: "I've worked with three agencies before Pixory Flow. None came close to this level of communication, quality, and speed. They feel like an extension of our in-house team.",
  },
  {
    name: "Sophia Mensah",
    role: "Product Manager, Sivour Kle",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=84&h=84&fit=crop&auto=format",
    text: "From wireframes to a live product in under three weeks. Their no-code expertise helped us validate fast and the handoff was completely smooth. Highly recommend.",
  },
];

const StarRating = ({ delay }: { delay: number }) => (
  <div className="flex gap-1 mt-3">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        width="15" height="15" viewBox="0 0 24 24" fill="white"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + i * 0.06, type: "spring", stiffness: 300 }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>
    ))}
  </div>
);

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const delay = (index % 3) * 0.12;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group flex flex-col h-full"
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(135deg, rgba(34,1,220,0.5), rgba(34,1,220,0.1))' }}
      />
      <div className="relative flex flex-col h-full rounded-2xl border border-white/8 bg-white/3 p-7 overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <Image src={review.avatar} alt={review.name} width={48} height={48} unoptimized className="w-12 h-12 rounded-full object-cover border border-white/10" />
            <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 14px rgba(34,1,220,0.45)' }} />
          </div>
          <StarRating delay={delay} />
        </div>
        <p className="text-white/75 text-base leading-relaxed mt-6 flex-1 font-light">&ldquo;{review.text}&rdquo;</p>
        <div className="w-full h-px bg-white/8 my-5" />
        <div>
          <p className="text-white text-sm font-medium">{review.name}</p>
          <p className="text-white/40 text-xs mt-0.5">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileCarousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full relative">

      {/* Side arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10" style={{ left: '-10px' }}>
        <motion.button
          onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(254,90,122,0.15) 0%, transparent 70%)',
            border: '1px solid rgba(254,90,122,0.2)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="rgba(254,90,122,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>

      {/* Card — with side padding so arrows don't overlap text */}
      <div className="px-6">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/8 bg-[#000000] p-6 relative overflow-hidden"
        >
          {/* Counter */}
          <span className="absolute top-4 right-4 text-white/20 text-xs font-mono">
            {String(current + 1).padStart(2, '0')}/{String(reviews.length).padStart(2, '0')}
          </span>

          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <Image
                src={reviews[current].avatar}
                alt={reviews[current].name}
                width={44}
                height={44}
                unoptimized
                className="w-11 h-11 rounded-full object-cover border border-white/10"
              />
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 14px rgba(34,1,220,0.45)' }} />
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-white/75 text-sm leading-relaxed mt-5 font-light">
            &ldquo;{reviews[current].text}&rdquo;
          </p>

          <div className="w-full h-px bg-white/8 my-4" />

          <div>
            <p className="text-white text-sm font-medium">{reviews[current].name}</p>
            <p className="text-white/40 text-xs mt-0.5">{reviews[current].role}</p>
          </div>
        </motion.div>
      </div>

      {/* Right arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center z-10" style={{ right: '-10px' }}>
        <motion.button
          onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-8 h-8 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(254,90,122,0.15) 0%, transparent 70%)',
            border: '1px solid rgba(254,90,122,0.2)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="rgba(254,90,122,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? '#FE5A7A' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

const NodeGrid = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-[#2201DC]/50"
        style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 2) * 60}%` }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
      />
    ))}
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
      <line x1="15%" y1="20%" x2="29%" y2="80%" stroke="#2201DC" strokeWidth="1" />
      <line x1="29%" y1="80%" x2="43%" y2="20%" stroke="#2201DC" strokeWidth="1" />
      <line x1="43%" y1="20%" x2="57%" y2="80%" stroke="#2201DC" strokeWidth="1" />
      <line x1="57%" y1="80%" x2="71%" y2="20%" stroke="#2201DC" strokeWidth="1" />
      <line x1="71%" y1="20%" x2="85%" y2="80%" stroke="#2201DC" strokeWidth="1" />
    </svg>
  </div>
);

export default function Results() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#000000] py-20 md:py-25">
      <NodeGrid />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(34,1,220,0.1) 40%, transparent 90%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            <span className="text-white/50 text-xs tracking-widest uppercase">Results</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-center lg:gap-57">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold md:font-normal text-white leading-tight md:leading-tight mb-4"
            >
              What It&apos;s Like <br className="hidden sm:block" />
              <span className="text-[#FE5A7A]">Working</span> With Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-base md:text-lg max-w-md font-light leading-relaxed lg:text-left"
            >
              Trusted by forward-thinking brands across industries to design, build, and launch products that perform.
            </motion.p>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="sm:hidden">
          <MobileCarousel />
        </div>

      </div>
    </section>
  );
}