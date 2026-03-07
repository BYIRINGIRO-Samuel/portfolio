import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans overflow-hidden">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-8 py-12 md:px-16 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative w-full max-w-[420px] mx-auto aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl" />
            
            <div className="absolute -left-6 top-[20%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">JS</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">React</span>
                <span className="text-white text-xs font-bold">Expert</span>
              </div>
            </div>

            <div className="absolute -right-4 top-[35%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-black font-bold text-xs">TS</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">System</span>
                <span className="text-white text-xs font-bold">Type Safe</span>
              </div>
            </div>

            <div className="absolute -left-2 bottom-[15%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-pulse">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">DB</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">SQL</span>
                <span className="text-white text-xs font-bold">Postgres</span>
              </div>
            </div>

            <div className="absolute -right-8 bottom-[20%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold text-xs">UX</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Design</span>
                <span className="text-white text-xs font-bold">Responsive</span>
              </div>
            </div>

            <div className="absolute right-[10%] top-4 z-20 bg-white shadow-lg rounded-2xl px-3 py-1.5 flex items-center gap-2 transform rotate-3">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-black">S</div>
              <span className="text-[10px] text-black font-bold">Hello World!</span>
            </div>
            
            <div className="relative w-[85%] h-[85%] rounded-full border border-white/10 p-4 z-10 overflow-hidden bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center backdrop-blur-sm">
                 <img 
                   src="/hero-character.png" 
                   alt="Samuel" 
                   className="w-[90%] h-auto object-contain translate-y-6"
                   draggable="false"
                 />
            </div>
          </div>

          <div className="flex flex-col items-start text-left z-10">
            <div className="mb-6 px-5 py-1.5 border border-white/20 rounded-full text-white text-sm font-semibold tracking-wide flex items-center justify-center">
              About Me
            </div>

            <h2 className="text-[2rem] md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-5 tracking-tight">
              Building robust software solutions that make a lasting impact!!!
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-medium">
              I am a passionate software developer dedicated to crafting scalable, efficient, and beautifully designed digital experiences. With expertise in modern web technologies, I bridge the gap between complex functionality and user-friendly interfaces.
            </p>

            <div className="bg-[#151515] border border-white/10 rounded-xl p-6 md:p-8 w-full mb-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <span className="text-white font-bold text-sm block mb-1.5">Name:</span>
                  <span className="text-gray-400 font-medium text-sm">Samuel Byiringiro</span>
                </div>
                <div>
                  <span className="text-white font-bold text-sm block mb-1.5">Phone:</span>
                  <span className="text-gray-400 font-medium text-sm">+(250) 123-4567</span>
                </div>
                <div>
                  <span className="text-white font-bold text-sm block mb-1.5">Email:</span>
                  <span className="text-gray-400 font-medium text-sm">example@domain.com</span>
                </div>
                <div>
                  <span className="text-white font-bold text-sm block mb-1.5">GitHub:</span>
                  <span className="text-gray-400 font-medium text-sm">@BYIRINGIRO-Samuel</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#contact" className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2.5 text-sm w-full sm:w-auto justify-center">
                Contact me
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              
              <a href="/resume.pdf" className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold rounded-full hover:border-white hover:bg-white/5 transition-colors flex items-center gap-2.5 text-sm w-full sm:w-auto justify-center">
                Download my resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
