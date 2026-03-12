import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/**
 * EXACT DataVehicle component from SkillsSection.tsx but with Cinematic Light Beams
 */
const DataVehicle = ({ isMoving }: { isMoving: boolean }) => (
  <div className="relative transform -rotate-90">
    {/* Cinematic Headlight Beams */}
    <div className="absolute top-[48px] left-[6px] w-[150px] h-[50px] pointer-events-none overflow-hidden origin-top scale-y-[0.5]">
       <motion.div 
         animate={{ opacity: isMoving ? [0.2, 0.4, 0.2] : 0.5 }}
         transition={{ duration: 1.5, repeat: Infinity }}
         className="w-full h-full bg-gradient-to-r from-white/30 to-transparent blur-md" 
         style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 60%)" }}
       />
    </div>
    <div className="absolute top-[48px] left-[17px] w-[150px] h-[50px] pointer-events-none overflow-hidden origin-top scale-y-[0.5]">
       <motion.div 
         animate={{ opacity: isMoving ? [0.2, 0.4, 0.2] : 0.5 }}
         transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
         className="w-full h-full bg-gradient-to-r from-white/30 to-transparent blur-md" 
         style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 60%)" }}
       />
    </div>

    <svg width="56" height="26" viewBox="0 0 56 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
      <path d="M2 13C2 8 4 4 10 4H50C54 4 54 8 54 13C54 18 54 22 50 22H10C4 22 2 18 2 13Z" fill="white" />
      <rect x="36" y="5" width="16" height="16" rx="1" fill="white" stroke="#080808" strokeWidth="0.2" opacity="0.3" />
      <rect x="52" y="7" width="2" height="12" rx="0.5" fill="#e5e5e5" />
      <line x1="53" y1="8" x2="53" y2="18" stroke="#080808" strokeWidth="0.2" strokeDasharray="1 1" />
      <circle cx="53" cy="13" r="0.8" fill="white" />
      <path d="M16 6.5C16 6.5 20 5.5 28 5.5C36 5.5 38 6.5 38 7.5V18.5C38 19.5 36 20.5 28 20.5C20 20.5 16 19.5 16 19.5V6.5Z" fill="#080808" />
      <rect x="20" y="8" width="14" height="10" rx="1" fill="#151515" />
      <rect x="48" y="6" width="3" height="3" rx="0.5" fill="white" className="animate-pulse" />
      <rect x="48" y="17" width="3" height="3" rx="0.5" fill="white" className="animate-pulse" />
      <line x1="10" y1="4.5" x2="50" y2="4.5" stroke="#080808" strokeWidth="0.3" opacity="0.2" />
      <line x1="10" y1="21.5" x2="50" y2="21.5" stroke="#080808" strokeWidth="0.3" opacity="0.2" />
      <rect x="38" y="3" width="3" height="1.5" rx="0.5" fill="white" />
      <rect x="38" y="21.5" width="3" height="1.5" rx="0.5" fill="white" />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/5 animate-ping" />
    
    {/* Micro HUD - stunning detail */}
    <motion.div 
      animate={{ opacity: isMoving ? 1 : 0 }}
      className="absolute -top-8 -left-4 font-mono text-[5px] text-white/40 tracking-widest whitespace-nowrap"
    >
      GPS: 52.5200° N <br/> VEL: 120 KM/H
    </motion.div>
  </div>
);

/**
 * Well-Modeled Modern Gas Station Silhouette
 */
