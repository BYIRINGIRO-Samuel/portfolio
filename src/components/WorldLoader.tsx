import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-detail Realistic Elephant SVG component
const Elephant = () => (
  <svg width="240" height="180" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g
      animate={{ 
        y: [0, -1, 0],
        rotate: [0, 0.5, 0]
      }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body */}
      <path d="M95 45c0-15-10-25-30-25s-35 8-40 20c-3 8-2 15 2 20h45c15 0 23-5 23-15z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.5" />
      {/* Head */}
      <path d="M30 35c0-8-5-15-12-15s-12 7-12 15 5 15 12 15 12-7 12-15z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.5" />
      {/* Trunk */}
      <path d="M10 40c-2 0-8 5-8 15s5 12 8 12 4-2 2-5-4 0-4-7 4-10 2-15z" stroke="white" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Ear */}
      <path d="M35 30c-2-5-8-8-12-5s-5 12 0 15 10 0 12-10z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="0.3" />
      {/* Legs (Front) */}
      <rect x="35" y="60" width="8" height="18" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.3" />
      <rect x="48" y="62" width="8" height="18" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.3" />
      {/* Legs (Back) */}
      <rect x="75" y="60" width="8" height="18" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.3" />
      <rect x="85" y="62" width="8" height="18" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.3" />
      {/* Eye */}
      <circle cx="20" cy="35" r="1" fill="white" className="animate-pulse" />
      {/* Tusks (Subtle) */}
      <path d="M10 45c0 0-5 2-5 8" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" strokeLinecap="round" />
    </motion.g>
  </svg>
);

// High-detail Realistic Tree SVG component
const AcaciaTree = () => (
  <svg width="400" height="300" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trunk */}
    <path d="M95 140c2-10 0-30 5-45 5-15 15-20 25-25" stroke="white" strokeWidth="3" strokeOpacity="0.1" />
    <path d="M100 140c-2-15 2-40 0-60" stroke="white" strokeWidth="4" strokeOpacity="0.2" strokeLinecap="round" />
    
    {/* Branches & Canopy */}
    <g opacity="0.15">
      <path d="M60 70c0 0 20-20 80-20s100 20 100 20v5H60v-5z" fill="white" />
      <path d="M40 80c0 0 30-25 120-25s140 25 140 25v8H40v-8z" fill="white" />
    </g>

    {/* Detail Leaves (Dots for realism) */}
    {[...Array(60)].map((_, i) => (
      <circle 
        key={i}
        cx={50 + Math.random() * 100}
        cy={50 + Math.random() * 40}
        r={0.5 + Math.random()}
        fill="white"
        fillOpacity={0.1 + Math.random() * 0.3}
      />
    ))}
  </svg>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1500);
    }, 8500); // Extended for the walk animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "brightness(0) blur(20px)" }}
          transition={{ duration: 1.2 }}
          className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
        >
          {/* Night Sky Elements */}
          <div className="absolute inset-0 z-0">
             {/* Stars */}
             {[...Array(100)].map((_, i) => (
               <motion.div
                 key={i}
                 animate={{ opacity: [0.1, 0.5, 0.1] }}
                 transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
                 className="absolute bg-white rounded-full"
                 style={{
                   width: Math.random() * 2,
                   height: Math.random() * 2,
                   top: `${Math.random() * 100}%`,
                   left: `${Math.random() * 100}%`,
                 }}
               />
             ))}
             
             {/* The Moon */}
             <div className="absolute top-12 right-12 md:top-24 md:right-24">
                <div className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-white/10 blur-xl" />
                <motion.div 
                  animate={{ opacity: [0.8, 0.9, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 w-16 h-16 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white to-gray-400 shadow-[0_0_60px_rgba(255,255,255,0.3)] overflow-hidden"
                >
                   {/* Moon Texture/Craters */}
                   <div className="absolute top-[20%] left-[30%] w-[15%] h-[15%] rounded-full bg-black/10" />
                   <div className="absolute top-[40%] left-[60%] w-[10%] h-[10%] rounded-full bg-black/10" />
                   <div className="absolute top-[60%] left-[20%] w-[20%] h-[20%] rounded-full bg-black/10" />
                </motion.div>
             </div>
          </div>

          <div className="relative w-full max-w-5xl h-[60vh] flex flex-col justify-end">
            
            {/* The Tree (Static) */}
            <div className="absolute right-0 bottom-[-20%] z-10 translate-x-[20%]">
               <AcaciaTree />
            </div>

            {/* The Elephant (Animated Walk) */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "30%", opacity: 1 }}
              transition={{ 
                duration: 7, 
                ease: "linear",
                opacity: { duration: 2 } 
              }}
              className="absolute left-0 bottom-[-10%] z-20"
            >
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Elephant />
              </motion.div>
            </motion.div>

            {/* Subtle Ground Fog */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/[0.05] to-transparent blur-2xl z-30" />
          </div>

          {/* Cinematic Overlay */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_300px_rgba(0,0,0,0.95)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
