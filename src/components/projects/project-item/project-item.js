import React, { useEffect, useRef } from "react";
import { Waypoint } from "react-waypoint";
import { Link} from 'react-router-dom';

import "./project-item.scss";
import { useWindowSize } from "../../../hooks/useWindowSize";

const ProjectItem = ({ project }) => {
  const windowSize = useWindowSize();
  const projectContainer = useRef(null);
  const imgContainer = useRef(null);
  const projectTitle = useRef(null);
  const projectSubtitle = useRef(null);
  const projectDescription = useRef(null);

  const handleWaypointEnter = ref => {
    ref.classList.add("transition-project-on");
  };

  const handleWaypointLeave = ref => {
    ref.classList.remove("transition-project-on");
  };

  const moveImage = e => {
    const pageMiddleX = window.innerWidth / 2;
    const pageMiddleY = window.innerHeight / 2;
    const distanceFromMiddleX = e.clientX - pageMiddleX;
    const distanceFromMiddleY = e.clientY - pageMiddleY;

    imgContainer.current.style.transform =
      `matrix3d(1,0,0.00,${distanceFromMiddleX * 0.0000001},0.00,1,0.00,0,0,0,1,0,${distanceFromMiddleX * -0.1},${distanceFromMiddleY * -0.1},0,1)`;
  }

  const moveTitle = () => {
    const containerTop = projectContainer.current.offsetTop
    const distanceFromTop = window.pageYOffset;

    if (project.img === "rafaelbolano" || project.img === "foodlab" || project.img === "otaku") {
      projectTitle.current.style.transform =
        `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.6},0,0,1)`;
      projectSubtitle.current.style.transform =
        `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.6},0,0,1)`;
      projectDescription.current.style.transform =
        `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * -0.6},0,0,1)`;
    } else {
      projectTitle.current.style.transform =
        `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.6},0,0,1)`;
      projectSubtitle.current.style.transform =
        `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.6},0,0,1)`;
      projectDescription.current.style.transform =
        `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,${(distanceFromTop - containerTop) * 0.6},0,0,1)`;
    }
  }

  useEffect(() => {
    if (windowSize.width > 728) {
      const section = projectContainer.current;
      section.addEventListener("mousemove", moveImage, false);
      return () => section.removeEventListener("mousemove", moveImage, false);
    }
  // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (windowSize.width > 728) {
      window.addEventListener("scroll", moveTitle, false);
      return () => window.removeEventListener("scroll", moveTitle, false);
    }
  // eslint-disable-next-line
  }, []);

  return (
    <div 
      className={`project-card ${project.img}`} 
      ref={projectContainer}
    >
      <Link className="project-link" to={project.img}>
        <h2 ref={projectTitle} className="title-stroke">{project.name}</h2>
        <h3 ref={projectDescription} className="title-stroke">{project.description}</h3>
        <h4 className="title-stroke" ref={projectSubtitle}>{project.year}</h4>
        <Waypoint
          onEnter={() => handleWaypointEnter(imgContainer.current)}
          onLeave={() => handleWaypointLeave(imgContainer.current)}
        >
          <img ref={imgContainer} src={`${project.img}-img.jpg`} alt={`${project.name} website preview`} />
        </Waypoint>

        <div aria-hidden="true" className={`circle-project circle-${project.img}`} />
      </Link>
    </div>
  );
}

export default ProjectItem;
