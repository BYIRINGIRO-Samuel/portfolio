const skills = [
  "React", "TypeScript", "Python", "TensorFlow", "Next.js", "Node.js",
  "Three.js", "Figma", "PostgreSQL", "Docker", "AWS", "Blender",
  "PyTorch", "GraphQL", "Rust", "WebGL", "Kubernetes", "Svelte",
];

const SkillsMarquee = () => {
  return (
    <section className="relative w-full flex justify-center py-4 overflow-visible z-50 bg-white">
      {/* The Main Ribbon Container */}
      <div className="relative w-[92%] max-w-7xl h-11 flex items-stretch overflow-visible group">
        
        {/* LEFT 3D WRAP-AROUND FOLD */}
        <svg className="absolute top-2 -left-[15px] h-full w-4 -z-10" viewBox="0 0 16 44" fill="none">
          <path d="M16 0 L0 10 L16 20 Z" fill="#080808" />
          <path d="M16 0 L16 44 L0 34 V10 Z" fill="#000" />
        </svg>

        {/* HEADER BLOCK: STATIC TITLE */}
        <div className="relative flex-shrink-0 bg-[#0f0f0f] text-white px-8 flex items-center z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
             <span className="font-black text-[12px] tracking-[0.15em] uppercase italic">
               Tech_Stack://Available
             </span>
          </div>
          {/* Precise Slanted Transition */}
          <div className="absolute left-full top-0 bottom-0 w-12 bg-[#0f0f0f] skew-x-[-22deg] origin-top translate-x-[-50%] z-10 border-r border-white/5" />
        </div>

        {/* MARQUEE CHANNEL: SCROLLING CONTENT */}
        <div className="flex-grow overflow-hidden relative flex items-center bg-[#151515] border-y border-white/5">
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,white_2px,white_4px)] z-30" />
          
          <div className="flex animate-marquee whitespace-nowrap items-center h-full">
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <div key={i} className="flex items-center px-8 group/item">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 group-hover/item:text-white transition-colors uppercase font-mono">
                  {skill}
                </span>
                <span className="ml-3 text-[10px] font-black text-white/20 font-mono select-none">
                  {`>_`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT 3D WRAP-AROUND FOLD */}
        <svg className="absolute -bottom-2 -right-[15px] h-full w-4 -z-10 rotate-180" viewBox="0 0 16 44" fill="none">
          <path d="M16 0 L0 10 L16 20 Z" fill="#080808" />
          <path d="M16 0 L16 44 L0 34 V10 Z" fill="#000" />
        </svg>

        {/* Architectural Edge Shading */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 z-30" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/40 z-30" />
      </div>
    </section>
  );
};

export default SkillsMarquee;
