import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, ShieldCheck, Activity, CheckCircle, Wifi, Battery, ChevronLeft, MoreVertical } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans tracking-tight">
      <div className="relative w-full max-w-7xl bg-[#050505] rounded-xl md:rounded-2xl text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 px-6 py-12 md:px-12 md:py-20 overflow-hidden group border border-[#161616]">
        
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
                    <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center border border-red-500/20">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] font-black uppercase tracking-widest text-white">Status</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Available For Hire</span>
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
           <div className="lg:w-1/2 relative flex justify-center items-center min-h-[650px] w-full">

              {/* FLOATING BUBBLE 1 - Top Left */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
                className="absolute z-30 -left-6 md:-left-24 top-16 md:top-24 w-60 md:w-72 bg-[#111111] border border-white/5 p-4 md:p-5 rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] hidden sm:block"
              >
                <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-lg">
                       <User className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                     </div>
                     <span className="text-[11px] md:text-[13px] uppercase font-bold tracking-widest text-white">Lead Recruiter</span>
                   </div>
                   <div className="bg-[#ef4444] text-white text-[9px] md:text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">+1 MSG</div>
                </div>
                <p className="text-[13px] md:text-[14px] text-white/90 font-medium leading-normal tracking-tight">
                  "Samuel, we need someone to lead our entire frontend rewrite. Are you open to chat?"
                </p>
              </motion.div>

              {/* FLOATING BUBBLE 2 - Bottom Right */}
              <motion.div 
                animate={{ y: [8, -8, 8] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} 
                className="absolute z-30 right-0 md:-right-16 bottom-24 md:bottom-32 w-60 md:w-72 bg-[#111111] border border-white/5 p-4 md:p-5 rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] hidden sm:block"
              >
                <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#10b981] flex items-center justify-center shadow-lg">
                       <User className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                     </div>
                     <span className="text-[11px] md:text-[13px] uppercase font-bold tracking-widest text-white">Founder</span>
                   </div>
                   <div className="bg-[#ef4444] text-white text-[9px] md:text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">+1 MSG</div>
                </div>
                <p className="text-[13px] md:text-[14px] text-white/90 font-medium leading-normal tracking-tight">
                  "Your UI design skills are insane. I have a freelance proposal for you."
                </p>
              </motion.div>


              {/* ------ THE SMARTPHONE ------ */}
              <div className="relative w-[320px] h-[650px] bg-[#000] rounded-[50px] border-[14px] border-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col z-20 ring-1 ring-white/10">
                
                {/* Physical Phone Side Buttons */}
                <div className="absolute left-[-16px] top-28 w-[3px] h-10 bg-[#222] rounded-l-md" />
                <div className="absolute left-[-16px] top-44 w-[3px] h-14 bg-[#222] rounded-l-md" />
                <div className="absolute left-[-16px] top-60 w-[3px] h-14 bg-[#222] rounded-l-md" />
                <div className="absolute right-[-16px] top-36 w-[3px] h-20 bg-[#222] rounded-r-md" />

                {/* Status Bar */}
                <div className="w-full pt-4 pb-2 px-6 flex justify-between items-center text-[11px] font-bold text-white z-30">
                  <span>9:41</span>
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

                {/* Inner Phone Screen (App UI) */}
                <div className="flex-1 w-full bg-[#050505] shadow-[0_-10px_20px_rgba(0,0,0,0.5)] flex flex-col pt-2 relative">
                  
                  {/* Chat Header */}
                  <div className="px-5 pb-4 pt-1 border-b border-white/5 flex items-center justify-between bg-[#0a0a0a]">
                     <div className="flex items-center gap-3">
                       <ChevronLeft className="w-5 h-5 text-red-500 cursor-pointer" />
                       <div className="relative">
                         <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-red-600 to-red-900 border border-white/10 flex items-center justify-center shadow-lg">
                           <User className="w-4 h-4 text-white" />
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
                  <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent)] scrollbar-hide">
                    
                    <div className="text-center w-full my-2">
                       <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full">Today 9:41 AM</span>
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
                                className="w-full bg-[#111111] border border-white/10 rounded-[8px] px-3.5 py-3 text-xs text-white placeholder:text-white/20 outline-none focus:border-red-500/50 transition-colors shadow-inner"
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
                                className="w-full bg-[#111111] border border-white/10 rounded-[8px] px-3.5 py-3 text-xs text-white placeholder:text-white/20 outline-none focus:border-red-500/50 transition-colors shadow-inner"
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
                                className="w-full bg-[#111111] border border-white/10 rounded-[8px] px-3.5 py-3.5 text-xs text-white placeholder:text-white/20 outline-none focus:border-red-500/50 transition-colors resize-none shadow-inner"
                              />
                            </div>

                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="submit"
                              className="w-full bg-white text-black font-black uppercase tracking-widest py-3 rounded-[8px] flex items-center justify-center gap-2 text-[11px] mt-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow"
                            >
                              Send Message
                              <Send className="w-3.5 h-3.5 ml-1" />
                            </motion.button>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-1 bg-[#050505] w-full pt-1 pb-3 flex justify-center z-30">
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
