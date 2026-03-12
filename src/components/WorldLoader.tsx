import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/**
 * EXACT DataVehicle component from SkillsSection.tsx but with Cinematic Light Beams
 */
const DataVehicle = ({ isMoving }: { isMoving: boolean }) => (
  <div className="relative transform -rotate-90">
    {/* Cinematic Headlight Beams */}
    <div className="absolute top-[48px] left-[6px] w-[200px] h-[60px] pointer-events-none overflow-hidden origin-top scale-y-[0.5]">
       <motion.div 
         animate={{ opacity: isMoving ? [0.3, 0.6, 0.3] : 0.6 }}
         transition={{ duration: 1.5, repeat: Infinity }}
         className="w-full h-full bg-gradient-to-r from-white/40 to-transparent blur-xl" 
         style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 60%)" }}
       />
    </div>
    <div className="absolute top-[48px] left-[17px] w-[200px] h-[60px] pointer-events-none overflow-hidden origin-top scale-y-[0.5]">
       <motion.div 
         animate={{ opacity: isMoving ? [0.3, 0.6, 0.3] : 0.6 }}
         transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
         className="w-full h-full bg-gradient-to-r from-white/40 to-transparent blur-xl" 
         style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 60%)" }}
       />
    </div>

    <svg width="56" height="26" viewBox="0 0 56 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/5 animate-ping" />
    
    {/* Micro HUD - stunning detail */}
    <motion.div 
      animate={{ opacity: isMoving ? 1 : 0 }}
      className="absolute -top-12 -left-4 font-mono text-[7px] text-white/80 tracking-widest whitespace-nowrap bg-black/40 px-2 py-1 rounded-sm backdrop-blur-sm border border-white/5"
    >
      GPS: 52.5200° N <br/> VEL: 120 KM/H
    </motion.div>
  </div>
);

/**
 * High-End Isometric Gas Station (Well-Modeled based on reference image)
 */
