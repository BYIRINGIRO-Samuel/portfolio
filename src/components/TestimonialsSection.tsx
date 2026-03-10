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
      {/* Inner Container aligning with Hero/Skills */}
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl shadow-2xl z-10 px-6 sm:px-10 lg:px-20 py-12 md:py-20 flex flex-col items-center overflow-hidden">
        
        {/* Section Title */}
        <div className="w-full text-left max-w-4xl mb-8 md:mb-12 z-10 pt-4">
          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/40 mb-2">Portfolio // Playback</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase leading-none text-white">
            Client <span className="text-white/20">Feed</span>.
          </h2>
        </div>

        {/* ── 1. The OLED TV Screen Panel ── */}
        <div 
          className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] bg-black rounded-lg md:rounded-2xl border-[4px] md:border-[6px] border-[#151515] shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.4)] z-10 flex overflow-hidden group outline outline-1 outline-white/10"
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
               {/* ── Standby / Advanced Lock Screen ── */}
               {tvState === 'standby' && (
                  <motion.div 
                    key="standby"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#070707] cursor-pointer group"
                    onClick={handlePower}
                  >
                     {/* Dynamic Grid Background */}
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
                     
                     {/* HUD Telemetry Elements */}
                     <div className="absolute top-5 left-6 flex flex-col gap-1.5 text-[7px] md:text-[9px] text-white/50 font-mono tracking-[0.2em] uppercase">
                       <span className="text-white mb-1 tracking-[0.4em]">/// SYSTEM_HUD</span>
                       <span>STATUS: ENCRYPTED_ARCHIVE</span>
                       <span>MEMORY: 256TB [OK]</span>
                       <span>AWAITING INITIALIZATION...</span>
                     </div>
                     <div className="absolute bottom-5 right-6 text-[7px] md:text-[9px] text-white/40 font-mono tracking-[0.2em] text-right uppercase hidden sm:block">
                       NET: CONNECTED<br/><br/>
                       SEC: AES-256
                     </div>

                     {/* Central Interactive Scanner Component */}
                     <div className="relative flex items-center justify-center w-40 h-40">
                       {/* Rotating Rings */}
                       <motion.div 
                         animate={{ rotate: 360 }} 
                         transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                         className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/10 border-t-white/50 border-b-white/50 pointer-events-none" 
                       />
                       <motion.div 
                         animate={{ rotate: -360 }} 
                         transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                         className="absolute w-36 h-36 md:w-40 md:h-40 rounded-full border border-white/10 border-l-white/40 border-r-white/40 border-dashed pointer-events-none" 
                       />
                       <motion.div 
                         animate={{ rotate: 360 }} 
                         transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                         className="absolute inset-4 rounded-full border border-[#222] border-t-white/20 pointer-events-none" 
                       />
                       
                       {/* Play Button */}
                       <motion.div 
                         whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,1)' }}
                         whileTap={{ scale: 0.9 }}
                         className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-black border border-white flex flex-col items-center justify-center z-10 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
                       >
                         <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                       </motion.div>
                     </div>
                     
                     {/* Blinking prompt */}
                     <motion.p 
                       animate={{ opacity: [0.4, 1, 0.4] }}
                       transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                       className="mt-8 font-mono text-[9px] md:text-xs text-white uppercase tracking-[0.5em] z-10"
                     >
                       Click to Decrypt Feed
                     </motion.p>
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
                      initial={{ y: 30, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
                      className="absolute bottom-5 left-5 right-5 md:bottom-10 md:left-10 md:max-w-2xl z-20"
                    >
                      <div className="bg-white/95 backdrop-blur-3xl p-5 md:p-8 border-l-[6px] border-[#0f0f0f] shadow-2xl">
                        
                        <div className="flex items-center gap-3 mb-2 md:mb-4">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                          <span className="text-black font-mono text-[8px] md:text-[10px] uppercase tracking-[0.25em] font-black">Secure Link Established</span>
                        </div>
                        
                        <div className="flex justify-between items-end mb-2 md:mb-3">
                          <h2 className="text-[#0f0f0f] font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter leading-none">
                            {channels[active].name}
                          </h2>
                          <p className="text-black/50 font-black text-[8px] md:text-[10px] uppercase tracking-widest text-right leading-tight max-w-[150px] md:max-w-none">
                            {channels[active].role} <span className="hidden md:inline"> // </span><br className="md:hidden" /> {channels[active].company}
                          </p>
                        </div>

                        <p className="text-[#111] font-sans text-[13px] md:text-[15px] font-semibold italic border-t-2 border-black/10 pt-3 md:pt-4 leading-relaxed md:leading-loose">
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
                  className="absolute top-5 right-6 md:top-8 md:right-10 text-white font-mono text-xl md:text-3xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-50 tracking-[0.1em]"
                >
                  EXT-0{active + 1}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ── 2. Minimalist TV Stand ── */}
        <div className="w-full flex flex-col items-center z-10 relative">
          <div className="w-16 md:w-32 h-6 md:h-10 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-x border-white/5" />
          <div className="w-48 md:w-72 h-3 md:h-4 bg-[#1f1f1f] rounded-t-xl border-t border-white/10 shadow-[0_10px_20px_black]" />
        </div>

        {/* ── 3. Interactive Remote ── */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-3 md:gap-4 z-20">
          <p className="font-mono text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.2em]">
            Deck Controls
          </p>
          <div className="flex items-center gap-3 md:gap-5 px-5 md:px-8 py-2 md:py-3 bg-[#0a0a0a] rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] relative">
            
            {/* Power Button */}
            <button 
              onClick={handlePower} 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111] hover:bg-[#1a1a1a] border border-white/5 flex items-center justify-center group transition-colors shadow-inner"
            >
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${tvState === 'playing' ? 'bg-red-500 shadow-[0_0_15px_#ef4444]' : 'bg-white/20 group-hover:bg-white/40 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]'}`} />
            </button>
            
            <div className="w-px h-8 md:h-10 bg-white/10 mx-1 md:mx-2" />
            
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