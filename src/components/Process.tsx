import { Calendar, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '001',
    step: 'step1',
    title: "Let's Get In Touch",
    description: "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas in even greater detail.",
    Icon: Calendar,
  },
  {
    number: '002',
    step: 'step2',
    title: 'Development & Implementation',
    description: "I'll develop the solution using modern software engineering practices, integrating AI/ML models and 3D components as needed. We'll iterate through development cycles until the system meets your requirements.",
    Icon: Code,
  },
  {
    number: '003',
    step: 'step3',
    title: 'Launch & Grow',
    description: "Your project goes live with a full handover. I provide ongoing support to ensure everything runs smoothly as your business scales.",
    Icon: Rocket,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="max-w-3xl mx-auto px-8">
      <p className="section-label mb-4">Process</p>
      <h2 className="font-serif text-4xl md:text-5xl mb-12 max-w-lg leading-snug">
        The strategy behind exceptional results
      </h2>

      <div className="space-y-6 max-w-2xl">
        {steps.map((step, i) => (
          <div key={i} className="border-[1px] border-white p-4 rounded-xl">
            <p className="text-xs font-sans mb-3 text-white">{step.step}</p>
            <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
            <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {step.description}
            </p>
            <step.Icon size={28} strokeWidth={1.5} style={{ color: 'hsl(var(--foreground))' }} />
            <p className="absolute bottom-4 right-6 text-xs font-sans" style={{ color: 'hsl(var(--muted-foreground))' }}>
              - {step.number}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Process;
