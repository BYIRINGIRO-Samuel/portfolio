import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

// Africa path data (simplified high-res)
const AFRICA_PATH = "M47.5,5.5 C55,5 65,4 72,8 C78,12 82,20 84,30 C86,40 84,50 80,60 C75,70 68,80 60,88 C52,95 45,98 38,92 C32,85 28,75 25,65 C22,55 18,50 12,45 C6,40 4,35 5,28 C6,20 12,12 20,8 C28,4 38,5 47.5,5.5 Z";

// Generating a denser set of points for a more realistic network
const generateMapPoints = () => {
  const points = [];
  // Outline points
  const outlineCount = 60;
  for (let i = 0; i < outlineCount; i++) {
    const t = i / outlineCount;
    const angle = t * 2 * Math.PI;
    // Basic Africa-like shape logic
    const rx = 35 * (1 + 0.3 * Math.sin(angle * 2.5) + 0.2 * Math.cos(angle * 4.2));
    const ry = 45 * (1 + 0.2 * Math.cos(angle * 3.1) + 0.1 * Math.sin(angle * 5.7));
    points.push({
      x: 50 + rx * Math.cos(angle),
      y: 50 + ry * Math.sin(angle),
      isOutline: true
    });
  }
  
  // Hand-tuned Africa shape adjustments to match common maps
  const realPoints = [
    {x: 50, y: 10}, {x: 65, y: 12}, {x: 75, y: 18}, {x: 85, y: 30}, {x: 82, y: 45}, 
    {x: 75, y: 55}, {x: 65, y: 70}, {x: 55, y: 85}, {x: 50, y: 95}, {x: 45, y: 90},
    {x: 40, y: 80}, {x: 35, y: 65}, {x: 30, y: 55}, {x: 20, y: 50}, {x: 10, y: 45},
    {x: 5, y: 35}, {x: 10, y: 25}, {x: 20, y: 15}, {x: 35, y: 12}, {x: 45, y: 10}
  ];

  // Fill interior with a grid of points clipped to shape (simulated)
  for (let x = 15; x < 85; x += 6) {
    for (let y = 15; y < 90; y += 6) {
      // Very rough containment check for Africa shape
      const isInTop = y < 50 && x > 15 && x < 85;
      const isInBottom = y >= 50 && x > 35 && x < 65;
      if (isInTop || isInBottom) {
        points.push({ x, y, isOutline: false, isRwanda: x > 49 && x < 54 && y > 46 && y < 51 });
      }
    }
  }

  return points;
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'formation' | 'rwanda' | 'text1' | 'text2' | 'transform' | 'finished'>('formation');
  const points = useMemo(() => generateMapPoints(), []);
  const [connections, setConnections] = useState<{p1: number, p2: number}[]>([]);

  useEffect(() => {
    // Generate logical network connections
    const newConnections: {p1: number, p2: number}[] = [];
    points.forEach((p1, i) => {
      points.slice(i + 1).forEach((p2, j) => {
        const idx2 = i + 1 + j;
        const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
        if (dist < 10) newConnections.push({ p1: i, p2: idx2 });
      });
    });
    setConnections(newConnections);

    // Timeline
    const t1 = setTimeout(() => setPhase('rwanda'), 3000);
    const t2 = setTimeout(() => setPhase('text1'), 4000);
    const t3 = setTimeout(() => setPhase('text2'), 6500);
    const t4 = setTimeout(() => setPhase('transform'), 8500);
    const t5 = setTimeout(() => setPhase('finished'), 10500);
    const t6 = setTimeout(onComplete, 11500);

    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, [onComplete, points]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans"
    >
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-20" />
      </div>

      <div className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center">
        
        {/* THE DIGITAL AFRICA MAP */}
        <div className="relative w-[320px] h-[400px] md:w-[500px] md:h-[600px] mb-12">
          
          {/* Connection Lines (SVG Layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <AnimatePresence>
              {phase !== 'transform' && phase !== 'finished' && connections.map((conn, idx) => (
                <motion.line
                  key={`line-${idx}`}
                  x1={`${points[conn.p1].x}%`} y1={`${points[conn.p1].y}%`}
                  x2={`${points[conn.p2].x}%`} y2={`${points[conn.p2].y}%`}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: phase === 'rwanda' || phase === 'text1' || phase === 'text2' ? 0.15 : 0.08,
                    stroke: (points[conn.p1].isRwanda || points[conn.p2].isRwanda) && phase !== 'formation' 
                      ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.08)"
                  }}
                  transition={{ duration: 3, delay: Math.random() * 2 }}
                />
              ))}
            </AnimatePresence>
          </svg>

          {/* Rwanda Radiating Glow (Background layer) */}
          <AnimatePresence>
            {(phase === 'rwanda' || phase === 'text1' || phase === 'text2') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3], 
                  scale: [1, 1.3, 1] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-40 h-40 bg-amber-400/10 blur-[60px] rounded-full z-0"
                style={{ left: '52%', top: '48%', transform: 'translate(-50%, -50%)' }}
              />
            )}
          </AnimatePresence>

          {/* Particle Nodes */}
          {points.map((p, i) => (
            <motion.div
              key={`node-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: phase === 'transform' ? 0 : 1,
                scale: p.isRwanda && phase !== 'formation' ? [1, 1.8, 1] : 1,
                backgroundColor: p.isRwanda && phase !== 'formation' ? "#fbbf24" : "#ffffff40",
                boxShadow: p.isRwanda && phase !== 'formation' ? "0 0 15px #fbbf24" : "none",
              }}
              className="absolute w-[3px] h-[3px] rounded-full z-20"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
              transition={{ 
                duration: 1.5, 
                delay: Math.random() * 2,
                scale: { repeat: Infinity, duration: 1.5 }
              }}
            />
          ))}

          {/* Rwanda Central Pulse Core */}
          <AnimatePresence>
            {(phase === 'rwanda' || phase === 'text1' || phase === 'text2') && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 4], 
                  opacity: [0.8, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-12 h-12 bg-amber-400/40 rounded-full border border-amber-400/50 z-30"
                style={{ left: '52%', top: '48%', transform: 'translate(-50%, -50%)' }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* CINEMATIC TEXT CONTENT */}
        <div className="flex flex-col items-center justify-center gap-6 h-40 relative z-30 px-6 text-center">
            <AnimatePresence mode="wait">
              {phase === 'text1' && (
                <motion.div
                  key="t1"
                  initial={{ opacity: 0, y: 30, letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.8em] text-white/30 mb-4 ml-[0.8em]">Technological Evolution</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">Innovation From Africa</h2>
                </motion.div>
              )}

              {phase === 'text2' && (
                <motion.div
                  key="t2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.6em] text-amber-500 mb-4 ml-[0.6em]">Rwanda • Global Tech Hub</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-none">Building Global Solutions</h2>
                </motion.div>
              )}

              {phase === 'transform' && (
                <motion.div
                  key="t3"
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "anticipate" }}
                  className="flex flex-col items-center mt-[-80px]"
                >
                  <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                    Byiringiro Samuel
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 md:w-16 bg-white/20" />
                    <p className="text-xs md:text-sm font-black text-white/40 uppercase tracking-[0.4em] ml-[0.4em]">
                      Building the Future of Software
                    </p>
                    <div className="h-px w-8 md:w-16 bg-white/20" />
                  </div>
                </motion.div>
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
            className="absolute inset-0 bg-white z-[110]"
            transition={{ duration: 0.8 }}
          />
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default LoadingScreen;
