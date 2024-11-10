import React from "react";
import Footer from "../../utils/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import Sidebar from "../../components/Sidebar/Sidebar";
import MouseFollower from "../../utils/MouseFollower";
import SmoothScrolling from "../../utils/SmoothScrolling";

const HomePage = () => {
  return (
    <>

          <MouseFollower />
          <Sidebar />
          <HeroSection />
          <ProjectSection />
          <AboutSection />
          <ContactSection />
          <Footer />
    </>
  );
};

export default HomePage;
