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

          {/* Central Core Reveal - Modeled B.S Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ 
              opacity: phase === 'formed' || phase === 'finished' ? 1 : 0,
              scale: phase === 'formed' ? [0.9, 1.1, 1] : 1,
              rotate: 0
            }}
            className="absolute z-10 flex flex-col items-center"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  {/* Outer Hexagon Frame */}
                  <motion.path 
                    d="M50,5 L90,25 L90,75 L50,95 L10,75 L10,25 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  {/* Stylized 'B' */}
                  <motion.path 
                    d="M35,30 L35,70 M35,30 Q55,30 55,45 Q55,50 48,50 M35,50 Q60,50 60,60 Q60,70 35,70" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                  />
                  {/* Stylized 'S' */}
                  <motion.path 
                    d="M65,35 Q50,30 45,40 Q40,50 60,55 Q75,60 65,75 Q55,85 40,80" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                  />
               </svg>
               {/* Inner Core Glow */}
               <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full -z-10 animate-pulse" />
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

        {/* Minimalist Identity Text */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ 
             opacity: phase === 'formed' || phase === 'finished' ? 0.4 : 0, 
             y: phase === 'formed' || phase === 'finished' ? 0 : 10 
           }}
           className="mt-12 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Samuel Byiringiro</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40 italic">Software Engineering Excellence</span>
        </motion.div>
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
