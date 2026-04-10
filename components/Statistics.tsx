"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const CountingNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const count = useCountUp(value, 2000, isInView);
  return <>{count}{suffix}</>;
};

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: 180,
      suffix: "+",
      label: "projects Delivered"
    },
    {
      value: 10,
      suffix: "+",
      label: "Countries Reached"
    },
    {
      value: 100,
      suffix: "%",
      label: "Launch Success..."
    },
    {
      value: 89,
      suffix: "%",
      label: "Faster Time to market"
    }
  ];

  return (
    <div ref={ref} className="w-full bg-black py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                flex flex-col justify-center items-center
                h-auto md:h-32.5 min-h-25 md:min-h-0 backdrop-blur-sm flex-1
                ${index === 0 ? 'px-4 md:px-6.25 py-6 md:py-6' : ''}
                ${index === 1 ? 'px-4 md:px-10 py-6 md:py-5.5' : ''}
                ${index === 2 ? 'px-4 md:px-13.5 py-6 md:py-6' : ''}
                ${index === 3 ? 'px-4 md:px-12 py-6 md:py-5.5' : ''}
                border-4 md:border-8 border-[#FBFDF7] rounded-xl
                ${index === 3 
                  ? 'md:rounded-[20px]' 
                  : 'md:border-r-0 md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-tr-0 md:rounded-br-0'
                }
                ${index < 3 ? 'md:-mr-4' : ''}
              `}
            >
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <h3 className="text-white font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-14 tracking-[-0.25px] capitalize text-center">
                  <CountingNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </h3>
                <p className={`text-white text-center ${index === 3 ? 'text-base sm:text-lg md:text-[20px] leading-5 md:leading-6.5 font-light' : 'text-sm sm:text-base md:text-xl leading-5 md:leading-7 font-light'}`}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;