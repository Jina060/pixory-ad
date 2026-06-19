"use client";

import React from 'react';
import { motion } from 'framer-motion';


const Statistics = () => {

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
    <div className="w-full bg-black py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              className={`
                flex flex-col justify-center items-center
                h-auto md:h-[130px] min-h-[100px] md:min-h-0 backdrop-blur-[1px] flex-1
                ${index === 0 ? 'px-4 md:px-[25px] py-6 md:py-[24px]' : ''}
                ${index === 1 ? 'px-4 md:px-[40px] py-6 md:py-[22px]' : ''}
                ${index === 2 ? 'px-4 md:px-[55px] py-6 md:py-[24px]' : ''}
                ${index === 3 ? 'px-4 md:px-[48px] py-6 md:py-[22px]' : ''}
                border-4 md:border-8 border-[#FBFDF7] rounded-[12px]
                ${index === 3 
                  ? 'md:rounded-[20px]' 
                  : 'md:border-r-0 md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-tr-0 md:rounded-br-0'
                }
                ${index < 3 ? 'md:-mr-4' : ''}
              `}
            >
              <div className="flex flex-col items-center gap-1 md:gap-2">
                <h3 className="text-white font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.25px] capitalize text-center">
                  {stat.value}{stat.suffix}
                </h3>
                <p className={`text-white text-center ${index === 3 ? 'text-base sm:text-lg md:text-[20px] leading-5 md:leading-[26px] font-light' : 'text-sm sm:text-base md:text-xl leading-5 md:leading-7 font-light'}`}>
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