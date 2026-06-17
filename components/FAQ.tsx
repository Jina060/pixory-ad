"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to build our website?",
      answer: "Most projects are completed within 2 to 4 weeks depending on the complexity and how quickly you provide content and feedback. We give every client a clear timeline before we start so there are no surprises."
    },
    {
      question: "How much does a website cost?",
      answer: "Every project is scoped based on your specific needs and goals. The best way to get an accurate quote is to book a free consultation and we will get back to you within 24 hours with a clear and transparent proposal."
    },
    {
      question: "Will my website work well on mobile?",
      answer: "Yes. Every website we build is fully responsive and optimized for mobile, tablet, and desktop. Given that over 70% of web traffic comes from mobile devices, this is non-negotiable for us on every project."
    },
    {
      question: "Do you offer support after the website is launched?",
      answer: "Absolutely. We offer post-launch support and maintenance packages to keep your site updated, secure, and running smoothly. You will not be left on your own after handover."
    },
    {
      question: "We already have a website. Can you improve it instead of building from scratch?",
      answer: "Yes, redesigns and optimizations are a big part of what we do. Whether your site looks outdated, loads slowly, or is not converting visitors into clients, we will audit it first and recommend exactly what needs to change."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative pt-8 pb-20 px-6">

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-12 uppercase tracking-tight text-center mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Got questions? We&apos;ve got answers. Here are some of the most common questions we hear from clients.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-[#1B1B1B] hover:border-[#2201DC]/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ 
                    rotate: activeIndex === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown 
                    size={20} 
                    className="text-[#B5AAF4] transition-colors duration-200"
                  />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-white/80 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
