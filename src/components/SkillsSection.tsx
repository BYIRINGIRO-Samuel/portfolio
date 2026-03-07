import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    tag: "UI",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 88 },
      { name: "Svelte", level: 75 },
    ],
  },
  {
    title: "Backend",
    tag: "API",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python / FastAPI", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "Docker / K8s", level: 80 },
    ],
  },
  {
    title: "AI / ML",
    tag: "INT",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "LLMs / NLP", level: 88 },
      { name: "Computer Vision", level: 82 },
      { name: "MLOps", level: 78 },
    ],
  },
  {
    title: "3D Modeling",
    tag: "3D",
    skills: [
      { name: "Three.js / R3F", level: 88 },
      { name: "WebGL / GLSL", level: 80 },
      { name: "Blender", level: 75 },
      { name: "Unity", level: 82 },
      { name: "Blender Python", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-white py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            // Tech Stack
          </span>
          <h2 className="text-4xl text-black sm:text-5xl font-bold tracking-tight text-foreground mb-16">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-8 group hover:border-foreground/20 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg text-black font-semibold text-foreground">{cat.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-3 py-1">
                  {cat.tag}
                </span>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-mono text-xs text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.4 + ci * 0.1 + si * 0.05, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-foreground/60 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
