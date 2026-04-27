'use client';

import { motion } from 'framer-motion';

const ContactHeading = ({ title = "Contact Us", subtitle = "Let's Build Something Extraordinary Together" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center gap-4 w-full"
    >
      <h2 className="text-white font-semibold text-[60px] leading-22.5 text-center">
        {title}
      </h2>
      <p className="text-white/80 text-base leading-6 text-center">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default ContactHeading;