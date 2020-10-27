import React from "react";

import "./Home.scss";
import HeroScene from "./HeroScene";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => (
  <div id="Home-Page">
    <HeroScene />
    <About />
    <Works />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default Home;
