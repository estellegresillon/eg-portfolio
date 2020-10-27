import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";
import CV from "components/CV";

export const PAGES = [
  {
    name: "Home",
    url: "/",
    component: Home,
  },
  {
    name: "About",
    url: "/about",
    component: About,
  },
  {
    name: "CV",
    url: "/cv",
    component: CV,
  },
  {
    name: "Contact",
    url: "/contact",
    component: Contact,
  },
];

export const PROJECTS = [
  {
    name: "Kardinal",
    year: 2020,
    img: "kardinal",
    url: "notlive",
    description: "React App",
  },
  {
    name: "Foodlab",
    year: 2020,
    img: "foodlab",
    url: "https://foodlab.space",
    description: "React App",
  },
  {
    name: "Zest",
    year: 2020,
    img: "zest",
    url: "https://zest.estellegresillon.fr",
    description: "Landing Page",
  },
  {
    name: "Dive In Santorini",
    year: 2019,
    img: "santorini",
    url: "https://santorini.estellegresillon.fr",
    description: "Landing Page",
  },
  {
    name: "Otaku Market",
    year: 2018,
    img: "otaku",
    url: "https://www.otaku-market.com",
    description: "E-commerce",
  },
  {
    name: "That's My Rock",
    year: 2018,
    img: "thatsmyrock",
    url: "http://www.thatsmyrock.com/",
    description: "Rails App",
  },
];
