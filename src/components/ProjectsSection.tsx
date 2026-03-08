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
    shortDesc: "Sub-50ms inference on multi-region edge nodes.",
    tech: ["PyTorch", "CUDA"],
    image: "/sentinel.png",
    accent: "#ffffff",
    github: "#",
    demo: "#"
  },
  {
    id: "02",
    name: "QUANTUM_MESH",
    category: "NETWORK",
    shortDesc: "Real-time state sync for distributed clusters.",
    tech: ["React", "Redis"],
    image: "/sentinel.png",
    accent: "#ffffff",
    github: "#",
    demo: "#"
  },
  {
    id: "03",
    name: "CODE_OMEGA",
    category: "SECURITY",
    shortDesc: "Context-aware architectural auditing tool.",
    tech: ["Python", "Rust"],
    image: "/sentinel.png",
    accent: "#ffffff",
    github: "#",
    demo: "#"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans selection:bg-white/30">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-6 py-10 md:px-12 md:py-12 overflow-hidden group">
        
        {/* SECTION HEADER: UNIFIED HUD */}
        <div className="w-full mb-10 flex items-end justify-between">
           <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-[1.5px] bg-white opacity-40" />
                 <span className="text-[9px] font-black tracking-[0.5em] text-white/20 uppercase italic">Archive_X_Series</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
                SELECTED<span className="text-white/20">WORKS</span>
              </h2>
           </div>
           <div className="hidden md:flex flex-col items-end opacity-10">
              <span className="text-[7px] font-black tracking-widest uppercase">System: Operational</span>
              <span className="text-[7px] font-black tracking-widest uppercase">Ref: //BYIRINGIRO_S</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {allProjects.map((p) => (
            <div key={p.id} className="flex flex-col items-center gap-6">
              
              {/* THE NFT CARD: 100% REPLICA ARCHITECTURE */}
              <div className="w-full bg-[#151515] rounded-[20px] p-2.5 pb-5 border border-white/5 relative overflow-hidden transition-all duration-500 shadow-2xl">
                
                {/* TOP HEADER: CATEGORY */}
                <div className="w-full flex justify-end items-start pt-2 pr-3 mb-2">
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] text-white/20 font-black uppercase tracking-widest">Classification</span>
                    <span className="text-[11px] font-black text-white leading-none mt-1 italic tracking-widest">{p.category}</span>
                  </div>
                </div>

                {/* IMAGE SLAB: ASYMMETRIC ROUNDING */}
                <div 
                  className="relative mx-auto w-[94%] aspect-square rounded-[10px] rounded-tr-[36px] rounded-bl-[36px] overflow-hidden flex items-center justify-center group/img bg-[#1c1c1c]"
                >
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-[85%] h-[85%] object-contain filter brightness-110 drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] group-hover/img:scale-110 transition-transform duration-700"
                  />

                  {/* NAME TAG (Monochrome) */}
                  <div className="absolute top-0 left-0 z-20">
                     <div className="px-5 py-2 shadow-2xl bg-white">
                       <span className="text-[11px] font-black uppercase italic tracking-tighter text-black">
                         {p.name}
                       </span>
                     </div>
                     {/* Wrapping Tail detail */}
                     <div 
                       className="absolute -bottom-[5px] left-0 w-2.5 h-2.5 rotate-45 bg-white filter brightness-50" 
                     />
                  </div>

                  {/* QUICK LINKS OVERLAY */}
                  <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                     <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/80 backdrop-blur-md py-2.5 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Github className="w-3.5 h-3.5" />
                     </a>
                     <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-black/80 backdrop-blur-md py-2.5 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                     </a>
                  </div>
                </div>

                {/* DESCRIPTION PILL */}
                <div className="mt-4 mx-auto w-[94%] bg-[#0f0f0f] border border-white/5 rounded-lg p-3.5 flex items-center gap-3">
                   <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-white/40">
                         <path d="M12 2L6 9.5L12 17L18 9.5L12 2Z" />
                      </svg>
                   </div>
                   <span className="text-[10px] font-bold text-white/50 italic leading-tight uppercase tracking-tight line-clamp-1">
                     {p.shortDesc}
                   </span>
                </div>

              </div>

              {/* ACTION BUTTON (Monochrome) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-44 py-3.5 rounded-[14px] bg-[#1a1a1a] border border-white/5 relative overflow-hidden group shadow-xl"
              >
                 <div className="absolute inset-y-0 left-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-[0_0_12px_white]" />
                 <div className="absolute inset-y-0 right-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-[0_0_12px_white]" />
                 <div className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-[0_0_12px_white]" />

                 <span className="text-[11px] font-black tracking-[0.3em] text-white/20 group-hover:text-white transition-colors uppercase italic">
                   INIT_DEMO
                 </span>
              </motion.button>
            </div>
          ))}
        </div>

        {/* VIEW ALL ARCHIVE */}
        <div className="mt-12 flex flex-col items-center">
           <button className="group relative flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 px-10 py-3.5 bg-white text-black font-black text-[10px] tracking-[0.5em] uppercase italic transition-all hover:bg-gray-200 shadow-xl">
                 VIEW_ARCHIVE <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-1.5 opacity-20">
                 <ChevronDown className="w-2.5 h-2.5 animate-bounce" />
                 <span className="text-[8px] font-black tracking-widest uppercase italic">Archive_Nodes: 48</span>
              </div>
           </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
