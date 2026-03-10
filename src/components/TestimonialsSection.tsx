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
    }, 8000);
    return () => clearInterval(interval);
  }, [tvState]);

  // Handle Channel OSD disappearing
  useEffect(() => {
    if (tvState !== 'playing') return;
    setShowOSD(true);
    const t = setTimeout(() => setShowOSD(false), 2800);
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
      }, 1200);
    } else {
      setTvState('standby');
    }
  };

  return (
    <section id="testimonials" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans tracking-tight">
      {/* Inner Container styling */}
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl shadow-2xl z-10 px-6 sm:px-10 lg:px-20 py-8 md:py-12 flex flex-col items-center overflow-hidden">
        
        {/* Section Title */}
        <div className="w-full text-left max-w-[850px] mb-6 md:mb-8 z-10 pt-2">
          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40 mb-2">Portfolio // Playback</p>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black italic tracking-tighter uppercase leading-none text-white">
            Client <span className="text-white/20">Feed</span>.
          </h2>
        </div>

        {/* ── 1. The OLED TV Screen Panel ── */}
        <div 
          className="relative w-full max-w-[850px] aspect-[16/9] lg:aspect-[21/9] bg-black rounded-lg md:rounded-2xl border-[4px] md:border-[6px] border-[#151515] shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.4)] z-10 flex overflow-hidden group outline outline-1 outline-white/10"
        >
          {/* Channel Change Flash Glitch */}
          {isSwitching && (
            <div className="absolute inset-0 bg-white mix-blend-difference z-50 pointer-events-none">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,black_2px,black_4px)] opacity-60" />
            </div>
          )}

          {/* Internal Bezel */}
          <div className="absolute inset-[2px] md:inset-[4px] bg-[#020202] overflow-hidden rounded-[2px] md:rounded-[4px]">
            
            <AnimatePresence mode="wait">
               {/* ── Standby / News Show Intro Screen ── */}
               {tvState === 'standby' && (
                  <motion.div 
                    key="standby"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-[#050505] cursor-pointer group shadow-inner"
                    onClick={handlePower}
                  >
                     {/* Dynamic Grid Background & Faux Globe Data */}
                     <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,_white_1px,_transparent_1px)] bg-[size:12px_12px]" />
                     <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                       <div className="w-[600px] h-[300px] rounded-[100%] border border-white" />
                       <div className="absolute w-[400px] h-[400px] rounded-[100%] border border-white rotate-45" />
                       <div className="absolute w-[400px] h-[400px] rounded-[100%] border border-white -rotate-45" />
                     </div>
                     
                     {/* Top Bar: "LIVE REPORT" */}
                     <div className="absolute top-0 w-full flex items-center justify-between px-4 md:px-6 py-2.5 bg-gradient-to-r from-red-600/90 to-red-900/40 border-b border-red-500/50 backdrop-blur-md z-20">
                       <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
                         <span className="text-white font-sans text-[9px] md:text-[11px] font-black uppercase tracking-widest text-shadow">News Broadcast Feed</span>
                       </div>
                       <span className="text-white/60 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] hidden sm:block">
                         SYNDICATION MODE: OK
                       </span>
                     </div>

                     {/* Center Branding */}
                     <div className="flex-1 flex flex-col items-center justify-center z-10 relative mt-4">
                       <div className="bg-white px-3 py-1 mb-3 rounded-xs shadow-lg">
                         <p className="font-black text-red-700 text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Special Report</p>
                       </div>
                       <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] leading-none text-center">
                         Client <span className="text-white/40">Impact.</span>
                       </h1>
                       <p className="mt-3 text-[9px] md:text-[11px] text-white/50 font-sans font-bold uppercase tracking-[0.2em] max-w-sm text-center px-4">
                         Exclusive Coverage on Full-Stack Engineering & Transformative Design
                       </p>
                       
                       {/* Play Button simulating 'Tune In' */}
                       <motion.div 
                         whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)', color: 'black' }}
                         whileTap={{ scale: 0.95 }}
                         className="mt-6 md:mt-8 px-6 py-2 rounded-full border border-white flex items-center gap-2 text-white transition-colors backdrop-blur-sm bg-black/40 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                       >
                         <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                         <span className="font-black text-[9px] md:text-[11px] uppercase tracking-widest">Tune In Now</span>
                       </motion.div>
                     </div>

                     {/* Bottom Breaking News Ticker */}
                     <div className="absolute bottom-0 w-full h-8 md:h-10 border-t border-red-500/20 bg-black flex items-center z-20">
                       <div className="bg-red-600 h-full flex items-center px-3 md:px-4 z-10 font-black text-white text-[8px] md:text-[10px] uppercase tracking-widest flex-shrink-0 shadow-[5px_0_10px_rgba(0,0,0,0.8)]">
                         Breaking
                       </div>
                       <div className="flex-1 overflow-hidden h-full relative border-l border-white/5 bg-[#0a0a0a]">
                         <motion.div 
                           animate={{ x: ['100%', '-100%'] }}
                           transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                           className="absolute whitespace-nowrap h-full flex items-center font-sans font-bold text-[9px] md:text-[11px] text-white/70 uppercase tracking-widest"
                         >
                           Samuel's platforms skyrocket user retention &nbsp;&nbsp; /// &nbsp;&nbsp; "The code is modular and deployment was flawless" - David O. &nbsp;&nbsp; /// &nbsp;&nbsp; Next Gen Tech Solutions reshaping the web landscape...
                         </motion.div>
                       </div>
                     </div>
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
                      transition={{ duration: 0.9, times: [0, 0.7, 1], ease: "easeInOut" }}
                      className="w-full h-full bg-white relative origin-center"
                    >
                       <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.9)_2px,rgba(0,0,0,0.9)_4px)]" />
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
                        animate={{ opacity: 0.55, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-screen"
                      />
                    </AnimatePresence>
                    
                    {/* Vignette Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
                    
                    {/* Cinematic Lower Third UI */}
                    <motion.div 
                      key={`ui-${active}`}
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
                      className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:max-w-2xl z-20"
                    >
                      <div className="bg-white/95 backdrop-blur-3xl p-4 md:p-6 border-l-[4px] md:border-l-[6px] border-[#0f0f0f] shadow-2xl">
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                          <span className="text-black font-mono text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black">Live Interview</span>
                        </div>
                        
                        <div className="flex justify-between items-end mb-2 md:mb-3">
                          <h2 className="text-[#0f0f0f] font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-tighter leading-none">
                            {channels[active].name}
                          </h2>
                          <p className="text-black/50 font-black text-[7px] md:text-[9px] uppercase tracking-widest text-right leading-tight max-w-[150px] md:max-w-none">
                            {channels[active].role} <span className="hidden md:inline"> // </span><br className="md:hidden" /> {channels[active].company}
                          </p>
                        </div>

                        <p className="text-[#111] font-sans text-xs md:text-[14px] font-semibold italic border-t border-black/10 pt-2 md:pt-3 leading-relaxed">
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
                  className="absolute top-4 right-5 md:top-6 md:right-8 text-white font-mono text-lg md:text-2xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-50 tracking-[0.1em]"
                >
                  EXT-0{active + 1}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ── 2. Minimalist TV Stand ── */}
        <div className="w-full flex flex-col items-center z-10 relative">
          <div className="w-16 md:w-24 h-4 md:h-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-x border-white/5" />
          <div className="w-32 md:w-56 h-2 md:h-3 bg-[#1f1f1f] rounded-t-xl border-t border-white/10 shadow-[0_10px_20px_black]" />
        </div>

        {/* ── 3. Interactive Remote ── */}
        <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 md:gap-3 z-20">
          <p className="font-mono text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">
            Deck Controls
          </p>
          <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-1.5 md:py-2.5 bg-[#0a0a0a] rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative">
            
            {/* Power Button */}
            <button 
              onClick={handlePower} 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111] hover:bg-[#1a1a1a] border border-white/5 flex items-center justify-center group transition-colors shadow-inner"
            >
              <div className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full transition-all ${tvState === 'playing' ? 'bg-red-500 shadow-[0_0_15px_#ef4444]' : 'bg-white/20 group-hover:bg-white/40 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`} />
            </button>
            
            <div className="w-px h-6 md:h-8 bg-white/10 mx-1 md:mx-2" />
            
            {/* Prev Channel */}
            <button 
              onClick={() => handleChannelChange('prev')} 
              className="w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            {/* Next Channel */}
            <button 
              onClick={() => handleChannelChange('next')} 
              className="w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;