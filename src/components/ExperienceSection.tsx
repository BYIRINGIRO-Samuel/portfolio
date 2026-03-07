import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2025 — Present",
    role: "Senior Full-Stack & AI Engineer",
    company: "Freelance / Studio",
    description: "Building intelligent systems, development tools, and 3D experiences for global clients.",
    type: "work",
  },
  {
    year: "2023 — 2025",
    role: "AI Engineer & Tech Lead",
    company: "Stealth AI Startup",
    description: "Led development of LLM-powered products, managed engineering team of 6.",
    type: "work",
  },
  {
    year: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "Digital Agency",
    description: "Built high-performance web applications and real-time dashboards for enterprise clients.",
    type: "work",
  },
  {
    year: "2019 — 2021",
    role: "B.Sc. Computer Science",
    company: "University",
    description: "Specialized in AI/ML and computer graphics. Graduated with honors.",
    type: "education",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-light bg-background py-32 px-6 noise-overlay" ref={ref}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            // Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-foreground border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-1 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.role}</h3>
                  <p className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">{item.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <span className={`inline-block mt-3 font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-border ${
                    item.type === "education" ? "text-muted-foreground" : "text-foreground/70"
                  }`}>
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
