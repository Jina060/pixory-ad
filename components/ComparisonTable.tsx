"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComparisonItem {
  feature: string;
  freelancers: boolean;
  outsourcing: boolean;
  pixoryflow: boolean;
}

const COMPARISON_DATA: ComparisonItem[] = [
  { feature: "Dedicated Project Manager", freelancers: false, outsourcing: false, pixoryflow: true },
  { feature: "Fixed Pricing Model",        freelancers: false, outsourcing: false, pixoryflow: true },
  { feature: "Quality Assurance",          freelancers: false, outsourcing: false, pixoryflow: true },
  { feature: "24/7 Support",               freelancers: false, outsourcing: false, pixoryflow: true },
  { feature: "Expert Team",                freelancers: false, outsourcing: false, pixoryflow: true },
];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2" fill="rgba(16,185,129,0.1)" />
      <path d="M8 12l3 3 5-5" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <circle cx="12" cy="12" r="10" stroke="#6b7280" strokeWidth="2" fill="rgba(107,114,128,0.1)" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ComparisonTable() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = left swipe (forward), -1 = right swipe (back)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % COMPARISON_DATA.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + COMPARISON_DATA.length) % COMPARISON_DATA.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX; // reset
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section className="relative pt-10 pb-10 md:py-20 px-6 bg-[#000000]">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-12 uppercase tracking-tight text-center mb-6">
            Why Choose PixoryFlow?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Compare PixoryFlow, freelancers, and outsourcing vendors.
            The difference in features and capabilities is clear.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <div className="grid grid-cols-4 bg-[#FE5A7A]">
              {["Feature", "PixoryFlow", "Freelancers", "Outsourcing Vendor"].map((label, i) => (
                <div key={label} className={`p-4 text-center ${i < 3 ? "border-r border-zinc-700" : ""}`}>
                  <h4 className="text-white font-medium">{label}</h4>
                </div>
              ))}
            </div>
            {COMPARISON_DATA.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-4 border-b border-zinc-800 ${index === COMPARISON_DATA.length - 1 ? 'border-b-0' : ''}`}
              >
                <div className="p-4 border-r border-zinc-700">
                  <h5 className="text-zinc-300 text-sm font-medium">{item.feature}</h5>
                </div>
                <div className="p-4 border-r border-zinc-700 flex justify-center">{item.pixoryflow ? <CheckIcon /> : <XIcon />}</div>
                <div className="p-4 border-r border-zinc-700 flex justify-center">{item.freelancers ? <CheckIcon /> : <XIcon />}</div>
                <div className="p-4 flex justify-center">{item.outsourcing ? <CheckIcon /> : <XIcon />}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide wrapper — clips the animation */}
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                >
                  {/* Feature Header */}
                  <div className="bg-[#FE5A7A] p-6 text-center">
                    <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                      Feature {currentSlide + 1} of {COMPARISON_DATA.length}
                    </p>
                    <h3 className="text-white text-lg font-semibold">
                      {COMPARISON_DATA[currentSlide].feature}
                    </h3>
                  </div>

                  {/* Comparison Cards */}
                  <div className="p-6 space-y-4">
                    {[
                      { label: "PixoryFlow", sub: "Our Agency",       val: COMPARISON_DATA[currentSlide].pixoryflow },
                      { label: "Freelancers", sub: "Independent",     val: COMPARISON_DATA[currentSlide].freelancers },
                      { label: "Outsourcing Vendor", sub: "External Agency", val: COMPARISON_DATA[currentSlide].outsourcing },
                    ].map(({ label, sub, val }) => (
                      <div key={label} className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700 flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium text-sm">{label}</h4>
                          <p className="text-zinc-400 text-xs mt-0.5">{sub}</p>
                        </div>
                        {val ? <CheckIcon /> : <XIcon />}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {COMPARISON_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#FE5A7A] w-6' : 'bg-zinc-600 w-2 hover:bg-zinc-500'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <div className="flex items-center justify-center gap-2 mt-4 text-zinc-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Swipe to compare</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}