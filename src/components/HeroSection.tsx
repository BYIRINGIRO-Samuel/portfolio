import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const HeroSection = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 pt-1 sm:pt-2 md:pt-3 lg:pt-4 flex justify-center font-sans overflow-hidden min-h-screen">
      
      <div className="relative w-full max-w-7xl pb-16">
        
        <div className="absolute inset-x-0 top-0 bottom-12 bg-[#e5e5e5] rounded-xl md:rounded-2xl translate-y-4 md:translate-y-6 pointer-events-none">
          <svg className="absolute left-1/2 bottom-0 translate-y-[99%] -translate-x-1/2 w-[180px] md:w-[240px] h-[36px] md:h-[48px] text-[#e5e5e5]" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M0,0 Q40,0 60,20 Q80,40 100,40 Q120,40 140,20 Q160,0 200,0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative w-full bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 pb-8 md:pb-0 min-h-[77vh] flex flex-col justify-center">
          
          <header className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-5 relative z-20 gap-4 md:gap-0">
            <div className="font-bold text-2xl tracking-tighter flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-gray-200 group-hover:text-gray-300 transition-colors uppercase italic font-black text-xl tracking-[0.2em]">B.Samuel</span>
            </div>
            
            {/* Theme Toggle + Contact */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
              >
                {theme === 'dark' ? (
                  /* Sun icon */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/60 group-hover:text-yellow-300 transition-colors">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  /* Moon icon */
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-600 group-hover:text-indigo-500 transition-colors">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
              <a href="#contact" className="relative px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors group">
                Contact Me
                <svg className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 0 L 10 0 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 0 L 0 10 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 10 L 10 10 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </header>

          <nav className="hidden lg:flex flex-col items-center py-6 bg-white/[0.02] backdrop-blur-[15px] border border-white/10 rounded-3xl absolute left-8 top-1/2 -translate-y-1/2 z-30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] w-16 h-[70vh] min-h-[500px] max-h-[700px] justify-between saturate-[180%] ring-1 ring-inset ring-white/10">
            
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex gap-1.5 pt-2">
                <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
              </div>

              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <img src="/logo.png" alt="Logo" className="h-6 w-6 rounded-full object-contain" />
              </div>

              <div className="flex flex-col items-center gap-2 w-full">
                <div className="relative w-full h-[84px] flex items-center justify-center mt-2 mb-2">
                  <svg className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-[42px] h-[110px] pointer-events-none object-cover" viewBox="0 0 42 110">
                    <path d="M 40 0 L 40 15 C 40 21.6, 33.4 27, 28 27 C 12.5 27, 0 39.5, 0 55 C 0 70.5, 12.5 83, 28 83 C 33.4 83, 40 88.4, 40 95 L 40 110 L 42 110 L 42 0 Z" fill="#0f0f0f" />
                    <path d="M 40 0 L 40 15 C 40 21.6, 33.4 27, 28 27 C 12.5 27, 0 39.5, 0 55 C 0 70.5, 12.5 83, 28 83 C 33.4 83, 40 88.4, 40 95 L 40 110" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
                  
                  <a href="#" className="absolute right-[-10px] z-10 w-[44px] h-[44px] flex items-center justify-center bg-[#ffbd2e]/20 backdrop-blur-xl rounded-full shadow-[0_10px_30px_rgba(255,189,46,0.2),_inset_0_1px_2px_rgba(255,255,255,0.4)] border border-[#ffbd2e]/40 transition-all duration-300 hover:scale-110 group/active">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffbd2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] drop-shadow-[0_0_10px_rgba(255,189,46,0.6)]"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </a>
                </div>
                
                <a href="#about" className="relative w-12 h-12 flex items-center justify-center text-white/25 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 group/icon hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </a>

                <a href="#projects" className="relative w-12 h-12 flex items-center justify-center text-white/25 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 group/icon hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </a>

                <a href="#services" className="relative w-12 h-12 flex items-center justify-center text-white/25 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 group/icon hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </a>

                <a href="#contact" className="relative w-12 h-12 flex items-center justify-center text-white/25 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 group/icon hover:scale-110">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>

          </nav>

          <div className="flex flex-col lg:flex-row items-center px-8 md:px-16 lg:pl-32 pb-7 pt-4 relative z-20">
            
            <div className="w-full lg:w-[55%] flex flex-col pt-0 text-center lg:text-left items-center lg:items-start">
              
              <div className="flex items-center gap-3 mb-5 bg-white/5 pr-4 pl-3 py-1.5 rounded-full border border-white/10 w-fit backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                </div>
                <span className="text-xs font-bold text-gray-200 uppercase tracking-widest">Available For Work</span>
              </div>

              <h1 className="text-[2.5rem] sm:text-6xl lg:text-[72px] font-bold leading-[1.05] mb-5 tracking-tight">
                Building The<br className="hidden sm:block" />
                Future Of<br className="hidden sm:block" />
                Software.
              </h1>

              <div className="relative pl-0 lg:pl-6 mb-7 flex flex-col items-center lg:items-start max-w-lg">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white to-gray-500" />
                <p className="text-gray-400 text-base lg:text-lg leading-snug lg:leading-relaxed font-medium">
                  Where imagination meets logic,  
                  and code is not just written but crafted,  
                  turning abstract ideas into dynamic, intelligent solutions  
                  that redefine what software can do.
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 md:gap-16 text-white w-full border-t border-white/10 lg:border-none pt-7 lg:pt-0">
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">2+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">Years of<br />Experience</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">20+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">Projects<br />Completed</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20" />
                <div className="hidden sm:block">
                  <div className="text-3xl md:text-4xl font-black mb-2">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">Code<br />Quality</div>
                </div>
              </div>

            </div>

            <div className="w-full lg:w-[45%] flex items-center justify-center mt-7 lg:mt-0 relative aspect-square lg:aspect-auto lg:h-[580px]">
              {/* Innovative Profile Frame */}
              <div className="relative w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] flex items-center justify-center">
                
                {/* Background Glows */}
                <div className="absolute inset-0 bg-white/5 rounded-full blur-[80px]" />
                <div className="absolute inset-[15%] bg-white/10 rounded-full blur-[40px]" />

                {/* Rotating HUD Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-white/10 rounded-full"
                />
                
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[6%] border-2 border-white/5 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                </motion.div>

                {/* Inner Tech Frame */}
                <div className="absolute inset-[10%] rounded-full border border-white/20 p-2 backdrop-blur-[2px] shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
                   <div className="absolute inset-x-0 top-0 h-1/2 border-t border-white/20 rounded-t-full opacity-50" />
                </div>

                {/* Rounded Profile Image Container */}
                <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border border-white/10 bg-[#151515] group/profile shadow-2xl">
                  <img 
                    src="/hero-character.png" 
                    alt="B. Samuel Profile" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover/profile:scale-110 filter brightness-90 group-hover/profile:brightness-110"
                    draggable="false"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5 pointer-events-none" />
                  
                  {/* Scanning Line Animation */}
                  <motion.div 
                    animate={{ top: ['-100%', '200%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-[2px] bg-white/20 blur-[3px]"
                  />
                </div>

                {/* Top Label */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
                   <div className="px-4 py-1.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.4em] rounded-full z-20 shadow-[0_10px_20px_rgba(255,255,255,0.2)] whitespace-nowrap">
                    Full-Stack Engineer
                  </div>
                  <div className="w-[1px] h-4 bg-white/20 mt-1" />
                </div>
                
                {/* Bottom Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                   <div className="w-[1px] h-4 bg-white/20 mb-1" />
                   <div className="px-4 py-1.5 bg-black border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-full z-20 backdrop-blur-md whitespace-nowrap">
                    Samuel Byiringiro
                  </div>
                </div>

                {/* Left Detail */}
                <div className="absolute top-[20%] -left-14 flex flex-col items-end opacity-40 select-none">
                   <span className="text-[8px] font-black uppercase tracking-widest mb-1">Open to Work</span>
                   <div className="w-16 h-[1.5px] bg-gradient-to-l from-white to-transparent" />
                </div>

                {/* Right Detail */}
                <div className="absolute bottom-[25%] -right-20 flex flex-col items-start opacity-40 select-none">
                   <span className="text-[8px] font-black uppercase tracking-widest mb-1">Kigali, Rwanda</span>
                   <div className="w-20 h-[1.5px] bg-gradient-to-r from-white to-transparent" />
                </div>
              </div>
            </div>

          </div>

          <svg className="absolute left-1/2 bottom-0 translate-y-[99%] -translate-x-1/2 w-[180px] md:w-[240px] h-[36px] md:h-[48px] text-[#0f0f0f] z-20" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M0,0 Q40,0 60,20 Q80,40 100,40 Q120,40 140,20 Q160,0 200,0 Z" fill="currentColor" />
          </svg>
          
          <div className="absolute left-1/2 bottom-0 translate-y-[20px] md:translate-y-[28px] -translate-x-1/2 z-30 opacity-50">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-white animate-bounce">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
