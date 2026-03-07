import HeroSection from "@/components/HeroSection";
import SkillsMarquee from "@/components/SkillsMarquee";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ServicesSection from "@/components/ServicesSection";
import LabSection from "@/components/LabSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import Process from "@/components/Process";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <SkillsMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <LabSection />
      <Process/>
      <TestimonialsSection />
      <BlogSection />
      <FAQ/>
      <ContactSection />
    </main>
  );
};

export default Index;
