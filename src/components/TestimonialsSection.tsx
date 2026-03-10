import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const channels = [
  {
    name: 'Amara K.',
    company: 'OrangeLeaf Tech',
    role: 'CTO',
    quote: 'Samuel transformed our frontend architecture. Extremely performant and visually stunning. Truly top-tier engineering.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
  },
  {
    name: 'David O.',
    company: 'EduBridge Africa',
    role: 'Founder',
    quote: 'Built our platform in record time with stunning UX. The design is world-class and deployment was absolutely flawless.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
  },
  {
    name: 'Zara M.',
    company: 'Luminary Studios',
    role: 'CEO',
    quote: 'Every pixel was crafted with purpose. He turned our vague vision into a true premium web experience that investors love.',
    img: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=1200&q=80',
  },
  {
    name: 'Marcus T.',
    company: 'Sprout Ventures',
    role: 'Co-admin',
    quote: 'Helped us launch faster and smarter. He automated critical workflows and shipped a gorgeous commercial platform.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
  },
  {
    name: 'Priya J.',
    company: 'GreenField',
    role: 'Director',
    quote: 'Our application is loved by thousands of active users. Highly scalable and outstanding craftsmanship from end to end.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
  }
];

type TVState = 'standby' | 'booting' | 'playing';

const Testimonials = () => {
  const [tvState, setTvState] = useState<TVState>('standby');
  const [active, setActive] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [showOSD, setShowOSD] = useState(false);

  // Auto-cycle channels if untouched while playing
  useEffect(() => {
    if (tvState !== 'playing') return;
    const interval = setInterval(() => {
      handleChannelChange('next');
    }, 7000);
    return () => clearInterval(interval);
  }, [tvState]);

  // Handle Channel OSD disappearing
  useEffect(() => {
    if (tvState !== 'playing') return;
    setShowOSD(true);
    const t = setTimeout(() => setShowOSD(false), 2400);
    return () => clearTimeout(t);
  }, [active, tvState]);

  const handleChannelChange = (dir: 'next' | 'prev') => {
    if (tvState !== 'playing') return;
    setIsSwitching(true);
    setTimeout(() => {
      setActive((prev) => {
        if (dir === 'next') return (prev + 1) % channels.length;
        return (prev - 1 + channels.length) % channels.length;
      });
      setIsSwitching(false);
    }, 150);
  };

  const handlePower = () => {
    if (tvState === 'standby') {
      setTvState('booting');
      setTimeout(() => {
        setTvState('playing');
        setActive(0);
      }, 1000);
    } else {
      setTvState('standby');
    }
  };

  return (
    <section id="testimonials" className="bg-[#050505] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden flex justify-center font-sans tracking-tight">
      <div className="w-full max-w-7xl flex flex-col items-center">
        
        {/* Section Title */}
        <div className="w-full text-left mb-10 z-10">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-white/40 mb-1">Archive</p>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-white">
            Client Feed.
          </h2>
        </div>

        {/* ── 1. The OLED TV Screen Panel ── */}
        <div 
          className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] bg-black rounded-lg md:rounded-xl border-[4px] border-[#151515] shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.5)] z-10 flex overflow-hidden group outline outline-1 outline-white/5"
        >
          {/* Channel Change Flash Glitch */}
          {isSwitching && (
            <div className="absolute inset-0 bg-white mix-blend-difference z-50 pointer-events-none">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,black_2px,black_4px)] opacity-50" />
            </div>
          )}

          {/* Internal Bezel */}
          <div className="absolute inset-[2px] md:inset-[4px] bg-[#020202] overflow-hidden rounded-[2px] md:rounded-md">
            
            <AnimatePresence mode="wait">
               {/* ── Standby State ── */}
               {tvState === 'standby' && (
                  <motion.div 
                    key="standby"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#080808] cursor-pointer group"
                    onClick={handlePower}
                  >
                     <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                     <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm z-10 transition-colors group-hover:bg-white/10 group-hover:border-white/40"
                     >
                       <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                     </motion.div>
                     <p className="mt-6 font-mono text-[10px] md:text-xs text-white/50 uppercase tracking-[0.3em]">System Offline</p>
                     <p className="mt-2 font-sans text-[8px] md:text-[10px] text-white/30 uppercase tracking-widest">Click to initiate playback</p>
                  </motion.div>
               )}

               {/* ── Booting State ── */}
               {tvState === 'booting' && (
                  <motion.div 
                    key="booting"
                    className="absolute inset-0 flex items-center justify-center bg-black"
                  >
                    <motion.div 
                      initial={{ scaleY: 0.005, scaleX: 0 }}
                      animate={{ scaleX: 1, scaleY: [0.005, 0.01, 1] }}
                      transition={{ duration: 0.8, times: [0, 0.7, 1], ease: "anticipate" }}
                      className="w-full h-full bg-white relative origin-center"
                    >
                       <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.8)_2px,rgba(0,0,0,0.8)_4px)]" />
                    </motion.div>
                  </motion.div>
               )}

               {/* ── Playing State ── */}
               {tvState === 'playing' && (
                  <motion.div key="playing" className="w-full h-full relative">
                      
                    {/* Background Footage */}
                    <AnimatePresence mode="popLayout">
                      <motion.img 
                        key={active}
                        src={channels[active].img} 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-screen"
                      />
                    </AnimatePresence>
                    
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                    
                    {/* Cinematic Lower Third UI */}
                    <motion.div 
                      key={`ui-${active}`}
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                      className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:max-w-xl z-20"
                    >
                      <div className="bg-black/70 backdrop-blur-xl p-4 md:p-6 border border-white/10 rounded-sm shadow-2xl">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_5px_white]" />
                          <span className="text-white/80 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-black">Client Record</span>
                        </div>
                        <div className="flex flex-col gap-1 mb-3">
                          <h2 className="text-white font-black text-xl md:text-3xl uppercase tracking-tighter leading-none">
                            {channels[active].name}
                          </h2>
                          <p className="text-white/40 font-mono text-[9px] md:text-[10px] uppercase tracking-widest leading-tight">
                            {channels[active].role} // {channels[active].company}
                          </p>
                        </div>
                        <p className="text-white/90 font-sans text-xs md:text-sm font-medium italic border-l-[3px] border-white/20 pl-3 leading-relaxed">
                          "{channels[active].quote}"
                        </p>
                      </div>
                    </motion.div>

                  </motion.div>
               )}
            </AnimatePresence>

            {/* Retro CRT Scanlines Grid & Glare */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none z-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-white/[0.01] pointer-events-none z-40" />

            {/* OSD (On-Screen Display Menu) */}
            <AnimatePresence>
              {showOSD && tvState === 'playing' && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute top-4 right-5 md:top-6 md:right-8 text-white/50 font-mono text-lg md:text-xl font-black drop-shadow-md z-50 tracking-widest"
                >
                  CH 0{active + 1}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ── 2. Minimalist TV Stand ── */}
        <div className="w-full flex flex-col items-center z-10 relative">
          <div className="w-16 md:w-24 h-4 md:h-8 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-x border-white/5" />
          <div className="w-40 md:w-64 h-2 md:h-2 bg-[#222] rounded-t-lg border-t border-white/10 shadow-[0_10px_20px_black]" />
        </div>

        {/* ── 3. Interactive Remote ── */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-3 z-20">
          <p className="font-mono text-[8px] md:text-[9px] text-white/30 uppercase tracking-widest">
            Media Controls
          </p>
          <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 bg-[#0a0a0a] rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative">
            
            {/* Power Button */}
            <button 
              onClick={handlePower} 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111] hover:bg-[#1a1a1a] border border-white/5 flex items-center justify-center group transition-colors shadow-inner"
            >
              <div className={`w-3 h-3 rounded-full transition-colors ${tvState === 'playing' ? 'bg-red-500 shadow-[0_0_12px_#ef4444]' : 'bg-white/20 group-hover:bg-white/40'}`} />
            </button>
            
            <div className="w-px h-8 bg-white/10 mx-1 md:mx-2" />
            
            {/* Prev Channel */}
            <button 
              onClick={() => handleChannelChange('prev')} 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            {/* Next Channel */}
            <button 
              onClick={() => handleChannelChange('next')} 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;