import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Testimonial data ─────────────────────────────────── */
const testimonials = [
  {
    id: 0,
    name: 'Amara K.',
    role: 'CTO, OrangeLeaf Tech',
    shortQuote: '"Innovative & Reliable!"',
    fullQuote: 'Working with Samuel transformed our entire frontend. Every interaction felt thoughtful and every animation felt alive. Truly innovative and reliable work.',
    stars: 5,
  },
  {
    id: 1,
    name: 'David O.',
    role: 'Founder, EduBridge Africa',
    shortQuote: '"Empowering Education!"',
    fullQuote: 'Samuel built our learning platform in record time with a stunning UX. Students love it. The code is clean, the design is world class. Could not be happier.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Zara M.',
    role: 'CEO, Luminary Studios',
    shortQuote: '"Seamless & Creative!"',
    fullQuote: 'Every pixel was crafted with purpose. Samuel turned our vision into something truly outstanding — the kind of work that makes investors take notice.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Marcus T.',
    role: 'Co-founder, Sprout Ventures',
    shortQuote: '"Supporting My Startup!"',
    fullQuote: 'Samuel helped us launch faster and smarter. Our investors could not stop praising the product. He is our secret weapon and a true professional.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Priya J.',
    role: 'Director, GreenField AgTech',
    shortQuote: '"Transforming Farming!"',
    fullQuote: 'Our agricultural app is now loved by thousands of farmers. Samuel delivered a product we are incredibly proud of. Outstanding craftsmanship throughout.',
    stars: 5,
  },
];

/* ── Character seat positions around the table (perspective view) ─ */
// Table center: cx=600, cy=310. Ellipse rx=300, ry=120
// Positions around at angles: top(90°), top-right(30°), bottom-right(330°), bottom-left(210°), top-left(150°)
const seatPositions = [
  { angle: 270, scale: 0.78, label: 'top' },      // 0 — top center (far)
  { angle: 340, scale: 0.85, label: 'top-right' }, // 1 — top right
  { angle: 40,  scale: 1.00, label: 'bot-right' }, // 2 — bottom right (nearest)
  { angle: 140, scale: 1.00, label: 'bot-left' },  // 3 — bottom left (nearest)
  { angle: 200, scale: 0.85, label: 'top-left' },  // 4 — top left
];

const TABLE_CX = 590;
const TABLE_CY = 310;
const TABLE_RX = 310;
const TABLE_RY = 118;

function seatXY(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: TABLE_CX + TABLE_RX * Math.cos(rad),
    y: TABLE_CY + TABLE_RY * Math.sin(rad),
  };
}

