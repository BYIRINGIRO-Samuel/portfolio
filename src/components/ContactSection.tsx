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
    <section id="contact" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-6 py-8 md:px-12 md:py-12 overflow-hidden group">
        
        {/* BACKGROUND DECOR: TECH GRID */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute top-0 right-0 p-10">
              <Terminal className="w-48 h-48 text-white" />
           </div>
           <div className="absolute bottom-0 left-0 p-10">
              <Mail className="w-32 h-32 text-white" />
           </div>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
           
           {/* LEFT SIDE: INITIATION HUD */}
           <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-5 h-[1.5px] bg-white opacity-40 shadow-[0_0_10px_white]" />
                 <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 italic">Communications // UPLINK</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-6">
                INITIATE<br/><span className="text-white/20">A_PROJECT</span>.
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed italic mb-8 max-w-md font-medium">
                "Bridge the gap between vision and deployment. Send a transmission to start the technical consultation."
              </p>

              {/* Status HUD Chips - More Compact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Server: ONLINE</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                    <Activity className="w-3.5 h-3.5 text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Sync: &lt; 24HR</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                    <ShieldCheck className="w-3.5 h-3.5 text-white/20" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Logic: OPTIMIZED</span>
                 </div>
              </div>
           </div>

           {/* RIGHT SIDE: TRANSMISSION MODULE */}
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
                    <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-2">Transmission_OK</h3>
                    <p className="text-white/40 text-xs italic font-medium">Log recorded. Syncing...</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="group relative">
                          <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Registry_Name</label>
                          <div className="relative">
                             <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="text"
                               placeholder="IDENT_SAMUEL"
                               value={form.name}
                               onChange={(e) => setForm({ ...form, name: e.target.value })}
                               required
                               className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                       <div className="group relative">
                          <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Uplink_Email</label>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="email"
                               placeholder="USER@UPLINK.COM"
                               value={form.email}
                               onChange={(e) => setForm({ ...form, email: e.target.value })}
                               required
                               className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="group relative">
                          <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Network_Domain</label>
                          <div className="relative">
                             <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <input
                               type="url"
                               placeholder="HTTP://REF.IO"
                               value={form.website}
                               onChange={(e) => setForm({ ...form, website: e.target.value })}
                               className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all placeholder:text-white/10"
                             />
                          </div>
                       </div>
                       <div className="group relative">
                          <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Resource_Capacity</label>
                          <div className="relative">
                             <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                             <select
                               value={form.budget}
                               onChange={(e) => setForm({ ...form, budget: e.target.value })}
                               className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all appearance-none cursor-pointer"
                             >
                               <option value="" className="bg-[#0f0f0f]">SELECT_RES</option>
                               {budgetOptions.map((b) => (
                                 <option key={b} value={b} className="bg-[#0f0f0f]">{b.toUpperCase()}</option>
                               ))}
                             </select>
                          </div>
                       </div>
                    </div>

                    <div className="group relative">
                       <label className="text-[7px] font-black uppercase tracking-widest text-white/20 mb-1.5 block ml-1">Mission_Log</label>
                       <div className="relative">
                          <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-white/20 group-focus-within:text-white transition-colors" />
                          <textarea
                            placeholder="CORE_DATA_STREAM..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            rows={3}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-4 text-xs font-black uppercase tracking-widest outline-none focus:border-white focus:bg-white/10 transition-all resize-none placeholder:text-white/10 min-h-[100px]"
                          />
                       </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full bg-white text-black py-4.5 rounded-full font-black uppercase italic tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors shadow-2xl"
                    >
                      SEND_UPLINK <Send className="w-3.5 h-3.5" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
           </div>

        </div>

        {/* HUD FOOTER: COMPACT */}
        <div className="mt-12 flex items-center justify-between opacity-20">
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
