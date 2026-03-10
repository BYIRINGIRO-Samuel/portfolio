import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Testimonial data ─────────────────────────────────── */
const testimonials = [
  {
    id: 0,
    name: 'Amara K.',
    role: 'CTO, OrangeLeaf Tech',
    shortQuote1: '"Innovative',
    shortQuote2: '& Reliable!"',
    fullQuote: 'Working with Samuel transformed our entire frontend. Every interaction felt thoughtful and every animation felt alive. Truly innovative and reliable work.',
    stars: 5,
  },
  {
    id: 1,
    name: 'David O.',
    role: 'Founder, EduBridge',
    shortQuote1: '"Empowering',
    shortQuote2: 'Education!"',
    fullQuote: 'Samuel built our learning platform in record time with a stunning UX. Students love it. The code is clean, the design is world class. Could not be happier.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Zara M.',
    role: 'CEO, Luminary',
    shortQuote1: '"Seamless',
    shortQuote2: '& Creative!"',
    fullQuote: 'Every pixel was crafted with purpose. Samuel turned our vision into something truly outstanding — the kind of work that makes investors take notice.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Marcus T.',
    role: 'Co-founder, Sprout',
    shortQuote1: '"Supporting',
    shortQuote2: 'My Startup!"',
    fullQuote: 'Samuel helped us launch faster and smarter. Our investors could not stop praising the product. He is our secret weapon and a true professional.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Priya J.',
    role: 'Director, GreenField',
    shortQuote1: '"Transforming',
    shortQuote2: 'Farming!"',
    fullQuote: 'Our agricultural app is now loved by thousands of farmers. Samuel delivered a product we are incredibly proud of. Outstanding craftsmanship throughout.',
    stars: 5,
  },
];

