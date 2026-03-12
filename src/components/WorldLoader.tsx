import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * EXACT DataVehicle component from SkillsSection.tsx
 */
const DataVehicle = () => (
  <div className="relative transform -rotate-90">
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
    {/* Underglow - Refined for Luxury Feel */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/5 animate-ping" />
  </div>
);

/**
 * EXACT CityBuilding component from SkillsSection.tsx
 */
const CityBuilding = ({ h = 80, w = 30, delay = 0, opacity = "opacity-20" }) => (
  <div className={`relative group/building ${opacity} hover:opacity-40 transition-all duration-700`} style={{ width: w, height: h }}>
    {/* Main Structure */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent border-t border-x border-white/10 rounded-t-sm backdrop-blur-[2px]" />
    
    {/* Rooftop Details (Antennas/Comms) */}
    <div className="absolute -top-6 left-1/4 w-[1px] h-6 bg-white/20">
       <motion.div 
         animate={{ opacity: [0.2, 1, 0.2] }}
         transition={{ duration: 2, repeat: Infinity, delay: delay }}
         className="absolute top-0 -left-0.5 w-1 h-1 rounded-full bg-red-500 shadow-[0_0_5px_red]"
       />
    </div>
    <div className="absolute -top-3 right-1/4 w-[2px] h-3 bg-white/10" />

    {/* Window Grid System */}
    <div className="absolute inset-0 p-2 grid grid-cols-3 gap-1.5 overflow-hidden">
      {[...Array(24)].map((_, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0.1 }}
          animate={{ opacity: Math.random() > 0.7 ? [0.1, 0.8, 0.1] : 0.15 }}
          transition={{ duration: 3 + Math.random() * 5, repeat: Infinity }}
          className="h-1.5 bg-white/60 rounded-[0.5px] shadow-[0_0_2px_rgba(255,255,255,0.2)]" 
        />
      ))}
    </div>

    {/* Vertical Architectural Lines */}
    <div className="absolute inset-0 border-x border-white/5 m-1" />
  </div>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start car movement
    const timer = setTimeout(() => {
      setProgress(78); // Car will stop at the house
    }, 500);

    // Fade out after car arrives
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
          exit={{ opacity: 0, scale: 0.9, filter: "brightness(0) blur(20px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          {/* Centered Scene Container (Mirrors SkillsSection exactly) */}
          <div className="relative w-full max-w-7xl h-[550px] bg-[#080808] rounded-2xl overflow-hidden shadow-2xl mx-4">
             
             {/* EXACT Road logic from SkillsSection */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
               <defs>
                 <path id="road-geometry" d={roadPath} />
               </defs>
               
               {/* Broad Road Surface (Asphalt) */}
               <use href="#road-geometry" fill="none" stroke="white" strokeWidth="42" className="opacity-[0.03]" />

               {/* Solid Edge Lines (Shoulders) */}
               <use href="#road-geometry" fill="none" stroke="white" strokeWidth="40" className="opacity-10" />
               <use href="#road-geometry" fill="none" stroke="#080808" strokeWidth="38" />

               {/* Dashed Center Line */}
               <use href="#road-geometry" fill="none" stroke="white" strokeWidth="1" className="opacity-20" strokeDasharray="10 10" />
               
               {/* Active Path Highlight */}
               <motion.path
                 d={roadPath}
                 fill="none"
                 stroke="white"
                 strokeWidth="1.5"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: progress / 100 }}
                 transition={{ duration: 5, ease: "easeInOut" }}
                 className="opacity-40"
               />
             </svg>

             {/* The House (Target Destination) */}
             <div className="absolute top-[78%] right-[10%] z-10 origin-bottom scale-125">
                <CityBuilding h={180} w={60} opacity="opacity-60" delay={0.5} />
             </div>

             {/* The Car (EXACT code and animation logic) */}
             <motion.div 
               className="absolute z-30 pointer-events-none origin-center"
               animate={{ 
                 offsetDistance: `${progress}%`,
               }}
               transition={{ duration: 5, ease: "easeInOut" }}
               style={{ 
                 offsetPath: `path("${roadPath}")`,
                 offsetRotate: "auto 90deg"
               }}
             >
               <DataVehicle />
             </motion.div>

             {/* Atmosphere / Details */}
             <div className="absolute top-10 left-10">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-white">
                  Skill<span className="text-white/20">Road</span>.
                </h2>
             </div>
             
             <div className="absolute bottom-10 left-10 flex items-center gap-8 border-t border-white/5 pt-6 w-[80%]">
                <div className="flex flex-col gap-1">
                   <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Navigation_Target</div>
                   <div className="text-[10px] font-bold text-white uppercase">DESTINATION: HOME</div>
                </div>
                <div className="flex-grow h-[1px] bg-white/5 relative overflow-hidden">
                   <motion.div 
                     animate={{ x: [`${progress}%`, '100%'] }}
                     transition={{ duration: 1, repeat: Infinity }}
                     className="absolute top-0 left-0 w-8 h-full bg-white opacity-20"
                   />
                </div>
             </div>

          </div>

          {/* Exterior Vignette */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
