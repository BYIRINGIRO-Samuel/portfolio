import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── TV Broadcast Channels Data ────────────────────────── */
const channels = [
  {
    name: 'Amara K.',
    company: 'OrangeLeaf Tech',
    role: 'CTO',
    quote: 'Samuel transformed our frontend architecture. Extremely performant and visually stunning. Truly top-tier engineering.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
    color: '#ffbd2e', // warm
  },
  {
    name: 'David O.',
    company: 'EduBridge Africa',
    role: 'Founder',
    quote: 'Built our platform in record time with stunning UX. The design is world-class and deployment was absolutely flawless.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    color: '#27c93f', // green
  },
  {
    name: 'Zara M.',
    company: 'Luminary Studios',
    role: 'CEO',
    quote: 'Every pixel was crafted with purpose. He turned our vague vision into a true premium web experience that investors love.',
    img: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1200&q=80',
    color: '#ff5f56', // red
  },
  {
    name: 'Marcus T.',
    company: 'Sprout Ventures',
    role: 'Co-admin',
    quote: 'Helped us launch faster and smarter. He automated critical workflows and shipped a gorgeous commercial platform.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
    color: '#8b5cf6', // purple
  },
  {
    name: 'Priya J.',
    company: 'GreenField',
    role: 'Director',
    quote: 'Our application is loved by thousands of active users. Highly scalable and outstanding craftsmanship from end to end.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    color: '#0ea5e9', // blue
  }
];

