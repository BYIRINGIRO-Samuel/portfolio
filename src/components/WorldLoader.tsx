import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/**
 * Modeled Giraffe Component (SVG) - White Minimalist Version
 * Realistic long-neck walk cycle with neck bobbing and leg sequence
 */
const Giraffe = ({ isMoving }: { isMoving: boolean }) => (
  <motion.div 
    animate={isMoving ? { y: [0, -1, 0] } : {}}
    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
    className="relative transform"
  >
    <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] overflow-visible">
      {/* Legs - Staggered sequence */}
      
      {/* Rear Left (Back Layer) */}
      <motion.path 
        animate={isMoving ? { d: ["M30 110 L32 145 L38 145 L36 110 Z", "M30 110 L25 135 L31 135 L36 110 Z", "M30 110 L32 145 L38 145 L36 110 Z"] } : {}}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: 0 }}
        d="M30 110 L32 145 L38 145 L36 110 Z" fill="#d1d1d1" 
      />
      
      {/* Front Left (Back Layer) */}
      <motion.path 
        animate={isMoving ? { d: ["M65 110 L67 145 L73 145 L71 110 Z", "M65 110 L60 135 L66 135 L71 110 Z", "M65 110 L67 145 L73 145 L71 110 Z"] } : {}}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: 0.35 }}
        d="M65 110 L67 145 L73 145 L71 110 Z" fill="#d1d1d1" 
      />

      {/* Body - Main Torso */}
      <path d="M25 105 C 25 85, 80 85, 80 105 L80 115 C 80 120, 25 120, 25 115 Z" fill="white" />
      
      {/* Rear Right (Front Layer) */}
      <motion.path 
        animate={isMoving ? { d: ["M40 110 L42 145 L48 145 L46 110 Z", "M40 110 L35 135 L41 135 L46 110 Z", "M40 110 L42 145 L48 145 L46 110 Z"] } : {}}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: 0.7 }}
        d="M40 110 L42 145 L48 145 L46 110 Z" fill="white" 
      />
      
      {/* Front Right (Front Layer) */}
      <motion.path 
        animate={isMoving ? { d: ["M75 110 L77 145 L83 145 L81 110 Z", "M75 110 L70 135 L76 135 L81 110 Z", "M75 110 L77 145 L83 145 L81 110 Z"] } : {}}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: 1.05 }}
        d="M75 110 L77 145 L83 145 L81 110 Z" fill="white" 
      />

      {/* Neck & Head - Bobbing Animation */}
      <motion.g
        animate={isMoving ? { rotate: [-2, 2, -2], x: [0, 1, 0] } : {}}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        className="origin-[75px_105px]"
      >
        {/* Long Neck */}
        <path d="M72 105 L85 40 L95 40 L82 105 Z" fill="white" />
        {/* Head */}
        <path d="M82 45 C 82 35, 105 35, 110 42 C 110 50, 95 52, 85 52 Z" fill="white" />
        {/* Ossicones (small horns) */}
        <rect x="85" y="32" width="2" height="8" rx="1" fill="#f5f5f5" />
        <rect x="91" y="32" width="2" height="8" rx="1" fill="#f5f5f5" />
        {/* Eye */}
        <circle cx="95" cy="42" r="1.2" fill="#000000" fillOpacity="0.6" />
        {/* Ear */}
        <path d="M83 38 C 78 35, 78 45, 83 42 Z" fill="#f5f5f5" />
      </motion.g>

      {/* Tail */}
      <path d="M25 105 C 15 105, 15 125, 20 130" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
    
    {/* Spiritual Dust/Glow Trail */}
    {isMoving && (
      <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden pointer-events-none translate-x-[-10%] translate-y-[20px]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20, y: 15, scale: 0.5 }}
            animate={{ opacity: [0, 0.3, 0], x: [20, 80], y: [15, 0], scale: [0.5, 2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
            className="absolute w-4 h-4 bg-white/20 rounded-full blur-xl"
          />
        ))}
      </div>
    )}
  </motion.div>
);

/**
 * Well-Modeled Savanna Acacia Tree - White Edition
 */
const SavannaTree = () => (
  <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">
    {/* Trunk */}
    <path d="M95 180 C 95 150, 85 130, 80 110" stroke="#f0f0f0" strokeWidth="6" strokeLinecap="round" />
    <path d="M105 180 C 105 150, 115 130, 120 110" stroke="#f0f0f0" strokeWidth="6" strokeLinecap="round" />
    
    {/* Branches */}
    <path d="M80 110 C 60 90, 40 85, 30 80" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
    <path d="M120 110 C 140 90, 160 85, 170 80" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
    <path d="M100 110 C 100 90, 100 80, 100 70" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
    
    {/* Canopy */}
    <g className="opacity-95">
      <ellipse cx="100" cy="65" rx="60" ry="12" fill="white" />
      <ellipse cx="60" cy="75" rx="45" ry="10" fill="#f8f8f8" />
      <ellipse cx="140" cy="75" rx="45" ry="10" fill="#f8f8f8" />
    </g>

    {/* Leaves clusters */}
    {[...Array(25)].map((_, i) => (
      <circle 
        key={i} 
        cx={50 + Math.random() * 100} 
        cy={50 + Math.random() * 30} 
        r={1.5 + Math.random() * 3} 
        fill="white" 
        className="animate-pulse" 
        style={{ animationDelay: `${Math.random() * 2}s` }}
      />
    ))}
  </svg>
);

