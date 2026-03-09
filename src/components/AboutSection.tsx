import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-2 flex justify-center font-sans overflow-hidden">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-8 py-8 md:px-16 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative w-full max-w-[420px] mx-auto aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl" />
            
            <div className="absolute -left-6 top-[20%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">40+</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Projects</span>
                <span className="text-white text-xs font-bold">Successfully Live</span>
              </div>
            </div>

            <div className="absolute -right-4 top-[35%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-black font-bold text-xs">5.0</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Rating</span>
                <span className="text-white text-xs font-bold">Client Satisfaction</span>
              </div>
            </div>

            <div className="absolute -left-2 bottom-[15%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-pulse">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">AI</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Innovation</span>
                <span className="text-white text-xs font-bold">AI Integration</span>
              </div>
            </div>

            <div className="absolute -right-8 bottom-[20%] z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold text-xs">24/7</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Support</span>
                <span className="text-white text-xs font-bold">Global Ready</span>
              </div>
            </div>

            <div className="absolute right-[10%] top-4 z-20 bg-white shadow-lg rounded-2xl px-3 py-1.5 flex items-center gap-2 transform rotate-3 scale-110">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[10px] text-black font-bold">Open for Collaboration</span>
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
            <div className="mb-10 relative px-6 py-2 border border-white/10 w-fit">
              <svg className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-white/40" viewBox="0 0 10 10"><path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <svg className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 text-white/40" viewBox="0 0 10 10"><path d="M 0 0 L 10 0 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <svg className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 text-white/40" viewBox="0 0 10 10"><path d="M 0 0 L 0 10 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <svg className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 text-white/40" viewBox="0 0 10 10"><path d="M 0 10 L 10 10 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">About Me</span>
            </div>

            <blockquote className="text-xs md:text-sm italic mb-5 border-l-2 border-white/20 pl-4">
              "Excellence is not in what you show, but in the impact your work leaves behind."<br />
              <cite className="text-blue-400 font-medium">— B.Samuel</cite>
            </blockquote>

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
                  <span className="text-gray-400 font-medium text-sm">byiringirosamuel533@gmail.com</span>
                </div>
                <div>
                  <span className="text-white font-bold text-sm block mb-1.5">GitHub:</span>
                  <span className="text-gray-400 font-medium text-sm">@BYIRINGIRO-Samuel</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto mt-4">
              <a href="#contact" className="relative px-10 py-4 bg-white text-black text-sm font-black hover:bg-gray-200 transition-colors group w-full sm:w-auto text-center">
                Contact me
                <svg className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 0 L 10 0 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 0 L 0 10 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 10 L 10 10 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
              
              <a href="/resume.pdf" className="relative px-10 py-4 bg-transparent border border-white text-white text-sm font-black hover:bg-white/5 transition-colors group w-full sm:w-auto text-center">
                Download my resume
                <svg className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 0 L 10 0 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 0 L 0 10 L 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                <svg className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 text-white" viewBox="0 0 10 10"><path d="M 0 10 L 10 10 L 10 0" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