const IsometricGasStation = () => (
  <svg width="300" height="250" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
    {/* Isometric Platform / Base */}
    <path d="M20 90L80 60L140 90L80 120L20 90Z" fill="#111" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
    <path d="M20 90V96L80 126L140 96V90L80 120L20 90Z" fill="#080808" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />

    {/* Pillars supporting the canopy */}
    <rect x="45" y="40" width="4" height="60" fill="white" fillOpacity="0.15" />
    <rect x="111" y="40" width="4" height="60" fill="white" fillOpacity="0.15" />

    {/* Massive Isometric Canopy (Roof) */}
    <path d="M10 40L80 10L150 40L80 70L10 40Z" fill="#0c0c0c" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M10 40V48L80 78L150 48V40L80 70L10 40Z" fill="#151515" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
    
    {/* "GAS STATION" Banner with light effects */}
    <rect x="40" y="45" width="80" height="12" rx="1" fill="#111" stroke="white" strokeWidth="0.5" strokeOpacity="0.4" />
    <motion.text 
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
      x="80" y="53" fontSize="6" fontFamily="monospace" fill="white" textAnchor="middle" dominantBaseline="middle" className="tracking-[0.3em] font-bold"
    >
      GAS STATION
    </motion.text>

    {/* High-Detail Fuel Pumps (Isometric) */}
    <g transform="translate(55, 75)">
       {/* Pump 1 */}
       <motion.path 
         animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
         transition={{ duration: 1.5, repeat: Infinity }}
         d="M0 8L12 2L24 8V28L12 34L0 28V8Z" fill="#151515" stroke="white" strokeWidth="0.5" 
       />
       <rect x="4" y="10" width="16" height="8" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.2" strokeOpacity="0.3" />
       {/* Yellow Accent / Detail (Subtle) */}
       <path d="M4 22H20" stroke="white" strokeWidth="2" strokeOpacity="0.05" />
    </g>
    <g transform="translate(90, 75)">
       {/* Pump 2 */}
       <motion.path 
         animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
         transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
         d="M0 8L12 2L24 8V28L12 34L0 28V8Z" fill="#151515" stroke="white" strokeWidth="0.5" 
       />
       <rect x="4" y="10" width="16" height="8" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.2" strokeOpacity="0.3" />
    </g>

    {/* Large Totem Sign */}
    <rect x="145" y="5" width="3" height="110" fill="white" fillOpacity="0.1" />
    <rect x="138" y="5" width="18" height="25" rx="1" fill="#080808" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="147" cy="17" r="4" fill="white" fillOpacity="0.05" className="animate-pulse" />
  </svg>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(58); // Car stops between the two pumps
    }, 500);

    const finishTimer = setTimeout(() => setIsDone(true), 5500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 8500);

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
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Static Background Texture */}
          <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          
          {/* Outer Atmosphere - Parallax Data Particles */}
          <div className="absolute inset-0 z-0 opacity-20">
             {[...Array(60)].map((_, i) => (
               <motion.div
                 key={i}
                 animate={{ y: [0, -1200] }}
                 transition={{ duration: 12 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
                 className="absolute w-px h-px bg-white"
                 style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
               />
             ))}
          </div>

          {/* Centered MODULAR LENS (Increased Size for High Detail) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", damping: 20 }}
            className="relative w-72 h-72 md:w-[500px] md:h-[500px] rounded-full border border-white/20 bg-[#050505] shadow-[0_0_150px_rgba(255,255,255,0.1)] overflow-hidden z-10"
          >
             
             {/* THE MINIATURE WORLD (Precisely Re-centered and ZOOMED IN) */}
             <div className="absolute inset-0 origin-center scale-[0.55] translate-x-[-340px] translate-y-[-80px]">
                
                {/* Road System */}
                <svg className="absolute inset-0 w-[1280px] h-[500px] pointer-events-none">
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="84" className="opacity-[0.04]" />
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="80" className="opacity-10" />
                  <path d={roadPath} fill="none" stroke="#080808" strokeWidth="78" />
                  
                  {/* Active Navigation Glow */}
                  <motion.path
                    d={roadPath}
                    fill="none"
                    stroke="white"
                    strokeWidth="5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                    className="opacity-90 blur-[1px]"
                  />
                  
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="2" className="opacity-20" strokeDasharray="20 40" />
                </svg>

                {/* WELL-MODELED ISOMETRIC GAS STATION */}
                <div className="absolute top-[38%] left-[28%] z-10 translate-y-[-50%] scale-[1.3] origin-center">
                    <IsometricGasStation />
                </div>

                {/* The Precision Car (SCALED UP inside the lens) */}
                <motion.div 
                  className="absolute z-30 pointer-events-none origin-center scale-[2.2]"
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

             {/* HUD SCANNER Radar Overlay */}
             <motion.div 
               animate={{ y: ["-100%", "300%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm z-50"
             />

             {/* Dynamic Vignette Lens Flare */}
             <div className="absolute inset-0 rounded-full shadow-[inset_0_0_120px_rgba(0,0,0,1)] pointer-events-none border border-white/5" />
          </motion.div>

          {/* FINAL SHOCKWAVE PULSE */}
          <AnimatePresence>
            {isDone && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  initial={{ scale: 0, opacity: 1, borderAlpha: 1 }}
                  animate={{ scale: 6, opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-40 h-40 border-2 border-white/30 rounded-full"
                />
              </div>
            )}
          </AnimatePresence>

          {/* Production Credit Text (Subtle) */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-10">
             <div className="text-[9px] font-mono text-white tracking-[1.5em] uppercase">SYSTEM_INITIALIZED</div>
             <div className="flex gap-4">
               <div className="w-12 h-[1px] bg-white" />
               <div className="w-12 h-[1px] bg-white" />
             </div>
          </div>

          {/* Cinematic Global Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(0,0,0,1)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
