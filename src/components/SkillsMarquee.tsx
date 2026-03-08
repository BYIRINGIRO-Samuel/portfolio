import React from 'react';
import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Python", "TensorFlow", "Next.js", "Node.js",
  "Three.js", "Figma", "PostgreSQL", "Docker", "AWS", "Blender",
  "PyTorch", "GraphQL", "Rust", "WebGL", "Kubernetes", "Svelte",
];

const SkillsMarquee = () => {
  return (
    <section className="relative w-full flex justify-center pt-0 pb-16 overflow-visible z-50 bg-white">
      {/* THE KINETIC ARCHITECTURAL BANNER: SYMMETRICAL INTERNAL WRAP */}
      <div className="relative flex items-stretch w-full max-w-7xl h-14 overflow-visible group">
        
        {/* LEFT 3D FOLD (INTERNAL WRAP) */}
        <div className="absolute left-0 top-full w-10 h-10 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 40 40">
            <path d="M0 0 L40 0 L40 28 Z" fill="#050505" />
            <path d="M0 0 L40 0" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
        </div>

        {/* LEFT NODE: THE PRIMARY LOGIC CORE */}
        <div className="relative flex-shrink-0 h-full w-32 z-30 flex items-center justify-center bg-black border-y-2 border-white/5 overflow-visible">
          {/* Architectural SVG Detail */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 56">
             <rect x="10" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="16" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="22" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <path d="M40 10 L50 10 L55 15 V40 L50 45 H40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          </svg>
          
          <div className="relative z-40 flex flex-col items-start pl-8">
             <div className="flex items-center gap-2.5">
                <motion.div 
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2.5 h-2.5 bg-red-600 rounded-full shadow-[0_0_12px_red]" 
                />
                <span className="font-black text-[14px] tracking-[0.25em] uppercase italic text-white/90">
                  CORE://01
                </span>
             </div>
             <span className="text-[8px] font-black text-white/30 tracking-[0.4em] uppercase pl-5 mt-0.5">Stabilized</span>
          </div>
        </div>

        {/* HEADER BLOCK: REINFORCED CHASSIS (FLUSH) */}
        <div className="relative flex-shrink-0 bg-black text-white px-10 flex items-center z-20 border-y-2 border-white/5 border-l border-white/10">
          <span className="font-black text-[18px] tracking-[0.5em] uppercase italic text-[#fbfbfb] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            TECH_STACK
          </span>
          <div className="absolute left-full top-0 bottom-0 w-12 bg-black skew-x-[-25deg] origin-top translate-x-[-50%] z-10 border-r-2 border-white/10" />
        </div>

        {/* MARQUEE STREAM: THE SYSTEM CHANNEL */}
        <div className="flex-grow overflow-hidden relative flex items-center bg-[#080808] h-full border-y-2 border-white/5 z-0">
          <div className="flex animate-marquee whitespace-nowrap items-center h-full">
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <div key={i} className="flex items-center px-16 group/item">
                <span className="text-[13px] font-black tracking-[0.4em] text-gray-200 group-hover/item:text-white transition-all duration-300 uppercase font-mono">
                  {skill}
                </span>
                <span className="ml-8 text-[12px] font-black text-white/10 font-mono select-none">
                   {`//`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT NODE: THE OMEGA TERMINAL (SYMMETRICAL TO LEFT) */}
        <div className="relative flex-shrink-0 h-full w-32 z-30 flex items-center justify-center bg-black border-y-2 border-white/5 border-r border-white/10 overflow-visible">
          {/* Symmetrical Architectural SVG Detail */}
          <svg className="absolute inset-0 w-full h-full scale-x-[-1]" viewBox="0 0 128 56">
             <rect x="10" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="16" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <rect x="22" y="15" width="2" height="26" fill="white" fillOpacity="0.1" />
             <path d="M40 10 L50 10 L55 15 V40 L50 45 H40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
          </svg>

          <div className="relative z-40 flex flex-col items-end pr-8">
             <div className="flex items-center gap-2.5">
                <span className="font-black text-[14px] tracking-[0.25em] uppercase italic text-white/90">
                  OMEGA://02
                </span>
                <div className="w-2.5 h-2.5 bg-white/20 border border-white/40 rotate-45" />
             </div>
             <span className="text-[8px] font-black text-white/20 tracking-[0.4em] uppercase pr-5 mt-0.5">Stream_Lock</span>
          </div>
        </div>

        {/* RIGHT 3D FOLD (SYMMETRICAL MIRROR OF LEFT) */}
        <div className="absolute right-0 top-full w-10 h-10 z-0 pointer-events-none scale-x-[-1]">
          <svg className="w-full h-full" viewBox="0 0 40 40">
            <path d="M0 0 L40 0 L40 28 Z" fill="#050505" />
            <path d="M0 0 L40 0" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default SkillsMarquee;