/* ── Geometric / Abstract Characters ───────────────────── */
const CharacterProfile = ({
  cx, cy, s, facingRight, skinTone, shirtFill, hairStyle, isActive, onClick
}: {
  cx: number; cy: number; s: number; facingRight: boolean;
  skinTone: string; shirtFill: string; hairStyle: number;
  isActive: boolean; onClick: () => void;
}) => {
  const dir = facingRight ? 1 : -1;
  return (
    <motion.g
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      animate={{ y: isActive ? -6 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Active highlight */}
      {isActive && (
        <motion.ellipse cx={cx} cy={cy + 40 * s} rx={30 * s} ry={8 * s}
          fill="rgba(255,255,255,0.15)"
          animate={{ rx: [30 * s, 35 * s, 30 * s] }}
          transition={{ duration: 1.5, repeat: Infinity }} />
      )}

      {/* Body / Shoulders */}
      <path d={`M ${cx - 20 * s * dir} ${cy + 42 * s} Q ${cx} ${cy + 15 * s} ${cx + 25 * s * dir} ${cy + 42 * s}`}
        fill={shirtFill} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
      
      {/* Head */}
      <ellipse cx={cx} cy={cy} rx={16 * s} ry={20 * s} fill={skinTone} />
      
      {/* Nose */}
      <path d={`M ${cx + 14 * s * dir} ${cy - 2 * s} L ${cx + 19 * s * dir} ${cy + 4 * s} L ${cx + 14 * s * dir} ${cy + 5 * s}`}
        fill={skinTone} />

      {/* Hair Patterns */}
      {hairStyle === 1 && (
        <path d={`M ${cx - 16 * s} ${cy} Q ${cx - 20 * s} ${cy - 22 * s} ${cx} ${cy - 24 * s} Q ${cx + 20 * s} ${cy - 22 * s} ${cx + 14 * s} ${cy - 8 * s} Z`} fill="#111" />
      )}
      {hairStyle === 2 && (
        <ellipse cx={cx - 4 * s * dir} cy={cy - 16 * s} rx={18 * s} ry={12 * s} fill="#0a0a0a" />
      )}
      {hairStyle === 3 && (
        <>
          <ellipse cx={cx} cy={cy - 12 * s} rx={22 * s} ry={18 * s} fill="#151515" />
          <ellipse cx={cx - 10 * s * dir} cy={cy - 6 * s} rx={12 * s} ry={12 * s} fill="#151515" />
        </>
      )}

      {/* Eye */}
      <circle cx={cx + 8 * s * dir} cy={cy - 2 * s} r={2.5 * s} fill="white" />
      <circle cx={cx + 9 * s * dir} cy={cy - 2 * s} r={1 * s} fill="#111" />
      
      {/* Ear */}
      <ellipse cx={cx - 4 * s * dir} cy={cy + 2 * s} rx={4 * s} ry={5 * s} fill={skinTone} opacity={0.8} />

      {/* Glasses optionally could be added; skipped for minimalism */}
    </motion.g>
  );
};

const NpcServer = ({ cx, cy, s }: { cx: number; cy: number; s: number }) => (
  <g>
    <path d={`M ${cx - 16 * s} ${cy + 36 * s} Q ${cx} ${cy + 15 * s} ${cx + 16 * s} ${cy + 36 * s}`} fill="#1a1a1a" />
    <path d={`M ${cx - 12 * s} ${cy + 36 * s} L ${cx - 6 * s} ${cy + 20 * s} L ${cx + 6 * s} ${cy + 20 * s} L ${cx + 12 * s} ${cy + 36 * s}`} fill="#e0e0e0" opacity={0.2} />
    <ellipse cx={cx} cy={cy} rx={12 * s} ry={16 * s} fill="#4A2C17" />
    <path d={`M ${cx - 12 * s} ${cy - 2 * s} Q ${cx} ${cy - 16 * s} ${cx + 12 * s} ${cy - 2 * s}`} fill="#111" />
  </g>
);


/* ── Bubble ────────────────────────────────────── */
const Bubble = ({ text1, text2, x, y, active, onClick }: {
  text1: string; text2: string; x: number; y: number; active: boolean; onClick: () => void;
}) => (
  <motion.g onClick={onClick} style={{ cursor: 'pointer' }}
    animate={{ y: active ? [0, -4, 0] : [0, -2, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
    <rect x={-50} y={-42} width={100} height={38} rx={8}
      fill={active ? 'white' : 'rgba(30,30,30,0.85)'}
      stroke={active ? 'white' : 'rgba(255,255,255,0.15)'}
      strokeWidth={active ? 2 : 1}
      transform={`translate(${x}, ${y})`} />
    <polygon points={`${x},${y - 5} ${x - 6},${y - 12} ${x + 6},${y - 12}`}
      fill={active ? 'white' : 'rgba(30,30,30,0.85)'} />
    <text x={x} y={y - 28} textAnchor="middle"
      fill={active ? '#0f0f0f' : 'rgba(255,255,255,0.8)'}
      fontSize={9.5} fontWeight={active ? 800 : 500} fontFamily="sans-serif">
      {text1}
    </text>
    <text x={x} y={y - 15} textAnchor="middle"
      fill={active ? '#0f0f0f' : 'rgba(255,255,255,0.8)'}
      fontSize={9.5} fontWeight={active ? 800 : 500} fontFamily="sans-serif">
      {text2}
    </text>
  </motion.g>
);

/* ── Modal ────────────────────────────────────────── */
const Modal = ({ t, onClose }: { t: typeof testimonials[0]; onClose: () => void }) => (
  <motion.div className="absolute inset-0 z-50 flex items-center justify-center"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    onClick={onClose}>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    <motion.div className="relative z-10 bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm w-full mx-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,1)]"
      initial={{ scale: 0.9, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 15 }}
      onClick={e => e.stopPropagation()}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-black text-lg">
          {t.name[0]}
        </div>
        <div>
          <p className="text-white font-black text-xs uppercase tracking-wider">{t.name}</p>
          <p className="text-white/40 text-[9px] uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
      <p className="text-white/80 text-sm leading-relaxed italic mb-5">"{t.fullQuote}"</p>
      <div className="flex gap-1 mb-1">
        {[...Array(t.stars)].map((_, i) => (
          <span key={i} className="text-white/90 text-sm">★</span>
        ))}
      </div>
      <button onClick={onClose}
        className="absolute top-4 right-5 text-white/30 hover:text-white text-xl font-black transition-colors leading-none">
        ×
      </button>
    </motion.div>
  </motion.div>
);

/* ── Seats Data ──────────────────────────────────────── */
// Focused scene width ~ 700. (250 to 950)
const seating = [
  // Table 1 (Front Left)
  { cx: 380, cy: 370, sc: 1.15, right: true,  charIdx: 0 },
  { cx: 500, cy: 370, sc: 1.15, right: false, charIdx: 1 },
  // Table 2 (Front Right)
  { cx: 700, cy: 370, sc: 1.15, right: true,  charIdx: 2 },
  { cx: 820, cy: 370, sc: 1.15, right: false, charIdx: 3 },
  // Table 3 (Mid Left)
  { cx: 420, cy: 280, sc: 0.90, right: true,  charIdx: 4 },
];

const charProps = [
  { skinTone: '#7B4B2A', hairStyle: 3, shirtFill: '#2a2a2a' },
  { skinTone: '#5C3317', hairStyle: 1, shirtFill: '#1a1a1a' },
  { skinTone: '#7B4B22', hairStyle: 2, shirtFill: '#222' },
  { skinTone: '#6B3A2A', hairStyle: 1, shirtFill: '#333' },
  { skinTone: '#4A2C17', hairStyle: 3, shirtFill: '#1f1f1f' },
];

const bubbleOffsets = [
  { dx: -20, dy: -35 },
  { dx: 20,  dy: -35 },
  { dx: -20, dy: -35 },
  { dx: 20,  dy: -35 },
  { dx: -15, dy: -30 },
];


/* ── Main Component ─────────────────────────────────────── */
const Testimonials = () => {
  const [active, setActive] = useState(1);
  const [modal, setModal] = useState<typeof testimonials[0] | null>(null);

  useEffect(() => {
    if (modal) return;
    const id = setInterval(() => setActive(a => (a + 1) % 5), 3500);
    return () => clearInterval(id);
  }, [modal]);

  return (
    <section id="testimonials" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 overflow-hidden">

        {/* Header */}
        <div className="relative z-10 px-6 md:px-10 pt-10 pb-0 flex items-end justify-between pointer-events-none">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 mb-2 italic">Testimonials // REVIEWS</p>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
              Client<br /><span className="text-white/20">Stories</span>.
            </h2>
          </div>
          <p className="hidden md:block text-[9px] font-mono text-white/20 uppercase tracking-widest text-right pb-1">
            Immersive view<br />Select a bubble
          </p>
        </div>

        {/* ── Scene ── */}
        <div className="relative w-full overflow-hidden" style={{ height: 440 }}>
          <svg viewBox="0 0 1200 440" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="ambLight" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="rgba(255, 190, 80, 0.04)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
              <linearGradient id="wall" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#141414" />
                <stop offset="100%" stopColor="#080808" />
              </linearGradient>
            </defs>

            {/* Background Wall */}
            <rect x={0} y={0} width={1200} height={440} fill="url(#wall)" />
            <rect x={0} y={0} width={1200} height={440} fill="url(#ambLight)" />

            {/* Framed photos on wall */}
            <g opacity={0.3}>
              <rect x={350} y={50} width={40} height={50} fill="none" stroke="white" strokeWidth={1.5} />
              <rect x={355} y={55} width={30} height={40} fill="white" opacity={0.1} />
              <polygon points="355,85 365,75 375,82 385,72 385,95 355,95" fill="white" opacity={0.2} /> {/* Subtle mountain/gorilla symbolic */}
              
              <rect x={410} y={65} width={36} height={36} fill="none" stroke="white" strokeWidth={1.5} />
              <circle cx={428} cy={83} r={10} fill="white" opacity={0.15} /> {/* Sun/basket pattern symbol */}
              
              <rect x={760} y={55} width={46} height={60} fill="none" stroke="white" strokeWidth={1.5} />
              <polygon points="765,105 780,80 790,95 801,75 801,110 765,110" fill="white" opacity={0.15} />
            </g>

            {/* ── Bar area (Back) ── */}
            {/* Shelves */}
            <rect x={510} y={60} width={180} height={6} fill="#1a1a1a" />
            <rect x={510} y={100} width={180} height={6} fill="#1a1a1a" />
            
            {/* Bottles */}
            {[520,530,545,560,568,605,620,635,650,670].map((bx, i) => (
              <g key={i}>
                <rect x={bx} y={100 - (18 + i%5*4)} width={6} height={18 + i%5*4} fill={`rgba(255,${200-i*10},${150+i*5},0.15)`} />
                <rect x={bx+1} y={100 - (24 + i%5*4)} width={4} height={6} fill="rgba(255,255,255,0.1)" />
              </g>
            ))}

            {/* Server */}
            <NpcServer cx={600} cy={160} s={0.8} />

            {/* Bar Counter */}
            <rect x={480} y={180} width={240} height={40} fill="#111" />
            <rect x={475} y={176} width={250} height={4} fill="#222" />

            {/* ── Floor separator ── */}
            <line x1={0} y1={220} x2={1200} y2={220} stroke="rgba(255,255,255,0.03)" strokeWidth={2} />
            <line x1={0} y1={260} x2={1200} y2={260} stroke="rgba(255,255,255,0.02)" strokeWidth={1} />
            <line x1={0} y1={310} x2={1200} y2={310} stroke="rgba(255,255,255,0.015)" strokeWidth={1} />
            <line x1={0} y1={370} x2={1200} y2={370} stroke="rgba(255,255,255,0.01)" strokeWidth={1} />

            {/* ── Mid Tables (Row 2) ── */}
            {/* Mid Left Table */}
            <g transform="translate(460, 290)">
              <rect x={-50} y={-10} width={100} height={20} rx={4} fill="#161616" stroke="rgba(255,255,255,0.05)" />
              <rect x={-8} y={10} width={16} height={30} fill="#0d0d0d" />
              {/* Cup */}
              <rect x={-15} y={-18} width={8} height={12} rx={1} fill="rgba(255,255,255,0.1)" />
              <rect x={5} y={-16} width={8} height={10} rx={1} fill="rgba(255,255,255,0.08)" />
            </g>
            {/* Mid Right Table (Empty) */}
            <g transform="translate(740, 290)">
              <rect x={-50} y={-10} width={100} height={20} rx={4} fill="#161616" stroke="rgba(255,255,255,0.05)" />
              <rect x={-8} y={10} width={16} height={30} fill="#0d0d0d" />
              {/* Plant pot */}
              <path d="M -10 -10 L 10 -10 L 8 0 L -8 0 Z" fill="#111" />
              <ellipse cx={0} cy={-12} rx={6} ry={8} fill="rgba(255,255,255,0.05)" />
            </g>

            {/* ── Mid Character ── */}
            <CharacterProfile cx={seating[4].cx} cy={seating[4].cy} s={seating[4].sc} facingRight={seating[4].right}
              {...charProps[seating[4].charIdx]} isActive={active === seating[4].charIdx} onClick={() => { setActive(seating[4].charIdx); setModal(testimonials[seating[4].charIdx]); }} />

            {/* ── Front Tables (Row 1) ── */}
            {/* Front Left Table */}
            <g transform="translate(440, 390)">
              <rect x={-60} y={-12} width={120} height={24} rx={4} fill="#1a1a1a" stroke="rgba(255,255,255,0.08)" />
              <rect x={-10} y={12} width={20} height={40} fill="#0a0a0a" />
              {/* Cups */}
              <rect x={-20} y={-22} width={10} height={14} rx={1.5} fill="rgba(255,255,255,0.12)" />
              <rect x={10} y={-20} width={10} height={12} rx={1.5} fill="rgba(255,255,255,0.1)" />
            </g>
            {/* Front Right Table */}
            <g transform="translate(760, 390)">
              <rect x={-60} y={-12} width={120} height={24} rx={4} fill="#1a1a1a" stroke="rgba(255,255,255,0.08)" />
              <rect x={-10} y={12} width={20} height={40} fill="#0a0a0a" />
              <rect x={-5} y={-24} width={8} height={18} rx={2} fill="rgba(255,255,255,0.08)" />
              <rect x={-8} y={-12} width={10} height={6} fill="#ccc" opacity={0.2} /> 
            </g>

            {/* ── Front Characters ── */}
            {[0, 1, 2, 3].map(i => {
              const seat = seating[i];
              const c = charProps[seat.charIdx];
              return (
                <CharacterProfile key={i} cx={seat.cx} cy={seat.cy} s={seat.sc} facingRight={seat.right}
                  {...c} isActive={active === seat.charIdx} onClick={() => { setActive(seat.charIdx); setModal(testimonials[seat.charIdx]); }} />
              );
            })}

            {/* ── Foreground dark vignette ── */}
            <rect x="0" y="400" width="1200" height="40" fill="url(#wall)" opacity={0.8} />

            {/* ── Speech Bubbles ── */}
            {seating.map((seat, i) => {
              const test = testimonials[seat.charIdx];
              const off = bubbleOffsets[i];
              return (
                <Bubble key={i} text1={test.shortQuote1} text2={test.shortQuote2}
                  x={seat.cx + off.dx} y={seat.cy + off.dy} active={active === seat.charIdx}
                  onClick={() => { setActive(seat.charIdx); setModal(test); }} />
              );
            })}
          </svg>

          {/* Modal */}
          <AnimatePresence>
            {modal && <Modal t={modal} onClose={() => setModal(null)} />}
          </AnimatePresence>
        </div>

        {/* ── Bottom Section ── */}
        <div className="px-6 md:px-10 pb-8 flex flex-wrap items-center gap-3 border-t border-white/5 pt-5 relative z-10 bg-[#0f0f0f]">
          {testimonials.map((t, i) => (
            <motion.button key={i}
              onClick={() => { setActive(i); setModal(t); }}
              className="flex items-center gap-2"
              animate={{ opacity: active === i ? 1 : 0.4 }}
              whileHover={{ opacity: 0.8 }}>
              <div className="w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-black"
                style={{ borderColor: active === i ? 'white' : 'rgba(255,255,255,0.2)' }}>
                {t.name[0]}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-[9px] font-black uppercase tracking-wide text-white leading-none">{t.name}</p>
                <p className="text-[7.5px] text-white/30 uppercase tracking-widest mt-0.5">{t.role.split(',')[0]}</p>
              </div>
            </motion.button>
          ))}

          <div className="ml-auto flex gap-1.5">
            {testimonials.map((_, i) => (
              <motion.button key={i}
                onClick={() => setActive(i)}
                className="rounded-full"
                animate={{ width: active === i ? 20 : 6, background: active === i ? '#fff' : 'rgba(255,255,255,0.2)' }}
                style={{ height: 6 }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;