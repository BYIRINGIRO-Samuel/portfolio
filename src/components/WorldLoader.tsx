import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * High-Fidelity Silhouette Rhino
 * Intricate anatomical details for a professional, realistic feel.
 */
const HighFidelityRhino = () => (
  <svg width="200" height="120" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Precision path for a realistic rhinoceros silhouette */}
      <path 
        d="M140 65C140 75 130 85 115 85H108L106 72H92L90 85H70C65 75 60 70 50 70H45L42 85H28L25 70H15L12 60C12 50 15 40 30 35C35 30 45 28 65 28C85 28 110 32 125 40C140 48 140 55 140 65Z" 
        fill="black" 
      />
      {/* The Horns - Key for realism */}
      <path d="M12 60C8 58 2 45 5 40M14 55C12 50 10 45 12 43" stroke="black" strokeWidth="3" strokeLinecap="round" />
      {/* Ear / Head detail */}
      <path d="M30 35C28 30 32 25 35 28" stroke="black" strokeWidth="2" strokeLinecap="round" />
      {/* Tail Detail */}
      <path d="M140 60C145 60 148 68 148 75" stroke="black" strokeWidth="1" strokeLinecap="round" />
      
      {/* Eye Glow (Subtle) */}
      <circle cx="25" cy="48" r="0.5" fill="white" className="animate-pulse" />
    </motion.g>
  </svg>
);

/**
 * Realistic Savannah Tree
 * Focuses on fine branch structures and organic foliage.
 */
const RealisticSavannahTree = () => (
  <svg width="340" height="260" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 10)">
      {/* Organic main trunk */}
      <path 
        d="M90 145C88 130 92 110 80 95C65 80 40 85 20 75M90 145C92 120 95 100 110 90C130 80 155 85 175 70M90 145V120M90 120C85 110 75 105 70 95M90 120C95 110 115 108 125 98" 
        stroke="black" strokeWidth="5" strokeLinecap="round" 
      />
      {/* Detailed Layered Canopy */}
      <path d="M15 65C15 60 35 45 90 45S170 60 170 65C170 68 150 75 90 75S15 70 15 65Z" fill="black" />
      <path d="M40 55C40 50 60 40 100 40S150 50 150 55C150 58 130 63 100 63S40 58 40 55Z" fill="black" />
      <path d="M65 45C65 42 75 35 105 35S135 42 135 45C135 47 120 50 105 50S65 47 65 45Z" fill="black" />
      
      {/* Leaf Texturing */}
      {[...Array(35)].map((_, i) => (
        <circle 
          key={i} 
          cx={20 + Math.random() * 150} 
          cy={35 + Math.random() * 40} 
          r={0.8 + Math.random() * 1.5} 
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
    }, 7500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(30px) contrast(1.5)" }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Centered Large Moon Scene */}
          <div className="relative w-80 h-80 md:w-[600px] md:h-[600px] flex items-center justify-center">
            
            {/* The Great Moon (High Contrast Silhouette Background) */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-4 rounded-full bg-[#d0c0b0] shadow-[0_0_120px_rgba(208,192,176,0.15)] overflow-hidden"
            >
               {/* Internal Lunar Atmosphere */}
               <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20 pointer-events-none" />
               
               {/* Distant Birds Sequence */}
               {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ x: "-10%", y: 80 + i * 15 }}
                   animate={{ x: "110%" }}
                   transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: i * 2 }}
                   className="absolute pointer-events-none"
                 >
                   <svg width="10" height="5" viewBox="0 0 10 5" className="text-black/30">
                     <path d="M0 2.5C2.5 0 5 0 5 2.5C5 0 7.5 0 10 2.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                   </svg>
                 </motion.div>
               ))}
            </motion.div>

            {/* Middle Ground: The Silhouette Environment */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-full pointer-events-none">
                
                {/* Far Tree (Faint) */}
                <div className="absolute right-[10%] bottom-[15%] opacity-20 scale-75 grayscale translate-y-5">
                   <RealisticSavannahTree />
                </div>

                {/* Foreground Tree (Left) */}
                <div className="absolute left-[-15%] bottom-[-10%] scale-110">
                   <RealisticSavannahTree />
                </div>

                {/* The Majestic Rhino Walking */}
                <motion.div
                  initial={{ x: "120%", y: "45%" }}
                  animate={{ x: "-10%" }}
                  transition={{ duration: 7, ease: "linear" }}
                  className="absolute bottom-[20%] z-20"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -1, 0],
                      rotate: [0, 0.3, 0]
                    }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  >
                    <HighFidelityRhino />
                  </motion.div>
                </motion.div>

                {/* Terrain / Ground Line */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-black rounded-t-[50%] z-10" />
            </div>

          </div>

          {/* Exterior Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_250px_rgba(0,0,0,1)]" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
