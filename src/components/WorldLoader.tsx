import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * The EXACT DataVehicle from SkillsSection.tsx
 */
const DataVehicle = () => (
  <div className="relative transform -rotate-90 scale-[1.5]">
    <svg width="56" height="26" viewBox="0 0 56 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
      {/* Main Luxury Chassis - Stately & Boxy Silhouette */}
      <path d="M2 13C2 8 4 4 10 4H50C54 4 54 8 54 13C54 18 54 22 50 22H10C4 22 2 18 2 13Z" fill="white" />
      
      {/* Imposing Bonnet (Hood) Section */}
      <rect x="36" y="5" width="16" height="16" rx="1" fill="white" stroke="#080808" strokeWidth="0.2" opacity="0.3" />
      
      {/* Signature Front Grille Detail */}
      <rect x="52" y="7" width="2" height="12" rx="0.5" fill="#e5e5e5" />
      <line x1="53" y1="8" x2="53" y2="18" stroke="#080808" strokeWidth="0.2" strokeDasharray="1 1" />

      {/* Spirit of Ecstasy (Front Ornament - Symbolic Dot) */}
      <circle cx="53" cy="13" r="0.8" fill="white" />

      {/* Structured Passenger Cabin / Cockpit */}
      <path d="M16 6.5C16 6.5 20 5.5 28 5.5C36 5.5 38 6.5 38 7.5V18.5C38 19.5 36 20.5 28 20.5C20 20.5 16 19.5 16 19.5V6.5Z" fill="#080808" />
      
      {/* Roof Panel Detail */}
      <rect x="20" y="8" width="14" height="10" rx="1" fill="#151515" />
      
      {/* Dual Luxury Headlights */}
      <rect x="48" y="6" width="3" height="3" rx="0.5" fill="white" className="animate-pulse" />
      <rect x="48" y="17" width="3" height="3" rx="0.5" fill="white" className="animate-pulse" />

      {/* Side Coachline (Accent Pinstripe) */}
      <line x1="10" y1="4.5" x2="50" y2="4.5" stroke="#080808" strokeWidth="0.3" opacity="0.2" />
      <line x1="10" y1="21.5" x2="50" y2="21.5" stroke="#080808" strokeWidth="0.3" opacity="0.2" />

      {/* Side Mirrors */}
      <rect x="38" y="3" width="3" height="1.5" rx="0.5" fill="white" />
      <rect x="38" y="21.5" width="3" height="1.5" rx="0.5" fill="white" />
    </svg>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/5 animate-ping" />
  </div>
);

/**
 * Realistic Modern Luxury House Silhouette
 */
const ModernMansion = () => (
  <svg width="240" height="160" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
    {/* Architectural Frame */}
    <path d="M10 70H110V35H85V25H35V35H10V70Z" fill="#080808" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
    {/* Large Glass Windows (Glow) */}
    <rect x="42" y="30" width="36" height="15" fill="white" fillOpacity="0.05" />
    <rect x="15" y="45" width="20" height="20" fill="white" fillOpacity="0.03" />
    <rect x="85" y="45" width="20" height="20" fill="white" fillOpacity="0.03" />
    {/* Main Entrance */}
    <rect x="52" y="50" width="16" height="20" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.1" strokeOpacity="0.3" />
    {/* Balcony Railing */}
    <line x1="42" y1="45" x2="78" y2="45" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="45" y1="45" x2="45" y2="30" stroke="white" strokeWidth="0.1" strokeOpacity="0.1" />
    <line x1="75" y1="45" x2="75" y2="30" stroke="white" strokeWidth="0.1" strokeOpacity="0.1" />
  </svg>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 7500); // Duration for the car to reach and stop

    return () => clearTimeout(timer);
  }, [onComplete]);

  // The EXACT road path from SkillsSection.tsx
  const roadPath = "M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "brightness(0) blur(20px)" }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-6xl h-screen flex items-center justify-center">
            
            {/* The Road Surface */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1280 500" preserveAspectRatio="xMidYMid slice">
               <path
                 d={roadPath}
                 fill="none"
                 stroke="white"
                 strokeWidth="60"
                 strokeLinecap="round"
               />
               <path
                 d={roadPath}
                 fill="none"
                 stroke="white"
                 strokeWidth="2"
                 strokeDasharray="15 15"
                 className="opacity-40"
               />
            </svg>

            {/* The Luxury House (Goal Position) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute z-10"
              style={{ left: "85%", top: "82%", transform: "translate(-50%, -50%)" }}
            >
              <ModernMansion />
            </motion.div>

            {/* The Car Moving Along the Exact Path */}
            <motion.div
              className="absolute z-20 pointer-events-none"
              initial={false}
              animate={{ 
                offsetDistance: "85%", // Stops just before/at the house
              }}
              transition={{ 
                duration: 6, 
                ease: "easeInOut",
                delay: 0.5 
              }}
              style={{ 
                offsetPath: `path("${roadPath}")`,
                offsetRotate: "auto 90deg"
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{ duration: 0.15, repeat: Infinity, repeatType: "reverse" }}
              >
                <DataVehicle />
              </motion.div>
            </motion.div>

            {/* Atmospheric Polish */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_300px_rgba(0,0,0,1)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.01] rounded-full blur-[200px]" />
          </div>

          {/* Minimal Status Indicators */}
          <div className="absolute top-12 left-12 flex flex-col gap-1 opacity-20">
             <div className="text-[10px] font-mono text-white tracking-widest uppercase">AUTO_PILOT: ON</div>
             <div className="text-[10px] font-mono text-white tracking-widest uppercase">TARGET: DOMICILE</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
