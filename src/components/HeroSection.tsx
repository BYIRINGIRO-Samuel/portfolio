import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 pt-1 sm:pt-2 md:pt-3 lg:pt-4 flex justify-center font-sans overflow-hidden min-h-screen">
      
      {/* Outer wrapper to contain the layered cards */}
      <div className="relative w-full max-w-7xl pb-24">
        
        {/* Shadow / Bottom Gray Layer */}
        <div className="absolute inset-x-0 top-0 bottom-24 bg-[#e5e5e5] rounded-xl md:rounded-2xl translate-y-4 md:translate-y-8 pointer-events-none">
          {/* Gray Tab at bottom center */}
          <svg className="absolute left-1/2 bottom-0 translate-y-[99%] -translate-x-1/2 w-[180px] md:w-[240px] h-[36px] md:h-[48px] text-[#e5e5e5]" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M0,0 Q40,0 60,20 Q80,40 100,40 Q120,40 140,20 Q160,0 200,0 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Main Black Foreground Container */}
        <div className="relative w-full bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 pb-16 md:pb-0 min-h-[85vh] flex flex-col justify-center">
          
          {/* Top Navigation inside card */}
          <header className="flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-8 relative z-20 gap-6 md:gap-0">
            <div className="font-bold text-2xl tracking-tighter flex items-center gap-1">
              Samuel<span className="text-gray-500">@Portfolio</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#" className="text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            </nav>

            <a href="#contact" className="hidden md:inline-flex relative px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors group">
              Contact Us
              {/* Four + crosshairs sitting exactly on the geometrical corners */}
              <svg className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 4v16M4 12h16" /></svg>
              <svg className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 4v16M4 12h16" /></svg>
              <svg className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 4v16M4 12h16" /></svg>
              <svg className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M12 4v16M4 12h16" /></svg>
            </a>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center px-8 md:px-16 pb-12 pt-4 relative z-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-[55%] flex flex-col pt-4 lg:pt-8 text-center lg:text-left items-center lg:items-start">
              
              {/* Star Rating */}
              <div className="flex items-center gap-3 mb-6 bg-white/5 pr-4 pl-3 py-1.5 rounded-full border border-white/10">
                <div className="flex text-white text-sm tracking-widest">
                  ★★★★★
                </div>
                <span className="text-xs font-medium text-gray-300">100% Client Satisfaction</span>
              </div>

              {/* Headline */}
              <h1 className="text-[2.5rem] sm:text-6xl lg:text-[76px] font-bold leading-[1.1] mb-8 tracking-tight">
                Building The<br className="hidden sm:block" />
                Future Of<br className="hidden sm:block" />
                Software.<span className="text-4xl inline-block ml-2 group hover:animate-pulse">�</span>
              </h1>

              {/* Vertical line + description */}
              <div className="relative pl-0 lg:pl-6 mb-12 flex flex-col items-center lg:items-start max-w-lg">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-white to-gray-500" />
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  I craft robust, scalable, and intuitive digital solutions. Let's turn your complex problems into elegant web experiences.
                </p>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 md:gap-16 text-white w-full border-t border-white/10 lg:border-none pt-8 lg:pt-0">
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">5+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">Years of<br />Experience</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">50+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">Projects<br />Completed</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20" />
                <div className="hidden sm:block">
                  <div className="text-3xl md:text-4xl font-black mb-2">100%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-relaxed">Code<br />Quality</div>
                </div>
              </div>

            </div>

            {/* Right Content / Image Area */}
            <div className="w-full lg:w-[45%] flex items-center justify-center mt-12 lg:mt-0 relative aspect-square lg:aspect-auto lg:h-[650px]">
              {/* Decorative Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-white/5 rounded-full blur-[2px] flex items-center justify-center z-0">
                 <div className="absolute inset-[10%] border border-dashed border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
              </div>
              
              {/* Plus/Star Decorations */}
              <div className="absolute top-[20%] left-[10%] text-white animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5.5-4h7z"/></svg>
              </div>
              <div className="absolute bottom-[30%] right-[15%] text-white/50 animate-pulse">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7-5.5-4h7z"/></svg>
              </div>

              {/* Character Image */}
              <img 
                src="/hero-character.png" 
                alt="3D Character" 
                className="relative z-10 w-[85%] max-w-[450px] object-contain drop-shadow-2xl translate-y-[-2rem] lg:translate-x-4"
                draggable="false"
              />
            </div>

          </div>

          {/* Black Tab at bottom center */}
          <svg className="absolute left-1/2 bottom-0 translate-y-[99%] -translate-x-1/2 w-[180px] md:w-[240px] h-[36px] md:h-[48px] text-[#0f0f0f] z-20" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path d="M0,0 Q40,0 60,20 Q80,40 100,40 Q120,40 140,20 Q160,0 200,0 Z" fill="currentColor" />
          </svg>
          
          {/* Arrow icon inside the black tab */}
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
