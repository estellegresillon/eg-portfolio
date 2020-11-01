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
    url: "https://blog.estellegresillon.fr/",
    icon: "fas fa-rss",
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
    isFreelance: true,
    img: "kardinal",
    date: "May '20 - Now",
    sector: "Logistic & Supply Chain",
    description: [
      "Développement d'une application de tournées",
      "ReactJs / Hooks / NextJs / Typescript",
      "Redux : Selectors / Hooks Redux / Redux Saga",
      "Styled Components & Ant Design pour générer l'UI",
      "Conception de 2 maps interactives avec React MapGl",
      "Refactoring de code",
      "Amélioration des performances du front grâce aux hooks",
      "Intégration d'un service de Websockets",
      "Développement backend Node/NestJs (exposition d'endpoints / architecture CQRS)",
    ],
  },
  {
    name: "Osmo",
    isFreelance: true,
    img: "osmo",
    date: "April '20 - May '20",
    sector: "Education & E-Learning",
    description: [
      "Développement d'une virtual classroom",
      "Cours vidéo du professeur et échange avec ses élèves via chat",
      "Application ReactJs / Hooks",
      "Redux / Redux Saga",
      "Voxeet (video streaming)",
      "SendBird (chat)",
      "Développement d'un service de websockets",
      "Intégration responsive tout devices",
    ],
  },
  {
    name: "Apricity",
    isFreelance: true,
    img: "apricity",
    date: "January '20 - April '20",
    sector: "Health & Fertility",
    description: [
      "Développement d'une application d'accompagnement à la fertilité",
      "ReactJs / NextJs / Typescript",
      "Intégration responsive tout devices",
      "Intégration des nouvelles pages du site institutionnel avec Prismic",
      "Refactoring de code",
      "Collaboration avec le designer pour l'harmonisation de la charte graphique du site",
    ],
  },
  {
    name: "Wifirst",
    isFreelance: false,
    img: "wifirst",
    date: "August '18 - December '19",
    sector: "Télécommunications",
    description: [
      "Développement de plusieurs applications internes",
      "ReactJs / Hooks",
      "Redux / Context React",
      "Création d'un UI Kit type Storybook",
      "Tests unitaires avec Jest & Enzyme",
      "Intégration responsive tout devices",
      "Design UI/UX",
    ],
  },
];
