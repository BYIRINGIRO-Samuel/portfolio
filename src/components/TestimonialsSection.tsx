import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Chasli Thompson',
    company: 'Vertex Technologies',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    quote: '"From concept to execution, the designs exceeded our expectations in every way. They are stunning, user-friendly, and strategically crafted for engagement and conversions."',
    rating: 4,
  },
  {
    name: 'Marcus Rivera',
    company: 'NovaBrand Studio',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    quote: '"Working with Samuel was a game-changer. The attention to detail and creative vision brought our brand to life in ways we never imagined possible."',
    rating: 5,
  },
  {
    name: 'Sofia Chen',
    company: 'Luminary Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    quote: '"Delivered ahead of schedule and beyond scope. The UX improvements increased our conversions by 40%. Truly exceptional work."',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans">
      <div className="relative w-full max-w-7xl bg-[#0f0f0f] rounded-xl md:rounded-2xl text-white shadow-2xl z-10 px-8 py-12 md:px-16 lg:py-20 overflow-hidden">
        
        <div className="max-w-3xl mx-auto">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mb-2 italic">Testimonials // FEEDBACK</p>
          <h2 className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase leading-none mb-8 max-w-lg">
            Beautiful words from <br/> <span className="text-white/20">clients I've worked with</span>
          </h2>

          <div className="testimonial-card max-w-2xl bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
              <div>
                <p className="font-sans font-black italic uppercase tracking-tighter text-white text-sm">{t.name}</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-white/40">{t.company}</p>
              </div>
            </div>

            <p className="font-sans text-sm md:text-base leading-relaxed mb-8 text-gray-300 italic">
              {t.quote}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? 'currentColor' : 'none'}
                    className={i < t.rating ? 'text-white' : 'text-white/10'}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white hover:text-black"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white hover:text-black"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-3 mt-10">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <img
                  key={i}
                  src={t.avatar}
                  alt={t.name}
                  className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
                />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] flex items-center justify-center text-[10px] font-black bg-white/10">
                +
              </div>
            </div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 italic">
              Trusted by 5,000 + innovators worldwide
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
