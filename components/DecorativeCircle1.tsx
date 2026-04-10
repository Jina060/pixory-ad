import { motion } from 'framer-motion';

export default function DecorativeCircle1() {
  return (
    <>
    <motion.svg
              className="hidden md:block absolute top-[70%] right-[17%] pointer-events-none opacity-20 md:opacity-100 z-0 md:z-auto w-7 h-5 md:w-10 md:h-7"
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 0.6,
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                scale: { duration: 0.5, delay: 0.3 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }
              }}
            >
              <path d="M13.9237 0.289062C21.4487 0.289062 27.5584 4.94603 27.5584 10.6818C27.5584 16.4175 21.4487 21.0745 13.9237 21.0745C6.39876 21.0745 0.289062 16.4175 0.289062 10.6818C0.289062 4.94603 6.39876 0.289062 13.9237 0.289062Z" stroke="#629EE8" strokeWidth="0.578571"/>
    </motion.svg>

    <motion.svg
              className="hidden md:block absolute top-[17%] right-[33%] pointer-events-none opacity-20 md:opacity-100 z-0 md:z-auto w-7 h-5 md:w-10 md:h-7"
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 0.6,
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 },
                scale: { duration: 0.5, delay: 0.3 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }
              }}
            >
              <path d="M13.9237 0.289062C21.4487 0.289062 27.5584 4.94603 27.5584 10.6818C27.5584 16.4175 21.4487 21.0745 13.9237 21.0745C6.39876 21.0745 0.289062 16.4175 0.289062 10.6818C0.289062 4.94603 6.39876 0.289062 13.9237 0.289062Z" stroke="#629EE8" strokeWidth="0.578571"/>
    </motion.svg>
    </>
  );
}