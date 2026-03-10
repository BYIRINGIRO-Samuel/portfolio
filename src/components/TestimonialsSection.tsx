import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Testimonial data ─────────────────────────────────── */
const testimonials = [
  {
    id: 0,
    name: 'Amara K.',
    role: 'CTO, OrangeLeaf Tech',
    shortQuote: '"Innovative & Reliable!"',
    fullQuote: 'Working with Samuel transformed our entire frontend. Every interaction felt thoughtful and every animation felt alive. Truly innovative and reliable.',
    color: '#E87D2A',
    bubblePos: { bottom: '82%', left: '4%' },
  },
  {
    id: 1,
    name: 'David O.',
    role: 'Founder, EduBridge Africa',
    shortQuote: '"Empowering Education!"',
    fullQuote: 'Samuel built our learning platform in record time with a stunning UX. Students love it. The code is clean, the design is world class.',
    color: '#4A90D9',
    bubblePos: { bottom: '88%', left: '29%' },
  },
  {
    id: 2,
    name: 'Zara M.',
    role: 'CEO, Luminary Studios',
    shortQuote: '"Seamless & Creative!"',
    fullQuote: 'Every pixel was crafted with purpose! Samuel\'s attention to detail and creative flair turned our vision into something truly outstanding.',
    color: '#E05C3A',
    bubblePos: { bottom: '86%', left: '55%' },
  },
  {
    id: 3,
    name: 'Marcus T.',
    role: 'Co-founder, Sprout Ventures',
    shortQuote: '"Supporting My Startup!"',
    fullQuote: 'Samuel helped us launch faster, smarter and with a product our investors couldn\'t stop praising. He\'s our secret weapon.',
    color: '#5C9E5A',
    bubblePos: { bottom: '75%', left: '18%' },
  },
  {
    id: 4,
    name: 'Priya J.',
    role: 'Director, GreenField AgTech',
    shortQuote: '"Transforming Farming!"',
    fullQuote: 'Our agricultural app is now loved by thousands of farmers. Samuel delivered a product we are incredibly proud of. Outstanding work.',
    color: '#9B6DC5',
    bubblePos: { bottom: '72%', left: '68%' },
  },
];

