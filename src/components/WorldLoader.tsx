import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            if (onComplete) setTimeout(onComplete, 1200);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/95 backdrop-blur-xl"
        >
          {/* Main Loader Container */}
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
            
            {/* Background Tech Elements (Inspired by Testimonials) */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl" />
            <div className="absolute w-full h-[0.5px] bg-white/10 top-1/2 -translate-y-1/2" />
            <div className="absolute h-full w-[0.5px] bg-white/10 left-1/2 -translate-x-1/2" />
            
            {/* Corner Markers */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />

            {/* Radar Pulse */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-64 h-64 border border-blue-500/20 rounded-full"
            />

            {/* SVG Loader Logic */}
            <svg viewBox="0 0 100 100" className="w-48 h-48 md:w-64 md:h-64 relative z-10">
              {/* Static Background Ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.5"
              />

              {/* Clockwise Rider */}
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="url(#blue-gradient)"
                strokeWidth="2"
                strokeDasharray="20 180"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                strokeLinecap="round"
              />

              {/* Anti-Clockwise Rider */}
              <motion.circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="url(#pink-gradient)"
                strokeWidth="1.5"
                strokeDasharray="40 160"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                strokeLinecap="round"
              />

              {/* Progress Circle (Inspired by Testimonials) */}
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="188.5"
                initial={{ strokeDashoffset: 188.5 }}
                animate={{ strokeDashoffset: 188.5 - (188.5 * progress) / 100 }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f472b6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Information */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={Math.floor(progress / 20)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-1"
                >
                  <span className="text-white/40 font-mono text-[8px] tracking-[0.4em] uppercase">
                    {progress < 40 ? "Initializing" : progress < 80 ? "Optimizing" : "Finalizing"}
                  </span>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex items-baseline gap-1">
                <span className="text-white font-black text-4xl md:text-5xl tracking-tighter italic">
                  {Math.floor(progress)}
                </span>
                <span className="text-white/30 text-xs font-mono">%</span>
              </div>
              
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: progress > (i + 1) * 20 ? 1 : 0.2,
                      scale: progress > (i + 1) * 20 ? [1, 1.2, 1] : 1
                    }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
