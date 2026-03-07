import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs.',
  },
  {
    q: 'Do you provide revisions?',
    a: 'Yes, I offer up to 3 rounds of revisions for each project phase to ensure the final result perfectly matches your vision.',
  },
  {
    q: 'How do I start working with you?',
    a: 'Simply reach out through the contact form below. I\'ll get back to you within 24 hours to schedule a discovery call.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'Pricing depends on project scope and complexity. After our initial call, I\'ll provide a detailed proposal with transparent pricing.',
  },
  {
    q: 'How long does a project take?',
    a: 'Typical projects range from 2–8 weeks depending on scope. I\'ll give you a realistic timeline during our initial consultation.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-8">
      <p className="section-label mb-4">FAQ'S</p>
      <h2 className="font-serif text-4xl md:text-5xl mb-12 max-w-lg leading-snug">
        Your concerns, addressed with clarity
      </h2>

      <div className="space-y-3 max-w-2xl">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'hsl(var(--surface))' }}
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-sans font-medium text-sm">{faq.q}</span>
              {open === i ? (
                <ChevronUp size={16} style={{ color: 'hsl(var(--muted-foreground))' }} className="flex-shrink-0" />
              ) : (
                <ChevronDown size={16} style={{ color: 'hsl(var(--muted-foreground))' }} className="flex-shrink-0" />
              )}
            </button>
            {open === i && (
              <div className="px-5 pb-4">
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQ;