/* ── Main Component ─────────────────────────────────────── */
const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [showOSD, setShowOSD] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);
  const [manualMode, setManualMode] = useState(false);

  // Handle Channel OSD disappearing
  useEffect(() => {
    setShowOSD(true);
    const t = setTimeout(() => setShowOSD(false), 2400);
    return () => clearTimeout(t);
  }, [active]);

  // Auto-cycle channels if untouched
  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(() => {
      setIsSwitching(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % channels.length);
        setIsSwitching(false);
      }, 150);
    }, 6000);
    return () => clearInterval(interval);
  }, [manualMode]);

  const channelUp = () => {
    setManualMode(true);
    setIsSwitching(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % channels.length);
      setIsSwitching(false);
    }, 120);
  };

  return (
    <section id="testimonials" className="bg-[#050505] pt-16 pb-12 overflow-hidden flex justify-center font-sans tracking-tight">
      <div className="relative w-full max-w-[1400px] flex flex-col items-center">
        
        {/* Ambient Backlight (Ambilight glow cast on the wall behind the TV) */}
        <div 
          className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[70%] blur-[120px] md:blur-[180px] mix-blend-screen opacity-40 md:opacity-30 z-0 transition-colors duration-1000 ease-in-out pointer-events-none"
          style={{ backgroundColor: channels[active].color }}
        />

        {/* Cinematic Title on the wall */}
        <div className="absolute top-0 right-4 md:right-12 z-0 opacity-10 pointer-events-none text-right">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/50 mb-1">Live Feed</p>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-none text-white">Broadcasts.</h2>
        </div>

        {/* ── 1. The OLED TV Screen Panel ── */}
        <div 
          onClick={channelUp}
          className="relative w-[92%] md:w-[75%] lg:w-[65%] max-w-5xl aspect-video bg-black rounded-lg md:rounded-2xl border-2 md:border-[6px] border-[#0a0a0a] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6)] z-10 flex cursor-pointer overflow-hidden group outline outline-1 md:outline-2 outline-white/10"
        >
          {/* Channel Change Flash Glitch */}
          {isSwitching && (
            <div className="absolute inset-0 bg-[#f0f0f0] z-50 flex flex-col justify-between overflow-hidden">
               {/* Static lines simulated during flash */}
               <div className="w-full h-1/4 bg-black/20" />
               <div className="w-full h-1/6 bg-white/50 mb-8 mix-blend-difference" />
            </div>
          )}

          {/* Internal Bezel */}
          <div className="absolute inset-[2px] md:inset-[4px] bg-[#050505] overflow-hidden rounded-sm md:rounded-lg">
            
            <AnimatePresence mode="wait">
              <motion.div key={active} className="w-full h-full relative">
                
                {/* Cinematic Background Footages */}
                <motion.img 
                  src={channels[active].img} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-screen"
                  animate={{ scale: [1, 1.15], x: [0, -20] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                
                {/* ── Documentary/News Lower Third Graphic ── */}
                <motion.div 
                  initial={{ x: -40, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.25, type: 'spring', bounce: 0.2 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 flex flex-col max-w-2xl"
                >
                  {/* Status Pills */}
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                    <div className="px-2 py-0.5 md:px-3 md:py-1 bg-red-600 border border-red-500 text-white font-black uppercase text-[8px] md:text-xs tracking-[0.2em] flex items-center gap-1.5 md:gap-2 shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse" />
                      REC
                    </div>
                    <div className="text-white/80 font-mono text-[8px] md:text-[10px] uppercase tracking-widest backdrop-blur-md bg-black/40 px-2 py-0.5 md:px-3 md:py-1 border border-white/10 hidden sm:block">
                      SECURE_ENCRYPTED_FEED
                    </div>
                  </div>
                  
                  {/* Main Subject Plate */}
                  <div className="bg-white/95 backdrop-blur-xl p-3 md:p-6 border-l-[4px] md:border-l-[8px] border-red-600 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                    <div className="flex justify-between items-end mb-1 md:mb-2">
                      <h2 className="text-[#050505] font-black text-xl md:text-3xl uppercase tracking-tighter leading-none">
                        {channels[active].name}
                      </h2>
                      <p className="text-black/50 font-black text-[7px] md:text-[10px] uppercase tracking-widest text-right leading-tight">
                        {channels[active].role} <span className="hidden md:inline"> // </span><br className="md:hidden" /> {channels[active].company}
                      </p>
                    </div>
                    {/* The Quote Transcript */}
                    <p className="text-black/80 font-sans text-[11px] md:text-[15px] font-semibold italic border-t border-black/10 pt-2 md:pt-3 mt-1 leading-relaxed md:leading-relaxed">
                      "{channels[active].quote}"
                    </p>
                  </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>

            {/* Retro CRT Scanlines Grid & Glare */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.25)_2px,rgba(0,0,0,0.25)_4px)] pointer-events-none z-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-white/[0.01] pointer-events-none z-40" />

            {/* OSD (On-Screen Display Menu) */}
            <AnimatePresence>
              {showOSD && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute top-4 right-5 md:top-8 md:right-10 text-[#4ade80] font-mono text-lg md:text-4xl font-black drop-shadow-[0_0_15px_rgba(74,222,128,0.8)] z-50 tracking-widest"
                >
                  CH 0{active + 1}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ── 2. The Media Console & Accessories ── */}
        <div className="w-full flex flex-col items-center z-10 relative">
          
          {/* TV Stand Base */}
          <div className="w-20 md:w-32 h-6 md:h-12 bg-gradient-to-b from-[#111] to-[#080808] border-x border-white/5" />
          <div className="w-32 md:w-56 h-2 md:h-3 bg-[#161616] rounded-t-xl border-t border-white/10 shadow-[0_10px_20px_black]" />
          
          {/* Main Wooden/Matte Console Unit */}
          <div className="w-full max-w-5xl h-12 md:h-20 bg-[#0a0a0a] border-t border-b border-[#1c1c1c] shadow-[0_20px_50px_black] flex items-center justify-center md:justify-between px-6 md:px-16 overflow-visible z-20">
            
            {/* Left Decor: Stack of books/devices */}
            <div className="hidden md:flex flex-col gap-1 opacity-20 transform -translate-y-2">
              <div className="w-16 h-2 bg-white rounded-t-sm" />
              <div className="w-16 h-2 bg-[#ccc]" />
              <div className="w-16 h-2 bg-[#999]" />
            </div>

            {/* Interactive Remote Control Prop */}
            <div className="flex items-center gap-4">
              <p className="font-mono text-[8px] md:text-[9px] text-white/30 uppercase tracking-widest hidden sm:block pointer-events-none">
                Interact with remote or screen
              </p>
              <div 
                className="w-20 md:w-28 h-5 md:h-7 bg-[#161616] rounded-sm transform md:rotate-[-5deg] border border-[#2a2a2a] shadow-[0_10px_20px_#000] flex justify-end p-1 md:p-1.5 items-center gap-1.5 md:gap-2 cursor-pointer hover:bg-[#1f1f1f] transition-colors relative z-30"
                onClick={channelUp}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626] border border-red-900" />
              </div>
            </div>

            {/* Right Decor: Subwoofer or Object */}
            <div className="hidden md:block w-8 h-8 md:w-12 md:h-14 bg-[#050505] border-t border-l border-white/5 shadow-2xl relative translate-y-[-10px]">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border border-white/10" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;