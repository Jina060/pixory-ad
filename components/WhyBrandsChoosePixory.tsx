"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyBrandsChoosePixory() {
  const features = [
    {
      number: 1,
      title: 'Premium Design',
      description: 'Modern, User-First Interface That Elevate Your Brand',
    },
    {
      number: 2,
      title: 'Full-Stack Expertise',
      description: 'Complete Frontend + Backend + Mobile Development',
    },
    {
      number: 3,
      title: 'Fast Launch',
      description: 'Agile Processes To Get Your Product Live Quickly',
    },
    {
      number: 4,
      title: 'End-To-End Support',
      description: 'From Concept To Post-Launch We\'re With You All The Way.',
    },
  ];

  return (
    <section className="relative w-full bg-[#000000] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 flex flex-col"
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
              WHY BRANDS<br className="hidden md:block" /> CHOOSE PIXORY
            </h2>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Blue Circle with Number */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#2201DC] flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {feature.number}
                    </span>
                  </div>

                  {/* Feature Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-white/90 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Team Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-full"
          >
            <div className="relative rounded-lg overflow-hidden h-full">
              <Image
                src="https://images.pexels.com/photos/7698715/pexels-photo-7698715.jpeg"
                alt="Pixory Flow Team"
                width={600}
                height={400}
                className="object-cover w-full h-full rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
