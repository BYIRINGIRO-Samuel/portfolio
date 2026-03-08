import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, ArrowRight, ChevronDown } from "lucide-react";

type Project = {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  tech: string[];
  image: string;
  accent: string;
  github: string;
  demo: string;
};

const allProjects: Project[] = [
  {
    id: "01",
    name: "NEURAL_SYNTH",
    category: "AI_NODE",
    shortDesc: "Sub-50ms inference on high-velocity edge nodes.",
    tech: ["PyTorch", "CUDA"],
    image: "/sentinel.png", // USER: Replace with actual project image
    accent: "#dc2626", // Portfolio Red
    github: "#",
    demo: "#"
  },
  {
    id: "02",
    name: "QUANTUM_MESH",
    category: "NETWORK",
    shortDesc: "Real-time state sync for distributed clusters.",
    tech: ["React", "Redis"],
    image: "/sentinel.png", // USER: Replace with actual project image
    accent: "#ffffff", // Portfolio White
    github: "#",
    demo: "#"
  },
  {
    id: "03",
    name: "CODE_OMEGA",
    category: "SECURITY",
    shortDesc: "Context-aware architectural auditing tool.",
    tech: ["Python", "Rust"],
    image: "/sentinel.png", // USER: Replace with actual project image
    accent: "#dc2626", // Portfolio Red
    github: "#",
    demo: "#"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#050505] text-white py-20 flex flex-col items-center overflow-hidden font-sans selection:bg-red-600/30">
      
      {/* SECTION HEADER: UNIFIED HUD */}
      <div className="max-w-[1240px] w-full px-8 mb-16 flex items-end justify-between">
         <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
               <div className="w-4 h-[2px] bg-red-600 shadow-[0_0_10px_red]" />
               <span className="text-[10px] font-black tracking-[0.6em] text-white/30 uppercase italic">Archive_X_Series</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
              WORKS
            </h2>
         </div>
         <div className="hidden md:flex flex-col items-end opacity-10">
            <span className="text-[8px] font-black tracking-widest uppercase">System: Operational</span>
            <span className="text-[8px] font-black tracking-widest uppercase">Ref: //BYIRINGIRO_S</span>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1240px] w-full px-8">
        {allProjects.map((p) => (
          <div key={p.id} className="flex flex-col items-center gap-8">
            
            {/* THE NFT CARD: 100% REPLICA ARCHITECTURE */}
            <div className="w-full bg-[#111111] rounded-[24px] p-3 pb-6 border border-white/5 relative overflow-hidden transition-all duration-500 shadow-2xl">
              
              {/* TOP HEADER: CATEGORY (Contextual Replacement) */}
              <div className="w-full flex justify-end items-start pt-3 pr-4 mb-3">
                <div className="flex flex-col items-end">
                  <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">Classification</span>
                  <span className="text-[12px] font-black text-white leading-none mt-1 italic tracking-widest">{p.category}</span>
                </div>
              </div>

              {/* IMAGE SLAB: ASYMMETRIC ROUNDING REPLICA */}
              <div 
                className="relative mx-auto w-[94%] aspect-square rounded-[12px] rounded-tr-[42px] rounded-bl-[42px] overflow-hidden flex items-center justify-center group/img"
                style={{ backgroundColor: p.accent === '#ffffff' ? '#1a1a1a' : p.accent }}
              >
                {/* PROJECT IMAGE (Placeholder used as requested) */}
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-[90%] h-[90%] object-contain filter brightness-110 drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)] group-hover/img:scale-110 transition-transform duration-700"
                />

                {/* NAME TAG: PIXEL-PERFECT REPLICA FROM DESIGN */}
                <div className="absolute top-0 left-0 z-20">
                   <div 
                     className="px-5 py-2 shadow-2xl"
                     style={{ backgroundColor: p.accent === '#ffffff' ? '#ffffff' : '#dc2626' }}
                   >
                     <span className={`text-[12px] font-black uppercase italic tracking-tighter ${p.accent === '#ffffff' ? 'text-black' : 'text-white'}`}>
                       {p.name}
                     </span>
                   </div>
                   {/* The Wraparound Tail detail from design */}
                   <div 
                     className="absolute -bottom-[6px] left-0 w-3 h-3 rotate-45" 
                     style={{ 
                        backgroundColor: p.accent === '#ffffff' ? '#ffffff' : '#dc2626', 
                        filter: 'brightness(0.6)' 
                     }}
                   />
                </div>

                {/* QUICK LINKS OVERLAY (Modern portfolio innovation) */}
                <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                   <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/80 backdrop-blur-md py-3 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <Github className="w-4 h-4" />
                   </a>
                   <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/80 backdrop-blur-md py-3 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              </div>

              {/* DESCRIPTION PILL: THEMED PILL REPLICA */}
              <div className="mt-5 mx-auto w-[94%] bg-[#080808] border border-white/5 rounded-xl p-4 flex items-center gap-4">
                 <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className={`w-full h-full fill-current ${p.accent === '#ffffff' ? 'text-white' : 'text-red-600'}`}>
                       <path d="M12 2L6 9.5L12 17L18 9.5L12 2Z" />
                    </svg>
                 </div>
                 <span className="text-[12px] font-black text-white/50 italic leading-tight uppercase tracking-tight line-clamp-2">
                   {p.shortDesc}
                 </span>
              </div>

            </div>

            {/* ACTION BUTTON: PIXEL-PERFECT REPLICA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-48 py-4 rounded-[16px] bg-[#1a1a1a] border border-white/5 relative overflow-hidden group shadow-xl"
            >
               {/* Symmetrical Accent Glows (Portfolio Red/White) */}
               <div 
                 className="absolute inset-y-0 left-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ 
                    backgroundColor: p.accent === '#ffffff' ? '#ffffff' : '#dc2626', 
                    boxShadow: `0 0 15px ${p.accent === '#ffffff' ? '#ffffff' : '#dc2626'}` 
                 }}
               />
               <div 
                 className="absolute inset-y-0 right-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ 
                    backgroundColor: p.accent === '#ffffff' ? '#ffffff' : '#dc2626', 
                    boxShadow: `0 0 15px ${p.accent === '#ffffff' ? '#ffffff' : '#dc2626'}` 
                 }}
               />
               <div 
                 className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ 
                    backgroundColor: p.accent === '#ffffff' ? '#ffffff' : '#dc2626', 
                    boxShadow: `0 0 15px ${p.accent === '#ffffff' ? '#ffffff' : '#dc2626'}` 
                 }}
               />

               <span className="text-[12px] font-black tracking-[0.4em] text-white/20 group-hover:text-white transition-colors uppercase italic">
                 INIT_DEMO
               </span>
            </motion.button>
          </div>
        ))}
      </div>

      {/* VIEW ALL PROJECT ACTION */}
      <div className="mt-20">
         <button className="group relative flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 px-16 py-6 bg-white text-black font-black text-[13px] tracking-[0.6em] uppercase italic transition-all hover:bg-red-600 hover:text-white shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
               VIEW_FULL_ARCHIVE <ArrowRight className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1.5 opacity-20">
               <ChevronDown className="w-3 h-3 animate-bounce" />
               <span className="text-[9px] font-black tracking-widest uppercase">Nodes_Discovered: 48</span>
            </div>
         </button>
      </div>

    </section>
  );
};

export default ProjectsSection;
