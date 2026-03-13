import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/**
 * Modeled Giraffe Component (SVG) - Realistic Version
 * Features realistic coloring, spot patterns, and scaled-up proportions
 */
const Giraffe = ({ isMoving }: { isMoving: boolean }) => (
  <motion.div 
    animate={isMoving ? { y: [0, -5, 0] } : {}}
    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    className="relative transform"
  >
    <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(234,179,8,0.2)] overflow-visible">
      {/* Definitive Giraffe Colors: Tan Base (#F59E0B), Brown Spots (#78350F) */}
      
      {/* Legs - Rear Left */}
      <motion.path 
        animate={isMoving ? { d: ["M40 140 L43 190 L51 190 L48 140 Z", "M40 140 L30 170 L35 170 L48 140 Z", "M40 140 L43 190 L51 190 L48 140 Z"] } : {}}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        d="M40 140 L43 190 L51 190 L48 140 Z" fill="#B45309" 
      />
      
      {/* Legs - Front Left */}
      <motion.path 
        animate={isMoving ? { d: ["M95 140 L98 190 L106 190 L103 140 Z", "M95 140 L85 170 L90 170 L103 140 Z", "M95 140 L98 190 L106 190 L103 140 Z"] } : {}}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        d="M95 140 L98 190 L106 190 L103 140 Z" fill="#B45309" 
      />

      {/* Body - Main Torso */}
      <path d="M30 135 C 30 105, 110 105, 110 135 L110 150 C 110 160, 30 160, 30 150 Z" fill="#F59E0B" />
      
      {/* Body Spots */}
      <circle cx="50" cy="130" r="8" fill="#78350F" />
      <circle cx="80" cy="125" r="10" fill="#78350F" />
      <circle cx="45" cy="145" r="6" fill="#78350F" />
      <circle cx="95" cy="135" r="7" fill="#78350F" />
      <circle cx="70" cy="148" r="9" fill="#78350F" />
      
      {/* Legs - Rear Right */}
      <motion.path 
        animate={isMoving ? { d: ["M55 140 L58 195 L66 195 L63 140 Z", "M55 140 L45 175 L50 175 L63 140 Z", "M55 140 L58 195 L66 195 L63 140 Z"] } : {}}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        d="M55 140 L58 195 L66 195 L63 140 Z" fill="#D97706" 
      />
      
      {/* Legs - Front Right */}
      <motion.path 
        animate={isMoving ? { d: ["M110 140 L113 195 L121 195 L118 140 Z", "M110 140 L100 175 L105 175 L118 140 Z", "M110 140 L113 195 L121 195 L118 140 Z"] } : {}}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
        d="M110 140 L113 195 L121 195 L118 140 Z" fill="#D97706" 
      />

      {/* Neck & Head Section */}
      <motion.g
        animate={isMoving ? { rotate: [-1, 2, -1], x: [0, 2, 0] } : {}}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        className="origin-[100px_135px]"
      >
        {/* Long Neck */}
        <path d="M95 135 L115 40 L130 40 L110 135 Z" fill="#F59E0B" />
        
        {/* Neck Spots */}
        <circle cx="108" cy="110" r="5" fill="#78350F" />
        <circle cx="115" cy="85" r="4" fill="#78350F" />
        <circle cx="120" cy="65" r="4.5" fill="#78350F" />
        <circle cx="124" cy="48" r="3" fill="#78350F" />

        {/* Head */}
        <path d="M110 45 C 110 32, 145 32, 150 42 C 150 55, 130 58, 115 58 Z" fill="#F59E0B" />
        
        {/* Features */}
        <circle cx="130" cy="42" r="1.5" fill="black" />
        <rect x="115" y="28" width="3" height="12" rx="1.5" fill="#78350F" />
        <rect x="123" y="28" width="3" height="12" rx="1.5" fill="#78350F" />
        <path d="M112 38 C 105 35, 105 45, 112 42 Z" fill="#B45309" />
      </motion.g>

      {/* Tail */}
      <path d="M30 135 C 15 135, 10 155, 15 170" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    
    {/* Dust/Glow Trail */}
    {isMoving && (
      <div className="absolute bottom-[-10px] left-0 w-full h-12 overflow-hidden pointer-events-none translate-x-[-10%]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20, y: 15, scale: 0.5 }}
            animate={{ opacity: [0, 0.2, 0], x: [20, 100], y: [15, 0], scale: [0.5, 2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.25 }}
            className="absolute w-5 h-5 bg-orange-200/20 rounded-full blur-xl"
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
  <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
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
    {[...Array(30)].map((_, i) => (
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
    strokeWidth="1.2"
    strokeOpacity="0.9"
    fill="none"
    animate={{ d: [`M ${x} ${y} Q ${x + 2} ${y - 10}, ${x + 5} ${y - 15}`, `M ${x} ${y} Q ${x - 3} ${y - 10}, ${x - 1} ${y - 15}`, `M ${x} ${y} Q ${x + 2} ${y - 10}, ${x + 5} ${y - 15}`] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

/**
 * Modeled White Bird Component (SVG)
 * Simple flapping animation for birds flying in the night sky
 */
const NightBird = ({ delay, xTarget }: { delay: number, xTarget: number }) => (
  <motion.div
    initial={{ x: -100, y: 30 + Math.random() * 60, opacity: 0 }}
    animate={{ x: xTarget, opacity: [0, 0.6, 0.6, 0] }}
    transition={{ duration: 10, delay, ease: "linear" }}
    className="absolute z-0"
  >
    <motion.svg 
      width="18" height="12" viewBox="0 0 20 15" 
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path 
        d="M0 5 Q 5 0, 10 5 Q 15 0, 20 5" 
        stroke="white" strokeWidth="1.2" fill="none"
        animate={{ d: ["M0 8 Q 5 0, 10 8 Q 15 0, 20 8", "M0 2 Q 5 10, 10 2 Q 15 10, 20 2", "M0 8 Q 5 0, 10 8 Q 15 0, 20 8"] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </motion.svg>
  </motion.div>
);

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [hudProgress, setHudProgress] = useState(0);

  useEffect(() => {
    // Smoother HUD progress for visual polish
    const hudInterval = setInterval(() => {
        setHudProgress(prev => {
            if (prev >= 100) return 100;
            const step = Math.random() > 0.8 ? 5 : 0.8; // Realistic variable jumps
            return Math.min(100, prev + (100 - prev) * 0.05 + step);
        });
    }, 120);

    const timer = setTimeout(() => {
      setProgress(46); // Giraffe stops under the tree
    }, 1500);

    const finishTimer = setTimeout(() => {
        setIsDone(true);
        setHudProgress(100);
    }, 14500);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 17500);

    return () => {
      clearInterval(hudInterval);
      clearTimeout(timer);
      clearTimeout(finishTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Road path - Elevated further for center-lens visibility
  const roadPath = "M 0 180 L 1400 180";

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

          {/* PREMIUM LOADER FRAME & HUD */}
          <div className="relative">
            {/* Tactical Grid Overlay */}
            <div className="absolute inset-[-150px] opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            
            {/* Technical Rotating Frame Decor */}
            <motion.svg className="absolute inset-[-60px] w-[calc(100%+120px)] h-[calc(100%+120px)] pointer-events-none origin-center" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                <circle cx="50%" cy="50%" r="49%" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="1 10" className="opacity-10" />
                <path d="M 50% 5% L 50% 8%" stroke="white" strokeWidth="2" className="opacity-30" />
                <path d="M 50% 92% L 50% 95%" stroke="white" strokeWidth="2" className="opacity-30" />
            </motion.svg>

            {/* Outer Rotating Progress Ring (High Precision) */}
            <svg className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)] -rotate-90 pointer-events-none opacity-60">
                <circle 
                    cx="50%" cy="50%" r="48%" 
                    stroke="white" strokeWidth="0.5" fill="none" 
                    strokeDasharray="2 4"
                    className="opacity-10"
                />
                <motion.circle 
                    cx="50%" cy="50%" r="48%" 
                    stroke="white" strokeWidth="2" fill="none" 
                    strokeDasharray="1000"
                    animate={{ strokeDashoffset: 1000 - (hudProgress * 10) }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </svg>

            {/* Micro-HUD Telemetry (Top Left) */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-[-50px] left-[-30px] flex gap-4 text-[9px] font-mono text-white/40 tracking-wider pointer-events-none"
            >
                <div className="flex flex-col gap-1">
                    <span className="text-white/60">SYS_INIT: OK</span>
                    <span className="flex items-center gap-1">
                        <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        POS: 1.80.350
                    </span>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex flex-col gap-1">
                    <span>LENS_ID: PRM_88</span>
                    <span>TYPE: SAVANNA</span>
                </div>
            </motion.div>

            {/* Micro-HUD Percentage (Bottom Right) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute bottom-[-50px] right-[-30px] flex items-end gap-3 pointer-events-none"
            >
                <div className="flex flex-col items-end">
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Deployment Status</div>
                    <div className="text-2xl font-mono text-white font-light tracking-tighter">
                        {Math.floor(hudProgress)}<span className="text-sm opacity-40 ml-1">%</span>
                    </div>
                </div>
            </motion.div>

            {/* Centered MODULAR LENS (Increased Size for High Detail) */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, type: "spring", damping: 20 }}
                className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full border border-white/40 bg-[#020205] shadow-[0_0_100px_rgba(255,255,255,0.02)] overflow-hidden z-10"
            >
              {/* SKY ELEMENTS (Inside the lens) */}
              <div className="absolute inset-0 z-0">
                {/* Night Birds Flying */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <NightBird key={i} delay={4 + i * 1.2} xTarget={450} />
                  ))}
                </div>

                {/* Glowing Moon */}
                <div className="absolute top-[12%] left-[12%] w-14 h-14 rounded-full bg-white/5 blur-[1px]">
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-[4px] animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-white/95" style={{ clipPath: "path('M 28 0 A 28 28 0 1 0 28 56 A 18 24 0 1 1 28 0')" }} />
                </div>
                
                {/* Twinkling Stars */}
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
                    className="absolute w-[2px] h-[2px] bg-white rounded-full"
                    style={{ 
                      top: `${Math.random() * 60}%`, 
                      left: `${Math.random() * 100}%`,
                      boxShadow: "0 0 5px rgba(255,255,255,0.8)"
                    }}
                  />
                ))}
              </div>

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
                      // Grounded on the new elevated path (Y=180)
                      const y = 110 + Math.random() * 150;
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

                   {/* WHITE SAVANNA TREE - Elevated perfectly for center visibility */}
                   <div className="absolute top-[125px] left-[620px] z-10 translate-y-[-50%] translate-x-[-50%] scale-[1.3] origin-center opacity-100">
                       <SavannaTree />
                   </div>

                  {/* CINEMATIC TARGET LOCKING (Homing System) */}
                  <motion.div 
                    className="absolute z-50 pointer-events-none"
                    animate={{ 
                        offsetDistance: `${progress}%`,
                        opacity: isDone ? 0 : 1
                    }}
                    transition={{ offsetDistance: { duration: 12, ease: "easeInOut" } }}
                    style={{ 
                        offsetPath: `path("${roadPath}")`,
                        offsetRotate: "0deg",
                        width: "180px", height: "180px",
                        transform: "translate(-50%, -50%)"
                    }}
                  >
                        {/* Interactive UI Corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/40" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/40" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/40" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/40" />
                        
                        {/* Scanning Bar */}
                        <motion.div 
                            animate={{ top: ["10%", "90%", "10%"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute left-0 right-0 h-[1px] bg-white/20 blur-[1px]" 
                        />

                        {/* Telemetry Labels */}
                        <div className="absolute -top-10 left-0 flex flex-col font-mono text-[8px] text-white/60 uppercase">
                            <span className="bg-white/10 px-1">Tracking_ID: 0xG_SPIRIT</span>
                            <span>Distance: {(progress * 12.5).toFixed(1)}m</span>
                        </div>
                  </motion.div>

                  {/* THE WHITE GIRAFFE */}
                  <motion.div 
                    className="absolute z-30 pointer-events-none origin-center scale-[1]"
                    animate={{ 
                      offsetDistance: `${progress}%`,
                      filter: "brightness(0.9)"
                    }}
                    transition={{ 
                      offsetDistance: { duration: 12, ease: "easeInOut" },
                      filter: { duration: 6 }
                    }}
                    style={{ 
                      offsetPath: `path("${roadPath}")`,
                      offsetRotate: "0deg"
                    }}
                  >
                    <Giraffe isMoving={!isDone} />
                  </motion.div>
               </div>

                {/* ATMOSPHERE Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-40" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)" }} />

               {/* HUD SCANNER Radar Overlay */}
               <motion.div 
                 animate={{ y: ["-100%", "300%"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none blur-sm z-50"
               />

               {/* Dynamic Vignette Lens Flare - Refined dynamics */}
               <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none border border-white/10" />
            </motion.div>
          </div>

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

            {/* Cinematic Global Vignette - Reduced for day visibility */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
