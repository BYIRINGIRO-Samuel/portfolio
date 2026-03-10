import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Testimonial Client Data ──────────────────────────── */
const clients = [
  {
    name: 'Amara K.',
    company: 'OrangeLeaf Tech',
    role: 'CTO',
    quote: 'Samuel transformed our entire frontend architecture. Extremely performant and visually stunning. Truly top-tier engineering.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
  {
    name: 'David O.',
    company: 'EduBridge Africa',
    role: 'Founder',
    quote: 'Built our platform in record time with a stunning UX. The design is world-class and deployment was absolutely flawless.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  },
  {
    name: 'Zara M.',
    company: 'Luminary Studios',
    role: 'CEO',
    quote: 'Every pixel was crafted with purpose. He turned our vague vision into a true premium web experience that investors love.',
    img: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=600&q=80',
  },
  {
    name: 'Marcus T.',
    company: 'Sprout Ventures',
    role: 'Co-admin',
    quote: 'Helped us launch faster and smarter. He automated critical workflows and shipped a gorgeous commercial platform.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
  },
  {
    name: 'Priya J.',
    company: 'GreenField',
    role: 'Director',
    quote: 'Our application is loved by thousands of active users. Highly scalable and outstanding craftsmanship from end to end.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  }
];

/* Spread offsets for the glass screens */
const fanOffsets = [
  { x: -180, y: 30,  r: -12 },
  { x: -90,  y: -5,  r: -6 },
  { x: 0,    y: -20, r: 0 },
  { x: 90,   y: -5,  r: 6 },
  { x: 180,  y: 30,  r: 12 },
];

/* ── Desk Props (Real-world aesthetic details) ───────── */
const TabletDevice = () => (
  // Resting code editor pad
  <div className="absolute -left-16 bottom-16 w-[300px] h-[220px] bg-[#050505] rounded-[24px] border-[5px] border-[#1a1a1a] shadow-[15px_15px_40px_rgba(0,0,0,0.9)] -rotate-12 flex items-center justify-center p-2 opacity-80 pointer-events-none">
    <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] overflow-hidden relative border border-white/5 flex flex-col p-5 shadow-inner">
      <div className="w-20 h-2 bg-white/10 rounded-full mb-4" />
      <div className="w-40 h-2 bg-white/10 rounded-full mb-4" />
      <div className="w-24 h-2 bg-green-500/30 rounded-full mb-4" />
      <div className="w-full h-px bg-white/5 my-3" />
      <div className="w-16 h-2 bg-white/10 rounded-full mb-4" />
      <div className="w-32 h-2 bg-white/10 rounded-full mb-4" />
      <div className="w-20 h-2 bg-yellow-500/30 rounded-full mb-4 ml-6" />
    </div>
  </div>
);

const CoffeeCup = () => (
  <div className="absolute -right-6 -top-6 w-40 h-40 bg-[#0a0a0a] rounded-full border-[10px] border-[#151515] shadow-[0_25px_50px_rgba(0,0,0,0.9)] flex items-center justify-center opacity-90 pointer-events-none">
    <div className="w-[75%] h-[75%] rounded-full bg-[#180a00] border-[2px] border-[#000] shadow-[inset_0_15px_30px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center">
      <div className="absolute w-[92%] h-[92%] rounded-full border-2 border-[#5c3a21] opacity-60" />
      <div className="absolute w-[80%] h-[80%] rounded-full border border-[#4a2810] opacity-30" />
      <motion.div
        animate={{ y: [-5, -20], opacity: [0, 0.4, 0], scale: [1, 1.5] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeOut' }}
        className="absolute w-8 h-8 bg-white/10 blur-xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30], opacity: [0, 0.3, 0], scale: [1, 2] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeOut', delay: 1 }}
        className="absolute w-6 h-6 bg-white/10 blur-xl rounded-full ml-4"
      />
    </div>
  </div>
);

const Pen = () => (
  <div className="absolute bottom-16 right-16 md:right-32 w-48 h-3 bg-gradient-to-r from-[#111] to-[#222] rounded-full -rotate-[40deg] shadow-[5px_20px_20px_rgba(0,0,0,0.9)] border border-white/5 flex items-center pointer-events-none">
    <div className="w-10 h-full bg-[#333] rounded-l-full border-r border-[#111]" />
    <div className="flex-1 h-px bg-white/5 mx-2" />
  </div>
);


/* ── Main Component ─────────────────────────────────────── */
const Testimonials = () => {
  const [active, setActive] = useState(2);
  const [manualMode, setManualMode] = useState(false);

  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % clients.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [manualMode]);

  return (
    <section id="testimonials" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      
      {/* Desk Surface Container */}
      <div className="relative w-full max-w-7xl h-[600px] md:h-[700px] bg-[#0c0c0c] border border-white/10 rounded-xl md:rounded-3xl shadow-[inset_0_0_150px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* Desk vignette & noise */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(255,255,255,0.06),_transparent_70%)] pointer-events-none z-0" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')] pointer-events-none z-0" />

        <CoffeeCup />
        <TabletDevice />
        <Pen />

        {/* Etched Text */}
        <div className="absolute top-8 left-8 md:top-12 md:left-14 pointer-events-none z-0">
          <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-white/20 mb-1 italic mix-blend-overlay">Archive // 2024</p>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-white/10 mix-blend-overlay">
            Client <br/> Feedback.
          </h2>
        </div>

        {/* ── Futuristic Transparent OLED Screens ── */}
        <div className="absolute inset-0 flex items-center justify-center mt-6 md:mt-10 z-10">
          
          {clients.map((c, i) => {
            const isActive = active === i;
            
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const sfX = isMobile ? 0.6 : 1; 

            return (
              <motion.div
                key={i}
                initial={false}
                animate={
                  isActive
                    ? { x: 0, y: -40, rotate: 0, scale: isMobile ? 1 : 1.15, zIndex: 50, opacity: 1 }
                    : { x: fanOffsets[i].x * sfX, y: fanOffsets[i].y, rotate: fanOffsets[i].r, scale: isMobile ? 0.75 : 0.85, zIndex: i, opacity: 0.4 }
                }
                whileHover={!isActive ? { opacity: 0.8, y: fanOffsets[i].y - 10 } : {}}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                onClick={() => { setActive(i); setManualMode(true); }}
                className={`absolute w-[280px] md:w-[320px] rounded-2xl bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_0_40px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col
                  ${isActive ? 'cursor-default ring-1 ring-white/30' : 'cursor-pointer'}
                `}
              >
                {/* Upper Screen Glare */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent pointer-events-none mix-blend-overlay" />

                {/* UI Element on Top Right Corner */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_5px_white]" />
                <div className="absolute top-[14px] right-6 w-8 h-[2px] rounded-full bg-white/20" />

                {/* Displayed Image */}
                <div className="w-full h-[140px] md:h-[160px] relative overflow-hidden border-b border-white/10">
                  <img src={c.img} alt={c.company} className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                  
                  {/* Digital Scanlines overlay */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.4)_2px,rgba(0,0,0,0.4)_4px)] pointer-events-none" />
                </div>
                
                {/* Screen Content Wrapper */}
                <div className="p-4 md:p-6 relative z-10 flex flex-col justify-end flex-grow">
                  
                  <h3 className="text-white font-black uppercase text-lg md:text-xl tracking-tighter leading-none mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {c.name}
                  </h3>
                  
                  <div className="text-white/50 font-mono text-[9px] md:text-[10px] uppercase tracking-widest mb-4 border-b border-white/10 pb-3 flex justify-between items-center">
                    <span>{c.role} // {c.company}</span>
                    <span className="flex items-center gap-1.5 text-white/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      SYS.OK
                    </span>
                  </div>
                  
                  <p className="text-white/90 font-sans text-xs md:text-[13px] leading-relaxed italic border-l-[3px] border-white/30 pl-3 min-h-[60px]">
                    "{c.quote}"
                  </p>

                  <div className="mt-5 w-full flex justify-center">
                    <div className="w-16 h-1 rounded-full bg-white/10" />
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ── Hint Text ── */}
        <p className="absolute bottom-6 md:bottom-8 w-full text-center font-mono text-[9px] uppercase tracking-widest text-white/30 pointer-events-none z-20 transition-opacity">
          Select a display panel to access record
        </p>

      </div>
    </section>
  );
};

export default Testimonials;