import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2, filter: "blur(40px)" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Fractal/Kaleidoscope Core Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Layer 1: The Outer Ghostly Halo (Innovative Fluidity) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[0.5px] border-white/5 shadow-[0_0_100px_rgba(255,255,255,0.02)]"
            />

            {/* Layer 2: Segmented High-End Spinner (Weighted Strokes) */}
            <svg viewBox="0 0 100 100" className="absolute w-full h-full">
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={`ring-${i}`}
                  cx="50"
                  cy="50"
                  r={48 - i * 6}
                  fill="none"
                  stroke="white"
                  strokeWidth={0.5 + i * 0.5}
                  strokeDasharray={`${20 + i * 30} ${150 + i * 50}`}
                  strokeLinecap="round"
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ 
                    duration: 2 + i * 1.5, 
                    repeat: Infinity, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className={`opacity-${80 - i * 30} drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]`}
                />
              ))}
            </svg>

            {/* Layer 3: Geometric Interference (The "Fancy" Staff) */}
            <div className="absolute inset-4 overflow-hidden rounded-full">
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="w-full h-full relative"
               >
                 {[...Array(12)].map((_, i) => (
                   <div 
                     key={`beam-${i}`}
                     className="absolute top-1/2 left-1/2 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-1/2 -translate-y-1/2"
                     style={{ transform: `translate(-50%, -50%) rotate(${i * 15}deg)` }}
                   />
                 ))}
               </motion.div>
            </div>

            {/* Layer 4: The Pulsing "Singularity" Core */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 0.8, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_30px_white]"
              />
            </div>

            {/* Layer 5: Orbital Spectral Dots (Professional Accents) */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
              >
                <div 
                  className="w-1 h-1 bg-white rounded-full blur-[1px]" 
                  style={{ 
                    position: 'absolute', 
                    top: '0', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    opacity: 0.3 + i * 0.1 
                  }} 
                />
              </motion.div>
            ))}

          </div>

          {/* Cinematic Bloom / Glow across the base */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/[0.05] to-transparent pointer-events-none" />
          
          {/* Subtle Dynamic Grain */}
          <div className="absolute inset-0 mix-blend-overlay opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
