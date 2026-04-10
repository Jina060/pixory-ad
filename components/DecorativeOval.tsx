'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



export default function DecorativeOval() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.svg
      className="hidden md:block absolute top-[69%] left-[14%] pointer-events-none"
      width="40"
      height="31"
      viewBox="0 0 40 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isMobile ? 0.3 : 1, // Different opacity for mobile vs desktop
        y: 0 
      }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <path d="M19.9572 0C30.9716 0 39.9144 6.81646 39.9144 15.2119C39.9144 23.6074 30.9716 30.4238 19.9572 30.4238C8.94283 30.4238 0 23.6074 0 15.2119C0 6.81646 8.94283 0 19.9572 0Z" fill="#2667FF" />
      <path d="M19.9572 15.2119L19.9572 0C30.9716 0 39.9144 6.81646 39.9144 15.2119L19.9572 15.2119Z" fill="#F4F4F4" />
      <path d="M19.9572 15.2119L0 15.2119C0 6.81646 8.94283 0 19.9572 0L19.9572 15.2119Z" fill="#F4F4F4" />
    </motion.svg>
  );
}
