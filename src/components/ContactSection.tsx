import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, ShieldCheck, Activity, Terminal } from 'lucide-react';



const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-6 py-10 md:px-12 md:py-16 overflow-hidden group">
        
        {/* BACKGROUND DECOR: TECH GRID */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute top-0 right-0 p-10">
              <Terminal className="w-48 h-48 text-white" />
           </div>
           <div className="absolute bottom-0 left-0 p-10">
              <Mail className="w-32 h-32 text-white" />
           </div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
           
           {/* LEFT SIDE: CONTACT HUD */}
           <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-5 h-[1.5px] bg-white opacity-40 shadow-[0_0_10px_white]" />
                 <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 italic">Communications // CONTACT</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-6">
                GET_IN<br/><span className="text-white/20">TOUCH_NOW</span>.
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed italic mb-12 max-w-md font-medium">
                "Have a question, a project idea, or just want to chat? Send me a message and I'll respond as soon as I can."
              </p>

              {/* Status HUD Chips - More Compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Status: AVAILABLE</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                    <Activity className="w-3.5 h-3.5 text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Response: FAST</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                    <ShieldCheck className="w-3.5 h-3.5 text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Support: GLOBAL</span>
                 </div>
              </div>
           </div>

           {/* RIGHT SIDE: MESSAGE MODULE */}
           <div className="lg:w-1/2 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_20px_white]">
                       <Send className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-2">Message_Sent</h3>
                    <p className="text-white/40 text-xs italic font-medium">I'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="group relative">
                          <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Your_Name</label>
                          <div className="relative">
                             <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="text"
                               placeholder="SAMUEL_B"
                               value={form.name}
                               onChange={(e) => setForm({ ...form, name: e.target.value })}
                               required
                               className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                       <div className="group relative">
                          <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Your_Email</label>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="email"
                               placeholder="YOU@DOMAIN.COM"
                               value={form.email}
                               onChange={(e) => setForm({ ...form, email: e.target.value })}
                               required
                               className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                    </div>



                    <div className="group relative">
                       <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Your_Message</label>
                       <div className="relative">
                          <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                          <textarea
                            placeholder="TELL_ME_EVERYTHING..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            rows={3}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-4 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all resize-none placeholder:text-white/10 min-h-[120px]"
                          />
                       </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit" 
                      className="group relative w-72 h-16 bg-black flex items-center justify-center overflow-hidden border border-white/20 mx-auto transition-all hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                      {/* Pattern Background */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />

                      <div className="relative z-10 flex items-center gap-4 text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] italic group-hover:tracking-[0.7em] transition-all">
                          SEND_MESSAGE
                        </span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>

                      {/* Technical Mechanical Corners */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white translate-x-[-1px] translate-y-[-1px]" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white translate-x-[1px] translate-y-[-1px]" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white translate-x-[-1px] translate-y-[1px]" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white translate-x-[1px] translate-y-[1px]" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
           </div>

        </div>

        {/* HUD FOOTER: COMPACT */}
        <div className="mt-16 flex items-center justify-between opacity-20">
           <div className="flex items-center gap-4">
              <ShieldCheck className="w-3 h-3" />
              <span className="text-[8px] font-black tracking-widest uppercase italic">Encryption: SECURE</span>
           </div>
           <div className="flex items-center gap-2">
              <span className="text-[8px] font-black tracking-widest uppercase italic">BYIRINGIRO_NODAL_v4.0</span>
              <div className="w-1 h-1 bg-white rounded-full animate-ping" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
