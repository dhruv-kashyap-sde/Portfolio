import React from "react";
import Footer from "../../utils/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import HeroSection from "../../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
