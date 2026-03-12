import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * High-End Sleek Panther Silhouette
 * Chosen for its elegance and recognizability in a Dark Mode aesthetic.
 */
const SleekPanther = () => (
  <svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M140 65C140 65 145 68 152 68C159 68 155 58 145 53C135 48 115 38 95 38C75 38 60 45 45 55C30 65 20 68 12 68C4 68 2 62 8 58C14 54 25 48 30 35C35 22 45 15 65 15C85 15 110 25 125 35C140 45 140 55 140 65Z"
      fill="black"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    {/* Body / Muscle Definition Silhouette */}
    <path 
      d="M135 60C132 75 125 85 115 85H108L105 70H90L88 85H80L75 65C65 80 55 85 45 85H38L35 70H25L22 85H15L12 65C12 65 15 50 30 45" 
      fill="black" 
    />
    {/* Head / Ears Detail */}
    <path d="M45 40C45 40 48 32 52 35C56 38 58 45 52 50C46 55 42 52 40 45" fill="black" />
    <path d="M55 35C55 35 58 28 62 30C66 32 68 38 62 42" fill="black" />
  </svg>
);

/**
 * Realistic Intricate Acacia Tree
 * Focuses on fine branches and organic canopy shapes.
 */
const RealisticAcacia = () => (
  <svg width="300" height="250" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main Trunk Structure */}
    <path 
      d="M150 240C148 210 155 180 140 160C120 140 80 145 60 130M150 240C152 200 155 170 180 155C210 140 240 145 260 120" 
      stroke="black" strokeWidth="5" strokeLinecap="round" 
    />
    <path 
      d="M150 180C145 150 120 155 110 130M150 160C158 140 190 135 205 120" 
      stroke="black" strokeWidth="3" strokeLinecap="round" 
    />
    
    {/* Intricate Canopy Branches */}
    <g opacity="1">
      <path d="M40 120C40 110 60 95 150 95S260 110 260 120C260 125 240 132 150 132S40 125 40 120Z" fill="black" />
      <path d="M70 105C70 95 90 85 150 85S230 95 230 105C230 110 210 115 150 115S70 110 70 105Z" fill="black" />
      <path d="M100 90C100 85 115 75 150 75S200 85 200 90C200 95 185 98 150 98S100 95 100 90Z" fill="black" />
    </g>

    {/* Organic Texture Details */}
    {[...Array(30)].map((_, i) => (
      <circle 
        key={i} 
        cx={50 + Math.random() * 200} 
        cy={70 + Math.random() * 50} 
        r={0.8 + Math.random() * 2} 
        fill="black"
      />
    ))}
  </svg>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Centered Realistic Scene Container */}
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
            
            {/* The Lens / Circle Frame */}
            <div className="absolute inset-0 rounded-full border border-white/10 bg-[#e3d5c5] shadow-[0_0_80px_rgba(227,213,197,0.1)] overflow-hidden">
               {/* Internal Atmosphere */}
               <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
               
               {/* Distant Trees/Savannah Detail (Realistic Layers) */}
               <div className="absolute inset-0 opacity-10 scale-90 translate-x-10 translate-y-5 grayscale">
                  <RealisticAcacia />
               </div>

               {/* Flying Birds Sequence */}
               {[...Array(4)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ x: "-20%", y: 60 + i * 20 }}
                   animate={{ x: "120%" }}
                   transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: i * 3 }}
                   className="absolute pointer-events-none"
                 >
                   <svg width="12" height="6" viewBox="0 0 12 6" className="text-black/60">
                     <path d="M0 3C3 0 6 0 6 3C6 0 9 0 12 3" fill="none" stroke="currentColor" strokeWidth="0.8" />
                   </svg>
                 </motion.div>
               ))}
            </div>

            {/* The Main Realistic Tree (Foreground) */}
            <div className="absolute left-[-20%] bottom-[-5%] z-20 scale-110">
               <RealisticAcacia />
            </div>

            {/* The Majestic Panther Walking (Innovative Choice) */}
            <motion.div
              initial={{ x: "110%", opacity: 0 }}
              animate={{ x: "-15%", opacity: 1 }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-[20%] z-30"
            >
              <div className="relative">
                <SleekPanther />
                {/* Movement Animation */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Ground / Terrain */}
            <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-black rounded-t-[50%] z-10" />

          </div>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
