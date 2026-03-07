import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Brain, Box, Settings } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web & App Development",
    description: "High-performance, scalable web applications built with modern frameworks and cloud-native architecture.",
    features: ["React / Next.js", "API Design", "Cloud Infrastructure"],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Solutions",
    description: "Custom machine learning models, LLM integrations, and intelligent automation pipelines.",
    features: ["Custom Models", "LLM Integration", "Data Pipelines"],
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "3D Development",
    description: "Interactive 3D models, visualizations, and immersive experiences built with modern web technologies.",
    features: ["Three.js / WebGL", "3D Modeling", "AR/VR Integration"],
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Consulting & Automation",
    description: "Technical strategy, architecture reviews, workflow automation, and team mentoring.",
    features: ["Tech Strategy", "Code Reviews", "Process Automation"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-background py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            // Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-md mb-16">
            End-to-end solutions from concept to deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group glass rounded-xl p-8 hover:border-foreground/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-foreground mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
