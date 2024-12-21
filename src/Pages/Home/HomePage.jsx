import React from "react";
import Footer from "../../utils/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import SkillSection from "../../components/SkillSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillSection/>
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
