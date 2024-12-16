import "./ProjectSection.css";
import { Link } from "react-router-dom"; 
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
        <Link target="_blank" to={`https://codequest-frontend.onrender.com/`} className="project">
            <h3>CodeQuest</h3>
            <p>
              2024
            </p>
        </Link>
        <Link target="_blank" to={`https://github.com/dhruv-kashyap-sde/ANZ-products`} className="project">
            <h3>ANZ Products</h3>
            <p>
              2024
            </p>
        </Link>
        <Link target="_blank" to={`https://github.com/dhruv-kashyap-sde/AIO_Calculator`} className="project">
            <h3>AIO</h3>
            <p>
              2022
            </p>
        </Link>
          <button className="main-text basic-button">Show All</button>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
