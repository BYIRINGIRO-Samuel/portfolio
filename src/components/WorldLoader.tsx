import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Ultra-High Fidelity Rolls Royce Silhouette
 * Based on the DataVehicle from SkillsSection but enhanced for cinematic loading.
 */
const RollsRoyce = () => (
  <div className="relative transform scale-150">
    <svg width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ghostly Underglow - Cinematic Detail */}
      <defs>
        <radialGradient id="carGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="40" rx="60" ry="10" fill="url(#carGlow)" />

      {/* Main Luxury Chassis - Stately & Boxy Silhouette (The Phantoms) */}
      <path d="M5 30C5 25 10 20 20 20H110C115 20 118 25 118 30C118 35 118 42 110 42H20C10 42 5 37 5 30Z" fill="black" />
      
      {/* Imposing Bonnet (Hood) Section */}
      <rect x="75" y="21" width="40" height="15" rx="1" fill="#0c0c0c" />
      
      {/* Signature Tall Pantheon Grille */}
      <rect x="115" y="23" width="3" height="15" rx="0.5" fill="#1a1a1a" />
      
      {/* Spirit of Ecstasy (Front Ornament - Precise) */}
      <path d="M116 23C116 23 115 18 117 17C118 16 119 18 119 18" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />

      {/* Structured Passenger Cabin / Cockpit */}
      <path d="M30 22C30 22 40 20 55 20C75 20 85 22 85 24V40C85 41 75 42 55 42C35 42 30 41 30 40V22Z" fill="black" />
      
      {/* Window Details (Tinted) */}
      <rect x="40" y="23" width="18" height="10" rx="1" fill="#080808" stroke="white" strokeWidth="0.1" strokeOpacity="0.1" />
      <rect x="62" y="23" width="18" height="10" rx="1" fill="#080808" stroke="white" strokeWidth="0.1" strokeOpacity="0.1" />
      
      {/* Dual Luxury Headlights - "Angelic" Eyes */}
      <motion.rect 
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        x="110" y="25" width="4" height="2" rx="0.5" fill="white" 
      />
      <motion.rect 
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
        x="110" y="35" width="4" height="2" rx="0.5" fill="white" 
      />

      {/* Wheels with realistic motion spin */}
      <g>
         <circle cx="25" cy="40" r="6" fill="#050505" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
         <circle cx="95" cy="40" r="6" fill="#050505" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
         <motion.path 
           animate={{ rotate: 360 }}
           transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
           d="M23 40H27M25 38V42" stroke="white" strokeWidth="0.3" strokeOpacity="0.1" transform-origin="25 40"
         />
         <motion.path 
           animate={{ rotate: 360 }}
           transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
           d="M93 40H97M95 38V42" stroke="white" strokeWidth="0.3" strokeOpacity="0.1" transform-origin="95 40"
         />
      </g>
    </svg>
  </div>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 7000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2) blur(30px)" }}
          transition={{ duration: 1, ease: "circInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden px-4"
        >
          {/* Centered Production Lens */}
          <div className="relative w-full max-w-4xl h-80 flex flex-col items-center justify-center">
            
            {/* The Cinematic Background (Moving Road/Cityscape) */}
            <div className="absolute inset-x-0 h-40 bg-white/[0.02] border-y border-white/5 overflow-hidden">
               {/* Moving Road Lines */}
               <div className="absolute inset-0 flex items-center">
                 {[...Array(20)].map((_, i) => (
                   <motion.div
                     key={i}
                     initial={{ x: "100%" }}
                     animate={{ x: "-1500%" }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
                     className="w-12 h-[1px] bg-white opacity-20 mr-24 flex-shrink-0"
                   />
                 ))}
               </div>

               {/* Moving Distant Particles (City Blur) */}
               {[...Array(30)].map((_, i) => (
                 <motion.div
                   key={i}
                   initial={{ x: "110%", y: Math.random() * 100 }}
                   animate={{ x: "-10%" }}
                   transition={{ duration: 1 + Math.random() * 2, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                   className="absolute w-[1px] h-[1px] bg-white opacity-40 blur-[1px]"
                 />
               ))}
            </div>

            {/* THE ROLLS ROYCE (Static in Frame, Environment Moves) */}
            <div className="relative z-20 flex flex-col items-center">
               <motion.div
                 animate={{ 
                   y: [0, -1.5, 0],
                   rotate: [0, -0.2, 0]
                 }}
                 transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
               >
                 <RollsRoyce />
               </motion.div>
               
               {/* Smooth Ground Reflection */}
               <div className="mt-8 scale-y-[-0.6] opacity-10 filter blur-md">
                   <RollsRoyce />
               </div>
            </div>

            {/* TECHNICAL MARKERS (The "Loading" Vibe) */}
            <div className="absolute bottom-4 flex gap-12 pointer-events-none opacity-20">
               <div className="flex flex-col items-center">
                  <div className="text-[8px] font-mono text-white/40 mb-1">STABILITY_CHECK</div>
                  <div className="w-12 h-[1px] bg-white" />
               </div>
               <div className="flex flex-col items-center">
                  <div className="text-[8px] font-mono text-white/40 mb-1">ENGINE_INIT</div>
                  <div className="w-12 h-[1px] bg-white" />
               </div>
               <div className="flex flex-col items-center">
                  <div className="text-[8px] font-mono text-white/40 mb-1">BROADCAST_LIVE</div>
                  <div className="w-12 h-[1px] bg-white" />
               </div>
            </div>

          </div>

          {/* Cinematic Overlay - CRT Grain & Scanlines */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />
          <motion.div 
            animate={{ opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"
          />
          
          {/* Transition Flash */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ delay: 6.8, duration: 0.2 }}
            className="absolute inset-0 bg-white z-[60]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
