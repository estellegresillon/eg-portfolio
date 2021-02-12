import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./VirtualTicket.scss";

const VirtualTicket = () => {
  const ticketRef = useRef(null);

  const handleMouseMove = (e) => {
    const { x, y, width, height } = ticketRef.current.getBoundingClientRect();
    const centerPoint = { x: x + width / 2, y: y + height / 2 };

    const degreeX = (e.clientY - centerPoint.y) * 0.04;
    const degreeY = (e.clientX - centerPoint.x) * -0.04;
    ticketRef.current.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="Virtual-Ticket">
      <div ref={ticketRef} className="ticket-visual_visual" id="ticket">
        <div className="left"></div>
        <div className="right"></div>
        <div className="ticket-visual-wrapper">
          <div className="ticket-visual_profile">
            <div className="ticket-profile_profile">
              <img
                src="profile-pic.jpg"
                alt="estellegresillon"
                className="ticket-profile_image"
              />
              <div className="ticket-profile_text">
                <p className="ticket-profile_name">Estelle Grésillon</p>
                <p className="ticket-profile_username">
                  <span className="ticket-profile_githubIcon">
                    <img src="./github.svg" alt="" />
                  </span>
                  estellegresillon
                </p>
              </div>
            </div>
            <div className="ticket-event">
              <img src="/event-logos.png" alt="logo" />
            </div>
          </div>
          <div className="ticket-visual_ticket-number-wrapper">
            <div className="ticket-visual_ticket-number">№ 0001337</div>
          </div>
        </div>
      </div>
      <Link to="/projects" className="button-goback">
        GO BACK
      </Link>
    </div>
  );
};

export default VirtualTicket;
