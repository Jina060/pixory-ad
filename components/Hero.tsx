"use client";

import DecorativeCurve from "./DecorativeCurve";
import DecorativeCircles from "./DecorativeCircles";
import DecorativeTriangle from "./DecorativeTriangle";
import DecorativeOval from "./DecorativeOval";
import CursorFollowDot from "./CursorFollowDot";
import Link from "next/link";
import { LazyMotion, domAnimation, m, motion } from "framer-motion";
import { useState, useEffect } from "react";
import DecorativeCircle1 from "./DecorativeCircle1";
import Crown from "./Crown";

// Component to display text without animation
const StaticText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
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

        <div className="relative z-10 mx-auto px-3 text-center">
          <Crown />

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[78px] font-bold md:font-normal text-white mb-1 leading-tight md:leading-tight">
            <span className="block">
              <StaticText text="Get a Free Website" />
            </span>

            <span className="block mt-1 md:mt-0">
              <span className="relative inline-block">
                <span className="inline-block">
                  <StaticText text="Strategy Session" />
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
                    y: [0, -2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.5 },
                    scale: { duration: 0.5, delay: 0.5 },
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2,
                    },
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
                      repeatDelay: 0.5,
                    }}
                  />
                </m.svg>
              </span>

              <span className="text-[#FE5A7A]">
                <StaticText text=" ($250 Value)" />
              </span>
            </span>

            <span className="block mt-1 md:mt-0">
              <StaticText text="Before Your Competitors Do" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-2 leading-relaxed font-light">
            Already have a site? We&apos;ll show you exactly why visitors leave
            without buying. Starting from scratch? We&apos;ll map out the
            fastest path to a site that converts from day one.{" "}
          </p>
          <p className="text-base md:text-lg text-white max-w-3xl mx-auto mb-10 leading-relaxed font-bold">
            Either way - 20 free sessions this month, 48-hour turnaround, zero
            obligation.
          </p>

          {/* Urgency bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col items-center gap-2 mt-3 mb-8"
          >
            {/* Label row */}
            <div className="items-center gap-2 text-sm text-white tracking-wide">
              <span>SPOTS CLAIMED THIS MONTH</span><br />
              <span className="text-white font-medium">13/20 CLAIMED</span>
              <span className="text-white">·</span>
              <span className="text-[#FE5A7A] font-medium">
                7 SPOTS REMAINING
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-64 sm:w-90 h-5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "#2201DC",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact-us"
              className="hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <button className="bg-[#2201DC] hover:bg-[#1d4ed8] text-white font-semibold px-10 rounded-full transition-all duration-300 uppercase tracking-wider text-sm border border-white cursor-pointer h-14 w-56 leading-none flex items-center justify-center">
                BOOK YOUR SPOT
              </button>
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
