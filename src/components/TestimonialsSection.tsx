import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Testimonial Data ─────────────────────────────────── */
const testimonials = [
  {
    id: 'TRX-001',
    name: 'Amara K.',
    company: 'OrangeLeaf Tech',
    role: 'CTO',
    location: 'Nairobi, KE',
    quote: 'Samuel transformed our entire frontend architecture. Every interaction is highly performant and the code is incredibly clean. He operates at a level of technical excellence that is rare to find. A true engineering asset.',
    rating: 5,
  },
  {
    id: 'TRX-002',
    name: 'David O.',
    company: 'EduBridge Africa',
    role: 'Founder',
    location: 'Lagos, NG',
    quote: 'He built our learning platform in record time with a stunning UX. Students love it. The code is modular, the design is world-class, and deployment was flawless. Could not be happier.',
    rating: 5,
  },
  {
    id: 'TRX-003',
    name: 'Zara M.',
    company: 'Luminary Studios',
    role: 'CEO',
    location: 'Cape Town, ZA',
    quote: 'Every pixel was crafted with purpose. Samuel turned our vague vision into something truly outstanding — the kind of premium web experience that makes investors and clients take immediate notice.',
    rating: 5,
  },
  {
    id: 'TRX-004',
    name: 'Marcus T.',
    company: 'Sprout Ventures',
    role: 'Co-founder',
    location: 'London, UK',
    quote: 'Samuel helped us launch faster and smarter. He automated our workflows and shipped a gorgeous commercial platform. He is our secret weapon and an absolute professional to work with.',
    rating: 5,
  },
  {
    id: 'TRX-005',
    name: 'Priya J.',
    company: 'GreenField AgTech',
    role: 'Director',
    location: 'Kigali, RW',
    quote: 'Our application is now loved by thousands of users across the continent. Samuel delivered a highly scalable product we are incredibly proud of. Outstanding craftsmanship throughout the stack.',
    rating: 5,
  },
];

/* ── Hacker/Matrix Text Scramble Effect ───────────────── */
const ScrambleDecoder = ({ text, onComplete }: { text: string; onComplete: () => void }) => {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let iteration = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#';
    const duration = 25; // number of sweeping steps
    const step = Math.max(1, text.length / duration);

    const interval = setInterval(() => {
      setDisplay(
        text.split('')
          .map((letter, index) => {
            if (index < iteration) return text[index];
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration += step;
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
        if (onComplete) onComplete();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <span>{display}</span>;
};

/* ── Audio Waveform Visualizer ────────────────────────── */
const Waveform = ({ playing }: { playing: boolean }) => {
  return (
    <div className="flex items-end gap-[3px] h-8 opacity-80">
      {[...Array(14)].map((_, i) => {
        const r = () => Math.floor(Math.random() * 20) + 8;
        return (
          <motion.div
            key={i}
            className={`w-1.5 rounded-t-sm ${playing ? 'bg-green-500' : 'bg-white/20'}`}
            initial={{ height: 4 }}
            animate={{ height: playing ? [4, r(), r(), r(), 4] : 4 }}
            transition={{
              duration: 0.6 + Math.random() * 0.4,
              repeat: playing ? Infinity : 0,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

/* ── Main Component ─────────────────────────────────────── */
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isDecoding, setIsDecoding] = useState(true);
  const [manualMode, setManualMode] = useState(false);

  useEffect(() => {
    if (manualMode) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
      setIsDecoding(true);
    }, 8000);
    return () => clearInterval(id);
  }, [manualMode]);

  const handleSelect = (idx: number) => {
    if (idx === current) return;
    setManualMode(true);
    setCurrent(idx);
    setIsDecoding(true);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-6 md:px-12 py-12 lg:py-16 overflow-hidden">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 mb-2 italic">Testimonials // SECURE_UPLINK</p>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
              Client <span className="text-white/20">Transmissions</span>.
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
          
          {/* ── LEFT: Network Directory ── */}
          <div className="lg:w-1/3 flex flex-col gap-2 relative">
            {/* Connecting spine line */}
            <div className="absolute top-0 bottom-0 left-[15px] w-px bg-white/10" />

            {testimonials.map((node, idx) => {
              const active = current === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`relative flex items-center gap-6 p-4 rounded-xl transition-all duration-300 text-left overflow-hidden group
                    ${active ? 'bg-white/5 border border-white/10' : 'hover:bg-white/[0.02] border border-transparent'}
                  `}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Network Node Dot */}
                  <div className={`w-[11px] h-[11px] rounded-full z-10 border-[3px] border-[#0f0f0f] flex-shrink-0 transition-all duration-300 relative
                    ${active ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-white/20'}
                  `}>
                    {active && (
                      <span className="absolute inset-0 rounded-full border border-green-500 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Node Text */}
                  <div className="relative z-10">
                    <p className={`font-sans font-bold uppercase tracking-wide text-sm transition-colors duration-300
                      ${active ? 'text-white' : 'text-white/40'}
                    `}>
                      {node.name}
                    </p>
                    <p className={`font-mono text-[9px] uppercase tracking-widest mt-0.5 transition-colors
                      ${active ? 'text-green-400/80' : 'text-white/30'}
                    `}>
                      {node.company}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT: Decrypted Transmission Panel ── */}
          <div className="lg:w-2/3 border border-white/10 rounded-xl bg-[#111] relative overflow-hidden flex flex-col min-h-[420px]">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwxKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] pointer-events-none" />
            
            {/* Scanning line */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none z-0"
              animate={{ y: [-100, 500] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10 flex flex-col h-full p-6 md:p-10">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${isDecoding ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${isDecoding ? 'text-yellow-500' : 'text-green-500'}`}>
                    {isDecoding ? 'Decrypting Transmission...' : 'Secure Link Established'}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/30 truncate hidden md:block">
                  LINK: {t.id} - {t.location}
                </span>
              </div>

              {/* Sender Info */}
              <div className="flex-grow flex flex-col">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center font-mono font-black text-2xl text-white/80 shadow-inner rounded-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight leading-none mb-1.5">{t.name}</h3>
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider">{t.role} // {t.company}</p>
                  </div>
                </div>
                
                {/* Cipher Body */}
                <p className="font-sans text-lg md:text-[22px] text-white/80 leading-relaxed italic border-l-2 border-white/10 pl-5 min-h-[140px]">
                  "
                  <ScrambleDecoder key={current} text={t.quote} onComplete={() => setIsDecoding(false)} />
                  "
                </p>
              </div>

              {/* Footer / Telemetry */}
              <div className="border-t border-white/10 pt-5 mt-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] text-white/30 mb-2 uppercase tracking-widest">Satisfaction Level</p>
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < t.rating ? 'text-white' : 'text-white/20'}`}>★</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-end gap-4">
                  <div className="text-right hidden sm:block mb-1">
                    <p className="font-mono text-[8.5px] text-white/30 uppercase tracking-widest">Signal Status</p>
                    <p className={`font-mono text-[10px] font-bold uppercase tracking-widest ${isDecoding ? 'text-yellow-500' : 'text-green-500'}`}>
                      {isDecoding ? '0x8A FETCHING...' : '0xFA OPTIMAL'}
                    </p>
                  </div>
                  <Waveform playing={!isDecoding} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;