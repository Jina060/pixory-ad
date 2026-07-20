"use client";

import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build our website?",
      answer:
        "Most projects are completed within 2 to 4 weeks depending on the complexity and how quickly you provide content and feedback. We give every client a clear timeline before we start so there are no surprises.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Every project is scoped based on your specific needs and goals. The best way to get an accurate quote is to book a free consultation and we will get back to you within 24 hours with a clear and transparent proposal.",
    },
    {
      question: "Will my website work well on mobile?",
      answer:
        "Yes. Every website we build is fully responsive and optimized for mobile, tablet, and desktop. Given that over 70% of web traffic comes from mobile devices, this is non-negotiable for us on every project.",
    },
    {
      question: "Do you offer support after the website is launched?",
      answer:
        "Absolutely. We offer post-launch support and maintenance packages to keep your site updated, secure, and running smoothly. You will not be left on your own after handover.",
    },
    {
      question:
        "We already have a website. Can you improve it instead of building from scratch?",
      answer:
        "Yes, redesigns and optimizations are a big part of what we do. Whether your site looks outdated, loads slowly, or is not converting visitors into clients, we will audit it first and recommend exactly what needs to change.",
    },
  ];

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
            Got questions? We&apos;ve got answers. Here are some of the most
            common questions we hear from clients.
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
              <div className="px-6 py-5">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/80 leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mx-auto mt-12 flex items-center gap-2 border border-white/10 rounded-full px-6 py-3 text-white/50 text-sm uppercase tracking-widest hover:border-[#2201DC]/50 hover:text-white transition-all duration-300 group"
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="group-hover:text-[#FE5A7A] transition-colors duration-300"
        >
          <path
            d="M12 19V5M5 12L12 5L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        Back to top
      </motion.button>
    </section>
  );
};

export default FAQ;
