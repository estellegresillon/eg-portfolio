import React, { useState } from "react";

import "./header.scss";

const Header = () => {
  const [profession, setProfession] = useState("CREATIVE DEVELOPER");

  return (
    <header className="App-header">
      <div className="logo">ESTELLE GRESILLON</div>
      <div
        className="profession"
        onMouseEnter={() => setProfession("💙💙💙")}
        onMouseLeave={() => setProfession("CREATIVE DEVELOPER")}
      >{profession}</div>
      <div className="menu">CHANGE THEME</div>
    </header>
  );
}

export default Header;
