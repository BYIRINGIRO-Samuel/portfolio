import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <SkillsMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
