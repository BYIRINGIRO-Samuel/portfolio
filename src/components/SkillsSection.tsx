import React, { useState } from 'react';
import { motion } from "framer-motion";

const DataVehicle = () => (
  <div className="relative transform -rotate-90">
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
      {/* Main Chassis */}
      <path d="M4 12C4 10 6 6 14 5C22 4 34 4 40 8C46 12 46 12 40 16C34 20 22 20 14 19C6 18 4 14 4 12Z" fill="white" />
      {/* Windshield / Cockpit */}
      <path d="M16 7C16 7 20 5.5 28 5.5C36 5.5 38 7 38 7V17C38 17 36 18.5 28 18.5C20 18.5 16 17 16 17V7Z" fill="#080808" fillOpacity="0.9" />
      {/* Headlights (Xenon Glow) */}
      <rect x="42" y="7" width="2" height="2" rx="1" fill="white" className="animate-pulse" />
      <rect x="42" y="15" width="2" height="2" rx="1" fill="white" className="animate-pulse" />
      {/* Tail Lights */}
      <rect x="4" y="9" width="1" height="2" fill="#333" />
      <rect x="4" y="13" width="1" height="2" fill="#333" />
      {/* Panel Lines */}
      <line x1="14" y1="5" x2="14" y2="19" stroke="#080808" strokeWidth="0.5" opacity="0.1" />
      <line x1="34" y1="5" x2="34" y2="19" stroke="#080808" strokeWidth="0.5" opacity="0.1" />
    </svg>
    {/* Underglow Ping */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 animate-ping" />
  </div>
);

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

const SkillsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="skills" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#080808] rounded-2xl text-white shadow-2xl z-10 h-[550px] overflow-hidden group">
        
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

          {/* Road Lights (Street Lamps) - Both Sides */}
          {[
            { x: 180, y: 95, section: 0, offL: {x: 0, y: -28}, offR: {x: 0, y: 28} },
            { x: 400, y: 195, section: 1, offL: {x: -22, y: -22}, offR: {x: 22, y: 22} },
            { x: 620, y: 245, section: 1, offL: {x: 0, y: -30}, offR: {x: 0, y: 30} },
            { x: 840, y: 360, section: 2, offL: {x: -22, y: -22}, offR: {x: 22, y: 22} },
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

        <div className="relative h-full w-full p-10">
          
          <div className="flex items-center justify-between mb-12 relative z-20">
             <div>
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-4 h-[1px] bg-white/40" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 truncate">Technical_Roadmap // SYSTEM_DRIVE</span>
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter">Skill<span className="text-white/20">Road</span>.</h2>
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

                <div className="flex flex-col gap-2 bg-black/40 backdrop-blur-sm p-3 rounded border border-white/5">
                   {m.skills.map((s, sIdx) => (
                     <div key={sIdx} className={`flex items-center gap-3 ${m.align === 'text-right' ? 'flex-row-reverse' : ''}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        <span className="text-[11px] font-bold tracking-tight text-gray-400 group-hover/text-white">{s}</span>
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