/* ── Bokeh light dot ──────────────────────────────────── */
const BokehDot = ({ cx, cy, r, opacity, delay }: { cx: number; cy: number; r: number; opacity: number; delay: number }) => (
  <motion.circle
    cx={cx} cy={cy} r={r}
    fill={`rgba(255,200,100,${opacity})`}
    animate={{ opacity: [opacity, opacity * 0.4, opacity], r: [r, r * 1.15, r] }}
    transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

/* ── One character bust ───────────────────────────────── */
const Character = ({
  x, skin, hair, shirt, shirtColor2, hasGlasses, hasHat, hatColor, faceExpression, isActive, onClick
}: {
  x: number; skin: string; hair: string; shirt: string; shirtColor2?: string;
  hasGlasses?: boolean; hasHat?: boolean; hatColor?: string;
  faceExpression: 'smile' | 'laugh' | 'neutral';
  isActive: boolean; onClick: () => void;
}) => {
  const mouthPath = faceExpression === 'laugh'
    ? 'M -9 3 Q 0 12 9 3'
    : faceExpression === 'smile'
    ? 'M -7 2 Q 0 8 7 2'
    : 'M -6 2 Q 0 5 6 2';

  return (
    <motion.g
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      animate={{ y: isActive ? -8 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      {/* Glow ring when active */}
      {isActive && (
        <motion.ellipse
          cx={x} cy={310}
          rx={42} ry={8}
          fill="rgba(255,200,80,0.25)"
          animate={{ rx: [42, 50, 42] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {/* Body / shirt */}
      <ellipse cx={x} cy={320} rx={38} ry={55} fill={shirt} />
      {shirtColor2 && (
        <>
          <ellipse cx={x - 14} cy={298} rx={14} ry={30} fill={shirtColor2} opacity={0.7}/>
          <ellipse cx={x + 14} cy={298} rx={14} ry={30} fill={shirtColor2} opacity={0.7}/>
        </>
      )}
      {/* Collar */}
      <path d={`M ${x - 10} 268 L ${x} 285 L ${x + 10} 268`} fill="white" opacity={0.5} />

      {/* Neck */}
      <rect x={x - 8} y={252} width={16} height={22} rx={5} fill={skin} />

      {/* Head */}
      <ellipse cx={x} cy={232} rx={34} ry={36} fill={skin} />

      {/* Ears */}
      <ellipse cx={x - 34} cy={236} rx={8} ry={10} fill={skin} />
      <ellipse cx={x + 34} cy={236} rx={8} ry={10} fill={skin} />
      <ellipse cx={x - 34} cy={236} rx={5} ry={7} fill={skin} opacity={0.5} />
      <ellipse cx={x + 34} cy={236} rx={5} ry={7} fill={skin} opacity={0.5} />

      {/* Hair */}
      <ellipse cx={x} cy={210} rx={34} ry={22} fill={hair} />
      <ellipse cx={x} cy={200} rx={28} ry={16} fill={hair} />

      {/* Eyes */}
      <ellipse cx={x - 12} cy={228} rx={7} ry={8} fill="white" />
      <ellipse cx={x + 12} cy={228} rx={7} ry={8} fill="white" />
      <ellipse cx={x - 12} cy={229} rx={4.5} ry={5} fill="#1a0a00" />
      <ellipse cx={x + 12} cy={229} rx={4.5} ry={5} fill="#1a0a00" />
      <ellipse cx={x - 11} cy={227} rx={1.5} ry={2} fill="white" />
      <ellipse cx={x + 13} cy={227} rx={1.5} ry={2} fill="white" />

      {/* Eyebrows */}
      <path d={`M ${x - 18} 218 Q ${x - 12} 215 ${x - 6} 218`} stroke={hair} strokeWidth={2.5} fill="none" strokeLinecap="round" />
      <path d={`M ${x + 6} 218 Q ${x + 12} 215 ${x + 18} 218`} stroke={hair} strokeWidth={2.5} fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d={`M ${x - 3} 234 Q ${x} 242 ${x + 3} 234`} stroke={skin} strokeWidth={1.5} fill="none" opacity={0.6} />
      <ellipse cx={x} cy={240} rx={4} ry={2} fill={skin} opacity={0.4} />

      {/* Mouth */}
      <path d={`M ${x + mouthPath.split('M ')[1]}`} stroke="#5a2510" strokeWidth={2} fill="none" strokeLinecap="round" />
      {faceExpression === 'laugh' && (
        <path d={`M ${x - 9} ${3 + 228} Q ${x} ${12 + 228} ${x + 9} ${3 + 228}`}
          fill="white" opacity={0.9} />
      )}

      {/* Glasses */}
      {hasGlasses && (
        <g opacity={0.85}>
          <rect x={x - 22} y={222} width={16} height={12} rx={4} stroke="#333" strokeWidth={1.5} fill="rgba(120,180,255,0.15)" />
          <rect x={x + 6} y={222} width={16} height={12} rx={4} stroke="#333" strokeWidth={1.5} fill="rgba(120,180,255,0.15)" />
          <line x1={x - 6} y1={228} x2={x + 6} y2={228} stroke="#333" strokeWidth={1.5} />
          <line x1={x - 22} y1={228} x2={x - 34} y2={226} stroke="#333" strokeWidth={1.2} />
          <line x1={x + 22} y1={228} x2={x + 34} y2={226} stroke="#333" strokeWidth={1.2} />
        </g>
      )}

      {/* Hat */}
      {hasHat && (
        <g>
          <ellipse cx={x} cy={205} rx={38} ry={8} fill={hatColor} />
          <rect x={x - 26} y={178} width={52} height={28} rx={6} fill={hatColor} />
          <ellipse cx={x} cy={178} rx={26} ry={5} fill={hatColor} opacity={0.7} />
          <line x1={x - 22} y1={192} x2={x + 22} y2={192} stroke="black" strokeWidth={1} opacity={0.2} />
        </g>
      )}

      {/* Drink glass */}
      <g transform={`translate(${x - 16}, 295)`}>
        <path d="M 2 0 L 6 30 L 26 30 L 30 0 Z" fill="rgba(200,160,60,0.35)" stroke="rgba(255,255,255,0.3)" strokeWidth={1} />
        <rect x={4} y={2} width={24} height={8} rx={1} fill="rgba(255,200,80,0.15)" />
      </g>
    </motion.g>
  );
};

/* ── Speech bubble ────────────────────────────────────── */
const SpeechBubble = ({ text, color, active, onClick, style }: {
  text: string; color: string; active: boolean; onClick: () => void;
  style: React.CSSProperties;
}) => (
  <motion.div
    className="absolute z-20 cursor-pointer select-none"
    style={style}
    animate={{ y: active ? [0, -4, 0] : [0, -2, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    onClick={onClick}
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.96 }}
  >
    <div
      className="relative px-4 py-2.5 rounded-2xl shadow-xl text-center max-w-[130px]"
      style={{
        background: 'rgba(255,255,255,0.95)',
        border: `2px solid ${color}`,
        backdropFilter: 'blur(4px)',
        boxShadow: active ? `0 8px 32px ${color}55, 0 2px 8px rgba(0,0,0,0.18)` : '0 4px 16px rgba(0,0,0,0.18)',
      }}
    >
      <p className="text-[11px] font-black leading-tight" style={{ color: '#1a1a1a' }}>{text}</p>
      {/* Tail */}
      <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-4 h-3 overflow-hidden">
        <div className="w-4 h-4 bg-white rotate-45 border-b-2 border-r-2" style={{ borderColor: color, marginTop: '-8px' }} />
      </div>
      {/* Emoji decoration */}
      {active && (
        <motion.div
          className="absolute -top-3 -right-3 text-base"
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >✨</motion.div>
      )}
    </div>
  </motion.div>
);

/* ── Full testimonial modal ───────────────────────────── */
const TestimonialModal = ({ t, onClose }: { t: typeof testimonials[0]; onClose: () => void }) => (
  <motion.div
    className="absolute inset-0 z-50 flex items-center justify-center"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    <motion.div
      className="relative z-10 bg-[#1a1108] border rounded-2xl p-8 max-w-sm w-full mx-6 shadow-2xl"
      style={{ borderColor: t.color }}
      initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 30 }}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg" style={{ background: t.color }}>
          {t.name[0]}
        </div>
        <div>
          <p className="text-white font-black text-sm uppercase tracking-wider">{t.name}</p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
      <p className="text-white/80 text-sm leading-relaxed italic mb-5">"{t.fullQuote}"</p>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
      <button onClick={onClose} className="absolute top-3 right-4 text-white/30 hover:text-white text-xl font-black transition-colors">×</button>
    </motion.div>
  </motion.div>
);

/* ── Main Section ─────────────────────────────────────── */
const Testimonials = () => {
  const [active, setActive] = useState(2);
  const [modal, setModal] = useState<typeof testimonials[0] | null>(null);

  // Auto-cycle
  useEffect(() => {
    if (modal) return;
    const id = setInterval(() => setActive(a => (a + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [modal]);

  const onBubbleClick = (t: typeof testimonials[0]) => {
    setActive(t.id);
    setModal(t);
  };

  return (
    <section id="testimonials" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 overflow-hidden">

        {/* Header */}
        <div className="relative z-10 px-10 pt-10 pb-4 flex items-end justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30 mb-1 italic">Testimonials // FIELD_REPORTS</p>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
              What They<br /><span className="text-white/20">Say About Me</span>.
            </h2>
          </div>
          <p className="hidden md:block text-[9px] font-mono text-white/20 uppercase tracking-widest text-right">
            Click a bubble<br />to read more
          </p>
        </div>

        {/* Scene */}
        <div className="relative w-full" style={{ height: '460px' }}>

          {/* Speech bubbles */}
          {testimonials.map(t => (
            <SpeechBubble
              key={t.id}
              text={t.shortQuote}
              color={t.color}
              active={active === t.id}
              onClick={() => onBubbleClick(t)}
              style={t.bubblePos as React.CSSProperties}
            />
          ))}

          <svg viewBox="0 0 1200 460" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Bar background gradient */}
              <radialGradient id="barGlow" cx="50%" cy="80%" r="70%">
                <stop offset="0%" stopColor="#7a4210" />
                <stop offset="60%" stopColor="#3d1f08" />
                <stop offset="100%" stopColor="#1a0d04" />
              </radialGradient>
              {/* Wood table pattern */}
              <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7B4A1E" />
                <stop offset="30%" stopColor="#6B3D14" />
                <stop offset="60%" stopColor="#5C3210" />
                <stop offset="100%" stopColor="#4A280C" />
              </linearGradient>
              <linearGradient id="woodEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5A2B" />
                <stop offset="100%" stopColor="#3A1E08" />
              </linearGradient>
              {/* Ambient warm light */}
              <radialGradient id="ambientLight" cx="50%" cy="0%" r="80%">
                <stop offset="0%" stopColor="rgba(255,190,80,0.18)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              {/* Floor gradient */}
              <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2a1508" />
                <stop offset="100%" stopColor="#150a04" />
              </linearGradient>
              {/* Bottle shine */}
              <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
              </linearGradient>
            </defs>

            {/* ── Bar background ── */}
            <rect x="0" y="0" width="1200" height="460" fill="url(#barGlow)" />
            <rect x="0" y="0" width="1200" height="460" fill="url(#ambientLight)" />

            {/* Back wall panels */}
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x={i * 200} y={0} width={196} height={290} rx={2}
                fill={i % 2 === 0 ? 'rgba(60,25,8,0.8)' : 'rgba(50,20,6,0.8)'}
                stroke="rgba(255,200,100,0.06)" strokeWidth={1} />
            ))}

            {/* Back bar shelf */}
            <rect x="0" y="180" width="1200" height="14" rx={2} fill="#4a2808" />
            <rect x="0" y="185" width="1200" height="4" fill="rgba(255,200,100,0.1)" />

            {/* Bar bottles (background) */}
            {[60,130,200,270,340,880,950,1020,1090,1150].map((bx, i) => (
              <g key={i} transform={`translate(${bx}, 80)`}>
                <rect x={0} y={0} width={18} height={95} rx={4} fill={i % 3 === 0 ? '#2a5c1a' : i % 3 === 1 ? '#4a2808' : '#1a3a5c'} />
                <rect x={0} y={0} width={18} height={95} rx={4} fill="url(#bottleGrad)" />
                <rect x={4} y={-12} width={10} height={18} rx={3} fill={i % 3 === 0 ? '#2a5c1a' : i % 3 === 1 ? '#4a2808' : '#1a3a5c'} />
                <rect x={5} y={15} width={8} height={30} rx={1} fill="rgba(255,255,255,0.12)" />
              </g>
            ))}

            {/* Hanging warm lights */}
            {[180, 420, 600, 780, 1020].map((lx, i) => (
              <g key={i}>
                <line x1={lx} y1={0} x2={lx} y2={30} stroke="rgba(255,200,100,0.3)" strokeWidth={1} />
                <ellipse cx={lx} cy={40} rx={14} ry={18} fill="rgba(255,210,100,0.9)" />
                <ellipse cx={lx} cy={32} rx={6} ry={4} fill="rgba(255,240,180,0.95)" />
                <radialGradient id={`lg${i}`} cx="50%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="rgba(255,220,130,0.35)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                <ellipse cx={lx} cy={60} rx={90} ry={60} fill={`url(#lg${i})`} />
              </g>
            ))}

            {/* Bokeh dots (background blurs) */}
            <svg x="0" y="0" width="1200" height="460">
              <BokehDot cx={100} cy={50} r={18} opacity={0.12} delay={0} />
              <BokehDot cx={300} cy={80} r={12} opacity={0.08} delay={0.7} />
              <BokehDot cx={550} cy={40} r={22} opacity={0.1} delay={1.2} />
              <BokehDot cx={750} cy={70} r={15} opacity={0.09} delay={0.4} />
              <BokehDot cx={950} cy={55} r={20} opacity={0.11} delay={1.8} />
              <BokehDot cx={1100} cy={35} r={16} opacity={0.07} delay={0.9} />
            </svg>

            {/* Floor */}
            <rect x="0" y="380" width="1200" height="80" fill="url(#floorGrad)" />
            {/* Floor planks */}
            {[0,1,2,3].map(i => (
              <line key={i} x1="0" y1={385 + i * 12} x2="1200" y2={385 + i * 12}
                stroke="rgba(255,180,80,0.04)" strokeWidth={1} />
            ))}

            {/* ── TABLE ── */}
            {/* Table top ellipse */}
            <ellipse cx={600} cy={360} rx={440} ry={55} fill="url(#woodGrad)" />
            {/* Table top shine */}
            <ellipse cx={560} cy={342} rx={180} ry={18} fill="rgba(255,255,255,0.07)" />
            {/* Table edge */}
            <ellipse cx={600} cy={370} rx={440} ry={48} fill="url(#woodEdge)" opacity={0.8} />
            {/* Table wood grain lines */}
            {[-3,-1,1,3].map((offset, i) => (
              <ellipse key={i} cx={600} cy={360 + offset * 2} rx={430} ry={50}
                fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth={1} />
            ))}

            {/* ── GLASSES ON TABLE ── */}
            {[200, 350, 600, 820, 980].map((gx, i) => (
              <g key={i} transform={`translate(${gx}, 320)`}>
                <path d="M -12 0 L -8 42 L 8 42 L 12 0 Z" fill={`rgba(200,155,50,${0.35 + i * 0.05})`} stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
                {/* Foam head */}
                <ellipse cx={0} cy={2} rx={12} ry={5} fill="rgba(255,240,200,0.5)" />
                {/* Liquid highlight */}
                <path d="M -10 8 Q -8 6 -6 8" stroke="rgba(255,220,80,0.4)" strokeWidth={1.5} fill="none" />
                {/* Condensation drops */}
                <circle cx={-6} cy={22} r={1} fill="rgba(255,255,255,0.2)" />
                <circle cx={7} cy={30} r={0.8} fill="rgba(255,255,255,0.15)" />
              </g>
            ))}

            {/* ── CHARACTERS ── */}
            {/* 0: Amara — orange blazer, headwrap braids */}
            <Character x={155} skin="#7B4B2A" hair="#1a0a00"
              shirt="#D4621A" shirtColor2="#E87D2A"
              isActive={active === 0} onClick={() => onBubbleClick(testimonials[0])}
              faceExpression="smile" />
            {/* Headwrap */}
            <g>
              <ellipse cx={155} cy={204} rx={36} ry={24} fill="#E05C1A" />
              <path d="M 125 208 Q 140 190 155 195 Q 170 190 185 208" fill="#C04010" />
              <path d="M 148 192 Q 155 185 162 192" fill="#F07030" />
            </g>

            {/* 1: David — white shirt, glasses */}
            <Character x={338} skin="#5C3317" hair="#0a0500"
              shirt="#E8E8E8" shirtColor2="#D0D0D0"
              hasGlasses isActive={active === 1} onClick={() => onBubbleClick(testimonials[1])}
              faceExpression="neutral" />

            {/* 2: Zara — Center, bright top, laughing, natural hair big */}
            <Character x={600} skin="#7B4B22" hair="#0f0700"
              shirt="#E05C3A"
              isActive={active === 2} onClick={() => onBubbleClick(testimonials[2])}
              faceExpression="laugh" />
            {/* Big natural hair */}
            <ellipse cx={600} cy={195} rx={48} ry={36} fill="#0f0700" />
            <ellipse cx={580} cy={188} rx={30} ry={22} fill="#0f0700" />
            <ellipse cx={620} cy={188} rx={30} ry={22} fill="#0f0700" />
            <ellipse cx={600} cy={180} rx={38} ry={20} fill="#1a0d00" />

            {/* 3: Marcus — green jacket, hat */}
            <Character x={845} skin="#6B3A2A" hair="#1a0a00"
              shirt="#3A6E38" shirtColor2="#5C9E5A"
              hasHat hatColor="#C8A050"
              isActive={active === 3} onClick={() => onBubbleClick(testimonials[3])}
              faceExpression="smile" />

            {/* 4: Priya — far right, elegant, glasses */}
            <Character x={1042} skin="#4A2C17" hair="#0a0500"
              shirt="#6B35A0" shirtColor2="#9B6DC5"
              hasGlasses isActive={active === 4} onClick={() => onBubbleClick(testimonials[4])}
              faceExpression="smile" />

            {/* Table edge shadow overlay */}
            <ellipse cx={600} cy={415} rx={450} ry={22} fill="rgba(0,0,0,0.35)" />

            {/* Warm overall ambient overlay */}
            <rect x="0" y="0" width="1200" height="460" fill="rgba(180,80,0,0.04)" />
          </svg>

          {/* Modal overlay */}
          <AnimatePresence>
            {modal && (
              <TestimonialModal t={modal} onClose={() => setModal(null)} />
            )}
          </AnimatePresence>
        </div>

        {/* Bottom indicator dots */}
        <div className="flex items-center justify-center gap-2 pb-8 pt-2">
          {testimonials.map(t => (
            <motion.button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="rounded-full transition-all"
              animate={{
                width: active === t.id ? 28 : 8,
                background: active === t.id ? t.color : 'rgba(255,255,255,0.15)',
              }}
              style={{ height: 8 }}
            />
          ))}
        </div>

        {/* Client info strip */}
        <div className="px-10 pb-8 flex flex-wrap items-center gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => { setActive(t.id); setModal(t); }}
              className="flex items-center gap-2 text-left"
              animate={{ opacity: active === t.id ? 1 : 0.35 }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-black flex-shrink-0"
                style={{ background: t.color }}>
                {t.name[0]}
              </div>
              <div className="hidden md:block">
                <p className="text-[10px] font-black uppercase tracking-wide text-white leading-none">{t.name}</p>
                <p className="text-[8px] text-white/30 uppercase tracking-widest leading-none mt-0.5">{t.role}</p>
              </div>
            </motion.button>
          ))}
          <p className="ml-auto text-[9px] font-mono text-white/20 uppercase tracking-widest hidden lg:block">
            Click any bubble to read full story
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;