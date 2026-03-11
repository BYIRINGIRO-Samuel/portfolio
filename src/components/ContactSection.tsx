import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, ShieldCheck, Activity, CheckCircle, Wifi, Battery, ChevronLeft, MoreVertical, Lock, Camera, Flashlight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ContactSection = () => {
  const { theme } = useTheme();
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

  const isDark = theme === 'dark';

  return (
    <section id="contact" className={`${isDark ? 'bg-white' : 'bg-[#f4f4f4]'} px-2 sm:px-4 md:px-6 lg:px-8 pt-4 pb-4 flex flex-col items-center justify-center font-sans tracking-tight transition-colors duration-500`}>
      <div className={`relative w-full max-w-7xl ${isDark ? 'bg-[#050505] text-white border-[#161616]' : 'bg-white text-black border-gray-200'} rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] z-10 px-6 py-10 md:px-12 md:py-14 overflow-hidden group border transition-all duration-500`}>
        
        {/* Background Gradient & Base decor */}
        <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-black via-[#080808] to-[#000]' : 'from-white via-[#fcfcfc] to-[#fff]'}`} />
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'} pointer-events-none bg-[radial-gradient(circle_at_center,${isDark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)'}_1px,transparent_1px)] bg-[size:24px_24px]`} />
        {/* Soft glow behind the phone on desktop */}
        <div className={`absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] ${isDark ? 'bg-red-900/10' : 'bg-red-500/5'} blur-[150px] rounded-full pointer-events-none hidden lg:block`} />

        <div className="relative z-20 max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-12 items-center justify-between">
           
           {/* LEFT SIDE: CONTACT HUD & TYPOGRAPHY */}
           <div className="lg:w-5/12 flex flex-col justify-center mt-4">
              <div className="flex items-center gap-3 mb-4">
                 <div className={`w-6 h-[2px] ${isDark ? 'bg-red-600 shadow-[0_0_10px_red]' : 'bg-red-500'}`} />
                 <span className={`text-[10px] font-black uppercase tracking-[0.5em] ${isDark ? 'text-white/50' : 'text-black/40'}`}>Direct Dispatch</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                Drop Me a<br/><span className={`${isDark ? 'text-white/30' : 'text-black/20'} italic`}>Message.</span>
              </h2>

              <p className={`${isDark ? 'text-white/60 border-white/10' : 'text-black/60 border-black/5'} text-sm leading-relaxed mb-10 max-w-md font-medium border-l-2 pl-4`}>
                Have a project idea, an open position, or just want to collaborate? Use the phone interface to drop your direct message into my inbox.
              </p>

              {/* Status HUD Chips */}
              <div className="flex flex-col gap-4">
                 <div className={`${isDark ? 'bg-[#0a0a0a] border-white/5' : 'bg-gray-50 border-gray-100'} flex items-center gap-4 border p-4 rounded-xl w-full max-w-xs shadow-sm transition-colors`}>
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[12px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>Status</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Available / Active</span>
                    </div>
                 </div>

                 <div className={`${isDark ? 'bg-[#0a0a0a] border-white/5' : 'bg-gray-50 border-gray-100'} flex items-center gap-4 border p-4 rounded-xl w-full max-w-xs shadow-sm transition-colors`}>
                    <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'} flex items-center justify-center border`}>
                      <Activity className={`w-4 h-4 ${isDark ? 'text-white/50' : 'text-black/40'}`} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[12px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>Response</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-black/30'}`}>Usually &lt; 24 Hours</span>
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
                className={`absolute z-30 -left-6 md:-left-28 top-8 md:top-16 w-56 md:w-64 ${isDark ? 'bg-[#111111] border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : 'bg-white border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)]'} border p-4 md:p-5 rounded-[16px] hidden sm:block`}
              >
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className={`font-mono text-[10px] md:text-xs ${isDark ? 'text-white/80' : 'text-black/70'} leading-loose`}>
                  <p><span className="text-purple-500 font-bold">const</span> <span className="text-blue-500 italic">Developer</span> <span className="text-purple-500">=</span> {'{'}</p>
                  <p className="pl-4">role: <span className="text-green-600">'Architect'</span>,</p>
                  <p className="pl-4">status: <span className="text-green-600">'Active'</span>,</p>
                  <p>{'}'};</p>
                </div>
              </motion.div>

              {/* FLOATING CARD 2 - System Metrics */}
              <motion.div 
                animate={{ y: [8, -8, 8] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} 
                className={`absolute z-30 right-0 md:-right-20 bottom-12 md:bottom-20 w-52 md:w-60 ${isDark ? 'bg-[#111111] border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : 'bg-white border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)]'} border p-4 rounded-[16px] hidden sm:flex items-center gap-4`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-green-700 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] shrink-0">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/50' : 'text-black/30'}`}>System Status</span>
                  <span className={`text-[12px] md:text-[14px] font-bold ${isDark ? 'text-white' : 'text-black'} tracking-wide`}>100% Optimal</span>
                </div>
              </motion.div>


              {/* ------ THE SMARTPHONE ------ */}
              <div className={`relative w-[280px] md:w-[320px] h-[520px] md:h-[580px] ${isDark ? 'bg-[#000] border-[#111]' : 'bg-[#111] border-[#222]'} rounded-[45px] border-[12px] shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_0_20px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col z-20 ring-1 ${isDark ? 'ring-white/10' : 'ring-black/5'}`}>
                
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
                <div className={`flex-1 min-h-0 w-full ${isDark ? 'bg-[#050505]' : 'bg-white'} shadow-[0_-10px_20px_rgba(0,0,0,0.2)] flex flex-col relative overflow-hidden transition-colors`}>
                  
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
                        <div className={`absolute inset-0 ${isDark ? 'bg-black/70' : 'bg-white/60'} backdrop-blur-lg`} />
                        
                        <div className="relative z-30 flex flex-col items-center">
                          <Lock className={`w-4 h-4 ${isDark ? 'text-white/80' : 'text-black/80'} mb-2`} />
                          <div className={`text-[52px] font-thin ${isDark ? 'text-white' : 'text-black'} tracking-tight leading-none mb-1`}>{formatTime(time)}</div>
                          <div className={`text-[14px] font-medium ${isDark ? 'text-white/90' : 'text-black/90'}`}>{formatDate(time)}</div>
                        </div>

                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setScreen('chat')}
                          className={`relative z-30 w-[88%] ${isDark ? 'bg-[#1a1a1a]/80 border-white/10' : 'bg-white/80 border-black/5'} backdrop-blur-2xl border rounded-3xl p-4 mt-8 cursor-pointer shadow-lg group/notif`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-green-500 to-green-700 flex items-center justify-center shadow-inner">
                                <Mail className="w-3 h-3 text-white" />
                              </div>
                              <span className={`text-[10px] font-bold ${isDark ? 'text-white/50' : 'text-black/40'} uppercase tracking-widest pt-0.5`}>Messages</span>
                            </div>
                            <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-black/30'} uppercase tracking-widest pt-0.5`}>now</span>
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[13px] font-bold ${isDark ? 'text-white' : 'text-black'} mb-0.5 group-hover/notif:text-blue-500 transition-colors`}>Samuel Byiringiro</span>
                            <span className={`text-[12px] ${isDark ? 'text-white/80' : 'text-black/80'} leading-snug`}>Need a developer? Tap here to send me a direct message!</span>
                          </div>
                        </motion.div>

                        <div className="relative z-30 mt-auto flex justify-between w-full px-8 pb-10">
                          <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-black/5 border-black/5 hover:bg-black/10'} backdrop-blur-2xl flex items-center justify-center border cursor-pointer transition-colors`}>
                            <Flashlight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                          </div>
                          <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-white/10 border-white/10 hover:bg-white/20' : 'bg-black/5 border-black/5 hover:bg-black/10'} backdrop-blur-2xl flex items-center justify-center border cursor-pointer transition-colors`}>
                            <Camera className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
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
                        className={`absolute inset-0 z-10 flex flex-col ${isDark ? 'bg-[#050505]' : 'bg-[#fff]'} pt-2`}
                      >
                        {/* Chat Header */}
                        <div className={`px-5 pb-4 pt-1 border-b ${isDark ? 'border-white/5 bg-[#0a0a0a]' : 'border-black/5 bg-gray-50/50'} flex items-center justify-between transition-colors`}>
                           <div className="flex items-center gap-3">
                             <div className={`p-1 -ml-2 cursor-pointer ${isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'} rounded-full transition-colors`} onClick={() => setScreen('lock')}>
                               <ChevronLeft className="w-6 h-6 text-blue-500" />
                             </div>
                             <div className="relative">
                               <div className={`w-9 h-9 rounded-full overflow-hidden border ${isDark ? 'border-white/10 bg-[#111]' : 'border-black/5 bg-gray-100'} flex items-center justify-center shadow-md`}>
                                 <img src="/hero-character.png" alt="Samuel" className="w-full h-full object-cover" draggable="false" />
                               </div>
                               <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                             </div>
                             <div className="flex flex-col">
                               <span className={`font-bold text-[13px] ${isDark ? 'text-white' : 'text-black'} tracking-wider`}>Samuel</span>
                               <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-black/40'} font-medium`}>Active now</span>
                             </div>
                           </div>
                           <MoreVertical className={`w-5 h-5 ${isDark ? 'text-white/50' : 'text-black/30'} cursor-pointer`} />
                        </div>

                        {/* Chat Content / Form Area */}
                        <div className="flex-1 min-h-0 p-5 overflow-y-auto space-y-4 pb-12 scrollbar-hide">
                          
                          <div className="text-center w-full my-2">
                             <span className={`text-[9px] font-bold ${isDark ? 'text-white/30 bg-white/5' : 'text-black/30 bg-black/5'} uppercase tracking-widest px-2 py-1 rounded-full`}>Today {formatTime(time)}</span>
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
                                <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-black'} mb-1`}>Message Delivered</p>
                                <p className={`text-xs ${isDark ? 'text-white/50' : 'text-black/40'} text-center max-w-[200px]`}>I have received your message and will reply shortly.</p>
                              </motion.div>
                            ) : (
                              <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }} className="space-y-4">
                                
                                <div className="flex flex-col gap-1 w-full items-start">
                                   <div className={`${isDark ? 'bg-[#1a1a1a] text-white/90 border-white/5' : 'bg-gray-100 text-black/80 border-black/5'} p-3 px-4 rounded-2xl rounded-tl-sm text-xs font-medium max-w-[85%] border shadow-sm`}>
                                     Thanks for visiting my portfolio!
                                   </div>
                                   <div className={`${isDark ? 'bg-[#1a1a1a] text-white/90 border-white/5' : 'bg-gray-100 text-black/80 border-black/5'} p-3 px-4 rounded-2xl text-xs font-medium max-w-[85%] border shadow-sm`}>
                                     Need a developer? Leave your details below and I'll get back to you! 👇
                                   </div>
                                </div>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
                                  <div className="space-y-1">
                                    <label className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-black/30'} pl-1`}>Name</label>
                                    <input
                                      type="text"
                                      placeholder="E.g. Elon Musk"
                                      value={form.name}
                                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                                      required
                                      className={`w-full ${isDark ? 'bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-red-500/50' : 'bg-gray-50 border-black/5 text-black placeholder:text-black/20 focus:border-red-500/30'} rounded-[8px] px-3.5 py-2.5 text-xs outline-none transition-colors`}
                                    />
                                  </div>
                                  
                                  <div className="space-y-1">
                                    <label className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-black/30'} pl-1`}>Email</label>
                                    <input
                                      type="email"
                                      placeholder="you@company.com"
                                      value={form.email}
                                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                                      required
                                      className={`w-full ${isDark ? 'bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-red-500/50' : 'bg-gray-50 border-black/5 text-black placeholder:text-black/20 focus:border-red-500/30'} rounded-[8px] px-3.5 py-2.5 text-xs outline-none transition-colors`}
                                    />
                                  </div>
                                  
                                  <div className="space-y-1">
                                    <label className={`text-[9px] font-bold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-black/30'} pl-1`}>Message</label>
                                    <textarea
                                      placeholder="Let's build something..."
                                      value={form.message}
                                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                                      required
                                      rows={3}
                                      className={`w-full ${isDark ? 'bg-[#111111] border-white/10 text-white placeholder:text-white/20 focus:border-red-500/50' : 'bg-gray-50 border-black/5 text-black placeholder:text-black/20 focus:border-red-500/30'} rounded-[8px] px-3.5 py-2.5 text-xs outline-none transition-colors resize-none`}
                                    />
                                  </div>

                                  <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className={`w-full ${isDark ? 'bg-white text-black' : 'bg-black text-white'} font-black uppercase tracking-widest py-2.5 rounded-[8px] flex items-center justify-center gap-2 text-[11px] mt-2 shadow-lg transition-all`}
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
                  <div className={`w-32 h-1.5 ${isDark ? 'bg-white/20' : 'bg-gray-300'} rounded-full`} />
                </div>
              </div>
            </div>

        </div>

      </div>
      
      {/* MINIMALIST COPYRIGHT LINE - REDUCED SPACING */}
      <div className="w-full flex justify-center pt-4 pb-1">
        <p className={`text-[10px] md:text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'} tracking-tight`}>
          &copy; {new Date().getFullYear()} Samuel Byiringiro. All rights reserved.
        </p>
      </div>

    </section>
  );
};

export default ContactSection;
