import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Cpu, Code, Zap } from "lucide-react";

const capabilities = [
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Systems Architecture",
    description: "Distributed systems, microservices, and scalable cloud infrastructure.",
    code: "fn deploy() -> Result<(), Error>",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Machine Intelligence",
    description: "Custom models, NLP pipelines, and computer vision systems.",
    code: "model.fit(X_train, epochs=100)",
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full-Stack Development",
    description: "End-to-end application development from backend APIs to frontend interfaces.",
    code: "app.get('/api', handler)",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "3D & Visualization",
    description: "Real-time rendering, spatial computing, and data visualization.",
    code: "scene.add(new Mesh(geo, mat))",
  },
];

const LabSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light bg-background py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            // Digital Lab
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Capabilities
          </h2>
          <p className="text-muted-foreground max-w-md mb-16">
            The tools and disciplines I work with to turn ideas into reality.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group bg-card border border-border rounded-xl p-8 hover:border-foreground/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-foreground">{cap.icon}</div>
                <h3 className="font-semibold text-foreground">{cap.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {cap.description}
              </p>
              <div className="font-mono text-xs text-muted-foreground bg-secondary/50 rounded-md px-4 py-2.5 border border-border group-hover:border-foreground/10 transition-colors">
                <span className="text-foreground/40 mr-2">→</span>
                {cap.code}
                <span className="animate-code-blink ml-0.5 text-foreground">|</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabSection;
