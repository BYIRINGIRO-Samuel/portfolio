import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * EXACT DataVehicle component from SkillsSection.tsx but SCALED UP
 */
const DataVehicle = () => (
  <div className="relative transform -rotate-90 scale-150">
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
  </div>
);

const CityBuilding = ({ h = 80, w = 30 }) => (
  <div className="relative opacity-40 transition-all duration-700" style={{ width: w, height: h }}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent border-t border-x border-white/10 rounded-t-sm backdrop-blur-[2px]" />
    <div className="absolute inset-0 p-2 grid grid-cols-3 gap-1.5 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={i} 
          animate={{ opacity: Math.random() > 0.7 ? [0.1, 0.8, 0.1] : 0.15 }}
          transition={{ duration: 3 + Math.random() * 5, repeat: Infinity }}
          className="h-1.5 bg-white/60 rounded-[0.5px]" 
        />
      ))}
    </div>
  </div>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(55); // Stops a bit earlier to stay within the zoomed view
    }, 500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 7000);

    return () => {
      clearTimeout(timer);
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
          exit={{ opacity: 0, scale: 0.9, filter: "blur(40px)" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Centered Small Circular Frame */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-[#080808] shadow-[0_0_80px_rgba(255,255,255,0.05)] overflow-hidden">
             
             {/* The Content ZOOMED IN for Big Road and Big Car */}
             <div className="absolute inset-0 origin-center scale-[1.2] translate-x-[-380px] translate-y-[-100px]">
                {/* Road System with increased thickness for visual impact */}
                <svg className="absolute inset-0 w-[1280px] h-[500px] pointer-events-none">
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="80" className="opacity-[0.03]" />
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="76" className="opacity-10" />
                  <path d={roadPath} fill="none" stroke="#080808" strokeWidth="74" />
                  <path d={roadPath} fill="none" stroke="white" strokeWidth="2" className="opacity-20" strokeDasharray="20 20" />
                  
                  <motion.path
                    d={roadPath}
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 5, ease: "easeInOut" }}
                    className="opacity-40"
                  />
                </svg>

                {/* The Destination House (Scaled up) */}
                <div className="absolute top-[35%] left-[30%] z-10 scale-[2]">
                    <CityBuilding h={120} w={40} />
                </div>

                {/* The Car (Scaled up inside the zoomed path) */}
                <motion.div 
                  className="absolute z-30 pointer-events-none origin-center"
                  animate={{ offsetDistance: `${progress}%` }}
                  transition={{ duration: 5, ease: "easeInOut" }}
                  style={{ 
                    offsetPath: `path("${roadPath}")`,
                    offsetRotate: "auto 90deg"
                  }}
                >
                  <DataVehicle />
                </motion.div>
             </div>

             {/* Internal Glassmorphism Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
          </div>

          {/* Exterior Grain & Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
