import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, ShieldCheck, Activity, CheckCircle, Wifi, Battery, ChevronLeft, MoreVertical, Lock, Camera, Flashlight } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [screen, setScreen] = useState<'chat' | 'lock'>('chat');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans tracking-tight">
      <div className="relative w-full max-w-7xl bg-[#050505] rounded-xl md:rounded-2xl text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 px-6 py-10 md:px-12 md:py-14 overflow-hidden group border border-[#161616]">
        
        {/* Background Gradient & Base decor */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#080808] to-[#000]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Soft glow behind the phone on desktop */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none hidden lg:block" />

        <div className="relative z-20 max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-12 items-center justify-between">
           
           {/* LEFT SIDE: CONTACT HUD & TYPOGRAPHY */}
           <div className="lg:w-5/12 flex flex-col justify-center mt-4">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-6 h-[2px] bg-red-600 shadow-[0_0_10px_red]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">Direct Dispatch</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                Drop Me a<br/><span className="text-white/30 italic">Message.</span>
              </h2>

              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md font-medium border-l-2 border-white/10 pl-4">
                Have a project idea, an open position, or just want to collaborate? Use the phone interface to drop your direct message into my inbox.
              </p>

              {/* Status HUD Chips */}
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/5 p-4 rounded-xl w-full max-w-xs shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-black uppercase tracking-widest text-white">Status</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Available / Active</span>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/5 p-4 rounded-xl w-full max-w-xs shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Activity className="w-4 h-4 text-white/50" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-black uppercase tracking-widest text-white">Response</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Usually &lt; 24 Hours</span>
                    </div>
                 </div>
              </div>
           </div>


           {/* RIGHT SIDE: PHONE MOCKUP & FLOATING CHAT BUBBLES */}
           <div className="lg:w-1/2 relative flex justify-center items-center min-h-[550px] lg:min-h-[580px] w-full">

              {/* FLOATING CARD 1 - Code Snippet */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
                className="absolute z-30 -left-6 md:-left-28 top-8 md:top-16 w-56 md:w-64 bg-[#111111] border border-white/5 p-4 md:p-5 rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] hidden sm:block"
              >
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="font-mono text-[10px] md:text-xs text-white/80 leading-loose">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> <span className="text-purple-400">=</span> {'{'}</p>
                  <p className="pl-4">role: <span className="text-green-400">'Architect'</span>,</p>
                  <p className="pl-4">status: <span className="text-green-400">'Active'</span>,</p>
                  <p>{'}'};</p>
                </div>
              </motion.div>

              {/* FLOATING CARD 2 - System Metrics */}
              <motion.div 
                animate={{ y: [8, -8, 8] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} 
                className="absolute z-30 right-0 md:-right-20 bottom-12 md:bottom-20 w-52 md:w-60 bg-[#111111] border border-white/5 p-4 rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] hidden sm:flex items-center gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-green-700 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/50">System Status</span>
                  <span className="text-[12px] md:text-[14px] font-bold text-white tracking-wide">100% Optimal</span>
                </div>
              </motion.div>


              {/* ------ THE SMARTPHONE ------ */}
              <div className="relative w-[280px] md:w-[320px] h-[520px] md:h-[580px] bg-[#000] rounded-[45px] border-[12px] border-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col z-20 ring-1 ring-white/10">
                
                {/* Physical Phone Side Buttons */}
                <div className="absolute left-[-14px] top-24 w-[3px] h-8 bg-[#222] rounded-l-md" />
                <div className="absolute left-[-14px] top-36 w-[3px] h-12 bg-[#222] rounded-l-md" />
                <div className="absolute left-[-14px] top-52 w-[3px] h-12 bg-[#222] rounded-l-md" />
                <div className="absolute right-[-14px] top-32 w-[3px] h-16 bg-[#222] rounded-r-md" />

                {/* Status Bar */}
                <div className="w-full pt-4 pb-2 px-6 flex justify-between items-center text-[11px] font-bold text-white z-30 pointer-events-none">
                  <span className={screen === 'lock' ? 'opacity-0' : 'opacity-100 transition-opacity'}>{formatTime(time)}</span>
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-8 bg-black rounded-full z-30 flex items-center justify-between px-2.5 pb-[1px] shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#222]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-[#222] flex items-center justify-center overflow-hidden">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#050505] shadow-[0_0_3px_#4ade80]" />
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center opacity-80">
                    <Wifi className="w-3.5 h-3.5" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* Inner Phone Screen */}
                <div className="flex-1 min-h-0 w-full bg-[#050505] shadow-[0_-10px_20px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden">
                  
                  <AnimatePresence mode="wait">
                    {screen === 'lock' ? (
                      <motion.div 
                        key="lock"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-20 flex flex-col items-center pt-8 bg-cover bg-center"
                        style={{ backgroundImage: 'url("/hero-character.png")' }}
                      >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" />
                        
                        <div className="relative z-30 flex flex-col items-center">
                          <Lock className="w-4 h-4 text-white/80 mb-2" />
                          <div className="text-[52px] font-thin text-white tracking-tight leading-none mb-1">{formatTime(time)}</div>
                          <div className="text-[14px] font-medium text-white/90">{formatDate(time)}</div>
                        </div>

                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setScreen('chat')}
                          className="relative z-30 w-[88%] bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 mt-8 cursor-pointer shadow-lg group/notif"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-green-500 to-green-700 flex items-center justify-center shadow-inner">
                                <Mail className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest pt-0.5">Messages</span>
                            </div>
                            <span className="text-[10px] text-white/40 uppercase tracking-widest pt-0.5">now</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-white mb-0.5 group-hover/notif:text-blue-400 transition-colors">Samuel Byiringiro</span>
                            <span className="text-[12px] text-white/80 leading-snug">Need a developer? Tap here to send me a direct message!</span>
                          </div>
                        </motion.div>

                        <div className="relative z-30 mt-auto flex justify-between w-full px-8 pb-10">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/20 transition-colors">
                            <Flashlight className="w-5 h-5 text-white" />
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/20 transition-colors">
                            <Camera className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="chat"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-10 flex flex-col bg-[#050505] pt-2"
                      >
                        {/* Chat Header */}
                        <div className="px-5 pb-4 pt-1 border-b border-white/5 flex items-center justify-between bg-[#0a0a0a]">
                           <div className="flex items-center gap-3">
                             {/* The Functional Back Button! */}
                             <div className="p-1 -ml-2 cursor-pointer hover:bg-white/5 rounded-full transition-colors" onClick={() => setScreen('lock')}>
                               <ChevronLeft className="w-6 h-6 text-blue-500" />
                             </div>
                             <div className="relative">
                         <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 flex items-center justify-center shadow-lg bg-[#111]">
                           <img src="/hero-character.png" alt="Samuel" className="w-full h-full object-cover" draggable="false" />
                         </div>
                         <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a0a0a] rounded-full" />
                       </div>
                       <div className="flex flex-col">
                         <span className="font-bold text-[13px] text-white tracking-wider">Samuel</span>
                         <span className="text-[10px] text-white/40 font-medium">Active now</span>
                       </div>
                     </div>
                     <MoreVertical className="w-5 h-5 text-white/50 cursor-pointer" />
                  </div>

                  {/* Chat Content / Form Area */}
                  <div className="flex-1 min-h-0 p-5 overflow-y-auto space-y-4 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent)] pb-12 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    
                    <div className="text-center w-full my-2">
                       <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full">Today {formatTime(time)}</span>
                    </div>

                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          className="w-full flex flex-col items-center justify-center mt-10"
                        >
                          <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                            <CheckCircle className="w-7 h-7 text-green-500" />
                          </div>
                          <p className="text-sm font-black text-white mb-1">Message Delivered</p>
                          <p className="text-xs text-white/50 text-center max-w-[200px]">I have received your message and will reply shortly.</p>
                        </motion.div>
                      ) : (
                        <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }} className="space-y-4">
                          
                          {/* Received Bubbles */}
                          <div className="flex flex-col gap-1 w-full items-start">
                             <div className="bg-[#1a1a1a] text-white/90 p-3 px-4 rounded-2xl rounded-tl-sm text-xs font-medium max-w-[85%] border border-white/5 shadow-md">
                               Thanks for visiting my portfolio!
                             </div>
                             <div className="bg-[#1a1a1a] text-white/90 p-3 px-4 rounded-2xl text-xs font-medium max-w-[85%] border border-white/5 shadow-md">
                               Need a developer? Leave your details below and I'll get back to you! 👇
                             </div>
                          </div>

                          {/* The Form */}
                          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
                            
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 pl-1">Name</label>
                              <input
                                type="text"
                                placeholder="E.g. Elon Musk"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                                className="w-full bg-[#111111] border border-white/10 rounded-[8px] px-3.5 py-2.5 text-xs text-white placeholder:text-white/20 outline-none focus:border-red-500/50 transition-colors shadow-inner"
                              />
                            </div>
                            
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 pl-1">Email</label>
                              <input
                                type="email"
                                placeholder="you@company.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                className="w-full bg-[#111111] border border-white/10 rounded-[8px] px-3.5 py-2.5 text-xs text-white placeholder:text-white/20 outline-none focus:border-red-500/50 transition-colors shadow-inner"
                              />
                            </div>
                            
                            <div className="space-y-1">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-white/30 pl-1">Message</label>
                              <textarea
                                placeholder="Let's build something..."
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                                rows={3}
                                className="w-full bg-[#111111] border border-white/10 rounded-[8px] px-3.5 py-2.5 text-xs text-white placeholder:text-white/20 outline-none focus:border-red-500/50 transition-colors resize-none shadow-inner"
                              />
                            </div>

                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="submit"
                              className="w-full bg-white text-black font-black uppercase tracking-widest py-2.5 rounded-[8px] flex items-center justify-center gap-2 text-[11px] mt-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow"
                            >
                              Send Message
                              <Send className="w-3.5 h-3.5 ml-1" />
                            </motion.button>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-1 w-full pt-1 pb-3 flex justify-center z-30 pointer-events-none">
                  <div className="w-32 h-1.5 bg-white/20 rounded-full" />
                </div>

              </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
