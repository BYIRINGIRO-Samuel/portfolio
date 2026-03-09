import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

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

      {/* Slim Tail Lights */}
      <rect x="2" y="8" width="1" height="3" rx="0.3" fill="#333" />
      <rect x="2" y="15" width="1" height="3" rx="0.3" fill="#333" />

      {/* Side Mirrors */}
      <rect x="38" y="3" width="3" height="1.5" rx="0.5" fill="white" />
      <rect x="38" y="21.5" width="3" height="1.5" rx="0.5" fill="white" />
    </svg>
    {/* Underglow - Refined for Luxury Feel */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/5 animate-ping" />
  </div>
);

const CityBench = ({ occupants = 2 }) => (
  <div className="relative group/bench">
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="opacity-40 group-hover/bench:opacity-80 transition-opacity">
      {/* Bench Frame */}
      <path d="M4 18H36M4 14H36M6 10V22M34 10V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 14C6 14 10 12 20 12C30 12 34 14 34 14" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* People Silhouettes */}
      {occupants >= 1 && (
        <g transform="translate(10, 4)">
          <circle cx="4" cy="2" r="2.5" fill="white" />
          <path d="M1 8C1 6 2 5 4 5C6 5 7 6 7 8V12H1V8Z" fill="white" />
        </g>
      )}
      {occupants >= 2 && (
        <g transform="translate(22, 5)">
          <circle cx="4" cy="2" r="2.5" fill="white" fillOpacity="0.7" />
          <path d="M1 8C1 6 2 5 4 5C6 5 7 6 7 8V12H1V8Z" fill="white" fillOpacity="0.7" />
        </g>
      )}
    </svg>
    <div className="absolute inset-0 bg-white/5 blur-md rounded-full -z-10 group-hover/bench:bg-white/10 transition-all" />
  </div>
);

const RealisticGrassClump = ({ scale = 1, opacity = 0.3 }) => (
  <div className="pointer-events-none transition-all duration-300 group-hover:scale-110" style={{ transform: `scale(${scale})` }}>
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
      <path d="M15 20 Q 12 10 8 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity={opacity} />
      <path d="M15 20 Q 15 5 15 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity={opacity * 0.8} />
      <path d="M15 20 Q 18 10 22 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity={opacity} />
      <path d="M15 20 Q 10 15 5 12" stroke="white" strokeWidth="1" strokeLinecap="round" opacity={opacity * 0.6} />
      <path d="M15 20 Q 20 15 25 12" stroke="white" strokeWidth="1" strokeLinecap="round" opacity={opacity * 0.6} />
      <circle cx="15" cy="20" r="8" fill="white" fillOpacity="0.03" filter="blur(2px)" />
    </svg>
  </div>
);

