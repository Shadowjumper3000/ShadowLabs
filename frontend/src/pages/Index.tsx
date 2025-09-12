
import React, { useEffect } from "react";
import Header from "@/components/Header";
// If using file-based routing (e.g. with Vite or Next.js), the /projects page will be available automatically.
// If not, you may need to add a route in your router configuration.
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    document.title = "David Hoerz | Software Developer";
  }, []);

  return (
    <div className="bg-navy text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
