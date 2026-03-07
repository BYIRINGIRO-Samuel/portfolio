import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Building LLM-Powered Agents That Actually Work",
    category: "AI",
    date: "Feb 2025",
    readTime: "8 min",
  },
  {
    title: "The Architecture Behind Real-Time 3D on the Web",
    category: "Development",
    date: "Jan 2025",
    readTime: "6 min",
  },
  {
    title: "Design Systems for AI-Native Products",
    category: "Design",
    date: "Dec 2024",
    readTime: "5 min",
  },
  {
    title: "From Prototype to Production: MLOps Lessons Learned",
    category: "AI",
    date: "Nov 2024",
    readTime: "10 min",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-light bg-background py-32 px-6 noise-overlay" ref={ref}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            // Insights
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16">
            Blog & Thoughts
          </h2>
        </motion.div>

        <div className="space-y-1">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group flex items-center justify-between py-6 border-b border-border hover:border-foreground/20 transition-colors duration-300"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-foreground font-medium group-hover:tracking-wide transition-all duration-300 truncate pr-4">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="font-mono text-[10px] text-muted-foreground hidden sm:block">{post.readTime}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