const AnimatedTVScreen = ({ skills = [], isActive = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  // Create the full sequence: Title -> Skills -> Title -> Skills...
  const sequence = ['SOFT SKILLS', ...skills];

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % sequence.length;
        setShowTitle(nextIndex === 0);
        return nextIndex;
      });
    }, showTitle ? 3000 : 2000); // Title shows longer (3s), skills show for 2s each
    
    return () => clearInterval(interval);
  }, [isActive, sequence.length, showTitle]);

  const currentContent = sequence[currentIndex];
  const isTitle = currentIndex === 0;

  return (
    <div className="relative group/billboard flex flex-col items-center transition-all duration-300">
      {/* TV Screen */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-44 h-32 bg-black/90 rounded-lg border-2 border-gray-700 overflow-hidden shadow-2xl"
      >
        {/* TV Frame Details */}
        <div className="absolute inset-0 border border-gray-600 rounded-md m-1" />
        
        {/* Screen */}
        <div className={`absolute inset-3 rounded-md overflow-hidden ${isTitle ? 'bg-gradient-to-br from-white/15 via-white/8 to-white/20' : 'bg-gradient-to-br from-white/5 to-white/8'}`}>
          {/* Enhanced Scan Lines for Title */}
          <div className={`absolute inset-0 pointer-events-none ${isTitle ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.08)_1px,rgba(255,255,255,0.08)_2px)]' : 'bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.03)_1px,rgba(255,255,255,0.03)_2px)]'}`} />
          
          {/* Title Screen: Additional Visual Effects */}
          {isTitle && (
            <>
              {/* Moving Light Beam */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              
              {/* Corner Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)]" />
              
              {/* Particle Effect */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    bottom: '10%'
                  }}
                />
              ))}
            </>
          )}
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
            {isTitle ? (
              /* Enhanced Title Display with Unique Design */
              <motion.div
                key="title"
                initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 150 }}
                className="relative flex flex-col items-center w-full h-full justify-center"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:8px_8px]" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,white_10%,transparent_20%)] opacity-20"
                  />
                </div>

                {/* Main Title with Geometric Frame */}
                <div className="relative z-10">
                  {/* Geometric Border */}
                  <div className="absolute -inset-4 border-2 border-white/30 transform rotate-45">
                    <div className="absolute inset-1 border border-white/20" />
                  </div>
                  
                  {/* Title Content */}
                  <div className="relative bg-black/40 backdrop-blur-sm px-4 py-3 text-center">
                    <motion.div
                      initial={{ letterSpacing: "0em" }}
                      animate={{ letterSpacing: "0.4em" }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-[14px] font-black text-white uppercase leading-none mb-1"
                      style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.8)'
                      }}
                    >
                      SOFT
                    </motion.div>
                    <motion.div
                      initial={{ letterSpacing: "0em" }}
                      animate={{ letterSpacing: "0.4em" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-[14px] font-black text-white uppercase leading-none"
                      style={{
                        textShadow: '0 0 10px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.8)'
                      }}
                    >
                      SKILLS
                    </motion.div>
                  </div>
                </div>

                {/* Animated Elements */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-3 rounded-full"
                />

                {/* Corner Decorations */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ scale: 1, rotate: 45 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                    className="absolute w-2 h-2 border-t border-l border-white/40"
                    style={{
                      [i < 2 ? 'top' : 'bottom']: '8px',
                      [i % 2 === 0 ? 'left' : 'right']: '8px',
                      transform: `rotate(${i * 90}deg)`
                    }}
                  />
                ))}

                {/* Subtitle with Typewriter Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="text-[6px] font-mono text-white/70 uppercase tracking-[0.3em] text-center">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.8, duration: 1.2 }}
                      className="inline-block overflow-hidden whitespace-nowrap"
                    >
                      HUMAN CAPABILITIES
                    </motion.span>
                  </div>
                </motion.div>

                {/* Pulsing Glow Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-white/5 rounded-md blur-sm"
                />
              </motion.div>
            ) : (
              /* Skill Display */
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="text-[12px] font-bold text-white uppercase tracking-wider leading-tight">
                  {currentContent.replace('_', ' ')}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="w-8 h-0.5 bg-white/60 mt-1 origin-left"
                />
              </motion.div>
            )}
            
            {/* Progress Indicators - only show during skills */}
            {!isTitle && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {skills.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all ${
                      i === currentIndex - 1 ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Enhanced Static/Noise Effect for Title */}
          <motion.div
            animate={{ opacity: isTitle ? [0, 0.15, 0] : [0, 0.05, 0] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-white/5 mix-blend-overlay"
          />
          
          {/* Glitch Effect for Title */}
          {isTitle && (
            <motion.div
              animate={{ 
                opacity: [0, 0.3, 0],
                x: [0, 2, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                times: [0, 0.1, 0.2, 1]
              }}
              className="absolute inset-0 bg-white/10 mix-blend-difference"
            />
          )}
        </div>
        
        {/* TV Controls */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full opacity-60" />
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full opacity-60" />
        </div>
        
        {/* Power Indicator - brighter during title */}
        <motion.div
          animate={{ 
            opacity: isTitle ? [0.7, 1, 0.7] : [0.5, 1, 0.5],
            scale: isTitle ? [1, 1.2, 1] : 1
          }}
          transition={{ duration: isTitle ? 1 : 2, repeat: Infinity }}
          className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/80 rounded-full"
        />
        
        {/* Brand Label */}
        <div className="absolute top-1 left-2 text-[6px] font-mono text-white/40 uppercase">
          {isTitle ? 'BROADCAST' : 'LIVE'}
        </div>
      </motion.div>
      
      {/* TV Stand */}
      <div className="w-2 h-16 bg-white/10 border-x border-white/5" />
      <div className="w-12 h-2 bg-white/20 rounded-t-full" />
    </div>
  );
};

const TrafficLight = ({ state = 'GREEN' }) => (
  <div className="flex flex-col items-center">
    <div className="bg-black/90 border border-white/20 p-1.5 rounded-full w-fit shadow-2xl flex flex-col gap-1.5 backdrop-blur-sm">
      {/* Red Light */}
      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${state === 'RED' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]' : 'bg-red-500/10'}`} />
      
      {/* Yellow Light */}
      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${state === 'YELLOW' ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)]' : 'bg-yellow-500/10'}`} />
      
      {/* Green Light */}
      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${state === 'GREEN' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'bg-green-500/10'}`} />
    </div>
    <div className="w-1 h-24 bg-white/10 border-x border-white/5" />
  </div>
);

const CityBuilding = ({ h = 80, w = 30, delay = 0 }) => (
  <div className="relative group/building opacity-20 hover:opacity-40 transition-all duration-700" style={{ width: w, height: h }}>
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



const grassPositions = [
  // Clean city scattering
  { top: '8%', left: '40%' }, { top: '5%', left: '75%' },
  { top: '75%', left: '5%' },
  { top: '92%', left: '45%' },
  { top: '35%', left: '65%' }, { top: '55%', left: '50%' }
];

const milestones = [
  {
    id: "01",
    title: "Frontend_Eng",
    skills: ["React", "Next.js", "TS", "Framer"],
    pos: { top: "18%", left: "10%" },
    align: "text-left",
    progress: 0
  },
  {
    id: "02",
    title: "Logic_&_AI",
    skills: ["PyTorch", "LLMs", "Vision"],
    pos: { top: "28%", left: "38%" },
    align: "text-left",
    progress: 33
  },
  {
    id: "03",
    title: "Data_Core",
    skills: ["Node.js", "SQL", "Redis", "Docker"],
    pos: { top: "54%", left: "62%" },
    align: "text-right",
    progress: 66
  },
  {
    id: "04",
    title: "Creative_Tech",
    skills: ["Blender", "WebGL", "Unity"],
    pos: { top: "78%", right: "10%" },
    align: "text-right",
    progress: 100
  }
];

const softSkills = ["Leadership", "Communication", "Teamwork", "Problem_Solving", "Critical_Thinking"];

const SkillsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [lightState, setLightState] = useState('GREEN');

  // Traffic Light Cycle
  React.useEffect(() => {
    const cycle = async () => {
      while(true) {
        setLightState('GREEN'); await new Promise(r => setTimeout(r, 5000));
        setLightState('YELLOW'); await new Promise(r => setTimeout(r, 1500));
        setLightState('RED'); await new Promise(r => setTimeout(r, 4000));
      }
    };
    cycle();
  }, []);

  // Auto-progression logic
  React.useEffect(() => {
    let interval;
    if (lightState === 'GREEN') {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % milestones.length);
      }, 4000); // Move to next milestone every 4 seconds while green
    }
    return () => clearInterval(interval);
  }, [lightState, activeStep]);

  return (
    <section id="skills" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div 
        className="relative w-full max-w-7xl bg-[#080808] rounded-2xl text-white shadow-2xl z-10 h-[550px] overflow-hidden group"
      >
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <defs>
            <path
              id="road-geometry"
              d="M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420"
            />
          </defs>
          
          {/* Broad Road Surface (Asphalt) */}
          <use
            href="#road-geometry"
            fill="none"
            stroke="white"
            strokeWidth="42"
            className="opacity-[0.03]"
          />

          {/* Solid Edge Lines (Shoulders) */}
          <use
            href="#road-geometry"
            fill="none"
            stroke="white"
            strokeWidth="40"
            className="opacity-10"
          />
          <use
            href="#road-geometry"
            fill="none"
            stroke="#080808"
            strokeWidth="38"
          />

          {/* Dashed Center Line */}
          <use
            href="#road-geometry"
            fill="none"
            stroke="white"
            strokeWidth="1"
            className="opacity-20"
            strokeDasharray="10 10"
          />
          
          
          {/* Active Path Highlight */}
          <motion.path
            d="M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: milestones[activeStep].progress / 100 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="opacity-40"
          />

          {/* Animated Data Packets */}
          {[0, 1, 2].map((i) => (
            <motion.circle key={i} r="2" fill="white" className="opacity-20">
              <animateMotion
                dur={`${4 + i}s`}
                repeatCount="indefinite"
                path="M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420"
              />
            </motion.circle>
          ))}

          {[
            { x: 180, y: 95, section: 0, offL: {x: 0, y: -28}, offR: {x: 0, y: 28} },
            { x: 1060, y: 415, section: 3, offL: {x: 0, y: -30}, offR: {x: 0, y: 30} }
          ].map((lamp, i) => (
            <React.Fragment key={i}>
              {/* Left Side Lamp */}
              <g>
                <line 
                  x1={lamp.x + lamp.offL.x} y1={lamp.y + lamp.offL.y - 45} 
                  x2={lamp.x + lamp.offL.x} y2={lamp.y + lamp.offL.y} 
                  stroke="white" strokeWidth="1" className="opacity-20" 
                />
                <path 
                  d={`M ${lamp.x + lamp.offL.x} ${lamp.y + lamp.offL.y - 45} Q ${lamp.x + lamp.offL.x + 8} ${lamp.y + lamp.offL.y - 50} ${lamp.x + lamp.offL.x + 12} ${lamp.y + lamp.offL.y - 38}`} 
                  fill="none" stroke="white" strokeWidth="0.5" className="opacity-30" 
                />
                <motion.circle 
                  cx={lamp.x + lamp.offL.x + 12} cy={lamp.y + lamp.offL.y - 38} r="1.5" fill="white"
                  animate={{ opacity: activeStep >= lamp.section ? [0.6, 1, 0.8, 1] : 0.2, scale: activeStep >= lamp.section ? [1, 1.2, 1.1, 1.2] : 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                  d={`M ${lamp.x + lamp.offL.x + 12} ${lamp.y + lamp.offL.y - 38} L ${lamp.x + lamp.offL.x - 5} ${lamp.y + lamp.offL.y} L ${lamp.x + lamp.offL.x + 20} ${lamp.y + lamp.offL.y} Z`}
                  fill="url(#lightGradient)"
                  animate={{ opacity: activeStep >= lamp.section ? 0.3 : 0.05 }}
                />
              </g>

              {/* Right Side Lamp */}
              <g>
                <line 
                  x1={lamp.x + lamp.offR.x} y1={lamp.y + lamp.offR.y - 45} 
                  x2={lamp.x + lamp.offR.x} y2={lamp.y + lamp.offR.y} 
                  stroke="white" strokeWidth="1" className="opacity-20" 
                />
                <path 
                  d={`M ${lamp.x + lamp.offR.x} ${lamp.y + lamp.offR.y - 45} Q ${lamp.x + lamp.offR.x - 8} ${lamp.y + lamp.offR.y - 50} ${lamp.x + lamp.offR.x - 12} ${lamp.y + lamp.offR.y - 38}`} 
                  fill="none" stroke="white" strokeWidth="0.5" className="opacity-30" 
                />
                <motion.circle 
                  cx={lamp.x + lamp.offR.x - 12} cy={lamp.y + lamp.offR.y - 38} r="1.5" fill="white"
                  animate={{ opacity: activeStep >= lamp.section ? [0.6, 1, 0.8, 1] : 0.2, scale: activeStep >= lamp.section ? [1, 1.2, 1.1, 1.2] : 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                  d={`M ${lamp.x + lamp.offR.x - 12} ${lamp.y + lamp.offR.y - 38} L ${lamp.x + lamp.offR.x + 5} ${lamp.y + lamp.offR.y} L ${lamp.x + lamp.offR.x - 20} ${lamp.y + lamp.offR.y} Z`}
                  fill="url(#lightGradient)"
                  animate={{ opacity: activeStep >= lamp.section ? 0.3 : 0.05 }}
                />
              </g>
            </React.Fragment>
          ))}

          <defs>
            <radialGradient id="lightGradient" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <path
              id="road-geometry"
              d="M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420"
            />
          </defs>
        </svg>

        {/* The Interactive Stealth Vehicle */}
        <motion.div 
          className="absolute z-30 pointer-events-none origin-center"
          initial={false}
          animate={{ 
            offsetDistance: `${milestones[activeStep].progress}%`,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ 
            offsetPath: 'path("M 120 100 C 320 100, 420 250, 660 250 S 920 420, 1160 420")',
            offsetRotate: "auto 90deg"
          }}
        >
          <DataVehicle />
        </motion.div>

        {/* Urban Scene Elements */}
        {/* Restored HQ Buildings on Right side */}
        <div className="absolute top-[5%] right-[5%] z-0 flex items-end gap-5 pointer-events-none">
          <CityBuilding h={160} w={50} delay={1.2} />
          <CityBuilding h={240} w={70} delay={0} />
          <CityBuilding h={130} w={40} delay={0.4} />
        </div>

        {/* Scattered Realistic Grass Clumps */}
        {grassPositions.map((pos, i) => (
          <div key={i} className="absolute z-10" style={pos}>
            <RealisticGrassClump scale={0.5 + Math.random() * 0.5} opacity={0.2 + Math.random() * 0.3} />
          </div>
        ))}

        {/* Single Animated TV Screen - Soft Skills Display */}
        <div className="absolute bottom-[42%] right-[10%] z-[40]">
          <AnimatedTVScreen skills={softSkills} isActive={true} />
        </div>

        {/* Traffic Light */}
        <div className="absolute top-[12%] left-[50%] z-20">
          <TrafficLight state={lightState} />
        </div>


        <div className="absolute bottom-[20%] left-[8%] z-10">
          <CityBench occupants={2} />
        </div>

        <div className="absolute top-[52%] right-[5%] z-10">
          <CityBench occupants={1} />
        </div>

        <div className="relative h-full w-full p-10">
          
          <div className="flex items-start justify-between mb-12 relative z-20">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter -mt-2">Skill<span className="text-white/20">Road</span>.</h2>
             </div>
             <div className="hidden md:block text-right">
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Active_Segment:</div>
                <div className="text-sm font-bold text-white tracking-widest uppercase">SECTION_{milestones[activeStep].id}</div>
             </div>
          </div>

          {milestones.map((m, idx) => (
            <div 
              key={m.id} 
              className={`absolute z-20 transition-all duration-700 ${activeStep === idx ? 'scale-110 opacity-100' : 'opacity-40 hover:opacity-70'}`}
              style={{ ...m.pos }}
              onClick={() => setActiveStep(idx)}
            >
              <div className={`flex flex-col cursor-pointer ${m.align === 'text-right' ? 'items-end text-right' : 'items-start text-left'}`}>
                <div className={`flex items-center gap-4 mb-4 ${m.align === 'text-right' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className={`absolute inset-0 rotate-45 border transition-all duration-500 ${activeStep === idx ? 'bg-white border-white' : 'bg-transparent border-white/20'}`} />
                    <span className={`relative text-xs font-black transition-colors ${activeStep === idx ? 'text-black' : 'text-white'}`}>{m.id}</span>
                  </div>
                  
                  <div>
                    <div className="text-[8px] font-mono text-white/20 tracking-tighter">PHASE_{m.id}</div>
                    <div className="text-xs font-black uppercase tracking-widest leading-none">{m.title}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-black/40 backdrop-blur-sm p-3 rounded border border-white/5 max-h-[120px] overflow-y-auto pr-2 scrollbar-thin">
                   {m.skills.map((s, sIdx) => (
                     <div key={sIdx} className={`flex items-center gap-3 ${m.align === 'text-right' ? 'flex-row-reverse' : ''}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <span className="text-[11px] font-bold tracking-tight text-gray-400 group-hover/text-white whitespace-nowrap">{s}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-10 left-10 flex items-center gap-8 border-t border-white/5 pt-6 w-[80%]">
             <div className="flex flex-col gap-1">
                <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Navigation_Target</div>
                <div className="text-[10px] font-bold text-white uppercase">{milestones[activeStep].title}</div>
             </div>
             <div className="flex-grow h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ x: 0 }}
                  animate={{ x: [`${milestones[activeStep].progress}%`, '100%'] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute top-0 left-0 w-8 h-full bg-white opacity-20"
                />
             </div>
             <div className="text-[10px] font-mono text-white/40 tracking-widest">
                POS: {milestones[activeStep].progress}.00%
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
