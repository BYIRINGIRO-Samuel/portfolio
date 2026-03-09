import React from 'react';
import { motion } from "framer-motion";
import {
  SiArduino,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaCss3 } from "react-icons/fa";

const skills = [
  "arduino", "bootstrap", "c", "c++", "css3", "docker", "express", "figma", "firebase", "git", "html5", "java", "javascript", "mariadb", "mongodb", "nodejs", "php", "postgresql", "postman", "python", "react", "reactnative", "redis", "redux", "spring", "tailwind", "typescript"
];

const iconMap = {
  "arduino": SiArduino,
  "bootstrap": SiBootstrap,
  "c": SiC,
  "c++": SiCplusplus,
  "css3": FaCss3,
  "docker": SiDocker,
  "express": SiExpress,
  "figma": SiFigma,
  "firebase": SiFirebase,
  "git": SiGit,
  "html5": SiHtml5,
  "java": FaJava,
  "javascript": SiJavascript,
  "mariadb": SiMariadb,
  "mongodb": SiMongodb,
  "nodejs": SiNodedotjs,
  "php": SiPhp,
  "postgresql": SiPostgresql,
  "postman": SiPostman,
  "python": SiPython,
  "react": SiReact,
  "reactnative": SiReact,
  "redis": SiRedis,
  "redux": SiRedux,
  "spring": SiSpring,
  "tailwind": SiTailwindcss,
  "typescript": SiTypescript,
};

const SkillsMarquee = () => {
  return (
    <section className="relative w-full flex justify-center pt-0 pb-6 overflow-visible z-50 bg-white">
      {/* THE NEURAL DYNAMICS BANNER: MAGNETIC LEVITATION ARCHITECTURE */}
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-stretch w-full max-w-7xl h-14 overflow-visible group"
      >
        
        {/* LEFT 3D FOLD (INTERNAL WRAP) */}
        <div className="absolute left-0 top-full w-10 h-10 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 40 40">
            <path d="M0 0 L40 0 L40 28 Z" fill="#050505" />
            <path d="M0 0 L40 0" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
        </div>

        {/* LEFT NODE: THE QUANTUM LOGIC CORE */}
        <div className="relative flex-shrink-0 h-full w-36 z-30 flex items-center justify-center bg-black border-y-2 border-white/5 overflow-visible">
          {/* Animated Tech Schematics */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 56">
             <defs>
                <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="transparent" />
                   <stop offset="50%" stopColor="white" stopOpacity="0.2" />
                   <stop offset="100%" stopColor="transparent" />
                </linearGradient>
             </defs>
             <rect x="10" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="16" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="22" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <path d="M40 10 L50 10 L55 15 V40 L50 45 H40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                d="M10 40 H130" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" fill="none" 
             />
          </svg>
          
          <div className="relative z-40 flex flex-col items-start pl-8">
             <div className="flex items-center gap-2.5">
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_15px_red] border border-white/20" 
                />
                <span className="font-black text-[14px] tracking-[0.3em] uppercase italic text-white/95">
                  CORE://UX
                </span>
             </div>
             <div className="flex items-center gap-2 mt-0.5 pl-5">
                <div className="w-6 h-[1px] bg-white/20" />
                <span className="text-[7px] font-black text-white/40 tracking-[0.4em] uppercase">NEURAL_LOCK</span>
             </div>
          </div>
        </div>

        {/* HEADER BLOCK: REINFORCED CHASSIS (FLUSH) */}
        <div className="relative flex-shrink-0 bg-black text-white px-10 flex items-center z-20 border-y-2 border-white/5 border-l border-white/10 overflow-hidden">
          {/* Moving Glare Reflection */}
          <motion.div 
             animate={{ x: [-100, 400] }}
             transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
             className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none"
          />
          <span className="font-black text-[18px] tracking-[0.6em] uppercase italic text-[#fbfbfb] drop-shadow-[0_2px_4px_black]">
            TECH_STACK
          </span>
          <div className="absolute left-full top-0 bottom-0 w-12 bg-black skew-x-[-25deg] origin-top translate-x-[-50%] z-10 border-r-2 border-white/10" />
        </div>

        {/* MARQUEE STREAM: THE SYSTEM CHANNEL */}
        <div className="flex-grow overflow-hidden relative flex items-center bg-[#080808] h-full border-y-2 border-white/5 z-0">
          {/* Neural Data Pulses (Top/Bottom High-Intensity lines) */}
          <motion.div 
             animate={{ x: [-200, 1200] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="absolute top-0 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-30"
          />
          <motion.div 
             animate={{ x: [1200, -200] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-0 w-60 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-30"
          />

          <div className="flex animate-marquee whitespace-nowrap items-center h-full">
            {[...skills, ...skills, ...skills].map((skill, i) => {
              const Icon = iconMap[skill];
              return (
                <div key={i} className="flex items-center px-12 group/item">
                  {Icon && <Icon size={16} className="mr-2 text-gray-200 group-hover/item:text-white transition-all duration-300" />}
                  <span className="text-[14px] font-black tracking-[0.5em] text-gray-200 group-hover/item:text-white group-hover/item:scale-105 transition-all duration-300 uppercase font-mono drop-shadow-[0_2px_4px_black]">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT NODE: THE OMEGA TERMINAL (SYMMETRICAL MIRROR) */}
        <div className="relative flex-shrink-0 h-full w-36 z-30 flex items-center justify-center bg-black border-y-2 border-white/5 border-r border-white/10 overflow-visible">
          {/* Mirrored Animated Tech Schematics */}
          <svg className="absolute inset-0 w-full h-full scale-x-[-1]" viewBox="0 0 144 56">
             <rect x="10" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="16" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="22" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <path d="M40 10 L50 10 L55 15 V40 L50 45 H40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
             <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3.5, delay: 1 }}
                d="M10 40 H130" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" fill="none" 
             />
          </svg>

          <div className="relative z-40 flex flex-col items-end pr-8">
             <div className="flex items-center gap-2.5">
                <span className="font-black text-[14px] tracking-[0.3em] uppercase italic text-white/95">
                  SIGNAL://02
                </span>
                <div className="w-2.5 h-2.5 bg-white/10 border border-white/30 rotate-45 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
             </div>
             <div className="flex items-center gap-2 mt-0.5 pr-5">
                <span className="text-[7px] font-black text-white/30 tracking-[0.4em] uppercase">SYNC_ACTIVE</span>
                <div className="w-6 h-[1px] bg-white/10" />
             </div>
          </div>
        </div>

        {/* RIGHT 3D FOLD (SYMMETRICAL MIRROR OF LEFT) */}
        <div className="absolute right-0 top-full w-10 h-10 z-0 pointer-events-none scale-x-[-1]">
          <svg className="w-full h-full" viewBox="0 0 40 40">
            <path d="M0 0 L40 0 L40 28 Z" fill="#050505" />
            <path d="M0 0 L40 0" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
        </div>

      </motion.div>
    </section>
  );
};

export default SkillsMarquee;
