"use client";

import DecorativeCurve from './DecorativeCurve';
import DecorativeCircles from './DecorativeCircles';
import DecorativeTriangle from './DecorativeTriangle';
import DecorativeOval from './DecorativeOval';
import CursorFollowDot from './CursorFollowDot';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useState, useEffect } from 'react';
import DecorativeCircle1 from './DecorativeCircle1';
import Crown from './Crown';

// Component to display text without animation
const StaticText = ({ text }: { text: string }) => {
  return <span>{text}</span>;
};

export default function Hero() {
 const [isMobile, setIsMobile] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize(); // call it inside the handler instead
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

if (!mounted) {
  return null;
}

  return (
    <LazyMotion features={domAnimation}>
      {!isMobile && <CursorFollowDot />}

      <section
        data-hero-section
        className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          {!isMobile && (
            <>
              <DecorativeCurve />
              <DecorativeCircles />
              <DecorativeTriangle />
              <DecorativeOval />
              <DecorativeCircle1 />
            </>
          )}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-3 text-center">
          <Crown />

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold md:font-normal text-white mb-1 leading-tight md:leading-tight">
            <span className="block">
              <StaticText text="We Build Digital" />
            </span>

            <span className="block mt-1 md:mt-0">
              <span className="relative inline-block">
                <span className="inline-block">
                  <StaticText text="Products " />
                </span>

                <m.svg
                  className="absolute top-full left-1/2 -translate-x-1/2 md:left-2 md:translate-x-0 -mt-2 md:-mt-4 opacity-20 md:opacity-100 z-0 md:z-auto w-10 md:w-auto h-auto"
                  width="84"
                  height="27"
                  viewBox="0 0 84 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, 0.2, 1],
                    scale: 1,
                    y: [0, -2, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.5 },
                    scale: { duration: 0.5, delay: 0.5 },
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }
                  }}
                >
                  <m.path
                    d="M1.23633 1.1875L21.189 21.9515L33.5921 6.85042L48.4218 21.9515L64.5996 6.85042L82.6649 25.1875"
                    stroke="#FE5A7A"
                    strokeWidth="3.42857"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0.5
                    }}
                  />
                </m.svg>
              </span>

              <StaticText text=" That Turn" />
            </span>

            <span className="block mt-1 md:mt-0">
              <StaticText text="Visitors Into Customers" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-lg mx-auto mb-12 leading-relaxed font-extralight">
            Pixory Flow is a web design and development agency that has helped brands generate over $1.76 million through high-performing digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact-us"
              className="hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <button className="bg-[#2201DC] hover:bg-[#1d4ed8] text-white font-semibold px-10 rounded-full transition-all duration-300 uppercase tracking-wider text-sm border border-white cursor-pointer h-14 w-56 leading-none flex items-center justify-center">
                START A PROJECT
              </button>
            </Link>

            <Link
              href="https://calendly.com/pixoryflow-info/30min"
              className="hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-10 rounded-full transition-all duration-300 uppercase tracking-wider text-sm border border-white cursor-pointer h-14 w-56 leading-none flex items-center justify-center">
                BOOK A CALL
              </button>
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}