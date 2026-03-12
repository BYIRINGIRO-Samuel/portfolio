import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2) contrast(1.2) blur(20px)" }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* TV SCREEN SIMULATION MASK */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
          
          {/* SUBTLE CRT SCANLINES & STATIC GRAIN */}
          <div className="absolute inset-0 z-40 opacity-[0.04] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicRlsc/giphy.gif')] bg-repeat mix-blend-screen" />
          <div className="absolute inset-0 z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

          {/* THE "PRODUCTION LEADER" / INTRO SEQUENCE */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* CINEMATIC BARS */}
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "15%" }}
              className="absolute top-0 w-full bg-black z-30" 
            />
            <motion.div 
              initial={{ height: "0%" }}
              animate={{ height: "15%" }}
              className="absolute bottom-0 w-full bg-black z-30" 
            />

            {/* THE CIRCULAR "COUNTDOWN" SHOW INTRO */}
            <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              
              {/* PRECISION CROSSHAIR (PRO PRODUCTION STYLE) */}
              <div className="absolute w-full h-[0.5px] bg-white/20" />
              <div className="absolute h-full w-[0.5px] bg-white/20" />
              <div className="absolute w-[20px] h-[20px] border border-white/40 rounded-full" />

              {/* ROTATING PRODUCTION RINGS (FANCY & FAST) */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                {/* Master Ring Clockwise */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.25"
                  strokeDasharray="1 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Weighted "Tuning" Segment */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="60 222.7"
                  strokeLinecap="round"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
                />

                {/* Fast Pulse Ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  animate={{ 
                    scale: [0.9, 1.1],
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </svg>

              {/* VERTICAL SCANNING BEAM (STUDIO STYLE) */}
              <motion.div 
                animate={{ x: ["-150%", "150%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-1 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm z-10"
              />

              {/* THE CORE "SPECTRAL" FOCUS */}
              <div className="relative z-20 overflow-hidden rounded-full w-24 h-24 flex items-center justify-center">
                 <motion.div 
                   animate={{ 
                     rotate: -360,
                     scale: [1, 1.2, 1]
                   }}
                   transition={{ 
                     rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                     scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                   }}
                   className="w-full h-full border-[1px] border-white/30 rounded-full flex items-center justify-center"
                 >
                    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_40px_white]" />
                 </motion.div>
              </div>

              {/* CORNER MARKS (FRAME GUIDES) */}
              <div className="absolute -inset-10 border-[0.5px] border-white/5 pointer-events-none">
                 <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/40" />
                 <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/40" />
                 <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/40" />
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/40" />
              </div>

            </div>

            {/* LIGHT LEAK / BLOOM (CINEMATIC GOBOS) */}
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/[0.02] -skew-x-[45deg] blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-1/2 h-full bg-white/[0.02] skew-x-[45deg] blur-[100px] pointer-events-none" />
          </div>

          {/* FINAL "FLASH" BEFORE TRANSITION */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 5.2, duration: 0.3 }}
            className="absolute inset-0 bg-white z-[60]" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
