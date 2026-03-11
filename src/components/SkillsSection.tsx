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
  const [animationPhase, setAnimationPhase] = useState('intro'); // intro, main, outro

  // Create the full sequence: Title -> Skills -> Title -> Skills...
  const sequence = ['SOFT SKILLS', ...skills];

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setAnimationPhase('outro');
      
      setTimeout(() => {
        setCurrentIndex(prev => {
          const nextIndex = (prev + 1) % sequence.length;
          const isTitle = nextIndex === 0;
          
          setShowTitle(isTitle);
          setAnimationPhase('intro');
          
          setTimeout(() => setAnimationPhase('main'), 500);
          
          return nextIndex;
        });
      }, 300);
      
    }, 4000); // 4 second intervals for professional pacing
    
    return () => clearInterval(interval);
  }, [isActive, sequence.length]);

  const currentContent = sequence[currentIndex];
  const isTitle = currentIndex === 0;

  return (
    <div className="relative group/billboard transition-all duration-300">
      {/* TV Screen */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-44 h-32 bg-black/90 rounded-lg border-2 border-gray-700 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] ml-[-1px]"
      >
        {/* TV Frame Details */}
        <div className="absolute inset-0 border border-gray-600 rounded-md m-1" />
        
        {/* Screen */}
        <div className={`absolute inset-3 rounded-md overflow-hidden ${isTitle ? 'bg-gradient-to-br from-white/15 via-white/8 to-white/20' : 'bg-gradient-to-br from-white/5 to-white/8'}`}>
          {/* Professional Scan Lines */}
          <div className={`absolute inset-0 pointer-events-none ${isTitle ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.08)_1px,rgba(255,255,255,0.08)_2px)]' : 'bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.03)_1px,rgba(255,255,255,0.03)_2px)]'}`} />
          
          {/* Professional Advertisement Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-3 text-center">
            {isTitle ? (
              /* Professional Title Advertisement */
              <motion.div
                key="title-ad"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: animationPhase === 'outro' ? 0 : 1,
                  scale: animationPhase === 'outro' ? 0.8 : 1,
                  rotateY: animationPhase === 'intro' ? [180, 0] : 0
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                {/* Premium Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    animate={{ 
                      background: [
                        'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)',
                        'radial-gradient(circle at 80% 80%, white 2px, transparent 2px)',
                        'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-[length:12px_12px]"
                  />
                </div>

                {/* Main Logo Animation */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Animated Logo Frame */}
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: animationPhase === 'main' ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="mb-3"
                  >
                    <svg width="80" height="40" viewBox="0 0 80 40" className="drop-shadow-lg">
                      <motion.path
                        d="M10 10 L70 10 L70 30 L10 30 Z M15 15 L65 15 L65 25 L15 25 Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.circle
                        cx="40"
                        cy="20"
                        r="8"
                        fill="white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                      />
                    </svg>
                  </motion.div>

                  {/* Premium Title Text */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center"
                  >
                    <div className="text-[13px] font-black text-white uppercase tracking-[0.4em]"
                         style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>
                      SOFT SKILLS
                    </div>
                  </motion.div>

                  {/* Professional Tagline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-2 text-[6px] font-mono text-white/80 uppercase tracking-[0.2em]"
                  >
                    EXCELLENCE IN HUMAN CAPABILITIES
                  </motion.div>
                </div>

                {/* Animated Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      left: `${15 + i * 10}%`,
                      bottom: '15%'
                    }}
                  />
                ))}

                {/* Premium Border Animation */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-2 border border-white/30 rounded-md"
                />
              </motion.div>
            ) : (
              /* Professional Skill Advertisement */
              <motion.div
                key={`skill-ad-${currentIndex}`}
                initial={{ 
                  opacity: 0, 
                  x: animationPhase === 'intro' ? 100 : 0,
                  rotateX: animationPhase === 'intro' ? 90 : 0
                }}
                animate={{ 
                  opacity: animationPhase === 'outro' ? 0 : 1,
                  x: animationPhase === 'outro' ? -100 : 0,
                  rotateX: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                {/* Skill Icon Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 150 }}
                  className="mb-3"
                >
                  <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-t-2 border-white rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Skill Name with Professional Typography */}
                <motion.div
                  initial={{ letterSpacing: "0em", opacity: 0 }}
                  animate={{ letterSpacing: "0.3em", opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-center"
                >
                  <div className="text-[10px] font-black text-white uppercase leading-tight"
                       style={{ textShadow: '0 0 6px rgba(255,255,255,0.5)' }}>
                    {currentContent.replace('_', ' ')}
                  </div>
                </motion.div>

                {/* Professional Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                  className="mt-2 h-0.5 bg-gradient-to-r from-white/40 via-white/80 to-white/40 rounded-full"
                />

                {/* Floating Elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute w-1 h-1 bg-white/50 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + (i % 2) * 20}%`
                    }}
                  />
                ))}

                {/* Premium Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                  className="absolute bottom-2 right-2 text-[5px] font-mono text-white/60 uppercase tracking-wider"
                >
                  CERTIFIED
                </motion.div>
              </motion.div>
            )}
            
            {/* Professional Progress Dots */}
            {!isTitle && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {skills.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: i === currentIndex - 1 ? [1, 1.3, 1] : 1,
                      opacity: i === currentIndex - 1 ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-1 h-1 bg-white rounded-full"
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Professional Film Grain Effect */}
          <motion.div
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-white/5 mix-blend-overlay"
          />
        </div>
        
        {/* TV Controls */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full opacity-60" />
          <div className="w-1.5 h-1.5 bg-white/40 rounded-full opacity-60" />
        </div>
        
        {/* Power Indicator - Professional broadcast style */}
        <motion.div
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: isTitle ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.6)]"
        />
        
        {/* Professional Broadcast Indicator */}
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-red-500 rounded-full"
          />
          <div className="text-[5px] font-mono text-white/60 uppercase tracking-wider">
            {animationPhase === 'intro' ? 'LOADING' : animationPhase === 'outro' ? 'NEXT' : 'LIVE'}
          </div>
        </div>
        
        {/* Brand Label */}
        <div className="absolute bottom-1 left-2 text-[5px] font-mono text-white/40 uppercase tracking-wider">
          {isTitle ? 'PREMIUM' : 'SHOWCASE'}
        </div>
      </motion.div>
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
          <CityBuilding h={240} w={70} delay={0} opacity="opacity-40" />
          <CityBuilding h={130} w={40} delay={0.4} />
        </div>

        {/* Scattered Realistic Grass Clumps */}
        {grassPositions.map((pos, i) => (
          <div key={i} className="absolute z-10" style={pos}>
            <RealisticGrassClump scale={0.5 + Math.random() * 0.5} opacity={0.2 + Math.random() * 0.3} />
          </div>
        ))}

        {/* Animated TV Screen - Soft Skills Display (Floating above the road) */}
        <div className="absolute top-[12%] right-[20%] z-[40]">
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
