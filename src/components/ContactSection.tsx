import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, Globe, DollarSign, MessageSquare, ShieldCheck, Activity, Terminal } from 'lucide-react';

const budgetOptions = [
  'Under $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', website: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans selection:bg-white/30 overflow-hidden">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-6 py-12 md:px-12 md:py-16 overflow-hidden group">
        
        {/* BACKGROUND DECOR: TECH GRID */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute top-0 right-0 p-20">
              <Terminal className="w-64 h-64 text-white" />
           </div>
           <div className="absolute bottom-0 left-0 p-20">
              <Mail className="w-48 h-48 text-white" />
           </div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
           
           {/* LEFT SIDE: INITIATION HUD */}
           <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-6 h-[2px] bg-white opacity-40 shadow-[0_0_10px_white]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 italic">Communications // UPLINK</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-8">
                INITIATE<br/><span className="text-white/20">A_PROJECT</span>.
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed italic mb-12 max-w-md font-medium">
                "Bridge the gap between vision and deployment. Send a transmission to start the technical consultation process."
              </p>

              {/* Status HUD Chips */}
              <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl w-fit">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/60">Server_Status: ONLINE</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl w-fit">
                    <Activity className="w-4 h-4 text-white/20" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/60">Response_Time: &lt; 24HR</span>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl w-fit">
                    <ShieldCheck className="w-4 h-4 text-white/20" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-white/60">Logic_Health: OPTIMIZED</span>
                 </div>
              </div>
           </div>

           {/* RIGHT SIDE: TRANSMISSION MODULE */}
           <div className="lg:w-1/2 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center p-12 bg-white/5 border border-white/10 rounded-[32px] text-center backdrop-blur-md"
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-[0_0_30px_white]">
                       <Send className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-4">Transmission_Sent</h3>
                    <p className="text-gray-400 text-sm italic font-medium">
                       Log recorded. Expect synchronous feedback within the next cycle.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                       <div className="group relative">
                          <label className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2 block ml-2">Registry_Name</label>
                          <div className="relative">
                             <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="text"
                               placeholder="SAMUEL_B"
                               value={form.name}
                               onChange={(e) => setForm({ ...form, name: e.target.value })}
                               required
                               className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold uppercase tracking-wider outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                       <div className="group relative">
                          <label className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2 block ml-2">Uplink_Email</label>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="email"
                               placeholder="USER@DOMAIN.COM"
                               value={form.email}
                               onChange={(e) => setForm({ ...form, email: e.target.value })}
                               required
                               className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold uppercase tracking-wider outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                    </div>

                    <div className="group relative">
                       <label className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2 block ml-2">Network_Domain (OPTIONAL)</label>
                       <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                          <input
                            type="url"
                            placeholder="HTTPS://DOMAIN.COM"
                            value={form.website}
                            onChange={(e) => setForm({ ...form, website: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold uppercase tracking-wider outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                          />
                       </div>
                    </div>

                    <div className="group relative">
                       <label className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2 block ml-2">Resource_Allocation</label>
                       <div className="relative">
                          <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                          <select
                            value={form.budget}
                            onChange={(e) => setForm({ ...form, budget: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold uppercase tracking-wider outline-none focus:border-white focus:bg-white/10 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#0f0f0f]">SELECT_RESOURCES...</option>
                            {budgetOptions.map((b) => (
                              <option key={b} value={b} className="bg-[#0f0f0f]">{b.toUpperCase()}</option>
                            ))}
                          </select>
                       </div>
                    </div>

                    <div className="group relative">
                       <label className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2 block ml-2">Mission_Parameters</label>
                       <div className="relative">
                          <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                          <textarea
                            placeholder="CORE_LOGS..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            rows={4}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold uppercase tracking-wider outline-none focus:border-white focus:bg-white/10 transition-all resize-none placeholder:text-white/10"
                          />
                       </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full bg-white text-black py-5 rounded-full font-black uppercase italic tracking-[0.4em] text-xs flex items-center justify-center gap-4 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      SEND_UPLINK <Send className="w-4 h-4" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
           </div>

        </div>

        {/* HUD FOOTER */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-20">
           <div className="flex items-center gap-4">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[9px] font-black tracking-widest uppercase">Encryption_Channel: SECED-V5</span>
           </div>
           <div className="flex items-center gap-8">
              <span className="text-[7px] font-black tracking-[0.5em] uppercase italic">System: BYIRINGIRO_NODAL_v4.0</span>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
