import Home from "components/Home";
import About from "components/About";
import Contact from "components/Contact";

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
    name: "Contact",
    url: "/contact",
    component: Contact,
  },
];

export const SOCIAL_LINKS = [
  {
    url: "https://www.linkedin.com/in/estellegresillon/",
    icon: "fab fa-linkedin",
  },
  {
    url: "https://dribbble.com/estellegresillon",
    icon: "fab fa-dribbble",
  },
  {
    url: "https://github.com/estellegresillon",
    icon: "fab fa-github-alt",
  },
  {
    url: "mailto:estelle.gresillon@gmail.com",
    icon: "far fa-paper-plane",
  },
];

export const CONTACT_PAGE_WORDS = [
  "an app from scratch",
  "a great feature to develop",
  "some refactoring",
  "a collaboration",
  "an outsanding showcase website ",
  "a brand new app concept ",
  "a breathtaking portfolio ",
  "a cool project ",
];

export const BLOG_URL = "https://blog.estellegresillon.fr";

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
