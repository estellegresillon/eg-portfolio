import React, { useState, useEffect, useRef } from "react";

import "./project-item.scss";

const ProjectItem = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectContainer = useRef(null);
  const imgContainer = useRef(null);

  const moveImage = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    imgContainer.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.5},${distanceFromMiddleY * -0.05},0,1)`;
  }

  useEffect(() => {
    const section = projectContainer.current;
    section.addEventListener("mousemove", moveImage, false);
    return () => section.removeEventListener("mousemove", moveImage, false);
  }, []);

  return (
    <div 
      className={`project-card ${project.img}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={projectContainer}
    >
      <h3>{project.name}</h3>
      {isVisible && 
        <img ref={imgContainer} src={`${project.img}.jpg`} alt={project.img} />}
    </div>
  );
}

export default ProjectItem;
