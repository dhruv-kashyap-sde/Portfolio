import "./ProjectSection.css";
import ProjectSectionAnimation from "../../utils/animations/ProjectSectionAnimation";

const ProjectSection = () => {
  ProjectSectionAnimation();

  return (
    <>
      <div id="projects" class="main3 main-text">
        <div class="project-text">
          <p>
            Recent <span className="italic-text">Projects</span>
          </p>
        </div>
        <div class="project-container">
        <div className="project">
            <h3>Project Title</h3>
            <p>
              2021
            </p>
        </div>
        <div className="project">
            <h3>Project Title</h3>
            <p>
              2021
            </p>
        </div>
        <div className="project">
            <h3>Project Title</h3>
            <p>
              2021
            </p>
        </div>
          <button className="main-text basic-button">Show All</button>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
