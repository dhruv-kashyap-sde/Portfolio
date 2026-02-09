import './SkillSection.css'
import SkillAnimation from '../utils/animations/SkillAnimation'

const SkillSection = () => {
  SkillAnimation();
  return (
    <div className=" main-text skills-container">
      <div className="skills-box italic-text">
        <h2>Frontend Development</h2>
        <ul>
          <li>
            <span>HTML</span> <span className="level italic-text">Advanced</span>
          </li>
          <li>
            <span>CSS</span> <span className="level italic-text">Advanced</span>
          </li>
          <li>
            <span>JavaScript</span> <span className="level italic-text">Advanced</span>
          </li>
          <li>
            <span>Tailwind</span> <span className="level italic-text">Intermediate</span>
          </li>
          <li>
            <span>React</span> <span className="level italic-text">Advanced</span>
          </li>
        </ul>
      </div>
      <hr className='divider' />
      <div className="skills-box-2 italic-text">
        <h2>Backend Development</h2>
        <ul>
          <li>
            <span>Node JS</span> <span className="level italic-text">Advanced</span>
          </li>
          <li>
            <span>ExpressJS</span> <span className="level italic-text">Advanced</span>
          </li>
          <li>
            <span>MySQL</span> <span className="level italic-text">Beginner</span>
          </li>
          <li>
            <span>MongoDB</span> <span className="level italic-text">Advanced</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SkillSection;
    

