import React from "react";
import Footer from "../../utils/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import SkillSection from "../../components/SkillSection";
import Effect from "../../components/ProjectSection/Effect";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillSection/>
      <Effect/>
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
