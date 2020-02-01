import React, { useEffect, useRef } from "react";

import "./contact.scss";

const Contact = () => {
  const contact = useRef(null);

  const toggleContactSection = () => {
    const innerHeight = window.innerHeight;
    const distanceFromTop = window.pageYOffset;

    if (distanceFromTop > innerHeight) {
      contact.current.classList.add("transition-on");
    } else {
      contact.current.classList.remove("transition-on");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleContactSection, false);
    return () => window.removeEventListener("scroll", toggleContactSection, false);
  }, []);

  return (
    <section className="contact">
      <div className="contact-infos" ref={contact}>
        <p>estelle.gresillon@gmail.com</p>
        <p>Available april 2020 for freelance</p>
      </div>
    </section>
  );
}

export default Contact;
