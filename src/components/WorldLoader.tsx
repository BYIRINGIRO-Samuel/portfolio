import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "brightness(2) blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* TV Static / Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicRlsc/giphy.gif')] bg-repeat" />
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            
            {/* The "Scanner" - Cinematic TV Style */}
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              {/* Background Guide Ring */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="white"
                strokeWidth="0.2"
                className="opacity-10"
              />

              {/* Primary Segment - The "Leader" */}
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="30 270"
                strokeLinecap="round"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.2, 1] 
                }}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              />

              {/* Secondary Segment - The "Follower" */}
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
                strokeDasharray="15 285"
                strokeLinecap="round"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.1 
                }}
                className="opacity-40"
              />

              {/* Third Segment - Opposite Direction */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="60 190"
                strokeLinecap="round"
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="opacity-20"
              />

              {/* Glowing Core Pulse */}
              <circle cx="50" cy="50" r="2" fill="white">
                <animate 
                  attributeName="opacity" 
                  values="1;0.2;1" 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
            </svg>

            {/* Cinematic Lens Flare Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm rotate-45" />
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-sm -rotate-45" />
            </div>

            {/* Central Bloom */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-12 h-12 bg-white rounded-full blur-2xl opacity-40"
            />
          </div>

          {/* Horizontal "Scan Line" - Classic TV Loading Vibe */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
