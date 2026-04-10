import { motion } from 'framer-motion';

export default function DecorativeCircles() {
  return (
    <motion.svg 
      className="hidden md:block absolute top-[40%] left-[10%] pointer-events-none opacity-20 md:opacity-100 z-0 md:z-auto"
      width="51" 
      height="60" 
      viewBox="0 0 51 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="3"/>
      <circle cx="31" cy="40" r="19.5" stroke="white"/>
    </motion.svg>
  );
}

