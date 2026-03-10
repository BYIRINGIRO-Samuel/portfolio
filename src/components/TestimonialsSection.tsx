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

/* Natural fanned spread offsets for the photos on the desk */
const fanOffsets = [
  { x: -160, y: 20,  r: -16 },
  { x: -80,  y: -10, r: -8 },
  { x: 0,    y: -25, r: 0 },
  { x: 80,   y: -10, r: 8 },
  { x: 160,  y: 20,  r: 16 },
];

/* ── Desk Props (Real-world aesthetic details) ───────── */
const TabletDevice = () => (
  <div className="absolute -left-16 bottom-16 w-[300px] h-[220px] bg-[#050505] rounded-[24px] border-[5px] border-[#1a1a1a] shadow-[15px_15px_40px_rgba(0,0,0,0.9)] -rotate-12 flex items-center justify-center p-2 opacity-80 pointer-events-none">
    <div className="w-full h-full bg-[#0a0a0a] rounded-[14px] overflow-hidden relative border border-white/5 flex flex-col p-5 shadow-inner">
      {/* Mock Code Editor Screen */}
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
  // Positioned top-right
  <div className="absolute -right-6 -top-6 w-40 h-40 bg-[#0a0a0a] rounded-full border-[10px] border-[#151515] shadow-[0_25px_50px_rgba(0,0,0,0.9)] flex items-center justify-center opacity-90 pointer-events-none">
    <div className="w-[75%] h-[75%] rounded-full bg-[#180a00] border-[2px] border-[#000] shadow-[inset_0_15px_30px_rgba(0,0,0,1)] relative overflow-hidden flex items-center justify-center">
      {/* Coffee Crema Rim */}
      <div className="absolute w-[92%] h-[92%] rounded-full border-2 border-[#5c3a21] opacity-60" />
      <div className="absolute w-[80%] h-[80%] rounded-full border border-[#4a2810] opacity-30" />
      {/* Animated Steam */}
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

  // Auto cycle through polaroids
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
        
        {/* Desk vignette lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(255,255,255,0.06),_transparent_70%)] pointer-events-none z-0" />
        {/* Subtle wood-like grain noise pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+PC9zdmc+')] pointer-events-none z-0" />

        {/* ── Environment Desk Props ── */}
        <CoffeeCup />
        <TabletDevice />
        <Pen />

        {/* ── Etched Text on Desk ── */}
        <div className="absolute top-8 left-8 md:top-12 md:left-14 pointer-events-none z-0">
          <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-white/20 mb-1 italic mix-blend-overlay">Archive // 2024</p>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-white/10 mix-blend-overlay">
            Client <br/> Feedback.
          </h2>
        </div>

        {/* ── The Polaroid Deck (Centered) ── */}
        <div className="absolute inset-0 flex items-center justify-center mt-10 z-10">
          
          {clients.map((c, i) => {
            const isActive = active === i;
            
            // For smaller screens, reduce the horizontal spread
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const sfX = isMobile ? 0.6 : 1; 

            return (
              <motion.div
                key={i}
                initial={false}
                animate={
                  isActive
                    ? { x: 0, y: -40, rotate: 0, scale: isMobile ? 1.05 : 1.25, zIndex: 50, opacity: 1 }
                    : { x: fanOffsets[i].x * sfX, y: fanOffsets[i].y, rotate: fanOffsets[i].r, scale: isMobile ? 0.75 : 0.85, zIndex: i, opacity: 0.5 }
                }
                whileHover={!isActive ? { opacity: 0.9, y: fanOffsets[i].y - 15 } : {}}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                onClick={() => { setActive(i); setManualMode(true); }}
                className={`absolute w-[240px] md:w-[260px] bg-[#f8f8f8] p-3 pb-6 md:pb-8 rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.9)] 
                  ${isActive ? 'cursor-default pointer-events-none' : 'cursor-pointer'}
                `}
              >
                {/* Photo window */}
                <div className="w-full h-[180px] md:h-[200px] bg-black mb-4 md:mb-5 relative overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]">
                  {/* The image (darkened and styled like a printed photo) */}
                  <img src={c.img} alt={c.company} className="w-full h-full object-cover grayscale mix-blend-screen opacity-90" />
                  {/* Photo tint overlay */}
                  <div className="absolute inset-0 bg-[#0f0f0f] mix-blend-overlay opacity-60" />
                </div>
                
                {/* Text section representing handwritten back-of-photo or caption */}
                <div className="px-2">
                  <h3 className="text-[#050505] font-black uppercase text-lg md:text-xl tracking-tighter leading-none mb-1">{c.name}</h3>
                  <p className="text-gray-500 font-mono text-[8px] md:text-[9px] uppercase tracking-widest mb-3 md:mb-4 border-b border-gray-300 pb-2 md:pb-3">{c.role} // {c.company}</p>
                  <p className="text-[#111] font-sans text-[11px] md:text-xs leading-relaxed italic font-medium">"{c.quote}"</p>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ── Hint Text ── */}
        <p className="absolute bottom-8 w-full text-center font-mono text-[9px] uppercase tracking-widest text-white/30 pointer-events-none z-20">
          Click any photo to bring it forward
        </p>

      </div>
    </section>
  );
};

export default Testimonials;