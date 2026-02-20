import "./ProjectSection.css";
import codequest from "../../assets/codequest.png";
import data from "../../assets/constant.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ProjectSection = () => {
  ProjectSectionAnimation();
  return (
    <>
      <div id="projects" className="project-section">
        <div className="project-heading">
          <h1 className="main-text">Selected <span className="italic-text">Projects</span></h1>
        </div>
        <div className="project-heading">

        <p className="main-text">
          Here's a curated selection showcasing my expertise and the achieved
          results.
        </p>
        </div>
        <div className="project-card-container">
          {data.map((project, index) => (
            <div className="project-card">
              <div className="project-image">
                <img src={project.images[0]} alt="codequest" />
              </div>
              <div className="project-details">
                <h2 className="main-text">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="badge-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </p>
                <div className="project-details-text">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <p>{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ProjectSectionAnimation = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-section",
        start: "top 70%",
        end: "top 10% ",
        // markers: true,
        scrub: 2,
      },
    });

    tl.add("start");
    tl.to(
      ".project-section .project-heading h1",
      {
        transform: "translateY(0%)",
        ease: "power1.out",
        duration: 2,
      },
      "start"
    );
    tl.to(
      ".project-section .project-heading p",
      {
        transform: "translateX(0%)",
        ease: "power1.out",
        duration: 2,
        opacity: 1,
      },
      "start"
    );
  });
};

export default ProjectSection;
