import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./StackedMenu.scss";

const listOfItems = [
  {
    name: "tranmautritam",
    description: "design",
  },
  {
    name: "loisvb",
    description: "art",
  },
  {
    name: "uixninja",
    description: "design",
  },
  {
    name: "itslopez",
    description: "art",
  },
  {
    name: "ui8net",
    description: "design",
  },
  {
    name: "_picolo",
    description: "art",
  },
];

const StackedMenu = () => {
  const itemRef = useRef([]);
  const stackRef = useRef(null);
  const baseScaleChange = 0.033333333;
  const baseTranslateChange = 0.7;

  const handleStackClick = (e) => {
    if (stackRef.current.className === "open") {
      handleBgClick();
      return;
    }
    e.stopPropagation();
    stackRef.current.className = "open";
    itemRef.current.forEach((e, i) => {
      const reverseIndex = itemRef.current.length - 1 - i;
      e.style.transform = `rotate(${reverseIndex * 1.1}deg) translate(-${
        reverseIndex * 0.2
      }rem, -${reverseIndex * 4}rem)`;
    });
  };

  const handleBgClick = () => {
    if (stackRef.current.className === "closed") {
      return;
    }
    stackRef.current.className = "closed";
    itemRef.current.forEach((e, i) => {
      const reverseIndex = itemRef.current.length - 1 - i;
      e.style.transform = `scale(${
        1 - reverseIndex * baseScaleChange
      }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    });
  };

  return (
    <div onClick={handleBgClick} id="Stacked-Menu">
      <h3>Click on the stack below :</h3>
      <div
        ref={stackRef}
        id="stack"
        className="closed"
        onClick={(e) => handleStackClick(e)}
      >
        {listOfItems.map((item, i) => {
          const reverseIndex = listOfItems.length - 1 - i;

          return (
            <div
              style={{
                transform: `scale(${1 - reverseIndex * baseScaleChange}) 
          translateY(-${baseTranslateChange * reverseIndex}rem)`,
              }}
              className="single-block"
              ref={(el) => (itemRef.current[i] = el)}
              key={i}
            >
              <div className="content">
                <i className="fab fa-instagram" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/projects" className="button-goback">
        GO BACK
      </Link>
    </div>
  );
};

export default StackedMenu;
