import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const channels = [
  {
    name: 'Amara K.',
    company: 'FinTech Africa',
    role: 'Lead Architect',
    quote: 'Samuel engineer’s with profound intent. He fundamentally restructured our frontend architecture, delivering a system that is incredibly scalable, robust, and visually flawless.',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
  },
  {
    name: 'David O.',
    company: 'EduBridge Networks',
    role: 'CEO',
    quote: 'An absolute master of modern web technologies. Samuel built our enterprise platform with uncompromising quality. Our latency decreased massively and deployment was seamless.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
  },
  {
    name: 'Zara M.',
    company: 'Luminary Corp',
    role: 'Director of Product',
    quote: 'Samuel operates at the highest level of technical craftsmanship. He translated complex requirements into an undeniably premium, highly responsive user interface.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
  },
  {
    name: 'Marcus T.',
    company: 'Sprout Ventures',
    role: 'Head of Engineering',
    quote: 'Finding dev talent like Samuel is rare. He automated our core systems and shipped a polished commercial product months ahead of schedule. An elite engineering asset.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
  },
  {
    name: 'Priya J.',
    company: 'GreenField Enterprise',
    role: 'VP of Technology',
    quote: 'His code is elegant, modular, and exceptionally performant. Our application serves thousands of concurrent users flawlessly. A brilliant technical partner.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80',
  }
];

type TVState = 'standby' | 'booting' | 'playing';

