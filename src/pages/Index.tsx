import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ChatBot from "@/components/ChatBot";
import WorldLoader from "@/components/WorldLoader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-background relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <WorldLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
          <SkillsMarquee />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <TestimonialsSection />
          <ContactSection />
          <ChatBot />
        </motion.div>
      )}
    </main>
  );
};

export default Index;