const GrassBlade = ({ x, y, delay }: { x: number, y: number, delay: number }) => (
  <motion.path
    d={`M ${x} ${y} Q ${x + 2} ${y - 10}, ${x + 5} ${y - 15}`}
    stroke="white"
    strokeWidth="0.8"
    strokeOpacity="0.8"
    fill="none"
    animate={{ d: [`M ${x} ${y} Q ${x + 2} ${y - 10}, ${x + 5} ${y - 15}`, `M ${x} ${y} Q ${x - 3} ${y - 10}, ${x - 1} ${y - 15}`, `M ${x} ${y} Q ${x + 2} ${y - 10}, ${x + 5} ${y - 15}`] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(46); // Elephant stops under the tree
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
            className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full border border-white/20 bg-[#050505] shadow-[0_0_150px_rgba(255,255,255,0.1)] overflow-hidden z-10"
          >
                 
              {/* THE MINIATURE WORLD (Optimized for savanna grass scenario) */}
              <div className="absolute inset-0 origin-center scale-[0.42] translate-x-[-150px] translate-y-[100px]">
                 
                 {/* Grass Field (Increased density for a Park/Savanna look) */}
                 <svg className="absolute inset-0 w-[1280px] h-[500px] pointer-events-none overflow-visible">
                    {/* Background Soft Glow for the park area */}
                    <path d={roadPath} fill="none" stroke="white" strokeWidth="180" className="opacity-[0.03] blur-3xl" />
                    
                    {/* Heavy Grass Clusters */}
                    {[...Array(400)].map((_, i) => {
                      const t = Math.random();
                      const x = 50 + t * 1180;
                      // Distribute grass more across the "floor" instead of just a line
                      const y = 250 + Math.random() * 200;
                      return <GrassBlade key={i} x={x} y={y} delay={Math.random() * 2} />;
                    })}

                   {/* Active Spirit Trail */}
                   <motion.path
                     d={roadPath}
                     fill="none"
                     stroke="white"
                     strokeWidth="1"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: progress / 100 }}
                     transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                     className="opacity-5 blur-[1px]"
                     strokeDasharray="1 15"
                   />
                 </svg>

                 {/* THE ELEPHANT SHADOW */}
                 <motion.div 
                   className="absolute z-20 pointer-events-none origin-center"
                   animate={{ offsetDistance: `${progress}%` }}
                   transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                   style={{ 
                     offsetPath: `path("${roadPath}")`,
                     offsetRotate: "0deg",
                     width: "120px", height: "30px",
                     background: "rgba(255,255,255,0.08)",
                     filter: "blur(20px)",
                     borderRadius: "50%"
                   }}
                 />

                 {/* WHITE SAVANNA TREE - Moved UP to create more room */}
                 <div className="absolute top-[10px] left-[620px] z-10 translate-y-[-50%] translate-x-[-50%] scale-[1.3] origin-center opacity-90">
                     <SavannaTree />
                 </div>

                 {/* THE WHITE GIRAFFE */}
                 <motion.div 
                   className="absolute z-30 pointer-events-none origin-center scale-[1]"
                   animate={{ offsetDistance: `${progress}%` }}
                   transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
                   style={{ 
                     offsetPath: `path("${roadPath}")`,
                     offsetRotate: "0deg"
                   }}
                 >
                   <Giraffe isMoving={!isDone} />
                 </motion.div>
              </div>

              {/* SAVANNA ATMOSPHERE Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] to-black/90 pointer-events-none" />

              {/* HUD SCANNER Radar Overlay */}
              <motion.div 
                animate={{ y: ["-100%", "300%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none blur-sm z-50"
              />

              {/* Dynamic Vignette Lens Flare */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_120px_rgba(0,0,0,1)] pointer-events-none border border-white/5" />
           </motion.div>

           {/* FINAL SHOCKWAVE PULSE */}
           <AnimatePresence>
             {isDone && (
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <motion.div 
                   initial={{ scale: 0, opacity: 1 }}
                   animate={{ scale: 6, opacity: 0 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="w-40 h-40 border-2 border-white/10 rounded-full"
                 />
               </div>
             )}
           </AnimatePresence>

           {/* Production Credit Text */}
           <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-10">
              <div className="text-[9px] font-mono text-white tracking-[1.5em] uppercase">SPIRIT_AWAKENED</div>
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
