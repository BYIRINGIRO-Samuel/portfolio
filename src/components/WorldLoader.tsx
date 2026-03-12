import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/**
 * EXACT DataVehicle component from SkillsSection.tsx but with Cinematic Light Beams
 */
const DataVehicle = ({ isMoving }: { isMoving: boolean }) => (
  <div className="relative transform -rotate-90">
    {/* Cinematic Headlight Beams */}
    <div className="absolute top-[48px] left-[6px] w-[120px] h-[40px] pointer-events-none overflow-hidden origin-top scale-y-[0.5]">
       <motion.div 
         animate={{ opacity: isMoving ? [0.1, 0.3, 0.1] : 0.4 }}
         transition={{ duration: 1.5, repeat: Infinity }}
         className="w-full h-full bg-gradient-to-r from-white/20 to-transparent blur-md" 
         style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 60%)" }}
       />
    </div>
    <div className="absolute top-[48px] left-[17px] w-[120px] h-[40px] pointer-events-none overflow-hidden origin-top scale-y-[0.5]">
       <motion.div 
         animate={{ opacity: isMoving ? [0.1, 0.3, 0.1] : 0.4 }}
         transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
         className="w-full h-full bg-gradient-to-r from-white/20 to-transparent blur-md" 
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

const CityBuilding = ({ h = 80, w = 30 }) => (
  <div className="relative group/building opacity-60 transition-all duration-700" style={{ width: w, height: h }}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent border-t border-x border-white/20 rounded-t-sm backdrop-blur-[4px]" />
    <div className="absolute inset-0 p-2 grid grid-cols-3 gap-1.5 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={i} 
          animate={{ opacity: [0.1, 0.9, 0.1], backgroundColor: ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.4)"] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
          className="h-1.5 rounded-[0.5px]" 
        />
      ))}
    </div>
    {/* Beacon Light */}
    <motion.div 
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full p-px shadow-[0_0_10px_white]"
    />
  </div>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(78); 
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

          {/* Centered MODULAR CIRCLE (Smaller Size) */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/10 bg-[#050505] shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden z-10 p-4"
          >
             
             {/* THE MINIATURE WORLD (Reduced Scale for "Stunning" Clarity) */}
             <div className="absolute inset-0 origin-center scale-[0.3] translate-x-[-420px] translate-y-[-140px]">
                
                {/* Road System */}
                <svg className="absolute inset-0 w-[1280px] h-[500px] pointer-events-none">
                  {/* Subtle Road Texture */}
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="46" className="opacity-[0.02]" />
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="42" className="opacity-10" />
                  <path d={roadPath} fill="none" stroke="#080808" strokeWidth="40" />
                  
                  {/* Animated Grid Line */}
                  <motion.path
                    d={roadPath}
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                    className="opacity-60 blur-[0.5px]"
                  />
                  
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="1" className="opacity-10" strokeDasharray="10 10" />
                </svg>

                {/* Destination Pillar (The House) */}
                <div className="absolute top-[82%] right-[10%] z-10 translate-y-[-50%]">
                    <CityBuilding h={180} w={60} />
                </div>

                {/* The Precision Car */}
                <motion.div 
                  className="absolute z-30 pointer-events-none origin-center"
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
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none blur-sm"
             />

             {/* Glass Reflection */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 pointer-events-none" />
          </motion.div>

          {/* FINAL SHOCKWAVE PULSE */}
          <AnimatePresence>
            {isDone && (
              <motion.div 
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute w-64 h-64 border border-white/20 rounded-full z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Minimal Production Text */}
          <div className="absolute bottom-12 text-[7px] font-mono text-white/10 tracking-[1em] uppercase select-none">
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