/* ── Single character (head + shoulders, seated) ───────── */
const CharacterBust = ({
  cx, cy, sc, skinTone, hairStyle, hasGlasses, hasHat, hatFill,
  shirtFill, isActive, onClick,
}: {
  cx: number; cy: number; sc: number;
  skinTone: string; hairStyle: 'short' | 'afro' | 'braids' | 'fade' | 'natural';
  hasGlasses?: boolean; hasHat?: boolean; hatFill?: string;
  shirtFill: string; isActive: boolean; onClick: () => void;
}) => {
  const s = sc;
  return (
    <motion.g
      onClick={onClick}
      style={{ cursor: 'pointer', transformOrigin: `${cx}px ${cy}px` }}
      animate={{ y: isActive ? -10 : 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      {/* Active glow under character */}
      {isActive && (
        <motion.ellipse cx={cx} cy={cy + 42 * s} rx={36 * s} ry={9 * s}
          fill="rgba(255,255,255,0.12)"
          animate={{ rx: [36 * s, 44 * s, 36 * s] }}
          transition={{ duration: 1.8, repeat: Infinity }} />
      )}

      {/* Shoulders / body */}
      <ellipse cx={cx} cy={cy + 44 * s} rx={40 * s} ry={22 * s} fill={shirtFill} opacity={0.95} />
      {/* Shirt collar */}
      <path d={`M ${cx - 10 * s} ${cy + 26 * s} L ${cx} ${cy + 34 * s} L ${cx + 10 * s} ${cy + 26 * s}`}
        fill="rgba(255,255,255,0.18)" />

      {/* Neck */}
      <rect x={cx - 7 * s} y={cy + 14 * s} width={14 * s} height={14 * s} rx={5 * s} fill={skinTone} />

      {/* Head */}
      <ellipse cx={cx} cy={cy} rx={26 * s} ry={29 * s} fill={skinTone} />

      {/* Hair */}
      {hairStyle === 'afro' && (
        <ellipse cx={cx} cy={cy - 14 * s} rx={32 * s} ry={26 * s} fill="#111" />
      )}
      {hairStyle === 'short' && (
        <ellipse cx={cx} cy={cy - 20 * s} rx={26 * s} ry={14 * s} fill="#111" />
      )}
      {hairStyle === 'braids' && (
        <>
          <ellipse cx={cx} cy={cy - 22 * s} rx={27 * s} ry={16 * s} fill="#1a1a1a" />
          <ellipse cx={cx - 18 * s} cy={cy} rx={9 * s} ry={24 * s} fill="#1a1a1a" opacity={0.8} />
          <ellipse cx={cx + 18 * s} cy={cy} rx={9 * s} ry={24 * s} fill="#1a1a1a" opacity={0.8} />
        </>
      )}
      {hairStyle === 'fade' && (
        <ellipse cx={cx} cy={cy - 22 * s} rx={26 * s} ry={12 * s} fill="#0a0a0a" />
      )}
      {hairStyle === 'natural' && (
        <>
          <ellipse cx={cx} cy={cy - 16 * s} rx={30 * s} ry={22 * s} fill="#111" />
          <ellipse cx={cx - 16 * s} cy={cy - 10 * s} rx={18 * s} ry={18 * s} fill="#111" />
          <ellipse cx={cx + 16 * s} cy={cy - 10 * s} rx={18 * s} ry={18 * s} fill="#111" />
        </>
      )}

      {/* Ears */}
      <ellipse cx={cx - 26 * s} cy={cy + 2 * s} rx={6 * s} ry={8 * s} fill={skinTone} />
      <ellipse cx={cx + 26 * s} cy={cy + 2 * s} rx={6 * s} ry={8 * s} fill={skinTone} />

      {/* Eyes */}
      <ellipse cx={cx - 9 * s} cy={cy} rx={5 * s} ry={5.5 * s} fill="white" />
      <ellipse cx={cx + 9 * s} cy={cy} rx={5 * s} ry={5.5 * s} fill="white" />
      <ellipse cx={cx - 9 * s} cy={cy + 0.5 * s} rx={3.2 * s} ry={3.5 * s} fill="#111" />
      <ellipse cx={cx + 9 * s} cy={cy + 0.5 * s} rx={3.2 * s} ry={3.5 * s} fill="#111" />
      <ellipse cx={cx - 8 * s} cy={cy - 1 * s} rx={1.2 * s} ry={1.4 * s} fill="white" />
      <ellipse cx={cx + 10 * s} cy={cy - 1 * s} rx={1.2 * s} ry={1.4 * s} fill="white" />

      {/* Eyebrows */}
      <path d={`M ${cx - 14 * s} ${cy - 8 * s} Q ${cx - 9 * s} ${cy - 11 * s} ${cx - 4 * s} ${cy - 8 * s}`}
        stroke="#111" strokeWidth={1.8 * s} fill="none" strokeLinecap="round" />
      <path d={`M ${cx + 4 * s} ${cy - 8 * s} Q ${cx + 9 * s} ${cy - 11 * s} ${cx + 14 * s} ${cy - 8 * s}`}
        stroke="#111" strokeWidth={1.8 * s} fill="none" strokeLinecap="round" />

      {/* Nose */}
      <ellipse cx={cx} cy={cy + 6 * s} rx={3 * s} ry={2 * s} fill={skinTone} opacity={0.5} />

      {/* Smile */}
      <path d={`M ${cx - 7 * s} ${cy + 11 * s} Q ${cx} ${cy + 17 * s} ${cx + 7 * s} ${cy + 11 * s}`}
        stroke="#3a1a08" strokeWidth={1.8 * s} fill="none" strokeLinecap="round" />

      {/* Glasses */}
      {hasGlasses && (
        <g opacity={0.9}>
          <rect x={cx - 19 * s} y={cy - 4 * s} width={14 * s} height={10 * s} rx={3 * s}
            stroke="rgba(255,255,255,0.5)" strokeWidth={1.3} fill="rgba(200,230,255,0.1)" />
          <rect x={cx + 5 * s} y={cy - 4 * s} width={14 * s} height={10 * s} rx={3 * s}
            stroke="rgba(255,255,255,0.5)" strokeWidth={1.3} fill="rgba(200,230,255,0.1)" />
          <line x1={cx - 5 * s} y1={cy + 1 * s} x2={cx + 5 * s} y2={cy + 1 * s}
            stroke="rgba(255,255,255,0.4)" strokeWidth={1.2} />
        </g>
      )}

      {/* Hat */}
      {hasHat && (
        <g>
          <ellipse cx={cx} cy={cy - 22 * s} rx={30 * s} ry={8 * s} fill={hatFill ?? '#fff'} />
          <rect x={cx - 20 * s} y={cy - 44 * s} width={40 * s} height={24 * s} rx={5 * s} fill={hatFill ?? '#fff'} />
        </g>
      )}
    </motion.g>
  );
};

/* ── Speech bubble ────────────────────────────────────── */
const Bubble = ({ text, x, y, active, onClick }: {
  text: string; x: number; y: number; active: boolean; onClick: () => void;
}) => (
  <motion.g onClick={onClick} style={{ cursor: 'pointer' }}
    animate={{ y: active ? [0, -5, 0] : [0, -2, 0] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>

    {/* Bubble body */}
    <rect x={x - 60} y={y - 30} width={120} height={46} rx={12}
      fill={active ? 'white' : 'rgba(255,255,255,0.13)'}
      stroke={active ? 'white' : 'rgba(255,255,255,0.25)'}
      strokeWidth={active ? 2 : 1} />

    {/* Bubble tail */}
    <polygon points={`${x},${y + 18} ${x - 8},${y + 16} ${x + 8},${y + 16}`}
      fill={active ? 'white' : 'rgba(255,255,255,0.13)'} />

    {/* Text — split into two lines max */}
    <text x={x} y={y - 12} textAnchor="middle"
      fill={active ? '#0f0f0f' : 'rgba(255,255,255,0.7)'}
      fontSize={10} fontWeight={active ? 800 : 600} fontFamily="sans-serif">
      {text.length > 18 ? text.slice(0, 18) : text}
    </text>
    {text.length > 18 && (
      <text x={x} y={y + 4} textAnchor="middle"
        fill={active ? '#0f0f0f' : 'rgba(255,255,255,0.7)'}
        fontSize={10} fontWeight={active ? 800 : 600} fontFamily="sans-serif">
        {text.slice(18)}
      </text>
    )}
  </motion.g>
);

/* ── Modal for full testimonial ────────────────────────── */
const Modal = ({ t, onClose }: { t: typeof testimonials[0]; onClose: () => void }) => (
  <motion.div className="absolute inset-0 z-50 flex items-center justify-center"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    onClick={onClose}>
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
    <motion.div className="relative z-10 bg-[#111] border border-white/20 rounded-2xl p-8 max-w-sm w-full mx-6 shadow-2xl"
      initial={{ scale: 0.88, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, y: 20 }}
      onClick={e => e.stopPropagation()}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-black font-black text-lg">
          {t.name[0]}
        </div>
        <div>
          <p className="text-white font-black text-sm uppercase tracking-wider">{t.name}</p>
          <p className="text-white/30 text-[10px] uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
      <p className="text-white/70 text-sm leading-relaxed italic mb-5">"{t.fullQuote}"</p>
      <div className="flex gap-1 mb-1">
        {[...Array(t.stars)].map((_, i) => (
          <span key={i} className="text-white text-sm">★</span>
        ))}
      </div>
      <button onClick={onClose}
        className="absolute top-3 right-4 text-white/20 hover:text-white text-2xl font-black transition-colors leading-none">
        ×
      </button>
    </motion.div>
  </motion.div>
);

/* ── Character config ──────────────────────────────────── */
const chars = [
  { skin: '#7B4B2A', hair: 'braids' as const, shirt: '#2a2a2a', hasGlasses: false, hasHat: false },
  { skin: '#5C3317', hair: 'short' as const, shirt: '#1e1e1e', hasGlasses: true,  hasHat: false },
  { skin: '#7B4B22', hair: 'natural' as const, shirt: '#252525', hasGlasses: false, hasHat: false },
  { skin: '#6B3A2A', hair: 'fade' as const, shirt: '#1a1a1a', hasGlasses: false, hasHat: true, hatFill: '#ddd' },
  { skin: '#4A2C17', hair: 'afro' as const, shirt: '#222',    hasGlasses: true,  hasHat: false },
];

/* ── Bubble positions (near each character's head) ─────── */
const bubbleOffsets = [
  { dx: -10, dy: -90 },  // top center — bubble goes up-left
  { dx: 70,  dy: -80 },  // top-right — bubble right
  { dx: 80,  dy: -100 }, // bottom-right — bubble right-up
  { dx: -80, dy: -100 }, // bottom-left — bubble left-up
  { dx: -70, dy: -80 },  // top-left — bubble left
];

/* ── Main Component ─────────────────────────────────────── */
const Testimonials = () => {
  const [active, setActive] = useState(2);
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
        <div className="relative z-10 px-10 pt-10 pb-2 flex items-end justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20 mb-1 italic">Testimonials // FIELD_REPORTS</p>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">
              What They<br /><span className="text-white/15">Say About Me</span>.
            </h2>
          </div>
          <p className="hidden md:block text-[9px] font-mono text-white/20 uppercase tracking-widest text-right pb-1">
            Click any bubble<br />for full story
          </p>
        </div>

        {/* ── SVG Scene ── */}
        <div className="relative" style={{ height: 480 }}>
          <svg viewBox="0 0 1200 480" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              {/* Floor */}
              <radialGradient id="floor" cx="50%" cy="60%" r="70%">
                <stop offset="0%" stopColor="#1c1c1c" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </radialGradient>
              {/* Table top */}
              <radialGradient id="tableTop" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#141414" />
              </radialGradient>
              {/* Table edge */}
              <linearGradient id="tableEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#333" />
                <stop offset="100%" stopColor="#111" />
              </linearGradient>
              {/* Ceiling light cone */}
              <radialGradient id="lightCone" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.07)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.02)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              {/* Chair */}
              <linearGradient id="chairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#222" />
                <stop offset="100%" stopColor="#141414" />
              </linearGradient>
            </defs>

            {/* ── Floor ── */}
            <rect x="0" y="0" width="1200" height="480" fill="url(#floor)" />

            {/* Subtle floor grid lines (perspective) */}
            {[-4,-3,-2,-1,0,1,2,3,4].map((i) => (
              <line key={i}
                x1={600 + i * 300} y1={0}
                x2={600 + i * 80} y2={480}
                stroke="rgba(255,255,255,0.025)" strokeWidth={1} />
            ))}
            {[1,2,3,4,5].map(i => (
              <line key={i} x1={0} y1={i * 96} x2={1200} y2={i * 96}
                stroke="rgba(255,255,255,0.02)" strokeWidth={1} />
            ))}

            {/* Ceiling spotlight */}
            <ellipse cx={600} cy={0} rx={500} ry={350} fill="url(#lightCone)" />

            {/* ── CHAIRS (drawn before table so table overlaps) ── */}
            {seatPositions.map((sp, i) => {
              const { x, y } = seatXY(sp.angle);
              const s = sp.scale;
              // Chair back arc — positioned slightly behind the character
              const backY = y + 52 * s;
              return (
                <g key={i}>
                  {/* Chair seat */}
                  <ellipse cx={x} cy={y + 62 * s} rx={34 * s} ry={14 * s} fill="url(#chairGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
                  {/* Chair back */}
                  <path
                    d={`M ${x - 28 * s} ${backY} Q ${x} ${backY - 36 * s} ${x + 28 * s} ${backY}`}
                    fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={3 * s} strokeLinecap="round"
                  />
                  {/* Chair legs visible */}
                  <line x1={x - 24 * s} y1={y + 68 * s} x2={x - 28 * s} y2={y + 90 * s}
                    stroke="rgba(255,255,255,0.1)" strokeWidth={2} />
                  <line x1={x + 24 * s} y1={y + 68 * s} x2={x + 28 * s} y2={y + 90 * s}
                    stroke="rgba(255,255,255,0.1)" strokeWidth={2} />
                </g>
              );
            })}

            {/* ── TABLE EDGE (bottom cylinder side) ── */}
            <ellipse cx={TABLE_CX} cy={TABLE_CY + 18} rx={TABLE_RX} ry={TABLE_RY + 10}
              fill="url(#tableEdge)" opacity={0.9} />

            {/* ── TABLE TOP ── */}
            <ellipse cx={TABLE_CX} cy={TABLE_CY} rx={TABLE_RX} ry={TABLE_RY}
              fill="url(#tableTop)" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} />

            {/* Table top sheen */}
            <ellipse cx={TABLE_CX - 40} cy={TABLE_CY - 30} rx={160} ry={40}
              fill="rgba(255,255,255,0.04)" />

            {/* Table centre piece — small white diamond */}
            <rect x={TABLE_CX - 10} y={TABLE_CY - 10} width={20} height={20}
              rx={2} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)"
              strokeWidth={1} transform={`rotate(45, ${TABLE_CX}, ${TABLE_CY})`} />
            <circle cx={TABLE_CX} cy={TABLE_CY} r={4} fill="rgba(255,255,255,0.15)" />

            {/* Glasses / cups on table */}
            {seatPositions.map((sp, i) => {
              const { x, y } = seatXY(sp.angle);
              // Place cup slightly toward table center from each seat
              const cx = x + (TABLE_CX - x) * 0.35;
              const cy2 = y + (TABLE_CY - y) * 0.35;
              const s = sp.scale * 0.75;
              return (
                <g key={i}>
                  {/* Cup */}
                  <path d={`M ${cx - 8 * s} ${cy2 - 2 * s} L ${cx - 6 * s} ${cy2 + 14 * s} L ${cx + 6 * s} ${cy2 + 14 * s} L ${cx + 8 * s} ${cy2 - 2 * s} Z`}
                    fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
                  {/* Liquid surface */}
                  <ellipse cx={cx} cy={cy2} rx={8 * s} ry={3 * s} fill="rgba(255,255,255,0.08)" />
                </g>
              );
            })}

            {/* ── CHARACTERS ── drawn largest last so they overlap properly ── */}
            {/* Sort by y to paint back-to-front */}
            {[...seatPositions.map((sp, i) => ({ sp, i }))]
              .sort((a, b) => seatXY(a.sp.angle).y - seatXY(b.sp.angle).y)
              .map(({ sp, i }) => {
                const { x, y } = seatXY(sp.angle);
                const c = chars[i];
                return (
                  <CharacterBust
                    key={i}
                    cx={x} cy={y - 12 * sp.scale}
                    sc={sp.scale}
                    skinTone={c.skin}
                    hairStyle={c.hair}
                    shirtFill={c.shirt}
                    hasGlasses={c.hasGlasses}
                    hasHat={c.hasHat}
                    hatFill={(c as any).hatFill}
                    isActive={active === i}
                    onClick={() => { setActive(i); setModal(testimonials[i]); }}
                  />
                );
              })}

            {/* ── SPEECH BUBBLES ── */}
            {seatPositions.map((sp, i) => {
              const { x, y } = seatXY(sp.angle);
              const off = bubbleOffsets[i];
              return (
                <Bubble
                  key={i}
                  text={testimonials[i].shortQuote}
                  x={x + off.dx}
                  y={y + off.dy}
                  active={active === i}
                  onClick={() => { setActive(i); setModal(testimonials[i]); }}
                />
              );
            })}
          </svg>

          {/* Modal */}
          <AnimatePresence>
            {modal && <Modal t={modal} onClose={() => setModal(null)} />}
          </AnimatePresence>
        </div>

        {/* ── Bottom strip ── */}
        <div className="px-10 pb-8 flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
          {testimonials.map((t, i) => (
            <motion.button key={i}
              onClick={() => { setActive(i); setModal(t); }}
              className="flex items-center gap-2"
              animate={{ opacity: active === i ? 1 : 0.3 }}
              whileHover={{ opacity: 0.8 }}>
              <div className="w-7 h-7 rounded-full border flex items-center justify-center text-[11px] font-black"
                style={{ borderColor: active === i ? 'white' : 'rgba(255,255,255,0.15)' }}>
                {t.name[0]}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-[10px] font-black uppercase tracking-wide text-white leading-none">{t.name}</p>
                <p className="text-[8px] text-white/30 uppercase tracking-widest mt-0.5">{t.role}</p>
              </div>
            </motion.button>
          ))}

          {/* Progress dots */}
          <div className="ml-auto flex gap-1.5">
            {testimonials.map((_, i) => (
              <motion.button key={i}
                onClick={() => setActive(i)}
                className="rounded-full"
                animate={{ width: active === i ? 24 : 7, background: active === i ? '#fff' : 'rgba(255,255,255,0.15)' }}
                style={{ height: 7 }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;