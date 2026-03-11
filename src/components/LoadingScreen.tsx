import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'approaching' | 'descending' | 'landing' | 'finished'>('approaching');

  useEffect(() => {
    // Stage 1: Helicopter fly-in (0s - 2s)
    const t1 = setTimeout(() => setPhase('descending'), 2000);
    // Stage 2: Person descends (2s - 4.5s)
    const t2 = setTimeout(() => setPhase('landing'), 4500);
    // Stage 3: Reached ground (4.5s - 5.5s)
    const t3 = setTimeout(() => setPhase('finished'), 5500);
    // Stage 4: Trigger exit (6s)
    const t4 = setTimeout(onComplete, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative w-full h-full max-w-lg mx-auto overflow-hidden">
        
        {/* HELICOPTER CONTAINER */}
        <motion.div
          initial={{ x: '-120%', y: '10%' }}
          animate={
            phase === 'approaching'
              ? { x: '0%', y: '10%' }
              : phase === 'finished'
              ? { x: '120%', y: '5%' }
              : { x: '0%', y: '10%' }
          }
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-x-0 top-0 flex flex-col items-center perspective-[1000px]"
        >
          {/* REALISTIC HELICOPTER IMAGE */}
          <div className="relative w-64 h-32 md:w-80 md:h-40">
            {/* Rotor Blur Effect */}
            <motion.div
              animate={{ rotate: 360 * 15 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-72 h-4 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-[4px] z-10"
            />
            <motion.div
              animate={{ rotate: -360 * 20 }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-72 h-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-[8px] z-10"
            />
            
            <img 
              src="/loading/helicopter.png" 
              alt="Tactical Helicopter" 
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] contrast-125 brightness-90 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
            />

            {/* ROPE */}
            <AnimatePresence>
              {(phase === 'descending' || phase === 'landing') && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '450px' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute left-[45%] top-[60%] w-[1px] bg-white/30 origin-top shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                />
              )}
            </AnimatePresence>

            {/* REALISTIC OPERATIVE ON ROPE */}
            <AnimatePresence>
              {(phase === 'descending' || phase === 'landing') && (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={
                    phase === 'descending' 
                      ? { y: 220, opacity: 1 } 
                      : { y: 380, opacity: 1 }
                  }
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute left-[42%] top-[60%] w-12 h-20"
                >
                  <img 
                    src="/loading/operative.png" 
                    alt="Tactical Operative" 
                    className="w-full h-full object-contain contrast-125 brightness-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Text Area */}
        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-1"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">System Initialization</span>
          </motion.div>
          
          <div className="h-6 overflow-hidden relative w-48 flex justify-center">
             <AnimatePresence mode="wait">
               {phase === 'approaching' && (
                 <motion.span key="p1" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} className="text-sm font-bold text-white uppercase tracking-widest absolute">Targeting Zone</motion.span>
               )}
               {phase === 'descending' && (
                 <motion.span key="p2" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} className="text-sm font-bold text-white uppercase tracking-widest absolute">Deploying Unit</motion.span>
               )}
               {phase === 'landing' && (
                 <motion.span key="p3" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} className="text-sm font-bold text-blue-500 uppercase tracking-widest absolute">Touchdown</motion.span>
               )}
                {phase === 'finished' && (
                 <motion.span key="p4" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} className="text-sm font-bold text-emerald-500 uppercase tracking-widest absolute">Ready</motion.span>
               )}
             </AnimatePresence>
          </div>

          <div className="w-48 h-[2px] bg-white/5 rounded-full mt-4 overflow-hidden relative">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 5.5, ease: "linear" }}
              className="absolute inset-0 bg-white shadow-[0_0_10px_white]"
            />
          </div>
        </div>

      </div>

      {/* Ground Effect (When landing) */}
      <AnimatePresence>
        {phase === 'landing' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-12 bg-white/5 blur-2xl rounded-full"
          />
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default LoadingScreen;
