import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Roughly Africa points (scaled 0-100)
const AFRICA_POINTS = [
  { x: 45, y: 5 }, { x: 55, y: 7 }, { x: 65, y: 5 }, { x: 75, y: 8 }, { x: 80, y: 15 }, 
  { x: 82, y: 25 }, { x: 80, y: 35 }, { x: 70, y: 45 }, { x: 65, y: 55 }, { x: 60, y: 65 }, 
  { x: 55, y: 75 }, { x: 50, y: 85 }, { x: 48, y: 95 }, { x: 42, y: 90 }, { x: 38, y: 80 }, 
  { x: 35, y: 70 }, { x: 32, y: 60 }, { x: 28, y: 55 }, { x: 22, y: 52 }, { x: 15, y: 48 }, 
  { x: 10, y: 40 }, { x: 8, y: 30 }, { x: 12, y: 20 }, { x: 20, y: 12 }, { x: 30, y: 8 }, 
  { x: 40, y: 6 },
  // Interior points for network feel
  { x: 40, y: 20 }, { x: 50, y: 25 }, { x: 60, y: 30 }, { x: 30, y: 35 }, { x: 45, y: 40 }, 
  { x: 55, y: 45 }, { x: 40, y: 55 }, { x: 50, y: 60 }, { x: 45, y: 75 },
  // RWANDA POINT
  { x: 52, y: 48, isRwanda: true }
];

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'formation' | 'rwanda' | 'text1' | 'text2' | 'transform' | 'finished'>('formation');
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; tx: number; ty: number; isRwanda?: boolean }[]>([]);

  useEffect(() => {
    // Generate particles
    const initialParticles = AFRICA_POINTS.map((pt, i) => ({
      id: i,
      x: Math.random() * 100, // Initial scatter
      y: Math.random() * 100,
      tx: pt.x,
      ty: pt.y,
      isRwanda: pt.isRwanda
    }));
    
    // Add extra decorative particles
    for (let i = initialParticles.length; i < 150; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        tx: Math.random() * 100,
        ty: Math.random() * 100,
      });
    }
    
    setParticles(initialParticles);

    // Sequence
    const t1 = setTimeout(() => setPhase('rwanda'), 2500);
    const t2 = setTimeout(() => setPhase('text1'), 3500);
    const t3 = setTimeout(() => setPhase('text2'), 5500);
    const t4 = setTimeout(() => setPhase('transform'), 7500);
    const t5 = setTimeout(() => setPhase('finished'), 9500);
    const t6 = setTimeout(onComplete, 10500);

    return () => {
      [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* MAP / PARTICLE CONTAINER */}
        <div className="relative w-80 h-96 md:w-[400px] md:h-[500px]">
          
          {/* Connecting Lines (Simulated with SVG layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            {phase !== 'transform' && phase !== 'finished' && particles.slice(0, AFRICA_POINTS.length).map((p1, i) => {
              // Connect close points
              const connections = particles.slice(i + 1, AFRICA_POINTS.length).filter(p2 => {
                const dist = Math.sqrt(Math.pow(p1.tx - p2.tx, 2) + Math.pow(p1.ty - p2.ty, 2));
                return dist < 15;
              });

              return connections.map(p2 => (
                <motion.line
                  key={`${p1.id}-${p2.id}`}
                  x1={`${p1.tx}%`} y1={`${p1.ty}%`}
                  x2={`${p2.tx}%`} y2={`${p2.ty}%`}
                  stroke="rgba(59,130,246,0.5)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              ));
            })}
          </svg>

          {/* Particles */}
          <AnimatePresence>
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className={`absolute w-1 h-1 rounded-full ${p.isRwanda ? 'bg-amber-400 z-50' : 'bg-blue-400/60'}`}
                style={{ 
                  left: phase === 'formation' ? `${p.x}%` : `${p.tx}%`, 
                  top: phase === 'formation' ? `${p.y}%` : `${p.ty}%` 
                }}
                animate={{
                  left: phase === 'formation' ? [`${p.x}%`, `${p.tx}%`] : `${p.tx}%`,
                  top: phase === 'formation' ? [`${p.y}%`, `${p.ty}%`] : `${p.ty}%`,
                  scale: (phase === 'rwanda' || phase === 'text1') && p.isRwanda ? [1, 1.5, 1] : 1,
                  boxShadow: (phase === 'rwanda' || phase === 'text1') && p.isRwanda ? '0 0 20px rgba(251,191,36,0.8)' : 'none',
                  opacity: phase === 'transform' ? 0 : 1
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  scale: { duration: 1, repeat: Infinity }
                }}
              />
            ))}
          </AnimatePresence>

          {/* Rwanda Pulse */}
          {(phase === 'rwanda' || phase === 'text1' || phase === 'text2') && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5], opacity: [0.8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-20 h-20 bg-amber-400/20 rounded-full blur-xl z-30"
              style={{ left: '52%', top: '48%', transform: 'translate(-50%, -50%)' }}
            />
          )}
        </div>

        {/* TEXT OVERLAYS */}
        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center gap-6 h-32">
          <AnimatePresence mode="wait">
            {phase === 'text1' && (
              <motion.div
                key="t1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <span className="text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-2">Technological Growth</span>
                <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter">Innovation From Africa</span>
              </motion.div>
            )}
            {phase === 'text2' && (
              <motion.div
                key="t2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <span className="text-sm font-black uppercase tracking-[0.4em] text-blue-400 mb-2">Rwanda • Hub of Tech</span>
                <span className="text-2xl md:text-3xl font-black text-white italic tracking-tighter">Building Global Solutions</span>
              </motion.div>
            )}
            {phase === 'transform' && (
              <motion.div
                key="t3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
                  Byiringiro Samuel
                </h1>
                <p className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">
                  Building the Future of Software
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* GLOBAL LIGHTING EFFECTS */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <motion.div 
          animate={{ opacity: phase === 'transform' ? [0, 0.3, 0.2] : 0 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"
        />
      </div>

    </motion.div>
  );
};

export default LoadingScreen;
