import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
    >
      {/* CENTERED CONSTRUCT ONLY */}
      <div className="relative flex flex-col items-center">
        
        {/* HOLOGRAPHIC CUBE LOADER (3D-ish SVG) */}
        <div className="relative w-32 h-32 mb-12">
          
          {/* Animated Orbitals around the core */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotate: 0 }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20%] border border-white/5 rounded-full"
            />
          ))}

          {/* THE CORE BOX */}
          <motion.svg 
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            animate={{ rotateY: 360, rotateX: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {/* Front Face Wireframe */}
            <motion.rect 
              x="25" y="25" width="50" height="50" 
              fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3"
            />
            {/* Inner Glowing Core */}
            <motion.rect 
              x="35" y="35" width="30" height="30"
              fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1"
              animate={{ 
                scale: [0.8, 1.1, 0.8],
                opacity: [0.3, 0.7, 0.3],
                strokeWidth: [0.5, 2, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Perspective Lines */}
            <line x1="25" y1="25" x2="10" y2="10" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
            <line x1="75" y1="25" x2="90" y2="10" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
            <line x1="25" y1="75" x2="10" y2="90" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
            <line x1="75" y1="75" x2="90" y2="90" stroke="white" strokeWidth="0.2" strokeOpacity="0.2" />
          </motion.svg>
        </div>

        {/* HUD TEXT BELOW CORE */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/40 ml-[0.6em]">
              B.Samuel::Initializing
            </span>
            <div className="h-px w-8 bg-white/10" />
          </div>

          <div className="flex flex-col items-center">
            <motion.span 
              key={progress}
              className="text-4xl font-black text-white italic tracking-tighter"
            >
              {Math.round(progress)}
              <span className="text-sm font-normal not-italic text-white/20 ml-1">%</span>
            </motion.span>
            
            {/* Minimalist Under-bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full mt-4 overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-white shadow-[0_0_10px_white]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
    </motion.div>
  );
};

export default LoadingScreen;