const GasStation = () => (
  <svg width="240" height="120" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
    {/* Main Canopy (Roof) */}
    <rect x="10" y="10" width="100" height="8" fill="#0c0c0c" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
    {/* Supporting Pillars */}
    <rect x="25" y="18" width="2" height="32" fill="white" fillOpacity="0.1" />
    <rect x="93" y="18" width="2" height="32" fill="white" fillOpacity="0.1" />
    
    {/* Fuel Pumps */}
    <g transform="translate(45, 35)">
       <rect width="8" height="15" rx="1" fill="#151515" stroke="white" strokeWidth="0.1" strokeOpacity="0.3" />
       <rect x="1.5" y="2" width="5" height="4" fill="white" fillOpacity="0.1" /> {/* Pump Screen */}
       <path d="M7 6L10 6L10 12L8 12" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" /> {/* Hose */}
    </g>
    <g transform="translate(67, 35)">
       <rect width="8" height="15" rx="1" fill="#151515" stroke="white" strokeWidth="0.1" strokeOpacity="0.3" />
       <rect x="1.5" y="2" width="5" height="4" fill="white" fillOpacity="0.1" /> {/* Pump Screen */}
       <path d="M7 6L10 6L10 12L8 12" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" /> {/* Hose */}
    </g>

    {/* Price Signage Pole */}
    <rect x="110" y="5" width="1.5" height="45" fill="white" fillOpacity="0.05" />
    <rect x="107" y="5" width="8" height="12" rx="1" fill="#101010" stroke="white" strokeWidth="0.1" strokeOpacity="0.2" />
    <div className="absolute top-[8%] right-[5%] text-[2px] font-mono text-white opacity-20 uppercase">Premium Fuel</div>

    {/* Convenience Store (Background Silhouette) */}
    <path d="M35 50H85V30H35V50Z" fill="#080808" fillOpacity="0.5" />
    <rect x="52" y="38" width="16" height="12" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.05" strokeOpacity="0.2" />
  </svg>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(58); // Stops perfectly at the fuel pumps
    }, 500);

    const finishTimer = setTimeout(() => setIsDone(true), 5500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 7500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Road path same as skills section
  const roadPath = "M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2) blur(30px)" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Outer Atmosphere - Parallax Particles */}
          <div className="absolute inset-0 z-0 opacity-10">
             {[...Array(40)].map((_, i) => (
               <motion.div
                 key={i}
                 animate={{ y: [0, -1000] }}
                 transition={{ duration: 10 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-px h-px bg-white"
                 style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
               />
             ))}
          </div>

          {/* Centered MODULAR CIRCLE (Ultra Minimalist Size) */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 bg-[#050505] shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden z-10"
          >
             
             {/* THE MINIATURE WORLD (Re-centered and ZOOMED IN) */}
             <div className="absolute inset-0 origin-center scale-[0.6] translate-x-[-300px] translate-y-[-70px]">
                
                {/* Road System with increased thickness */}
                <svg className="absolute inset-0 w-[1280px] h-[500px] pointer-events-none">
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="80" className="opacity-[0.03]" />
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="76" className="opacity-10" />
                  <path d={roadPath} fill="none" stroke="#080808" strokeWidth="74" />
                  
                  <motion.path
                    d={roadPath}
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                    className="opacity-70 blur-[1px]"
                  />
                  
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="2" className="opacity-15" strokeDasharray="15 15" />
                </svg>

                {/* WELL-MODELED GAS STATION (Destination) */}
                <div className="absolute top-[38%] left-[28%] z-10 translate-y-[-50%] scale-[1.3] origin-center">
                    <GasStation />
                </div>

                {/* The Precision Car (SCALED UP inside the lens) */}
                <motion.div 
                  className="absolute z-30 pointer-events-none origin-center scale-150"
                  animate={{ offsetDistance: `${progress}%` }}
                  transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ 
                    offsetPath: `path("${roadPath}")`,
                    offsetRotate: "auto 90deg"
                  }}
                >
                  <DataVehicle isMoving={!isDone} />
                </motion.div>
             </div>

             {/* HUD SCANNER Overlay */}
             <motion.div 
               animate={{ y: ["-100%", "250%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none blur-sm"
             />

             {/* Circular Vignette Mask */}
             <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,1)] pointer-events-none" />
          </motion.div>

          {/* FINAL SHOCKWAVE PULSE */}
          <AnimatePresence>
            {isDone && (
              <motion.div 
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute w-40 h-40 border border-white/10 rounded-full z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Minimal Production Text */}
          <div className="absolute bottom-16 text-[6px] font-mono text-white/5 tracking-[1.5em] uppercase select-none">
             Authenticating System Core
          </div>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
