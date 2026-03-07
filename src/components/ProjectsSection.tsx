import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Code2, Palette, Box, ArrowUpRight } from "lucide-react";

type Category = "all" | "ai" | "fullstack" | "3d";

const categories: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: null },
  { key: "ai", label: "AI / ML", icon: <Brain className="w-3 h-3" /> },
  { key: "fullstack", label: "Full-Stack", icon: <Code2 className="w-3 h-3" /> },
  { key: "3d", label: "3D", icon: <Box className="w-3 h-3" /> },
];

const projects = [
  {
    title: "Neural Synthesis Engine",
    problem: "Creative teams lacked real-time AI content generation tools.",
    solution: "Built a custom transformer-based system for instant creative asset generation.",
    category: "ai" as Category,
    tags: ["PyTorch", "CUDA", "FastAPI"],
    year: "2025",
  },
  {
    title: "Quantum Dashboard",
    problem: "Enterprise teams struggled with fragmented analytics across tools.",
    solution: "Unified analytics platform with real-time visualization and predictive insights.",
    category: "fullstack" as Category,
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
  },
  {
    title: "CodeGen AI",
    problem: "Developers spent too much time writing repetitive code.",
    solution: "AI-powered code generation tool that analyzes project context and generates optimized code snippets.",
    category: "ai" as Category,
    tags: ["Python", "Transformers", "FastAPI"],
    year: "2024",
  },
  {
    title: "Spatial Data Viz",
    problem: "Scientific datasets were difficult to explore in 2D.",
    solution: "Interactive 3D visualization engine for geospatial and scientific data.",
    category: "3d" as Category,
    tags: ["Three.js", "WebGL", "GLSL"],
    year: "2024",
  },
  {
    title: "AutoML Pipeline",
    problem: "ML model training required too much manual configuration.",
    solution: "End-to-end automated ML platform with smart hyperparameter optimization.",
    category: "ai" as Category,
    tags: ["Python", "TensorFlow", "K8s"],
    year: "2024",
  },
  {
    title: "Vertex Platform",
    problem: "3D collaboration was siloed and lacked real-time capabilities.",
    solution: "Full-stack SaaS for 3D model collaboration with live multi-user editing.",
    category: "fullstack" as Category,
    tags: ["Next.js", "WebSocket", "Three.js"],
    year: "2024",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-background py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            // Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-12">
            Projects
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === cat.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="group glass rounded-xl p-8 hover:border-foreground/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {project.year}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:tracking-wide transition-all duration-300 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/50 mr-2">Problem →</span>
                    {project.problem}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/50 mr-2">Solution →</span>
                    {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
