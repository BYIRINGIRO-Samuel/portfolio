import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'assembling' | 'formed' | 'finished'>('assembling');
  const [progress, setProgress] = useState(0);

  // Generate assembly fragments
  const fragments = useMemo(() => {
    return [...Array(24)].map((_, i) => ({
      id: i,
      // Target positions to form a centered geometric emblem (Diamond/Octahedron)
      tx: 50 + (Math.random() - 0.5) * 40,
      ty: 50 + (Math.random() - 0.5) * 40,
      // Random starting points (off-screen)
      sx: Math.random() > 0.5 ? -100 : 200,
      sy: Math.random() > 0.5 ? -100 : 200,
      rotation: Math.random() * 360,
      size: Math.random() * 20 + 10,
    }));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase('formed');
          setTimeout(() => setPhase('finished'), 1000);
          setTimeout(onComplete, 1800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#030303] overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* THE ASSEMBLY ZONE */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          
          <AnimatePresence>
            {fragments.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ 
                  x: (f.sx - 50) * 5, 
                  y: (f.sy - 50) * 5, 
                  rotate: f.rotation, 
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: phase === 'assembling' ? (f.tx - 50) * (1 - progress/100) * 10 : 0, 
                  y: phase === 'assembling' ? (f.ty - 50) * (1 - progress/100) * 10 : 0,
                  rotate: phase === 'assembling' ? f.rotation * (1 - progress/100) : 0,
                  opacity: 1,
                  scale: 1,
                  // Logic to snap into a specific shape position
                  left: `${f.tx}%`,
                  top: `${f.ty}%`,
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut"
                }}
                className="absolute"
                style={{
                  width: f.size + 'px',
                  height: f.size + 'px',
                  // Creating shards/triangles
                  clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  background: i % 3 === 0 ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                }}
              />
            ))}
          </AnimatePresence>

          {/* Central Core Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: phase === 'formed' || phase === 'finished' ? 1 : 0,
              scale: phase === 'formed' ? [0.9, 1.1, 1] : 1
            }}
            className="absolute z-10 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)]">
               <span className="text-xl font-black text-white italic">S</span>
            </div>
          </motion.div>

          {/* Connection Lines (Appears when formed) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
             <AnimatePresence>
               {(phase === 'formed' || phase === 'finished') && (
                 <motion.circle 
                   cx="50%" cy="50%" r="60" 
                   fill="none" stroke="white" strokeWidth="0.5" 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1 }}
                 />
               )}
             </AnimatePresence>
          </svg>
        </div>

        {/* HUD ELEMENTS */}
        <div className="mt-12 flex flex-col items-center gap-6 relative z-20">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.6em] text-white/30 mb-2"
            >
              Structural::Assembly
            </motion.div>
            
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black text-white tracking-tighter">
                {Math.round(progress)}
                <span className="text-sm font-light text-white/20 ml-1">%</span>
              </span>
            </div>
          </div>

          <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
             <motion.div 
               className="absolute inset-y-0 left-0 bg-white shadow-[0_0_10px_white]"
               style={{ width: `${progress}%` }}
             />
          </div>

          <AnimatePresence>
            {progress > 80 && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[9px] font-bold text-blue-400 uppercase tracking-widest"
              >
                Constructing Identity
              </motion.span>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Finishing Flash */}
      <AnimatePresence>
        {phase === 'finished' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white z-[120]"
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default LoadingScreen;
