import Image from "next/image";

export default function Crown() {
  return (
    <div className="mt-12 mb-10 sm:mt-8 sm:mb-0 2xl:mt-7 2xl:mb-7 flex justify-center">
      <div
        role="status"
        aria-label="Proudly serving clients"
        className="relative inline-flex items-center gap-3 bg-linear-to-b from-[#020617] via-[#0f172a] to-[#020617] backdrop-blur lg:px-4 lg:py-2 rounded-full shadow-lg border-t border-x border-white/10 group overflow-hidden
                   sm:px-4 sm:py-2  /* Default for sm and above */
                   px-3 py-1.5 /* Mobile padding */"
      >
        
        {/* Pulsing bottom border effect */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
        
        {/* Expandable bottom border on hover - hide on mobile since hover doesn't work well */}
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0 hidden sm:block"></div>
        
        {/* Avatar container with individual pulse effects */}
        <div className="flex items-center -space-x-2 relative">
          
          {/* Individual pulse rings for each avatar - reduce animation on mobile */}
         
          
          <div className="absolute w-7 h-7 rounded-full border border-[#FE5A7A] animate-ping -z-10 hidden sm:block" 
               style={{ animationDelay: '0.2s', left: '-5px' }} />
          
      

          {/* Avatars with hover effects - reduce hover on mobile */}
    
          <div
           
            className="lg:w-5 lg:h-5 rounded-full bg-[#FE5A7A] border border-white hover:scale-110 transition-transform duration-300 relative z-10 hover:border-purple-400/50 object-cover
                       sm:w-8 sm:h-8
                       w-7 h-7" 
          />
        
        </div>

        {/* Text with subtle pulse on the number - responsive text */}
        <span className="text-white/90 font-medium lg:ml-1 lg:font-semibold group-hover:text-white transition-colors duration-300 relative
                         sm:text-sm sm:ml-1  /* Default */
                         text-xs ml-1 /* Mobile */">
          7 of 20 {" "}
          <span className="relative inline-block">
            <span className="text-white font-bold animate-pulse" style={{ animationDuration: '3s' }}>
              Free
            </span>
            {/* Subtle glow behind the number - hide on mobile for performance */}
            <span className="absolute inset-0 text-white blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300 hidden sm:inline-block">
              Free
            </span>
          </span>{" "}
          Strategy Sessions Left This Month | Spots Resets August 1st
        </span>
      </div>
    </div>
  );
}
