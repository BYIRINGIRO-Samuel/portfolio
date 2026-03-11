import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Initial animation sequence before completion
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 800);
    }, 4000); // 4s of pure geometric motion

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white overflow-hidden flex flex-col items-center justify-center font-sans select-none"
    >
      {/* Structural Tech Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)]" />
      </div>

      <div className="relative z-10">
        {/* THE GEOMETRIC ENGINE */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          
          {/* Neural Glow Pulse */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-blue-500 rounded-full blur-[80px]"
          />

          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Morphing Blueprint Path */}
            <motion.path
              animate={{
                d: [
                  "M50,50 L50,50 L50,50 L50,50 L50,50 L50,50 Z", // Origin Point
                  "M25,25 L75,25 L75,75 L25,75 L25,75 L25,25 Z", // Precision Square
                  "M50,15 L85,50 L50,85 L15,50 L15,50 L50,15 Z", // Strategic Diamond
                  "M50,5 L90,25 L90,75 L50,95 L10,75 L10,25 Z",  // Final Hexagon
                ],
                rotate: [0, 90, 180, 360],
                strokeWidth: [6, 2, 1.5, 1],
                stroke: ["#3b82f6", "#3b82f6", "#3b82f6", "#1e293b"]
              }}
              transition={{
                duration: 4,
                times: [0, 0.3, 0.6, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
            />

            {/* Orbiting Satellite Nodes */}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={i}
                r="1.5"
                fill="#3b82f6"
                animate={{
                  cx: 50 + Math.cos((i * (Math.PI * 2)) / 3) * 44,
                  cy: 50 + Math.sin((i * (Math.PI * 2)) / 3) * 44,
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
              />
            ))}
          </svg>

          {/* Precision Alignment Markers */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <div className="absolute w-[1px] h-full bg-slate-200" />
             <div className="absolute h-[1px] w-full bg-slate-200" />
          </div>
        </div>
      </div>

      {/* Finishing Flash Transition */}
      <AnimatePresence>
        {isFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white z-[120]"
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingScreen;
