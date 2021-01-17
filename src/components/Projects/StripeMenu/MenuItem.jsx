import React, { useRef, useEffect } from "react";

const MenuItem = ({ item, background, nav }) => {
  const liRef = useRef(null);
  const dropdownRef = useRef(null);
  const linkRef = useRef(null);

  function handleEnter() {
    this.classList.add("trigger-enter");

    setTimeout(() => {
      if (this.classList.contains("trigger-enter")) {
        this.classList.add("trigger-enter-active");
      }
    }, 150);

    background.current.classList.add("open");
    linkRef.current.style.setProperty("color", "red");

    const dropDownCoords = dropdownRef.current.getBoundingClientRect();
    const navCoords = nav.current.getBoundingClientRect();

    const coords = {
      height: dropDownCoords.height,
      width: dropDownCoords.width,
      top: dropDownCoords.top - navCoords.top,
      left: dropDownCoords.left - navCoords.left,
    };

    background.current.style.setProperty("width", `${coords.width}px`);
    background.current.style.setProperty("height", `${coords.height}px`);
    background.current.style.setProperty(
      "transform",
      `translate(${coords.left}px, ${coords.top}px)`
    );
  }

  function handleLeave() {
    this.classList.remove("trigger-enter", "trigger-enter-active");
    linkRef.current.style.setProperty("color", "black");
    background.current.classList.remove("open");
  }

  useEffect(() => {
    liRef.current.addEventListener("mouseenter", handleEnter);
    liRef.current.addEventListener("mouseleave", handleLeave);
  });

  return (
    <li ref={liRef}>
      <div className="menu-item-title" ref={linkRef}>
        {item.name}
      </div>
      <div ref={dropdownRef} className={`dropdown ${item.name}`}>
        {item.description.map((itm) => (
          <p key={itm}>{itm}</p>
        ))}
      </div>
    </li>
  );
};

export default MenuItem;
