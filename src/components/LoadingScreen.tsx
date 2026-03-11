import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        // Random increments for a more "loading" feel
        const increment = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-mono"
    >
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full scale-[1.5] opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* THE LOADER CORE */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          
          {/* Animated Concentric Rings */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotate: 0 }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ 
                duration: 10 + i * 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                width: 100 + i * 40 + 'px',
                height: 100 + i * 40 + 'px',
                borderWidth: '1px',
                borderStyle: i === 3 ? 'dashed' : 'solid',
              }}
              className="absolute rounded-full border-white/10"
            />
          ))}

          {/* Primary Progress Ring */}
          <svg className="w-56 h-56 transform -rotate-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <circle
              cx="112"
              cy="112"
              r="100"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              fill="transparent"
            />
            <motion.circle
              cx="112"
              cy="112"
              r="100"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="628" // 2 * PI * r
              animate={{ strokeDashoffset: 628 - (628 * progress) / 100 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>

          {/* Floating Data Points on Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 p-4"
          >
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] absolute top-0 left-1/2 -translate-x-1/2" />
          </motion.div>

          {/* Percentage Counter */}
          <div className="absolute flex flex-col items-center">
            <motion.span 
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-white tracking-tighter"
            >
              {progress}
            </motion.span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Process</span>
          </div>

        </div>

        {/* IDENTITY REVEAL (SUBTLE) */}
        <div className="mt-20 flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-white/20" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Byiringiro Samuel</span>
            <div className="h-px w-8 bg-white/20" />
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.span 
              key={progress < 30 ? 'init' : progress < 70 ? 'load' : 'ready'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]"
            >
              {progress < 30 ? 'Initializing Architecture' : progress < 70 ? 'Analyzing Systems' : 'Deployment Ready'}
            </motion.span>
          </AnimatePresence>
        </div>

      </div>

      {/* Finishing Grid Flash */}
      <AnimatePresence>
        {progress === 100 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 bg-white"
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default LoadingScreen;
