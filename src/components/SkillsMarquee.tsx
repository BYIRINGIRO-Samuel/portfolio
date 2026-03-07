const skills = [
  "React", "TypeScript", "Python", "TensorFlow", "Next.js", "Node.js",
  "Three.js", "Figma", "PostgreSQL", "Docker", "AWS", "Blender",
  "PyTorch", "GraphQL", "Rust", "WebGL", "Kubernetes", "Svelte",
];

const SkillsMarquee = () => {
  return (
    <section className="py-8 border-y border-border overflow-hidden bg-background">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="mx-8 font-mono text-sm text-muted-foreground uppercase tracking-[0.2em] flex-shrink-0"
            >
              {skill}
              <span className="ml-8 text-border">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
