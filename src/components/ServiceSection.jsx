import React, { useState } from "react";
import './ServiceSection.css'

const ServiceSection = () => {
  const [onHover, setOnHover] = useState(false);
  return (
    <section className="main2">
      <div className="services" style={{backgroundColor:"#00bc97"}}>
        <h1>My Skills...</h1>
      </div>
      <div onMouseOver={() => setOnHover(true)} className="cards">
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        <div className="card">
          <h3>Skill 1</h3>
        </div>
        { onHover ? <h1>and adding more</h1> : ""}
      </div>
    </section>
  );
};

export default ServiceSection;
