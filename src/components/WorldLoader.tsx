import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(40px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            
            {/* Main Outer Orbit - Clockwise */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full rounded-full border-[0.5px] border-white/10"
            >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </motion.div>

            {/* Middle Orbit - Anti-Clockwise */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40 rounded-full border-[0.5px] border-white/5"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/60 rounded-full" />
            </motion.div>

            {/* Inner Static Ring with Pulsing Glow */}
            <div className="absolute w-20 h-20 rounded-full border border-white/20">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-full blur-xl"
              />
            </div>

            {/* Center Core Dot */}
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-white rounded-full z-10"
            />

            {/* Infinite Geometric Expansion Layers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2, opacity: [0, 0.1, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 1,
                  ease: "easeOut" 
                }}
                className="absolute w-32 h-32 border border-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
