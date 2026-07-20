'use client';
import { useState, Activity } from 'react';
import Form from '@/components/Form';
import {motion} from "framer-motion"

export default function SomePage() {
  // const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="w-full bg-black py-8 md:py-20 pt-22 md:pt-32 px-3 md:px-6">
      {/* whatever triggers the form, e.g. a button */}
      {/* {isFormOpen === false && (
        <motion.button
          animate={{
            y: [-3, 3, 0, -3, 3],
            scale: [1, 1.05, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'linear'
          }}
        onClick={() => setIsFormOpen(true)} 
        className="flex items-center justify-center bg-[#FE5A7A] text-white px-6 py-3 rounded-full text-base md:text-lg leading-[160%] hover:opacity-90 transition-opacity w-[200px] h-[53px] mt-20 mx-auto">
          Open Form
        </motion.button>
      )} */}


      {/* <Activity mode={isFormOpen === true ? 'visible' : 'hidden'}> */}
        <Form/>
      {/* </Activity> */}
    </div>
  );
}