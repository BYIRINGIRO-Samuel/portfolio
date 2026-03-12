import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * High-precision Silhouette Elephant
 * Designed with intricate paths for a "Realistic" feel similar to the reference.
 */
const RealisticElephant = () => (
  <svg width="180" height="120" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Intricate Silhouette path based on realistic anatomy */}
      <path 
        d="M108.5 48.5C108.5 58.5 102.5 64.5 90 64.5H85L83.5 76.5H75.5L77.5 64.5H62.5L64.5 76.5H56.5L58.5 64.5C40 64.5 32 58.5 28.5 50.5C26.5 55.5 22.5 58.5 17 58.5C13 58.5 10.5 56 10.5 52C10.5 46 14.5 38.5 8.5 30.5C6.5 28 3.5 27.5 2 28.5L0.5 26.5C3.5 23.5 9.5 24.5 13.5 28.5C17.5 32.5 18 38.5 18 43.5C21 43.5 23.5 41.5 25 38.5C23.5 32.5 21 24.5 28 18.5C35 12.5 50 10.5 65 10.5C85 10.5 108.5 18.5 108.5 40V48.5Z" 
        fill="black" 
      />
      {/* Detailed Tusk */}
      <path d="M26 44C26 44 21 46 18 52" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* Tail */}
      <path d="M108.5 45C112 45 114 48 114 52" stroke="black" strokeWidth="1" strokeLinecap="round" />
    </motion.g>
  </svg>
);

/**
 * Detailed Acacia Silhouette Tree
 * Hand-crafted with organic branch structures.
 */
const RealisticTree = () => (
  <svg width="320" height="280" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 0)">
      {/* Main Trunk and Branches */}
      <path 
        d="M80 135C78 120 82 100 70 85C55 70 30 75 15 65M80 135C82 110 85 90 100 80C120 70 145 75 155 60M80 135V110M80 110C75 100 65 95 60 85M80 110C85 100 105 98 115 88" 
        stroke="black" strokeWidth="4" strokeLinecap="round" 
      />
      {/* Intricate Canopy Layers */}
      <path d="M10 55C10 50 25 40 70 40S140 50 140 55C140 58 130 62 70 62S10 58 10 55Z" fill="black" />
      <path d="M30 45C30 40 45 32 80 32S130 40 130 45C130 48 110 52 80 52S30 48 30 45Z" fill="black" />
      <path d="M50 35C50 32 60 25 85 25S120 32 120 35C120 37 100 40 85 40S50 37 50 35Z" fill="black" />
      
      {/* Organic texture/leaves */}
      {[...Array(25)].map((_, i) => (
        <circle 
          key={i} 
          cx={20 + Math.random() * 120} 
          cy={25 + Math.random() * 30} 
          r={0.5 + Math.random() * 1.5} 
          fill="black"
        />
      ))}
    </g>
  </svg>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 7000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(40px)" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]"
        >
          {/* Centered Circular Frame (The Lens) */}
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            
            {/* The "Moonlight" Background inside the circle */}
            <div className="absolute inset-0 bg-[#d9c5b2] overflow-hidden">
               {/* Large Atmosphere Glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
               
               {/* Scattered Birds Animation */}
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ x: "-10%", y: 40 + i * 10 }}
                   animate={{ x: "110%" }}
                   transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
                   className="absolute pointer-events-none"
                 >
                   <svg width="8" height="4" viewBox="0 0 8 4" className="text-black/40">
                     <path d="M0 2C2 0 4 0 4 2C4 0 6 0 8 2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                   </svg>
                 </motion.div>
               ))}
            </div>

            {/* The Tree (Placed on the left as per reference) */}
            <div className="absolute left-[-20px] bottom-[-20px] z-10">
               <RealisticTree />
            </div>

            {/* The Elephant Walking into the scene */}
            <motion.div
              initial={{ x: "120%", y: "45%" }}
              animate={{ x: "-5%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute bottom-[20%] z-20"
            >
              <motion.div
                animate={{ 
                  y: [0, -1.5, 0],
                  rotate: [0, 0.5, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <RealisticElephant />
              </motion.div>
            </motion.div>

            {/* Ground Silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-black rounded-t-[50%]" />

          </div>

          {/* Exterior Grain & Vignette for Premium Feel */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