/* Premium Rwandan Imigongo SVG Background */
const StyledImigongoBackground = ({ isDark }: { isDark: boolean }) => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Base Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#111] via-[#0a0a0a] to-[#000]' : 'from-[#fefefe] via-[#f5f5f5] to-[#f0f0f0]'}`} />
    
    <svg className={`absolute inset-0 w-full h-full ${isDark ? 'opacity-[0.35]' : 'opacity-[0.5]'}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Cultural Geometric Pattern */}
        <pattern id="imigongo" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="scale(1.5) rotate(45)">
          <path d="M 0 60 L 60 0 L 120 60 L 60 120 Z" fill="none" stroke="url(#imigongo-stroke)" strokeWidth="2" strokeOpacity={isDark ? "0.6" : "0.3"}/>
          <path d="M 20 60 L 60 20 L 100 60 L 60 100 Z" fill="none" stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)"} strokeWidth="1" />
          <path d="M 40 60 L 60 40 L 80 60 L 60 80 Z" fill="none" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"} strokeWidth="1" />
          <path d="M 0 0 L 120 120 M 120 0 L 0 120" stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"} strokeWidth="1" />
        </pattern>
        <linearGradient id="imigongo-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#fff" : "#000"} />
          <stop offset="50%" stopColor={isDark ? "#888" : "#ccc"} />
          <stop offset="100%" stopColor={isDark ? "#444" : "#eee"} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#imigongo)" />
    </svg>
    
    {/* Central Spotlight to focus on the TV */}
    <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,${isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.1)'}_70%,${isDark ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,0.2)'}_100%)]`} />
  </div>
);

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [tvState, setTvState] = useState<TVState>('standby');
  const [active, setActive] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [showOSD, setShowOSD] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  // Auto-play when scrolled into view
  useEffect(() => {
    if (isInView && !hasAutoPlayed && tvState === 'standby') {
      setHasAutoPlayed(true);
      const timer = setTimeout(() => {
        setTvState('booting');
        setTimeout(() => {
          setTvState('playing');
          setActive(0);
        }, 1200);
      }, 3500); // Give them a solid 3.5s to appreciate the cultural news screen
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAutoPlayed, tvState]);

  // Auto-cycle channels if untouched while playing
  useEffect(() => {
    if (tvState !== 'playing') return;
    const interval = setInterval(() => {
      handleChannelChange('next');
    }, 9000);
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
    <section ref={sectionRef} id="testimonials" className={`${isDark ? 'bg-white' : 'bg-[#f4f4f4]'} px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans tracking-tight transition-colors duration-500`}>
      {/* Inner Container wrapped tightly in deep black */}
      <div className={`relative w-full max-w-7xl ${isDark ? 'bg-[#000] border-[#222]' : 'bg-white border-gray-100'} rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,${isDark ? '1' : '0.05'})] inset-shadow-sm z-10 px-6 sm:px-10 lg:px-20 py-8 md:py-12 flex flex-col items-center overflow-hidden border transition-all duration-500`}>
        
        {/* Stunning Background Elements */}
        <StyledImigongoBackground isDark={isDark} />

        {/* Section Title */}
        <div className="w-full text-left max-w-[850px] mb-6 md:mb-8 z-10 pt-2 relative">
          <div className={`absolute -left-6 md:-left-10 top-0 w-1 md:w-2 h-full bg-gradient-to-b ${isDark ? 'from-white/80' : 'from-black/10'} to-transparent`} />
          <p className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-white/50' : 'text-black/40'} mb-2 drop-shadow-sm`}>Professional Endorsements</p>
          <h2 className={`text-3xl md:text-5xl lg:text-5xl font-black italic tracking-tighter uppercase leading-none ${isDark ? 'text-white' : 'text-black'} drop-shadow-[0_0_20px_rgba(0,0,0,0.05)]`}>
            Client <span className={isDark ? 'text-white/20' : 'text-black/10'}>Feed</span>.
          </h2>
        </div>

        {/* ── 1. The OLED TV Screen Panel ── */}
        <div 
          className={`relative w-full max-w-[850px] aspect-[16/9] lg:aspect-[21/9] bg-black rounded-lg md:rounded-2xl border-[4px] md:border-[6px] ${isDark ? 'border-[#1a1a1a]' : 'border-gray-800'} shadow-[0_30px_70px_rgba(0,0,0,${isDark ? '1' : '0.2'}),0_0_30px_rgba(255,255,255,0.05)] z-10 flex overflow-hidden group outline outline-1 ${isDark ? 'outline-white/10' : 'outline-black/5'}`}
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
               {/* ── Standby / Advanced Cultural News Intro Screen ── */}
                {tvState === 'standby' && (
                  <motion.div 
                    key="standby"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col bg-[#050505] cursor-pointer group shadow-inner"
                    onClick={handlePower}
                  >
                     {/* Imigongo Screen Background */}
                     <div className="absolute inset-0 opacity-[0.25] mix-blend-screen pointer-events-none">
                       <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                         <defs>
                           <pattern id="screen-imigongo-testimonials" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                             <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="rgba(255,0,0,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                             <path d="M15 30 L30 15 L45 30 L30 45 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                           </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#screen-imigongo-testimonials)" />
                       </svg>
                     </div>
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
                     
                     {/* Top Bar: "LIVE REPORT" */}
                     <div className="absolute top-0 w-full flex items-center justify-between px-4 md:px-6 py-2.5 bg-gradient-to-r from-red-700/90 to-black/80 border-b border-red-500/50 backdrop-blur-md z-20 shadow-xl">
                       <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
                         <span className="text-white font-sans text-[9px] md:text-[11px] font-black uppercase tracking-widest text-shadow">Kigali Tech Syndicate</span>
                       </div>
                       <span className="text-white/60 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] hidden sm:block">
                         BROADCAST: CONNECTED [RW]
                       </span>
                     </div>

                     {/* Center Branding */}
                     <div className="flex-1 flex flex-col items-center justify-center z-10 relative mt-4">
                       <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-4 rounded-sm shadow-lg overflow-hidden relative">
                         <div className="absolute inset-0 bg-red-600 opacity-20" />
                         <p className="font-black text-white text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-sans relative z-10">Premium Spotlight</p>
                       </div>
                       <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] leading-none text-center">
                         Engineering <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/30">Excellence.</span>
                       </h1>
                       
                       {/* BlinkTech Sponsor Tag */}
                       <div className="mt-4 flex items-center justify-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-lg">
                         <span className="text-white/40 text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-sans">Sponsored By</span>
                         <span className="text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">BlinkTech</span>
                       </div>
                       
                       {/* Play Button simulating 'Tune In' */}
                       <motion.div 
                         whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)', color: 'black' }}
                         whileTap={{ scale: 0.95 }}
                         className="mt-8 md:mt-10 px-6 py-2.5 rounded-sm border-2 border-white flex items-center gap-2 text-white transition-colors backdrop-blur-sm bg-black/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] pointer-events-none"
                       >
                         <svg className="w-3.5 h-3.5 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                         <span className="font-black text-[9px] md:text-[11px] uppercase tracking-widest pl-1">Establishing Links...</span>
                       </motion.div>
                     </div>

                     {/* Bottom Breaking News Ticker */}
                     <div className="absolute bottom-0 w-full h-8 md:h-10 border-t border-red-500/30 bg-black flex items-center z-20">
                       <div className="bg-red-700 h-full flex items-center px-3 md:px-5 z-10 font-black text-white text-[8px] md:text-[10px] uppercase tracking-wildest flex-shrink-0 shadow-[5px_0_15px_rgba(0,0,0,0.9)]">
                         Breaking
                       </div>
                       <div className="flex-1 overflow-hidden h-full relative border-l border-white/10 bg-[#0a0a0a]">
                         <motion.div 
                           animate={{ x: ['100%', '-100%'] }}
                           transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                           className="absolute whitespace-nowrap h-full flex items-center font-sans font-bold text-[9px] md:text-[11px] text-white/80 uppercase tracking-widest"
                         >
                           Rwandan Engineer fundamentally restructures global architectures &nbsp;&nbsp; /// &nbsp;&nbsp; "The application is incredibly scalable & robust" - Amara K. &nbsp;&nbsp; /// &nbsp;&nbsp; Elite technical craftsmanship recognized...
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
                      
                    {/* Background Footage with Subtle Red Cast for News feel */}
                    <AnimatePresence mode="popLayout">
                      <motion.div 
                        key={active}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0"
                      >
                        <div className="absolute inset-0 bg-red-900/10 mix-blend-color z-10" />
                        <img 
                          src={channels[active].img} 
                          className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen"
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Dynamic Vignette & Textures */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />
                    
                    {/* Cinematic Lower Third UI */}
                    <motion.div 
                      key={`ui-testimonials-${active}`}
                      initial={{ y: 20, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
                      className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:max-w-2xl z-20"
                    >
                      <div className="bg-black/80 backdrop-blur-xl p-4 md:p-6 border-l-[4px] md:border-l-[6px] border-red-600 shadow-[0_20px_40px_rgba(0,0,0,0.8)] outline outline-1 outline-white/10">
                        
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                          <span className="text-white/80 font-mono text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-black bg-white/10 px-2 py-0.5 rounded-sm">Professional Record</span>
                        </div>
                        
                        <div className="flex justify-between items-end mb-3 md:mb-4">
                          <h2 className="text-white font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-tighter leading-none drop-shadow-lg">
                            {channels[active].name}
                          </h2>
                          <p className="text-white/50 font-black text-[7px] md:text-[9px] uppercase tracking-widest text-right leading-tight max-w-[150px] md:max-w-none">
                            {channels[active].role} <span className="hidden md:inline"> // </span><br className="md:hidden" /> {channels[active].company}
                          </p>
                        </div>

                        <p className="text-white/90 font-sans text-xs md:text-[14px] font-semibold italic border-t border-white/10 pt-3 md:pt-4 leading-relaxed font-news">
                          "{channels[active].quote}"
                        </p>
                        
                      </div>
                    </motion.div>

                  </motion.div>
               )}
            </AnimatePresence>

            {/* Retro CRT Scanlines Grid & Glare */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none z-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_50%)] pointer-events-none z-40" />

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
          <div className={`w-16 md:w-24 h-4 md:h-6 bg-gradient-to-b ${isDark ? 'from-[#222] to-[#050505]' : 'from-gray-300 to-gray-200'} border-x ${isDark ? 'border-white/10' : 'border-black/5'}`} />
          <div className={`w-32 md:w-56 h-2 md:h-3 ${isDark ? 'bg-[#333]' : 'bg-gray-400'} rounded-t-xl border-t ${isDark ? 'border-white/20' : 'border-black/10'} shadow-[0_10px_20px_rgba(0,0,0,${isDark ? '1' : '0.1'})]`} />
        </div>

        {/* ── 3. Interactive Remote ── */}
        <div className="mt-6 md:mt-8 flex flex-col items-center gap-2 md:gap-3 z-20">
          <p className={`font-mono text-[7px] md:text-[9px] ${isDark ? 'text-white/40' : 'text-black/30'} uppercase tracking-[0.2em] drop-shadow-sm`}>
            Deck Controls
          </p>
          <div className={`${isDark ? 'bg-[#111] border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.9)]' : 'bg-white border-gray-200 shadow-[0_15px_30px_rgba(0,0,0,0.05)]'} flex items-center gap-2 md:gap-4 px-4 md:px-6 py-1.5 md:py-2.5 rounded-full border relative transition-all duration-500`}>
            
            {/* Power Button */}
            <button 
              onClick={handlePower} 
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${isDark ? 'bg-[#1a1a1a] border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,1)]' : 'bg-gray-100 border-gray-200 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)]'} hover:opacity-80 flex items-center justify-center group transition-all border`}
            >
              <div className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full transition-all ${tvState === 'playing' ? 'bg-red-500 shadow-[0_0_15px_#ef4444]' : isDark ? 'bg-white/20 group-hover:bg-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-black/10 group-hover:bg-black/30'}`} />
            </button>
            
            <div className={`w-px h-6 md:h-8 ${isDark ? 'bg-white/10' : 'bg-black/5'} mx-1 md:mx-2`} />
            
            {/* Prev Channel */}
            <button 
              onClick={() => handleChannelChange('prev')} 
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${isDark ? 'hover:bg-white/10 text-white/50 hover:text-white' : 'hover:bg-black/5 text-black/40 hover:text-black'} flex items-center justify-center transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            {/* Next Channel */}
            <button 
              onClick={() => handleChannelChange('next')} 
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${isDark ? 'hover:bg-white/10 text-white/50 hover:text-white' : 'hover:bg-black/5 text-black/40 hover:text-black'} flex items-center justify-center transition-colors`}
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