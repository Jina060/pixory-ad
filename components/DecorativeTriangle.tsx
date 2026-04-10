import { motion } from 'framer-motion';

export default function DecorativeTriangle() {
  return (
    <motion.svg
      className="hidden md:block absolute top-[40%] right-[10%] pointer-events-none opacity-20 md:opacity-100 z-0 md:z-auto"
      width="105"
      height="121"
      viewBox="0 0 105 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M83.0243 50.3171L32.1093 78.1448L33.4667 20.1362L83.0243 50.3171Z"
        stroke="#2667FF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M90.6198 71.3637L36.6644 100.853L38.1032 39.3812L90.6198 71.3637Z"
        stroke="#2667FF"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

