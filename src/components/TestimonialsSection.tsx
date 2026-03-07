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
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-8">
      <p className="section-label mb-4 text-black">Happy Clients</p>
      <h2 className="font-serif text-4xl text-black md:text-5xl mb-12 max-w-lg leading-snug">
        Beautiful words from clients I've worked with
      </h2>

      <div className="testimonial-card max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-sans font-semibold  text-black text-sm">{t.name}</p>
            <p className="font-sans text-xs text-black">{t.company}</p>
          </div>
        </div>

        <p className="font-sans text-sm leading-relaxed mb-8 text-black">
          {t.quote}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < t.rating ? 'currentColor' : 'none'}
                className='text-yellow-400'
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'hsl(var(--secondary))' }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'hsl(var(--secondary))' }}
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
              className="w-8 h-8 rounded-full border-2 object-cover"
              style={{ borderColor: 'hsl(var(--background))' }}
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-sans font-medium" style={{ borderColor: 'hsl(var(--background))', background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
            +
          </div>
        </div>
        <p className="font-sans text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Trusted by 5,000 + innovators worldwide
        </p>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
