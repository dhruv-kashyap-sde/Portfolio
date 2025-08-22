import React from "react";
import Footer from "../../utils/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import SkillSection from "../../components/SkillSection";
import Effect from "../../components/ProjectSection/Effect";
import ProjectSection from "../../components/ProjectSection/ProjectSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillSection/>
      {/* <Effect/> */}
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
