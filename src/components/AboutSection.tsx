import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "12", label: "AI Models Deployed" },
  { value: "∞", label: "Curiosity" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light bg-black py-32 px-6 noise-overlay" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left: Text */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              // About
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Building at the
              <br />
              intersection of
              <br />
              <span className="text-muted-foreground">AI & software engineering</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              I craft intelligent AI/ML systems and 3D models. From training neural networks 
              to building 3D visualizations, I bridge the gap between cutting-edge technology 
              and practical applications.
            </p>
          </div>

          {/* Right: Metrics */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors duration-500"
              >
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
