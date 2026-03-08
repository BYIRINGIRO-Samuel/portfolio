import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Cpu, Zap, Activity, ShieldCheck, Database, Target, ChevronRight, Binary } from "lucide-react";

type HistoryItem = {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
  type: "experience" | "education";
  metrics: { health: number; load: string };
};

const history: HistoryItem[] = [
  {
    id: "01",
    period: "2025 — Present",
    title: "Senior Full-Stack & AI Engineer",
    institution: "Freelance / Studio",
    description: "Architecting autonomous systems, neural-interfaces, and 3D environments for global frontier clients.",
    tags: ["Next.js", "PyTorch", "Three.js"],
    type: "experience",
    metrics: { health: 98, load: "MAX_PERF" }
  },
  {
    id: "02",
    period: "2023 — 2025",
    title: "AI Engineer & Tech Lead",
    institution: "Stealth AI Startup",
    description: "Led multi-modal LLM pipelines and managed a distributed team of engineers.",
    tags: ["LLMs", "Node.js", "AWS"],
    type: "experience",
    metrics: { health: 100, load: "STABLE" }
  },
  {
    id: "03",
    period: "2021 — 2023",
    title: "Full-Stack Developer",
    institution: "Digital Agency",
    description: "Developed enterprise-grade web applications and dashboards with sub-second latency targets.",
    tags: ["React", "Go", "PostgreSQL"],
    type: "experience",
    metrics: { health: 95, load: "OPERATIONAL" }
  },
  {
    id: "04",
    period: "2019 — 2021",
    title: "B.Sc. Computer Science",
    institution: "Global University",
    description: "Specialized in Artificial Intelligence and HPC. Graduated with honors.",
    tags: ["AI/ML", "C++", "Graphics"],
    type: "education",
    metrics: { health: 100, load: "SYNCCED" }
  },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollLine = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans selection:bg-white/30">
      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-6 py-12 md:px-12 md:py-16 overflow-hidden"
      >
        
        {/* BACKGROUND DIAGNOSTICS */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute top-0 right-0 p-10 flex flex-col gap-5">
              <Cpu className="w-48 h-48" />
              <Binary className="w-24 h-24 self-end" />
           </div>
           <div className="absolute bottom-0 left-0 p-10">
              <Database className="w-32 h-32" />
           </div>
        </div>

        {/* SECTION HEADER: MISSION CONTROL HUD */}
        <div className="relative z-20 mb-16 md:mb-20">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-[1.5px] bg-white opacity-40 shadow-[0_0_10px_white]" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 italic">Chronological_Registry // MEMORY_CORE</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
              CAREER<span className="text-white/20">LOGBOOK</span>.
           </h2>
        </div>

        <div className="relative z-20 flex flex-col items-center">
           
           {/* THE CENTRAL SPINE TRANSMISSION LINE */}
           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2">
              <motion.div 
                style={{ height: useTransform(scrollLine, [0, 1], ["0%", "100%"]) }}
                className="absolute top-0 left-0 w-full bg-white shadow-[0_0_12px_white]"
              />
           </div>

           <div className="w-full space-y-16 md:space-y-24">
              {history.map((item, idx) => (
                <HistoryModule key={item.id} item={item} index={idx} parentScroll={scrollYProgress} />
              ))}
           </div>

        </div>

        {/* FOOTER SYMBOL: SYNC STATUS */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-20">
           <div className="flex items-center gap-4">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[9px] font-black tracking-widest uppercase">Encryption: AES-256</span>
           </div>
           <div className="flex items-center gap-6">
              <span className="text-[7px] font-black tracking-[0.4em] uppercase italic">User_Auth: BYIRINGIRO_S</span>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                 <span className="text-[9px] font-bold">SYNCCED</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

const HistoryModule = ({ item, index, parentScroll }: { item: HistoryItem, index: number, parentScroll: any }) => {
  const isExperience = item.type === "experience";
  const alignLeft = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: alignLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`relative w-full flex flex-col md:flex-row items-start md:items-center ${alignLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
       {/* CONNECTION NODE */}
       <div className={`absolute left-0 md:left-1/2 w-5 h-5 md:w-6 md:h-6 -translate-x-1/2 z-30 flex items-center justify-center`}>
          <div className="absolute inset-0 bg-[#0f0f0f] rotate-45 border border-white/30" />
          <div className="relative z-10 w-1.5 h-1.5 bg-white shadow-[0_0_8px_white]" />
          
          {/* Node Icon */}
          <div className={`absolute -top-10 opacity-30`}>
             {isExperience ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
          </div>
       </div>

       {/* DATA MODULE: THE SLAB */}
       <div className={`pl-10 md:pl-0 w-full md:w-5/12 ${alignLeft ? 'md:pr-14 md:text-right' : 'md:pl-14 md:text-left'}`}>
          <div className="group relative">
             
             {/* Period HUD */}
             <div className={`flex items-center gap-3 mb-3 ${alignLeft ? 'md:flex-row-reverse' : ''}`}>
                <span className="text-[10px] font-black text-white/30 tracking-[0.2em] italic uppercase whitespace-nowrap">{item.period}</span>
                <div className="w-3 h-[1px] bg-white/10" />
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                   <Activity className="w-2 h-2 text-green-500 animate-pulse" />
                   <span className="text-[8px] font-black tracking-widest uppercase">{item.metrics.load}</span>
                </div>
             </div>

             <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-tight mb-1 group-hover:tracking-wider transition-all duration-500">
                {item.title}
             </h3>
             <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.1em] italic mb-4">
                @ {item.institution}
             </p>

             <p className="text-[12px] leading-relaxed text-gray-400 italic mb-6 font-medium line-clamp-2 md:line-clamp-none">
                "{item.description}"
             </p>

             {/* Tech Stack Chips */}
             <div className={`flex flex-wrap gap-1.5 ${alignLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                {item.tags.map(tag => (
                   <div key={tag} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-md hover:bg-white hover:text-black transition-all cursor-crosshair">
                      <span className="text-[8px] font-black uppercase tracking-wider">{tag}</span>
                   </div>
                ))}
             </div>

             {/* Metric Sidecar (HUD Detail) */}
             <div className={`absolute top-0 ${alignLeft ? '-left-6' : '-right-6'} h-full flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden lg:flex`}>
                <div className="flex flex-col gap-3 border-l border-white/20 pl-3 py-2">
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">Logic_Health</span>
                      <span className="text-[9px] font-black text-green-500">{item.metrics.health}%</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">Node</span>
                      <span className="text-[9px] font-black text-white/40 italic">{item.id}</span>
                   </div>
                </div>
             </div>

          </div>
       </div>

       {/* BACKGROUND DATE INDICATOR */}
       <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${alignLeft ? 'left-1/2 pl-14' : 'right-1/2 pr-14'} pointer-events-none`}>
          <span className="text-[6rem] font-black italic tracking-tighter text-white/[0.015] leading-none uppercase">
             {item.id}
          </span>
       </div>

    </motion.div>
  );
};

export default ExperienceSection;
